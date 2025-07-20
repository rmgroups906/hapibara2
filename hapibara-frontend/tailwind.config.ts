import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#d9f1d9',
          200: '#b5e3b5',
          300: '#8bd08b',
          400: '#6ab96a',
          500: '#4a9f4a',
          600: '#3d8b3d',
          700: '#327332',
          800: '#2a5f2a',
          900: '#244f24',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f4f1ed',
          200: '#e8e1d9',
          300: '#d9cec1',
          400: '#c7b5a3',
          500: '#b5a088',
          600: '#a08c71',
          700: '#8b7760',
          800: '#726252',
          900: '#5d5044',
        },
        accent: {
          50: '#fef9f3',
          100: '#fef0e1',
          200: '#fcdfc7',
          300: '#f9c89a',
          400: '#f5a96b',
          500: '#f18d47',
          600: '#e2722d',
          700: '#bc5a23',
          800: '#964924',
          900: '#793e20',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e5e5e4',
          300: '#d1d1cf',
          400: '#b3b3b1',
          500: '#9a9a97',
          600: '#82827f',
          700: '#6b6b68',
          800: '#5a5a57',
          900: '#4e4e4b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;