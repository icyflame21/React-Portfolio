import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "components/common/Section";
import { bgWhiteIcons } from "data/socialIcons";
import { settings } from "config";
import Flex from "components/common/Flex";
import { AnimateText } from "./AnimateText";
import StarsCanvas from "./Stars";
import { fontSizes } from "helpers/fonts";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Hero = () => {
  const animatedText =
    "Am a dedicated software artisan from India with a passion for crafting and extensive experience in constructing web applications.";
  return (
    <LazyLoadComponent>
      <Section className="bg-light">
        <StarsCanvas />
        <Row className={`justify-content-center align-items-center vh-100`}>
          <Col md={7} xxl={7} className="text-center" style={{ zIndex: 100 }}>
            <p
              className="orange-text-gradient fw-semi-bold "
              style={{ fontSize: fontSizes.subheadings }}
            >
              Frontend Developer
            </p>
            <h1
              className="fw-bold gray1"
              style={{ fontSize: fontSizes.mainTitle }}
            >
              Hey I'm <br />
              <span className="blue-text-gradient">Biswaranjan Subudhi</span>
            </h1>
            <p
              className=" mt-5 gray1"
              style={{ fontSize: fontSizes.subSubheadings }}
            >
              <AnimateText animatedText={animatedText} />
            </p>
            <Flex alignItems="center" className="justify-content-center mt-2">
              <Button
                as="a"
                className="mb-4 fw-semi-bold border-0 mt-3 shadow-none button violet-gradient px-4 py-2 rounded"
                href={settings.gmail}
                style={{ fontSize: fontSizes.buttonText }}
                target="_blank"
                rel="noreferrer"
              >
                Hire Me
                <FontAwesomeIcon
                  icon={faPlay}
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
    </LazyLoadComponent>
  );
};

export default Hero;
