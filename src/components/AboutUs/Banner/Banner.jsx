import Navbar from "../../Navbar/Navabar";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <h1 className="banner-text">
        We build with intent.
        <br />
        We deliver with trust.
      </h1>
    </section>
  );
};

export default Banner;
