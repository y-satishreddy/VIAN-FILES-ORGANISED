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
        title="Vian Vayu – Premium 35-Storey Residential Tower in Gachibowli, Hyderabad"
        description="Explore Vian Vayu by Vian Properties – a 35-floor luxury residential high-rise near Mrida, Gachibowli. Spread across 2.30 acres with 350 flats and 6.76 lakh sq. ft. of built-up area. Experience upscale living in Hyderabad."
        keywords="Vian Vayu, Vian Properties, Gachibowli apartments, high-rise flats Hyderabad, luxury residential project, 35 floor apartment Hyderabad, flats near Mrida, new residential projects Gachibowli, Vian Vayu Hyderabad, premium apartments Hyderabad"
      />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default FutureProjects;
