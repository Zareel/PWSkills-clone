/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        buttonBlue: "#5a4bda",
        footerDark: "#1b2124",
      },
      screens: {
        xs: "320px",
        sm: "500px",
        md: "768px",
        lg: "960px",
        xl: "1024px",
        xxl: "1280px",
      },
      boxShadow: {
        dropDownShadow: "0 0 10px 1px rgba(230, 230, 230,1)",
        inputShadow: "0 0 3px 2px rgba(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
};
