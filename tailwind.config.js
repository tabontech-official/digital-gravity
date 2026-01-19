/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
extend: {
  animation: {
    marquee: "marquee 25s linear infinite",
      marqueeLeft: "marqueeLeft 35s linear infinite",
    marqueeRight: "marqueeRight 40s linear infinite",
            fadeUp: "fadeUp 0.6s ease-out",

  },
  keyframes: {
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
  },
},
  },
  plugins: [],
}
