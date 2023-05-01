/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      prompt: ['Prompt', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["garden"]
  }
}
