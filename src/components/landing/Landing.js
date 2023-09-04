import React, { Suspense } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Col, Row, Spinner } from 'react-bootstrap';


const Loader = () => {
  return (
    <Row className="g-0 min-vw-100 min-vh-100" >
      <Col xs={12} className='d-flex align-items-center justify-content-center' >
        <Spinner animation="border" variant="dark" />
      </Col>
    </Row>
  )
}

const Landing = () => {
  const NavbarStandard = React.lazy(() => import('./NavbarStandard'))
  const Hero = React.lazy(() => import('./Hero'))
  const About = React.lazy(() => import('./About'))
  const Skills = React.lazy(() => import('./Skills'))
  const Background = React.lazy(() => import('./Background'))
  const Services = React.lazy(() => import('./Services'))
  const Projects = React.lazy(() => import('./Projects'))
  const Contact = React.lazy(() => import('./Contact'))
  const FooterStandard = React.lazy(() => import('./FooterStandard'))


  return (
    <Suspense fallback={<Loader />}>
      <NavbarStandard />
      <Hero />
      <About />
      <Skills />
      <Background />
      <Services />
      <Projects />
      <Contact />
      <FooterStandard />
    </Suspense>
  );
};

export default Landing;
