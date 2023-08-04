// "use client";
import { Container, Row, Col } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { motion } from "framer-motion";
import Image from "next/image";
// import MotionWrap from "../../components/MotionWrapper";

const TracebelBeans = () => {
  return (
    <Container fluid className="my-4 my-lg-5 px-0 py-xxl-5 py-sm-5">
      <Row className="justify-content-center">
        <Col xs={10} sm={9} lg={11}>
          <Row className="my-xxl-5">
            <Col>
              <motion.span
                whileInView={{ y: [100, 50, 0], x: [0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fst-italic fs-xxl-30 fs-xl-23 fs-md-20 fs-xs-16"
              >
                End-to-end
              </motion.span>
              <motion.h3
                whileInView={{ y: [100, 50, 0], x: [0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20"
              >
                TRACEABLE BEANS
              </motion.h3>
            </Col>
          </Row>
          <Row className="my-3">
            <Col lg={7}>
              <motion.div whileInView={{ x: [0], y: [0], opacity: [0, 1] }}>
                <Image
                  src={themeAssetsImages.TraceableBeanImage}
                  className="h-100 w-100"
                  alt=""
                />
              </motion.div>
            </Col>
            <Col
              lg={5}
              className="d-flex justify-content-end flex-column ps-lg-2 mt-3 fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 gap-sm-4 gap-lg-0"
            >
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="lh-xxxl-40 lh-md-2 lh-xs-20"
              >
                We practise complete transparency with our cacao bean supply
                chain, which we believe is crucial to empowering our farmers,
                chocolate makers, and consumers.
              </motion.p>
              <motion.p
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="lh-xxxl-40 pb-xxxl-2 lh-md-2 pb-xl-sm lh-xs-20"
              >
                Every part of our bean’s journey is meticulously recorded on our
                blockchain-enabled platform; right from the farm and the farmer,
                to the purchase transaction, to the harvest date, to all the
                post-harvest processes carried out at our Cacao Fermentery until
                it’s packed and shipped to finally reach you.
              </motion.p>
              <motion.hr
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                style={{ borderTop: "1.5px dotted #452b2b" }}
                className="d-none d-lg-block m-lg-0"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TracebelBeans;
// export default MotionWrap(TracebelBeans);
