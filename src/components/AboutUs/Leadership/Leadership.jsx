import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./leadership.css";
import LeadershipImage from "../../../assets/aboutUs/Leadership.png";

export default function LeadershipCarousel() {
  const leaders = [
    {
      name: "Sai Saravana",
      role: "Director",
      image: LeadershipImage,
      description: `With over 14 years of experience in infrastructure, construction, and waste management, he has consistently driven business growth, operational efficiency, and long-term value. His expertise spans integrated waste management, real estate development, project execution, and business management. Known for his visionary leadership, he possesses a strong ability to build and lead high-performing teams, making significant contributions to the organisation’s success. His deep commitment to excellence and sustainability continues to be a key force behind the company’s growth and reputation.`,
      extra: `He brings a sharp strategic focus and operational insight to every project, with a strong ability to think innovatively and drive complex initiatives to successful completion. His strengths lie in fostering cohesive teams, setting high standards of execution, and creating long-term impact through sustainable and forward-thinking development.`,
    },
    {
      name: "Surendranath Kanchi",
      role: "Director",
      image: LeadershipImage,
      description: `As a well-regarded entrepreneur from Kadapa District, Andhra Pradesh, he has made a mark in the fields of transportation and real estate development. Beginning with the establishment of M/s Suri Transports in 2006, he steadily expanded into land development, land banking, and real estate ventures, playing a key role in shaping projects across Telangana and Andhra Pradesh that have contributed to the region’s growth.`,
      extra: `Known for his visionary leadership and commitment to excellence, he has consistently demonstrated the ability to scale ventures with lasting impact. Widely respected in the industry, he continues to move forward with a passion for creating meaningful developments and setting new benchmarks in the real estate space.`,
    },
    {
      name: "Arun Jupally",
      role: "Managing Director",
      image: LeadershipImage,
      description: `With over 13 years of experience in the real estate and construction industry, he has established a strong reputation for successfully managing diverse infrastructure projects, including lift irrigation systems, mining operations, villa developments, cyclone shelters, and public works such as roads and buildings. His strategic approach and practical expertise have consistently promoted growth, profitability, and innovation across every venture.`,
      extra: `With a B.Tech. from Jawaharlal Nehru Technological University, Hyderabad, and an MBA from the University of Findlay, Ohio, he offers a well-rounded perspective on business management, further developed through his experience as a business analyst for a Fortune 500 company. Known for his ability to build high-performing teams and lead with clarity and purpose, he combines deep industry knowledge with a forward-thinking outlook, making him a key contributor to the success of every organisation he joins.`,
    },
  ];

  return (
    <section className="w-full bg-gray-color px-5 py-[80px] md:px-[12%]">
      <h1 className="text-center  text-color-orange text-3xl font-bold">
        Leadership
      </h1>
      <div className="pb-5 h-auto w-auto" />

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          className="pb-12"
        >
          {leaders.map((leader, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="md:w-[40%] w-full flex justify-center md:justify-end">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="rounded-lg shadow-md w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover"
                  />
                </div>

                <div className="md:w-[60%] w-full text-center md:text-left">
                  <h2 className="text-color-red text-xl md:text-2xl font-semibold">
                    {leader.name}
                  </h2>
                  <p className="text-color-orange font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mb-2">
                    {leader.description}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    {leader.extra}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
