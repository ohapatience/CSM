import React from "react";
import PageHeroSection from "../components/PageHeroSection";

const About = () => {
  return (
    <>
      <PageHeroSection
        label="My Story"
        title="Driven by clarity. Defined by results."
        titleHighlight="results."
        subtitle="A technical project manager helping founders and startups turn ideas into shipped products."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        pattern="dots"
        align="left"
        badge="Open to work"
      />
    </>
  );
};

export default About;
