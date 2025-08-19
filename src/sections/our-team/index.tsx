import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { teamData } from "../../data";
import type { TTeam } from "../../types";

interface OurTeamSectionProps {
  currentSection: number;
}

const OurTeamSection = ({ currentSection }: OurTeamSectionProps) => {
  return (
    <section
      id="our-team"
      className={`section section-2 ${currentSection === 2 ? "active" : ""}`}
      data-aos="fade-down"
    >
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-light letter-2">Our Team</h2>
          <p className="section-lead mx-auto">
            The visionaries and craftspeople behind every pixel, every line of
            code, and every breakthrough moment.
          </p>
        </div>

        <Row className="g-4 justify-content-center" data-aos="fade-down">
          {teamData?.map((member: TTeam, index: number) => (
            <Col md={6} lg={3} key={index} data-aos="fade-down">
              <Card className="team-member h-100 text-center bg-transparent border-1">
                <Card.Body className="p-4">
                  <div className="member-avatar">{member.avatar}</div>
                  <Card.Title
                    as="h3"
                    className="h5 fw-light mb-2 letter-1 text-white"
                  >
                    {member.name}
                  </Card.Title>
                  <Card.Text className="text-white-50">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeamSection;
