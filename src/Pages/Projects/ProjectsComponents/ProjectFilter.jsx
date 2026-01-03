import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectFilter = ({ filter, setFilter }) => {
  // Categories as requested: All, Web, Mobile, UI/UX
  const categories = ["all", "web", "mobile", "uiux"];
  
  // Map category names for display
  const getCategoryLabel = (category) => {
    const labels = {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      uiux: "UI/UX",
    };
    return labels[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === category
              ? "bg-green-600 text-white shadow-md scale-105"
              : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900"
          }`}
        >
          {getCategoryLabel(category)}
        </button>
      ))}
    </motion.div>
  );
};

ProjectFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ProjectFilter;
