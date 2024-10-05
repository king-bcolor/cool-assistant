/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx","./*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#312e81b3',
        secondary: '#312e81cc',
        background: '#FFFFFF80',
        text: '#1B1340',
        accent: '#FF4A6D80',
      },
      animation: {
        breathe: 'breathe 4s infinite ease-in-out',
        float: 'float 4s ease-in-out infinite',
        pulse: 'pulse 4s infinite ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        glowBorder: 'glowBorder 2s infinite ease-in-out',
        colorShift: 'colorShift 8s infinite ease-in-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translate(5px, 5px) rotate(2deg)', opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glowBorder: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(109, 74, 255, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(109, 74, 255, 0.5)' },
        },
        colorShift: {
          '0%, 100%': { backgroundColor: 'rgba(27, 19, 64, 0.7)' },
          '50%': { backgroundColor: 'rgba(37, 29, 74, 0.7)' },
        },
      }
    },
  },
  plugins: [],
}

