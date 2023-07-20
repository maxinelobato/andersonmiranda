/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  tailwindConfig: './styles/tailwind.config.js',
  theme: {
    extend: {
      backgroundImage: {
        'bg1':"url('/anderson2.png')",
        'bg2':"url('/anderson.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}
