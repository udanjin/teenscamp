/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#434343",
        secondary: "#F9ECBC",
        "grey-100": "#c0c5ce",
        "grey-200": "a7adba",
        "grey-300": "65737e",
        "grey-400": "#4f5b66",
        "grey-500": "#343d46",
        
      },
      fontFamily: {
        body: ["Aboro"],
        head:["Polyface"],
        sub:["Alice"],
        man:["Manrope"]
      },
      gradientColorStops: (theme) => ({
        start: "#D5D5D5",
        end: "#333132",
      }),
      backgroundImage: (theme) => ({
        "gradient-bg": "linear-gradient(to bottom right,#ABAAAF 0%, #09161A 100%)",
      }),
      content:{
        banner:"url('./assets/banner.jpg')"
      },
      screens:{
        xs: "360px",
        md: "768px",
        lg:"1024px"
      }
    },
  },
  plugins: [],
};
