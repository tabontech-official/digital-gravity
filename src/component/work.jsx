import React, { useState } from "react";
import { servicesData } from "../data/workData";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ContactModal } from "./ContactModal";

const Work = () => {
  const TOP_CATEGORIES = [
    "All",
    "Software",
    "E-commerce",
    "Shopify Core",
    "AI & Data",
    "Branding",
  ];

  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    active === "All"
      ? servicesData
      : servicesData.filter((p) => p.tag === active);

  const handleGetQuote = () => {
    if (window.innerWidth < 640) {
      navigate("/contact");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden font-body">
      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-24 border-b border-slate-200 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
              <span className="text-purple-700 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
                Our Work
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light text-slate-900">
              Projects We’ve Built
            </h2>
          </div>

          <button className="mt-8 lg:mt-0 px-8 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white shadow text-sm font-semibold text-slate-900 hover:text-purple-700 hover:shadow-[0_6px_30px_rgba(139,92,246,0.25)] transition-all">
            Explore All Industries
          </button>
        </div>

        {/* ================= FILTERS ================= */}
        <div className="flex gap-10 mb-24  no-scrollbar text-sm">
          {TOP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative whitespace-nowrap transition-all duration-300 ${
                active === cat
                  ? "text-slate-900 font-semibold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-purple-600 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
              )}
            </button>
          ))}
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group">

              {/* CARD */}
              <div
                className="
                  relative aspect-[16/10] rounded-[32px] overflow-hidden
                  bg-white/50 backdrop-blur-xl
                  border border-white
                  shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                  transition-all duration-500
                  group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-8 flex flex-col gap-3">
                <span className="text-[11px] tracking-[0.25em] uppercase text-purple-700 font-heading font-semibold">
                  {project.category}
                </span>

                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl md:text-2xl font-heading font-medium text-slate-900 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>

                  <Link
                    to={`/case-study/${project.id}`}
                    className="
                      px-6 py-2.5 rounded-full
                      bg-white/60 backdrop-blur-md
                      border border-white
                      text-sm text-slate-900
                      hover:text-purple-700
                      hover:shadow-[0_6px_30px_rgba(139,92,246,0.3)]
                      transition-all
                    "
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= GET QUOTE FLOAT ================= */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={handleGetQuote}
          className="
            bg-white/60 backdrop-blur-md
            border border-white
            text-slate-900
            py-8 px-3 rounded-l-[20px]
            shadow-[0_8px_30px_rgba(139,92,246,0.3)]
            hover:text-purple-700
            transition-all
          "
        >
          <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
            Get A Quote
          </span>
        </button>
      </div>

      {/* ================= SOCIAL LINKS ================= */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
          (Icon, i) => (
            <a
              key={i}
              className="
                w-9 h-9 rounded-full
                bg-white/60 backdrop-blur-md
                border border-white
                flex items-center justify-center
                text-slate-600
                hover:text-purple-700
                hover:shadow-[0_6px_20px_rgba(139,92,246,0.3)]
                transition-all
              "
            >
              <Icon size={14} />
            </a>
          )
        )}
      </div>

      {/* ================= MODAL ================= */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Work;
