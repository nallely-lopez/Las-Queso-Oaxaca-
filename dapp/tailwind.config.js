/*module.exports = {
  content: [
    "./src/**//**.{js,ts,jsx,tsx}",
 // ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}*/

/* @type {import('tailwindcss').Config} */
//module.exports = {
  //content: //[
    //'./src/app/**/*.{ts,tsx}',
    //'./src/components/**/*.{ts,tsx}',
 // ],
 // theme:// {
 //   extend:// {},
 // },
  //plugins: [],
//}

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}