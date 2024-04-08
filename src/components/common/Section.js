import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { staggerContainer } from "helpers/motion";

const Section = ({
  fluid,
  bg,
  image,
  overlay,
  position,
  video,
  bgClassName,
  className,
  children,
  ...rest
}) => {
  const bgProps = { image, overlay, position, video };
  bgClassName && (bgProps.className = bgClassName);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={classNames({ [`bg-${bg}`]: bg }, className)}
      {...rest}
    >
      <Container fluid={fluid}>{children}</Container>
    </motion.section>
  );
};

Section.defaultProps = {
  fluid: false,
};

export default Section;
