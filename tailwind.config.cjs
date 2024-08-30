/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainText: "#fff",
        secondaryText: "#60a5fa",
      },
      fontFamily: {
        figtree: ["Figtree"],
      },
      backgroundImage: {
        bgImg: "url('./assets/bgLanding.jpg')",
      },
    },
  },
  plugins: [],
};
