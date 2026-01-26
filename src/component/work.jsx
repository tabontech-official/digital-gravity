import React, { useState } from "react";
import { servicesData } from "../data/workData";
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
const Work = () => {
  const TOP_CATEGORIES = [
    "All",
    "Software",
    "E-commerce",
    "Shopify Core",
    "AI & Data",
    "Branding",
  ];

  const [active, setActive] = useState("All");
  const filteredProjects =
    active === "All"
      ? servicesData
      : servicesData.filter((p) => p.tag === active);

  return (
<section className="relative bg-[#050505] text-white py-24 overflow-hidden min-h-screen font-sans">
      {/* SHINING GRID BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: "45px 45px",
          }}
        ></div>
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
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gridShimmer {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
        .animate-grid-shimmer {
          animation: gridShimmer 12s infinite linear;
        }
        /* HIDE SCROLLBAR UTILITY */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `,
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] animate-pulse"></span>
              <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Projects We’ve Built
            </h2>
          </div>
          <button className="mt-8 lg:mt-0 px-8 py-3 rounded-full border border-white/10 text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-500">
            Explore All Industries
          </button>
        </div>

        {/* Filter Navigation - no-scrollbar class applied here */}
        <div className="flex flex-wrap gap-x-10 gap-y-6 text-sm mb-20 border-b border-white/5 pb-8 overflow-x-auto no-scrollbar">
          {TOP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`transition-all duration-300 relative whitespace-nowrap ${
                active === cat
                  ? "text-white font-bold scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat}
              {active === cat && (
                <div className="absolute -bottom-[33px] left-0 right-0 h-[3px] bg-purple-500 shadow-[0_0_20px_#9b32ff] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-purple-500/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]"></div>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  {project.category}
                </span>
                <div className="flex justify-between items-end gap-4">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-purple-200">
                    {project.title}
                  </h3>
                  <button className="font-sans px-7 py-3 rounded-full bg-gradient-to-r from-[#6322E0] to-[#9B32FF] text-white text-sm font-semibold shadow-[0_10px_20px_rgba(99,34,224,0.3)] hover:shadow-[0_15px_30px_rgba(155,50,255,0.5)] hover:-translate-y-1 transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="font-sans bg-[#8b2cf5] hover:bg-[#7c1df0] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group">
          <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
            Get A Quote!
          </span>
        </button>
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
          ),
        )}
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
      <div className="fixed bottom-5 right-10 z-50 flex flex-col items-end gap-2">
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
    </section>
  );
};

export default Work;
