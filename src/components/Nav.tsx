import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faDiceD20,
  faComments,
  faPersonRays,
  faLaptopCode,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const hoverStyles =
    "hover:text-red hover:bg-inherit hover:border-red hover:translate-y-2 transition ease-in-out";
  const listStyles = `border border-2 border-purple w-20 h-20 bg-purple text-center ${hoverStyles}`;
  const linkStyles = "w-full h-full flex items-center justify-center";

  return (
    <ul className="w-full flex place-content-evenly text-white px-0 text-4xl">
      <li className={listStyles}>
        <Link to="/" className={linkStyles}>
          <FontAwesomeIcon icon={faPersonRays} />
        </Link>
      </li>
      <li className={listStyles}>
        <a
          target="_blank"
          href="https://medium.com/@im.cameron"
          className={linkStyles}
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </a>
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
