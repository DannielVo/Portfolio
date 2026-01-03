import React from "react";
import Spotlight from "./sections/Spotlight";
import AboutSection from "./sections/about/AboutSection";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="pt-15">
      <Header />
      <Spotlight />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
