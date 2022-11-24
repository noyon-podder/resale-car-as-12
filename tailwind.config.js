/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#db2d2e",
        
"secondary": "#777777",
        
"accent": "#484848",
        
"neutral": "#323232",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#ff5a5f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],}
