import React from "react";
import { Row, Col } from "react-bootstrap";
import Section from "components/common/Section";
import SectionHeader from "./SectionHeader";
import { useMediaQuery, useTheme } from "@mui/material";
import { projectData } from "data/projects";
import ProjectService from "./ProjectService";
import { fadeIn, slideIn } from "helpers/motion";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Section id="projects" bg="white">
      <Row
        className={`justify-content-center align-items-center pt-4 ${
          isMatch ? "px-3" : "px-0"
        }`}
      >
        <Col>
          <SectionHeader
            title="Check Out My Recent Projects"
            subtitle="My Work"
            dropCap
            className="justify-content-center text-center"
          />
          {isMatch ? (
            <Row className="g-4 mt-3">
              {projectData.map((service, index) => (
                <Col xs={12} key={service.id + "-" + index}>
                  <motion.div
                    variants={fadeIn("up", "tween", index * 0.5, 0.75)}
                  >
                    <ProjectService {...service} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="g-4 mt-3">
              {projectData.map((service, index) => (
                <Col md={4} xxl={4} key={service.id + "-" + index}>
                  <motion.div
                    variants={fadeIn("up", "tween", index * 0.5, 0.75)}
                  >
                    <ProjectService {...service} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Section>
  );
};

export default Projects;
