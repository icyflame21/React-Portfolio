import React, { useEffect, useState } from "react";
import {
  CloseButton,
  Container,
  Image,
  Modal,
  Nav,
  Navbar,
  Table,
} from "react-bootstrap";
import { topNavbarBreakpoint } from "config";
import Flex from "components/common/Flex";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "assets/img/team/logo.webp";
import { Link } from "react-scroll";
import sections from "data/nav";
import { fontSizes } from "helpers/fonts";

const NavbarStandard = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [showDropShadow, setShowDropShadow] = useState(false);

  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setDropShadow);
    return () => window.removeEventListener("scroll", setDropShadow);
  }, []);

  return (
    <Navbar
      onToggle={(expand) => {
        setNavbarToggle(expand);
      }}
      expanded={navbarToggle}
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames("navbar-glass bg-light", {
        "navbar-glass-shadow": showDropShadow,
      })}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center py-2 px-lg-5"
      >
        {isMatch ? (
          <Image
            alt="Logo"
            src={Logo}
            style={{
              objectFit: "contain",
              width: "180px",
            }}
          />
        ) : (
          <Navbar.Brand>
            <Image
              alt="Logo"
              src={Logo}
              style={{
                objectFit: "contain",
                width: "200px",
              }}
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle>
          <HiOutlineMenuAlt2 className="fs-5 info" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          className="bg-white border-0 shadow-none"
          style={{
            width: "70%",
          }}
        >
          {navbarToggle && isMatch ? (
            <Modal.Header className="bg-white border-0 p-3 w-100">
              <Navbar.Brand className="fs-2">
                <Image
                  alt="Logo"
                  src={Logo}
                  style={{
                    objectFit: "contain",
                    width: "180px",
                  }}
                />
              </Navbar.Brand>
              <CloseButton
                className="btn btn-circle btn-sm transition-base p-0"
                onClick={() => {
                  setNavbarToggle(false);
                }}
              />
            </Modal.Header>
          ) : (
            ""
          )}
          {navbarToggle && isMatch ? (
            <Modal.Body
              style={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <Table responsive bordered striped className="bg-200">
                <tbody className="">
                  {sections.map((ele, idx) => (
                    <tr className={` align-middle`} key={ele.id + "-" + idx}>
                      <td>
                        <Link
                          activeClass="orange-text-gradient"
                          to={ele.id}
                          spy={true}
                          isDynamic={true}
                          ignoreCancelEvents={true}
                          smooth="easeInOutCubic"
                          style={{ fontSize: fontSizes.navigationMenu }}
                          className="gray2 cursor-pointer text-decoration-none"
                        >
                          {ele.label}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Modal.Body>
          ) : isMatch ? null : (
            <Nav className="ms-auto me-7">
              <Flex direction="row" alignItems="center" className="gap-5">
                {sections.map((ele, idx) => (
                  <Link
                    key={ele.id + "-" + idx}
                    activeClass="orange-text-gradient"
                    to={ele.id}
                    spy={true}
                    isDynamic={true}
                    ignoreCancelEvents={true}
                    smooth="easeInOutCubic"
                    style={{ fontSize: fontSizes.navigationMenu }}
                    className="gray2 cursor-pointer text-decoration-none"
                  >
                    {ele.label}
                  </Link>
                ))}
              </Flex>
            </Nav>
          )}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
