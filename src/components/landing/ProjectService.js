import SoftBadge from 'components/common/SoftBadge';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BsFillLaptopFill } from 'react-icons/bs'
import { BiLogoPlayStore } from 'react-icons/bi'
import { SiAppstore } from 'react-icons/si'
import { AiOutlineGithub } from 'react-icons/ai'
import Flex from 'components/common/Flex';
import { useMediaQuery, useTheme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectService = ({ subTitle, title, liveUrl, githubUrl, thumbnail, techStack,
    appstoreURL, playstoreURL }) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
            {isMatch ?
                <Card className='mb-3'>
                    <Row>
                        <Col xs={12}>
                            <div className='position-relative overflow-hidden h-sm-100'>
                                <LazyLoadImage
                                    src={thumbnail}
                                    effect='blur'
                                    className='w-100 fit-cover rounded-top fluid'
                                    alt={title}
                                />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Card.Body>
                                <div className='mb-3 '>
                                    {techStack.map((ele) => (
                                        <SoftBadge key={ele.id} pill bg='success' className='fs--2 me-2 text-wrap text-start'>{ele.title}</SoftBadge>
                                    ))}
                                </div>
                                <Card.Title className='text-black'>{title}</Card.Title>
                                <Card.Text className='fs--1 text-800'>{subTitle}</Card.Text>
                                <div className="mt-2">
                                    <Flex className='gap-3 align-items-center'>
                                        {liveUrl && <Button
                                            as='a'
                                            target="_blank"
                                            href={liveUrl}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <BsFillLaptopFill className='text-success' />
                                        </Button>}
                                        {githubUrl && <Button
                                            as='a'
                                            target="_blank"
                                            href={githubUrl}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <AiOutlineGithub className='text-github' />
                                        </Button>}
                                        {appstoreURL && <Button
                                            as='a'
                                            target="_blank"
                                            href={appstoreURL}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <SiAppstore className='text-facebook' />
                                        </Button>}
                                        {playstoreURL && <Button
                                            as='a'
                                            target="_blank"
                                            href={playstoreURL}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <BiLogoPlayStore className='text-success' />
                                        </Button>}
                                    </Flex>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card> :
                <Card className='mb-3'>
                    <Row>
                        <Col xs={12}>
                            <div className='position-relative overflow-hidden h-sm-100'>
                                <LazyLoadImage
                                    src={thumbnail}
                                    effect='blur'
                                    className='w-100 fit-cover rounded-top fluid'
                                    alt={title}
                                />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Card.Body>
                            <div className='mb-3 '>
                                    {techStack.map((ele) => (
                                        <SoftBadge key={ele.id} pill bg='success' className='fs--2 me-2 text-wrap text-start'>{ele.title}</SoftBadge>
                                    ))}
                                </div>
                                <Card.Title className='text-black'>{title}</Card.Title>
                                <Card.Text className='fs--1 text-800'>{subTitle}</Card.Text>
                                <div className="mt-2">
                                    <Flex className='gap-3 align-items-center'>
                                        {liveUrl && <Button
                                            as='a'
                                            target="_blank"
                                            href={liveUrl}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <BsFillLaptopFill className='text-success' />
                                        </Button>}
                                        {githubUrl && <Button
                                            as='a'
                                            target="_blank"
                                            href={githubUrl}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <AiOutlineGithub className='text-github' />
                                        </Button>}
                                        {appstoreURL && <Button
                                            as='a'
                                            target="_blank"
                                            href={appstoreURL}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <SiAppstore className='text-primary' />
                                        </Button>}
                                        {playstoreURL && <Button
                                            as='a'
                                            target="_blank"
                                            href={playstoreURL}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <BiLogoPlayStore className='text-success' />
                                        </Button>}
                                    </Flex>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>}
        </>
    )

};

export default ProjectService;
