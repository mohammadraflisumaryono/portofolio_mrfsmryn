import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { socialLinks } from "../socialData";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* tagbox */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i> PORTFOLIO
          </div>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
            Hi, I am{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Mohammad Rafli Sumaryono",
              1000,
              "Web Developer",
              1000,
              "Full Stack Engineer",
              1000,
              "AI/CV Specialist",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]"
          />
        </h1>

        {/* description */}
        <p className="text-base sm:text-lg text-gray-400 tracking-wider max-w-[25rem] lg:max-w-[30rem]">
          Welcome to my portfolio! I'm a passionate developer showcasing my
          projects and skills in web development, creating innovative and
          user-friendly solutions. Explore my work and let's connect to build
          something amazing.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-12">
          <a
            href={socialLinks.personal.cv}
            download
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            <i className="bx bx-link-external"></i>
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            <i className="bx bx-link-external"></i>
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* 3D robot */}
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/iHxFP-Rz0UOXVUj1/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
