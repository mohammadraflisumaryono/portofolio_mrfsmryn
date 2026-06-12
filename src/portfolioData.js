import { certificatesData } from "./certificatesData";

export const projects = [
  {
    "id": 1,
    "title": "Fly for Humanity",
    "role": "Full Stack Engineer",
    "company": "Loka Langit Nusantara",
    "period": "Nov 2025 - Jan 2026",
    "type": "Freelance",
    "status": "Completed",
    "description": "A comprehensive disaster mapping and real-time monitoring platform designed to handle large-scale geospatial data and secure, multi-level user administration.",
    "contributions": [
      "Built a robust disaster mapping platform integrated with real-time monitoring capabilities using Leaflet.js and PostgreSQL.",
      "Developed a highly scalable RESTful API from scratch leveraging Express.js and TypeScript for efficient backend performance.",
      "Designed and implemented a multi-level admin panel backed by robust Role-Based Access Control (RBAC) to ensure secure data boundaries.",
      "Managed and optimized complex relational database architectures tailored for large-scale geospatial data processing."
    ],
    "category": "Full Stack",
    "technologies": [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Leaflet.js"
    ],

    "image": "/assets/project/f4h/thumb.png",

    "images": [
      "/assets/project/f4h/f4h_2.png",
      "/assets/project/f4h/f4h_1.png",
      "/assets/project/f4h/f4h.png"
    ],
    "link": "https://flyforhumanity.com",
    "code": null,
    "featured": true,
    "year": 2025,

    "details": "In this role, the main focus was addressing the challenges of visualizing and managing large-scale geospatial information for a disaster monitoring context. By utilizing Express.js and TypeScript, the backend was engineered to be type-safe, maintainable, and highly efficient in delivering data via REST APIs. On the frontend, real-time mapping modules were engineered using Leaflet.js, while the data persistence layer was architected in PostgreSQL to seamlessly handle geospatial data processing and secure multi-level administrative workflows through Role-Based Access Control (RBAC)."
  },

  {
    "id": 2,
    "title": "Kalijagas Business Platform",
    "role": "Full-Stack Developer",
    "company": "PT Kalimantan Jawa Gas",
    "period": "Mar 2025 - Jun 2025",
    "type": "Part-time / Freelance",
    "status": "Completed",

    "description": "An end-to-end company profile platform integrated with a custom Content Management System (CMS), built independently to streamline digital presence and dynamic content management.",

    "contributions": [
      "Designed and developed a custom CMS from scratch to enable seamless content updates for the company profile.",
      "Created modern, highly responsive UI/UX layouts optimized for all device types using React and Tailwind CSS.",
      "Architected and optimized relational database schemas using MySQL to ensure efficient data handling and security.",
      "Implemented a robust backend infrastructure leveraging Laravel 12 to handle business logic and dynamic content rendering."
    ],

    "category": "Full Stack",

    "technologies": [
      "Laravel 12",
      "React",
      "Tailwind CSS",
      "MySQL"
    ],

    "image": "/assets/project/kjg/kjg.png",

    "images": [
      "/assets/project/kjg/kjg.png",
      "/assets/project/kjg/kjg-1.png",
      "/assets/project/kjg/kjg-2.png"
    ],

    "link": "https://kalijagas.co.id",
    "code": null,

    "featured": true,
    "year": 2025,

    "details": "This project involved the solo development of the official web presence for PT Kalimantan Jawa Gas. The core challenge was to replace a static flow with a highly dynamic, custom-built Content Management System (CMS). Built with a modern full-stack workflow utilizing Laravel 12 as a robust backend and React for a reactive frontend, the platform ensures seamless content administration, exceptional performance, and a unified brand identity across all user devices."
  },
  {
    "id": 3,
    "title": "Bosque Property Portal",
    "role": "Full Stack Developer",
    "company": "PT Hayasa Digitals Tech",
    "period": "Dec 2024 - Mar 2025",
    "type": "Contract",
    "status": "Completed",

    "description": "A comprehensive real estate sales management ecosystem integrated with automated ad lead generation, automated WhatsApp follow-ups, and an advanced lead lifecycle tracking system.",

    "contributions": [
      "Developed a robust backend RESTful API infrastructure utilizing Laravel to seamlessly feed real-time property data into the accompanying Android app.",
      "Integrated Zapier to capture automated leads directly from Meta Ads and TikTok Ads campaigns, channeling them instantly into the system.",
      "Implemented a dynamic lead status tracking lifecycle to monitor buyer journeys through custom operational stages (e.g., Inquiries, Site Surveys, and Closing/Deal).",
      "Built direct WhatsApp communication triggers into the dashboard to accelerate lead engagement and follow-up efficiency."
    ],

    "category": "Full Stack",

    "technologies": [
      "Laravel",
      "MySQL",
      "Zapier",
      "WhatsApp API",
      "REST APIs"
    ],

    "image": "/assets/project/bosque/thumb.png",

    "images": [
      "/assets/project/bosque/thumb.png"
    ],

    "link": "https://bosqueproperti.com",
    "code": null,

    "featured": true,
    "year": 2025,

    "details": "The primary focus of this full-stack project was converting raw marketing traffic into organized sales operations. By leveraging Zapier, leads from Meta and TikTok Ads are completely automated and fed straight into a custom admin dashboard. The platform features an automated WhatsApp messaging workflow for instant follow-ups and includes a granular sales CRM pipeline to maintain, update, and track lead statuses—from initial inquiries and site survey schedules up to final deals. Concurrently, a structured relational database and type-safe RESTful API endpoints were built in Laravel to serve data across both the web interface and an Android mobile application."
  },
 {
    "id": 4,
    "title": "Skinthesia - Personalized Skincare Recommendation System",
    "role": "Team Leader & Machine Learning Engineer",
    "company": "Coding Camp powered by DBS Foundation",
    "period": "Feb 2025 - Jul 2025",
    "type": "Apprenticeship",
    "status": "Completed",

    "description": "A personalized skincare recommendation system powered by a multi-label classification machine learning model, integrated with full-stack architectures to deliver tailored suggestions based on skin type and budget.",

    "contributions": [
      "Led a multidisciplinary project team in developing Skinthesia, ensuring seamless collaboration and timely milestone delivery.",
      "Designed and executed ETL pipelines incorporating automated data scraping to gather, clean, and transform extensive skincare product datasets.",
      "Engineered a multi-label classification model using TensorFlow and deployed it via RESTful APIs for real-time tailored recommendations.",
      "Integrated end-to-end ML models with full-stack architectures, aligning outputs across a React frontend and Flask/Hapi.js backend."
    ],

    "category": "AI",

    "technologies": [
      "Python",
      "TensorFlow",
      "Flask",
      "Hapi.js",
      "React",
      "SQL",
      "Deep Learning"
    ],

    "image": "/assets/project/skinthesia/thumb.png",

    "images": [
      "/assets/project/skinthesia/thumb.png",
    ],

    "link": "https://skinthesia.vercel.app/",
    "code": "https://github.com/jasmeinalbr/Skinthesia-Model",

    "featured": true,
    "year": 2025,

    "details": "Skinthesia was developed to bridge the gap between complex skincare science and consumer needs. As the Team Leader and ML Engineer, I managed the end-to-end development lifecycle, starting from automated web scraping to build a comprehensive product dataset, to cleaning and transformation via custom ETL pipelines. The core intelligence relies on a deep learning multi-label classification model built with TensorFlow, which maps user profiles to optimized skincare routines. This model was operationalized using Flask and Hapi.js microservices, providing highly responsive RESTful APIs that serve accurate data directly to a dynamic React frontend application."
  },
  {
    "id": 5,
    "title": "Goova - Event Finder",
    "role": "Team Leader & Backend Engineer",
    "company": "Personal / Team Project",
    "period": "Jan 2024 - Apr 2024",
    "type": "Project",
    "status": "Completed",

    "description": "A mobile application designed to discover local events, manage event listings, and connect organizers with attendees through structured categories and direct registration pipelines.",

    "contributions": [
      "Coordinated the development lifecycle as Team Leader, aligning tasks across frontend and backend tracks to ensure milestone compliance.",
      "Designed, developed, and maintained a scalable backend RESTful API architecture to power real-time event discovery and data transactions.",
      "Implemented structured data pipelines for seamless content delivery, managing event categories, detailed info metrics, and search functionality.",
      "Collaborated heavily on integration testing with the Flutter client to optimize response times and deliver a responsive user experience."
    ],

    "category": "Mobile",

    "technologies": [
      "Flutter",
      "Dart",
      "REST APIs",
      "Database Management",
      "Project Management"
    ],

    "image": "/assets/project/goova/thumb.png",

    "images": [
      "/assets/project/goova/thumb.png",
    ],

    "link": "https://play.google.com/store/apps/details?id=com.goova.event_finder",
    "code":"https://github.com/mohammadraflisumaryono/Event-Finder",
    "featured": true,
    "year": 2024,

    "details": "Goova was built to serve as an intuitive third-party hub for event discovery, ranging from seminars and workshops to concerts and exhibitions. Operating as the Team Leader and Backend Engineer, I split my responsibilities between technical execution and project coordination. On the technical side, I architected the server-side infrastructure, ensuring secure and efficient API endpoints for core features like 'Become an Organizer' and automated navigation streams. By structuring clean database relations and coordinating closely with the frontend implementation, we established a seamless, end-to-end data flow from the server straight into the Flutter mobile application."
  },
{
    "id": 6,
    "title": "MamFoods App",
    "role": "Team Leader, Backend & Android Developer",
    "company": "Personal / Team Project",
    "period": "Aug 2024 - Nov 2024",
    "type": "Project",
    "status": "Completed",

    "description": "An Android-based food ordering application designed to connect users with local restaurants, specifically engineered to boost small culinary businesses through an integrated digital platform.",

    "contributions": [
      "Led the development team as Team Leader, structuring project milestones and coordinating tasks between UI/UX design and core development tracks.",
      "Architected the database schemas and managed data persistence logic to ensure secure, efficient storage of user profiles, menus, and order histories.",
      "Developed robust server-side data handling and business logic to process real-time transaction workflows and restaurant inventory states.",
      "Implemented responsive frontend layouts and user interface components across multiple primary app screens using native Android development practices."
    ],

    "category": "Mobile",

    "technologies": [
      "Android Studio",
      "Java/Kotlin",
      "Database Management",
      "Data Logic",
      "UI/UX Implementation"
    ],

    "image": "/assets/project/mamfoods/thumb.jpeg",

    "images": [
      "/assets/project/mamfoods/thumb.jpeg",
    ],

    "link": "",

    "code": "https://github.com/jasmeinalbr/MamFoods",
    "featured": true,
    "year": 2024,

    "details": "MamFoods App was created to digitize and empower micro-to-small culinary vendors by giving them direct access to local consumers. Serving as the Team Leader, I took charge of both project management and core technical execution. My primary focus was establishing the system's data backbone—designing relational database architectures and programming the back-end logic needed to manage seamless food ordering flows, cart updates, and status tracking. In addition to data and backend management, I also actively contributed to the frontend presentation layer, developing and optimizing several critical user-facing screens to ensure a smooth, intuitive browsing and purchasing experience."
  },
{
    "id": 7,
    "title": "Car Rental Management & Admin System",
    "role": "Full Stack Developer",
    "company": "Technical Test Project",
    "period": "aug 2024",
    "type": "Technical Test",
    "status": "Completed",

    "description": "A rapid-development car rental platform built within a strict 24-hour deadline, focusing heavily on a comprehensive back-office administrative dashboard to manage fleet operations, car categorizations, and rental transactions.",

    "contributions": [
      "Built a fully functional administrative CRUD ecosystem using Laravel and Blade templates, delivering a complete management system within a tight 1-day timeline.",
      "Developed a dynamic car inventory management system featuring automated filtering for specific query tiers, including Latest, Cheapest, and Most Expensive cars.",
      "Implemented a secure transaction logging and monitoring workflow within the admin panel to track car rentals and user orders seamlessly.",
      "Designed a clean and responsive user interface using Blade layout inheritance and Tailwind CSS components for efficient navigation and data presentation."
    ],

    "category": "Full Stack",

    "technologies": [
      "Laravel",
      "Blade Templates",
      "MySQL",
      "Tailwind CSS"
    ],

    "image": "/assets/project/rent/rent-1.png",

    "images": [
      "/assets/project/rent/thumb.png",
      "/assets/project/rent/rent-1.png",
      "/assets/project/rent/rent-2.png",
      "/assets/project/rent/rent.png"
    ],

    "link": null,
    "code": "https://github.com/mohammadraflisumaryono/TechTest_Jasamedika",

    "featured": true,
    "year": 2026,

    "details": "This project was developed as an intensive technical assessment. The primary challenge was delivering a complete and operational car rental administration system under extreme time constraints. By leveraging Laravel's native Blade templating engine, the development process was highly accelerated through direct server-side rendering, efficient layout inheritance, and seamless database interactions. The resulting application features a robust back-office for inventory tracking (segmented into latest models, budget-friendly options, and premium fleets), a structured rental transaction log, and a clean, responsive client-facing catalog."
  }

];

