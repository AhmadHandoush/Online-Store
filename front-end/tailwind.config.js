/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "3/10": "30%",
        "9/10": "90%",
        "5/10": "50%",
      },
    },
  },
  plugins: [],
};
