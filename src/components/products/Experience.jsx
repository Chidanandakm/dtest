// "use client";
import { Col, Container, Row } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { motion } from "framer-motion";
import Image from "next/image";
// import MotionWrap from "../../components/MotionWrapper";

const Experience = () => {
  return (
    <>
      <hr
        style={{ borderTop: "3px dotted #452b2b" }}
        className="mt-0 d-sm-none"
      />
      <Container fluid className="px-0 my-lg-5 py-xxl-5 py-sm-0 py-5">
        <Row className=" justify-content-center">
          <Col
            xs={10}
            sm={9}
            className="text-left my-xxl-4 d-lg-none justify-content-center my-sm-5"
          >
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20 font-ivy">
                COME EXPERIENCE OUR CRAFT
              </h3>
              <p className="font-ivy fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 pt-4 pb-4 pb-sm-0">
                Visit the farm, meet the farmers, take a tour of our fermentery.
                Witness first-hand the journey of the Indian Cacao from a fruit
                to a fine-flavoured bean.
              </p>
            </motion.div>
          </Col>
          <Col lg={12} className="px-0">
            <motion.div
              className="position-relative"
              whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                // placeholderSrc={themeAssetsImages.HeroPlaceholder}
                src={themeAssetsImages.ExperienceImg}
                className="h-100 w-100 object-fit-cover d-none d-lg-block"
                alt=""
              />
              <Image
                // placeholderSrc={themeAssetsImages.HeroPlaceholder}
                src={themeAssetsImages.ExperienceImgMobile}
                className="h-100 w-100 d-lg-none"
                alt=""
              />
              <Col
                lg={5}
                xl={5}
                xxl={5}
                className="overlay-text font-maple d-flex flex-column justify-content-lg-start"
                style={{ background: "none", padding: "0 30px" }}
              >
                <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="d-none d-lg-block p-5"
                >
                  <h3 className="fs-xxl-42 fs-xl-35 fs-lg-32 fs-md-32 fs-xs-20 font-ivy">
                    COME EXPERIENCE OUR CRAFT
                  </h3>
                  <p className="font-ivy fs-xxl-22 fs-xl-18 fs-lg-18 fs-md-20 fs-xs-12 pt-4">
                    Visit the farm, meet the farmers, take a tour of our
                    fermentery. Witness first-hand the journey of the Indian
                    Cacao from a fruit to a fine-flavoured bean.
                  </p>
                </motion.div>
              </Col>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <hr
        style={{ borderTop: "3px dotted #452b2b" }}
        className="m-0 d-sm-none"
      />
    </>
  );
};

export default Experience;
