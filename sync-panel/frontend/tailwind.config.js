/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub Dark inspired palette
        canvas: {
          DEFAULT: '#0d1117',
          subtle: '#161b22',
          inset: '#010409',
        },
        border: {
          DEFAULT: '#30363d',
          muted: '#21262d',
        },
        fg: {
          DEFAULT: '#c9d1d9',
          muted: '#8b949e',
          subtle: '#6e7681',
        },
        accent: {
          DEFAULT: '#1f6feb',
          hover: '#388bfd',
        },
        success: '#3fb950',
        danger: '#f85149',
        warning: '#d29922',
      },
    },
  },
  plugins: [],
}
