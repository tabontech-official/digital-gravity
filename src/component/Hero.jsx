import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const texts = [
    "We are NexaSoft",
    "We are a Digital Agency",
    "We Build Software Solutions",
  ];

  const navigate = useNavigate();

  // Typing effect
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCTA = () => {
    navigate("/contact");
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  px-6">
      
      {/* ---- BACKGROUND BLOBS ---- */}
      

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 max-w-5xl text-center">

        {/* BADGE – FIXED VISIBILITY */}
        <span
          className="
            inline-flex items-center gap-2 mb-10 px-7 py-2.5 rounded-full
            bg-white/80 backdrop-blur-md
            border border-purple-300/40
            text-purple-800 text-xs sm:text-sm
            font-semibold tracking-[0.25em] uppercase
            shadow-[0_6px_20px_rgba(109,40,217,0.15)]
          "
        >
          Global Digital Agency
        </span>

        {/* HEADING */}
        <h1 className="font-brand text-slate-950 leading-tight mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
          <span className="block text-[clamp(2.6rem,7vw,5.2rem)] font-light tracking-tight">
            Elevating Brands
          </span>

          <span
            className="
              mt-4 block font-heading
              bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700
              bg-clip-text text-transparent
              text-[clamp(1.6rem,5vw,3.6rem)]
              min-h-[1.6em]
              flex justify-center items-center font-bold
              drop-shadow-[0_3px_12px_rgba(99,102,241,0.35)]
            "
          >
            {currentText}
            <span className="ml-1 text-purple-800 font-bold animate-pulse drop-shadow">
              |
            </span>
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="font-body text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed drop-shadow-sm">
          We help businesses design, build, and scale digital products with
          <span className="text-purple-800 font-semibold italic">
            {" "}strategic clarity
          </span>{" "}
          and
          <span className="text-slate-900 font-semibold">
            {" "}modern technology.
          </span>
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  
  {/* PRIMARY GLASS CTA */}
  <button
    onClick={handleCTA}
    className="
      group relative
      px-10 py-4 rounded-2xl

      bg-white/60
      border border-white
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]

      text-slate-900 font-heading font-semibold text-sm
      transition-all duration-300

      hover:bg-white/75
      hover:shadow-[0_8px_40px_rgba(109,40,217,0.25)]
      hover:text-purple-700
      active:scale-95
    "
    style={{
      backdropFilter: "blur(11.4px)",
      WebkitBackdropFilter: "blur(11.4px)",
    }}
  >
    Schedule a Call
  </button>

  {/* SECONDARY GLASS CTA */}
  <button
    onClick={() => navigate("/case-studies")}
    className="
      group relative
      px-10 py-4 rounded-2xl

      bg-white/50
      border border-white
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]

      text-slate-800 font-heading font-medium text-sm
      transition-all duration-300

      hover:bg-white/70
      hover:text-slate-900
      hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
      active:scale-95

      flex items-center gap-3
    "
    style={{
      backdropFilter: "blur(11.4px)",
      WebkitBackdropFilter: "blur(11.4px)",
    }}
  >
    View Case Studies
    <svg
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
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
    </section>
  );
};

export default Hero;
