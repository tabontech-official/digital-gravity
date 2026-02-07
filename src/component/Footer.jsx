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
      title: "Services",
      links: [
        { label: "Web Development", path: "/services/web-development" },
        { label: "Ecommerce Development", path: "/services/ecommerce" },
        { label: "ERP Software", path: "/services/erp-software" },
        { label: "AI & Machine Learning", path: "/services/ai-ml" },
        { label: "Cloud Solutions", path: "/services/cloud-solutions" },
        {
          label: "Shopify Store Build & Redesign",
          path: "/services/shopify-store",
        },
        {
          label: "Shopify Theme Customization",
          path: "/services/shopify-theme",
        },
      ],
    },
    {
      title: "Shopify Growth",
      links: [
        { label: "Shopify SEO Optimization", path: "/services/shopify-seo" },
        {
          label: "Shopify Analytics & Tracking",
          path: "/services/shopify-analytics",
        },
        {
          label: "Shopify Digital Branding",
          path: "/services/shopify-branding",
        },
        {
          label: "Shopify Business Strategy",
          path: "/services/shopify-strategy",
        },
        { label: "Website Audit", path: "/services/website-audit" },
        {
          label: "Shopify Content Marketing",
          path: "/services/shopify-content",
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#010101] text-gray-400 py-24 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl text-white">
              NexaSoft <span className="text-purple-400 font-bold">Solutions</span>
            </h2>
            <p className="text-sm max-w-xs">
              Crafting digital experiences that bridge imagination with next-gen
              technology.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white text-xs font-semibold uppercase mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="text-sm hover:text-purple-400 hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-xs">© 2026 NexaSoft Solutions</p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Linkedin, Twitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-purple-600 transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>
         <div className="absolute -bottom-12 left-0 w-full opacity-[0.025] pointer-events-none text-center select-none">
        <span className="text-[15vw] font-black tracking-tighter text-white">
          NEXASOFT
        </span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
