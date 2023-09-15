import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/common/Section';
import user1 from 'assets/img/team/biswa.webp';
import { bgWhiteIcons } from 'data/socialIcons';
import { settings } from 'config';
import Flex from 'components/common/Flex';
import '../../CSS/GradientText.css'
import { useMediaQuery, useTheme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Section style={{
      backgroundColor: '#f5f5f5'
    }}>
      <Row className={`justify-content-center align-items-center pt-5`}>
        <Col
          md={7}
          xxl={7}>
          <div className={`position-relative overflow-hidden h-sm-100 ${isMatch ? 'px-3' : 'px-5'}`}>
            <LazyLoadImage
              alt="user1"
              src={user1}
              effect='blur'
              style={{
                borderRadius: '50%'
              }}
              className='w-100 my-lg-0 mt-6 mb-4 img-thumbnail'
            />
          </div>
        </Col>
        <Col
          md={5}
          xxl={5} className="text-center text-xl-start">
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
              className="mb-4 fs-0 fw-semi-bold border-0 mt-3 shadow-none button px-5 py-2"
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
                className="icon-item icon-item-lg fs-2"
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
