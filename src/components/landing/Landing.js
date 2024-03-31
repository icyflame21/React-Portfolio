import React, { Suspense } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingScreen from "./LoadingScreen";

const Loader = () => {
  return <LoadingScreen />;
};

const Landing = () => {
  const NavbarStandard = React.lazy(() => import("./NavbarStandard"));
  const Hero = React.lazy(() => import("./Hero"));
  const About = React.lazy(() => import("./About"));
  const Skills = React.lazy(() => import("./Skills"));
  const Background = React.lazy(() => import("./Background"));
  const Services = React.lazy(() => import("./Services"));
  const Projects = React.lazy(() => import("./Projects"));
  const Contact = React.lazy(() => import("./Contact"));
  const FooterStandard = React.lazy(() => import("./FooterStandard"));

  return (
    <Suspense fallback={null}>
      <NavbarStandard />
      <Hero />
      <About />
      <Skills />
      <Background />
      {/* <Services /> */}
      <Projects />
      <Contact />
      <FooterStandard />
    </Suspense>
  );
};

export default Landing;
