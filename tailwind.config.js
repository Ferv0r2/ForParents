const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        window: "url('../../public/images/window.png')",
      },
      colors: {
        main: "#FCFCFB",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      minHeight: {
        "1/2": "50%",
        halfScreen: "70vh",
      },
      animation: {
        right: "fadeRight 2.5s",
        show: "modalShow 0.3s",
        close: "modalClose 0.3s",
        showInfinity: "modalShow 1s infinite alternate",
        showDisplay: "itemShow 0.5s",
      },
      keyframes: {
        fadeRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(6rem)" },
        },
        modalShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        modalClose: {
          from: { opacity: 1 },
          to: { opacity: 2 },
        },
        itemShow: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animationDelay: {
        1000: "1000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    animationFillMode: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
};
