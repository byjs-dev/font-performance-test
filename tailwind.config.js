/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: [
          "var(--font-roboto-flex)",
          "sans-serif",
          {
            fontStretch: 108,
            fontFeatureSettings: '"liga" off',
            fontVariationSettings:
              "'GRAD' -200, 'slnt' -10, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 69, 'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'opsz' 70",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
