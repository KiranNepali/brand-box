import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#BFBFBF",
          300: "#999999",
          400: "#4D4D4D",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#0766A5",
          50: "#6BC0F9",
          100: "#57B8F8",
          200: "#30A7F6",
          300: "#0A96F3",
          400: "#097ECC",
          500: "#0766A5",
          600: "#05456F",
          700: "#022339",
          800: "#000204",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
