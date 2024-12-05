import type { Config } from "tailwindcss";

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
        'white': '#ffffff',
        'dark-green': '#263c2d',
        'light-green': '#bbccb5',
        'services-BG': '#a4ada5',
      },
      animation: {
        'spin-once': 'spin-once 0.5s linear forwards',
      },
      keyframes: {
        'spin-once': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
