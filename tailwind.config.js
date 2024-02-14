module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0px 30px 0px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        transparent: "transparent",
        studiumBlue: "#010B65",
        studiumBlueKing: "#002366",
        studiumBlueLight: "#81a1ff",
        studiumBlueLight1: "#4169E1",
        studiumBluePantone: "#3D428B",
        studiumBlueQueen: "#436B95",
        studiumBlueImperial: "#005A92",
        studiumDarkGray: "#555",
        colorPrimary: "#010B65",
        colorSecondary: "#64D5FF",
        colorTertiary: "#778bfc",
        colorText: "#010B65",
        colorAcent: "#F6F9FC",
        colorGlobal: "#8B7BF9",
      },
      fontFamily: {
        display: ["new-spirit", "sans-serif"],
      },
      spacing: {
        header: "4rem",
      },
      animation: {
        "breathe-1": "breathe-1 12s ease-in-out infinite",
        "breathe-2": "breathe-2 16s ease-in-out infinite",
        "breathe-3": "breathe-3 20s ease-in-out infinite",
      },
      keyframes: {
        "breathe-1": {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg) scale(1.1)",
          },
          "33%": {
            transform: "translate3d(20px, 40px, 0px) rotate(6deg) scale(0.9)",
          },
          "66%": {
            transform: "translate3d(-40px, 20px, 0px) rotate(12deg) scale(1)",
          },
        },
        "breathe-2": {
          "0%, 100%": {
            transform: "translate3d(-40px, 40px, 0px) rotate(12deg) scale(1.1)",
          },
          "33%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg) scale(0.8)",
          },
          "66%": {
            transform: "translate3d(-20px, 20px, 0px) rotate(6deg) scale(1)",
          },
        },
        "breathe-3": {
          "0%, 100%": {
            transform: "translate3d(-30px, -30px, 0px) rotate(56deg) scaleX(1)",
          },
          "33%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg) scaleX(1.2)",
          },
          "66%": {
            transform:
              "translate3d(-20px, 20px, 0px) rotate(62deg) scaleX(0.8)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
