import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/common/Section';
import user1 from 'assets/img/team/biswa.png';
import Avatar from 'components/common/Avatar';
import { bgWhiteIcons } from 'data/socialIcons';
import { settings } from 'config';
import Flex from 'components/common/Flex';
import '../../CSS/GradientText.css'
import { useMediaQuery, useTheme } from '@mui/material';

const Hero = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Section bg='white'>
      <Row className="justify-content-center align-items-center pt-3">
        <Col
          lg={7}
          xl={7}
          className='d-flex justify-content-center'
        >
          <Avatar
            alt="user1"
            src={user1}
            size='6xl'
            className='w-75 my-lg-0 mt-6 mb-4'
          />
        </Col>
        <Col
          lg={5}
          xl={5} className="text-center text-xl-start">
          <p className='fs-1 title_text fw-semi-bold '>
            Software Developer
          </p>
          <h1 className="fw-bold text-black">
            Hey I'm <br />
            <span className='gradient_hero_text'>
              Biswaranjan Subudhi
            </span>
          </h1>
          <p className="fs-1 mt-2 gray1 fw-normal">
            Am a dedicated Indian software developer with a passion for crafting and extensive experience in constructing web applications.
          </p>
          <Flex alignItems='center' className='justify-content-lg-start justify-content-center'>
            <Button
              as='a'
              className="mb-4 fs-0 fw-semi-bold border-0 mt-3 rounded-0 shadow-none button px-5 py-2"
              href={settings.gmail}
              target='_blank'
              rel='noreferrer'
            >
              Hire Me
              <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
            </Button>
          </Flex>
          <Flex alignItems='center' className='justify-content-lg-start gap-2 mt-2 justify-content-center'>
            {bgWhiteIcons.map(({ id, icon, href }) => (
              <Button
                key={id}
                as='a'
                target="_blank"
                href={href}
                variant="falcon-default"
                type="button"
                size="sm"
                className="icon-item icon-item-lg fs-5"
              >
                {icon}
              </Button>
            ))}
          </Flex>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
