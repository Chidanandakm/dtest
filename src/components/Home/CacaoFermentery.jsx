// "use client";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { themeAssetsImages } from "../../../public/images";

import { motion } from "framer-motion";
import Link from "next/link";
// import MotionWrap from "../../components/MotionWrapper";

const CacaoFermentery = () => {
  return (
    <Container fluid className="px-0 py-xxl-2 my-5 py-lg-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row className="d-none d-lg-block py-xxl-5">
            <Col className="text-center">
              <motion.h2
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-2 fs-xxl-52 fs-xl-44 fs-lg-40"
              >
                DISTINCT ORIGINS CACAO FERMENTERY
              </motion.h2>
              <motion.span
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fst-italic fs-xxl-30 fs-xl-21 fs-lg-20"
              >
                Talikadapudi, West Godavari
              </motion.span>
            </Col>
          </Row>
          <Row className="my-lg-5 my-md-0">
            <Col xs={12} lg={12} className="px-0">
              <div
                className="position-relative w-100"
                style={{ height: "100vh" }}
              >
                <video
                  className="w-100 h-100 object-fit-cover"
                  src={"/videos/cacaofarmentery.mp4"}
                  poster={"/images/CacaoPlaceholder.png"}
                  autoPlay
                  muted
                  loop
                ></video>
                <div className="overlay-play-button d-flex flex-column d-lg-none w-50 text-center">
                  <motion.div
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="fs-3 fs-md-34 fs-xs-20"
                  >
                    DISTINCT ORIGINS CACAO FERMENTERY
                  </motion.div>
                  <motion.span
                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="fst-italic fs-md-20 fs-xs-13"
                  >
                    Talikadapudi, West Godavari
                  </motion.span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 mb-3 justify-content-center gap-sm-5 gap-lg-0">
            <Col xs={10} sm={9} lg={6} className="d-flex flex-column gap-lg-2">
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-xxl-42 fs-xl-35 fs-md-32 fs-xs-17 lh-xxxl-50"
              >
                Taking ownership of post-harvest processes
              </motion.div>
              <motion.hr
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ borderTop: "1.5px dotted #452b2b" }}
              />
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-xxl-22 fs-lg-18 fs-md-20 fs-xs-12 lh-xxxl-40 lh-md-2 lh-xs-20"
              >
                Cacao’s post-harvest processes have been conventionally carried
                out by the farmer, often in rudimentary ways. Recognising their
                vital role in flavour development, we decided to take full
                ownership of these processes at our state-of-the-art Cacao
                Fermentery in West Godavari. This not only ensures meticulous
                control but also relieves the farmers of the cost and effort
                required for these laborious tasks.
              </motion.p>
            </Col>
            <Col
              xs={10}
              sm={9}
              lg={6}
              className="d-flex flex-column gap-lg-2 mt-3 m-sm-0"
            >
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-xxl-42 fs-xl-35 fs-md-32 fs-xs-17 lh-xxxl-50"
              >
                Scientific fermentation and drying protocols
              </motion.div>
              <motion.hr
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ borderTop: "1.5px dotted #452b2b" }}
              />
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-xxl-22 fs-lg-18 fs-md-20 fs-xs-12 lh-xxxl-40 lh-md-2 lh-xs-20"
              >
                We have made significant progress in the fermentation and drying
                processes of  the Indian Cacao through extensive trials. Our
                science-based interventions, enabled by our proprietary
                technology, give us enhanced control to achieve the desired
                flavours consistently. All the processing data is also digitally
                recorded and made available to chocolate makers who wish to
                craft their chocolate from the very beginning.
              </motion.p>
            </Col>
          </Row>
          <Row className="my-lg-5 my-md-3 justify-content-center justify-content-lg-start">
            <Col xs={10} sm={9}>
              <motion.span
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="font-maple fs-xxl-20 fs-lg-17 fs-md-12 fs-xs-10 fw-bold"
              >
                <Link
                  href={"/our-craft"}
                  className="text-decoration-none body-color"
                >
                  EXPLORE OUR PRACTICES <BsArrowRight />
                </Link>
              </motion.span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CacaoFermentery;
