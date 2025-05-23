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
        'beige': '#dcded5',
        'blog-BG': '#121e15',
        'light-green-blog': '#49724b',
        'light-beige': '#f8f8f6',
        'verderaiz-green': '#546357',
        'official-mexican-standards':'#e4e9e1',
        'workshops-green': '#e4e9e1',
      },
      animation: {
        'spin-once': 'spin-once 0.5s linear forwards',
        slideInUp: 'slideInUp 0.5s ease-out forwards',
      },
      keyframes: {
        'spin-once': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) translateX(0)',
          },
        },
      },
      fontFamily: {
        titles: ['MODULAR-14', 'sans-serif'], // Usa 'custom' como referencia
        cambay: ['Cambay-Regular'],
        zendots: ['ZenDots-Regular'],
        montserrat: ['Montserrat-Regular'],
      },
    },
  },
  plugins: [],
} satisfies Config;
