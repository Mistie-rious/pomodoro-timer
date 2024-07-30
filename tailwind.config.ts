import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'Spooky': "url('/assets/images/home.png')",
          'Chill': "url('/assets/images/chill.jpeg')",
          'Rainy': "url('/assets/images/rainy-evening.webp')",
          'Arcane': "url('/assets/images/arcane.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        "cuteblue"  : "#697498",
    },
    },
  },

};
export default config;
