import React, { useEffect, useState } from "react";
import {
  Button,
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
import { useMediaQuery, useTheme } from "@mui/material";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "assets/img/team/logo.webp";
import "../../CSS/GradientText.css";
import { Link } from "react-scroll";
import sections from "data/nav";

const NavbarStandard = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [showDropShadow, setShowDropShadow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
      className={classNames("navbar-glass bg-white", {
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
              <Table responsive bordered hover>
                <tbody className="">
                  {sections.map((ele, idx) => (
                    <tr
                      className={`${
                        activeLink == ele.id
                          ? "bg-info border-info"
                          : "border-300"
                      } align-middle border  rounded`}
                      key={ele.id + "-" + idx}
                    >
                      <td>
                        <Link
                          activeClass="text-white"
                          to={ele.id}
                          spy={true}
                          as={Button}
                          smooth={true}
                          onSetActive={handleSetActive}
                          duration={500}
                          style={{ textAlign: "left" }}
                          className="gray1 fs-0 fw-medium p-0 w-100 bg-transparent border-0 shadow-none cursor-pointer text-decoration-none"
                        >
                          {ele.icon}
                          {ele.label}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Modal.Body>
          ) : isMatch ? null : (
            <Nav className="ms-auto">
              <Flex direction="row" alignItems="center">
                {sections.map((ele, idx) => (
                  <Link
                    key={ele.id + "-" + idx}
                    activeClass="button"
                    to={ele.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ fontSize: "16px", fontWeight: 500 }}
                    className="title_text border-0 rounded shadow-none px-4 py-2 cursor-pointer text-decoration-none"
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
