import React from "react";
import TrustImg from "../../../assets/home/whyChooseUs/trust.svg";
import QualityImg from "../../../assets/home/whyChooseUs/quality.svg";
import DocumentationImg from "../../../assets/home/whyChooseUs/documentation.svg";
import CustomerImg from "../../../assets/home/whyChooseUs/customer.svg";
import LegacyImg from "../../../assets/home/whyChooseUs/emerging.svg";
const WhyChooseUs = () => {
  return (
    <section className="px-4 md:px-10 pt-[80px] bg-white w-full">
      <div className="max-w-7xl mx-auto px-20">
        <h1 className="font-bold text-center text-red-600 pb-[50px]">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 text-center mb-12 px-[7px]">
          <div className="flex flex-col items-center space-y-1">
            <img src={TrustImg} alt="Trust" />
            <p className="text-[#636466] font-bold leading-snug">
              A Vision <br /> Rooted in Trust
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src={QualityImg} alt="Quality" />
            <p className="text-gray-700 font-bold leading-snug">
              Quality-first <br /> Philosophy
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src={DocumentationImg} alt="Documentation" />
            <p className="text-gray-700 font-bold leading-snug">
              Transparent Processes <br /> & Documentation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center max-w-3xl mx-auto px-[50px]">
          <div className="flex flex-col items-center space-y-1">
            <img src={CustomerImg} alt="Customer" />
            <p className="text-gray-700 font-bold leading-snug">
              Customer-centric <br /> approach
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src={LegacyImg} alt="Legacy" />
            <p className="text-gray-700 font-bold leading-snug">
              Emerging Legacy <br /> with Purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
