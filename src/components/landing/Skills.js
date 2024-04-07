import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Section from "components/common/Section";
import SectionHeader from "./SectionHeader";
import { skills_data } from "data/skills";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fontSizes } from "helpers/fonts";

const Skills = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const skills_table = () => (
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
                fontSize: fontSizes.bodyText,
              }}
            >
              {ele.category}
            </td>
            <td className="gray2">
              {ele.skills.split(", ").map((skill, i) => (
                <span
                  key={i}
                  className=" mb-2"
                  style={{
                    display: "flex",
                    fontSize: fontSizes.bodyText,
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
  );
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
            <Col>{skills_table()}</Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
};

export default Skills;
