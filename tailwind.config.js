/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "black-light": "#111",
        "white": "#fff",
        "off-white": "#fbf8f3",
        "gray": "#707070",
        "medium-gray": "#636363",
        "gray-light": "#63636366",
        "silver-gray": "#d9d9d9",
        "bright-blue": "#1da1f2",
        "deep-blue": "#1f7898",
        "cobalt-blue": "#3180f5",
        "light-cyan": "#d7f5f5",
        "bright-orange": "#ffad23",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
