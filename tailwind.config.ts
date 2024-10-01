/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Voeg dit toe als je ook pagina's hebt
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
