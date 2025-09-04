const Maps = () => {
  return (
    <section className="w-full sm:py-16  py-[50px] md:py-[80px] px-5 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 md:gap-10">
        <div className="w-full md:w-1/3 text-left flex flex-col items-start justify-center">
          <p className="text-color-red mb-3">VIAN PROPERTIES PRIVATE LIMITED</p>
          <p className="text-color-orange font-bold margin-bottom-0 p-0">
            CORPORATE ADDRESS
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            9E, 9<sup>th</sup> Floor, Vaishnavi Cynosure,
            <br />
            Gachibowli, Hyderabad,
            <br />
            Telangana – 500032
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.927122470088!2d78.366802!3d17.43664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f76d1d2605%3A0xaa76d53b62e7cac7!2sVian%20Properties%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756813773944!5m2!1sen!2sin"
            className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Maps;
