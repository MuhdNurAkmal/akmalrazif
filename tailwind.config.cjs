/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#000",
        mainText: "#f2f0ff",
        secondaryText: "#b5b3bC",
        accentText: "#5899ff",
        primaryColor: "#0368ff",
        boxColor: "rgb(66 66 69 / 70%)",
      },
      fontFamily: {
        figtree: ["Figtree"],
      },
      backgroundImage: {
        bgImg: "url('./assets/bgLanding.jpg')",
        gradientColor: "linear-gradient(45deg, #0368ff, #5899ff)",
      },
    },
  },
  plugins: [],
};
