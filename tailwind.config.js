/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}",
   "./src/components/**/*.{js,jsx,ts,tsx}",
   "./src/screens/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      epilogue400: ["Epilogue-Regular"],
      epilogue500: ["Epilogue-Medium"],
      epilogue600: ["Epilogue-SemiBold"],
      epilogue700: ["Epilogue-Bold"],
    },
    extend: {
     backgroundColor:{
      screen:'#111',
      button:'#222222'
    }
    },
  },
  plugins: [],
}

