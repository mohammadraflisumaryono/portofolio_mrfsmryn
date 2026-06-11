import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [slide, setSlide] = useState(0);

  const images = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.images) && project.images.length > 0) return project.images;
    if (project.image) return [project.image];
    return [];
  }, [project]);

  useEffect(() => {
    if (isOpen) setSlide(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (images.length <= 1) return;

    const t = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(t);
  }, [isOpen, images.length]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const prev = () => setSlide((s) => (images.length ? (s - 1 + images.length) % images.length : 0));
  const next = () => setSlide((s) => (images.length ? (s + 1) % images.length : 0));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Side panel on the right */}
          <motion.div
            className="absolute top-0 right-0 h-full w-full sm:w-[520px] bg-[#0f0f0f] border-l border-white/10 shadow-2xl overflow-hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Close button (top-right only) */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10"
              aria-label="Close"
            >
              <i className="bx bx-x text-white text-2xl"></i>
            </motion.button>


            {/* Images (multiple slide) */}
            <div className="pt-14">
              <div className="relative h-[220px] bg-gradient-to-r from-[#e99b63]/15 to-[#ffcc80]/15 border-b border-white/10">
                {images.length > 0 ? (
                  <motion.img
                    key={slide}
                    src={images[slide]}
                    alt={`${project.title} slide ${slide + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#e99b63]">
                    <i className="bx bx-image text-6xl opacity-60"></i>
                  </div>
                )}

                {/* nav controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
                      aria-label="Prev"
                    >
                      <i className="bx bx-chevron-left text-2xl"></i>
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center"
                      aria-label="Next"
                    >
                      <i className="bx bx-chevron-right text-2xl"></i>
                    </button>
                  </>
                )}

                {/* dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === slide ? "bg-[#e99b63] w-7" : "bg-white/20 hover:bg-white/30"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 overflow-auto px-5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-white text-xl font-bold truncate">{project.title}</h3>
                  <p className="text-[#e99b63] text-sm mt-1">{project.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Periode</p>
                  <p className="text-white text-sm font-semibold">
                    {project.periodDisplay ?? project.year ?? "—"}
                  </p>
                </div>

              </div>

              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {project.details || project.description}
              </p>

              {/* Contributions */}
              {Array.isArray(project.contributions) && project.contributions.length > 0 && (
                <div className="mt-4">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <i className="bx bx-bulb text-[#e99b63]"></i> Contributions
                  </div>
                  <ul className="mt-2 text-gray-300 text-sm list-disc pl-5 space-y-2">
                    {project.contributions.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project meta */}
              <div className="mt-5">
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded border border-white/10 bg-white/5 text-[#ffcc80]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* References + buttons */}
                <div className="mt-6">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <i className="bx bx-link-external text-[#e99b63]"></i> References
                  </div>

                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.link && project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black font-semibold text-sm hover:shadow-lg transition-all"
                      >
                        <i className="bx bx-link-external"></i> Live
                      </motion.a>
                    )}

                    {project.code && project.code !== "null" && project.code !== "" && project.code !== "#" && (
                      <motion.a
                        href={project.code}

                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                      >
                        <i className="bx bxl-github"></i> Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>




              {/* Job experience block placeholder (your note says fill with job PT etc.) */}
              <div className="mt-6">
                <div className="text-white font-semibold text-sm flex items-center gap-2">
                  <i className="bx bx-briefcase text-[#4fc08d]"></i> Job Details
                </div>
                <div className="mt-2 text-gray-300 text-sm">
                  {/* By request: for now, keep project-based modal.
                      If you later want to connect project -> experiences, add relation field in data. */}
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Role: {project.role ?? "—"}</li>
                    <li>Company: {project.company ?? "—"}</li>
                    <li>Period: {project.period ?? "—"}</li>
                    <li>Status: {project.status ?? "—"}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom actions removed (close only top-right) */}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

