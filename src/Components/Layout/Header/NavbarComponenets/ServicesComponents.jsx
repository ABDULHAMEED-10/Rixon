// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar.css";
import ServicesType from "./ServicesType";
import { servicestype } from "../../../../demoData.jsx";
const ServiceComponents = () => {
  return (
    <>
      <span className="navbar__link py-5 font-bold text-white hover:text-green-600 transition duration-300 cursor-pointer">
        Services
      </span>
      <ul className="dropdown">
        {servicestype.map((service) => (
          <ServicesType key={service.id} name={service.title} />
        ))}
      </ul>
    </>
  );
};
export default ServiceComponents;
