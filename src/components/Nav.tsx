import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faComments,
  faPersonRays,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const listStyles = "border w-20 h-20 p-4 bg-purple text-center";

  return (
    <ul className="w-full flex justify-between text-white px-6 text-4xl">
      <li className={listStyles}>
        <a href="/" className="w-full h-full">
          <FontAwesomeIcon icon={faPersonRays} />
        </a>
      </li>
      <li className={listStyles}>
        <a href="/projects">
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>
      </li>
      <li className={listStyles}>
        <a href="/hobbies">
          <FontAwesomeIcon icon={faDiceD20} />
        </a>
      </li>
      <li className={listStyles}>
        <a href="/contact">
          <FontAwesomeIcon icon={faComments} />
        </a>
      </li>
    </ul>
  );
};

export default Nav;
