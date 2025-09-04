import TimelineImg from "../../../assets/home/milestone.svg";
const Timeline = () => {
  const milestones = [
    { year: "2019", events: ["Incorporated Vian Properties"] },
    { year: "2020", events: ["Land Acquisition & Research"] },
    { year: "2021", events: ["Vian Valley"] },
    { year: "2022", events: ["Vian Central"] },
    {
      year: "2024",
      events: ["Vian VILVA & Vian VAYU", "Vian Valley Phase II"],
    },
    { year: "2025", events: ["Projects Expansion"] },
  ];
  return (
    <div className="w-full px-5 md:px-20 ">
      <h1 className="text-center margin-bottom-0 text-color-orange text-3xl font-bold pb-[50px]">
        History & Milestones
      </h1>
      <br />
      <div className="flex justify-center items-center">
        <div className="relative flex flex-col items-start gap-10">
          <hr className="absolute left-5 top-0 h-full border-l-2 border-dotted border-gray-300 z-0" />
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6 relative z-10">
              <div className="flex items-start justify-center w-12 h-12 bg-white  flex-shrink-0">
                <img src={TimelineImg} alt="logo" className="w-8 h-8 mt-1" />
              </div>
              <div className="flex flex-col items-start mt-1">
                <h1 className="text-color-red font-bold margin-bottom-0">
                  {milestone.year}
                </h1>
                {milestone.events.map((event, i) => (
                  <p
                    key={i}
                    className=" flex items-center gap-x-2 margin-bottom-0"
                  >
                    <span className="text-color-orange text-lg">●</span>
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
