/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary-green': '#079669',
        'secondary-green': '#9EFEB3',
        'dark': '#181818',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'custom': '12px',
      },
    },
  },
  plugins: [],
}
