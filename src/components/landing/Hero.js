import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "components/common/Section";
import { bgWhiteIcons } from "data/socialIcons";
import { settings } from "config";
import Flex from "components/common/Flex";
import "../../CSS/GradientText.css";
import { motion } from "framer-motion";
import { AnimateText } from "./AnimateText";
import StarsCanvas from "./Stars";

const Hero = () => {
  const animatedText =
    "Am a dedicated software artisan from India with a passion for crafting and extensive experience in constructing web applications.";
  return (
    <Section bg="dark">
      <StarsCanvas />
      <Row className={`justify-content-center align-items-center vh-100`}>
        <Col md={7} xxl={7} className="text-center" style={{ zIndex: 100 }}>
          <p className="fs-2 orange-text-gradient fw-semi-bold ">
            Frontend Developer
          </p>
          <h1 className="fw-bold text-white">
            Hey I'm <br />
            <span className="blue-text-gradient">Biswaranjan Subudhi</span>
          </h1>
          <p className=" mt-5 text-white" style={{ fontSize: "20px" }}>
            <AnimateText animatedText={animatedText} />
          </p>
          <Flex alignItems="center" className="justify-content-center mt-2">
            <Button
              as="a"
              className="mb-4 fs-0 fw-semi-bold border-0 mt-3 shadow-none button violet-gradient px-4 py-2 rounded"
              href={settings.gmail}
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
              <FontAwesomeIcon
                icon="play"
                transform="shrink-4 down-1 right-5"
              />
            </Button>
          </Flex>
          <Flex
            alignItems="center"
            className="gap-3 mt-2 justify-content-center"
          >
            {bgWhiteIcons.map(({ id, icon, href, ariaLabel }) => (
              <Button
                key={id}
                as="a"
                target="_blank"
                href={href}
                variant="falcon-default"
                type="button"
                size="sm"
                className="icon-item icon-item-lg fs-2 bg-white"
                aria-label={ariaLabel}
              >
                {icon}
              </Button>
            ))}
          </Flex>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
