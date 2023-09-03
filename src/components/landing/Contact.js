import React, { useContext, useRef, useState } from 'react';
import { Row, Col, Form, Button, Spinner, Card } from 'react-bootstrap';
import Section from 'components/common/Section';
import { useMediaQuery, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { socialShares } from 'data/socialIcons';
import Flex from 'components/common/Flex';
import { toast } from 'react-toastify';
import { settings } from 'config';
import emailjs from '@emailjs/browser';
import GoogleMap from 'components/common/GoogleMap';
import AppContext from 'context/Context';


const MapDark = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 12.903960,
        lng: 77.578651
      }}
      mapStyle="Midnight"
      className="rounded-soft position-relative w-100 rounded"
      style={{ minHeight: '50vh' }}
    >
      <h1 className="fs-0 text-youtube">Current Location</h1>
      <p className="m-0 text-900 fw-medium">
        17th Cross Road, JP Nagar,<span className='text-twitter ms-1'>Bangalore</span>
      </p>
    </GoogleMap>
  );
};

const MapLight = () => {
  return (
    <GoogleMap
      initialCenter={{
        lat: 12.903960,
        lng: 77.578651
      }}
      mapStyle="Default"
      className="rounded-soft position-relative w-100 rounded"
      style={{ minHeight: '50vh' }}
    >
      <h1 className="fs-0 text-youtube">Current Location</h1>
      <p className="m-0 text-900 fw-medium">
        17th Cross Road, JP Nagar,<span className='text-twitter ms-1'>Bangalore</span>
      </p>
    </GoogleMap>
  );
};

const Contact = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  const [loading, setLoading] = useState(false)

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm(settings.serviceId, settings.templateId, form.current, settings.publicKey)
      .then(() => {
        setLoading(false)
        e.target.reset()
        toast.success('Email has been sent successfully', {
          theme: 'colored'
        });
      }).catch(() => {
        toast.warn('Network Error\nPlease try again later', {
          theme: 'colored'
        });
        setLoading(false)
        e.target.reset()
      })
  };

  const {
    config: { isDark }
  } = useContext(AppContext);

  return (
    <Section id="contact" bg='white'>
      <SectionHeader
        title="I want to hear from you"
        subtitle="Contact Me"
        dropCap
        className='justify-content-center text-center'
      />
      {isMatch ?
        <Card className="h-100 m-3">
          <Card.Body className="p-0">
            <Row className="g-0 h-100">
              <Col xs={12}>{isDark ? <MapDark /> : <MapLight />}</Col>
              <Col xs={12} className="p-x1 flex-1">
                <h5 className="fs-0 mt-3 mb-2">Connect with me </h5>
                <Flex className="gap-2">
                  {socialShares.map(({ id, icon, href }) => (
                    <Button
                      key={id}
                      as='a'
                      target="_blank"
                      href={href}
                      variant="falcon-default"
                      type="button"
                      size="sm"
                      className="icon-item icon-item-lg fs-2"
                    >
                      {icon}
                    </Button>
                  ))}
                </Flex>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        : <Row className='mt-3'>
          <Col
            lg={6}
            xl={6}
          >
            {isDark ? <MapDark /> : <MapLight />}
            <h5 className="fs-0 mt-3 mb-2">Connect with me </h5>
            <Flex className="gap-2">
              {socialShares.map(({ id, icon, href }) => (
                <Button
                  key={id}
                  as='a'
                  target="_blank"
                  href={href}
                  variant="falcon-default"
                  type="button"
                  size="sm"
                  className="icon-item icon-item-lg fs-2"
                >
                  {icon}
                </Button>
              ))}
            </Flex>
          </Col>
          <Col
            lg={6}
            xl={6}>
            <Form ref={form} onSubmit={sendEmail}
              className={isMatch ? 'mt-4' : ''}>
              <Row className="g-3">
                <Form.Group as={Col} lg={6} xl={6}>
                  <Form.Control
                    disabled={loading}
                    required
                    placeholder="Your Name*" name='clientName' />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} lg={6} xl={6}>
                  <Form.Control
                    disabled={loading}
                    type="email" required placeholder="Your Email*" name='clientEmail' />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  disabled={loading}
                  required as="textarea" rows={7} placeholder="Your Message*"
                  name='clientMessage'
                  style={{
                    resize: 'none'
                  }} />
              </Form.Group>

              {loading ? <Row className="g-0">
                <Col xs={12} className="w-100 h-100">
                  <Flex className="align-items-center justify-content-center">
                    <Spinner animation="border" variant="primary" size='sm' />
                  </Flex>
                </Col>
              </Row> : <Button
                variant="outline-primary"
                type="submit"
              >
                Send Message
              </Button>}
            </Form>
          </Col>
        </Row>}
    </Section>
  )
}

export default Contact;
