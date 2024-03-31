import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../CSS/GradientText.css";
import { textVariant } from "helpers/motion";
import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, dropCap, ...rest }) => {
  return (
    <Row {...rest}>
      <Col lg={8} xl={7} xxl={6} className="col-xxl-6">
        <motion.div variants={textVariant()}>
          <p className="fs-1 title_text fw-semi-bold text-capitalize">
            {title}
          </p>
          {!dropCap ? (
            <p className="fs-3 text-capitalize fw-bold info dropcap">
              {subtitle}
            </p>
          ) : (
            <p className="fs-3 text-capitalize fw-bold info">{subtitle}</p>
          )}
        </motion.div>
      </Col>
    </Row>
  );
};

export default SectionHeader;
