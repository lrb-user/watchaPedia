/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 아래의 항목을 포함하는 것은 필수.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'movieBg1':"url('/watchaPedia/assets/images/MovieContent/movieBackgroundImg.jpg')",
        'moviePoster':"url('images/MovieContent/moviePoster1.jpg')",
        'star':"url('images/MovieContent/star.svg')",
        'faceBook':"url('images/Sns/faceBook.svg')",
        'twitter':"url('images/Sns/twitter.svg')",
        'instagram':"url('images/Sns/instagram.svg')",
        'blog':"url('images/Sns/blog.svg')",
        'bgLogin':"url('images/bgLogin.png')",
      },
      colors: {
        'primary':'#ff2f6e',
        'black2e':'#2e2f31',
        'gray84':'#84868d'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}