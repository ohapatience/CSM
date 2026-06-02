import React from "react";
import Hero from "../components/heroSection";
import AboutSection from "../components/AboutSection";
import Services from "./Services";
import ServicesSection from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default Home;
