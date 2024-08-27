/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maxGradient: "#00172d",
        minGradient: "#02386e",
        mainText: "#FFF",
      },
    },
  },
  plugins: [],
};
