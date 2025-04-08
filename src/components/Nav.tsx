// import type { ReactNode } from "react";
import diceIcon from "../assets/dice-d20-solid.svg";

const Nav = ({}: {}) => {
  const listStyles = "border w-20 h-20 p-4 bg-purple text-center";

  return (
    <ul className="w-full flex justify-between text-white px-6 text-4xl">
      <li className={listStyles}>
        <a href="/" className="w-full h-full">
          A
        </a>
      </li>
      <li className={listStyles}>
        <a href="/projects">
          <img src={diceIcon} alt="dice icon" />
        </a>
      </li>
      <li className={listStyles}>
        <a href="/hobbies">H</a>
      </li>
      <li className={listStyles}>
        <a href="/contact">C</a>
      </li>
    </ul>
  );
};

export default Nav;
