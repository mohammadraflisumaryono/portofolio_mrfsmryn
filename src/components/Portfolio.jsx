import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import { projects } from "../portfolioData";
import ProjectModal from "./ProjectModal";

const containerVariants = {

  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setActiveProjectId(null);
  };

  const getProjectImages = (project) => {
    if (!project) return [];
    if (Array.isArray(project.images) && project.images.length > 0) return project.images;
    if (project.image) return [project.image];
    return [];
  };

  const openProjectModal = (projectId) => {
    setActiveProjectId(projectId);
    setIsProjectModalOpen(true);
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const projectImages = getProjectImages(activeProject);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-7xl mx-auto"
      id="portfolio"
      ref={ref}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="relative w-32 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto mb-8">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm">
            <i className="bx bx-briefcase"></i> PORTFOLIO
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
            Featured Projects
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my collection of full-stack, frontend, and AI/Computer Vision
          projects built with modern technologies.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div

        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black"
                : "border border-[#333] text-gray-400 hover:border-[#e99b63]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg overflow-hidden border border-[#333] hover:border-[#e99b63] transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-[#e99b63]/20 to-[#ffcc80]/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              {project.image ? (
                <img
                  src={project.image.startsWith("/") ? import.meta.env.BASE_URL + project.image.slice(1) : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-[#e99b63]">
                  <i className="bx bx-image text-6xl"></i>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <button
                type="button"
                onClick={() => openProjectModal(project.id)}
                className="flex flex-col w-full text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e99b63] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[#e99b63] font-semibold mt-1 inline-block">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-r from-[#e99b63] to-[#ffcc80] rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <i className="bx bx-star text-xs text-black"></i>
                    </motion.div>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#2a2a2a] text-[#e99b63] px-2 py-1 rounded border border-[#333]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[#333]">
                  <button
                    type="button"
                    onClick={() => openProjectModal(project.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black rounded font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    <i className="bx bx-right-arrow-alt"></i> View
                  </button>
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>


      <ProjectModal project={activeProject} isOpen={isProjectModalOpen} onClose={closeProjectModal} />

      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
