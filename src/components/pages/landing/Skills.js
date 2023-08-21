import React, { forwardRef } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import skillsList from 'data/skills';
import Marquee from "react-fast-marquee";
import '../../../CSS/GradientText.css'

const Skills = forwardRef((props, ref) => {
    const sliderSettings = {
        pauseOnHover: true,
        play: true,
        autofill: true,
        className: 'mt-5'
    };

    return (
        <Section
            bg='soft-white gradient'
            className='shadow-sm'
        >
            <Row id="skills" ref={ref} className="justify-content-center align-items-center">
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
                                <Image src={skill.logo} alt={skill.name} style={{
                                    width: '9rem',
                                    height: '9rem'
                                }} />
                                <i>
                                    <p className='opacity-75 fw-medium fs-1 mt-2 gradient_hero_sub_text d-flex mt-2 justify-content-center'>
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
