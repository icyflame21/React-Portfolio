import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import NavbarStandard from "./NavbarStandard";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import FooterStandard from "./FooterStandard";
import Background from "./Background";

const Landing = () => {
  return (
    <>
      <NavbarStandard />
      <Hero />
      <About />
      <Skills />
      <Background />
      <Projects />
      <Contact />
      <FooterStandard />
    </>
  );
};

export default Landing;
