"use client";
import { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { themeAssetsImages } from "../../../public/images";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import MotionWrap from "../MotionWrapper";
import { motion } from "framer-motion";

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", formData);
  };
  return (
    <Container fluid className="px-0 mt-5 pt-2">
      <Row className="justify-content-center my-lg-5 my-5 my-lg-3">
        <Col lg={11} sm={11} xs={11}>
          <h3 className="fs-xxl-52 fs-xl-44 fs-lg-40 fs-md-34 fs-xs-20">
            SAY HELLO
          </h3>
          <Row>
            <Col sm={12} lg={12}>
              <span className="fst-italic fs-xxl-30 fs-xl-21 fs-lg-20 fs-md-20 fs-xs-13">
                Get in touch for business enquiries, collaborations, features,
                careers and more.
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr
        style={{ borderTop: "3px dotted #452b2b" }}
        className="mt-xxxl-5 mb-3 mb-lg-0"
      ></hr>
      <Row className="justify-content-center">
        <Col lg={11} sm={11} xs={11}>
          <Row>
            <Col lg={6} className="connect_form">
              <Row className="justify-content-start my-lg-5 my-3 gap-5">
                <Col lg={10}>
                  <Form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column gap-4"
                  >
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        placeholder="Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-transparent w-100 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                        style={{
                          boxSizing: "border-box",
                          border: "none",
                          borderBottom: "1px solid #452B2B",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email*"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-transparent w-100 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                        style={{
                          boxSizing: "border-box",
                          border: "none",
                          borderBottom: "1px solid #452B2B",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-transparent w-100 fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                        style={{
                          boxSizing: "border-box",
                          border: "none",
                          borderBottom: "1px solid #452B2B",
                          borderRadius: "0",
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-sm-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                        rows={6}
                        placeholder="Leave us a message*"
                      />
                    </Form.Group>
                    <Button
                      style={{ background: "none", border: "none" }}
                      className="body-color d-flex align-items-center font-maple fw-bold text-start fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12"
                      type="submit"
                    >
                      SEND MESSAGE <BsArrowRightShort size={26} />
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
            <hr
              style={{ borderTop: "3px dotted #452b2b" }}
              className="d-lg-none my-3"
            ></hr>
            <Col lg={6} className="my-lg-5 mt-3 mb-5">
              <Row className="justify-content-end">
                <Col lg={10}>
                  <div className="d-flex flex-column gap-4 gap-lg-5">
                    <div className="fs-xxl-17 fs-md-15 fs-xs-10 font-maple">
                      <div className="fw-bold pb-xl-4 pb-lg-3 pb-3">
                        ADDRESS
                      </div>
                      <p className="mb-0">
                        Distinct Origins Pvt. Ltd., Almond House,
                        <br /> Plot No. 490, Phase-VI, KPHB Colony,
                        <br /> Kukatpally, Hyderabad, Telangana - 500072
                      </p>
                    </div>
                    <div className="font-maple fs-xxl-17 fs-md-15 fs-xs-10">
                      <div className="fw-bold pb-xl-4 pb-lg-3 pb-2">PHONE</div>
                      <div>+91 4590 890 009</div>
                      <div>+91 4590 890 009</div>
                    </div>
                    <div className="fs-xxl-17 fs-md-15 fs-xs-10 font-maple">
                      <div className="fw-bold pb-xl-3 pb-lg-2 pb-3">EMAIL</div>
                      <div>hello@distinctorigins.com</div>
                    </div>
                    <div className="d-flex flex-row gap-3 align-items-center">
                      <Image
                        src={themeAssetsImages.inst}
                        className="inst_icon"
                        alt=""
                      />
                      <Image
                        src={themeAssetsImages.fb}
                        className="fb_icon"
                        alt=""
                      />
                      <span className="fw-bold font-maple fs-xxl-20 fs-lg-17 fs-md-15 fs-xs-12">
                        DISTINCTORIGINS
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={12} sm={12} xs={12}>
          <Image
            src={themeAssetsImages.AllMembers}
            className="w-100 h-100"
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MotionWrap(ConnectForm);
