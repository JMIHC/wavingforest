/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './js/**/*.{js,jsx,ts,tsx}',
    '../lib/wavingforest_web/**/*.{ex,heex,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8dfd0',
          300: '#d9c9b0',
          400: '#c7ae8c',
          500: '#b89468',
          600: '#a17b52',
          700: '#866447',
          800: '#6d523c',
          900: '#594333',
        }
      }
    }
  },
  plugins: [],
}
