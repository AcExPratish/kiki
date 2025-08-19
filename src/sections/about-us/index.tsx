import React from "react";
import { Button, Container } from "react-bootstrap";

interface AboutUsSectionProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const AboutUsSection = ({
  currentSection,
  scrollToSection,
}: AboutUsSectionProps) => {
  return (
    <section
      id="about-us"
      className={`section section-3 ${currentSection === 3 ? "active" : ""}`}
    >
      <Container>
        <div className="text-center mx-auto" style={{ maxWidth: 900 }}>
          <h2 className="display-5 fw-light letter-2">About Xelvian</h2>
          <p className="section-lead">
            Founded on the principle of pushing digital boundaries, Xelvian
            represents the convergence of artistic vision and technical
            excellence. We believe in creating experiences that don't just
            function—they inspire.
          </p>
          <p className="section-lead">
            Our approach combines minimalist design philosophy with cutting-edge
            technology to deliver solutions that are both beautiful and
            powerful. Every project is an opportunity to reshape the digital
            landscape and create lasting impact.
          </p>
          <p className="section-lead">
            At Xelvian, we don't just build products—we architect tomorrow's
            digital experiences. Our commitment to precision, performance, and
            elegance drives everything we do.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              onClick={() => scrollToSection(4)}
              className="btn custom-btn btn-primary-custom rounded-0 border-2 py-3 px-5"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection(1)}
              className="btn custom-btn btn-secondary-custom rounded-0 border-2 py-3 px-5"
            >
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
