import React from 'react';

const TechStack = () => {
 const commonTechStack = [
     {
       name: "TensorFlow Lite",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
       color: "#ff6f00",
     },
     {
       name: "Python",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
       color: "#3776ab",
     },
     {
       name: "AI / Machine Learning",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
       color: "#a855f7",
     },
 
     {
       name: "Node.js",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
       color: "#68a063",
     },
     {
       name: "WebSockets",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
       color: "#ffffff",
     },
 
     {
       name: "React",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       color: "#61dafb",
     },
     {
       name: "Next.js",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
       color: "#ffffff",
     },
     {
       name: "Vite",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
       color: "#a855f7",
     },
     {
       name: "JavaScript",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
       color: "#f7df1e",
     },
 
     {
       name: "React Native",
       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       color: "#61dafb",
     },
 
     {
       name: "Shopify",
       icon: "https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png",
       color: "#95bf47",
     },
     {
       name: "Shopify Liquid",
       icon: "https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png",
       color: "#95bf47",
     },
   ];
  return (
<section className="relative bg-[#050505] py-32 px-8 text-white overflow-hidden font-body w-full">

  {/* TOP DIVIDER (CONSISTENT) */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

  {/* SUBTLE BACKGROUND GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]  blur-[140px] rounded-full" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 px-6 lg:px-20 w-full">

    {/* HEADING */}
    <div className="text-center mb-24 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-headingAlt font-light mb-8 tracking-tight leading-[1.1]">
        Advanced Tech Stack for <br />
        <span className="opacity-80">
          Performance, Scalability & Innovation
        </span>
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-body">
        Our team of experts is well-versed in all types of advanced technologies
        and their right uses, ensuring no compromise on your business growth.
      </p>
    </div>

   {/* TECH SLIDER */}
<div className="relative overflow-hidden">
  <div
    className="
      flex items-center gap-12
      w-[200%]
      animate-techSlider
      hover:[animation-play-state:paused]
    "
  >
    {[...commonTechStack, ...commonTechStack].map((tech, idx) => (
      <div
        key={idx}
        className="group flex flex-col items-center gap-6 flex-shrink-0"
      >
        {/* CARD */}
        <div
          className="
            relative w-36 h-36
            rounded-[2.5rem]
            bg-[#0f0f0f]
            border border-white/10
            flex items-center justify-center
            transition-all duration-500
            hover:-translate-y-3
            hover:border-purple-500/30
          "
          style={{
            boxShadow: `0 0 30px ${tech.color}30`,
          }}
        >
          {/* COLOR GLOW */}
          <div
            className="absolute inset-0 opacity-50 rounded-[2.5rem]"
            style={{
              background: `radial-gradient(circle at 50% 120%, ${tech.color}90 0%, transparent 70%)`,
            }}
          />

          <img
            src={tech.icon}
            alt={tech.name}
            className="
              w-14 h-14 object-contain z-10
              opacity-80
              transition-all duration-500
              group-hover:opacity-100
              group-hover:scale-110
            "
          />

          {/* GLASS */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem]" />
        </div>

        {/* LABEL */}
        <span className="text-sm md:text-base font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
          {tech.name}
        </span>
      </div>
    ))}
  </div>

  {/* EDGE FADES */}
  <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-20" />
  <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20" />
</div>

  </div>
</section>


  );
};

export default TechStack;