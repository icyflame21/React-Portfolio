import React, { useRef, useState } from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Section from 'components/common/Section';
import { useMediaQuery, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { socialShares } from 'data/socialIcons';
import LeafletMap from 'components/common/LeafletMap';
import Flex from 'components/common/Flex';
import { toast } from 'react-toastify';
import { settings } from 'config';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  const [loading, setLoading] = useState(false)

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
      }, (error) => {
        setLoading(false)
        e.target.reset()
      });
  };


  return (
    <Section id="contact" bg='white'>
      <SectionHeader
        title="I want to hear from you"
        subtitle="Contact Me"
        dropCap
        className='justify-content-center text-center'
      />
      {isMatch ? <Row className={`justify-content-center mt-5 px-3`}>
        <Col>
          <LeafletMap position={position} data={data} className='min-vh-50 w-100' />
          <h5 className="fs-0 mt-5 mb-2">Connect with me </h5>
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
      </Row> : <Row className={`justify-content-center mt-5 px-0`}>
        <Col
          lg={6}
          xl={6}
        >
          <LeafletMap position={position} data={data} className='min-vh-50 w-100' />
          <h5 className="fs-0 mt-5 mb-2">Connect with me </h5>
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
