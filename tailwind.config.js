/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#1B9AF5", // Your custom blue color
      },
      fontFamily: {
        custom: ["primaryH", "serif"], // Use this in Tailwind classes
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        slideFromRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1,  transform: 'translateX(0)' },
        },
        slideFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px) scaleX(-1)' },
          '100%': { opacity: 1, transform: 'translateX(0) scaleX(-1)' },  
        },
        slideFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideFromRight: 'slideFromRight 1s ease-out forwards',
        slideFromLeft: 'slideFromLeft 1s ease-out forwards',
        slideFromBottom: 'slideFromBottom 1s ease-out forwards',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

