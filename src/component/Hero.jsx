// import React, { useEffect, useState } from "react";

// const Hero = () => {
//   const texts = [
//     "We are Nexa Soft",
//     "We are a Digital Agency",
//     "We build Software Solutions",
//   ];

//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const current = texts[textIndex];
//     let timeout;

//     if (!isDeleting && charIndex < current.length) {
//       timeout = setTimeout(() => {
//         setCurrentText(current.slice(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, 80); // typing speed
//     } 
//     else if (isDeleting && charIndex > 0) {
//       timeout = setTimeout(() => {
//         setCurrentText(current.slice(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//       }, 50); // deleting speed
//     } 
//     else if (!isDeleting && charIndex === current.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 1200); // pause after typing
//     } 
//     else if (isDeleting && charIndex === 0) {
//       setIsDeleting(false);
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, textIndex]);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center scale-105"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')",
//             filter: "brightness(0.4) contrast(1.1)",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-purple-900/20" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 mt-auto pb-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="inline-block py-1 px-4 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
//             Global Creative Agency
//           </span>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             Elevating Brands <br />

//             {/* TYPEWRITER TEXT */}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
//               {currentText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h1>

//           <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
//             We blend cutting-edge strategy with celestial design to help
//             world-class brands dominate their industry.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
//             <button className="bg-white text-black px-10 py-4 rounded-full text-[13px] font-semibold uppercase transition-all duration-300 hover:bg-gray-200">
//               Start a Project
//             </button>

//             <button className="group flex items-center gap-2 text-white text-[13px] font-semibold uppercase hover:text-purple-400 transition">
//               <span>View Case Studies</span>
//               <svg
//                 className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "We are NexaSoft",
    "We are a Digital Agency",
    "We build Software Solutions",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 mt-auto pb-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
            Global Digital Agency
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Elevating Brands <br />
            <span className="text-purple-400">
              {currentText}
              <span className="opacity-70">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            We help businesses design, build, and scale digital products with
            clarity, strategy, and modern technology.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Start a Project
            </button>

            <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition">
              <span>View Case Studies</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
