import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PageNotFoundJSON from '../../assets/img/animated-icons/Page_Not_Found.json'
import Lottie from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/GradientText.css'

const PageNotFound = () => {

    const notFoundJSON = {
        loop: true,
        autoplay: true,
        animationData: PageNotFoundJSON,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Card className="shadow-none border-0 bg-transparent h-100 text-center p-0">
            <Card.Header>
                <Lottie options={notFoundJSON} />
            </Card.Header>
            <Card.Body>
                <Button as='a' style={{ fontSize: '16px', fontWeight: 500 }} className="border-0 rounded-0 shadow-none button px-4 py-1 mt-2" href="/">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Take me home
                </Button>
            </Card.Body>
        </Card>
    )
};

export default PageNotFound;
