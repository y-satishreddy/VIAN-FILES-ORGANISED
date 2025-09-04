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
        title="About Vian Infra | Passionate, Sustainable Real Estate"
        description="Discover Vian Infra – where passion meets purpose. We build premium, sustainable spaces that foster community, trust, and excellence in real estate."
        keywords="Vian Infra, real estate development, sustainable real estate, luxury realty, eco-friendly construction, niche spaces, premium lifestyle projects, real estate Andhra Pradesh, real estate Telangana, visionary leadership, quality real estate, infrastructure development"
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
