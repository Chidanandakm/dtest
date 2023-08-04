// "use client";
import { Container, Row, Col } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import MotionWrap from "../../components/MotionWrapper";

const IndianCacao = () => {
  return (
    <Container fluid className="my-xxl-5 my-3 pt-lg-4 pb-lg-5 my-lg-5 px-0">
      <Row className="justify-content-center">
        <Col xs={10} sm={9} lg={10} xxl={10}>
          <Row className="justify-content-lg-center">
            <Col lg={5} className="px-0">
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="text-xl-start ms-xl-5 ms-lg-0"
              >
                <Image
                  src={themeAssetsImages.CacaoImage}
                  alt=""
                  width={"100%"}
                  className="cacao_image"
                />
              </motion.div>
            </Col>
            <Col lg={7} className="px-0">
              <div className="text-start my-4 my-lg-0 d-flex flex-column">
                <motion.h2
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20"
                >
                  Unlocking the Indian Cacao’s flavour potential
                </motion.h2>
                <motion.p
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="fst-italic fs-xxl-30 fs-xl-21 fs-lg-20 m-0"
                >
                  A new model for a new Indian Cacao
                </motion.p>
                <motion.hr
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  style={{ borderTop: " 1.5px dotted #452b2b" }}
                  className="my-lg-4 mt-xxxl-5"
                ></motion.hr>
                <motion.p
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="fs-xxl-22 fs-lg-18 fs-md-20 fs-xs-12 lh-xxxl-40 lh-md-2 lh-xs-20"
                >
                  Introduced in the 1960s by a multinational corporation, cacao
                  arrived in India primarily as an industrial chocolate
                  ingredient. Unfortunately, over the last 60 years, Indian
                  Cacao’s flavour has suffered significantly, as productivity
                  became the sole focus.
                </motion.p>
                <motion.p
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="fs-xxl-22 fs-lg-18 fs-md-20 fs-xs-12 p-custom lh-xxxl-40 lh-md-2 lh-xs-20"
                >
                  At Distinct Origins, we are shifting the focus back to the
                  Indian Cacao’s untapped flavour potential. Through long-term
                  partnerships with our 100+ farmer-member community and radical
                  advancements in fermentation and drying techniques at our
                  one-of-a-kind Cacao Fermentery, we are unlocking a new world
                  of flavours for craft chocolate makers around the globe.
                </motion.p>
                <motion.span
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="fw-bold fs-xxl-20 fs-lg-17 fs-md-12 fs-xs-12 font-maple my-3"
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    href={"/products"}
                    className="text-decoration-none body-color"
                  >
                    EXPLORE OUR BEANS <BsArrowRight />
                  </Link>
                </motion.span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default IndianCacao;
