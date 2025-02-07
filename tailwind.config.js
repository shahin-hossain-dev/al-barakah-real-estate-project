/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: "Exo, sans-serif",
        openSans: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
