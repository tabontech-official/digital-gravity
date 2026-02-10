import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className=" top-0 left-0 w-full z-[100] px-4 py-4 font-body">
      <nav
        className="
         mx-auto
          grid grid-cols-3 items-center
        "
      >
        {/* LEFT – NAV LINKS PILL */}
        <div className="hidden md:flex justify-start">
          <div
            className="
              flex items-center gap-8 px-8 py-3
              rounded-full
              bg-white/60
              backdrop-blur-[10px]
              border border-white
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            "
          >
            <Link to="/services" className="text-slate-900 font-medium hover:text-purple-700 transition">
              Services
            </Link>
            <Link to="/case-studies" className="text-slate-900 font-medium hover:text-purple-700 transition">
              Work
            </Link>
            <Link to="/about-us" className="text-slate-900 font-medium hover:text-purple-700 transition">
              About
            </Link>
            <Link to="/contact" className="text-slate-900 font-medium hover:text-purple-700 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* CENTER – LOGO */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-1 text-xl font-heading">
            <span className="font-light text-slate-900">NexaSoft</span>
            <span className="font-semibold text-purple-700">Solutions</span>
          </Link>
        </div>

        {/* RIGHT – CTA */}
        <div className="hidden md:flex justify-end">
          <Link
            to="/contact"
            className="
              px-7 py-3 rounded-full
              bg-white/60 backdrop-blur-[10px]
              border border-slate-900
              text-slate-900 font-semibold
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              hover:bg-white/80 hover:text-purple-700
              transition-all
            "
          >
            Let’s talk
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex justify-end col-span-3">
          <button
            className="text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
