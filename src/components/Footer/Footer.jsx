import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#C7C8CA] to-[#636466] text-white py-1 pt-[50px] md:pt-[80px] px-5 md:px-10 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-3 mb-4 max-w-7xl mx-auto">
        <div className="md:w-1/2 text-white">
          <p className=" text-white">VIAN PROPERTIES PRIVATE LIMITED</p>
          <p className=" leading-relaxed text-white">
            <b>CORPORATE ADDRESS </b> <br />
            9E, 9th Floor, Vaishnavi Cynosure,
            <br />
            Gachibowli, Hyderabad,
            <br />
            Telangana – 500032
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
          <div>
            <p className="text-white">
              <a
                href="tel:+919703766066"
                className="block mb-2 font-bold  transition-colors duration-300"
              >
                +91 97037 66066
              </a>
              <a
                href="tel:+914048535666"
                className="block mb-2 font-bold transition-colors duration-300"
              >
                +91 40 4853 5666
              </a>
              <a
                href="mailto:hello@vianproperties.com"
                className="block transition-colors duration-300"
              >
                hello@vianproperties.com
              </a>
            </p>
          </div>
          <div className="flex justify-start md:justify-end mt-2 space-x-4 text-2xl text-white">
            <a href="#" className=" transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className=" transition-colors duration-300">
              <FaYoutube />
            </a>
            <a href="#" className=" transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mb-4 w-full max-w-7xl mx-auto md:pt-[0px] pt-[20px]">
        <a
          href="https://www.google.com/maps/place/17.447,78.429"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Vian Properties Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.927122470088!2d78.366802!3d17.43664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f76d1d2605%3A0xaa76d53b62e7cac7!2sVian%20Properties%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756813773944!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </a>
      </div>
      <div className="h-px bg-white w-[200px] sm:w-[300px] md:w-[450px] lg:w-[550px] mx-auto mb-3"></div>
      <div className="text-center max-w-7xl mx-auto text-white">
        <p className="text-white">
          © 2025 Vianproperties |{" "}
          <Link to="/privacy" className=" transition-colors duration-300">
            Privacy
          </Link>
          {" | "}
          <Link to="/terms" className=" transition-colors duration-300">
            Terms of Use
          </Link>
          <br />
          Designed and Developed by{" "}
          <a
            href="https://whitethoughts.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
          >
            White Thoughts & Branding
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
