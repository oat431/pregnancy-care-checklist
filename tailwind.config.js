import tailwindLineClamp from '@tailwindcss/line-clamp';
import daisyui from 'daisyui';

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
    tailwindLineClamp,
    daisyui
  ],
  daisyui: {
    themes: ["garden"]
  }
}