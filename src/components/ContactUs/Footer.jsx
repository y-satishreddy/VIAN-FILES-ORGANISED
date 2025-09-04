import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full footer-gradient py-[20px]">
      <div className="flex flex-col items-center justify-center text-center text-white px-5">
        <div className="flex space-x-4 mb-2 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <hr className="h-px bg-gray-200 opacity-50 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[550px] mx-auto mb-2" />
        <div className="opacity-80 text-white space-y-1">
          <p className="text-white margin-bottom-0">
            © 2025 Vianproperties |
            <Link
              to="/privacy"
              className="ml-1 inline-block hover:text-[orange]"
            >
              Privacy
            </Link>
            {" | "}
            <Link to="/terms" className="ml-1 inline-block hover:text-[orange]">
              Terms of Use
            </Link>
          </p>
          <p className="text-white ">
            Designed and Developed by{" "}
            <a
              href="https://whitethoughts.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-block hover:text-[orange]"
            >
              White Thoughts & Branding
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
