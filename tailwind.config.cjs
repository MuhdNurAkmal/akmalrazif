/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#0f0f10",
        mainText: "#e7e7e4",
        secondaryText: "#60a5fa",
      },
    },
  },
  plugins: [],
};
