module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        almost: "calc(-4rem + 100vh)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
