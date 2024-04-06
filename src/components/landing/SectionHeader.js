import React from "react";
import { Row, Col } from "react-bootstrap";
import { textVariant } from "helpers/motion";
import { motion } from "framer-motion";
import { fontSizes } from "helpers/fonts";

const SectionHeader = ({ title, subtitle, dropCap, ...rest }) => {
  return (
    <Row {...rest}>
      <Col lg={8} xl={7} xxl={6} className="col-xxl-6">
        <motion.div variants={textVariant()}>
          <p
            className="text-900 fw-semi-bold text-capitalize"
            style={{ fontSize: fontSizes.subSubheadings }}
          >
            {title}
          </p>
          {!dropCap ? (
            <p
              className="text-capitalize fw-bold blue-text-gradient dropcap"
              style={{ fontSize: fontSizes.subheadings }}
            >
              {subtitle}
            </p>
          ) : (
            <p
              className="text-capitalize fw-bold blue-text-gradient"
              style={{ fontSize: fontSizes.subheadings }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </Col>
    </Row>
  );
};

export default SectionHeader;
