import React from "react";
import { Container } from "react-bootstrap";

const HomeSection = () => {
  const [cakeCut, setCakeCut] = React.useState(false);

  const cutCake = () => {
    if (!cakeCut) {
      setCakeCut(true);
    }
  };

  return (
    <section id="home" className={`section section-0`} data-aos="fade-down">
      <Container className="d-flex flex-column flex-wrap align-items-center justify-content-center gap-4">
        <h5 className="text-primary text-center w-50 fs-9" data-aos="fade-down">
          Happy Birthday, My Love ❤️
        </h5>
        <p
          className="lead mx-auto section-lead text-primary text-center w-50 d-flex flex-column gap-4"
          data-aos="fade-down"
        >
          <span>
            Today the world celebrates you, but I celebrate you every single
            day. You are my laughter, my calm, my chaos, and my greatest
            blessing. May this year bring you the happiness you've already given
            me a thousand times over. Here's a little gift - a collection of our
            memories, wrapped in love, just for you.
          </span>
          <span>
            Also, since this time around we can't celebrate because of grandma's
            untimely death, here's a virtual cake.
          </span>
        </p>
      </Container>

      <div className="cake-container" onClick={cutCake} data-aos="fade-down">
        {!cakeCut ? (
          <div className="cake">🎂</div>
        ) : (
          <div className="cake-split">
            <div className="cake-half cake-left">🍰</div>
            <div className="cake-half cake-right">🍰</div>
          </div>
        )}
      </div>

      {cakeCut && (
        <a
          className="text-primary text-center fw-semibold text-decoration-none"
          href="#our-memories"
        >
          Make a wish! 🌟
        </a>
      )}
    </section>
  );
};

export default HomeSection;
