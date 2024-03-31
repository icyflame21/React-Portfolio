import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Section from "components/common/Section";
import "../../CSS/GradientText.css";
import SectionHeader from "./SectionHeader";
import { VerticalTimelineData } from "data/timeline";
import classNames from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "helpers/motion";

const Background = () => {
  const handleItalic = (text) => {
    const parts = text.split("@");
    const modifiedText =
      parts.length === 2 ? (
        <>
          {parts[0]}@<span className="fs-1 pink-text-gradient">{parts[1]}</span>
        </>
      ) : (
        text
      );
    return <h5 className="mb-2 text-black fs-1">{modifiedText}</h5>;
  };

  const handleColorPresentYr = (year) => {
    return <p className="fs-0 mb-0 fw-semi-bold text-black">{year}</p>;
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Section id="background" bg="white">
      <Row className="justify-content-center">
        <Col>
          <SectionHeader
            title="My education & experience form a solid foundation."
            subtitle="Education & Experience"
            dropCap
            className={`justify-content-center text-center  ${
              isMatch ? "px-3" : "px-0"
            }`}
          />
          <Card className="shadow-none border-0 bg-transparent mt-3">
            <Card.Body>
              <div className="timeline-vertical">
                {VerticalTimelineData.map((item, index) => {
                  const { year, date, title, description, icon } = item;
                  return (
                    <motion.div
                      variants={fadeIn(
                        index % 2 === 0 ? "left" : "right",
                        "spring",
                        index * 0.5,
                        1
                      )}
                      key={index}
                      className={classNames("timeline-item", {
                        "timeline-item-start": index % 2 === 0,
                        "timeline-item-end": index % 2 !== 0,
                      })}
                    >
                      <div className="timeline-icon icon-item">{icon}</div>
                      <Row
                        className={` ${
                          index % 2 == 0
                            ? "timeline-item-start"
                            : "timeline-item-end"
                        }`}
                      >
                        <Col lg={6} className="timeline-item-time">
                          <div>
                            {handleColorPresentYr(year)}
                            <p className="fs--1 gray1">{date}</p>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="timeline-item-content">
                            <div className="timeline-item-card">
                              {handleItalic(title)}
                              <p className="fs-0 mb-0 gray1">{description}</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </motion.div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};

export default Background;
