import React, { forwardRef } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/common/Section';
import { settings } from 'config';
import Flex from 'components/common/Flex';
import '../../../CSS/GradientText.css'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import SectionHeader from './SectionHeader';
import AboutUs from '../../../assets/img/animated-icons/about-us.json'
import Lottie from 'react-lottie';
import { useMediaQuery, useTheme } from '@mui/material';

const About = forwardRef((props, ref) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    const aboutUsOptions = {
        loop: true,
        autoplay: true,
        animationData: AboutUs,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Section
            bg='soft-white gradient'
            className='shadow-sm'
        >
            <Row id="about" ref={ref} className={`justify-content-center align-items-center ${isMatch ? 'px-3' : 'px-0'}`}>
                <Col
                    lg={5}
                    xl={5}
                    className='d-flex justify-content-center'
                >
                    <Lottie options={aboutUsOptions} />
                </Col>
                <Col
                    lg={7}
                    xl={7}>
                    <SectionHeader
                        title="About Me"
                        subtitle="Why hire me for your next project?"
                    />
                    <i>
                        <p className="lead text-700 fs-1 mt-2">
                            Experienced coder with <span className='fw-bold'>1+ year</span> industry practice. Seeking role to leverage expertise, drive innovation, and contribute effectively for impactful outcomes.
                        </p>
                    </i>
                    <Flex alignItems='center' className='justify-content-lg-start justify-content-center'>
                        <Button
                            as='a'
                            variant="outline-warning"
                            className="fs-1 border-2 mt-3"
                            href={settings.resumelink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Download CV
                            <FontAwesomeIcon icon={faFileDownload} transform="shrink-5 down-1 right-5" />
                        </Button>
                    </Flex>
                </Col>
            </Row>
        </Section>
    );
});

export default About;
