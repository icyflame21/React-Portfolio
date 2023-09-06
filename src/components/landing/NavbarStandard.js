import React, { useContext, useEffect, useState } from 'react';
import { Button, CloseButton, Container, Modal, Nav, Navbar, Table } from 'react-bootstrap';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Avatar from 'components/common/Avatar';
import Logo from 'assets/img/team/logo.png'
import { FcAbout, FcServices, FcContacts } from 'react-icons/fc'
import { GiSkills } from 'react-icons/gi'
import { MdCastForEducation } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'


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
        background: showDropShadow ? 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)' : 'transparent'
      }}
      className={classNames('navbar-glass', {
        'navbar-glass-shadow bg-light': showDropShadow,
        'bg-transparent': !showDropShadow
      })}>
      <Container fluid className={`d-flex justify-content-between align-items-center py-2`}>
        {isMatch ? <Avatar
          size="3xl"
          src={Logo}
        /> : <Navbar.Brand className="fw-semi-bold fs-5 px-1 gradient_hero_text" href="#" style={{
          fontFamily: 'Great Vibes',
        }}>
          Biswaranjan S.
        </Navbar.Brand>}
        {/* {isMatch && <Nav className="ms-auto">
          <Nav.Link
            className="theme-control-toggle me-3"
            onClick={() => setConfig('isDark', !isDark)}
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
          </Nav.Link>
        </Nav>} */}
        <Navbar.Toggle >
          <HiOutlineMenuAlt2 className='fs-4 gradient_hero_text' />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          className='bg-light border-0 shadow-none'
          style={{
            width: '70%',
          }}
        >
          {navbarToggle && isMatch ? <Modal.Header className='bg-light border-0 border-bottom border-2 border-primary w-100'
            style={{
              background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)'
            }}>
            <Navbar.Brand className="fw-semi-bold fs-3 p-3 gradient_hero_text" href="#" style={{
              fontFamily: 'Great Vibes',
            }}>
              Biswaranjan S.
            </Navbar.Brand>
          </Modal.Header> : ''}
          {navbarToggle && isMatch ? <Modal.Body className='bg-white'>
            <Table responsive bordered striped>
              <tbody>
                <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#about'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <FcAbout className='me-2 fs-1' />
                      About
                    </Button></td>
                </tr>
                <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#skills'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <GiSkills className='me-2 fs-1 text-google-plus' />
                      Skills
                    </Button></td>
                </tr>
                <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#background'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <MdCastForEducation className='me-2 fs-1 text-success' />
                      Background
                    </Button></td>
                </tr>
                {/* <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#services'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                    >
                      <FcServices className='me-2 fs-1' />
                      Services
                    </Button></td>
                </tr> */}
                <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#projects'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <AiFillProject className='me-2 fs-1 gradient_hero_text' />
                      Projects
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      variant="link"
                      href='#contact'
                      className='p-0 fs-0 fw-medium text-700 w-100'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <FcContacts className='me-2 fs-1' />
                      Contact
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body> : isMatch ? null :
            <Nav className="ms-auto">
              <Flex direction='row' alignItems='center' >
                <Button as='a' href="#about"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>About</Button>
                <Button as='a' href="#skills"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>Skills</Button>
                <Button as='a' href="#background"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>Background</Button>
                {/* <Button as='a' href="#services"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>Services</Button> */}
                <Button as='a' href="#projects"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>Projects</Button>
                <Button as='a' href="#contact"
                  variant="outline-primary" className='fs-1 fw-medium border-0 rounded-pill'>Contact</Button>
                {/* <Nav.Link
                  className="theme-control-toggle"
                  onClick={() => setConfig('isDark', !isDark)}
                >
                  <div className="theme-control-toggle-label">
                    <FontAwesomeIcon
                      icon={isDark ? 'sun' : 'moon'}
                      className="fs-0"
                    />
                  </div>
                </Nav.Link> */}
              </Flex>
            </Nav>}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
