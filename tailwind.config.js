/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Jost", "sans-serif"],
        headingAlt: ["Poltawski Nowy", "serif"],
      },
      
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeLeft: "marqueeLeft 35s linear infinite",
        marqueeRight: "marqueeRight 40s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out",
        borderGlow: "borderGlow 3s ease-in-out infinite",
    techSlider: "techSlider 30s linear infinite",

        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
        },
      },
      keyframes: {
         techSlider: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow: "0 0 2px rgba(168,85,247,0.2)",
          },
          "50%": {
            boxShadow: "0 0 12px rgba(168,85,247,0.7)",
          },
        },
      },
    },
  },
  plugins: [],
};
