import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import '../../CSS/GradientText.css'

const SectionHeader = ({ title, subtitle, dropCap, ...rest }) => {
  return (
    <Row {...rest}>
      <Col lg={8} xl={7} xxl={6} className="col-xxl-6">
        <p className="fs-1 title_text fw-semi-bold text-capitalize">{title}</p>
        {!dropCap ? (
          <p className="fs-3 text-capitalize fw-bold info dropcap">
            {subtitle}
          </p>
        ) : (
          <p className="fs-3 text-capitalize fw-bold info">{subtitle}</p>
        )}
      </Col>
    </Row>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default SectionHeader;
