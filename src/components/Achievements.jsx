import React, { useRef } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { motion, useInView } from "framer-motion";
import { stats } from "../portfolioData";

const achievementsList = [
  {
    metric: "Projects Completed",
    value: String(stats.projectsCompleted),
    postfix: "+",
  },
  {
    metric: "Years of Experience",
    value: String(stats.yearsExperience),
    postfix: "+",
  },
  {
    metric: "Certifications Earned",
    value: String(stats.certificationsEarned),
    postfix: "+",
  },

];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-7xl mx-auto">
      <motion.div
        className="sm:border border-custom-border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-custom-dark-start to-custom-dark-end"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <h2 className="text-white text-4xl sm:text-4xl font-bold flex flex-row bg-gradient-to-r from-custom-orange-start to-custom-orange-end text-transparent bg-clip-text">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl sm:text-4xl font-bold bg-gradient-to-r from-custom-orange-start to-custom-orange-end text-transparent bg-clip-text"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (i + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-custom-gray text-base mt-2">
              {achievement.metric}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
