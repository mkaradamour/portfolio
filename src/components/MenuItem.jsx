import { Link } from "react-scroll";
import { HEADER_OFFSET } from "../constants";

const MenuItem = ({ href, text }) => (
  <li className="relative py-4 px-3 cursor-pointer">
    <Link
      to={href}
      href={`#${href}`}
      spy={true}
      smooth={true}
      offset={HEADER_OFFSET}
      activeClass="before:w-full"
      className="text-white text-lg relative block before:absolute before:w-0 before:h-0.5 before:bottom-[-6px] before:start-0 before:bg-palete3 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
    >
      {text}
    </Link>
  </li>
);

export default MenuItem;
