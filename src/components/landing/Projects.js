import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Section from "components/common/Section";
import SectionHeader from "./SectionHeader";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { projectData } from "data/projects";
import ProjectService from "./ProjectService";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Projects = () => {
  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <LazyLoadComponent>
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
            <Card>
              <Card.Body className="p-0 overflow-hidden">
                <Row className="mt-3">
                  {projectData.map((service, index) => (
                    <ProjectService
                      service={service}
                      key={service.id + "-" + index}
                      index={index}
                    />
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Section>
    </LazyLoadComponent>
  );
};

export default Projects;
