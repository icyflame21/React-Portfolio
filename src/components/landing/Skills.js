import React, { useState } from 'react';
import { Row, Col, Card, Tab, Nav, Table, Button } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import { softSkills, technical, toolsSet } from 'data/skills';
import { useMediaQuery, useTheme } from '@mui/material';
import Flex from 'components/common/Flex';
import Avatar from 'components/common/Avatar';
import { PrioritySelect } from './PrioritySelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

    const [collapsed, setCollapsed] = useState({
        toolsSet: false,
        toolSetNum: 6,
        technicalSum: 6,
        technical: false
    });

    const TopSideTabs = () => {
        return (
            <Row>
                <Col>
                    <Nav variant="pills" className="m-0 bg-soft-secondary rounded shadow">
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
                                        <Card>
                                            <Card.Body>
                                                <Table responsive bordered striped className='my-2'>
                                                    <tbody>
                                                        {technical.map((ele) => (
                                                            <tr key={ele.id}>
                                                                <td>
                                                                    <Flex alignItems="center">
                                                                        {ele.logo && <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                        <h6 className="mb-0 text-900">
                                                                            {ele.name}
                                                                        </h6>
                                                                    </Flex>
                                                                </td>
                                                                <td>
                                                                    <PrioritySelect
                                                                        title={ele.priority.title}
                                                                        color={ele.priority.color}
                                                                        data={ele.priority.data}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tools">
                                        <Card>
                                            <Card.Body>
                                                <Table responsive bordered striped className='my-2'>
                                                    <tbody>
                                                        {toolsSet.map((ele) => (
                                                            <tr key={ele.id}>
                                                                <td>
                                                                    <Flex alignItems="center">
                                                                        {ele.logo && <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                        <h6 className="mb-0 text-900">
                                                                            {ele.name}
                                                                        </h6>
                                                                    </Flex>
                                                                </td>
                                                                <td>
                                                                    <PrioritySelect
                                                                        title={ele.priority.title}
                                                                        color={ele.priority.color}
                                                                        data={ele.priority.data}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="soft">
                                        <Card>
                                            <Card.Body>
                                                <Table responsive bordered striped className='my-2'>
                                                    <tbody>
                                                        {softSkills.map((ele) => (
                                                            <tr key={ele.id}>
                                                                <td>
                                                                    <Flex alignItems="center">
                                                                        {ele.logo &&
                                                                            <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                        <h6 className="mb-0 text-900">
                                                                            {ele.name}
                                                                        </h6>
                                                                    </Flex>
                                                                </td>
                                                                <td>
                                                                    <PrioritySelect
                                                                        title={ele.priority.title}
                                                                        color={ele.priority.color}
                                                                        data={ele.priority.data}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container> :
                        <Row className='mt-3'>
                            <Col md={4} xxl={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Technical Skills</Card.Title>
                                        <Table responsive bordered striped className='my-2'>
                                            <tbody>
                                                {technical.slice(0, collapsed.technicalSum).map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo && <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                <h6 className="mb-0 text-900">
                                                                    {ele.name}
                                                                </h6>
                                                            </Flex>
                                                        </td>
                                                        <td>
                                                            <PrioritySelect
                                                                title={ele.priority.title}
                                                                color={ele.priority.color}
                                                                data={ele.priority.data}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <Button
                                            variant="falcon-primary"
                                            className='w-100'
                                            onClick={() => {
                                                setCollapsed({
                                                    ...collapsed,
                                                    technical: !collapsed.technical,
                                                    technicalSum: !collapsed.technical ? technical.length : 6
                                                })
                                            }}
                                        >
                                            Show {collapsed.technical ? 'less' : 'more'}
                                            <FontAwesomeIcon
                                                icon="chevron-down"
                                                className="ms-2 fs--2"
                                                transform={collapsed.technical ? 'rotate-180' : ''}
                                            />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} xxl={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Soft Skills</Card.Title>
                                        <Table responsive bordered striped className='my-2'>
                                            <tbody>
                                                {softSkills.map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo &&
                                                                    <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                <h6 className="mb-0 text-900">
                                                                    {ele.name}
                                                                </h6>
                                                            </Flex>
                                                        </td>
                                                        <td>
                                                            <PrioritySelect
                                                                title={ele.priority.title}
                                                                color={ele.priority.color}
                                                                data={ele.priority.data}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} xxl={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Tools</Card.Title>
                                        <Table responsive bordered striped className='my-2'>
                                            <tbody>
                                                {toolsSet.slice(0, collapsed.toolSetNum).map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo && <Avatar src={ele.logo} size="m" className="me-2" />}
                                                                <h6 className="mb-0 text-900">
                                                                    {ele.name}
                                                                </h6>
                                                            </Flex>
                                                        </td>
                                                        <td>
                                                            <PrioritySelect
                                                                title={ele.priority.title}
                                                                color={ele.priority.color}
                                                                data={ele.priority.data}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        <Button
                                            variant="falcon-primary"
                                            className='w-100'
                                            onClick={() => {
                                                setCollapsed({
                                                    ...collapsed,
                                                    toolsSet: !collapsed.toolsSet,
                                                    toolSetNum: !collapsed.toolsSet ? toolsSet.length : 6
                                                })
                                            }}
                                        >
                                            Show {collapsed.toolsSet ? 'less' : 'more'}
                                            <FontAwesomeIcon
                                                icon="chevron-down"
                                                className="ms-2 fs--2"
                                                transform={collapsed.toolsSet ? 'rotate-180' : ''}
                                            />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
        </Section>
    );
};

export default Skills;
