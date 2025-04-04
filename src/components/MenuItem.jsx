// MenuItem.js (updated for nested dropdowns)
import React, { useState } from "react";
import {Link} from 'react-scroll';

const MenuItem = ({ href, text, dropdownItems, isSubItem }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 

  return (
    <li className="relative py-4 px-3 cursor-pointer">
      {
      // dropdownItems ? (
      //   <>
      //     <button
      //       onClick={toggleDropdown}
      //       className="flex items-center text-white relative before:absolute before:w-0 before:h-0.5 before:bottom-[-6px] before:left-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
      //     >
      //       <span>{text}</span>
      //       <i className="bi bi-chevron-down ml-1"></i>
      //     </button>
      //     {isDropdownOpen && (
      //       <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 py-2 w-48 rounded-lg">
      //         {dropdownItems.map((item, index) => (
      //           <MenuItem
      //             key={index}
      //             href={item.href}
      //             text={item.text}
      //             dropdownItems={item.dropdownItems}
      //             isSubItem={true}
      //           />
      //         ))}
      //       </ul>
      //     )}
      //   </>
      // ) 
      // : 
      (
        <Link
          to={href}
          spy={true}
          smooth={true}
          activeClass="before:w-full"
          // href={href}
          className={isSubItem?"block px-4 py-2 text-gray-800 hover:bg-blue-50":"text-white relative block before:absolute before:w-0 before:h-0.5 before:bottom-[-6px] before:left-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"}
        >
          {text}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
