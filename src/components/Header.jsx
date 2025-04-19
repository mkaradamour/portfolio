import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-scroll";
import Logo from "./Logo"

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDeepDropdown = () => {
    setIsDeepDropdownOpen(!isDeepDropdownOpen);
  };
  return (
    <header

      className="flex items-center fixed top-0 bg-primary shadow-md z-50 py-5 w-full"
    >
      <div className="container mx-auto relative flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <a href="/" className="flex   ">

          <Logo className="h-14 w-14 text-palete3" />

        </a>

        {/* Navigation Menu */}
        <nav className="box-border">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <MenuItem href="home" text="Home" />
            <MenuItem href="about" text="About" />
            <MenuItem href="skills" text="Skills" />
            <MenuItem href="portfolio" text="Portfolio" />
            <MenuItem href="contact" text="Contact" />
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-palete3 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-16 right-0 w-48 bg-palete2 rounded-md shadow-lg py-2 mt-2 md:hidden">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-palete3 hover:text-white">
                  <Link to="home" smooth={true} duration={500} onClick={toggleDropdown}>Home</Link>
                </li>
                <li className="px-4 py-2 hover:bg-palete3 hover:text-white">
                  <Link to="about" smooth={true} duration={500} onClick={toggleDropdown}>About</Link>
                </li>
                <li className="px-4 py-2 hover:bg-palete3 hover:text-white">
                  <Link to="skills" smooth={true} duration={500} onClick={toggleDropdown}>Skills</Link>
                </li>
                <li className="px-4 py-2 hover:bg-palete3 hover:text-white">
                  <Link to="portfolio" smooth={true} duration={500} onClick={toggleDropdown}>Portfolio</Link>
                </li>
                <li className="px-4 py-2 hover:bg-palete3 hover:text-white">
                  <Link to="contact" smooth={true} duration={500} onClick={toggleDropdown}>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
