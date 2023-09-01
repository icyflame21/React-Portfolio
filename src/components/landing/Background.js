import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Section from 'components/common/Section';
import '../../CSS/GradientText.css'
import SectionHeader from './SectionHeader';
import { VerticalTimelineData } from 'data/timeline';
import classNames from 'classnames';

const Background = () => {
    const handleItalic = (text) => {
        const parts = text.split("@");
        const modifiedText = parts.length === 2 ? (
            <>
                {parts[0]}
                <span className='text-warning'>@<i>{parts[1]}</i></span>
            </>
        ) : text;
        return <h5 className="mb-2">{modifiedText}</h5>;
    };

    const handleColorPresentYr = (year) => {
        const parts = year.split("-");

        const formattedDateRange = (
            <>
                {parts.length === 1 ? parts[0] : <>
                    {parts[0]}-
                    {parts[1] === "Present" ? <span className="text-success">Present</span> : parts[1]}
                </>}
            </>
        );

        return <p className='fs--1 mb-0 fw-semi-bold'>{formattedDateRange}</p>;
    }
    return (
        <Section id="background" bg='white'>
            <Row className="justify-content-center">
                <Col>
                    <SectionHeader
                        title="My Education and Experience"
                        subtitle="Why hire me for your next project?"
                        dropCap
                        className='justify-content-center text-center'
                    />
                    <Card className="shadow-none border-0 bg-transparent">
                        <Card.Body className="px-sm-4 px-md-8 px-lg-6 px-xxl-8">
                            <div className="timeline-vertical">
                                {VerticalTimelineData.map((item, index) => {
                                    const { year, date, title, description, icon } = item;
                                    return (
                                        <div
                                            key={index}
                                            className={classNames('timeline-item', {
                                                'timeline-item-start': index % 2 === 0,
                                                'timeline-item-end': index % 2 !== 0
                                            })}
                                        >
                                            <div className="timeline-icon icon-item icon-item-lg text-primary border-300">
                                                {icon}
                                            </div>
                                            <Row
                                                className={` ${index % 2 == 0
                                                    ? 'timeline-item-start'
                                                    : 'timeline-item-end'
                                                    }`}
                                            >
                                                <Col lg={6} className="timeline-item-time">
                                                    <div>
                                                        {handleColorPresentYr(year)}
                                                        <p className="fs--2 text-600">{date}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="timeline-item-content">
                                                        <div className="timeline-item-card">
                                                            {handleItalic(title)}
                                                            <p className="fs--1 mb-0">{description}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Background;
