/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary:'#134B70',
        secondary:'#38419D',
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

