import BannerVideoMobile from "../../assets/home/bannerMobileVideo.mp4";
import BannerVideoDesktop from "../../assets/home/bannerVideo.mp4";
import PosterImage from "../../assets/home/poster.png";
import Navbar from "../Navbar/Navabar";
const Banner = () => {
  return (
    <section className="relative w-full h-screen bg-[#f0f0f0] overflow-hidden">
      <div className="relative w-full h-full px-5 md:px-10">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          poster={PosterImage}
        >
          <source
            src={BannerVideoDesktop}
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source
            src={BannerVideoMobile}
            type="video/mp4"
            media="(max-width: 767px)"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="w-full z-50">
            <Navbar />
          </div>
          <div className="w-full text-center">
            <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#F47920]">
              Welcome Home
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
