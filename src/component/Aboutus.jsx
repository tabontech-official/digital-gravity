import React from "react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaVolumeMute,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const AboutUs = () => {
  const logos = [
    "https://www.digitalgravity.ae/assets/svg/home/client-3.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-4.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-5.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white font-primary">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1024271179?background=1&autoplay=1&loop=1&muted=1&autopause=0"
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-12 pt-[220px] pb-40">
        <div className="flex items-center gap-3 mb-10 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span>Our Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-28 items-start">
          <h1 className="text-[56px] leading-[1.15] font-semibold tracking-tight max-w-[620px]">
            From Dubai’s #1 Tech
            <br />
            Nerds to a Global
            <br />
            Force
          </h1>

          <div className="max-w-[520px] text-[15px] leading-[1.9] text-gray-200 space-y-6">
            <p>
              With{" "}
              <strong className="text-white">10+ years of experience</strong>,{" "}
              <strong className="text-white">500+ prestigious clients</strong>,{" "}
              <strong className="text-white">50+ expert developers</strong>, and
              a <strong className="text-white">200+ strong team</strong>,
              Digital Gravity stands Dubai’s No.1 digital transformation and
              marketing agency.
            </p>

            <p>
              We deliver efficient web, mobile, and marketing solutions powered
              by innovative AI and emerging tech like AR, VR, and Blockchain.
            </p>

            <p>
              After marking our footprints in Dubai, we’re now expanding
              globally across the{" "}
              <span className="bg-purple-600/30 px-2 py-0.5 rounded text-purple-300 font-medium">
                USA
              </span>{" "}
              and{" "}
              <span className="bg-purple-600/30 px-2 py-0.5 rounded text-purple-300 font-medium">
                MENA region
              </span>{" "}
              — empowering global brands to evolve, scale, and lead in the
              digital age.
            </p>
          </div>
        </div>

        <div className="relative mt-40 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full  bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full  bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-20 opacity-60 hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-10 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="animate-borderGlow w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
            >
              <Icon size={14} />
            </a>
          )
        )}
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#8b2cf5] hover:bg-[#7c1df0] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group">
          <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-bold tracking-[0.2em] uppercase">
            Get A Quote!
          </span>
        </button>
      </div>

      <div className="fixed right-6 bottom-32 hidden xl:flex flex-col gap-3 z-40">
        {[FaWhatsapp, HiOutlineMail, HiOutlinePhone].map((Icon, idx) => (
          <div
            key={idx}
            className="animate-borderGlow w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-purple-600 transition-colors"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
