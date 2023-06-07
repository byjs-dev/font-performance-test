/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        roboto_condensed: ["var(--font-roboto-condensed)", "sans-serif"],
        roboto_flex: ["var(--font-roboto-flex)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // roboto flex
        ".zep-headline-xl-italic-roboto-flex": {
          fontFamily: "var(--font-roboto-flex)",
          fontWeight: 1000,
          lineHeight: "36px",
          fontSize: "28px",
          letterSpacing: "0.0012em",
          textTransform: "uppercase",
          fontStretch: "108%",
          fontFeatureSettings: "'liga' off",
          fontVariationSettings:
            "'GRAD' -200, 'slnt' -10, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 69, 'opsz' 70",
        },
        ".zep-headline-xl-condensed-roboto-flex": {
          fontFamily: "var(--font-roboto-flex)",
          fontWeight: 678,
          lineHeight: "36px",
          fontSize: "28px",
          textTransform: "uppercase",
          fontFeatureSettings: "'liga' off",
          fontStretch: "59%",
          fontVariationSettings:
            "'GRAD' 23, 'slnt' 0, 'XTRA' 510, 'XOPQ' 83, 'YOPQ' 79, 'opsz' 51",
        },

        // roboto
        ".zep-headline-xl-italic-roboto": {
          fontFamily: "var(--font-roboto)",
          fontWeight: 900,
          lineHeight: "36px",
          fontSize: "28px",
          letterSpacing: "0.0012em",
          textTransform: "uppercase",
          fontStyle: "italic",
        },
        ".zep-headline-xl-condensed-roboto": {
          fontFamily: "var(--font-roboto-condensed)",
          fontWeight: 700,
          lineHeight: "36px",
          fontSize: "28px",
          textTransform: "uppercase",
        },
      });
    }),
  ],
};
