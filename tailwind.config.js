/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: 'hsl(240 10% 3.9%)',
        'card-foreground': 'hsl(0 0% 98%)',
        primary: 'hsl(0 0% 98%)',
        'primary-foreground': 'hsl(240 5.9% 10%)',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      }
    },
  },
  plugins: [],
}