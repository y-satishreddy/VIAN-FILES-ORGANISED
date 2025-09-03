import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full footer-gradient py-[20px]">
      <div className="flex flex-col items-center justify-center text-center text-white px-5">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-2 text-xl">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        {/* Divider */}
        <hr className="h-px bg-gray-200 opacity-50 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[550px] mx-auto mb-2" />

        {/* Footer Text */}
        <div className=" opacity-80 text-white">
          <p className="text-white margin-bottom-0">
            © 2025 Vianproperties |
            <a href="/privacy" className=" ml-1">
              Privacy
            </a>{" "}
            |
            <a href="/terms" className="ml-1">
              Terms of Use
            </a>
          </p>
          <p className="text-white">
            Designed and Developed by
            <a
              href="https://whitethoughts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
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
