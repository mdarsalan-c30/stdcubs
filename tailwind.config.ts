import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        batanga: ['Batanga', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
      screens: {
        xlg: "1535px",
        xs: "768px",
      },
    },
  },
  plugins: [],
} satisfies Config;
