import Hoverbox from 'components/common/Hoverbox';
import SoftBadge from 'components/common/SoftBadge';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsFillLaptopFill } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import Flex from 'components/common/Flex';
import { useMediaQuery, useTheme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectService = ({ subTitle, title, liveUrl, githubUrl, thumbnail, techStack }) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
            {isMatch ?
                <Card className='h-100 my-4'>
                    <Row>
                        <Col sm={5} md={4}>
                            <div className='position-relative overflow-hidden h-sm-100'>
                                <LazyLoadImage
                                    src={thumbnail}
                                    effect='blur'
                                    className='w-100 fit-cover rounded-top fluid'
                                    alt={title}
                                />
                            </div>
                        </Col>
                        <Col sm={7} md={8} lg={8}>
                            <Card.Body>
                                <div className='mb-3 '>
                                    {techStack.map((ele) => (
                                        <SoftBadge key={ele.id} pill bg='success' className='fs--2 me-2 text-wrap text-start'>{ele.title}</SoftBadge>
                                    ))}
                                </div>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text className='fs--1 dropcap'>{subTitle}</Card.Text>
                                <div className="mt-2">
                                    <Flex className='gap-3 align-items-center'>
                                        <Button
                                            as='a'
                                            target="_blank"
                                            href={liveUrl}
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item icon-item-lg fs-2"
                                        >
                                            <BsFillLaptopFill className='text-success' />
                                        </Button>
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
                                    </Flex>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card> : <Card className='h-100 my-4'>
                    <div className='position-relative overflow-hidden h-sm-100'>
                        <LazyLoadImage
                            src={thumbnail}
                            effect='blur'
                            className='w-100 fit-cover rounded-top fluid'
                            alt={title}
                        />
                    </div>
                    <Card.Body>
                        <div className='mb-3 '>
                            {techStack.map((ele) => (
                                <SoftBadge key={ele.id} pill bg='success' className='fs--2 me-2 text-wrap text-start'>{ele.title}</SoftBadge>
                            ))}
                        </div>
                        <Card.Title >{title}</Card.Title>
                        <Card.Text className='fs--1 dropcap'>{subTitle}</Card.Text>
                        <div className="mt-2">
                            <Flex className='gap-3 align-items-center'>
                                <Button
                                    as='a'
                                    target="_blank"
                                    href={liveUrl}
                                    variant="falcon-default"
                                    type="button"
                                    size="sm"
                                    className="icon-item icon-item-lg fs-2"
                                >
                                    <BsFillLaptopFill className='text-success' />
                                </Button>
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
                            </Flex>
                        </div>
                    </Card.Body>
                </Card>}
        </>
    )

};

export default ProjectService;
