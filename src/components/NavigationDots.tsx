import React from "react";
import { sectionsData } from "../data";

interface NavigationDotsProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
  setCursorHover: (hover: boolean) => void;
}

const NavigationDots = ({
  currentSection,
  scrollToSection,
  setCursorHover,
}: NavigationDotsProps) => {
  return (
    <div className="nav-dots d-none d-md-flex">
      {[...Array(sectionsData?.length)].map((_, index) => (
        <div
          key={index}
          className={`nav-dot ${currentSection === index ? "active" : ""}`}
          onClick={() => scrollToSection(index)}
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
