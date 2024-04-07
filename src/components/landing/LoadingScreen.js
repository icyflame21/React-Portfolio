import React from "react";
import LoaderJSON from "../../assets/img/animated-icons/loader.json";
import Lottie from "react-lottie";
import { Col, Row } from "react-bootstrap";

const LoadingScreen = () => {
  const loaderJSON = {
    loop: true,
    autoplay: true,
    animationData: LoaderJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Row className="g-0 vw-100 vh-100 bg-white">
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <Lottie options={loaderJSON} width="120px" height="120px" />
      </Col>
    </Row>
  );
};

export default LoadingScreen;
