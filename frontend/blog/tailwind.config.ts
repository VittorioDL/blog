import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        atlas: ['var(--font-atlas)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        linkedin: '#0a66c2',
        facebook: '#1877f2',
        twitter: '#1da1f2',
        whatsapp: '#25d366'
      },
    },
  },
  plugins: [],
};
export default config;
