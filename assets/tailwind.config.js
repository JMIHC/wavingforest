import daisyui from './vendor/daisyui.js';
import daisyuiTheme from './vendor/daisyui-theme.js';
import heroicons from './vendor/heroicons.js';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
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
  plugins: [
    heroicons,
    daisyui,
    daisyuiTheme({
      themes: [
        {
          light: {
            "color-scheme": "light",
            "base-100": "oklch(99% 0.005 90)",
            "base-200": "oklch(96% 0.008 85)",
            "base-300": "oklch(92% 0.01 80)",
            "base-content": "oklch(25% 0.015 150)",
            "primary": "oklch(55% 0.15 145)",
            "primary-content": "oklch(98% 0.01 145)",
            "secondary": "oklch(65% 0.08 35)",
            "secondary-content": "oklch(98% 0.01 35)",
            "accent": "oklch(60% 0.12 155)",
            "accent-content": "oklch(98% 0.01 155)",
            "neutral": "oklch(40% 0.02 150)",
            "neutral-content": "oklch(98% 0 0)",
            "info": "oklch(62% 0.12 210)",
            "info-content": "oklch(98% 0.01 210)",
            "success": "oklch(60% 0.15 145)",
            "success-content": "oklch(98% 0.01 145)",
            "warning": "oklch(70% 0.15 60)",
            "warning-content": "oklch(20% 0.02 60)",
            "error": "oklch(60% 0.18 20)",
            "error-content": "oklch(98% 0.01 20)",
            "--rounded-box": "0.75rem",
            "--rounded-btn": "0.5rem",
            "--rounded-badge": "0.5rem",
          },
        },
        {
          dark: {
            "color-scheme": "dark",
            "base-100": "oklch(22% 0.012 150)",
            "base-200": "oklch(18% 0.01 150)",
            "base-300": "oklch(14% 0.008 150)",
            "base-content": "oklch(95% 0.01 150)",
            "primary": "oklch(65% 0.15 145)",
            "primary-content": "oklch(98% 0.01 145)",
            "secondary": "oklch(60% 0.1 35)",
            "secondary-content": "oklch(98% 0.01 35)",
            "accent": "oklch(68% 0.12 155)",
            "accent-content": "oklch(98% 0.01 155)",
            "neutral": "oklch(30% 0.02 150)",
            "neutral-content": "oklch(95% 0.01 150)",
            "info": "oklch(60% 0.12 210)",
            "info-content": "oklch(97% 0.01 210)",
            "success": "oklch(65% 0.15 145)",
            "success-content": "oklch(98% 0.01 145)",
            "warning": "oklch(70% 0.15 60)",
            "warning-content": "oklch(20% 0.02 60)",
            "error": "oklch(60% 0.18 20)",
            "error-content": "oklch(98% 0.01 20)",
            "--rounded-box": "0.75rem",
            "--rounded-btn": "0.5rem",
            "--rounded-badge": "0.5rem",
          },
        },
      ],
    }),
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
}
