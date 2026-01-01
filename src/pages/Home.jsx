import React from "react";
import Spotlight from "./sections/Spotlight";
import AboutSection from "./sections/about/AboutSection";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <>
      <Spotlight />
      <AboutSection />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
