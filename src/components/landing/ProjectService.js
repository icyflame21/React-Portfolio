import React from "react";
import { Col, Row } from "react-bootstrap";
import Flex from "components/common/Flex";
import ProjectSingleImage from "./ProjectSingleImage";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SoftBadge from "components/common/SoftBadge";
import { fontSizes } from "helpers/fonts";
import DOMPurify from "dompurify";

const ProjectService = ({ service, index }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data),
  });

  const { subTitle, title, thumbnail, skills, logo, ongoing } = service;
  return (
    <Col
      xs={12}
      className={classNames("p-card", {
        "bg-100": index % 2 !== 0,
      })}
    >
      <Row className="p-3">
        <Col sm={5} md={4}>
          <ProjectSingleImage
            name={title}
            ongoing={ongoing}
            imageSrcPath={thumbnail}
          />
        </Col>
        <Col sm={7} md={8}>
          <Row className="h-100">
            <Col lg={8}>
              <h5
                className="mt-3 mt-sm-0 text-dark"
                style={{ fontSize: fontSizes.subSubheadings }}
              >
                {title}
              </h5>
              <p
                className="mb-2 mb-md-3 text-600"
                style={{ fontSize: fontSizes.quoteCaption }}
                dangerouslySetInnerHTML={sanitizedData(subTitle)}
              />
            </Col>
            <Col
              lg={4}
              as={Flex}
              justifyContent={isMatch ? "" : "end"}
              direction={isMatch ? "" : "column"}
              className={isMatch ? "flex-wrap gap-2 mt-3" : ""}
            >
              {skills.split(", ").map((skill, i) =>
                isMatch ? (
                  <SoftBadge
                    key={i}
                    pill
                    bg="info"
                    className="text-600"
                    style={{ fontSize: fontSizes.quoteCaption }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src={logo[i]}
                      style={{
                        width: "10px",
                        height: "10px",
                        objectFit: "contain",
                      }}
                      className="fluid me-2"
                    />
                    {skill}
                  </SoftBadge>
                ) : (
                  <span
                    key={i}
                    className={"mb-1 text-600"}
                    style={{ fontSize: fontSizes.quoteCaption }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src={logo[i]}
                      style={{
                        width: "10px",
                        height: "10px",
                        objectFit: "contain",
                      }}
                      className="fluid me-2"
                    />
                    {skill}
                  </span>
                )
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProjectService;
