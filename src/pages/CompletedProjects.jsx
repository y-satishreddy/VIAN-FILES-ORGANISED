import React from "react";
import Banner from "../components/CompletedProjects/Banner";
import PhaseOne from "../components/CompletedProjects/PhaseOne";
import VianCentral from "../components/CompletedProjects/VianCentral";
import PhaseTwo from "../components/CompletedProjects/PhaseTwo";
import Footer from "../components/Footer/Footer";
import MyImage from "../assets/valley.png";
import SEO from "../components/RouteWithSEO";
const CompletedProjects = () => {
  return (
    <div className="relative ">
      <SEO
        title="VIAN PROPERTIES | Completed Projects"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <div className="fixed top-[20%] right-[5%]  xl:right-[10%] 2xl:right-[25%] w-40 h-auto z-20 max-w-2xl hidden md:block">
        <img src={MyImage} alt="Floating" className="w-full h-auto" />
      </div>

      <div className="relative z-45">
        <Banner />
      </div>

      <div className="relative z-10">
        <PhaseOne />
      </div>

      <div className="relative z-10">
        <VianCentral />
      </div>

      <div className="relative z-10">
        <PhaseTwo />
      </div>

      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
};

export default CompletedProjects;
