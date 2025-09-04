import ExploreNow from "../components/Home/ExploreNow/ExploreNow";
import Banner from "../components/Home/Banner";
import ChooseUs from "../components/Home/ChooseUs/ChooseUs";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Home/Timeline/Timeline";
import SEO from "../components/RouteWithSEO";
const Home = () => {
  return (
    <section className="bg-color-white">
      <SEO
        title="Vian Properties Hyderabad | Luxury Real Estate & Premium Apartments"
        description="Discover Vian Properties – redefining luxury living in Hyderabad with thoughtfully designed premium apartments. Ideal for homeowners and investors seeking comfort, style, and long-term value."
        keywords="Vian Properties, luxury apartments Hyderabad, premium real estate Hyderabad, Vian VILVA, Vian VAYU, Vian Valley, Hyderabad property investment, ongoing projects Hyderabad, future real estate projects, trusted builders Hyderabad."
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
