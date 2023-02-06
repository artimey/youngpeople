/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "white80": "rgba(255, 255, 255, 0.8)",
        "white50": "rgba(255, 255, 255, 0.5)",
        "white16": "rgba(255, 255, 255, 0.16)",
        "white8": "rgba(255, 255, 255, 0.08)",
        "black": "#1F1F1F",
        "black50": "rgba(31, 31, 31, 0.5)",
        "black80": "rgba(31, 31, 31, 0.8)",
        "black16": "rgba(31, 31, 31, 0.16)",
        "black8": "rgba(31, 31, 31, 0.08)",
        "brandPink": "#E72978",
        "brandBlue": "#332784",
        "brandBlue8": "rgba(51, 39, 132, 0.08)",
        "brandBlue16": "rgba(51, 39, 132, 0.16)",
        "lightBlue": "#493BA8",
        "baseColor": "#322b81",
        "red8": "rgba(218, 69, 69, 0.08)",
        "red16": "rgba(218, 69, 69, 0.16)",
        "errorRed": "#DA4545",
        "successGreen": "#51DA45",
      }
    },
  },
  plugins: [],
}
