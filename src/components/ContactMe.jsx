import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import { socialLinks } from "../socialData";

// Map social links to contact methods
const buildContactMethods = () => {
  const colorMap = {
    github: { color: "#ffffff", bgColor: "from-[#ffffff]/20 to-[#cccccc]/20" },
    linkedin: { color: "#0077b5", bgColor: "from-[#0077b5]/20 to-[#0099ff]/20" },
    twitter: { color: "#1da1f2", bgColor: "from-[#1da1f2]/20 to-[#1da1f2]/10" },
    medium: { color: "#000000", bgColor: "from-[#000000]/20 to-[#666666]/20" },
    globe: { color: "#e99b63", bgColor: "from-[#e99b63]/20 to-[#ffcc80]/20" },
  };

  return [
    {
      icon: "bx bx-envelope",
      label: "Email",
      value: socialLinks.personal.email,
      link: `mailto:${socialLinks.personal.email}`,
      color: "#e99b63",
      bgColor: "from-[#e99b63]/20 to-[#ffcc80]/20",
    },
    ...socialLinks.social.map(social => {
      const colors = colorMap[social.icon] || { color: "#999", bgColor: "from-[#999]/20 to-[#666]/20" };
      return {
        icon: `bx bxl-${social.icon}`,
        label: social.platform,
        value: social.platform,
        link: social.url,
        ...colors,
      };
    }),
  ];
};

const contactMethods = buildContactMethods();

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

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Send to Web3Forms (free, no API key required, just need access key)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // Get free key at https://web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="text-white py-8 px-4 xl:px-16 sm:py-16 relative overflow-hidden"
      id="contact"
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
              <i className="bx bx-phone"></i> GET IN TOUCH
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#ffcc80]">
              Let's Work Together
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels or fill out the form below.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#e99b63] transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-[#333] flex items-center justify-center group-hover:scale-110 transition-transform relative z-10"
                    style={{ borderColor: method.color + "33" }}
                  >
                    <i
                      className={`${method.icon} text-2xl`}
                      style={{ color: method.color }}
                    ></i>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#e99b63] transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-gray-400 text-sm hover:text-white transition-colors">
                      {method.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.i
                    className="bx bx-chevron-right text-gray-400 group-hover:text-[#e99b63] transition-colors flex-shrink-0 text-2xl relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] hover:border-[#e99b63] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="bx bx-info-circle text-[#e99b63] text-2xl"></i>
                <h3 className="text-white font-semibold">Response Time</h3>
              </div>
              <p className="text-gray-400 text-sm">
                I typically respond to messages within 24 hours. Looking forward
                to hearing from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-[#333] p-8 hover:border-[#e99b63] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e99b63] focus:ring-1 focus:ring-[#e99b63] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e99b63] focus:ring-1 focus:ring-[#e99b63] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e99b63] focus:ring-1 focus:ring-[#e99b63] transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e99b63] focus:ring-1 focus:ring-[#e99b63] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#e99b63] to-[#ffcc80] text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(233,155,99,0.5)] transition-all duration-300 mt-6 group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    animate={isSubmitted || isLoading ? { scale: 0 } : { scale: 1 }}
                  >
                    <i className="bx bx-send"></i>
                    Send Message
                  </motion.span>

                  {isLoading && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <motion.i
                        className="bx bx-loader-alt text-2xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      ></motion.i>
                    </motion.div>
                  )}

                  {isSubmitted && !isLoading && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <i className="bx bx-check text-2xl"></i>
                    </motion.div>
                  )}
                </motion.button>

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-500 font-medium mt-4"
                  >
                    ⚠️ {error}
                  </motion.p>
                )}

                {/* Success Message */}
                {isSubmitted && !isLoading && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center text-[#e99b63] font-medium mt-4"
                  >
                    ✨ Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;