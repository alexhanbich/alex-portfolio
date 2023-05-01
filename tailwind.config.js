module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/2": "3 / 2",
      },
      height: {
        intro: "320px",
      },
      colors: {
        primary: "#dbd4c1",
        secondary: "#b0b0b0",
        accent: "#4682b4",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
