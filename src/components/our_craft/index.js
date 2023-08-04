"use client";
import React from "react";
import CacaoBeans from "../Home/CacaoBeans";
import ManamChocolates from "../Home/ManamChocolates";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { OurCraftContent } from "@/utils/OurCraftContent";

const OurCraft = () => {
  return (
    <>
      <Container fluid className="px-0 mt-xl-5 pt-xl-5 mt-5 pt-5 pt-xxxl-6">
        <Row className="justify-content-center">
          <Col xxl={11} xl={11} lg={11} sm={11} xs={10} className="px-0">
            <Row>
              <Col>
                <span className="fst-italic fs-xxl-35 fs-xl-28 fs-lg-24 fs-md-22 fs-xs-16">
                  Our approach
                </span>
                <Row className="mt-2 mt-lg-0">
                  <Col lg={8}>
                    <h2 className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20">
                      CRAFTING THE NEW FINE-FLAVOURED INDIAN CACAO BEAN
                    </h2>
                  </Col>
                </Row>
                <hr
                  style={{ borderTop: "3px dotted #452b2b" }}
                  className="mt-lg-5 mt-5 mt-xxxl-5"
                ></hr>
              </Col>
            </Row>
            {OurCraftContent.map((item) => (
              <motion.div
                key={item.heading + 1}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Row className="justify-content-between my-lg-5 mt-2 mb-4 align-items-lg-start">
                  <Col xxl={3} xl={3} lg={3}>
                    <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20 mb-4 mb-lg-0">
                      {item.heading}
                    </h3>
                  </Col>
                  <Col xxl={4} xl={4} lg={4}>
                    <p className="fs-xxl-22 fs-xl-18 fs-lg-18 font-ivy fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                      {item.paragraphFirst}
                    </p>
                    <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-xs-12 fs-md-20 lh-md-2 lh-xxxl-40 lh-xs-20">
                      {item.paragraphSecond}
                    </p>
                  </Col>
                  <Col xxl={4} xl={4} lg={4}>
                    <video
                      src={item.assets}
                      className="h-100 w-100"
                      autoPlay
                      loop
                      muted
                    ></video>
                  </Col>
                </Row>
                <hr
                  style={{ borderTop: "3px dotted #452b2b" }}
                  className="my-lg-4 mt-xxxl-5 mb-5 mb-lg-0"
                ></hr>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
      <CacaoBeans />
      <ManamChocolates />
    </>
  );
};

export default OurCraft;
