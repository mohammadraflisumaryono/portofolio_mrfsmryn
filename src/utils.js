/**
 * 🔧 UTILITY FUNCTIONS
 * 
 * Helper functions untuk portfolio
 */

/**
 * Format date to readable string
 * @param {string} dateString - Date in format "January 2025"
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";
  return dateString;
};

/**
 * Get featured projects only
 * @param {array} projects - All projects
 * @returns {array} Filtered featured projects
 */
export const getFeaturedProjects = (projects) => {
  return projects?.filter(project => project.featured === true) || [];
};

/**
 * Get projects by technology
 * @param {array} projects - All projects
 * @param {string} tech - Technology to filter by
 * @returns {array} Filtered projects
 */
export const getProjectsByTech = (projects, tech) => {
  return projects?.filter(project => 
    project.technologies?.includes(tech)
  ) || [];
};

/**
 * Get years of experience
 * @param {array} experience - Experience data
 * @returns {number} Total years
 */
export const getTotalYearsExperience = (experience) => {
  if (!experience || experience.length === 0) return 0;
  return experience.reduce((total, job) => {
    const years = job.years || 1;
    return total + years;
  }, 0);
};

/**
 * Get current job
 * @param {array} experience - Experience data
 * @returns {object} Current job info
 */
export const getCurrentJob = (experience) => {
  return experience?.find(job => job.isCurrent === true);
};

/**
 * Get all technologies from projects
 * @param {array} projects - All projects
 * @returns {array} Unique technologies
 */
export const getAllTechnologies = (projects) => {
  const techs = new Set();
  projects?.forEach(project => {
    project.technologies?.forEach(tech => techs.add(tech));
  });
  return Array.from(techs).sort();
};

/**
 * Get skills by category
 * @param {object} skillsData - Skills data
 * @returns {array} Array of skill categories
 */
export const getSkillsByCategory = (skillsData) => {
  return Object.entries(skillsData).map(([key, value]) => ({
    key,
    ...value
  }));
};

/**
 * Calculate experience duration
 * @param {string} startDate - Start date
 * @param {string} endDate - End date (or "Present")
 * @returns {string} Duration string
 */
export const calculateDuration = (startDate, endDate) => {
  // Simple implementation - can be enhanced
  return endDate === "Present" ? "Current" : "Completed";
};

/**
 * Group array by key
 * @param {array} array - Array to group
 * @param {string} key - Key to group by
 * @returns {object} Grouped object
 */
export const groupByKey = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
};

/**
 * Truncate text
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials
 */
export const getInitials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
};

/**
 * Format skill proficiency to percentage
 * @param {string} proficiency - Proficiency level
 * @returns {number} Percentage
 */
export const getProficiencyPercentage = (proficiency) => {
  const levels = {
    "Beginner": 25,
    "Intermediate": 50,
    "Advanced": 75,
    "Expert": 100
  };
  return levels[proficiency] || 0;
};

/**
 * Sort projects by year (newest first)
 * @param {array} projects - Projects to sort
 * @returns {array} Sorted projects
 */
export const sortProjectsByYear = (projects) => {
  return [...projects].sort((a, b) => b.year - a.year);
};

/**
 * Filter projects by year
 * @param {array} projects - All projects
 * @param {number} year - Year to filter
 * @returns {array} Filtered projects
 */
export const getProjectsByYear = (projects, year) => {
  return projects?.filter(project => project.year === year) || [];
};

/**
 * Check if link is external
 * @param {string} url - URL to check
 * @returns {boolean} True if external
 */
export const isExternalLink = (url) => {
  return url?.startsWith("http://") || url?.startsWith("https://");
};

/**
 * Open link in new tab if external
 * @param {string} url - URL to open
 * @param {boolean} external - Force external
 */
export const openLink = (url, external = true) => {
  if (!url) return;
  const target = external || isExternalLink(url) ? "_blank" : "_self";
  window.open(url, target);
};

/**
 * Get theme color by name
 * @param {string} colorName - Color name from config
 * @param {object} config - Config object
 * @returns {string} Color value
 */
export const getThemeColor = (colorName, config) => {
  return config?.theme?.[colorName] || "#000000";
};

/**
 * Parse markdown links [text](url) to HTML
 * @param {string} text - Text with markdown links
 * @returns {string} HTML string
 */
export const parseMarkdownLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
};

export default {
  formatDate,
  getFeaturedProjects,
  getProjectsByTech,
  getTotalYearsExperience,
  getCurrentJob,
  getAllTechnologies,
  getSkillsByCategory,
  calculateDuration,
  groupByKey,
  truncateText,
  getInitials,
  getProficiencyPercentage,
  sortProjectsByYear,
  getProjectsByYear,
  isExternalLink,
  openLink,
  getThemeColor,
  parseMarkdownLinks,
};
