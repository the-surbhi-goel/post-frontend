/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
      extend: {
        screens: {
          laptop: { min: "340px", max: "1280px" },
        },
        colors: {
          darkbg: "#000"
        }
      },
    },
    plugins: [],
  };
  