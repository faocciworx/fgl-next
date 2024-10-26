/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        general: ['"proxima-nova"', "Helvetica", "Arial", "sans-serif"],
        body: ['"proxima-nova"', "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#FF013D",
        "primary-rgb": "rgb(255, 1, 61)",
      },

      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  variants: {
    extend: {
      padding: ["portrait", "landscape"],
    },
  },
  plugins: [],
};
