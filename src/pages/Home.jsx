import React from "react";
import Hero from "../components/heroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/Services";
import CTASection from "../components/CTASection";
import RecommendationSection from "../components/RecommedationSection";
import ToolsSection from "../components/ToolsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <CTASection /> */}

      <ToolsSection />

      <RecommendationSection />
    </>
  );
};

export default Home;
