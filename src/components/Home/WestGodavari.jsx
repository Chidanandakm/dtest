import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
// import MotionWrap from "../../components/MotionWrapper";

const WestGodavari = () => {
  return (
    <Container fluid className="px-0 my-xxl-5">
      <Row className=" justify-content-center">
        <Col lg={12} className="px-0 my-3">
          <div className="position-relative" style={{ height: "100vh" }}>
            <video
              className="w-100 p-0 m-0 h-100 object-fit-cover"
              src={"/videos/WestGodavariVideo.mp4"}
              poster={"/images/WestGodavariPlaceholder.png"}
              controls={false}
              autoPlay={true}
              loop
              muted
            ></video>
            <div className="overlay-container">
              <Row className="align-items-center justify-content-center">
                <Col xxl={11} lg={10} xl={10}>
                  <Row className="align-items-center">
                    <Col>
                      <Image src={"/images/Map.png"} alt="" fill />
                    </Col>
                    <Col className="d-none d-lg-block ms-xxxl-4">
                      <div className="ms-xxxl-10 pe-xl-5 pe-xxxl-0">
                        <motion.h2
                          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="fs-xxl-42 fs-xl-35 fs-lg-32"
                        >
                          WEST GODAVARI
                        </motion.h2>
                        <motion.p
                          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="fst-italic fs-xxl-30 fs-xl-21 fs-lg-20 "
                        >
                          A new origin for the world to discover
                        </motion.p>
                        <hr
                          style={{
                            borderTop: "3px dotted #FFFFFF",
                          }}
                        />
                        <motion.p
                          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="font-ivy fs-xxl-22 fs-lg-18 lh-xxxl-40 lh-md-2"
                        >
                          Our journey begins in the fertile West Godavari region
                          of Andhra Pradesh, India. Blessed by the River
                          Godavari, this land sustains abundant cacao growth
                          with a distinct flavour profile. The cacao is farmed
                          amidst lush tropical flora such as banana, areca nut
                          and long pepper, which lend unique flavour nuances to
                          our cacao.
                        </motion.p>
                        <motion.p
                          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="font-ivy fs-xxl-22 fs-lg-18 lh-xxxl-40 lh-md-2"
                        >
                          Although it is the largest cacao-growing region in the
                          country, it is still relatively unknown as a
                          fine-flavoured cacao origin owing to its industrial
                          focus. At Distinct Origins, we aim to change that and
                          bring recognition to this exceptional origin and its
                          remarkable produce.
                        </motion.p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={10} sm={9} lg={10} className="d-lg-none my-4">
          <Row>
            <Col>
              <motion.h2
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-md-32 fs-xs-20"
              >
                WEST GODAVARI
              </motion.h2>
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                class="fst-italic fs-md-20 fs-xs-13"
              >
                A new origin for the world to discover
              </motion.p>
              <hr
                style={{
                  borderTop: "3px dotted #452b2b",
                }}
                className="my-4"
              />
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="font-ivy fs-md-20 fs-xs-12 lh-md-2 lh-xs-20"
              >
                Our journey begins in the fertile West Godavari region of Andhra
                Pradesh, India. Blessed by the River Godavari, this land
                sustains abundant cacao growth with a distinct flavour profile.
                The cacao is farmed amidst lush tropical flora such as banana,
                areca nut and long pepper, which lend unique flavour nuances to
                our cacao.
              </motion.p>
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="font-ivy fs-md-20 fs-xs-12 lh-md-2 lh-xs-20"
              >
                Although it is the largest cacao-growing region in the country,
                it is still relatively unknown as a fine-flavoured cacao origin
                owing to its industrial focus. At Distinct Origins, we aim to
                change that and bring recognition to this exceptional origin and
                its remarkable produce.
              </motion.p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WestGodavari;
