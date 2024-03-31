import React from "react";
import { Button, Card } from "react-bootstrap";
import PageNotFoundJSON from "../../assets/img/animated-icons/Page_Not_Found.json";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/GradientText.css";
import { motion } from "framer-motion";
import { zoomIn } from "helpers/motion";

const PageNotFound = () => {
  const notFoundJSON = {
    loop: true,
    autoplay: true,
    animationData: PageNotFoundJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Card className="shadow-none border-0 bg-transparent h-100 text-center p-0">
      <motion.div variants={zoomIn(0.5, 1)}>
        <Card.Header>
          <Lottie options={notFoundJSON} />
        </Card.Header>
        <Card.Body>
          <Button
            as="a"
            className="mb-4 fs-0 fw-semi-bold border-0 mt-3 shadow-none button px-4 py-2 rounded"
            href="/"
          >
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Take me home
          </Button>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default PageNotFound;
