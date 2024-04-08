import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "components/common/Section";
import { settings } from "config";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./SectionHeader";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCanvas from "components/common/Profile_Canvas";
import { about_data } from "data/about";
import DOMPurify from "dompurify";
import { fontSizes } from "helpers/fonts";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const About = () => {
  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(about_data),
  });

  const downloadResume = () => {
    const fileID = settings.resumeID;
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;
    const tempAnchor = document.createElement("a");
    tempAnchor.href = downloadURL;
    tempAnchor.setAttribute("download", "Biswaranjan S. Resume.pdf");

    document.body.appendChild(tempAnchor);
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
  };

  return (
    <LazyLoadComponent>
      <Section bg="white" id="about">
        <Row
          className={`justify-content-between pt-4 ${
            isMatch ? "px-4 align-items-center" : ""
          }`}
        >
          {isMatch ? null : (
            <Col lg={5} xl={5}>
              <div className={isMatch ? "h-100" : "h-75"}>
                <ProfileCanvas />
              </div>
            </Col>
          )}
          <Col lg={7} xl={7}>
            <SectionHeader
              title="About Me"
              subtitle="Why hire me for your next project?"
              dropCap={isMatch ? true : false}
            />
            <div
              className="gray1  mt-2"
              style={{ fontSize: fontSizes.bodyText }}
              dangerouslySetInnerHTML={sanitizedData()}
            />
            <Button
              className="mb-4 fw-semi-bold border-0 mt-3 shadow-none button violet-gradient rounded px-4 py-2"
              onClick={() => downloadResume()}
              style={{ fontSize: fontSizes.buttonText }}
            >
              Download CV
              <FontAwesomeIcon
                icon={faFileDownload}
                transform="shrink-4 down-1 right-5"
              />
            </Button>
          </Col>
        </Row>
      </Section>
    </LazyLoadComponent>
  );
};

export default About;
