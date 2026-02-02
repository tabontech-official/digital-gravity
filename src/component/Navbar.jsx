// import React, { useEffect, useState } from "react";
// import { MdSubdirectoryArrowRight } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhoneCall } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const serviceLinks = [
//   [
//     // Core Software Services
//     "Web Development",
//     "Ecommerce Development",
//     "ERP Software",
//     "AI & Machine Learning",
//     "Cloud Solutions",

//     "Shopify Store Build & Redesign",
//     "Shopify Theme Customization",
//     "Shopify Store Migration",
//     "Shopify Troubleshooting & Support",
//     "Shopify Performance & Speed Optimization",
//     "Shopify Custom Apps & Integrations",
//     "Shopify Product & Collection Setup",
//     "Shopify Custom Domain Setup",
//   ],
//   [
//     "Shopify SEO Optimization",
//     "Shopify Conversion Rate Optimization",
//     "Shopify Analytics & Tracking",
//     "Shopify Sales Channel Setup",
//     "Shopify Email Marketing",
//     "Shopify Website & Marketing Content",
//     "Shopify Product Descriptions",
//     "Shopify Content Marketing",
//     "Shopify Social Media Marketing",
//     "Shopify Search Engine Advertising",

//     "Shopify Digital Branding & Visual Identity",
//     "Shopify Business Strategy Guidance",
//     "Shopify Website Audit & Optimization Strategy",
//   ],
// ];

// const gccGiants = ["BEYOND", "GBM", "SkillBridge", "mediaPro", "DIFC", "SANAD", "exa", "ADIB", "flydubai", "Terra Nexus", "EMDAD", "ATMOSPHERE", "SHARJAH", "SEPHORA", "Khazna", "OHANA"];

// const toSlug = (text) => text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

// // Pass close function to Dropdown
// const ServicesDropdown = ({ closeDropdown }) => (
//   <div className="absolute top-full left-0 w-full pt-4 z-50">
//     <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row gap-12 animate-in fade-in slide-in-from-top-2 duration-300">
//       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12">
//         {serviceLinks.map((column, colIdx) => (
//           <div key={colIdx} className="space-y-1">
//             {column.map((service) => (
//               <Link
//                 key={service}
//                 to={`/services/${toSlug(service)}`}
//                 onClick={closeDropdown} // Closes menu immediately
//                 className="group flex items-center justify-between py-3 border-b border-white/5 cursor-pointer hover:border-purple-500/40 transition-all"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_#a855f7]" />
//                   <span className="text-sm font-normal text-gray-300 group-hover:text-white transition-colors">{service}</span>
//                 </div>
//                 <MdSubdirectoryArrowRight size={18} className="text-gray-600 group-hover:text-purple-500 transition-transform group-hover:translate-x-1" />
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="lg:w-[360px]">
//         <h3 className="text-[20px] font-bold tracking-tight text-gray-400 mb-6 uppercase leading-tight">
//           5-Star Rated, <br /> <span className="text-white">Works with GCC Giants</span>
//         </h3>
//         <div className="grid grid-cols-4 border-l border-t border-white/10">
//           {gccGiants.map((brand, i) => (
//             <div key={i} className="aspect-square border-r border-b border-white/10 flex items-center justify-center p-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all bg-white/[0.02] hover:bg-white/[0.05]">
//               <span className="text-[8px] font-black text-center uppercase tracking-tighter text-white">{brand}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Navbar = () => {
//   const [isServicesHovered, setIsServicesHovered] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsServicesHovered(false);
//   }, [location.pathname]);

//   return (
//     <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl font-primary">
      // <nav
      //   className="relative flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
      //   onMouseLeave={() => setIsServicesHovered(false)}
      // >
//         <Link to="/" className="flex items-center gap-1 text-xl font-semibold text-white">
//           <span className="font-light">NexaSoft</span>
//           <span className="font-semibold">Solutions</span>
//           <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 ml-0.5" />
//         </Link>

//         <ul className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-300">
//           <li
//             className={`py-4 cursor-pointer transition-colors ${isServicesHovered ? "text-white underline underline-offset-8 decoration-purple-500" : "hover:text-white"}`}
//             onMouseEnter={() => setIsServicesHovered(true)}
//           >
//             Services
//           </li>
//           <li className="hover:text-white transition-colors"><Link to="/case-studies">Our Work</Link></li>
//           <li className="hover:text-white transition-colors"><Link to="/about-us">About</Link></li>
//           {/* <li className="hover:text-white transition-colors"><Link to="/blogs">Blog</Link></li> */}
//         </ul>

