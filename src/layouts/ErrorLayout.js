import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Section from 'components/common/Section';

const ErrorLayout = () => {
  return (
    <Section className="py-0"
      style={{
        background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)'
      }}>
      <Row className="flex-center min-vh-100 py-6">
        <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
          <Outlet />
        </Col>
      </Row>
    </Section>
  );
};


export default ErrorLayout;
