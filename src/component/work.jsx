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
import { Link } from "react-router-dom";
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
    <section className="relative bg-[#050505] text-white py-32 overflow-hidden font-body">
  <div className="container relative z-10 mx-auto px-6 max-w-[1440px]">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 border-b border-white/10 pb-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
          <span className="text-purple-400 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
            Our Work
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight">
          Projects We’ve Built
        </h2>
      </div>

      <button className="mt-8 lg:mt-0 px-8 py-3 rounded-full border border-white/10 text-sm font-semibold text-white hover:border-purple-500/40 hover:text-purple-300 transition-all duration-500">
        Explore All Industries
      </button>
    </div>

    {/* FILTERS */}
    <div className="flex gap-10  no-scrollbar text-sm mb-20">
      {TOP_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative whitespace-nowrap transition-all duration-300 ${
            active === cat
              ? "text-white font-semibold"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {cat}
          {active === cat && (
            <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7] rounded-full" />
          )}
        </button>
      ))}
    </div>

    {/* PROJECT GRID */}
    <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
      {filteredProjects.map((project, index) => (
        <div key={index} className="group">

          <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#0f0f0f] border border-white/10 transition-all duration-500 group-hover:border-purple-500/30">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-purple-400 font-heading">
              {project.category}
            </span>

            <div className="flex items-center justify-between gap-6">
              <h3 className="text-xl md:text-2xl font-heading font-medium group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <Link
                to={`/case-study/${project.id}`}
                className="px-6 py-2.5 rounded-full border border-purple-500/40 text-sm text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_20px_#a855f7] transition-all duration-500"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Work;
