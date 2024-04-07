import React, { Suspense } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingScreen from "./LoadingScreen";

const Landing = () => {
  const NavbarStandard = React.lazy(() => import("./NavbarStandard"));
  const Hero = React.lazy(() => import("./Hero"));
  const Skills = React.lazy(() => import("./Skills"));
  const About = React.lazy(() => import("./About"));
  const Projects = React.lazy(() => import("./Projects"));
  const Contact = React.lazy(() => import("./Contact"));
  const Background = React.lazy(() => import("./Background"));
  const FooterStandard = React.lazy(() => import("./FooterStandard"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <NavbarStandard />
      <Hero />
      <About />
      <Skills />
      <Background />
      <Projects />
      <Contact />
      <FooterStandard />
    </Suspense>
  );
};

export default Landing;
