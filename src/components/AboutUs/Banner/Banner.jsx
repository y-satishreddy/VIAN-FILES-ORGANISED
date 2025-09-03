import React from "react";
import Navbar from "../../Navbar/Navabar"; // import your navbar
import "./Banner.css"; // custom css

const Banner = () => {
  return (
    <section className="banner relative w-full h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Text Content */}
      <h1 className="banner-text">
        We build with intent.
        <br />
        We deliver with trust.
      </h1>
    </section>
  );
};

export default Banner;
