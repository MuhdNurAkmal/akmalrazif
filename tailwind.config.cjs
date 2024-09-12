/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#0F1525",
        primaryText: "#FFFFFF",
        secondaryText: "rgba(255, 255, 255, 0.9)",
        tertiaryText: "rgba(255, 255, 255, 0.75)",
        accentColor: "#62C7FF",
        boxColor: "#060C1D",
        borderCustom: "rgba(95, 164, 234, 0.5)",
      },
      fontFamily: {
        rubik: ["Rubik"],
        publicsans: ["Public Sans"],
      },
      backgroundImage: {
        bgImg: "url('./assets/bgImage.svg')",
        gradientBtn: "linear-gradient(-70deg, #2A6BF2 0%, #2D3794 100%)",
        gradientColor: "linear-gradient(83deg, #00a3ff 22%, #00fff0 100%)",
      },
    },
  },
  plugins: [],
};
