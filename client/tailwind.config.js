/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // Dark Navy
        surface: '#1E293B',
        'surface-light': '#334155',
        foreground: '#F8FAFC', // White
        muted: '#94A3B8', // Gray
        border: '#334155',
        primary: {
          DEFAULT: '#2563EB', // Blue
          hover: '#1D4ED8',
          light: '#3B82F6',
        },
        accent: {
          DEFAULT: '#38BDF8', // Light Blue / Sky
          hover: '#0EA5E9',
          glow: 'rgba(56, 189, 248, 0.25)',
        },
        sky: {
          DEFAULT: '#38BDF8',
          glow: 'rgba(56, 189, 248, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
}
