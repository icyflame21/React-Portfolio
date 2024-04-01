import React, { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingScreen from "./LoadingScreen";
import NavbarStandard from "./NavbarStandard";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import FooterStandard from "./FooterStandard";
import Background from "./Background";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
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
