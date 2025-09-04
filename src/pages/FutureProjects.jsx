import React from "react";
import Banner from "../components/FutureProjects/Banner";
import Content from "../components/FutureProjects/Content";
import Footer from "../components/Footer/Footer";
import SEO from "../components/RouteWithSEO";
const FutureProjects = () => {
  return (
    <>
      {" "}
      <SEO
        title="VIAN PROPERTIES | Future Projects"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default FutureProjects;
