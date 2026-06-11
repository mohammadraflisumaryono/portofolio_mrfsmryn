import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const techStackList = [
  {
    name: "React",
    icon: "bx bxl-react",
    color: "#61DAFB",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "bx bx-code-block",
    color: "#000000",
    level: 90,
    category: "Framework",
  },
  {
    name: "JavaScript",
    icon: "bx bxl-javascript",
    color: "#F7DF1E",
    level: 85,
    category: "Language",
  },
  {
    name: "Node.js",
    icon: "bx bxl-nodejs",
    color: "#339933",
    level: 85,
    category: "Backend",
  },
  {
    name: "Express",
    icon: "bx bx-code-block",
    color: "#90C53F",
    level: 85,
    category: "Backend",
  },
  {
    name: "Python",
    icon: "bx bxl-python",
    color: "#3776AB",
    level: 80,
    category: "Language",
  },
  {
    name: "Vue.js",
    icon: "bx bxl-vuejs",
    color: "#4FC08D",
    level: 75,
    category: "Frontend",
  },
  {
    name: "MongoDB",
    icon: "bx bxl-mongodb",
    color: "#47A248",
    level: 80,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: "bx bx-data",
    color: "#00758F",
    level: 75,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "bx bx-data",
    color: "#336791",
    level: 75,
    category: "Database",
  },
  {
    name: "Firebase",
    icon: "bx bxl-firebase",
    color: "#FFCA28",
    level: 75,
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    icon: "bx bxl-tailwind-css",
    color: "#06B6D4",
    level: 88,
    category: "Styling",
  },
  {
    name: "Bootstrap",
    icon: "bx bxl-bootstrap",
    color: "#7952B3",
    level: 80,
    category: "Styling",
  },
  {
    name: "HTML5",
    icon: "bx bxl-html5",
    color: "#E34F26",
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: "bx bxl-css3",
    color: "#1572B6",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Git",
    icon: "bx bxl-git",
    color: "#F05032",
    level: 85,
    category: "Tools",
  },
  {
    name: "Docker",
    icon: "bx bxl-docker",
    color: "#2496ED",
    level: 70,
    category: "DevOps",
  },
  {
    name: "OpenCV",
    icon: "bx bx-image",
    color: "#5C3EEE",
    level: 80,
    category: "Computer Vision",
  },
  {
    name: "TensorFlow",
    icon: "bx bx-brain",
    color: "#FF6F00",
    level: 75,
    category: "AI/ML",
  },
  {
    name: "Laravel",
    icon: "bx bxl-laravel",
    color: "#FF2D20",
    level: 90,
    category: "Backend",
  },
  {
    name: "TypeScript",
    icon: "bx bxl-typescript",
    color: "#3178C6",
    level: 80,
    category: "Language",
  },
  {
    name:"CodeIgniter",
    icon: "bx bxl-codeigniter",
    color: "#EF4223",
    level: 80,
    category: "Backend",
  },
  {
    name: "Flutter",
    icon: "bx bxl-flutter",
    color: "#02569B",
    level: 70,
    category: "Mobile",
  },
  {
    name: "Kotlin",
    icon: "bx bxl-kotlin",
    color: "#0095D5",
    level: 70,
    category: "Language",
  },
  {
    name:"PyTorch",
    icon: "bx bxl-pytorch",
    color: "#EE4C2C",
    level: 75,
    category: "AI/ML",
  }
  
  // {
  //   name: "YOLOv8",
  //   icon: "bx bx-target-lock",
  //   color: "#FFB300",
  //   level: 80,
  //   category: "Computer Vision",
  // },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [hoveredTech, setHoveredTech] = useState(null);
  const [runningTechs, setRunningTechs] = useState([]);

  // Create running text animation
  useEffect(() => {
    const createRunningText = () => {
      const shuffled = [...techStackList].sort(() => Math.random() - 0.5);
      return [...shuffled, ...shuffled]; // Duplicate for seamless loop
    };

    setRunningTechs(createRunningText());
  }, []);

  // Categories untuk filter
  const categories = [...new Set(techStackList.map((tech) => tech.category))];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-7xl mx-auto">
      {/* Header dengan running text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="relative w-32 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto mb-8">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm">
            <i className="bx bx-code-alt"></i> TECH STACK
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
            My Technologies
          </span>
        </h2>

        {/* Running text background */}
        <div className="relative overflow-hidden h-16 mb-8 bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent rounded-lg">
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex items-center space-x-8 whitespace-nowrap"
              animate={{
                x: [0, -1920], // Adjust based on content width
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {runningTechs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <i
                    className={`${tech.icon} text-2xl`}
                    style={{ color: tech.color }}
                  ></i>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Tech Stack Container */}
      <motion.div
        className="border border-[#2a2a2a] rounded-md py-8 px-8 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
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

        {/* Tech Grid */}
        <div className="relative z-10">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-8"
            variants={containerVariants}
          >
            {techStackList.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#e99b63] transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#e99b63]/20 to-[#ffcc80]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                {/* Icon */}
                <motion.i
                  className={`${tech.icon} text-4xl mb-2 relative z-10`}
                  style={{ color: tech.color }}
                  animate={
                    hoveredTech === index
                      ? {
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                />

                {/* Name */}
                <h3 className="text-white text-sm font-medium text-center mb-1 relative z-10">
                  {tech.name}
                </h3>

                {/* Category */}
                <p className="text-gray-400 text-xs text-center mb-2 relative z-10">
                  {tech.category}
                </p>

                {/* Skill Level */}
                <div className="w-full bg-gray-700 rounded-full h-1 mb-1 relative z-10">
                  <motion.div
                    className="bg-gradient-to-r from-[#e99b63] to-[#ffcc80] h-1 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>

                <span className="text-xs text-gray-500 relative z-10">
                  {tech.level}%
                </span>

                {/* Hover tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-md text-xs whitespace-nowrap pointer-events-none z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    hoveredTech === index
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.2 },
                        }
                      : { opacity: 0, y: 10 }
                  }
                >
                  {tech.category} • {tech.level}% Proficiency
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#2a2a2a]"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
                {techStackList.length}+
              </h3>
              <p className="text-gray-400 text-sm mt-1">Technologies</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
                {categories.length}+
              </h3>
              <p className="text-gray-400 text-sm mt-1">Categories</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
                {Math.round(
                  techStackList.reduce((acc, tech) => acc + tech.level, 0) /
                    techStackList.length
                )}
                %
              </h3>
              <p className="text-gray-400 text-sm mt-1">Average Proficiency</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
