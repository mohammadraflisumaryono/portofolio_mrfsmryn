import React, { useTransition, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import { experiences, education, certifications, skills } from "../portfolioData";


import { certificatesData } from "../certificatesData";
import CertificateModal from "./CertificateModal";
import { socialLinks } from "../socialData";

const buildTABDATA = () => [
  // Order: Certifications → Education → Experience
  // Pagination: 3 items per page for most sections, 2 items for experience
  {
    title: "Certifications",
    id: "certifications",
    icon: "bx bx-trophy",
    color: "#ffd700",
    content: certificatesData,
    itemsPerPage: 3, // Certifications: 4 items per page
  },
  {
    title: "Education",
    id: "education",
    icon: "bx bx-book-alt",
    color: "#61dafb",
    content: education,
    itemsPerPage: 4, // Education: 4 items per page
  },
  {
    title: "Experience",
    id: "experience",
    icon: "bx bx-briefcase",
    color: "#4fc08d",
    content: experiences,
    itemsPerPage: 2, // Experience: 2 items per page
  },
  {
    title: "Skills",
    id: "skills",
    icon: "bx bx-code-alt",
    color: "#e99b63",
    content: [
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.tools,
    ],
    itemsPerPage: 4, // Skills: 4 items per page
  },
];

const TAB_DATA = buildTABDATA();

const TabButton = ({ children, selectTab, active, icon, color }) => {
  const buttonClasses = active
    ? "border-b-2 border-[#e99b63] text-[#e99b63]"
    : "text-gray-400 hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`mr-6 font-semibold transition-all duration-300 pb-2 flex items-center gap-2 ${buttonClasses}`}
    >
      <motion.i
        className={icon}
        style={{ color: active ? color : "inherit" }}
        animate={active ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </button>
  );
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const [tab, setTab] = useState("certifications");
  const [isPending, startTransition] = useTransition();
  // const [typingText, setTypingText] = useState("");
  // const [isTyping, setIsTyping] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      setCurrentPage(0);
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  // // Typing animation effect
  // useEffect(() => {
  //   const text = socialLinks.personal.bio;
  //   let index = 0;
  //   setIsTyping(true);
  //   setTypingText("");

  //   const typeText = () => {
  //     if (index < text.length) {
  //       setTypingText(text.slice(0, index + 1));
  //       index++;
  //       setTimeout(typeText, 30);
  //     } else {
  //       setIsTyping(false);
  //     }
  //   };

  //   if (isInView) {
  //     typeText();
  //   }
  // }, [isInView]);

  // Floating animation elements
  const floatingElements = [...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[#e99b63] to-[#ffcc80] opacity-20"
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: `${10 + i * 15}%`,
        right: `${5 + i * 5}%`,
      }}
    />
  ));

  // Get items per page from current tab configuration
  // Default: 4 items per page (Certifications: 4, Education: 4, Experience: 2, Skills: 4)
  const getItemsPerPage = () => {
    if (!currentTab) return 4;
    return currentTab.itemsPerPage || 4;
  };

  const getPaginatedContent = () => {
    if (!currentTab) return [];
    const itemsPerPage = getItemsPerPage();
    const start = currentPage * itemsPerPage;
    return currentTab.content.slice(start, start + itemsPerPage);
  };

  const getTotalPages = () => {
    if (!currentTab) return 0;
    const itemsPerPage = getItemsPerPage();
    return Math.ceil(currentTab.content.length / itemsPerPage);
  };

  const renderSkillsContent = () => (
    <motion.div variants={listContainer} initial="hidden" animate="visible">
      {getPaginatedContent().map((item, i) => (
        <motion.div
          key={i}
          variants={listItem}
          className="mb-4 p-4 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#e99b63] transition-all duration-300 group"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-white font-semibold group-hover:text-[#e99b63] transition-colors">
              {item.skill}
            </h4>
            <span className="text-sm text-gray-400">{item.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <motion.div
              className="bg-gradient-to-r from-[#e99b63] to-[#ffcc80] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${item.level}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          </div>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderEducationContent = () => (
    <motion.div variants={listContainer} initial="hidden" animate="visible">
      {getPaginatedContent().map((item, i) => (
        <motion.div
          key={i}
          variants={listItem}
          className="mb-4 p-4 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#61dafb] transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#61dafb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[#61dafb] transition-colors">
              {item.degree}
            </h4>
            <p className="text-[#61dafb] font-medium mb-2">
              {item.institution}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
              <span>{item.period}</span>
              {item.gpa && (
                <span className="text-[#e99b63]">GPA: {item.gpa}</span>
              )}
              {item.achievement && (
                <span className="text-[#e99b63]">{item.achievement}</span>
              )}
            </div>
            <p className="text-gray-300">{item.focus}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderExperienceContent = () => (
    <motion.div variants={listContainer} initial="hidden" animate="visible">
      {getPaginatedContent().map((item, i) => (
        <motion.div
          key={i}
          variants={listItem}
          className="mb-4 p-4 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#4fc08d] transition-all duration-300 group"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-white font-semibold text-lg group-hover:text-[#4fc08d] transition-colors">
                {item.role}
              </h4>
              <p className="text-[#4fc08d] font-medium">{item.company}</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-400">{item.period}</span>
              <div className="text-xs text-[#e99b63] mt-1">{item.type}</div>
            </div>
          </div>
          <ul className="text-gray-300 text-sm space-y-1">
            {item.achievements.map((achievement, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="text-[#4fc08d] mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderCertificationsContent = () => (
    <motion.div variants={listContainer} initial="hidden" animate="visible">
      {getPaginatedContent().map((item, i) => (
        <motion.div
          key={i}
          variants={listItem}
          onClick={() => {
            setSelectedCertificate(item);
            setIsCertificateModalOpen(true);
          }}
          className="mb-4 p-4 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#ffd700] transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-[#ffd700]/20"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 w-8 h-8 bg-[#ffd700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="bx bx-badge-check text-black text-sm"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1 group-hover:text-[#ffd700] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[#ffd700] font-medium text-sm">
                  {item.issuer}
                </p>
                <div className="flex flex-wrap gap-4 justify-between items-center mt-2">
                  <span className="text-gray-400 text-xs">{item.date}</span>
                  <span className="text-[#e99b63] text-xs">
                    {item.credentialId}
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              className="flex-shrink-0 ml-2 text-gray-400 group-hover:text-[#e99b63] group-hover:scale-110 transition-all"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="bx bx-right-arrow-alt text-xl"></i>
            </motion.div>
          </div>
          {item.pdfUrl && (
            <div className="flex gap-2 mt-3 ml-11">
              <span className="text-xs bg-[#333] text-[#61dafb] px-2 py-1 rounded flex items-center gap-1">
                <i className="bx bxs-file-pdf text-sm"></i> PDF
              </span>
            </div>
          )}

        </motion.div>
      ))}
    </motion.div>
  );

  const renderContent = () => {
    switch (tab) {
      case "skills":
        return renderSkillsContent();
      case "education":
        return renderEducationContent();
      case "experience":
        return renderExperienceContent();
      case "certifications":
        return renderCertificationsContent();
      default:
        return null;
    }
  };

  return (
    <section
      className="text-white py-8 px-4 xl:px-16 sm:py-16 relative overflow-hidden"
      id="about"
      ref={ref}
    >
      {/* Floating background elements */}
      {floatingElements}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto mb-8">
            <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm">
              <i className="bx bx-user"></i> ABOUT ME
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
              Get to Know Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-[#333] hover:border-[#e99b63] transition-all duration-300">
              {/* Profile Image Placeholder */}

              <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#e99b63] shadow-lg shadow-[#e99b63]/20">
                <img
                  src={socialLinks.personal.profileImage}
                  alt={socialLinks.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
                  {socialLinks.personal.name}
                </span>
              </h3>

              <p className="text-center text-gray-400 mb-6">
                {socialLinks.personal.title}
              </p>

              {/* Typing Animation */}
              <div className="min-h-[120px]">
                <p className="text-gray-300 text-center leading-relaxed">
                  {socialLinks.personal.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {socialLinks.social.map((social, i) => {
                  const iconMap = {
                    github: "bx bxl-github",
                    envelope: "bx bx-envelope",
                    linkedin: "bx bxl-linkedin",
                    instagram: "bx bxl-instagram",
                    globe: "bx bx-globe",
                    twitter: "bx bxl-twitter",
                  };

                  const iconClass = iconMap[social.icon] || "bx bx-link";

                  const colorMap = {
                    github: "#333",
                    envelope: "#e99b63",
                    linkedin: "#0077b5",
                    instagram: "#e1306c",
                    globe: "#ffcc80",
                    twitter: "#1da1f2",
                  };

                  const color = colorMap[social.icon] || "#e99b63";

                  const isExternal = /^https?:\/\//.test(social.url);

                  return (
                    <motion.a
                      key={i}
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:border-[#e99b63] transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`${iconClass} text-lg`} style={{ color }}></i>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-2 bg-[#1a1a1a] rounded-lg border border-[#333]">
              {TAB_DATA.map((t) => (
                <TabButton
                  key={t.id}
                  selectTab={() => handleTabChange(t.id)}
                  active={tab === t.id}
                  icon={t.icon}
                  color={t.color}
                >
                  {t.title}
                </TabButton>
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab + currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {getTotalPages() > 1 && (
              <div className="flex justify-center items-center gap-3 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="p-2 rounded-lg border border-[#333] hover:border-[#e99b63] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <i className="bx bx-chevron-left text-white text-lg"></i>
                </motion.button>

                <div className="flex gap-2">
                  {Array.from({ length: getTotalPages() }).map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentPage
                        ? "bg-[#e99b63] w-8"
                        : "bg-gray-500 hover:bg-gray-400"
                        }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(Math.min(getTotalPages() - 1, currentPage + 1))}
                  disabled={currentPage === getTotalPages() - 1}
                  className="p-2 rounded-lg border border-[#333] hover:border-[#e99b63] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <i className="bx bx-chevron-right text-white text-lg"></i>
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
