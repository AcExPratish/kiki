// App.tsx
import React from "react";
import NavbarSection from "./sections/navbar";
import NavigationDots from "./components/NavigationDots"; // optional to keep; we’ll hide it for now
import HomeSection from "./sections/home";
import OurTeamSection from "./sections/our-team";
import AboutUsSection from "./sections/about-us";
import OurServicesSection from "./sections/our-services";
import Cursor from "./components/CustomCursor";
import { throttle } from "lodash";
import Stars from "./components/Stars";
import ContactSection from "./sections/contact";

const App = () => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState<number>(0);

  React.useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }, 16);
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = React.useCallback((index: number) => {
    const ids = ["home", "our-services", "navbar", "about", "contact"];
    const id = ids[index];
    const el = id ? document.getElementById(id) : null;
    if (!el) return;

    const nav = document.getElementById("navbar");
    const offset = (nav?.offsetHeight ?? 0) + 8;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
    setCurrentSection(index);
  }, []);

  React.useEffect(() => {
    const sections = ["home", "our-services", "navbar", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const navH = (document.getElementById("navbar")?.offsetHeight ?? 0) + 16;
      const y = window.scrollY + navH;
      let active = 0;
      sections.forEach((s, i) => {
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        if (y >= top && y < bottom) active = i;
      });
      setCurrentSection(active);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <Stars />
      <div className="page-root">
        <Cursor cursorHover={cursorHover} cursorPos={cursorPos} />

        <NavbarSection
          scrollToSection={scrollToSection}
          setCursorHover={setCursorHover}
          currentSection={currentSection}
        />

        <NavigationDots
          currentSection={currentSection}
          scrollToSection={scrollToSection}
          setCursorHover={setCursorHover}
        />

        <main className="main-container">
          <HomeSection
            currentSection={currentSection}
            scrollToSection={scrollToSection}
          />
          <OurServicesSection currentSection={currentSection} />
          <OurTeamSection currentSection={currentSection} />
          <AboutUsSection
            currentSection={currentSection}
            scrollToSection={scrollToSection}
          />
          <ContactSection currentSection={currentSection} />
        </main>
      </div>
    </>
  );
};

export default App;
