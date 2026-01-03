import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DiscountCard = ({ prop }) => {
  const getBackgroundColor = (id) => {
    switch (id) {
      case 1:
        return "bg-yellow-500/75";
      case 2:
        return "bg-purple-500/75";
      case 3:
        return "bg-green-500/75";
      default:
        return "bg-black/75";
    }
  };
  return (
    <div className="overflow-hidden px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600 rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:border-green-500 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300 shadow-lg">
      <div
        className={`mb-4 sm:mb-5 w-20 h-20 sm:w-24 sm:h-24 text-4xl sm:text-5xl rounded-lg flex items-center justify-center text-white ${getBackgroundColor(
          prop.id
        )}`}
      >
        <i className={`text-4xl sm:text-5xl mix-blend-screen ${prop.icon}`}></i>
      </div>
      <Link
        className="mb-3 sm:mb-4 px-2 text-xl sm:text-2xl font-semibold tracking-tight text-white hover:text-green-600 transition-colors duration-300 text-center"
        to={prop.lnk}
      >
        <h5 className="inline">{prop.title}</h5>
      </Link>
      <p className="text-center text-sm sm:text-base md:text-md font-normal text-gray-300 px-2 sm:px-3">
        {prop.description}
      </p>
    </div>
  );
};

DiscountCard.propTypes = {
  prop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lnk: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default DiscountCard;
