/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#0F0920",
        mainText: "#f2f0ff",
        secondaryText: "#B5B3BC",
        accentText: "#5899ff",
        primaryColor: "#0368ff",
        secondaryColor: "#ff3e95",
      },
      fontFamily: {
        figtree: ["Figtree"],
      },
      backgroundImage: {
        bgImg: "url('./assets/bgLanding.jpg')",
        primaryGradient: "linear-gradient(45deg, #0368ff, #ff3e95)",
        secondaryGradient: "linear-gradient(45deg, #0368ff, #5899ff)",
      },
    },
  },
  plugins: [],
};
