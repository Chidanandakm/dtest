// "use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";
import VideoPopup from "@/components/pop_up/VideoPopup";
import { themeAssetsImages } from "../../../public/images";
// import MotionWrap from "../../components/MotionWrapper";

const HeroBanner = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopUp = () => {
    setPopupOpen(true);
  };
  const handleClosePopUp = () => {
    setPopupOpen(false);
  };
  const visible = { opacity: 1, y: 0, transition: { duration: 2 } };
  return (
    <>
      <Container fluid className="px-0 my-xxl-5 my-5">
        <Row className="py-xxl-5 justify-content-center pt-lg-5">
          <Col
            xs={10}
            sm={10}
            className="d-flex justify-content-center pt-lg-5"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.7 } } }}
            >
              <div className="text-center">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible,
                  }}
                  className="fst-italic fs-xxl-35 fs-xl-28 fs-lg-24 fs-md-22 fs-xs-16"
                >
                  In pursuit of
                </motion.span>
                <Row className="justify-content-center pb-xxxl-2 ">
                  <Col sm={8} lg={12}>
                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible,
                      }}
                      className="text-uppercase fs-xxl-65 fs-xl-53 fs-lg-46 fs-md-38 fs-xs-28 font-ivy pb-3 fw-light"
                    >
                      A Fine-flavoured Indian Cacao Bean
                    </motion.h1>
                  </Col>
                </Row>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible,
                  }}
                  className="font-maple py-sm-2 py-xxl-2 py-xxxl-4 py-2 d-flex justify-content-around align-items-center d-sm-inline"
                  style={{
                    borderTop: "3px dotted #452b2b",
                    borderBottom: "3px dotted #452b2b",
                    whiteSpace: "nowrap",
                  }}
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible,
                    }}
                    className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10 lh-xs-12"
                  >
                    STATE-OF-THE-ART <br className="d-sm-none" />
                    FERMENTERY
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible,
                    }}
                    className="mx-0 mx-sm-3"
                  >
                    |
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible,
                    }}
                    className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10 lh-xs-12"
                  >
                    FARMER <br className="d-sm-none" /> DIRECT
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible,
                    }}
                    className="mx-0 mx-sm-3"
                  >
                    |
                  </motion.span>
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible,
                    }}
                    className="fs-xxl-22 fs-lg-16 fs-md-15 fs-xs-10 lh-xs-12"
                  >
                    TRANSPARENT <br className="d-sm-none" />& EQUITABLE
                  </motion.span>
                </motion.span>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col className="p-0 my-5">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible,
              }}
              className="position-relative w-100"
              style={{ height: "100vh" }}
            >
              <video
                className="w-100 p-0 m-0 object-fit-cover h-100 video_desktop"
                src={"/videos/Hero.mp4"}
                poster={"/videos/Hero.mp4"}
                controls={false}
                loop
                autoPlay={true}
                muted
              ></video>
              <span
                className="overlay-play-button font-maple fs-xxl-22 fs-lg-17 fs-md-20 fs-xs-13"
                style={{ whiteSpace: "nowrap" }}
                onClick={handleOpenPopUp}
              >
                <BsFillPlayFill
                  size={50}
                  style={{ marginRight: "5px" }}
                  className="d-xs-none d-sm-none d-lg-block"
                />
                <BsFillPlayFill
                  size={35}
                  style={{ marginRight: "5px" }}
                  className="d-lg-none"
                />
                PLAY FILM
              </span>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <VideoPopup
        open={isPopupOpen}
        onClose={handleClosePopUp}
        src={"/videos/Hero.mp4"}
      />
    </>
  );
};

export default HeroBanner;
