import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface HomeSectionProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const HomeSection = ({ currentSection, scrollToSection }: HomeSectionProps) => {
  return (
    <section
      id="home"
      className={`section section-0 ${currentSection === 0 ? "active" : ""}`}
    >
      <Container className="text-center">
        <div className="big-x">X</div>
        <h1 className="display-3 hero-title">Architects of Tomorrow</h1>
        <p className="lead mx-auto mb-5 section-lead">
          We craft bold digital experiences with precision, performance, and
          minimalist elegance. Where vision meets execution, Xelvian transforms
          ideas into extraordinary realities.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button
            onClick={() => scrollToSection(1)}
            className="btn custom-btn btn-primary-custom rounded-0 border-2 py-3 px-5"
          >
            Our Services
          </Button>
          <Button
            onClick={() => scrollToSection(2)}
            className="btn custom-btn btn-secondary-custom rounded-0 border-2 py-3 px-5"
          >
            Meet Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
