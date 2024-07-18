/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#606c38",
        secondary: "#283618",
        tertiary: "#fefae0",
        orange: "#dda15e",
        horange: "#bc6c25",
        base: "#e7e7e7",
      },
    },
  },
  plugins: [],
};
