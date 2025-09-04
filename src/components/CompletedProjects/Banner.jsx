import Navbar from "../Navbar/Navabar";
import VianValleyImage from "../../assets/vianValleyBanner.png";
export default function VianValley() {
  return (
    <div className="relative flex flex-col bg-[#F0F0F0] pb-[20px] md:pb-[40px]">
      <div className="w-full z-50">
        <Navbar />
      </div>
      <section className="w-full flex justify-center px-5 md:px-10 pt-0 md:pt-0">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start">
          <div className="w-full">
            <img
              src={VianValleyImage}
              alt="Vian Valley"
              className="w-full h-auto object-cover"
            />
          </div>
          <h1 className="mt-2 sm:mt-4 font-semibold text-[#ff7f32] w-full text-left md:text-left">
            Vian Valley
          </h1>
        </div>
      </section>
    </div>
  );
}
