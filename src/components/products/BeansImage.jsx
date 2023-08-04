import { themeAssetsImages } from "../../../public/images";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

const BeansImage = () => {
  return (
    <Container fluid className="px-0 my-5 pt-5">
      <Row className="justify-content-center">
        <Col xl={10}>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8} sm={11} xs={9}>
              <h3 className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20 mb-4 mb-lg-0">
                OUR OFFERINGS
              </h3>
              <p className="fs-xxl-30 fs-xl-21 fs-lg-20 fs-md-20 fs-xs-13 fst-italic lh-lg">
                Calling all chocolate makers to introduce the fine-flavoured
                Indian Cacao to the world through their own unique chocolate
                interpretations.
              </p>
            </Col>
          </Row>
          <motion.div
            whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={themeAssetsImages.GunnyBag}
              className="w-100 h-100"
              alt=""
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default BeansImage;
