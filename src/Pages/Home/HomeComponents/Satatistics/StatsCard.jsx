import React from "react";
import PropTypes from "prop-types";

const StatsCard = ({ prop }) => {
  return (
    <div className="flex flex-row justify-center p-6 rounded-xl border border-green-600 bg-gradient-to-br from-gray-900 to-black gap-4 shadow-lg hover:scale-105 hover:border-green-500 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-green-600/20 to-green-700/20 border-2 border-green-600 text-green-600 rounded-xl w-12 h-12 md:w-14 md:h-14 shadow-lg flex-shrink-0">
        <i
          className={`${prop.icon} text-xl md:text-2xl text-green-600`}
        ></i>
      </div>
      <div className="leading-relaxed tracking-wide text-gray-300 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white group-hover:text-green-600 transition-colors duration-300">{prop.title}</h3>
        <p className="text-md text-gray-300 leading-relaxed">{prop.description}</p>
      </div>
    </div>
  );
};
StatsCard.propTypes = {
  prop: PropTypes.any.isRequired,
};

export default StatsCard;
