/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#1D4ED8', // Tailwind's blue
        secondary: '#9333EA', // Tailwind's purple
      },
      spacing: {
        // Custom spacing values
        '128': '32rem', // Equivalent to 512px
        '144': '36rem', // Equivalent to 576px
      },
      fontFamily: {
        // Custom fonts
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        // Custom breakpoints
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Add more extensions here like borders, boxShadow, etc.
    },
  },
  plugins: [],
}
