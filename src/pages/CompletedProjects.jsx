import React from "react";
import Banner from "../components/CompletedProjects/Banner/Banner";
import PhaseOne from "../components/CompletedProjects/Phase1/PhaseOne";
import VianCentral from "../components/CompletedProjects/VianCentral/VianCentral";
import PhaseTwo from "../components/CompletedProjects/PhaseTwo/PhaseTwo";
import Footer from "../components/Footer/Footer";
import MyImage from "../assets/valley.png";

const CompletedProjects = () => {
  return (
    <div className="relative ">
      {/* Floating Image */}
      <div className="fixed top-[10%] right-[5%]  xl:right-[10%] 2xl:right-[25%] w-40 h-auto z-20 max-w-2xl hidden md:block">
        <img src={MyImage} alt="Floating" className="w-full h-auto" />
      </div>

      {/* Sections with z-index */}
      <div className="relative z-40">
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
