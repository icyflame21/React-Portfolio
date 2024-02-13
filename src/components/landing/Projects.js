import React from "react";
import { Row, Col } from "react-bootstrap";
import Section from "components/common/Section";
import SectionHeader from "./SectionHeader";
import { useMediaQuery, useTheme } from "@mui/material";
import { projectData } from "data/projects";
import ProjectService from "./ProjectService";

const Projects = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Section id="projects" bg="light">
      <Row
        className={`justify-content-center align-items-center ${
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
                  <ProjectService {...service} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="g-4 mt-3">
              {projectData.map((service, index) => (
                <Col md={6} xxl={6} key={service.id + "-" + index}>
                  <ProjectService {...service} />
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
