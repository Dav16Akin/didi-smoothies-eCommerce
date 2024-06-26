/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "1px",
      3: "2px",
      4: "3px",
      6: "4px",
      8: "5px",
    },
  },
  plugins: [],
};
