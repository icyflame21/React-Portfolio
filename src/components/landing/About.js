import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "components/common/Section";
import { settings } from "config";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./SectionHeader";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { fadeIn } from "helpers/motion";
import ProfileCanvas from "components/common/Profile_Canvas";
import { about_data } from "data/about";
import DOMPurify from "dompurify";
import { fontSizes } from "helpers/fonts";

const About = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(about_data),
  });

  const downloadResume = () => {
    const fileID = settings.resumeID; // Replace this with your file ID
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;
    // Create a temporary anchor element
    const tempAnchor = document.createElement("a");
    tempAnchor.href = downloadURL;
    tempAnchor.setAttribute("download", "Biswaranjan S. Resume.pdf");

    // Trigger the download
    document.body.appendChild(tempAnchor);
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
  };

  return (
    <Section bg="white" id="about">
      <Row
        className={`justify-content-between pt-4 ${
          isMatch ? "px-4 align-items-center" : ""
        }`}
      >
        <Col lg={5} xl={5}>
          <motion.div
            variants={fadeIn(isMatch ? "up" : "right", "tween", 0.2, 1)}
            className={isMatch ? "h-100" : "h-75"}
          >
            <ProfileCanvas />
          </motion.div>
        </Col>
        <Col lg={7} xl={7}>
          <SectionHeader
            title="About Me"
            subtitle="Why hire me for your next project?"
            dropCap={isMatch ? true : false}
          />
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
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
  );
};

export default About;
