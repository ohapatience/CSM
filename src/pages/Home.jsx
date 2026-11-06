import React from "react";
import Hero from "../components/heroSection";
import AboutSection from "../components/AboutSection";
import VideoSection from "../components/VideoSection";
import ToolsSection from "../components/ToolsSection";
import RecommendationSection from "../components/RecommedationSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <VideoSection />
      <ToolsSection />
      <RecommendationSection />
    </>
  );
};

export default Home;