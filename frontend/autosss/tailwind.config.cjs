// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         brightRed: 'hsl(12, 88%, 59%)',
//         brightRedLight: 'hsl(12, 88%, 69%)',
//         brightRedSupLight: 'hsl(12, 88%, 95%)',
//         darkBlue: 'hsl(228, 39%, 23%)',
//         darkGrayishBlue: 'hsl(227, 12%, 61%)',
//         veryDarkBlue: 'hsl(233, 12%, 13%)',
//         veryPaleRed: 'hsl(13, 100%, 96%)',
//         veryLightGray: 'hsl(0, 0%, 98%)'
//       }
//     }
//   },
//   plugins: []
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],
theme: {
    extend: {},
},
darkMode: "class",
plugins: [require("tw-elements-react/dist/plugin.cjs")]
}