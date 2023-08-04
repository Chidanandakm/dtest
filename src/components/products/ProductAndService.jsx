"use client";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { themeAssetsImages } from "../../../public/images";
import Image from "next/image";

const ProductAndService = () => {
  return (
    <Container fluid className="px-0 my-5">
      <Row className="justify-content-center">
        <Col lg={11} xs={10} className="px-0">
          <motion.div
            whileInView={{ x: [-200, 0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="product_page_border"
          >
            <Row>
              <Col lg={7} xs={12} className="px-0">
                <Row className=" justify-content-center align-items-center h-100">
                  <Col lg={9} xs={9} className="px-0 my-lg-0 my-5">
                    <div>
                      <Row>
                        <Col lg={9}>
                          <h3 className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20 mb-lg-5 mb-4">
                            Enquire about our Products & Services
                          </h3>
                        </Col>
                      </Row>
                      <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                        Leave us your details and we’ll reach out to you
                        shortly.
                      </p>
                      <Row>
                        <Col xl={10}>
                          <div>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  className="font-maple p-sm-3 p-2 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                                  style={{
                                    borderRadius: "0",
                                    border: "1px solid #452b2b",
                                  }}
                                />
                              </Form.Group>

                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Control
                                  type="email"
                                  placeholder="Email Address"
                                  className="font-maple p-sm-3 p-2 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                                  style={{
                                    borderRadius: "0",
                                    border: "1px solid #452b2b",
                                  }}
                                />
                              </Form.Group>
                              <Button
                                style={{ background: "none", border: "none" }}
                                className="body-color font-maple fw-bold text-start p-0 pt-3 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                                type="submit"
                              >
                                SEND <BsArrowRight />
                              </Button>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} xs={12}>
                <Image
                  alt=""
                  src={themeAssetsImages.ProductImage5}
                  className="h-100 w-100"
                />
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductAndService;
