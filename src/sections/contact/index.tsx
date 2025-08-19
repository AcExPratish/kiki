import React from "react";
import { Button, Form } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

interface ContactSectionProps {
  currentSection: number;
}

const ContactSection = ({ currentSection }: ContactSectionProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const button = (e.currentTarget.querySelector(
    //   'button[type="submit"]'
    // ) as HTMLButtonElement)!;
    // const originalText = button.textContent || "Send Message";

    // button.textContent = "Sending...";
    // button.classList.add("btn-sending");

    // setTimeout(() => {
    //   button.textContent = "Message Sent!";
    //   button.classList.remove("btn-sending");
    //   button.classList.add("btn-success");

    //   setTimeout(() => {
    //     button.textContent = originalText;
    //     button.classList.remove("btn-success");
    //     (e.currentTarget as HTMLFormElement).reset();
    //   }, 2000);
    // }, 1500);
  };

  return (
    <section
      id="contact"
      className={`section section-4 ${currentSection === 4 ? "active" : ""}`}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-light letter-2">Contact Us</h2>
          <p className="section-lead mx-auto">
            Ready to build something extraordinary? Let's start the
            conversation.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label className="form-label-light">Name</Form.Label>
                <Form.Control
                  className="form-control-dark rounded-0 py-3"
                  type="text"
                  required
                  placeholder="Your name"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="form-label-light">Email</Form.Label>
                <Form.Control
                  className="form-control-dark rounded-0 py-3"
                  type="email"
                  required
                  placeholder="your@email.com"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="form-label-light">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  required
                  placeholder="Tell us about your vision..."
                  className="form-control-dark rounded-0 py-3"
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn custom-btn btn-primary-custom w-100 rounded-0 border-2 py-3"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
