module.exports = {
  content: [
    "index.html",
    "./pages/*.html"
  ],
  theme: {
    extend: {
      colors: {
          "primary": {
            "50": "#5376cb",
            "100": "#496cc1",
            "200": "#3f62b7",
            "300": "#3558ad",
            "400": "#2b4ea3",
            "500": "#214499",
            "600": "#173a8f",
            "700": "#0d3085",
            "800": "#03267b",
            "900": "#001c71"
          },
          "success": {
            "50": "#8ce881",
            "100": "#82de77",
            "200": "#78d46d",
            "300": "#6eca63",
            "400": "#64c059",
            "500": "#5ab64f",
            "600": "#50ac45",
            "700": "#46a23b",
            "800": "#3c9831",
            "900": "#328e27"
          },
          "danger": {
            "50": "#ff575d",
            "100": "#ff4d53",
            "200": "#ff4349",
            "300": "#ff393f",
            "400": "#f52f35",
            "500": "#eb252b",
            "600": "#e11b21",
            "700": "#d71117",
            "800": "#cd070d",
            "900": "#c30003"
          }
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};