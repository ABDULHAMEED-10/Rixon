// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../navbar.css";
const NavComponents = ({ toward, nam }) => {
  return (
    <NavLink
      to={`/${toward}`}
      className="navbar__link font-bold text-white hover:text-green-600 transition duration-300"
    >
      {nam}
    </NavLink>
  );
};

NavComponents.propTypes = {
  toward: PropTypes.string.isRequired,
  nam: PropTypes.string.isRequired,
};

export default NavComponents;
