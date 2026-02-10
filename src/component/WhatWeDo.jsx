import React from "react";

const logos = [
  "https://www.digitalgravity.ae/assets/svg/home/client-3.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-4.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-5.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
  "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
];

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden py-32 font-body">
      
      {/* BACKGROUND BLOBS */}
    

      <div className="relative container mx-auto px-6">

        {/* LABEL */}
        <div className="flex justify-center mb-6">
          <span
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-white/70 backdrop-blur-md
              border border-purple-300/40
              text-purple-800 text-xs sm:text-sm
              font-heading font-semibold tracking-widest uppercase
              shadow-sm
            "
          >
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            What We Do
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-6xl font-headingAlt font-light leading-tight max-w-4xl mx-auto mb-20 text-slate-900">
          Fueled Up <span className="font-semibold">500+</span> Brands to <br />
          Roar with{" "}
          <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 bg-clip-text text-transparent font-semibold">
            Next-Gen Tech
          </span>
        </h2>

        {/* PLANET (GLASS CONTAINER) */}
      

        {/* LOGO SLIDER */}
     

        {/* GLOBAL PRESENCE – GLASS PILL */}
        <div className="flex justify-center px-4">
          <div
            className="
              flex flex-col sm:flex-row flex-wrap
              items-center justify-center
              gap-3 sm:gap-4 lg:gap-6
              px-6 sm:px-8 py-4
              rounded-2xl sm:rounded-full
              bg-white/60 backdrop-blur-xl
              border border-white
              shadow-[0_10px_30px_rgba(0,0,0,0.1)]
              text-xs sm:text-sm
            "
          >
            <span className="font-heading font-semibold text-slate-900 whitespace-nowrap">
              Our Global Presence
            </span>

            <span className="hidden sm:block w-px h-5 bg-slate-300/50" />

            {["USA", "UAE", "Saudi Arabia", "Pakistan"].map((country) => (
              <span
                key={country}
                className="flex items-center gap-2 text-slate-700 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
