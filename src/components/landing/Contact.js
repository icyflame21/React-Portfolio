import React, { forwardRef } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Section from 'components/common/Section';
import { useMediaQuery, useTheme } from '@mui/material';
import SectionHeader from './SectionHeader';
import { socialShares } from 'data/socialIcons';
import LeafletMap from 'components/common/LeafletMap';
import Flex from 'components/common/Flex';

const Contact = forwardRef((props, ref) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

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
  return (
    <Section id="contact" ref={ref}>
      <SectionHeader
        title="I want to hear from you"
        subtitle="Contact Me"
        dropCap
        className='justify-content-center text-center'
      />
      <Row className={`justify-content-center mt-5 ${isMatch ? 'px-3' : 'px-0'}`}>
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
          <Form className={isMatch ? 'mt-4' : ''}>
            <Row className="g-3">
              <Form.Group as={Col} lg={6} xl={6} controlId="clientName">
                <Form.Control required placeholder="Your Name*" />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} lg={6} xl={6} controlId="clientEmail">
                <Form.Control type="email" required placeholder="Your Email*" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="clientSubject">
              <Form.Control placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="clientMessage">
              <Form.Control required as="textarea" rows={7} placeholder="Your Message*"
                style={{
                  resize: 'none'
                }} />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Section>
  )
})

export default Contact;
