import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import { useState } from "react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ServiceHero = () => {
  const { service } = useParams();
  const data = servicesData[service];
  const [budget, setBudget] = useState(20000);

  if (!data) return null;

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${data.image})`,
            filter: "blur(6px) brightness(0.45)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/40 via-transparent to-transparent" />
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="
  relative w-9 h-9 rounded-full
  bg-black/70
  border border-white/10
  flex items-center justify-center
  text-gray-400
  transition-all duration-300
  hover:text-white
  hover:border-purple-400
  before:absolute before:inset-0
  before:rounded-full
  before:border before:border-purple-500/30
  before:opacity-0
  hover:before:opacity-100
  before:blur-[2px]
   animate-borderGlow
"
            >
              <Icon size={14} />
            </a>
          ),
        )}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          <div className="flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_12px_#a855f7]" />
              <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">
                {data.tag}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.2]">
              {data.title.split(" ").map((word, i) =>
                i >= 3 ? (
                  <span key={i} className="block">
                    {word}
                  </span>
                ) : (
                  word + " "
                ),
              )}
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed opacity-90">
              {data.description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] bg-black/30 backdrop-blur-md border border-white/20 rounded-[40px] p-8 md:p-12 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-8">
                Have any questions?
              </h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />

                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/20 pr-3">
                    <img
                      src="https://flagcdn.com/w20/ae.png"
                      alt="UAE"
                      className="w-5 h-3 object-cover"
                    />
                    <span className="text-white text-sm">+971</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone No*"
                    className="w-full bg-transparent border border-white/20 rounded-xl pl-24 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-[10px] font-medium text-gray-300 mb-3 uppercase tracking-wider">
                    <span>AED 5K</span>
                    <span className="text-purple-400 font-bold">
                      Budget: {Number(budget).toLocaleString()}
                    </span>
                    <span>AED 50K</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-700 rounded-full">
                    <div
                      className="absolute h-full bg-[#a855f7] rounded-full"
                      style={{ width: `${(budget / 50000) * 100}%` }}
                    />
                    <input
                      type="range"
                      min="5000"
                      max="50000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-purple-600 shadow-lg"
                      style={{
                        left: `calc(${(budget / 50000) * 100}% - 8px)`,
                      }}
                    />
                  </div>
                </div>

                <textarea
                  rows="2"
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none transition-all"
                />

                <button className="w-full bg-gradient-to-r from-[#5a21b3] to-[#a855f7] py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-900/20">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-6 bottom-40 hidden xl:flex flex-col gap-3 z-40">
        {[FaWhatsapp, HiOutlineMail, HiOutlinePhone].map((Icon, idx) => (
          <div
            key={idx}
            className="
  relative w-9 h-9 rounded-full
  bg-black/70
  border border-white/10
  flex items-center justify-center
  text-gray-400
  transition-all duration-300
  hover:text-white
  hover:border-purple-400
  before:absolute before:inset-0
  before:rounded-full
  before:border before:border-purple-500/30
  before:opacity-0
  hover:before:opacity-100
  before:blur-[2px]
   animate-borderGlow
"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>

      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-2">
        <div className="bg-white text-black text-[9px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce tracking-tighter">
          WE ARE HERE!
        </div>
        <div className="w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] cursor-pointer hover:scale-105 transition-transform">
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[10px] text-black font-bold flex items-center justify-center rounded-full">
              1
            </span>
            <FaWhatsapp size={32} color="white" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1/3 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
    </section>
  );
};

export default ServiceHero;
