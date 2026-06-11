/**
 * ⚙️ CONFIGURATION FILE
 * 
 * Semua konfigurasi aplikasi terpusat di sini
 * Ubah nilai di bawah untuk kustomisasi portfolio Anda
 */

export const appConfig = {
  // Informasi Dasar
  app: {
    name: "My Portfolio",
    description: "Professional portfolio showcasing my projects and expertise",
    version: "1.0.0",
  },

  // Tema & Styling
  theme: {
    primary: "#3B82F6",      // Warna utama (biru)
    secondary: "#10B981",    // Warna sekunder (hijau)
    accent: "#F59E0B",       // Warna aksen (amber)
    dark: "#1F2937",         // Warna gelap
    light: "#F9FAFB",        // Warna terang
    danger: "#EF4444",       // Warna danger (merah)
    
    // Gradients
    gradients: {
      primary: "from-blue-500 to-cyan-500",
      secondary: "from-purple-500 to-pink-500",
      dark: "from-gray-900 to-gray-800",
    },
  },

  // Settings Halaman
  sections: {
    hero: {
      enabled: true,
      title: "Welcome to My Portfolio",
      subtitle: "Building amazing digital experiences",
      cta: "View My Work"
    },
    about: {
      enabled: true,
      title: "About Me",
      showImage: true,
    },
    portfolio: {
      enabled: true,
      title: "Featured Projects",
      itemsPerPage: 6,
      showFeaturedOnly: false,
    },
    skills: {
      enabled: true,
      title: "Skills & Expertise",
      showProficiency: true,
    },
    experience: {
      enabled: true,
      title: "Work Experience",
      showTimeline: true,
    },
    certificates: {
      enabled: true,
      title: "Certifications & Achievements",
      showVerificationLinks: true,
    },
    contact: {
      enabled: true,
      title: "Get In Touch",
      showForm: true,
      showSocial: true,
    },
  },

  // Metadata & SEO
  seo: {
    keywords: ["Developer", "Portfolio", "Web Developer", "Full Stack"],
    language: "en",
    ogImage: "/assets/images/og-image.jpg",
  },

  // // API Endpoints (jika ada)
  // api: {
  //   baseUrl: "https://api.example.com",
  //   endpoints: {
  //     contact: "/api/contact",
  //     projects: "/api/projects",
  //   }
  // },

  // Feature Flags
  features: {
    darkMode: true,
    animations: true,
    searchFunctionality: true,
    filterByTechnology: true,
    downloadResume: true,
  },

  // // Analytics (optional)
  // analytics: {
  //   enabled: false,
  //   googleAnalyticsId: "G-XXXXXXXXXX",
  // },

  // Social Media Share
  shareButtons: {
    enabled: true,
    platforms: ["twitter", "linkedin", "facebook", "github"]
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],

  // Footer Info
  footer: {
    copyright: "© 2026 Mohammad Rafli Sumaryono. All rights reserved.",
    showSocialLinks: true,
    showBackToTop: true,
  },

  // Pagination
  pagination: {
    defaultPerPage: 6,
    maxPerPage: 20,
  },

  // Animation Settings
  animation: {
    duration: 0.3,
    easing: "ease-in-out",
  },


  assets: {
    portfolio: "/assets/portfolio/",
    certificates: "/assets/certificates/",
    images: "/assets/images/",
    files: "/assets/files/",
  }
};

export default appConfig;
