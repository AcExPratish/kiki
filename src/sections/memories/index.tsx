import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { memoriesData } from "../../data";
import type { TMemory } from "../../types";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemoriesSection = () => {
  const [canPlay, setCanPlay] = React.useState(false);

  React.useEffect(() => {
    const audio = document.getElementById("love-song") as HTMLAudioElement;
    if (!audio) return;

    if (canPlay) {
      audio.play().catch(() => console.log("Autoplay blocked"));
    }
  }, [canPlay]);

  return (
    <section id="our-memories" className="section section-1">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-light letter-2 text-primary">
            Our Love Story ❤️
          </h2>
          <p className="section-lead mx-auto text-primary">
            From shy smiles to forever moments — here’s our journey together.
          </p>

          <div className="d-flex align-items-center justify-content-center gap-2">
            {!canPlay && (
              <button
                onClick={() => setCanPlay(true)}
                className="romantic-btn d-flex align-items-center justify-content-center gap-2"
              >
                <FontAwesomeIcon icon={faMusic} />
                Start Our Love Story
              </button>
            )}

            <audio id="love-song" src="/audio/photograph.mp3" preload="auto" />
          </div>
        </div>

        {canPlay && (
          <Row className="g-4 justify-content-center">
            {memoriesData?.map((memory: TMemory, index: number) => {
              const rotate = (Math.random() * 6 - 3).toFixed(2);
              return (
                <Col
                  key={index}
                  xs={12}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="2000"
                  className="d-flex justify-content-center section"
                  style={{ minWidth: 400 }}
                >
                  <div
                    className="polaroid-card"
                    style={{ transform: `rotate(${rotate}deg)` }}
                  >
                    <img src={memory.image} className="polaroid-img" />
                    <div className="polaroid-caption">
                      <h5 className="fs-9 fw-semibold text-primary">
                        {memory.title}
                      </h5>
                      <p className="small text-primary">{memory.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default MemoriesSection;
