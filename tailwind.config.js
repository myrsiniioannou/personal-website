/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/projects/**/*.{js,ts,jsx,tsx,mdx}',
    './public/portfolio/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
    
  ],
  theme: {
    colors: {
      "neon": '#39FF14'
    }
  },
  plugins: [require('tailwindcss/plugin'),
            require("tw-elements/dist/plugin.cjs"),
            require('flowbite/plugin')
          ]
}
