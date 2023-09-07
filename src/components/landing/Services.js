import React from 'react';
import { Row, Col } from 'react-bootstrap';
import serviceList from 'data/serviceList';
import Section from 'components/common/Section';
import CardService from './CardService';
import SectionHeader from './SectionHeader';
import Lottie from 'react-lottie';
import ServicesJSON from '../../assets/img/animated-icons/services.json'
import Slider from 'react-slick';
import { useMediaQuery, useTheme } from '@mui/material';

const Services = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

  const servicesOptions = {
    loop: true,
    autoplay: true,
    animationData: ServicesJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const settings = {
    infinite: true,
    slidesToShow: isMatch ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
  };

  return (
    <Section id="services" bg='light'>
      <Row className={`justify-content-center align-items-center ${isMatch ? 'px-3' : 'px-0'}`}>
        {isMatch ? <Col>
          <SectionHeader
            title="What Services I offer You"
            subtitle="Services"
            dropCap
            className='justify-content-center text-center'
          />
          <div className="mt-3">
            {serviceList.map((service, index) => (
              <CardService {...service} key={index} />
            ))}
          </div>
        </Col> : <>
          <Col
            lg={7}
            xl={7}>
            <SectionHeader
              title="What Services I offer You"
              subtitle="Services"
            />
            <Row className="mt-3">
              <Slider {...settings}>
                {serviceList.map((service, index) => (
                  <Col
                    key={index}
                  >
                    <CardService {...service} />
                  </Col>
                ))}
              </Slider>
            </Row>
          </Col>
          <Col
            lg={5}
            xl={5}
          >
            <Lottie options={servicesOptions} />
          </Col>
        </>}
      </Row>
    </Section>
  )
};

export default Services;
