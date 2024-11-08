/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "purp-gurl": 'url("/images/purpgurl.png")',
      },
    },
  },
  plugins: [],
};
