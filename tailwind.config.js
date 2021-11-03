module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGreen: {
          one: "#EAE4E9",
          two: "#FFF1E6",
          three: "#FDE2E4",
          four: "#FAD2E1",
          five: "#FFFFFF",
          six: "#BEE1E6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
