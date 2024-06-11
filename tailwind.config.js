/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 아래의 항목을 포함하는 것은 필수.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'movieBg1':"url('src/assets/images/MovieContent/movieBackgroundImg.jpg')",
        'moviePoster':"url('src/assets/images/MovieContent/moviePoster1.jpg')",
        'star':"url('src/assets/images/MovieContent/star.svg')",
        'faceBook':"url('src/assets/images/Sns/faceBook.svg')",
        'twitter':"url('src/assets/images/Sns/twitter.svg')",
        'instagram':"url('src/assets/images/Sns/instagram.svg')",
        'blog':"url('src/assets/images/Sns/blog.svg')",
        'bgLogin':"url('src/assets/images/bgLogin.png')",
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