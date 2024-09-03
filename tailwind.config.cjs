/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#1B1B1B",
        mainText: "#FFFFFF",
        secondaryText: "#DAE3EF",
        tertiaryText: "#EEEEEE",
        accentColor: "#62C7FF",
        boxColor: "#202020",
        borderCustom: "rgba(95, 164, 234, 0.5)",
      },
      fontFamily: {
        rubik: ["Rubik"],
        publicsans: ["Public Sans"],
      },
      backgroundImage: {
        bgImg: "url('./assets/bgImage.svg')",
        gradientColor: "linear-gradient(-70deg, #2A6BF2 0%, #2D3794 100%)",
      },
    },
  },
  plugins: [],
};
