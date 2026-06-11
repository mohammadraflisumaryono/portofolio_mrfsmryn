/**
 * 🔗 SOCIAL LINKS & CONTACT DATA
 * 
 * Kelola semua link sosial media dan kontak di satu tempat
 */

import { title } from "framer-motion/client";

export const socialLinks = {
  title:{
    title:"SMRYN",
    short_last_name:"Sumaryono",
  },
  personal: {
    name: "Mohammad Rafli Sumaryono",
    title: "Full Stack Developer | Building AI Automation, Computer Vision & Data Solutions",
    email: "mohammadraflisumaryono@gmail.com",
    phone: "(+62) 851-7331-8074",
    location: "Sumedang, Jawa Barat, Indonesia",
    bio: "Full Stack Developer with expertise in building AI automation, computer vision, and data-driven solutions. Experienced in developing scalable web applications, designing efficient back-end systems, and creating responsive front-end interfaces while integrating machine learning and intelligent automation into real-world products. Passionate about leveraging technology to solve complex problems and deliver impactful digital solutions.",
    profileImage: "/assets/personal/profile_pic.JPG",
    // resume: "/assets/files/resume.pdf",
    cv: "/assets/personal/CV-Mohammad Rafli Sumaryono eng TRIM.pdf",
  }, 
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/mohammadraflisumaryono",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mohammad-rafli-sumaryono-230b18246",
      icon: "linkedin",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/mraflismryn",
      icon: "instagram",
    },
  ],
  contact: {
    preferredContact: "email",
    availability: "Available for freelance projects",
    responseTime: "24-48 hours",
  },
  business: {
    hourlyRate: "Variable (Negotiable)",
    servicesOffered: [
      "Full Stack Web Development",
      "REST API Development",
      "Database Design & Optimization",
      "UI/UX Implementation",
      "Third-party API Integration",
      "Consultation"
    ],
    timezone: "UTC+7"
  }
};

export default socialLinks;
