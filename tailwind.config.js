const colors = require("tailwindcss/colors");
const primary = {};
// const secondary = {};

[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((n) => {
  primary[n] = `var(--color-primary-${n})`;
  // secondary[n] = `var(--color-secondary-${n})`;
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./patterns/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@startupsquare/ds/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "2xs": ["10px", "10px"],
      },
      colors: {
        primary,
        gray: colors.slate,
        "blue-gray": colors.slate,
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(100px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-right": {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "jump-in": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
        "jump-out": {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-right": "fade-right 0.5s ease-out",
        "jump-in": "jump-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.3s",
        "fade-down": "fade-down 0.5s ease-out",
        "fade-left": "fade-left 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1)",
        fade: "fade 0.5s ease-in-out forwards",
        "jump-out": "jump-out 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};