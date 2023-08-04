import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { productPageContent } from "@/utils/ProductPageContent";
import Image from "next/image";

const ProductsInfo = () => {
  return (
    <Container fluid className="px-0">
      <Row className="justify-content-center my-5 pb-sm-4 pb-lg-0">
        <Col lg={11} xs={10}>
          <motion.div
            whileInView={{ x: [200, 0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Row>
              <Col className="px-0" lg={6} xs={12}>
                <motion.div
                  whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    alt=""
                    src={productPageContent[0].image}
                    className="h-100 w-100"
                  />
                </motion.div>
              </Col>
              <Col lg={6} xs={12} className="px-0 bg-white">
                <Row className="justify-content-center h-100">
                  <Col
                    lg={9}
                    xs={10}
                    className="px-0 pe-lg-5 my-xl-64 my-lg-5 my-4 my-sm-5"
                  >
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="pb-5">
                        <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20">
                          {productPageContent[0].heading}
                        </h3>
                        <p>{productPageContent[0].desc}</p>
                        <hr
                          style={{ borderTop: "3px dotted #452b2b" }}
                          className="mt-3 mt-lg-4"
                        />
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20 pb-lg-4">
                          {productPageContent[0].paragraph1}
                        </p>
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                          {productPageContent[0].paragraph2}
                        </p>
                      </div>
                      <div className="d-flex align-items-end">
                        <span className="fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12 font-maple fw-bold ms-sm-3 mb-3">
                          ENQUIRE
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5 pb-sm-4 pb-lg-0">
        <Col lg={11} xs={10}>
          <motion.div
            whileInView={{ x: [-200, 0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Row className="flex-lg-row flex-column-reverse">
              <Col lg={6} xs={12} className="px-0 bg-white">
                <Row className="justify-content-center h-100">
                  <Col
                    lg={9}
                    xs={10}
                    className="px-0 pe-lg-5 my-xl-64 my-lg-5 my-sm-5 my-4"
                  >
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="pb-5">
                        <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20">
                          {productPageContent[1].heading}
                        </h3>
                        <p>{productPageContent[1].desc}</p>
                        <hr
                          style={{ borderTop: "3px dotted #452b2b" }}
                          className="mt-3 mt-lg-4"
                        />
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20 pb-lg-4">
                          {productPageContent[1].paragraph1}
                        </p>
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                          {productPageContent[1].paragraph2}
                        </p>
                      </div>
                      <div className="d-flex align-items-end">
                        <span className="fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12 font-maple fw-bold ms-sm-3 mb-3">
                          ENQUIRE
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={6} className="px-0">
                <motion.div
                  whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    alt=""
                    src={productPageContent[1].image}
                    className="h-100 w-100"
                  />
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5 pb-sm-4 pb-lg-0">
        <Col lg={11} xs={10}>
          <motion.div
            whileInView={{ x: [200, 0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Row>
              <Col lg={6} xs={12} className="px-0">
                <motion.div
                  whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    alt=""
                    src={productPageContent[2].image}
                    className="h-100 w-100"
                  />
                </motion.div>
              </Col>
              <Col lg={6} xs={12} className="px-0 bg-white">
                <Row className="justify-content-center h-100">
                  <Col
                    lg={9}
                    xs={10}
                    className="px-0 pe-lg-5 my-xl-64 my-lg-5 my-4 my-sm-5"
                  >
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="pb-5">
                        <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20">
                          {productPageContent[2].heading}
                        </h3>
                        <p>{productPageContent[2].desc}</p>
                        <hr
                          style={{ borderTop: "3px dotted #452b2b" }}
                          className="mt-3 mt-lg-4"
                        />
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20 pb-lg-4">
                          {productPageContent[2].paragraph1}
                        </p>
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                          {productPageContent[0].paragraph2}
                        </p>
                      </div>
                      <div className="d-flex align-items-end">
                        <span className="fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12 font-maple fw-bold ms-sm-3 mb-3">
                          ENQUIRE
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5 pb-sm-4 pb-lg-0">
        <Col lg={11} xs={10}>
          <motion.div
            whileInView={{ x: [-200, 0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Row className="flex-lg-row flex-column-reverse">
              <Col lg={6} xs={12} className="px-0 bg-white">
                <Row className="justify-content-center h-100">
                  <Col
                    lg={9}
                    xs={10}
                    className="px-0 pe-lg-5 my-xl-64 my-lg-5 my-4 my-sm-5"
                  >
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="pb-5">
                        <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20">
                          {productPageContent[3].heading}
                        </h3>
                        <p>{productPageContent[3].desc}</p>
                        <hr
                          style={{ borderTop: "3px dotted #452b2b" }}
                          className="mt-3 mt-lg-4"
                        />
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20 pb-lg-4">
                          {productPageContent[3].paragraph1}
                        </p>
                        <p className="fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 lh-md-2 lh-xxxl-40 lh-xs-20">
                          {productPageContent[3].paragraph2}
                        </p>
                      </div>
                      <div className="d-flex align-items-end">
                        <span className="fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12 font-maple fw-bold ms-sm-3 mb-3">
                          ENQUIRE
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} xs={12} className="px-0">
                <motion.div
                  whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    alt=""
                    src={productPageContent[3].image}
                    className="h-100 w-100"
                  />
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsInfo;
