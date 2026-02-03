import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "We are NexaSoft",
    "We are a Digital Agency",
    "We Build Software Solutions",
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
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/0725/3091/9640/files/group-young-business-people-working-office.jpg?v=1770096033')",
            filter: "brightness(0.35)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center mt-24">
        {/* Badge */}
        <span
          className="
          inline-block mb-6 px-5 py-2 rounded-full
          border border-purple-500/30
          bg-purple-500/10
          text-purple-400 text-sm font-heading
        "
        >
          Global Digital Agency
        </span>

        {/* Heading */}
        <h1
          className="
          font-brand text-white
          text-4xl md:text-6xl lg:text-7xl
          leading-tight mb-6
        "
        >
          Elevating Brands
          <br />
          <span
            className="
    font-heading
    bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500
    bg-clip-text text-transparent
    whitespace-nowrap
    inline-block
  "
          >
            {currentText}
            <span className="opacity-60">|</span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="
          font-body text-gray-400
          text-base md:text-lg
          max-w-2xl mx-auto mb-10
        "
        >
          We help businesses design, build, and scale digital products with
          clarity, strategy, and modern technology.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button className="text-white hidden md:inline-flex font-heading bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1] px-8 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition active:scale-95">
            Schedule a Call
          </button>

          {/* Secondary CTA */}
          <button
            className="
              font-heading text-sm font-medium
              px-8 py-3 rounded-full
              text-purple-400
              border border-purple-500/40
              hover:bg-purple-500/10
              transition-all
              hover:shadow-[0_0_25px_#a855f7]
              
              flex items-center gap-2 justify-center
            "
          >
            View Case Studies
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
        <div className="relative bg-gray-100">
              <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
                <button
                  className="font-sans    bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group"
                >
                  <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
                    Get A Quote!
                  </span>
                </button>
              </div>
      
            </div>
    </section>
  );
};

export default Hero;
