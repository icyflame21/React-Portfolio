import React, { useRef, useState } from 'react';
import { Row, Col, Form, Button, Spinner, Card } from 'react-bootstrap';
import Section from 'components/common/Section';
import { useMediaQuery, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { socialShares } from 'data/socialIcons';
import Flex from 'components/common/Flex';
import { toast } from 'react-toastify';
import { settings } from 'config';
import emailjs from '@emailjs/browser';
import LeafletMap from 'components/common/LeafletMap';

const Contact = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  const [loading, setLoading] = useState(false)

  const form = useRef();

  const position = [12.903960, 77.578651]
  const data = [
    {
      id: 0,
      lat: 12.903960,
      long: 77.578651,
      name: 'Current Location',
      street: '17th Cross Road, JP Nagar, ',
      location: 'Bangalore'
    },
  ]

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
        toast.warn('Network Error \nPlease try again later', {
          theme: 'colored'
        });
        setLoading(false)
        e.target.reset()
      })
  };

  return (
    <Section id="contact" bg='light'>
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
              <Col xs={12}>
                <LeafletMap position={position} data={data} className='min-vh-50 w-100' />
              </Col>
              <Col xs={12} className="p-x1 flex-1">
                <h5 className="fs-0 mt-3 mb-2 text-black">Connect with me </h5>
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
            <LeafletMap position={position} data={data} className='min-vh-50 w-100' />
            <h5 className="fs-0 mt-3 mb-2 text-black">Connect with me </h5>
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
              className={isMatch ? 'mt-4' : ''} autoComplete='off'>
              <Row className="g-3">
                <Form.Group as={Col} lg={6} xl={6}>
                  <Form.Control
                    disabled={loading}
                    required
                    className='shadow-none'
                    placeholder="Your Name*"
                    name='clientName' />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} lg={6} xl={6}>
                  <Form.Control
                    disabled={loading}
                    className='shadow-none'
                    type="email"
                    required
                    placeholder="Your Email*"
                    name='clientEmail' />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  className='shadow-none'
                  disabled={loading}
                  required as="textarea"
                  rows={7}
                  placeholder="Your Message*"
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
                className="fs-0 fw-semi-bold border-0 rounded-0 shadow-none button px-5 py-2"
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
