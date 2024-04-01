import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Section from "components/common/Section";
import "../../CSS/GradientText.css";
import SectionHeader from "./SectionHeader";
import { skills_data } from "data/skills";
import { useMediaQuery, useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fadeIn } from "helpers/motion";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Section id="skills" bg="white">
      <Row
        className={`justify-content-center align-items-center pt-4 ${
          isMatch ? "px-3" : "px-0"
        }`}
      >
        <Col>
          <SectionHeader
            title="My Skills Progress so far"
            subtitle="My Skills"
            dropCap
            className="justify-content-center text-center"
          />

          <Row className={`mt-3`}>
            <Col>
              <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
                <Table bordered responsive>
                  <colgroup>
                    <col className="bg-gradient bg-light" />
                    <col />
                    <col />
                  </colgroup>
                  <tbody>
                    {skills_data.map((ele, idx) => (
                      <tr key={idx} className="align-middle">
                        <td
                          className="text-black"
                          style={{
                            fontWeight: 500,
                            fontSize: isMatch ? "15px" : "20px",
                          }}
                        >
                          {ele.category}
                        </td>
                        <td className="gray2">
                          {ele.skills.split(", ").map((skill, i) => (
                            <span
                              key={i}
                              className=" mb-2 fs-0 fs-lg-1"
                              style={{
                                display: "flex",
                              }}
                            >
                              <LazyLoadImage
                                effect="blur"
                                src={ele.logo[i]}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  objectFit: "contain",
                                }}
                                className="fluid me-2"
                              />
                              {skill}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
};

export default Skills;
