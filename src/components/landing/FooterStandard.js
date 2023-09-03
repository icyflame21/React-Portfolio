import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FooterStandard = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <section className=" bg-dark py-0 text-center fs-0 light">
      <hr className="my-0 border-600 opacity-25" />
      <div className="container py-3">
        <Row className="justify-content-center">
          <Col xs={12} sm="auto">
            <p className="mb-0 text-600 fs--1">
              {isMatch ? '' :
                <> &copy;{' '}{new Date().getFullYear()}-{new Date().getFullYear() + 3}{' '} All rights reserved.{' '}
                </>}{isMatch ? <p className="mb-0 text-600 fs-0">
                  Made with{' '}❤️ by {' '}
                  <a
                    className="text-white opacity-85"
                    href="#"
                    rel="noopener noreferrer"
                  >
                    Biswaranjan Subudhi
                  </a>
                </p> :
                  <p className="mb-0 mt-2 text-600 fs-0">
                    Made with{' '}❤️ by {' '}
                    <a
                      className="text-white opacity-85"
                      href="#"
                      rel="noopener noreferrer"
                    >
                      Biswaranjan Subudhi
                    </a>
                  </p>}
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FooterStandard;
