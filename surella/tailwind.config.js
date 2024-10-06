export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      colors: {
        "surella-500": "#00AAA7",
        "surella-600": "#208481",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};