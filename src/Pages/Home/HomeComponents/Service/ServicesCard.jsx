import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServicesCard = ({ prop }) => {
  return (
    <div
      className={`px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600 service_card rounded-xl shadow-lg ${
        prop.id == 2 ? "py-20" : "py-16"
      } hover:scale-105 hover:border-green-600 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300`}
    >
      <div className="mb-6">
        <i
          className={`service_icon mb-4 text-4xl bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg ${prop.icon} hover:scale-110 transition-transform duration-300`}
        ></i>
      </div>
      <Link
        className="mb-2 text-2xl font-semibold tracking-tight text-white md:text-3xl service_title hover:text-green-600 transition-colors duration-300"
        to="/contact"
      >
        <h1 className="inline border_line pb-0.5">{prop.title}</h1>
      </Link>
      <p className="my-2 font-normal text-gray-300 text-balance">
        {prop.description}
      </p>
      <Link
        to="/contact"
        className="flex items-center text-md font-semibold text-center text-green-600 hover:text-green-500 transition-all duration-300 group mt-4"
      >
        Let&apos;s do it
        <i className="ml-2 fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
      </Link>
    </div>
  );
};

ServicesCard.propTypes = {
  prop: PropTypes.object.isRequired,
};
export default ServicesCard;
