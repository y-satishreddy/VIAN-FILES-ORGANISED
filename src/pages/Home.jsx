import ExploreNow from "../components/Home/ExploreNow/ExploreNow";
import Banner from "../components/Home/Banner";
import ChooseUs from "../components/Home/ChooseUs/ChooseUs";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Home/Timeline/Timeline";
const Home = () => {
  return (
    <section className="bg-color-white">
      <Banner />
      <ExploreNow />
      <ChooseUs />
      <Timeline />
      <Footer />
    </section>
  );
};

export default Home;
