import React, { useContext, useEffect, useState } from 'react';
import { Button, CloseButton, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';

const NavbarStandard = () => {
  const {
    config: { isDark },
    setConfig
  } = useContext(AppContext);

  const [navbarToggle, setNavbarToggle] = useState(false)
  const [showDropShadow, setShowDropShadow] = useState(false);

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  return (
    <Navbar
      onToggle={(expand) => {
        setNavbarToggle(expand)
      }}
      expanded={navbarToggle}
      fixed='top'
      expand={topNavbarBreakpoint}
      style={{
        background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)'
      }}
      className={classNames('navbar-glass', {
        'navbar-glass-shadow': showDropShadow
      })}>
      <Container fluid>
        <Navbar.Brand className="fw-semi-bold fs-6 px-1 gradient_hero_text" href="#" style={{
          fontFamily: 'Great Vibes'
        }}>
          biswaranjan.dev
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas
          scroll={true}
          style={{
            background: 'transparent',
            border: 'none',
            width:'max-content'
          }}
        >
          {navbarToggle && isMatch ? <Modal.Header 
          style={{
            background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)'
          }} className="border-0 py-3">
            <Navbar.Brand className="fw-semi-bold fs-4 px-3 gradient_hero_text" href="#" style={{
              fontFamily: 'Great Vibes'
            }}>
              biswaranjan.dev
            </Navbar.Brand>
            <CloseButton
              className="btn btn-circle btn-sm transition-base ms-4 me-2"
              onClick={() => setNavbarToggle(false)}
            />
          </Modal.Header> : ''}
          {navbarToggle && isMatch ? <Modal.Body className='py-4'
            style={{ background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)' }}>
            <Flex direction='column'>
              <a href="#about" className='fs-1 fw-medium mx-3 my-2'>About</a>{' '}
              <a href="#skills" className='fs-1 fw-medium mx-3 my-2'>Skills</a>{' '}
              <a href="#background" className='fs-1 fw-medium mx-3 my-2'>Background</a>{' '}
              <a href="#services" className='fs-1 fw-medium mx-3 my-2'>Services</a>{' '}
              <a href="#projects" className='fs-1 fw-medium mx-3 my-2'>Projects</a>{' '}
              <a href="#contact" className='fs-1 fw-medium mx-3 my-2'>Contact</a>
            </Flex>
          </Modal.Body> : isMatch ? null :
            <Nav className="ms-auto">
              <Flex direction='row' alignItems='center' >
                <Button as='a' href="#about"
                  variant="outline-primary" className='fs-0 fw-medium border-0 rounded-pill'>About</Button>{' '}
                <Button as='a' href="#skills"
                  variant="outline-primary" className='ms-1 fs-0 fw-medium border-0 rounded-pill'>Skills</Button>{' '}
                <Button as='a' href="#background"
                  variant="outline-primary" className='ms-1 fs-0 fw-medium border-0 rounded-pill'>Background</Button>{' '}
                <Button as='a' href="#services"
                  variant="outline-primary" className='ms-1 fs-0 fw-medium border-0 rounded-pill'>Services</Button>{' '}
                <Button as='a' href="#projects"
                  variant="outline-primary" className='ms-1 fs-0 fw-medium border-0 rounded-pill'>Projects</Button>{' '}
                <Button as='a' href="#contact"
                  variant="outline-primary" className='ms-1 fs-0 fw-medium border-0 rounded-pill'>Contact</Button>
                <Nav.Link
                  className="ms-1 theme-control-toggle"
                  onClick={() => setConfig('isDark', !isDark)}
                >
                  <div className="theme-control-toggle-label">
                    <FontAwesomeIcon
                      icon={isDark ? 'sun' : 'moon'}
                      className="fs-0"
                    />
                  </div>
                </Nav.Link>
              </Flex>
            </Nav>}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
