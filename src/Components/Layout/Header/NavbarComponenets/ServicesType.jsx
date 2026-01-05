// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "../navbar.css";
export const ServicesType = ({ name }) => {
  return (
    <li className="flex items-center justify-start">
      <span className="text-white hover:text-green-600 transition duration-300 cursor-default">{name}</span>
    </li>
  );
};

ServicesType.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ServicesType;
