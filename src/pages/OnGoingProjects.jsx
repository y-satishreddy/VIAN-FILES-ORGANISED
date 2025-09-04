import React from "react";
import Banner from "../components/OnGoingProjects/Banner";
import Content from "../components/OnGoingProjects/Content";
import Footer from "../components/Footer/Footer";
import SEO from "../components/RouteWithSEO";
const OnGoingProjects = () => {
  return (
    <>
      {" "}
      <SEO
        title="VIAN PROPERTIES | On Going Projects"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default OnGoingProjects;
