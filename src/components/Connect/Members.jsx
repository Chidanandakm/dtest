"use client";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { themeAssetsImages } from "../../../public/images";
import Image from "next/image";

const Members = () => {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col>
          <motion.div
            whileInView={{ x: [0], y: [0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={themeAssetsImages.AllMembers}
              className="w-100 h-100"
              fill
              alt=""
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
