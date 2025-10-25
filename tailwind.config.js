/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ai-primary': '#06b6d4',
        'ai-secondary': '#14b8a6',
        'ai-dark': '#0f172a',
        'ai-light': '#e0f2fe',
      },
    },
  },
  plugins: [],
};
