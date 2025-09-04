import Navbar from "../../Navbar/Navabar";
import "./banner.css";
const Banner = () => {
  return (
    <div className="relative flex flex-col bg-[#F0F0F0] min-h-screen hero-contact-section">
      <div className="w-full z-50">
        <Navbar />
      </div>
      <section className="w-full flex justify-center px-5 md:px-10 pt-0 md:pt-0 relative flex-1">
        <div className="w-full max-w-7xl mx-auto relative flex-1 flex flex-col justify-end">
          <div className="flex justify-baseline items-baseline flex-col md:flex-row md:justify-between md:items-start w-full px-0 md:px-0 py-6 md:py-10">
            <div className="flex flex-col text-left">
              <p className="mb-1">Contact</p>
              <a className="text-color-red font-semibold text-sm md:text-base leading-relaxed">
                <h1 className="text-color-red">
                  <a href="tel:+919703766066">+91 97037 66066 </a>
                  <br />
                  <a href="tel:+91 40 4853 5666">+91 40 4853 5666</a>
                </h1>
              </a>
            </div>
            <div className="flex flex-col items-start md:items-start">
              <p className="mb-1">Email</p>
              <a
                href="mailto:hello@vianproperties.com"
                className="text-color-red font-semibold text-sm md:text-base hover:text-blue-600 transition-colors"
              >
                <h1 className="text-color-red">
                  <a href="mailto:hello@vianproperties.com">
                    hello@vianproperties.com
                  </a>
                </h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
