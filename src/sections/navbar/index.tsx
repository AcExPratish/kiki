import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
  return (
    <Navbar id="navbar" fixed="top" className="custom-navbar px-4 px-md-5 py-3">
      <Navbar.Brand
        onClick={() => scrollToSection(0)}
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="brand"
      >
        <div className="logo-x">X</div>
        XELVIAN
      </Navbar.Brand>

      <Nav className="ms-auto gap-4 d-none d-md-flex">
        {sectionsData?.map((item: TSection, index: number) => (
          <Nav.Link
            key={index}
            onClick={() => scrollToSection(index)}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            className={`nav-link-custom ${
              currentSection === index ? "active" : ""
            } text-uppercase`}
          >
            {item?.label}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavbarSection;
