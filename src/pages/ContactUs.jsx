import Banner from "../components/ContactUs/Banner/Banner";
import Footer from "../components/ContactUs/Footer";
import Form from "../components/ContactUs/Form";
import Maps from "../components/ContactUs/Maps";
import SEO from "../components/RouteWithSEO";
const ContactUs = () => {
  return (
    <>
      {" "}
      <SEO
        title="VIAN PROPERTIES | Contact Us"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Banner></Banner>
      <Maps />
      <Form />
      <Footer />
    </>
  );
};

export default ContactUs;
