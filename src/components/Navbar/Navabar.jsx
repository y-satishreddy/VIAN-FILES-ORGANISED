import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarHeight = "90px";
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const linkClasses = ({ isActive }) => (isActive ? "active" : "");
  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 h-[70px] transition-all duration-300 px-5 md:px-10 py-4 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="logo" className="h-10 sm:h-12 md:h-14 block" />
          </NavLink>
          <div className="hidden md:flex text-sm font-medium text-gray-700">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "COMPLETED PROJECTS", path: "/completed-projects" },
              { name: "ON-GOING PROJECTS", path: "/ongoing-projects" },
              { name: "FUTURE PROJECTS", path: "/future-projects" },
              { name: "CONTACT US", path: "/contact-us" },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={`${linkClasses(
                  {}
                )} h-12 flex items-center justify-center px-3 hover:text-[#E31F2B]`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col justify-center items-center w-4 h-4 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                isOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg fixed top-[70px] left-0 w-full z-1000">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "COMPLETED PROJECTS", path: "/completed-projects" },
              { name: "ON-GOING PROJECTS", path: "/ongoing-projects" },
              { name: "FUTURE PROJECTS", path: "/future-projects" },
              { name: "CONTACT US", path: "/contact-us" },
            ].map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={`${linkClasses(
                  {}
                )} block h-12 flex items-center justify-center ${
                  idx !== 5 ? "border-b border-gray-200" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      <div style={{ height: navbarHeight }} />
    </>
  );
};

export default Navbar;
