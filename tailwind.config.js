/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#222222",

          secondary: "#facc15",

          accent: "#fef9c3",

          neutral: "#f3f4f6",

          "base-100": "#d1d5db",

          info: "#38bdf8",

          success: "#4ade80",

          warning: "#fdba74",

          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
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
      keyframes: {
        wiggle: {
          "0%": {
            transform: "scale(1) rotate(0deg)",
          },
          "25%": {
            transform: "scale(1.025) rotate(-5deg)",
          },
          "50%": {
            transform: "scale(1.025) rotate(5deg)",
          },
          "75%": {
            transform: "scale(1.025) rotate(-5deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1500ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        jockey: ["Jockey One", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625em",
        // 10px
        xs: "0.75em",
        // 12px
        sm: "0.875em",
        // 14px
        md: "1em",
        // 16px
        lg: "1.125em",
        // 18px
        xl: "1.5em",
        // 24px
        "2xl": "2em",
        // 28px
        "2.5xl": "2.75em",
        "3xl": "3em",
        // 48px
        "4xl": "3.75em",
        giant: "5em",
        giga: "10em",
        "error-header": "5em",
        // 80px
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
  important: true,
};
