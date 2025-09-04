import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navabar";
import SEO from "../components/RouteWithSEO";
const Privacy = () => {
  return (
    <section className="w-full">
      {" "}
      <SEO
        title="VIAN PROPERTIES | Privacy"
        description="Welcome to VIAN - Explore our premium projects and services."
        keywords="VIAN, real estate, projects, home"
      />
      <Navbar />
      {/* Banner Section */}
      <div className="w-full bg-gray-color to-orange-400 py-[50px] md:py-[80px] px-5 md:px-10">
        <div className="max-w-7xl mx-auto text-start">
          <h1 className="text-color-red font-bold">Privacy</h1>
          <p className="mt-2 text-color-orange text-base md:text-lg">
            Dated: 04-09-2025
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-[50px] md:py-[80px] px-5 md:px-10">
        <div className="max-w-7xl mx-auto space-y-10 text-start">
          <div>
            <h2 className=" mb-3 text-color-orange">1. General Conditions</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo, nunc ut laoreet tristique, ex mi dignissim lorem, ut
              luctus erat nunc eget ipsum. Integer malesuada magna at nisi
              bibendum, in iaculis lacus pharetra.
            </p>
          </div>

          <div>
            <h2 className=" mb-3 text-color-orange">2. Copyright</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              volutpat sapien a neque sodales, at varius elit luctus. Cras in
              magna nec est blandit posuere. Sed faucibus magna id nisl euismod,
              ut venenatis nunc ultricies.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Vestibulum ante ipsum primis in faucibus orci luctus.</li>
              <li>
                Donec euismod orci at augue fringilla, vel cursus nisi dictum.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-color-orange mb-3">3. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              suscipit, augue vel viverra malesuada, tortor libero ultricies
              lorem, vitae euismod purus erat nec eros. Pellentesque vel
              porttitor erat.
            </p>
          </div>

          <div>
            <h2 className="text-color-orange mb-3">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              posuere velit. Suspendisse vitae sapien eros. Duis nec dolor
              venenatis, sagittis erat non, luctus lacus. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Privacy;
