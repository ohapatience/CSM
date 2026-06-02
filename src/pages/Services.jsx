import React from "react";
import PageHeroSection from "../components/PageHeroSection";

const Services = () => {
  return (
    <>
      <PageHeroSection
        label="What I Do"
        title="Every project. Delivered."
        titleHighlight="Delivered."
        subtitle="Five core services built around structure, clarity, and execution — from first sprint to final launch."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        pattern="cross"
        align="center"
      />
    </>
  );
};

export default Services;
