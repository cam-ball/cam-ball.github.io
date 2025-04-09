import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faDiceD20,
  faComments,
  faPersonRays,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const hoverStyles =
    "hover:text-red hover:bg-inherit hover:border-red hover:translate-y-2 transition ease-in-out";
  const listStyles = `border border-4 border-purple w-20 h-20 bg-purple text-center ${hoverStyles}`;
  const linkStyles = "w-full h-full flex items-center justify-center";

  return (
    <ul className="w-full flex justify-between text-white px-6 text-4xl">
      <li className={listStyles}>
        <Link to="/" className={linkStyles}>
          <FontAwesomeIcon icon={faPersonRays} />
        </Link>
      </li>
      <li className={listStyles}>
        <Link to="/projects" className={linkStyles}>
          <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
      </li>
      <li className={listStyles}>
        <Link to="/hobbies" className={linkStyles}>
          <FontAwesomeIcon icon={faDiceD20} />
        </Link>
      </li>
      <li className={listStyles}>
        <Link to="/contact" className={linkStyles}>
          <FontAwesomeIcon icon={faComments} />
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
