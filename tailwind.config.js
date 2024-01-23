/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      custom: { max: "992px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  extend: {},

  plugins: [require("daisyui")],
};
