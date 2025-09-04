import React from "react";
import { Link } from "react-router-dom";
const ProjectOverview = () => (
  <div className="bg-white flex justify-center md:px-10 px-5 py-[50px] md:py-[80px]">
    {/* Fixed-width & fixed-height container */}
    <div className="w-full max-w-7xl h-auto  flex flex-col justify-center mx-auto">
      <div className="max-w-3xl">
        {/* Top Row: Tower, Residences, Floors */}
        <div className="flex flex-wrap md:flex-nowrap justify-start items-start gap-10 md:gap-60 mb-8">
          {/* Iconic Tower */}
          <div>
            <div className="text-red-600 text-3xl font-semibold">1</div>
            <div className="mt-1 text-gray-700 text-base">Iconic Tower</div>
          </div>

          {/* BHK Residences */}
          <div>
            <div className="text-orange-500 text-3xl font-bold">2 &amp; 3</div>
            <div className="mt-1 text-gray-700 text-base">BHK Residences</div>
          </div>

          {/* Floors */}
          <div>
            <div className="text-red-600 text-3xl font-semibold">G+32</div>
            <div className="mt-1 text-gray-700 text-base">Floors</div>
          </div>
        </div>

        {/* Description Text */}
        <div>
          <p className=" leading-relaxed mb-4 text-justify md:text-left w-full md:w-[600px]">
            Spread across 2.62 acres in Kolluru, Vian Mrida offers 358 premium
            apartments designed for effortless luxury and thoughtful living. The
            stepped elevation allows better light and ventilation, with select
            floors planned for specific flats to maintain openness. Homes
            feature 10 ft. wide corridors and 8 ft. wide balconies that open up
            to 270-degree views. Built with more than just regulations in mind,
            the project offers 6 per cent of its saleable area for clubhouse and
            amenities, exceeding the required 3 per cent. At its heart is a
            40,000 sft clubhouse with a rooftop infinity pool, all seamlessly
            connected to a 100-foot road and aligned with Vaastu principles.
          </p>
          <p className=" leading-relaxed">
            This is where everyday living rises into something quietly
            extraordinary.
          </p>
        </div>
        <br />
        {/* Button */}
        <div className="mt-6">
          <a
            href="https://vianmrida.in/"
            target="_blank"
            className="inline-block px-8 py-1 border-2 border-[#f37820] text-[#f37820] text-sm md:text-base transition-colors duration-300 bg-orange-red-gradient hover:text-white w-fit"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectOverview;
