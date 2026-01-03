import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-600/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-600/20 hover:border-green-600 transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden group h-60">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onClick}
            className="px-4 py-2 bg-green-600 text-white rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-green-700"
          >
            View Details
          </button>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-gray-300 border border-green-600/30 text-xs rounded hover:border-green-600 hover:text-green-600 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-end items-center">
          <button
            onClick={onClick}
            className="text-green-600 hover:text-white font-medium text-sm flex items-center group"
          >
            Details
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
