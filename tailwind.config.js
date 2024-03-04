/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        jockey: ["Jockey One", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625em", // 10px
        xs: "0.75em", // 12px
        sm: "0.875em", // 14px
        md: "1em", // 16px
        lg: "1.125em", // 18px
        xl: "1.5em", // 24px
        "2xl": "2em", // 28px
        "2.5xl": "2.75em",
        "3xl": "3em", // 48px
        "4xl": "3.75em",
        "error-header": "5em", // 80px
        "error-code": "6.25em", // 100px
      },
      padding: {
        default: "2rem",
        medium: "2.5rem",
        "large-x": "3rem",
        "large-y": "5rem",
      },
    },
  },
  plugins: [],
  important: true,
};
