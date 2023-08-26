import React, { forwardRef } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import skillsList from 'data/skills';
import Marquee from "react-fast-marquee";
import '../../../CSS/GradientText.css'
import { useMediaQuery, useTheme } from '@mui/material';

const Skills = forwardRef((props, ref) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    const sliderSettings = {
        pauseOnHover: true,
        play: true,
        autofill: true,
        className: 'pt-6 pb-4'
    };

    return (
        <Section id="skills" ref={ref} fluid={isMatch ? false : true} className='px-2'>
            <Row className="justify-content-center align-items-center">
                <Col>
                    <SectionHeader
                        title="My Skills Progress so far"
                        subtitle="My Skills"
                        dropCap
                        className='justify-content-center text-center'
                    />
                    <Marquee {...sliderSettings}>
                        {skillsList.map((skill, id) => (
                            <Card key={id} className='p-3 mx-3 gradient_skills_bg' >
                                <Image src={skill.logo} alt={skill.name} className='fluid rounded'style={{
                                    width: '9rem',
                                    height: '9rem',
                                }} />
                                <i>
                                    <p className='fw-medium fs-1 mt-3 gradient_hero_sub_text d-flex justify-content-center'>
                                        {skill.name}
                                    </p>
                                </i>
                            </Card>
                        ))}
                    </Marquee>
                </Col>
            </Row>
        </Section>
    );
});

export default Skills;
