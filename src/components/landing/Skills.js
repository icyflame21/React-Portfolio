import React from 'react';
import { Row, Col, Card, Image, Tab, Nav, ListGroup } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import skillsList, { softSkills, technical, toolsSet } from 'data/skills';
import Marquee from "react-fast-marquee";
import { useMediaQuery, useTheme } from '@mui/material';
import Flex from 'components/common/Flex';

const Skills = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    const sliderSettings = {
        pauseOnHover: true,
        play: true,
        autofill: true,
        className: 'pt-6 pb-4'
    };

    const TopSideTabs = () => {
        return (
            <Row>
                <Col>
                    <Nav variant="pills" className="m-0 bg-soft-secondary rounded">
                        <Nav.Item>
                            <Nav.Link eventKey="technical" className='text-capitalize'>
                                Technical
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="soft" className='text-capitalize'>
                                Soft
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tools" className='text-capitalize'>
                                Tools
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        );
    };

    return (
        <Section id="skills" bg='white'>
            <Row className="justify-content-center align-items-center">
                <Col>
                    <SectionHeader
                        title="My Skills Progress so far"
                        subtitle="My Skills"
                        dropCap
                        className='justify-content-center text-center'
                    />
                    {isMatch ? <Tab.Container defaultActiveKey="technical">
                        <Card className="h-100 bg-transparent shadow-none border-0">
                            <Card.Header>
                                <Row className="mt-2 justify-content-center align-items-center">
                                    <Col xs={'auto'}>
                                        <TopSideTabs />
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="technical">
                                        <ListGroup>
                                            {technical.map((ele, id) => (
                                                <ListGroup.Item className='py-3' variant={id % 2 == 0 ? '' : 'primary'} key={ele.id}>
                                                    <Flex className='gap-2' justifyContent="between" alignItems="center">
                                                        {ele.name}
                                                        {ele.logo && <Image
                                                            src={ele.logo}
                                                            rounded
                                                            fluid
                                                            style={{
                                                                width: '30px',
                                                                height: '30px',
                                                                objectFit: 'contain'
                                                            }}
                                                        />}
                                                    </Flex>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tools">
                                        <ListGroup>
                                            {toolsSet.map((ele, id) => (
                                                <ListGroup.Item className='py-3' variant={id % 2 == 0 ? '' : 'primary'} key={ele.id}>
                                                    <Flex className='gap-2' justifyContent="between" alignItems="center">
                                                        {ele.name}
                                                        {ele.logo && <Image
                                                            src={ele.logo}
                                                            rounded
                                                            fluid
                                                            style={{
                                                                width: '30px',
                                                                height: '30px',
                                                                objectFit: 'contain'
                                                            }}
                                                        />}
                                                    </Flex>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="soft">
                                        <ListGroup>
                                            {softSkills.map((ele, id) => (
                                                <ListGroup.Item className='py-3' variant={id % 2 == 0 ? '' : 'primary'} key={ele.id}>
                                                    <Flex className='gap-2' justifyContent="between" alignItems="center">
                                                        {ele.name}
                                                        {ele.logo && <Image
                                                            src={ele.logo}
                                                            rounded
                                                            fluid
                                                            style={{
                                                                width: '30px',
                                                                height: '30px',
                                                                objectFit: 'contain'
                                                            }}
                                                        />}
                                                    </Flex>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container> : <Marquee {...sliderSettings}>
                        {skillsList.map((skill, id) => (
                            <Card key={id} className='p-3 mx-3 gradient_skills_bg shadow-sm' >
                                <Image src={skill.logo} alt={skill.name} className='fluid rounded' style={{
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
                    </Marquee>}
                </Col>
            </Row>
        </Section>
    );
};

export default Skills;
