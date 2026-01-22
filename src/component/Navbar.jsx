import React, { useState } from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

/* ================= DATA ================= */

const serviceLinks = [
  [
    "Web Development",
    "Ecommerce Development",
    "ERP Software",
    "Digital Marketing",
    "Search Engine Optimization",
    "Artificial Intelligence",
    "Virtual Reality",
    "Video Production",
  ],
  [
    "Mobile App Development",
    "UI/UX Design",
    "IT Resource Outsourcing",
    "Social Media Marketing",
    "Generative Engine Optimization",
    "Augmented Reality",
    "Digital Branding & Creatives",
    "2D/3D Video Animation",
  ],
];

const gccGiants = [
  "BEYOND",
  "GBM",
  "SkillBridge",
  "mediaPro",
  "DIFC",
  "SANAD",
  "exa",
  "ADIB",
  "flydubai",
  "Terra Nexus",
  "EMDAD",
  "ATMOSPHERE",
  "SHARJAH",
  "SEPHORA",
  "Khazna",
  "OHANA",
];

/* ================= DROPDOWN ================= */
const toSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

const ServicesDropdown = () => (
  <div className="absolute top-full left-0 w-full pt-4 z-50">
    <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row gap-12 animate-in fade-in slide-in-from-top-2 duration-300">
      {/* LEFT SERVICES */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {serviceLinks.map((column, colIdx) => (
          <div key={colIdx} className="space-y-1">
           {column.map((service) => {
  const slug = toSlug(service);

  return (
    <Link
      key={service}
      to={`/services/${slug}`}
      className="group flex items-center justify-between py-3 border-b border-white/5 cursor-pointer hover:border-purple-500/40 transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_#a855f7]" />
        <span className="text-sm font-normal text-gray-300 group-hover:text-white transition-colors">
          {service}
        </span>
      </div>

      <MdSubdirectoryArrowRight
        size={18}
        className="text-gray-600 group-hover:text-purple-500 transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
})}

          </div>
        ))}
      </div>

      {/* RIGHT BRAND GRID */}
      <div className="lg:w-[360px]">
        <h3 className="text-[20px] font-bold tracking-tight text-gray-400 mb-6 uppercase leading-tight">
          5-Star Rated,
          <br />
          <span className="text-white">Works with GCC Giants</span>
        </h3>

        <div className="grid grid-cols-4 border-l border-t border-white/10">
          {gccGiants.map((brand, i) => (
            <div
              key={i}
              className="aspect-square border-r border-b border-white/10 flex items-center justify-center p-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <span className="text-[8px] font-black text-center uppercase tracking-tighter text-white">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ================= NAVBAR ================= */

const Navbar = () => {
  const toSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl font-primary">
      <nav
        className="relative flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        {/* LOGO */}
        <div className="flex items-center gap-1 text-xl font-semibold text-white">
          <span className="font-light">NexaSoft</span>
          <span className="font-semibold">Solutions</span>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 ml-0.5" />
        </div>

        {/* NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-normal text-gray-300">
          <li
            className={`py-4 cursor-pointer transition-colors ${
              isServicesHovered
                ? "text-white underline underline-offset-8 decoration-purple-500"
                : "hover:text-white"
            }`}
            onMouseEnter={() => setIsServicesHovered(true)}
          >
            Services
          </li>

          <li className="hover:text-white transition-colors">
            <Link to="/case-studies">Our Work</Link>
          </li>

          <li className="hover:text-white transition-colors">
            <Link to="/about-us">About</Link>
          </li>

          <li className="hover:text-white transition-colors">
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-all cursor-pointer">
              <HiOutlineMail size={16} />
            </div>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-all cursor-pointer">
              <FiPhoneCall size={15} />
            </div>
          </div>

          <button className="bg-purple-600 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:bg-purple-500 transition-all">
            Speak to an expert
          </button>
        </div>

        {/* DROPDOWN */}
        {isServicesHovered && <ServicesDropdown />}
      </nav>
    </header>
  );
};

export default Navbar;
