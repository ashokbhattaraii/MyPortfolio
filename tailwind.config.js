// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Ensure all your project file paths are listed here
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  
  theme: {
    extend: {
      // 🛑 NEW: Custom Keyframes for the "wave" animation 
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' }, // Subtle vertical shift
        },
      },
      // 🛑 NEW: Custom Animation utility class
      animation: {
        'text-wave': 'wave 1s ease-in-out infinite alternate', // Use the 'wave' keyframe
      },
    },
  },
  
  plugins: [],
}