"use client";

import { useState } from "react";
import { Container, Nav, Navbar, Row, Col, Offcanvas } from "react-bootstrap";
import { themeAssetsImages } from "../../public/images";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
// import MotionWrap from "./MotionWrapper";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  // Function to close the drawer
  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <>
      {["xl"].map((expand, i) => (
        <Container key={i} fluid className="my-3 px-0">
          <Row className="justify-content-center">
            <Col
              xxl={11}
              xl={11}
              lg={11}
              md={11}
              sm={11}
              xs={11}
              className="pe-0 ps-sm-0"
            >
              <Navbar key={expand} expand={expand}>
                <Navbar.Brand>
                  <Link href="/">
                    <Image
                      src={themeAssetsImages.BlackLogo}
                      alt=""
                      className={"nav-logo"}
                    />
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  style={{ boxShadow: "none", border: "none" }}
                  onClick={() => setShowDrawer((prevShow) => !prevShow)}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  className={"w-100"}
                  show={showDrawer}
                  style={{ background: "#f5f2ed " }}
                  onHide={handleCloseDrawer}
                >
                  <Offcanvas.Header
                    closeButton
                    className="mb-sm-1 mt-sm-0 mt-lg-2 mx-lg-5 mx-sm-2"
                  >
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                      onClick={handleCloseDrawer}
                    >
                      <Link href="/">
                        <Image
                          src={themeAssetsImages.BlackLogo}
                          alt=""
                          className={"nav-logo"}
                        />
                      </Link>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 nav-links font-maple align-items-xl-center">
                      <hr
                        style={{
                          borderTop: "3px dotted #452b2b",
                        }}
                        className="d-xl-none my-md-3 my-1"
                      />
                      <Link
                        href={"/products"}
                        className="nav-link fs-xxl-18 fs-xl-13 fs-md-20 fs-xs-13 fw-bold px-xxl-4 px-xl-3"
                        onClick={handleCloseDrawer}
                      >
                        PRODUCTS
                      </Link>
                      <hr
                        style={{
                          borderTop: "3px dotted #452b2b",
                        }}
                        className="d-xl-none my-md-3 my-1"
                      />
                      <Link
                        href={"/our-craft"}
                        className="nav-link fs-xxl-18 fs-xl-13 fs-md-20 fs-xs-13 fw-bold px-xxl-4 px-xl-3"
                        onClick={handleCloseDrawer}
                      >
                        OUR CRAFT
                      </Link>
                      <hr
                        style={{
                          borderTop: "3px dotted #452b2b",
                        }}
                        className="d-xl-none my-md-3 my-1"
                      />
                      <Link
                        href={"/connect"}
                        className="nav-link fs-xxl-18 fs-xl-13 fs-md-20 fs-xs-13 fw-bold px-xxl-4 px-xl-3"
                        onClick={handleCloseDrawer}
                      >
                        CONNECT
                      </Link>
                      <hr
                        style={{
                          borderTop: "3px dotted #452b2b",
                        }}
                        className="d-xl-none my-md-3 my-1"
                      />
                      <Link
                        href={"https://manamchocolate.com"}
                        target="_blank"
                        className="nav-link fs-xxl-18 fs-xl-13 fs-md-20 fs-xs-13 fw-bold px-xxl-4 px-xl-3"
                        onClick={handleCloseDrawer}
                      >
                        MANAM WEBSHOP <BsArrowUpRight />
                      </Link>
                      <hr
                        style={{
                          borderTop: "3px dotted #452b2b",
                        }}
                        className="d-xl-none my-md-3 my-1"
                      />
                      <div className="social_icons d-flex justify-content-sm-center py-4">
                        <Image
                          src={themeAssetsImages.inst}
                          className="d-xl-none d-block mx-2"
                          style={{ height: "29px", width: "28px" }}
                          alt=""
                        />
                        <Image
                          src={themeAssetsImages.fb}
                          className="d-xl-none d-block mx-2"
                          style={{ height: "29px", width: "28px" }}
                          alt=""
                        />
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Header;
