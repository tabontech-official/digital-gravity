import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhatWeDo from "./component/WhatWeDo";
import OurWork from "./component/OurWork";
import AboutUs from "./component/Aboutus";
import ServiceHero from "./component/ServiceHero";
import { AnimatePresence } from "framer-motion";
import Work from "./component/work";
import CaseStudy from "./component/pages/CaseStudy";
import Footer from "./component/Footer";
import BlogsPage from "./component/Blogs";
import Contact from "./component/pages/contact";
import ScrollToTop from "./component/ScrollToTop";
import BlogDetail from "./component/BlogDetail";
import { useState } from "react";
import { ContactModal } from "./component/ContactModal";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <OurWork />
  </>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideFooterOnBlogDetail = location.pathname.startsWith("/blog/");
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = () => {
    if (window.innerWidth < 640) {
      navigate("/contact"); // mobile → new page
    } else {
      setIsModalOpen(true); // desktop → modal
    }
  };
  return (
    <>
    
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies" element={<Work />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />

          <Route path="/services/:service" element={<ServiceHero />} />
          <Route path="/our-blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        {hideFooterOnBlogDetail ? null : <Footer />}
      </AnimatePresence>
  <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
  <button
    onClick={handleCTA}
    className="
      group relative
      py-8 px-4
      rounded-l-2xl

      bg-white/60
      border border-white
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]

      transition-all duration-300
      hover:bg-white/70
      active:scale-95
    "
    style={{
      backdropFilter: "blur(11.4px)",
      WebkitBackdropFilter: "blur(11.4px)",
    }}
  >
    {/* Gradient accent strip */}
    <span className="absolute left-0 top-0 h-full w-[4px] rounded-l-2xl
      bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600" />

    <span
      className="
        relative
        [writing-mode:vertical-lr]
        rotate-180
        text-[11px]
        font-semibold
        tracking-[0.25em]
        uppercase
        text-slate-900
        group-hover:text-purple-700
        transition-colors
      "
    >
      Get a Quote
    </span>
  </button>
</div>
<div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex z-40">
  <div
    className="
      flex flex-col gap-3
      px-3 py-4
      rounded-full
      bg-white/60 backdrop-blur-xl
      border border-white
      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
    "
  >
    {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
      (Icon, i) => (
        <a
          key={i}
          className="
            w-9 h-9 rounded-full
            bg-white/70
            border border-white
            flex items-center justify-center
            text-slate-700
            transition-all duration-300
            hover:bg-purple-500/15
            hover:text-purple-700
            hover:shadow-[0_6px_16px_rgba(124,58,237,0.3)]
            active:scale-95
          "
        >
          <Icon size={14} />
        </a>
      )
    )}
  </div>
</div>



      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
