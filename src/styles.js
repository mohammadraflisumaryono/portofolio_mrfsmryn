/**
 * 🎨 GLOBAL STYLES & UTILITIES
 * 
 * Semua CSS variables dan global styles dalam satu file
 * Import ini di index.css atau gunakan langsung di komponen
 */

// CSS Variables - Export as string untuk digunakan di index.css
export const cssVariables = `
:root {
  /* Primary Colors */
  --primary-50: #EFF6FF;
  --primary-100: #DBEAFE;
  --primary-200: #BFDBFE;
  --primary-300: #93C5FD;
  --primary-400: #60A5FA;
  --primary-500: #3B82F6;
  --primary-600: #2563EB;
  --primary-700: #1D4ED8;
  --primary-800: #1E40AF;
  --primary-900: #1E3A8A;

  /* Secondary Colors */
  --secondary-50: #F0FDF4;
  --secondary-100: #DCFCE7;
  --secondary-200: #BBFAD0;
  --secondary-300: #86EFAC;
  --secondary-400: #4ADE80;
  --secondary-500: #10B981;
  --secondary-600: #059669;
  --secondary-700: #047857;
  --secondary-800: #065F46;
  --secondary-900: #064E3B;

  /* Accent Colors */
  --accent-50: #FFFBEB;
  --accent-100: #FEF3C7;
  --accent-200: #FDE68A;
  --accent-300: #FCD34D;
  --accent-400: #FBBF24;
  --accent-500: #F59E0B;
  --accent-600: #D97706;
  --accent-700: #B45309;
  --accent-800: #92400E;
  --accent-900: #78350F;

  /* Neutral Colors */
  --neutral-50: #FAFAFA;
  --neutral-100: #F4F4F5;
  --neutral-200: #E4E4E7;
  --neutral-300: #D4D4D8;
  --neutral-400: #A1A1AA;
  --neutral-500: #71717A;
  --neutral-600: #52525B;
  --neutral-700: #3F3F46;
  --neutral-800: #27272A;
  --neutral-900: #18181B;

  /* Status Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --spacing-4xl: 6rem;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  --font-mono: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo',
    'Courier', monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;

  /* Letter Spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;

  /* Box Shadow */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;

  /* Z-Index */
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-modal: 1300;
  --z-popover: 1400;
  --z-tooltip: 1500;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #f9fafb;
    --bg-color: #111827;
    --border-color: #374151;
  }
}

/* Light Mode */
@media (prefers-color-scheme: light) {
  :root {
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --border-color: #e5e7eb;
  }
}
`;

// Component Styles
export const componentStyles = {
  button: `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-lg);
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-normal);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,

  card: `
    background-color: white;
    border-radius: var(--radius-xl);
    border: 1px solid var(--neutral-200);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-normal);
    
    &:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--primary-300);
    }
  `,

  input: `
    width: 100%;
    padding: var(--spacing-md);
    border: 1px solid var(--neutral-300);
    border-radius: var(--radius-lg);
    font-family: var(--font-sans);
    font-size: var(--text-base);
    transition: all var(--transition-normal);
    
    &:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `,

  section: `
    padding: var(--spacing-4xl) var(--spacing-xl);
    max-width: 1280px;
    margin: 0 auto;
  `,

  container: `
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  `,
};

// Utility Classes
export const utilityClasses = {
  flexCenter: "display: flex; align-items: center; justify-content: center;",
  flexBetween: "display: flex; align-items: center; justify-content: space-between;",
  flexCol: "display: flex; flex-direction: column;",
  gridAuto: "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
  absoluteCenter: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
  textTruncate: "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
  textClamp3: "display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;",
};

// Breakpoints
export const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
  ultraWide: "1920px",
};

// Animation Keyframes
export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  slideUp: `
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `,
  slideDown: `
    @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `,
};

export default {
  cssVariables,
  componentStyles,
  utilityClasses,
  breakpoints,
  animations,
};
