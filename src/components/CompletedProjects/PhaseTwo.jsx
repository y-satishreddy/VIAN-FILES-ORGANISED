import { Link } from "react-router-dom";
const PhaseTwo = () => {
  return (
    <div className="bg-white flex justify-center  md:px-10 px-5">
      <div className="w-full max-w-7xl h-[400px] flex items-center mx-auto">
        <div className="max-w-xl">
          <h1 className="font-bold text-color-red mb-4">
            Vian Valley Phase II:
          </h1>
          <p className=" mb-6">
            Currently, the project is extended by 63 acres more in Phase II, and
            there is a plan to make it 500 acres, as our director has strong
            skills in managing relationships with farmers and landowners.
          </p>
          <br />
          <Link
            to="/completed-projects"
            className="inline-block px-8 py-1 border-2 border-[#f37820] text-[#f37820] text-sm md:text-base transition-colors duration-300 bg-orange-red-gradient hover:text-white w-fit"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PhaseTwo;
