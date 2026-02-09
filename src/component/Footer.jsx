import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  Mail
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
    <footer className="relative bg-[#050505] text-gray-400 pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl text-white font-medium tracking-tight">
                NexaSoft <span className="text-purple-500 font-bold">Solutions</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm">
                Crafting digital experiences that bridge imagination with next-gen
                technology. We build scalable solutions for the modern web.
              </p>
            </div>

            {/* Micro-Newsletter / CTA */}
            <div className="relative max-w-sm">
               <p className="text-white text-xs font-semibold uppercase mb-3 tracking-wider">Stay Updated</p>
               <div className="flex items-center border-b border-white/10 focus-within:border-purple-500 transition-colors py-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none outline-none text-sm w-full focus:ring-0 text-white placeholder:text-gray-600"
                  />
                  <button aria-label="Subscribe" className="hover:text-purple-400 transition-colors">
                    <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="text-[13px] hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <span className="bg-purple-500 w-0 h-[1px] block group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
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

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-[11px] uppercase tracking-widest font-medium">
            <p className="text-gray-500">© 2026 NexaSoft Solutions</p>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/5 hover:bg-purple-600 hover:border-purple-600 text-white transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Background Watermark */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.02] pointer-events-none text-center select-none">
        <span className="text-[18vw] font-black tracking-tighter text-white leading-none">
          NEXASOFT
        </span>
      </div>
    </footer>
  );
};

export default Footer;