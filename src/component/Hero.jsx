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
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-purple-500 transition-all">
              Schedule a call
            </button>

            <button className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium text-purple-400 border border-purple-500/40 hover:bg-purple-500/10 hover:text-white transition-all">
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
