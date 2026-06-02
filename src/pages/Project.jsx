import React from "react";
import PageHeroSection from "../components/PageHeroSection";

const Project = () => {
  return (
    <>
      <PageHeroSection
        label="My Work"
        title="Ideas turned into shipped products."
        titleHighlight="shipped products."
        subtitle="A collection of projects across SaaS, mobile, and digital — coordinated and delivered."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        pattern="arcs"
        align="center"
      />
    </>
  );
};

export default Project;
