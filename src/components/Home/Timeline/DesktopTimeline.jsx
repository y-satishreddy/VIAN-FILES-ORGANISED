import TimelineImg from "../../../assets/home/milestone.svg";
const Timeline = () => {
  return (
    <>
      <h1 className="text-center mb-[80px] text-color-orange pt-[80px]">
        History & Milestones
      </h1>
      <section className="relative w-full max-w-7xl mx-auto px-10 py-20 hidden md:block bg-white">
        <div className="absolute left-0 top-1/2 w-full border-t border-dotted border-gray-400 z-0"></div>
        <div className="relative flex justify-between items-center">
          <div className="flex flex-col items-center translate-y-12 relative z-10">
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
            <div className="text-[#F44336] font-bold text-[22px] mb-1">
              2019
            </div>
            <p className="text-center mb-2">
              <span className="text-[#F47920]">●</span> Incorporated <br /> Vian
              Properties
            </p>
          </div>
          <div className="flex flex-col items-center -translate-y-12 relative z-10">
            <p className="text-center mt-1">
              <span className="text-[#F47920]">●</span> Land Acquisition <br />&
              Research
            </p>
            <div className="text-[#F44336] font-bold text-[22px] mt-2">
              2020
            </div>
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
          </div>
          <div className="flex flex-col items-center translate-y-9 relative z-10">
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
            <div className="text-[#F44336] font-bold text-[22px] mb-1">
              2021
            </div>
            <p className=" text-center mb-2">
              <span className="text-[#F47920]">●</span> Vian Valley
            </p>
          </div>
          <div className="flex flex-col items-center -translate-y-10 relative z-10">
            <p className=" text-center mt-1">
              <span className="text-[#F47920]">●</span> Vian Central
            </p>
            <div className="text-[#F44336] font-bold text-[22px] mt-2">
              2022
            </div>
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
          </div>
          <div className="flex flex-col items-center translate-y-16 relative z-10">
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
            <div className="text-[#F44336] font-bold text-[22px] mb-1">
              2024
            </div>
            <p className=" text-center mb-1">
              <span className="text-[#F47920]">●</span> Vian VILVA <br />& Vian
              VAYU
            </p>
            <p className=" text-center mb-2">
              <span className="text-[#F47920]">●</span> Vian Valley Phase II
            </p>
          </div>
          <div className="flex flex-col items-center -translate-y-10 relative z-10">
            <p className=" text-center mt-1">
              <span className="text-[#F47920]">●</span> Projects Expansion
            </p>
            <div className="text-[#F44336] font-bold text-[22px] mt-2">
              2025
            </div>
            <img src={TimelineImg} alt="logo" className="w-[40px]" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Timeline;
