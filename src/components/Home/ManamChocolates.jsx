"use client";
import { Col, Container, Row } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import MotionWrap from "../../components/MotionWrapper";

const ManamChocolates = () => {
  return (
    <Container fluid className="px-0 my-lg-5 py-xxl-5">
      <Row className=" justify-content-center">
        <Col
          xs={10}
          sm={9}
          className="text-left my-xxl-4 py-5 d-lg-none justify-content-center my-sm-5"
        >
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={themeAssetsImages.ManamBlackLogo}
              className="h-50 w-50"
              alt=""
            />
            <p className="font-ivy mt-3 fs-md-20 fs-xs-12 lh-xs-20">
              Discover the West Godavari cacao bean in all its complexities,
              flavours and textures, crafted into a magnificent universe of 250+
              unique products.
            </p>
            <p className="font-ivy mt-3 fs-md-20 fs-xs-12 lh-xs-20">
              Come and be a part of this bold new Indian Craft Chocolate
              experience at the Manam Chocolate Karkhana, Hyderabad, India.
            </p>
            <span className="fs-md-12 fs-xs-10 font-maple fw-bold">
              <Link
                href={"https://manamchocolate.com"}
                className="text-decoration-none body-color"
                target={"_blank"}
              >
                MANAM WEBSHOP <BsArrowUpRight />
              </Link>
            </span>
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
              src={themeAssetsImages.ManamImage}
              className="h-100 w-100"
              alt=""
            />
            <Col
              lg={5}
              xl={5}
              xxl={5}
              className="overlay-text font-maple d-flex flex-column justify-content-lg-start"
            >
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="d-none d-lg-block p-5"
              >
                <div>
                  <Image
                    src={themeAssetsImages.ManamWhiteLogo}
                    className="h-50 w-50"
                    alt=""
                  />
                </div>
                <p className="font-ivy fs-xxl-22 fs-lg-18 mt-4 lh-xxxl-40 lh-md-2">
                  Discover the West Godavari cacao bean in all its complexities,
                  flavours and textures, crafted into a magnificent universe of
                  250+ unique products.
                </p>
                <p className="font-ivy fs-xxl-22 fs-lg-18 mt-3 mb-lg-5 lh-xxxl-40 lh-md-2">
                  Come and be a part of this bold new Indian Craft Chocolate
                  experience at the Manam Chocolate Karkhana, Hyderabad, India.
                </p>
                <span className="fs-xxl-20 fs-lg-17">
                  <Link
                    href={"https://manamchocolate.com"}
                    className="text-decoration-none text-white"
                    target={"_blank"}
                  >
                    MANAM WEBSHOP <BsArrowUpRight />
                  </Link>
                </span>
              </motion.div>
            </Col>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ManamChocolates;
