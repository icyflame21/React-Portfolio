import React, { useRef } from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import Partners from './Partners';
import Processes from './Processes';
import Services from './Services';
import Testimonial from './Testimonial';
import Cta from './Cta';
import FooterStandard from './FooterStandard';
import About from './About';
import Skills from './Skills';
import useScrollSpy from 'react-use-scrollspy';

const Landing = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
  });
  return (
    <>
      <NavbarStandard activeSection={activeSection} />
      <Hero />
      <About ref={sectionRefs[0]} />
      <Skills ref={sectionRefs[1]} />
      <Processes ref={sectionRefs[2]} />
      <Services ref={sectionRefs[3]} />
      <Testimonial ref={sectionRefs[4]} />
      <Cta />
      <FooterStandard />
    </>
  );
};

export default Landing;
