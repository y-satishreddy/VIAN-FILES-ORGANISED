import React from "react";
import Banner from "../components/OnGoingProjects/Banner";
import Content from "../components/OnGoingProjects/Content";
import Footer from "../components/Footer/Footer";
import SEO from "../components/RouteWithSEO";
const OnGoingProjects = () => {
  return (
    <>
      <SEO
        title="Vian Mrida - 2 & 3 BHK Luxury Apartments in Kolluru | Vian Properties"
        description="Discover Vian Mrida – Premium 2 & 3 BHK flats in Kolluru, Hyderabad. Spread over 2.62 acres with G+32 iconic tower, rooftop infinity pool, 40,000 sft clubhouse, 270° views, and Vaastu-compliant design. Book your dream home today!"
        keywords="Vian Mrida, Kolluru apartments, 2 BHK flats Kolluru, 3 BHK flats Hyderabad, luxury apartments Hyderabad, Vian Properties, premium flats Kolluru, G+32 tower Hyderabad, Vaastu apartments Hyderabad"
      />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default OnGoingProjects;
