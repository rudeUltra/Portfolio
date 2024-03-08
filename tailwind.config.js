/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
    }, // Added a comma here
  },
  plugins: [],
};
