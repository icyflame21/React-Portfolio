import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "components/common/Section";
import { settings } from "config";
import "../../CSS/GradientText.css";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./SectionHeader";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "helpers/motion";
import ProfileCanvas from "components/common/Profile_Canvas";

const About = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Section bg="white" id="about">
      {isMatch ? (
        <Row className={`justify-content-center align-items-center px-4`}>
          <Col>
            <SectionHeader
              title="About Me"
              subtitle="Why hire me for your next project?"
              dropCap
            />
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="gray1 fs-1 mt-2"
            >
              Experienced full-stack software developer proficient in the MERN
              stack and React-Native, with{" "}
              <span className="fw-bold orange-text-gradient">2 years</span> of
              hands-on experience.
              <br />
              <br />
              Successfully completed{" "}
              <span className="fw-bold orange-text-gradient">4 months</span> of
              freelance projects for clients in India. <br /> <br /> Dedicated
              to continual learning, adept at complex problem-solving, and
              thrive in collaborative environments focused on delivering
              impactful solutions.
            </motion.p>
            <Button
              as="a"
              className="mb-4 fs-0 fw-semi-bold border-0 mt-3 shadow-none violet-gradient rounded px-5 py-2"
              href={settings.resumelink}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <FontAwesomeIcon
                icon={faFileDownload}
                transform="shrink-4 down-1 right-5"
              />
            </Button>
          </Col>
        </Row>
      ) : (
        <Row className={`justify-content-between`}>
          <Col lg={5} xl={5}>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="h-100"
            >
              <ProfileCanvas />
            </motion.div>
          </Col>
          <Col lg={7} xl={7}>
            <SectionHeader
              title="About Me"
              subtitle="Why hire me for your next project?"
            />
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="gray1 fs-1 mt-2"
            >
              Experienced full-stack software developer proficient in the MERN
              stack and React-Native, with{" "}
              <span className="fw-bold orange-text-gradient">2 years</span> of
              hands-on experience.
              <br />
              <br />
              Successfully completed{" "}
              <span className="fw-bold orange-text-gradient">4 months</span> of
              freelance projects for clients in India. <br /> <br /> Dedicated
              to continual learning, adept at complex problem-solving, and
              thrive in collaborative environments focused on delivering
              impactful solutions.
            </motion.p>
            <Button
              as="a"
              className="mb-4 fs-0 fw-semi-bold border-0 mt-3 shadow-none violet-gradient rounded px-5 py-2"
              href={settings.resumelink}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <FontAwesomeIcon
                icon={faFileDownload}
                transform="shrink-4 down-1 right-5"
              />
            </Button>
          </Col>
        </Row>
      )}
    </Section>
  );
};

export default About;
