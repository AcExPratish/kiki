// sections/navbar.tsx
import React from "react";
import { Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { sectionsData } from "../../data";
import type { TSection } from "../../types";

interface NavbarSectionProps {
  scrollToSection: (index: number) => void;
  setCursorHover: (hover: boolean) => void;
  currentSection: number;
}

const NavbarSection = ({
  scrollToSection,
  setCursorHover,
  currentSection,
}: NavbarSectionProps) => {
  const [open, setOpen] = React.useState(false);

  const goTo = (index: number) => {
    setOpen(false);
    scrollToSection(index);
  };

  return (
    <Navbar
      id="navbar"
      fixed="top"
      className="custom-navbar px-4 px-md-5 py-3"
      data-aos="fade-down"
    >
      <Navbar.Brand
        onClick={() => goTo(0)}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="brand"
        data-aos="fade-down"
      >
        <div className="logo-x">X</div>
        XELVIAN
      </Navbar.Brand>

      {/* Desktop */}
      <Nav className="ms-auto gap-4 d-none d-md-flex" data-aos="fade-down">
        {sectionsData?.map((item: TSection, index: number) => (
          <Nav.Link
            data-aos="fade-down"
            key={item.id ?? index}
            onClick={() => goTo(index)}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            className={`nav-link-custom ${
              currentSection === index ? "active" : ""
            } text-uppercase`}
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>

      {/* Mobile hamburger */}
      <Button
        data-aos="fade-down"
        variant="outline-light"
        className="d-md-none ms-auto rounded-0 border-1"
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        style={{ borderColor: "rgba(255,255,255,.4)" }}
      >
        <span style={{ display: "inline-block", width: 22 }}>
          <span
            style={{
              display: "block",
              height: 2,
              background: "#fff",
              marginBottom: 5,
            }}
          />
          <span
            style={{
              display: "block",
              height: 2,
              background: "#fff",
              marginBottom: 5,
            }}
          />
          <span style={{ display: "block", height: 2, background: "#fff" }} />
        </span>
      </Button>

      <Offcanvas
        id="mobile-menu"
        show={open}
        onHide={() => setOpen(false)}
        placement="end"
        className="bg-black text-white d-md-none"
        restoreFocus
        scroll={false}
        backdrop
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="d-flex align-items-center gap-2">
            <div className="logo-x">X</div> XELVIAN
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            {sectionsData?.map((item: TSection, index: number) => (
              <Nav.Link
                key={item.id ?? index}
                onClick={() => goTo(index)}
                className={`text-uppercase nav-link-custom ${
                  currentSection === index ? "active" : ""
                }`}
                style={{ fontSize: "1rem" }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarSection;
