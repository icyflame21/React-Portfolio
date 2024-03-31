import React, { useRef, useState } from "react";
import { Row, Col, Form, Spinner, Card, Button } from "react-bootstrap";
import Section from "components/common/Section";
import { useMediaQuery, useTheme } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { socialShares } from "data/socialIcons";
import Flex from "components/common/Flex";
import { toast } from "react-toastify";
import { settings } from "config";
import emailjs from "@emailjs/browser";
import LeafletMap from "components/common/LeafletMap";
import { motion } from "framer-motion";
import { fadeIn } from "helpers/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const position = [12.90396, 77.578651];
  const data = {
    id: 0,
    lat: 12.90396,
    long: 77.578651,
    name: "Current Location",
    street: "17th Cross Road, JP Nagar, ",
    location: "Bangalore",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        settings.serviceId,
        settings.templateId,
        form.current,
        settings.publicKey
      )
      .then(() => {
        setLoading(false);
        e.target.reset();
        toast.success("Email has been sent successfully", {
          theme: "colored",
        });
      })
      .catch(() => {
        setLoading(false);
        e.target.reset();
      });
  };

  return (
    <Section id="contact" bg="white">
      <SectionHeader
        title="I want to hear from you"
        subtitle="Contact Me"
        dropCap
        className="justify-content-center text-center"
      />
      {isMatch ? (
        <motion.div variants={fadeIn("up", "tween", 0.3, 0.75)}>
          <Card className="h-100 m-3">
            <Card.Body className="p-0">
              <Row className="g-0 h-100">
                <Col xs={12}>
                  <LeafletMap
                    position={position}
                    data={data}
                    className="min-vh-50 w-100"
                  />
                </Col>
                <Col xs={12} className="p-x1 flex-1">
                  <h5 className="fs-0 mt-3 mb-2 text-black">
                    Connect with me{" "}
                  </h5>
                  <Flex className="gap-2">
                    {socialShares.map(({ id, icon, href }) => (
                      <Button
                        key={id}
                        as="a"
                        target="_blank"
                        href={href}
                        variant="falcon-default"
                        type="button"
                        size="sm"
                        className="icon-item icon-item-lg fs-2 bg-white"
                      >
                        {icon}
                      </Button>
                    ))}
                  </Flex>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      ) : (
        <Row className="mt-3">
          <Col lg={6} xl={6}>
            <motion.div variants={fadeIn("right", "tween", 0.3, 0.75)}>
              <LeafletMap
                position={position}
                data={data}
                className="min-vh-50 w-100"
              />
            </motion.div>
            <h5 className="fs-0 mt-4 mb-2 text-black">Connect with me </h5>
            <Flex className="gap-2">
              {socialShares.map(({ id, icon, href }) => (
                <Button
                  key={id}
                  as="a"
                  target="_blank"
                  href={href}
                  variant="falcon-default"
                  type="button"
                  size="sm"
                  className="icon-item icon-item-lg fs-2 bg-white"
                >
                  {icon}
                </Button>
              ))}
            </Flex>
          </Col>
          <Col lg={6} xl={6}>
            <Form
              ref={form}
              onSubmit={sendEmail}
              className={isMatch ? "mt-4" : ""}
              autoComplete="off"
            >
              <motion.div variants={fadeIn("left", "tween", 0.3, 0.75)}>
                <Row className="g-3">
                  <Form.Group as={Col} lg={6} xl={6}>
                    <Form.Control
                      disabled={loading}
                      required
                      className="shadow-none"
                      placeholder="Your Name*"
                      name="clientName"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} lg={6} xl={6}>
                    <Form.Control
                      disabled={loading}
                      className="shadow-none"
                      type="email"
                      required
                      placeholder="Your Email*"
                      name="clientEmail"
                    />
                  </Form.Group>
                </Row>
              </motion.div>

              <motion.div variants={fadeIn("left", "tween", 0.5, 0.75)}>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="shadow-none"
                    disabled={loading}
                    required
                    as="textarea"
                    rows={10}
                    placeholder="Your Message*"
                    name="clientMessage"
                    style={{
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </motion.div>

              <Button
                disabled={loading}
                className="fs-0 fw-semi-bold border-0 shadow-none violet-gradient px-4 py-2 rounded align-items-center"
                type="submit"
              >
                {loading ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <>
                    {" "}
                    Send Message
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      transform="down-1 shrink-4 right-5"
                    />
                  </>
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Section>
  );
};

export default Contact;
