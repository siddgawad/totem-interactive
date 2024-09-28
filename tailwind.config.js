/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#B8ED0B",
      },
      keyframes: {
        diagonal: {
          "0%": { transform: "translate(-100%, -100%)" },
          "100%": { transform: "translate(100%, 100%)" },
        },
        diagonalScroll: {
          "0%": { transform: "translateX(-100%) translateY(100%)" },
          "100%": { transform: "translateX(100%) translateY(-100%)" },
        },
      },
      animation: {
        diagonal: "diagonal 5s linear infinite",
        "diagonal-marquee": "diagonalScroll 20s linear infinite",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        fordsFolly: ["FordsFolly", "sans-serif"],
        exo2: ["Exo2", "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        amenti: ["Amenti", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Define shadow-card here
      },
      scrollbar: {
        DEFAULT: {
          width: "8px",
          borderRadius: "4px",
          trackColor: "rgba(255, 255, 255, 0.1)",
          thumbColor: "#0388A7",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"), // Option for hiding the scrollbar
  ],
};
