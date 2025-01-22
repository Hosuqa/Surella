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
      screens: {
        xs: "450px",
        lg: "1026px",// ipad pro max fix
        wide: "2000px",
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // dodaj wtyczkę
  ],
};