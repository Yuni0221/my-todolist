/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBeige: "#FFEFD0",
        White: "#FFFFFF",
        Beige: "#FFF9ED",
        Blue: "#2E64B5",
        Navy: "#00327D",
        Black: "#000000",
      },

      fontFamily: {
        "line-seed-sans-kr": "LINE Seed Sans KR",
      },
      borderRadius: {},
    },
  },
  plugins: [],
};
