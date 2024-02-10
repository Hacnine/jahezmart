import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'min-md':'950px',
      'lg': '1024px',
      'xl': '1280px', 
    },
    extend: {
      backgroundImage: {
       
      },
      colors: {
        colorRed: '#ff0000',
        sandyBrown:	'#FF5733',
        chocolate: '#FF4500',
        tan:'#28170bff',
        maroon:'#800000',
        burlywood:'#DEB887',
        orangeRed:'#FF4500',
        lightOrange:'#FF5733',
        mushroom:'#aa4400',

      },


        container: {
          padding: {
            DEFAULT: '1rem', // Default padding for the container
            sm: '1.5rem',   // Small screen padding
            md: '3rem',     // Medium screen padding
          },
        },
    },
  },
  plugins: [],
};
export default config;
