"use client";
import { Container, Row, Col } from "react-bootstrap";

import { BsArrowRight } from "react-icons/bs";
import { themeAssetsImages } from "../../../public/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import MotionWrap from "../../components/MotionWrapper";

const CacaoBeans = () => {
  return (
    <Container fluid className="my-3 my-lg-5 px-0 py-xxl-5">
      <Row
        className="justify-content-center"
        style={{ backgroundColor: "#F1E9DC" }}
      >
        <Col xs={10} md={10} lg={10} className="my-5">
          <Row className="my-lg-4">
            <Col className="text-center">
              <motion.span
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className=" fst-italic fs-xxl-30 fs-xl-23 fs-md-20 fs-xs-16"
              >
                Introducing
              </motion.span>
              <motion.h3
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-2 fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20 pb-3"
              >
                WEST GODAVARI CACAO BEANS
              </motion.h3>
              <motion.div
                className="my-4"
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="font-maple py-sm-2 d-flex justify-content-around align-items-center d-sm-inline"
                  style={{
                    borderTop: "3px dotted #452b2b",
                    borderBottom: "3px dotted #452b2b",
                  }}
                >
                  <span className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10">
                    SINGLE <br className="d-sm-none" />
                    FARM
                  </span>
                  <span className="mx-lg-3 mx-2">|</span>
                  <span className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10">
                    CREATIVE <br className="d-sm-none" />
                    FERMENTATION
                  </span>
                  <span className="mx-lg-3 mx-2">|</span>
                  <span className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10">
                    CUSTOM <br className="d-sm-none" />
                    FERMENTATION
                  </span>
                  <span className="mx-lg-3 mx-2">|</span>
                  <span className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10">
                    SINGLE <br className="d-sm-none" />
                    ORIGIN
                  </span>
                </span>
              </motion.div>
            </Col>
          </Row>
          <Row className="my-lg-5 my-5">
            <Col>
              <motion.div
                whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={themeAssetsImages.GunnyBag}
                  className="h-100 w-100"
                  alt=""
                />
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <motion.span
                className="font-maple fw-bold fs-xxl-20 fs-lg-17 fs-md-12 fs-xs-10"
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={"/products"}
                  className="text-decoration-none body-color"
                >
                  EXPLORE OUR PRODUCTS <BsArrowRight />
                </Link>
              </motion.span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CacaoBeans;
