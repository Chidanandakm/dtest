import { Container, Row, Col } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { motion } from "framer-motion";
import Image from "next/image";
// import MotionWrap from "../../components/MotionWrapper";

const FarmerCommunity = () => {
  return (
    <Container fluid className="my-5 px-0 py-xxl-5">
      <Row>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img1}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member One"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img1Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member One"
            />
          </motion.span>
        </Col>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img2}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Two"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img2Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member Two"
            />
          </motion.span>
        </Col>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img3}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Three"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img3Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member Three"
            />
          </motion.span>
        </Col>
      </Row>
      <Row>
        <Col
          lg={8}
          sm={12}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="justify-content-center my-5 my-xxl-0">
            <Col xs={10} sm={9} lg={10} xxl={10} className="px-0">
              <motion.span
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="font-ivy fs-xxl-42 fs-xl-35 fs-md-32 fs-xs-20 pb-sm-3 pb-lg-0">
                  100+ CACAO FARMER-MEMBER COMMUNITY
                </h3>
                <p className="font-ivy fs-xxl-22 fs-lg-18 fs-md-20 fs-xs-12 pt-xxl-3 lh-xxxl-40 pe-xxxl-5 lh-md-2 lh-xs-20">
                  We are dedicated to building a sustainable ecosystem for
                  high-quality Indian Cacao. Our farmer-members are carefully
                  selected based on their cultivation and harvest practices, as
                  well as their commitment to upholding strict quality
                  protocols. We ensure that they are paid a significant premium
                  within a 24-hour time span, which is facilitated through our
                  fully transparent digital platform.
                </p>
              </motion.span>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img4}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Four"
            />
          </motion.span>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img5}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Five"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img4Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member Five"
            />
          </motion.span>
        </Col>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img6}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Six"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img5Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member Six"
            />
          </motion.span>
        </Col>
        <Col xs={4} sm={4} lg={4} className="px-0">
          <motion.span
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholder}
              src={themeAssetsImages.img7}
              className="d-xs-none d-sm-none d-lg-block w-100 h-100"
              alt="Member Seven"
            />
            <Image
              // placeholderSrc={themeAssetsImages.MemberPlaceholderMobile}
              src={themeAssetsImages.img6Mobile}
              className="d-lg-none w-100 h-100"
              alt="Member Seven"
            />
          </motion.span>
        </Col>
      </Row>
    </Container>
  );
};

export default FarmerCommunity;
