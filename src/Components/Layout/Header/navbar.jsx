/* eslint-disable no-unused-vars */
import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavComponents from "./NavbarComponenets/NavComponents";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar__container flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 fixed top-0 left-0 right-0 z-50 bg-black border-b border-green-600/30 shadow-lg">
      <div className="navbar__left flex flex-row items-center justify-center gap-2">
        <a href="/" className="cursor-pointer">
          <img 
            src="/rixon logo.png" 
            alt="Rixon Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </a>
      </div>

      <div className="navbar__right hidden md:flex items-center justify-center flex-1">
        <ul className="navbar__list flex-wrap">
          <li>
            <NavComponents toward="" nam="Home" />
          </li>
          <li>
            <NavComponents toward="projects" nam="Projects" />
          </li>
          <li>
            <NavComponents toward="about" nam="About" />
          </li>
          <li>
            <NavComponents toward="tools" nam="Tools" />
          </li>
        </ul>
      </div>

      <div className="flex items-center ml-auto md:ml-0">
        <NavLink to="/contact" className="nav__button text-sm sm:text-base px-4 py-1.5 sm:px-6 sm:py-2.5">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
