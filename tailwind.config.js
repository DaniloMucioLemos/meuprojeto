/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0A1929',
        'dark-secondary': '#132F4C',
        'dark-accent': '#1E4976',
        'dark-text': '#E7EBF0',
        'dark-text-secondary': '#B2BAC2',
        'dark-border': '#1E4976',
        'dark-hover': '#173A5E',
      },
    },
  },
  plugins: [],
} 