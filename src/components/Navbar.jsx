import React from "react";
import logo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container gap-[300px] xl:px-4">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <ul className="flex flex-1 items-center max-lg:hidden justify-between">
          {navLinks.map((items) => (
            <li
              key={items.label}
              className="font-montserrat leading-normal text-lg">
              <a href={items.href}>{items.label}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
