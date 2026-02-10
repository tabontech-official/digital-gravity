import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Overview",
      links: [
        { label: "About Us", path: "/about-us" },
        { label: "Services", path: "/services/web-development" },
        { label: "Our Work", path: "/case-studies" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Development",
      links: [
        { label: "Web Development", path: "/services/web-development" },
        { label: "Ecommerce", path: "/services/ecommerce" },
        { label: "ERP Software", path: "/services/erp-software" },
        { label: "AI & ML", path: "/services/ai-ml" },
        { label: "Cloud Solutions", path: "/services/cloud-solutions" },
      ],
    },
    {
      title: "Shopify Growth",
      links: [
        { label: "SEO Optimization", path: "/services/shopify-seo" },
        { label: "Analytics & Tracking", path: "/services/shopify-analytics" },
        { label: "Digital Branding", path: "/services/shopify-branding" },
        { label: "Website Audit", path: "/services/website-audit" },
        { label: "Content Marketing", path: "/services/shopify-content" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden font-body border-t border-slate-200">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] left-[10%] w-[35%] h-[35%] bg-purple-300/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-indigo-300/25 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12]" />
      </div>

      {/* MAIN FOOTER CONTAINER */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-24 pb-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* BRAND + NEWSLETTER */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-heading text-slate-900">
                NexaSoft{" "}
                <span className="text-purple-700 font-semibold">Solutions</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                Crafting digital experiences that bridge imagination with
                next-gen technology. We build scalable solutions for the modern
                web.
              </p>
            </div>

            {/* NEWSLETTER */}
            <div className="relative max-w-sm">
              <p className="text-slate-900 text-xs font-semibold uppercase mb-3 tracking-wider">
                Stay Updated
              </p>
              <div
                className="
                  flex items-center gap-2
                  px-4 py-3 rounded-xl
                  bg-white/60 backdrop-blur-xl
                  border border-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.1)]
                  focus-within:border-purple-400
                  transition-all
                "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-sm w-full text-slate-900 placeholder:text-slate-500"
                />
                <button
                  aria-label="Subscribe"
                  className="text-purple-700 hover:text-purple-900 transition"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors duration-300 flex items-center group"
                        >
                          <span className="bg-purple-600 w-0 h-[1px] block group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-[11px] uppercase tracking-widest font-medium text-slate-500">
            <p>© 2026 NexaSoft Solutions</p>
            <Link to="/privacy" className="hover:text-slate-900 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 transition">
              Terms of Service
            </Link>
          </div>

          {/* SOCIALS */}
          <div
            className="
              flex gap-3
              px-3 py-2 rounded-full
              bg-white/60 backdrop-blur-xl
              border border-white
              shadow-[0_8px_25px_rgba(0,0,0,0.1)]
            "
          >
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-9 h-9 rounded-full
                    bg-white/70
                    border border-white
                    flex items-center justify-center
                    text-slate-700
                    hover:text-purple-700
                    hover:bg-purple-500/15
                    transition-all
                  "
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.04] pointer-events-none text-center select-none">
        <span className="text-[18vw] font-black tracking-tighter text-slate-900 leading-none">
          NEXASOFT
        </span>
      </div>
    </footer>
  );
};

export default Footer;
