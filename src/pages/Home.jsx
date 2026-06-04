import React from "react";
import Hero from "../components/heroSection";
import AboutSection from "../components/AboutSection";
import Services from "./Services";
import ServicesSection from "../components/Services";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <CTASection /> */}
    </>
  );
};

export default Home;
