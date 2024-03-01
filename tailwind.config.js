
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  variants: {
    extend: {
      border: ['focus'], // Enable focus variants for border
    },
  },
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
        darkChocolate:'#28170bff',
        maroon:'#800000',
        burlywood:'#DEB887',
        orangeRed:'#FF4500',
        lightOrange:'#FF5733',
        mushroom:'#aa4400',
        warning:'#ed6c02'

      },


        container: {
          padding: {
            DEFAULT: '1rem', 
            sm: '1.5rem',   
            md: '2rem',     
          },
        },
    },
  },
    
    plugins: [],
    // require('@tailwindcss/forms'),
};
export default config;
