
/**
 * 🏆 CERTIFICATES & ACHIEVEMENTS DATA
 *
 * Format data:
 * - Termasuk issuerLogo untuk better visual
 * - credentialId untuk verifikasi
 * - skills yang relevan
 *
 * Update: Data scraped dari LinkedIn
 */

export const certificatesData = [
  // PASAS INSTITUTE (paling valuable)
  {
    id: "cert-1",
    title: "Certified International Specialist in Data Engineering (CISDE)",
    issuer: "Purchasing and Supply Association Singapore Institute (PASAS)",
    issuerLogo: "/assets/certificates/PASAS.jpg",
    date: "Issued Dec 2025 · Expires Dec 2028",
    credentialUrl: null,
    pdfUrl: "/assets/certificates/CISDE.pdf",
    credentialId: "CISDE15475",
    skills: ["Data Engineering", "Data Warehousing", "Extract, Transform, Load (ETL)"]
  },

  // ORACLE ACADEMIES (baru setelah PASAS)
  {
    id: "cert-2",
    title: "Database Design Oracle Academies",
    issuer: "Oracle Academies",
    issuerLogo: null,
    date: "Issued Sep 2024",
    credentialUrl: null,
    pdfUrl: "/assets/certificates/Database Design Oracle Academies.pdf",
    credentialId: null,
    skills: ["Database Design", "Oracle Database", "Data Modeling"]
  },
  // CISCO (paling akhir)
  {
    id: "cert-3",
    title: "Cisco Networking Academy Linux Essentials Course",
    issuer: "Cisco",
    issuerLogo: null,
    date: "Issued Jul 2024",
    credentialUrl: null,
    pdfUrl: "/assets/certificates/CISCO.pdf",
    credentialId: null,
    skills: ["Linux Server", "Networking", " Linux System Administration"]
  },


  // DICODING INDONESIA (diurutkan dari materi yang paling sulit)
  {
    id: "cert-4",
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Jun 2025 · Expires Jun 2028",
    credentialUrl: "https://www.dicoding.com/certificates/72ZD510WVZYW",
    pdfUrl: "/assets/certificates/MachineLearningTerapan.pdf",
    credentialId: "72ZD510WVZYW",
    skills: ["Machine Learning", "Recommender Systems", "Predictive Analytics", "Machine Learning Algorithms"]
  },
  {
    id: "cert-5",
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Apr 2025 · Expires Apr 2028",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ93YL32Z5D",
    pdfUrl: "/assets/certificates/BelajarFundamentalDeepLearning.pdf",
    credentialId: "QLZ93YL32Z5D",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Sentiment Analysis", "Image Processing"]
  },

  {
    id: "cert-6",
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Mar 2025 · Expires Mar 2028",
    credentialUrl: "https://www.dicoding.com/certificates/53XEDMDQRPRN",
    pdfUrl: "/assets/certificates/BelajarAnalisisDataDenganPython.pdf",
    credentialId: "53XEDMDQRPRN",
    skills: ["Data Analysis", "Statistical Data Analysis", "Analytical Skills", "Python"]
  },
  {
    id: "cert-7",
    title: "Belajar Machine Learning Untuk Pemula",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Apr 2025 · Expires Apr 2028",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ99EMQMZ5D",
    pdfUrl: "/assets/certificates/BelajarMachineLearningUntukPemula.pdf",
    credentialId: "QLZ99EMQMZ5D",
    skills: ["Machine Learning", "Python", "Cluster Analysis", "Data Classification"]
  },
  {
    id: "cert-8",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/07Z633GKYZQR",
    pdfUrl: "/assets/certificates/BelajarDasarVisualisasiData.pdf",
    credentialId: "07Z633GKYZQR",
    skills: ["Data Visualization", "Data Analysis"]
  },
  {
    id: "cert-9",
    title: "Belajar Fundamental Pemroresan Data",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued May 2025 · Expires May 2028",
    credentialUrl: "https://www.dicoding.com/certificates/EYX4G30N5ZDL",
    pdfUrl: "/assets/certificates/BelajarFundamentalPemrosesanData.pdf",
    credentialId: "EYX4G30N5ZDL",
    skills: ["Data Processing", "Extract, Transform, Load (ETL)", "Data Scraping"]
  },
  {
    id: "cert-10",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMNNYY3PYQ",
    pdfUrl: "/assets/certificates/BelajarDasarSQL.pdf",
    credentialId: "MRZMNNYY3PYQ",
    skills: ["SQL", "Database"]
  },
  {
    id: "cert-11",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://dicoding.com/certificates/KEXL7Y0G0XG2",
    pdfUrl: "/assets/certificates/BelajarDasarAI.pdf",
    credentialId: "KEXL7Y0G0XG2",
    skills: ["Artificial Intelligence", "Machine Learning Basics"]
  },
  {
    id: "cert-12",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/KEXL7LQ9RXG2",
    pdfUrl: "/assets/certificates/belajargitdangithub.pdf",
    credentialId: "KEXL7LQ9RXG2",
    skills: ["Git", "GitHub", "Version Control", "Collaboration Work", "Teamwork"]
  },
  {
    id: "cert-13",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/1OP82N1J2PQK",
    pdfUrl: "/assets/certificates/ProgrammingLogic.pdf",
    credentialId: "1OP82N1J2PQK",
    skills: ["Logic Programming", "Problem Solving", "Critical Thinking"]
  },
  {
    id: "cert-14",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Mar 2025 · Expires Mar 2028",
    credentialUrl: "https://www.dicoding.com/certificates/2VX3K0VDQXYQ",
    pdfUrl: "/assets/certificates/MemulaiPemrogramanPython.pdf",
    credentialId: "2VX3K0VDQXYQ",
    skills: ["Python", "Programming Fundamentals"]
  },
  {
    id: "cert-15",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Feb 2025 · Expires Feb 2028",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO95940XG5",
    pdfUrl: "/assets/certificates/MemulaiDasarPemrograman.pdf",
    credentialId: "N9ZO95940XG5",
    skills: ["Software Development", "Programming Fundamentals", "Software Development Life Cycle (SDLC)"]
  },
  {
    id: "cert-16",
    title: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Apr 2024 · Expires Apr 2027",
    credentialUrl: "https://dicoding.com/certificates/MRZMEDEKLPYQ",
    pdfUrl: "/assets/certificates/MemulaiPemrogramanJava.pdf",
    credentialId: "MRZMEDEKLPYQ",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Programming Fundamentals"]
  },
  {
    id: "cert-17",
    title: "Financial Literacy 101",
    issuer: "Dicoding Indonesia",
    issuerLogo: null,
    date: "Issued Apr 2025 · Expires Apr 2028",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMN3Y1NPYQ",
    pdfUrl: "/assets/certificates/FinancialLiteracy.pdf",
    credentialId: "MRZMN3Y1NPYQ",
    skills: ["Financial Literacy"]
  },
  {
    id: "cert-18",
    title: "Database Programming with SQL",
    issuer: "Oracle Academies",
    issuerLogo: null,
    date: "Issued Oct 2024",
    credentialUrl: null,
    pdfUrl: "/assets/certificates/DP SQL.pdf",
    credentialId: null,
    skills: ["SQL", "Databases", "Oracle Database"]
  }


];
export default certificatesData;

