import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colorRed: '#ff0000',
        sandyBrown:	'#F4A460',
        chocolate: '#D2691E',
        tan:'#28170bff',
        maroon:'#800000',
        burlywood:'#DEB887'
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
