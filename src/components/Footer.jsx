"use client";
import { Row, Col, Container, Nav } from "react-bootstrap";
// import { themeAssetsImages } from "public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { themeAssetsImages } from "../../public/images";
// import MotionWrap from "./MotionWrapper";

const Footer = () => {
  return (
    <Container fluid className="px-0 my-5 ">
      <Row className="justify-content-center">
        <Col xxl={10} xl={11} lg={11} sm={10} xs={10}>
          <Row>
            <Col xxl={8} lg={7} className="d-none d-lg-block px-0">
              <Image
                src={themeAssetsImages.CacaoImage}
                className="footer_image"
                loading="lazy"
                alt=""
              />
            </Col>
            <Col xxl={4} lg={5} className="px-0">
              <Row>
                <Col lg={5} xs={6} sm={6} xxl={6}>
                  <Row className="justify-content-between gap-4 gap-sm-5">
                    <Col sm={12}>
                      <Nav className="font-maple flex-column">
                        <Link
                          href="/"
                          className="nav-link body-color fw-bold px-0 py-lg-1 px-lg-1 fs-xxl-17 fs-md-15 fs-xs-10"
                        >
                          HOME
                        </Link>
                        <Link
                          href="/products"
                          className="nav-link body-color fw-bold px-0 py-lg-1 px-lg-1 fs-xxl-17 fs-md-15 fs-xs-10"
                        >
                          PRODUCTS
                        </Link>
                        <Link
                          href="/our-craft"
                          className="nav-link body-color fw-bold px-0 py-lg-1 px-lg-1 fs-xxl-17 fs-md-15 fs-xs-10"
                        >
                          OUR CRAFT
                        </Link>
                        <Link
                          href="/connect"
                          className="nav-link body-color fw-bold px-0 py-lg-1 px-lg-1 fs-xxl-17 fs-md-15 fs-xs-10"
                        >
                          CONNECT
                        </Link>
                        <div className="social_icons d-flex py-2">
                          <Image
                            src={themeAssetsImages.inst}
                            className="me-2 m-lg-2 inst_icon"
                            alt=""
                          />
                          <Image
                            src={themeAssetsImages.fb}
                            className="fb_icon m-lg-2"
                            alt=""
                          />
                        </div>
                      </Nav>
                    </Col>
                    <Col sm={12} className="d-lg-none">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <Image
                          src={themeAssetsImages.BlackLogo}
                          className="manam-footer_logo"
                          alt=""
                        />
                        <Image
                          src={themeAssetsImages.ManamBlackLogo}
                          className="distinct-footer_logo"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={7} xs={6} sm={6} xxl={6}>
                  <Row className="gap-lg-100">
                    <Col lg={12}>
                      <div className="font-maple fs-xxl-17 fs-md-15 fs-xs-10">
                        <div className="fw-bold">CALL US</div>
                        <div>+91 4590 890 009</div>
                        <div>+91 4590 890 009</div>
                      </div>
                      <br />
                      <div className="fs-xxl-17 fs-md-15 fs-xs-10 font-maple">
                        <div className="fw-bold">ADDRESS</div>
                        <p>
                          Distinct Origins Pvt. Ltd.
                          <br />
                          Almond House, Plot No. 490,
                          <br />
                          Phase-VI, KPHB Colony,
                          <br />
                          Kukatpally, Hyderabad,
                          <br />
                          Telangana - 500072
                        </p>
                      </div>
                      <div className="fs-xxl-17 fs-md-15 fs-xs-10 font-maple">
                        <div className="fw-bold">EMAIL</div>
                        <div>hello@distinctorigins.com</div>
                      </div>
                    </Col>
                    <Col lg={12} className="d-lg-block d-none">
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <Image
                          src={themeAssetsImages.ManamBlackLogo}
                          className="manam-footer_logo"
                          alt=""
                        />
                        <Image
                          src={themeAssetsImages.BlackLogo}
                          className="distinct-footer_logo"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
