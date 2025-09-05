import React, { useRef, useEffect, useState } from "react";
import BannerVideoMobile from "../../assets/home/bannerMobileVideo.mp4";
import BannerVideoDesktop from "../../assets/home/bannerVideo.mp4";
import PosterImage from "../../assets/home/poster.png";
import Navbar from "../Navbar/Navabar";

const Banner = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    const video = videoRef.current;
    if (video) {
      video.muted = true; 
      video.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoSrc = isMobile ? BannerVideoMobile : BannerVideoDesktop;

  return (
    <section className="relative w-full h-[93vh] md:h-screen bg-[#f0f0f0] overflow-hidden">
      <div className="relative w-full h-full px-5 md:px-10">
      
        <video
          key={videoSrc} 
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster={PosterImage}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
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
