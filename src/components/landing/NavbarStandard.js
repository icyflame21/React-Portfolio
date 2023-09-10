import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Nav, Navbar, Table } from 'react-bootstrap';
import { topNavbarBreakpoint } from 'config';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { useMediaQuery, useTheme } from '@mui/material';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Logo from 'assets/img/team/logo.jpg'
import { GiSkills } from 'react-icons/gi'
import { BsInfoSquareFill } from 'react-icons/bs'
import { BiSolidContact } from 'react-icons/bi'
import { MdCastForEducation } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import '../../CSS/GradientText.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NavbarStandard = () => {
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
      className={classNames('navbar-glass bg-white', {
        'navbar-glass-shadow': showDropShadow,
      })}>
      <Container className='d-flex justify-content-between align-items-center py-2'>
        {isMatch ?
          <div className='position-relative overflow-hidden h-sm-100'>
            <LazyLoadImage
              alt="Logo"
              src={Logo}
              effect='blur'
              style={{
                objectFit: 'contain',
                width: '40px',
              }}
            />
          </div> : <Navbar.Brand className="fs-4 info" style={{
            fontFamily: 'Forum',
            letterSpacing: '5px'
          }}>
            <Flex alignItems='center' className='gap-2'>
              <div className='position-relative overflow-hidden h-sm-100'>
                <LazyLoadImage
                  alt="Logo"
                  src={Logo}
                  effect='blur'
                  style={{
                    objectFit: 'contain',
                    width: '65px',
                  }}
                />
              </div>
              Biswaranjan
            </Flex>
          </Navbar.Brand>}
        <Navbar.Toggle >
          <HiOutlineMenuAlt2 className='fs-5 info' />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          className='bg-white border-0 shadow-none'
          style={{
            width: '70%',
          }}
        >
          {navbarToggle && isMatch ? <Modal.Header className='bg-white'
          >
            <Navbar.Brand className="fs-2 p-3 info w-100" style={{
              fontFamily: 'Forum',
              borderBottom: '2px solid #34076b',
              letterSpacing: '5px'
            }}>
              <Flex alignItems='center' className='gap-2'>
                <div className='position-relative overflow-hidden h-sm-100'>
                  <LazyLoadImage
                    alt="Logo"
                    src={Logo}
                    effect='blur'
                    style={{
                      objectFit: 'contain',
                      width: '40px',
                    }}
                  />
                </div>
                Biswaranjan
              </Flex>
            </Navbar.Brand>
          </Modal.Header> : ''}
          {navbarToggle && isMatch ? <Modal.Body
            style={{
              backgroundColor: '#f5f5f5'
            }}>
            <Table responsive bordered striped className='bg-200'>
              <tbody className=''>
                <tr>
                  <td>
                    <Button
                      as='a'
                      href='#about'
                      className='gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <BsInfoSquareFill className='me-2 fs-1 gray1' />
                      About
                    </Button></td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as='a'
                      href='#skills'
                      className='gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <GiSkills className='me-2 fs-1 gray1' />
                      Skills
                    </Button></td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as='a'
                      href='#background'
                      className='gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <MdCastForEducation className='me-2 fs-1 gray1' />
                      Background
                    </Button></td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as='a'
                      href='#projects'
                      className='gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <AiFillProject className='me-2 fs-1 gray1' />
                      Projects
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as='a'
                      href='#contact'
                      className='gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none'
                      style={{
                        textAlign: 'left'
                      }}
                    >
                      <BiSolidContact className='me-2 fs-1 gray1' />
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
                  style={{ fontSize: '16px', fontWeight: 500 }} className='bg-transparent title_text border-0 shadow-none px-4 py-2'>About</Button>
                <Button as='a' href="#skills"
                  style={{ fontSize: '16px', fontWeight: 500 }} className='bg-transparent title_text border-0 shadow-none px-4 py-2'>Skills</Button>
                <Button as='a' href="#background"
                  style={{ fontSize: '16px', fontWeight: 500 }} className='bg-transparent title_text border-0 shadow-none px-4 py-2'>Background</Button>
                <Button as='a' href="#projects"
                  style={{ fontSize: '16px', fontWeight: 500 }} className='bg-transparent title_text border-0 shadow-none px-4 py-2'>Projects</Button>
                <Button as='a' href="#contact"
                  style={{ fontSize: '16px', fontWeight: 500 }} className='border-0 shadow-none button px-4 py-2'>Contact</Button>
              </Flex>
            </Nav>}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
