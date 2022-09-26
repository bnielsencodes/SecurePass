/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-grey": "#24232c",
        "medium-grey": "#817d92",
        "off-white": "#e6e5ea",
        "off-black": "#18171f",
        "custom-green": "#a4ffaf",
        "custom-red": "#f64a4a",
        "custom-orange": "#fb7c58",
        "custom-yellow": "#f8cd65",
      },
      colors: {
        "dark-grey": "#24232c",
        "medium-grey": "#817d92",
        "off-white": "#e6e5ea",
        "custom-green": "#a4ffaf",
        "custom-red": "#f64a4a",
        "custom-orange": "#fb7c58",
        "custom-yellow": "#f8cd65",
      },
      fontFamily: {
        jetBrains: ["jetBrains", "sans-serif"],
        jetBrainsItalic: ["jetBrainsItalic", "sans-serif"],
      },
      fontSize: {
        body: "18px",
        "heading-md": "24px",
        "heading-lg": "32px",
      },
      lineHeight: {
        body: "23px",
        "heading-md": "31px",
        "heading-lg": "43px",
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
