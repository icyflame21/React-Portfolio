import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from 'components/common/Section';
import SectionHeader from './SectionHeader';
import Slider from 'react-slick';
import { useMediaQuery, useTheme } from '@mui/material';
import { projectData } from 'data/projects';
import ProjectService from './ProjectService';

const Projects = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

    const settings = {
        infinite: true,
        slidesToShow: isMatch ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
    };

    return (
        <Section id="projects" bg='white'>
            <Row className={`justify-content-center align-items-center ${isMatch ? 'px-3' : 'px-0'}`}>
                <Col>
                    <SectionHeader
                        title="Check Out My Recent Projects"
                        subtitle="My Work"
                        dropCap
                        className='justify-content-center text-center'
                    />
                    {isMatch ?
                        projectData.map((service, index) => (
                            <ProjectService {...service} key={index} />
                        )) :
                        <Row className="mt-3">
                            <Slider {...settings}>
                                {projectData.map((service, index) => (
                                    <Col key={index}>
                                        <ProjectService {...service} />
                                    </Col>
                                ))}
                            </Slider>
                        </Row>}
                </Col>
            </Row>
        </Section>
    )
};

export default Projects;
