/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
    colors: {
      clRed: '#ff936c',
      lRed: '',
    }}
  },
  plugins: [],
}

