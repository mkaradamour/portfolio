import { useState } from "react";
import MenuItem from "./MenuItem";
import { HEADER_OFFSET } from "../constants";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const sections = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "portfolio", text: "Portfolio" },
  { id: "contact", text: "Contact" },
];

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center fixed top-0 bg-primary shadow-md z-50 py-3 w-full">
      <div className="container mx-auto px-6 relative flex items-center justify-between max-w-6xl">
        <a href="/" className="flex" aria-label="Mohanad Karadamour — home">
          <Logo className="h-12 w-12 text-palete3" />
        </a>

        <nav className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4">
            {sections.map(({ id, text }) => (
              <MenuItem key={id} href={id} text={text} />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDropdown}
            className="md:hidden text-palete3 p-2"
            aria-label="Menu"
            aria-expanded={isDropdownOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-16 end-6 w-56 bg-palete2 rounded-md shadow-lg py-2 mt-2 md:hidden">
              <ul className="flex flex-col">
                {sections.map(({ id, text }) => (
                  <li key={id}>
                    <ScrollLink
                      to={id}
                      href={`#${id}`}
                      smooth={true}
                      duration={500}
                      offset={HEADER_OFFSET}
                      onClick={toggleDropdown}
                      className="block px-4 py-3 text-lg text-white hover:bg-palete3 hover:text-primary"
                    >
                      {text}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
