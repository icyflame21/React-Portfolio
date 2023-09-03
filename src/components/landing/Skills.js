import React, { useState } from 'react';
import { Row, Col, Card, Tab, Nav, Table, Button } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import { softSkills, technical, toolsSet } from 'data/skills';
import { useMediaQuery, useTheme } from '@mui/material';
import Flex from 'components/common/Flex';
import { PrioritySelect } from './PrioritySelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleBarReact from 'simplebar-react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SiCodersrank } from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
import { MdOutlineManageHistory } from 'react-icons/md'

const Skills = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

    const [collapsed, setCollapsed] = useState({
        toolsSet: false,
        toolSetNum: 6,
        technicalSum: 6,
        technical: false
    });

    return (
        <Section id="skills" bg='white'>
            <Row className={`justify-content-center align-items-center ${isMatch ? 'px-3' : 'px-0'}`}>
                <Col>
                    <SectionHeader
                        title="My Skills Progress so far"
                        subtitle="My Skills"
                        dropCap
                        className='justify-content-center text-center'
                    />
                    {isMatch ?
                        <Card className="mt-3">
                            <Tab.Container defaultActiveKey="technical">
                                <SimpleBarReact>
                                    <Card.Header className="p-0 bg-light">
                                        <Nav className="nav-tabs tab-tickets-status flex-nowrap border-0">
                                            <Nav.Item className="w-100">
                                                <Nav.Link
                                                    eventKey="technical"
                                                    className="mb-0 d-flex align-items-center gap-2 py-3 justify-content-center"
                                                >
                                                    <SiCodersrank className="text-600 fs-1" />
                                                    <h6 className="mb-0 text-600 fs-0">
                                                        Technical
                                                    </h6>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="w-100">
                                                <Nav.Link
                                                    eventKey="soft"
                                                    className="mb-0 d-flex align-items-center gap-2 py-3 justify-content-center"
                                                >
                                                    <MdOutlineManageHistory className="text-600 fs-1" />
                                                    <h6 className="mb-0 text-600 fs-0">Soft</h6>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="w-100">
                                                <Nav.Link
                                                    eventKey="tools"
                                                    className="mb-0 d-flex align-items-center gap-2 py-3 justify-content-center text-center"
                                                >
                                                    <FaTools
                                                        className="text-600 fs-0"
                                                    />
                                                    <h6 className="mb-0 text-600 fs-0">Tools</h6>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                </SimpleBarReact>
                                <Card.Body className='p-0'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="technical">
                                            <Table responsive bordered striped>
                                                <tbody>
                                                    {technical.map((ele) => (
                                                        <tr key={ele.id}>
                                                            <td>
                                                                <Flex alignItems="center">
                                                                    {ele.logo && <LazyLoadImage
                                                                        effect='blur' src={ele.logo}
                                                                        style={{
                                                                            width: '25px',
                                                                            height: '25px',
                                                                            objectFit: 'contain'
                                                                        }}
                                                                        className="fluid me-2" />}
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
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tools">
                                            <Table responsive bordered striped >
                                                <tbody>
                                                    {toolsSet.map((ele) => (
                                                        <tr key={ele.id}>
                                                            <td>
                                                                <Flex alignItems="center">
                                                                    {ele.logo && <LazyLoadImage
                                                                        effect='blur' src={ele.logo}
                                                                        style={{
                                                                            width: '25px',
                                                                            height: '25px',
                                                                            objectFit: 'contain'
                                                                        }}
                                                                        className="fluid me-2" />}
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
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="soft">
                                            <Table responsive bordered striped>
                                                <tbody>
                                                    {softSkills.map((ele) => (
                                                        <tr key={ele.id}>
                                                            <td>
                                                                <Flex alignItems="center">
                                                                    {ele.logo && <LazyLoadImage
                                                                        effect='blur' src={ele.logo}
                                                                        style={{
                                                                            width: '25px',
                                                                            height: '25px',
                                                                            objectFit: 'contain'
                                                                        }}
                                                                        className="fluid me-2" />}
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
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Tab.Container>
                        </Card> :
                        <Row className='mt-3'>
                            <Col md={4} xxl={4}>
                                <Card>
                                    <Card.Body className='p-0'>
                                        <FalconCardHeader
                                            light
                                            title="Technical Skills"
                                            titleTag="h5"
                                            className="p-3"
                                        />
                                        <Table responsive bordered striped>
                                            <tbody>
                                                {technical.slice(0, collapsed.technicalSum).map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo && <LazyLoadImage
                                                                    effect='blur' src={ele.logo}
                                                                    style={{
                                                                        width: '25px',
                                                                        height: '25px',
                                                                        objectFit: 'contain'
                                                                    }}
                                                                    className="fluid me-2" />}
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
                                            variant="link"
                                            onClick={() => {
                                                setCollapsed({
                                                    ...collapsed,
                                                    technical: !collapsed.technical,
                                                    technicalSum: !collapsed.technical ? technical.length : 6
                                                })
                                            }}
                                            className='w-100 p-0 m-0 mb-2'
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
                                    <Card.Body className='p-0'>
                                        <FalconCardHeader
                                            light
                                            title="Soft Skills"
                                            titleTag="h5"
                                            className="p-3"
                                        />
                                        <Table responsive bordered striped>
                                            <tbody>
                                                {softSkills.map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo && <LazyLoadImage
                                                                    effect='blur' src={ele.logo}
                                                                    style={{
                                                                        width: '25px',
                                                                        height: '25px',
                                                                        objectFit: 'contain'
                                                                    }}
                                                                    className="fluid me-2" />}
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
                                    <Card.Body className='p-0'>
                                        <FalconCardHeader
                                            light
                                            title="Tools"
                                            titleTag="h5"
                                            className="p-3"
                                        />
                                        <Table responsive bordered striped>
                                            <tbody>
                                                {toolsSet.slice(0, collapsed.toolSetNum).map((ele) => (
                                                    <tr key={ele.id}>
                                                        <td>
                                                            <Flex alignItems="center">
                                                                {ele.logo && <LazyLoadImage
                                                                    effect='blur' src={ele.logo}
                                                                    style={{
                                                                        width: '25px',
                                                                        height: '25px',
                                                                        objectFit: 'contain'
                                                                    }}
                                                                    className="fluid me-2" />}
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
                                            variant="link"
                                            className='w-100 p-0 m-0 mb-2'
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
