// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aged-paper': '#fdf4e3',        // Verouderd papier
        'light-beige': '#f8e7d1',       // Lichte beige
        'sepia': '#704214',             // Diepe sepia
        'dark-sepia': '#5e3a1f',        // Donkere sepia voor accenten
        'dusty-brown': '#8a573b',       // Doffe bruine tint voor randen en accenten
        'red-accent': '#b0583e',        // Warme rode accenten voor subtiele details
        'soft-brown': '#bda384',        // Zachte bruine kleur voor achtergronden
      },
      fontFamily: {
        'handwritten': ['Rock Salt', 'cursive'], // Handgeschreven font
      },
    },
  },
  plugins: [],
}
