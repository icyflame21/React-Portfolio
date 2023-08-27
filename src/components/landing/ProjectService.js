import Hoverbox from 'components/common/Hoverbox';
import SoftBadge from 'components/common/SoftBadge';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsFillLaptopFill } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'

const ProjectService = ({ subTitle, title, liveUrl, githubUrl, thumbnail, techStack }) => (

    <Card className='h-100 my-4 shadow-none'>
        <Hoverbox className="text-center">
            <Card.Img src={thumbnail} variant='top' alt={title} />
            <Hoverbox.Content className="light bg-dark p-5 px-6 flex-center rounded-top">
                <Card.Body className='p-0 m-0 d-flex gap-3 justify-content-center align-items-center'>
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
                </Card.Body>
            </Hoverbox.Content>
        </Hoverbox>

        <Card.Body>

            <div className='mb-3 '>
                {techStack.map((ele) => (
                    <SoftBadge key={ele.id} pill bg='success' className='fs--2 me-2 text-wrap text-start'>{ele.title}</SoftBadge>
                ))}
            </div>

            <Card.Title >{title}</Card.Title>
            <Card.Text className='fs--1 dropcap'>{subTitle}</Card.Text>
        </Card.Body>
    </Card>
);

export default ProjectService;
