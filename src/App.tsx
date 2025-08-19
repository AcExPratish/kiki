import React from "react";
import NavbarSection from "./sections/navbar";
import NavigationDots from "./components/NavigationDots";
import HomeSection from "./sections/home";
import OurTeamSection from "./sections/our-team";
import AboutUsSection from "./sections/about-us";
import OurServicesSection from "./sections/our-services";
import Cursor from "./components/CustomCursor";
import { throttle } from "lodash";
import { sectionsData } from "./data";
import Stars from "./components/Stars";
import ContactSection from "./sections/contact";

const totalSections = sectionsData?.length || 0;

const App = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const [cursorPos, setCursorPos] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [cursorHover, setCursorHover] = React.useState<boolean>(false);
  const [currentSection, setCurrentSection] = React.useState<number>(0);

  // Custom cursor tracking
  React.useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }, 16);

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionIndex: number) => {
    if (isScrolling || sectionIndex < 0 || sectionIndex >= totalSections)
      return;

    setIsScrolling(true);
    setCurrentSection(sectionIndex);

    if (containerRef.current) {
      const translateY = -sectionIndex * 100;
      containerRef.current.style.transform = `translateY(${translateY}vh)`;
    }

    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Wheel navigation
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const activeSection = document.querySelector(
        ".section.active"
      ) as HTMLElement | null;
      const hasOverflow =
        !!activeSection &&
        activeSection.scrollHeight > activeSection.clientHeight;
      const isAtTop = !!activeSection && activeSection.scrollTop <= 5;
      const isAtBottom =
        !!activeSection &&
        activeSection.scrollTop + activeSection.clientHeight >=
          activeSection.scrollHeight - 5;

      if (!hasOverflow) {
        e.preventDefault();
        if (e.deltaY > 0 && currentSection < totalSections - 1)
          scrollToSection(currentSection + 1);
        else if (e.deltaY < 0 && currentSection > 0)
          scrollToSection(currentSection - 1);
        return;
      }

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        if (e.deltaY > 0 && currentSection < totalSections - 1 && isAtBottom)
          scrollToSection(currentSection + 1);
        else if (e.deltaY < 0 && currentSection > 0 && isAtTop)
          scrollToSection(currentSection - 1);
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, currentSection]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          if (currentSection < totalSections - 1)
            scrollToSection(currentSection + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          if (currentSection > 0) scrollToSection(currentSection - 1);
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(totalSections - 1);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, currentSection]);

  return (
    <>
      {/* Stars Background */}
      <Stars />

      <div className="page-root">
        <Cursor cursorHover={cursorHover} cursorPos={cursorPos} />

        {/* Navigation */}
        <NavbarSection
          scrollToSection={scrollToSection}
          setCursorHover={setCursorHover}
          currentSection={currentSection}
        />

        {/* Navigation Dots */}
        <NavigationDots
          currentSection={currentSection}
          scrollToSection={scrollToSection}
          setCursorHover={setCursorHover}
        />

        {/* Container that slides */}
        <div ref={containerRef} className="main-container">
          {/* Home */}
          <HomeSection
            currentSection={currentSection}
            scrollToSection={scrollToSection}
          />

          {/* Services */}
          <OurServicesSection currentSection={currentSection} />

          {/* Our Team */}
          <OurTeamSection currentSection={currentSection} />

          {/* About Us */}
          <AboutUsSection
            currentSection={currentSection}
            scrollToSection={scrollToSection}
          />

          {/* Contact */}
          <ContactSection currentSection={currentSection} />
        </div>
      </div>
    </>
  );
};

export default App;
