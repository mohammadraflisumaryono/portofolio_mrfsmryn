import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import { portfolioProjects } from "../portfolioData";
import { getFeaturedProjects, truncateText } from "../utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = getFeaturedProjects(portfolioProjects);
  const allProjects = portfolioProjects;




  // Get unique technologies from all projects
  const allTechs = [...new Set(allProjects.flatMap(p => p.technologies))];

  return (
    <section
      className="text-white py-8 px-4 xl:px-16 sm:py-16 relative overflow-hidden"
      id="projects"
      ref={ref}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#e99b63]/10 to-[#ffcc80]/10 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Explore some of my recent projects showcasing my skills in web development,
            design, and problem-solving across various technologies.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {(featuredProjects.length > 0 ? featuredProjects : allProjects.slice(0, 3)).map(
            (project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333] hover:border-[#e99b63] transition-all duration-300"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-[#0a0a0a]">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e99b63]/20 to-[#ffcc80]/20 flex items-center justify-center"
                    animate={
                      hoveredProject === index
                        ? { opacity: 1 }
                        : { opacity: 0 }
                    }
                  >
                    <i className="bx bx-image text-6xl text-[#e99b63]/50"></i>
                  </motion.div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#e99b63] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        <i className="bx bx-calendar mr-1"></i>
                        {project.year}
                      </p>
                    </div>
                  </div>

                  {/* Slide-able images (multiple) */}
                  <div className="mb-4">
                    <div className="relative h-40 overflow-hidden rounded-lg border border-[#333]">
                      <div className="absolute inset-0 w-full">
                        {Array.isArray(project.images) && project.images.length > 1 ? (
                          <div className="h-full w-full">
                            {project.images.slice(0, 3).map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`${project.title} image ${i + 1}`}
                                className="w-full h-full object-cover"
                                style={{ display: i === 0 ? "block" : "none" }}
                              />
                            ))}
                            {/* Note: basic support untuk multiple images.
                                Jika ingin carousel full (prev/next) perlu data images + state per card. */}
                          </div>
                        ) : (
                          project.image && (
                            <img
                              src={Array.isArray(project.images) && project.images.length > 0 ? project.images[0] : project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          )
                        )}
                      </div>
                    </div>
                    {Array.isArray(project.images) && project.images.length > 1 && (
                      <div className="text-xs text-gray-400 mt-2">
                        {project.images.length} images
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    {truncateText(project.description, 80)}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#0a0a0a] text-[#e99b63] text-xs rounded border border-[#333] group-hover:border-[#e99b63] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#0a0a0a] text-gray-400 text-xs rounded border border-[#333]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-[#333]">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black font-semibold rounded text-sm text-center hover:shadow-[0_0_15px_rgba(233,155,99,0.5)] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="bx bx-link-external mr-1"></i>
                        Live Demo
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-[#1a1a1a] text-white font-semibold rounded text-sm text-center border border-[#333] hover:border-[#e99b63] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="bx bxl-github mr-1"></i>
                        Code
                      </motion.a>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-[#e99b63] text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <i className="bx bx-star text-sm"></i>
                      Featured
                    </div>
                  )}
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* All Projects Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 text-center py-8 px-8 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] rounded-lg border border-[#2a2a2a]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
              {allProjects.length}+
            </h3>
            <p className="text-gray-400 text-sm mt-2">Total Projects</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
              {allTechs.length}+
            </h3>
            <p className="text-gray-400 text-sm mt-2">Technologies Used</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
              {featuredProjects.length}
            </h3>
            <p className="text-gray-400 text-sm mt-2">Featured Projects</p>
          </motion.div>
        </motion.div>

        {/* View All Projects CTA */}
        {allProjects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#all-projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(233,155,99,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bx bx-right-arrow-alt mr-2"></i>
              View All Projects
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
