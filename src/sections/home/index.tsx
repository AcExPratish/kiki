//@ts-expect-error - React is not used in this file
import React from "react";
import { Container } from "react-bootstrap";

const HomeSection = () => {
  return (
    <section id="home" className={`section section-0`} data-aos="fade-down">
      <Container className="text-center">
        <h1 className="display-3 hero-title" data-aos="fade-down">
          Happy Birthday, My Love - My Forever Sunshine
        </h1>
        <p className="lead mx-auto mb-5 section-lead" data-aos="fade-down">
          Today the world celebrates you, but I celebrate you every single day.
          You are my laughter, my calm, my chaos, and my greatest blessing. May
          this year bring you the happiness you've already given me a thousand
          times over. Here's a little gift - a collection of our memories,
          wrapped in love, just for you.
        </p>
      </Container>
    </section>
  );
};

export default HomeSection;
