const Content = () => (
  <div className="bg-white flex justify-center md:px-10 px-5 py-[50px] md:py-[80px]">
    <div className="w-full max-w-7xl h-auto flex flex-col justify-center mx-auto">
      <div className="max-w-3xl">
        <div>
          <p className="leading-relaxed mb-10 text-justify md:text-left w-full md:w-[600px]">
            Vian Properties has also acquired land adjacent to Mrida. It was
            proposed to build a high-rise residential project of 4 Basements,
            plus a Stilt. The total number of flats designed under this project
            is 350.
          </p>
        </div>
        <div className="h-10 md:h-16" />
        <div className="flex flex-wrap md:flex-nowrap justify-start items-start gap-10 md:gap-60">
          <div className="text-left">
            <h1 className="text-red-600 font-semibold margin-bottom-0">35</h1>
            <p className="text-base">Floors</p>
          </div>
          <div className="text-left">
            <h1 className="text-orange-500 font-bold margin-bottom-0">6.76L</h1>
            <p className="text-base">sq ft of built up area</p>
          </div>
          <div className="text-left">
            <h1 className=" font-semibold text-color-red margin-bottom-0">
              2.30
            </h1>
            <p className="text-base">Acres</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Content;
