/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "black-light": "#111",
        "bright-blue": "#1da1f2",
        "cobalt-blue": "#3180f5",
        "medium-gray": "#737373",
        "deep-blue": "#1f7898",
        "off-white": "#fbf8f3",
        white: "#fff",
        "gray-light": "#63636366",
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
