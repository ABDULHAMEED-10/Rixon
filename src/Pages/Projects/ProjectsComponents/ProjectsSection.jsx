import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectFilter from "./ProjectFilter";
import ProjectsGrid from "./ProjectsGrid";
import ProjectModal from "./ProjectModal";
import { allProjects } from "../../../demoData";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    if (filter === "all") {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter((project) => project.category === filter));
    }
    // Reset visible projects when filter changes
    setVisibleProjects(6);
  }, [filter]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section className="py-20 my-10 overflow-hidden bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-600/20 text-green-600 border border-green-600/30 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-300">
            Explore our portfolio of successful projects delivered for clients
            across various industries.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <ProjectFilter filter={filter} setFilter={setFilter} />

        {/* Projects grid */}
        <ProjectsGrid
          projects={projects}
          visibleProjects={visibleProjects}
          onProjectClick={setSelectedProject}
        />

        {/* Load more button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="nav__button"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Project detail modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
