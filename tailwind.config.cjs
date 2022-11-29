/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#656C7E",
        decreaseRed: "#EA3943",
        increaseGreen: "#16C784",
      },
      boxShadow: {
        carCard:
          "0px 1.4773707389831543px 17.72844696044922px 4.432111740112305px rgba(208, 214, 227, 0.3)",
      },
      backgroundColor: {
        pillBg: "#EFF2F5",
      },
    },
  },
  plugins: [],
};
