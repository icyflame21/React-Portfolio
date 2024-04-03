import { fontSizes } from "helpers/fonts";
import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../CSS/GradientText.css";

const FooterStandard = () => {
  return (
    <section className=" bg-200 py-3 text-center">
      <div className="container">
        <Row className="justify-content-center">
          <Col xs={12} sm="auto">
            <p className="mb-0 gray1" style={{ fontSize: fontSizes.bodyText }}>
              &copy; {new Date().getFullYear()} All rights reserved.
              <span
                className="mb-0 mt-2 d-block gray1"
                style={{ fontSize: fontSizes.subSubheadings }}
              >
                Made with ❤️ by{" "}
                <span className="blue-text-gradient">Biswaranjan Subudhi</span>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FooterStandard;
