import React from "react";
import About from "./About";
import TechStack from "./TechStack";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <About />
      <TechStack />
    </section>
  );
};

export default AboutSection;
