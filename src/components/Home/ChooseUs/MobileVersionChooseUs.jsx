import React from "react";
import TrustImg from "../../../assets/home/whyChooseUs/trust.svg";
import QualityImg from "../../../assets/home/whyChooseUs/quality.svg";
import DocumentationImg from "../../../assets/home/whyChooseUs/documentation.svg";
import CustomerImg from "../../../assets/home/whyChooseUs/customer.svg";
import LegacyImg from "../../../assets/home/whyChooseUs/emerging.svg";

const WhyChooseUsMobile = () => {
  const features = [
    {
      img: TrustImg,
      title: (
        <>
          A Vision <br /> Rooted in Trust
        </>
      ),
    },
    {
      img: QualityImg,
      title: (
        <>
          Quality-first <br /> Philosophy
        </>
      ),
    },
    {
      img: DocumentationImg,
      title: (
        <>
          Transparent Processes <br /> & Documentation
        </>
      ),
    },
    {
      img: CustomerImg,
      title: (
        <>
          Customer-centric <br /> approach
        </>
      ),
    },
    {
      img: LegacyImg,
      title: (
        <>
          Emerging Legacy <br /> with Purpose
        </>
      ),
    },
  ];

  return (
    <section className="py-[50px] px-4 bg-white w-full md:hidden">
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-bold text-center pb-[50px] text-red-600 mb-10">
          Why Choose Us?
        </h1>

        {/* First two rows with 2 features each */}
        <div className="grid grid-cols-2 gap-8 text-center mb-8">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <img src={feature.img} alt="feature" />
              <p className="text-gray-700 font-bold">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Last single feature centered */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-3">
            <img src={features[4].img} alt="feature" />
            <p className="text-gray-700 text-center font-bold ">
              {features[4].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMobile;
