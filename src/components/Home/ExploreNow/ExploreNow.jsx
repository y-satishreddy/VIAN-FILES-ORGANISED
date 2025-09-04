import { Link } from "react-router-dom";
import BgImage from "../../../assets/home/bgExploreNow.jpg";
import ExploreImage from "../../../assets/home/building.png";
const ExploreNow = () => {
  return (
    <section
      className="w-full min-h-[500px] bg-cover bg-left flex items-stretch px-5 md:px-10 md:pt-[80px] pt-[50px]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-0 items-stretch text-[#636466]">
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-2  text-sm md:text-base leading-relaxed md:pr-8">
          <p>
            <b>Vian Properties</b> in Hyderabad is setting a new benchmark for
            luxury living with its upcoming premium projects. Thoughtfully
            envisioned to blend contemporary design with lasting comfort, each
            space is planned with sophistication and convenience in mind. For
            those seeking more than just a home, this is the essence of a
            refined life.
          </p>
          <p>
            Beyond aesthetics, Vian Properties also represents a smart real
            estate investment. Located in one of Hyderabad’s most rapidly
            developing areas, it offers the potential for significant long-term
            appreciation. With rising demand for high-quality residential
            spaces, investing in these luxury apartments ensures both personal
            satisfaction and financial growth.
          </p>
          <p>
            Whether you’re a discerning homeowner or a strategic investor, Vian
            Properties is where future-ready living begins.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-1 border-2 border-[#f37820] text-[#f37820] text-sm md:text-base transition-colors duration-300 bg-orange-red-gradient hover:text-white w-fit"
          >
            Explore Now
          </Link>
        </div>
        <div className="w-full md:w-2/5 flex items-end justify-center pb-4 md:pb-0">
          <img
            src={ExploreImage}
            alt="Explore Vian Properties"
            className="w-full max-w-sm md:max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default ExploreNow;
