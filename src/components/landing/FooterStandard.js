import React from "react";
import { Row, Col } from "react-bootstrap";

const FooterStandard = () => {
  return (
    <section className=" bg-dark py-0 text-center fs-0 light">
      <div className="container py-3">
        <Row className="justify-content-center">
          <Col xs={12} sm="auto">
            <p className="mb-0 text-400 fs--1">
              &copy; {new Date().getFullYear()} All rights reserved.
              <span className="mb-0 mt-2 d-block text-400 fs-0">
                Made with ❤️ by{" "}
                <a className="text-white" href="#" rel="noopener noreferrer">
                  Biswaranjan Subudhi
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FooterStandard;
