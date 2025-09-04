import ExploreNow from "../components/Home/ExploreNow/ExploreNow";
import Banner from "../components/Home/Banner";
import ChooseUs from "../components/Home/ChooseUs/ChooseUs";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Home/Timeline/Timeline";
import SEO from "../components/RouteWithSEO";
const Home = () => {
  return (
    <section className="bg-color-white">
      {" "}
      <SEO
        title="VIAN PROPERTIES | Home"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Banner />
      <ExploreNow />
      <ChooseUs />
      <Timeline />
      <Footer />
    </section>
  );
};

export default Home;
