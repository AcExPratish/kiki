import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { servicesData } from "../../data";
import type { TService } from "../../types";

interface OurServicesSectionProps {
  currentSection: number;
}

const OurServicesSection = ({ currentSection }: OurServicesSectionProps) => {
  return (
    <section
      id="our-services"
      className={`section section-1 ${currentSection === 1 ? "active" : ""}`}
      data-aos="fade-down"
    >
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-light letter-2">Our Services</h2>
          <p className="section-lead mx-auto">
            Cutting-edge solutions that transform visions into digital realities
          </p>
        </div>

        <Row className="g-4" data-aos="fade-down">
          {servicesData?.map((service: TService, index: number) => (
            <Col md={6} lg={4} key={index} data-aos="fade-down">
              <Card className="service-card h-100 text-white bg-transparent border-1">
                <Card.Body className="text-center p-4">
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <Card.Title as="h3" className="h5 fw-light mb-3 letter-1">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-white-50">
                    {service.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServicesSection;
