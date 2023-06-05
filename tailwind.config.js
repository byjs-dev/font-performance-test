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
        roboto: ["var(--font-roboto-flex)", "sans-serif"],
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
        ".zep-headline-xl-italic": {
          fontFamily: "var(--font-roboto-flex)",
          fontWeight: 1000,
          lineHeight: "36px",
          fontSize: "28px",
          // fontStyle: "italic",
          letterSpacing: "0.0012em",
          textTransform: "uppercase",
          fontStretch: "108%",
          fontFeatureSettings: "'liga' off",
          fontVariationSettings:
            "'GRAD' -200, 'slnt' -10, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 69, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'opsz' 70",
        },
        ".zep-headline-xl-condensed": {
          fontFamily: "var(--font-roboto-flex)",
          fontWeight: 678,
          lineHeight: "36px",
          fontSize: "28px",
          textTransform: "uppercase",
          fontFeatureSettings: "'liga' off",
          fontStretch: "59%",
          fontVariationSettings:
            "'GRAD' 23, 'slnt' 0, 'XTRA' 510, 'XOPQ' 83, 'YOPQ' 79, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'opsz' 51",
        },
      });
    }),
  ],
};
