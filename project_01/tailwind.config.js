/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily :
    {
      'space': ['"Space Grotesk"']
    },
    extend: {
      fontSize: {
        sm: ['0.85rem','2.25rem'],
        new: ['1.25rem','2.25rem'],
      },
      margin :{
        '18':'72px'
      }
      
    },
  },
  plugins: [],
}
