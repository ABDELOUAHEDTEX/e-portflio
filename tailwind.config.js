/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1E3A8A',
        'neon-cyan': '#00F7FF',
        'space-dark': '#0f172a',
        'space-blue': '#1e293b',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 247, 255, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0f172a, #1E3A8A)',
      },
    },
  },
  plugins: [],
};