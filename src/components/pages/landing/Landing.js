import React, { useRef } from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';
import FooterStandard from './FooterStandard';
import About from './About';
import Skills from './Skills';
import Background from './Background';

const Landing = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <>
      <NavbarStandard />
      <Hero />
      <About ref={sectionRefs[0]} />
      <Skills ref={sectionRefs[1]} />
      <Background ref={sectionRefs[2]} />
      <Services ref={sectionRefs[3]} />
      {/* <Testimonial ref={sectionRefs[4]} /> */}
      <Contact ref={sectionRefs[5]}/>
      <FooterStandard />
    </>
  );
};

export default Landing;
