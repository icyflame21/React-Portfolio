import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CloseButton, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';
import Avatar from 'components/common/Avatar';
import user1 from 'assets/img/team/1.jpg';
import Typed from 'react-typed';

const NavbarStandard = ({ activeSection }) => {
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
      variant={isDark ? 'dark' : 'light'}
      bg={isDark ? 'dark' : 'light'}
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
        <Navbar.Brand className="fw-semi-bold fs-lg-5 fs-4 gradient_hero_text" href="#" style={{
          fontFamily: 'Great Vibes'
        }}>
          <Typed
            strings={['_biswaranjan.dev']}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas
          placement="start"
          scroll={true}
          style={{
            background: 'transparent'
          }}
        >
          {navbarToggle ? <Modal.Header style={{
            background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)'
          }} className="border-0">
            <Navbar.Brand className="fw-semi-bold fs-4 gradient_hero_text" href="#" style={{
              fontFamily: 'Great Vibes'
            }}>
              <Typed
                strings={['_biswaranjan.dev']}
                typeSpeed={120}
                backSpeed={120}
                loop
              />
            </Navbar.Brand>
            <CloseButton
              className="btn btn-circle btn-sm transition-base p-0"
              onClick={() => setNavbarToggle(false)}
            />
          </Modal.Header> : ''}
          {navbarToggle ? <Modal.Body className='py-4'
            style={{ background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)' }}>
            <Flex direction='column'>
              <Button as='a' href="#about"
                variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>About</Button>{' '}
              <Button as='a' href="#skills"
                variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>Skills</Button>{' '}
              <Button as='a' href="#background"
                variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>Background</Button>{' '}
              <Button as='a' href="#projects"
                variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>Projects</Button>{' '}
              <Button as='a' href="#contact"
                variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>Contact</Button>
              <Button as='a' href="#!" onClick={() => setConfig('isDark', !isDark)} variant="outline-primary" className='fs-0 fw-medium border-1 rounded-pill my-2'>{isDark ? 'Switch to light theme ' : 'Switch to dark theme'}</Button>
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
