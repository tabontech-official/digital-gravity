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
    <section className="bg-[#08080a] py-24 text-white relative overflow-hidden font-sans">
      
      {/* 1. The Dynamic Background from your image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight max-w-5xl mx-auto leading-[1.1]">
            Advanced Tech Stack for <br />
            <span className="text-white/90">Performance, Scalability & Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our team of experts is well-versed in all types of advanced technologies and their right uses, 
            ensuring no compromise on your business growth.
          </p>
        </div>

        <div className="relative group">
          <div className="flex items-center gap-10 animate-techSlider hover:[animation-play-state:paused]">
            {[...commonTechStack, ...commonTechStack].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 shrink-0">
                
             
                <div
                  className="relative w-36 h-36 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center transition-all duration-500 hover:-translate-y-4 group/card overflow-hidden backdrop-blur-sm"
                >
                  <div 
                    className="absolute inset-0 opacity-60 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${tech.color}80 0%, transparent 70%)`
                    }}
                  />

                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14 object-contain z-10 transition-all duration-500 group-hover/card:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>

                <span className="text-sm md:text-base font-light tracking-wide text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#08080a] via-[#08080a]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#08080a] via-[#08080a]/80 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;