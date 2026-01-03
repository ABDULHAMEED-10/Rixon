import propTypes from "prop-types";
import { Star, MapPin } from "lucide-react";

export const CaurosalCard = ({ prop }) => {
  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[450px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600 p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-500 hover:scale-[1.02] hover:border-green-500 flex flex-col group">
      <div className="w-full flex-1 flex flex-col">
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
            />
          ))}
        </div>

        {/* Quote Mark */}
        <div className="relative mb-3 sm:mb-4">
          <span className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 text-7xl sm:text-8xl font-extrabold text-green-100 leading-none opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            "
          </span>
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base leading-relaxed tracking-wide text-gray-300 relative z-10 mb-6 sm:mb-8 flex-1 line-clamp-6 sm:line-clamp-none">
          {prop.review}
        </p>

        {/* Profile Section */}
        <div className="flex items-center justify-start mt-auto pt-4 sm:pt-5 border-t border-green-600 group-hover:border-green-500 transition-colors duration-300">
          <div className="relative">
            <img
              src={prop.pic}
              alt={prop.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-green-600/50 group-hover:border-green-600 transition-colors duration-300 shadow-md"
            />
          </div>
          <div className="ml-3 sm:ml-4 flex-1 min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-white truncate">{prop.name}</h2>
            <p className="text-xs sm:text-sm font-semibold text-green-600 mt-0.5">{prop.designation}</p>
            <div className="flex flex-col gap-0.5 mt-0.5">
              {prop.company && (
                <p className="text-xs text-gray-400 truncate">{prop.company}</p>
              )}
              {prop.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <p className="text-xs text-gray-400 truncate">{prop.location}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CaurosalCard.propTypes = {
  prop: propTypes.object.isRequired,
};

export default CaurosalCard;
