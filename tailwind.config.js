/** @type {import('tailwindcss').Config} */
export const mode = "jit";
export const darkMode = "class";
export const content = ["./**/*.tsx"];
export const theme = {
  container: {
    center: true,
    padding: "1.5rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["InterVariable", "Inter", ...require("tailwindcss/defaultTheme").fontFamily.sans],
    },
  },
};
export const plugins = [];
