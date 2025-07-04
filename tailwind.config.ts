import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#B8CC91',
        'deep-champagne': '#F3DCA7',
        'dark-salmon': '#EE9387',
        'african-violet': '#A08AC5',
        'wild-blue-yonder': '#A1BAD6',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(40, 40, 40, 0.5)'
        }
      })
    })
  ],
};
export default config;