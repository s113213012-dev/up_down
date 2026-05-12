/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E4A3B',
        secondary: '#5e544a',
        cream: '#FBF7EF',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Noto Sans JP"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
