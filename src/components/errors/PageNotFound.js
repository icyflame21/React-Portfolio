import React from 'react';
import { Card } from 'react-bootstrap';
import PageNotFoundJSON from '../../assets/img/animated-icons/Page_Not_Found.json'
import Lottie from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
        <Card className="shadow-none border-0 bg-transparent h-100 text-center">
            <Card.Header>
                <Lottie options={notFoundJSON} />
            </Card.Header>
            <Card.Body>
                <Link className="btn btn-primary  btn-sm mt-2" to="/">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Take me home
                </Link>
            </Card.Body>
        </Card>
    )
};

export default PageNotFound;
