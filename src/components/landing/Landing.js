import React from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import Services from './Services';
import Contact from './Contact';
import FooterStandard from './FooterStandard';
import About from './About';
import Skills from './Skills';
import Background from './Background';
import Projects from './Projects';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Landing = () => {

  return (
    <>
      <NavbarStandard />
      <Hero />
      <About />
      <Skills />
      <Background />
      {/* <Services /> */}
      <Projects />
      <Contact />
      <FooterStandard />
    </>
  );
};

export default Landing;
