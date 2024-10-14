export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        interMedium: ["interMedium", "sans-serif"],
        interBold: ["interBold", "sans-serif"],
        interExtraBold: ["interExtraBold", "sans-serif"],
      },
      colors: {
        "white": "#FFF",
        "surella-400": "#36E2DC",
        "surella-500": "#00AAA7",
        "surella-600": "#208481",
        "surella-700": "#165A58",
        "surella-800": "#0D3837",

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