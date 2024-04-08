import React, { useRef, useState } from "react";
import { Row, Col, Form, Spinner, Card, Button } from "react-bootstrap";
import Section from "components/common/Section";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SectionHeader from "./SectionHeader";
import { socialShares } from "data/socialIcons";
import Flex from "components/common/Flex";
import { toast } from "react-toastify";
import { settings } from "config";
import emailjs from "@emailjs/browser";
import LeafletMap from "components/common/LeafletMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { fontSizes } from "helpers/fonts";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Contact = () => {
  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("lg"));
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
        toast.success(
          "Thank you for reaching out.\nYour message has been successfully sent.\nI'll get back to you as soon as possible.",
          {
            theme: "colored",
          }
        );
      })
      .catch(() => {
        setLoading(false);
        e.target.reset();
      });
  };

  const emailForm = () => {
    return (
      <Form
        ref={form}
        onSubmit={sendEmail}
        className={isMatch ? "mt-2" : ""}
        autoComplete="off"
      >
        <Row className="g-3">
          <Form.Group as={Col} lg={6} xl={6}>
            <Form.Control
              style={{ fontSize: fontSizes.formInput }}
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
              style={{ fontSize: fontSizes.formInput }}
              className="shadow-none"
              type="email"
              required
              placeholder="Your Email*"
              name="clientEmail"
            />
          </Form.Group>
        </Row>

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
              fontSize: fontSizes.formInput,
            }}
          />
        </Form.Group>

        <Button
          disabled={loading}
          className="fw-semi-bold border-0 shadow-none button violet-gradient px-4 py-2 rounded align-items-center"
          style={{ fontSize: fontSizes.buttonText }}
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
    );
  };
  return (
    <LazyLoadComponent>
      <Section id="contact" bg="white">
        <SectionHeader
          title="I want to hear from you"
          subtitle="Contact Me"
          dropCap
          className="justify-content-center text-center pt-4"
        />
        {isMatch ? (
          <Card className="h-100 m-3">
            <Card.Body>
              <Row className="h-100">
                <Col xs={12}>{emailForm()}</Col>
                <Col xs={12} className="my-2 flex-1">
                  <h5
                    className="mt-3 mb-2 text-black"
                    style={{ fontSize: fontSizes.bodyText }}
                  >
                    Connect with me{" "}
                  </h5>
                  <Flex className="gap-2">
                    {socialShares.map(({ id, icon, href, ariaLabel }) => (
                      <Button
                        key={id}
                        as="a"
                        target="_blank"
                        href={href}
                        variant="falcon-default"
                        type="button"
                        size="sm"
                        className="icon-item fs-1 bg-white"
                        aria-label={ariaLabel}
                      >
                        {icon}
                      </Button>
                    ))}
                  </Flex>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ) : (
          <Row className="mt-3">
            <Col lg={6} xl={6}>
              <LeafletMap
                position={position}
                data={data}
                className="min-vh-50 w-100"
              />
              <h5
                className="mt-4 mb-2 text-black"
                style={{ fontSize: fontSizes.bodyText }}
              >
                Connect with me{" "}
              </h5>
              <Flex className="gap-2">
                {socialShares.map(({ id, icon, href, ariaLabel }) => (
                  <Button
                    key={id}
                    as="a"
                    target="_blank"
                    href={href}
                    variant="falcon-default"
                    type="button"
                    size="sm"
                    className="icon-item icon-item-lg fs-2 bg-white"
                    aria-label={ariaLabel}
                  >
                    {icon}
                  </Button>
                ))}
              </Flex>
            </Col>
            <Col lg={6} xl={6}>
              {emailForm()}
            </Col>
          </Row>
        )}
      </Section>
    </LazyLoadComponent>
  );
};

export default Contact;
