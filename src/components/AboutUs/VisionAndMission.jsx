import Infinity from "../../assets/home/milestone.svg";
export default function VisionMission() {
  return (
    <section className="w-full bg-white px-5 md:px-10 lg:px-12 py-[50px] md:py-[80px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-1">
          <h1 className="text-color-red mb-3 text-2xl md:text-3xl font-bold">
            Vision
          </h1>
          <p className="leading-relaxed text-gray-700">
            To curate a world of diverse and premium experiences that blend into
            a harmonious whole and fulfil communities’ eco-systemic purpose,
            i.e., to build, sustain, and nurture an enriching life around them.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-color-red mb-3 text-2xl md:text-3xl font-bold">
            Mission
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <img src={Infinity} alt="infinity" className="w-5 h-5 mt-1" />
              <p className="leading-relaxed text-gray-700 text-justify">
                Creating niche spaces that establish an emotionally strong
                connection among the dwellers/owners. Concepts that create
                benchmarks in the lifestyle-driven realty segment.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={Infinity} alt="infinity" className="w-5 h-5 mt-1" />
              <p className="leading-relaxed text-gray-700">
                Anticipating and researching the needs and aspirations of
                people. Projecting the possibilities to them, following through
                efficiently, and consistently delivering projects of superlative
                quality.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={Infinity} alt="infinity" className="w-5 h-5 mt-1" />
              <p className="leading-relaxed text-gray-700">
                Investing in people, processes and newer technologies; managing
                a strong customer relationship.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={Infinity} alt="infinity" className="w-5 h-5 mt-1" />
              <p className="leading-relaxed text-gray-700 margin-bottom-0">
                Implementing best practices in business. Providing what’s
                promised, thereby earning the trust of customers and associates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
