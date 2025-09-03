import Navbar from "../../Navbar/Navabar"; // Adjust the path as needed
import futureProjectsBanner from "../../../assets/futureProjectsBanner.png";

export default function VianValley() {
  return (
    <div className="relative flex flex-col bg-[#F0F0F0] pb-[20px] md:pb-[40px]">
      {/* Navbar */}
      <div className="w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="w-full flex justify-center px-5 md:px-10 pt-0 md:pt-0">
        {/* Fixed-width container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start">
          {/* Image */}
          <div className="w-full">
            <img
              src={futureProjectsBanner}
              alt="Vian Valley"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="mt-2 sm:mt-4 font-semibold text-[#ff7f32] w-full text-left md:text-left">
            Vian Vayu
          </h1>
        </div>
      </section>
    </div>
  );
}
