import Banner from "../components/AboutUs/Banner/Banner";
import VisionMission from "../components/AboutUs/VisionAndMission";
import Values from "../components/AboutUs/Values";
import Leadership from "../components/AboutUs/Leadership/Leadership";
import Footer from "../components/Footer/Footer";
import SEO from "../components/RouteWithSEO";
const AboutUs = () => {
  return (
    <>
      <SEO
        title="VIAN PROPERTIES | About Us"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Banner />
      <VisionMission />
      <Values />
      <Leadership />
      <Footer />
    </>
  );
};

export default AboutUs;