export const skills = {
  frontend: [
    { skill: "React.js", level: 85, description: "Component-based UI development with hooks and state management" },
    { skill: "Tailwind CSS", level: 85, description: "Utility-first CSS framework for rapid UI development" },
    { skill: "Responsive Design", level: 85, description: "Mobile-first design and cross-device optimization" },
  ],
  backend: [
    { skill: "Express.js", level: 85, description: "RESTful API development and server-side logic" },
    { skill: "TypeScript", level: 80, description: "Type-safe JavaScript development" },
    { skill: "REST API Design", level: 85, description: "Scalable API architecture and best practices" },
  ],
  database: [
    { skill: "PostgreSQL", level: 85, description: "Advanced relational database with geospatial features" },
    { skill: "MySQL", level: 85, description: "Relational database design and optimization" },
  ],
  tools: [
    { skill: "Git & GitHub", level: 85, description: "Version control and collaboration" },
    { skill: "Docker", level: 75, description: "Containerization and deployment" },
  ],
};

export const experiences = [

  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Loka Langit Nusantara",
    period: "Nov 2025 - Jan 2026",
    type: "Freelance",
    status: "Completed",
    achievements: [
      "Built a disaster mapping platform with real-time monitoring using Leaflet.js and PostgreSQL",
      "Developed scalable REST API with Express.js + TypeScript and a multi-level admin panel with RBAC",
      "Managed large-scale geospatial data processing and relational database architecture"
    ],
    description: "Disaster mapping platform with real-time monitoring, scalable APIs, and geospatial data workflows."
  },
  {
    id: 2,
    role: "Team Leader & Machine Learning Engineer",
    company: "Coding Camp powered by DBS Foundation",
    period: "Feb 2025 - Jul 2025",
    type: "Apprenticeship",
    status: "Completed",
    achievements: [
      "Led a multidisciplinary team to develop Skinthesia, a personalized skincare recommendation system",
      "Designed ETL pipelines with automated data scraping to build datasets for model training",
      "Engineered a multi-label classification model using TensorFlow and deployed it via RESTful APIs",
      "Integrated end-to-end ML models into full-stack architecture (React frontend + Flask/Hapi.js backend)",
      "Strengthened Python, SQL, Data Visualization, and Deep Learning skills; improved presentation and technical interview readiness"
    ],
    description: "Personalized skincare recommendation system covering ETL, multi-label classification, and production API deployment."
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "PT Kalimantan Jawa Gas",
    period: "Mar 2025 - Jun 2025",
    type: "Part-time",
    status: "Completed",
    achievements: [
      "Designed modern UI/UX interfaces tailored to company branding",
      "Built fully responsive layouts optimized for all devices",
      "Designed and managed relational databases using MySQL",
      "Collaborated in a cross-functional team to deliver production-quality software",
      "Utilized Laravel 12, React, and Tailwind CSS for efficient development"
    ],
    description: "Modern corporate profile and responsive web experience with reliable relational database architecture."
  },
  {
    id: 4,
    role: "Full-stack Developer",
    company: "PT Hayasa Digitals Tech (Contract)",
    period: "Dec 2024 - Mar 2025",
    type: "Contract",
    status: "Completed",
    achievements: [
      "Built sales management website with admin dashboard and secure user access",
      "Developed landing page and dynamic property listing with filtering/sorting UX",
      "Created robust RESTful API endpoints for Android app integration",
      "Implemented WhatsApp integration for lead follow-up and customer engagement",
      "Connected Meta Ads and TikTok Ads with Zapier to automate lead capture and marketing workflows"
    ],
    description: "Full-stack sales management platform with admin tools, mobile integration APIs, and marketing automation."
  }
];


export const education = [
  {
    id: 1,
    degree: "Bachelor of Informatics Engineering",
    institution: "State Islamic University (UIN) Sunan Gunung Djati Bandung, Indonesia",
    period: "Aug 2022 – May 2026",
    gpa: "3.77 / 4.0",
    focus: "Full Stack Web Development, Database Architecture, RESTful API Design",
    status: "Currently Enrolled",
    details: "Comprehensive informatics engineering education with specialization in full-stack web development, modern web architectures, and software engineering practices"
  },
];




export const certifications = [];

const completedProjectsCount = projects.filter(

  (project) => project.status === "Completed"
).length;

const certificatesEarnedCount = Array.isArray(certificatesData)
  ? certificatesData.length
  : 0;

export const stats = {
  projectsCompleted: completedProjectsCount || projects.length,
  yearsExperience: 2,
  certificationsEarned: certificatesEarnedCount,
};


export default {
  projects,
  experiences,
  education,
  certifications,
  skills,
  stats,
};
