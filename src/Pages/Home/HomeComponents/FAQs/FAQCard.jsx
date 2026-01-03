import React, { useState } from "react";
import PropTypes from "prop-types";

export const FAQCard = ({ prop }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="flex flex-col gap-4 md:gap-6 border border-green-600 bg-gradient-to-br from-gray-900 to-black p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:scale-105 hover:border-green-500 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300 cursor-pointer md:cursor-default"
      onClick={() => {
        // Make entire card clickable on mobile
        if (window.innerWidth < 768) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      {/* Question Row - Icon and text inline */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center bg-gradient-to-br from-green-600/20 to-green-700/20 border-2 border-green-600 text-green-600 rounded-xl w-12 h-12 md:w-14 md:h-14 shadow-lg flex-shrink-0">
          <i className={`${prop.icon} text-xl md:text-2xl`}></i>
        </div>
        
        {/* Question Text */}
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-bold flex-1 leading-tight ${
            prop.id == 1 ? "text-green-600" : "text-white"
          }`}
        >
          {prop.question}
        </h3>
      </div>
      
      {/* Answer - hidden on mobile when collapsed, always visible on desktop */}
      <div
        className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${
          isExpanded 
            ? "max-h-[1000px] opacity-100" 
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-0 md:pl-[calc(3rem+0.75rem)]">{prop.answer}</p>
      </div>
    </div>
  );
};

FAQCard.propTypes = {
  prop: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

export default FAQCard;
