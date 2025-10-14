/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './js/**/*.{js,jsx,ts,tsx}',
    '../lib/wavingforest_web/**/*.{ex,heex,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {}
    }
  },
  plugins: [],
}