//         <div className="flex items-center gap-4">
//           <button className="bg-purple-600 px-6 py-2.5 rounded-full text-sm font-medium text-white hover:bg-purple-500 transition-all">Speak to an expert</button>
//         </div>

//         {isServicesHovered && <ServicesDropdown closeDropdown={() => setIsServicesHovered(false)} />}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdSubdirectoryArrowRight,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const serviceLinks = [
  [
    "Web Development",
    "Ecommerce Development",
    "ERP Software",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Shopify Store Build & Redesign",
    "Shopify Theme Customization",
  ],
  [
    "Shopify SEO Optimization",
    "Shopify Analytics & Tracking",
    "Shopify Digital Branding",
    "Shopify Business Strategy",
    "Website Audit",
    "Shopify Content Marketing",
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

const toSlug = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHovered(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 py-4 lg:px-0">
      <nav className="max-w-7xl mx-auto relative flex items-center justify-between px-6 py-3 lg:py-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-semibold text-white"
        >
          <span className="font-light">NexaSoft</span>
          <span className="font-bold text-purple-400">Solutions</span>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shadow-[0_0_10px_#a855f7]" />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li
            className="relative py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors hover:text-white ${isHovered ? "text-white" : ""}`}
            >
              Services{" "}
              <MdKeyboardArrowDown
                className={`text-lg transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-40 pt-6 w-[800px]"
                >
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex gap-10">
                    <div className="flex-1 grid grid-cols-2 gap-x-8">
                      {serviceLinks.map((column, i) => (
                        <div key={i} className="flex flex-col">
                          {column.map((item) => (
                            <Link
                              key={item}
                              to={`/services/${toSlug(item)}`}
                              className="group flex items-center justify-between py-2.5 border-b border-white/5 hover:border-purple-500/30 transition-all"
                            >
                              <span className="text-gray-400 group-hover:text-white transition-colors">
                                {item}
                              </span>
                              <MdSubdirectoryArrowRight className="text-gray-700 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Brand Section */}
                    {/* <div className="w-[280px] bg-gradient-to-br from-white/[0.03] to-transparent p-6 rounded-3xl border border-white/5">
                      <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">Trusted By Giants</p>
                      <div className="grid grid-cols-3 gap-3">
                        {gccGiants.slice(0, 9).map((g) => (
                          <div key={g} className="h-10 border border-white/5 flex items-center justify-center bg-white/[0.02] rounded-lg">
                            <span className="text-[7px] text-gray-500 font-bold">{g}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              to="/case-studies"
              className="hover:text-white transition-colors"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:gap-4">
        <button
  className="
    hidden md:inline-flex
    items-center justify-center
    /* The Gradient Change */
    bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
    text-white text-sm font-semibold
    px-8 py-3
    rounded-full
    /* Effects */
    hover:brightness-110
    transition-all duration-200
    active:scale-95
    shadow-lg shadow-purple-900/40
    tracking-tight
  "
>
            Speak to an expert
          </button>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:your@email.com"
              className="group p-3 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:border-white"
            >
              <HiOutlineMail
                size={20}
                className="group-hover:text-[#a855f7] transition-colors duration-300"
              />
            </a>

            <a
              href="tel:+123456789"
              className="group p-3 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:border-white"
            >
              <FiPhoneCall
                size={18}
                className="group-hover:text-[#a855f7] transition-colors duration-300"
              />
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-xl font-medium text-white py-2"
              >
                Services
                <MdKeyboardArrowDown
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="grid grid-cols-1 gap-1 pl-4 max-h-[300px] overflow-y-auto">
                  {serviceLinks.flat().map((s) => (
                    <Link
                      key={s}
                      to={`/services/${toSlug(s)}`}
                      className="text-gray-400 py-2 text-sm border-l border-white/10 pl-4"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/case-studies"
                className="text-xl font-medium text-white py-2 border-t border-white/5 pt-4"
              >
                Our Work
              </Link>
              <Link
                to="/about-us"
                className="text-xl font-medium text-white py-2"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
