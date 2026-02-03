import { useParams } from "react-router-dom";
import { servicesData } from "../../data/workData";
import { motion } from "framer-motion";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaVolumeMute, // Added for the video-style mute icon
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useState } from "react";
import { ContactModal } from "../ContactModal";
const CaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const project = servicesData.find((item) => item.id === id);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Case Study Not Found
      </div>
    );
  }

  const { hero, testimonialSection } = project.caseStudy;

  return (
    <div className="text-white font-body">
      <section className="relative min-h-screen px-6 lg:px-32 flex items-center overflow-hidden bg-[#050505]">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full max-w-[1440px] mx-auto">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading tracking-[0.25em] uppercase">
                {hero.label}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight mb-8 max-w-xl">
              {hero.title}
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-12">
              {hero.description}
            </p>

            <a
              href={hero.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-3 rounded-full border border-purple-500/40 text-purple-300 text-sm font-semibold hover:bg-purple-500/10 hover:shadow-[0_0_25px_#a855f7] transition-all duration-500"
            >
              Visit Website
            </a>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={hero.mockupImage}
              alt={hero.title}
              className="
            w-[300px]
            sm:w-[420px]
            lg:w-[560px]
            xl:w-[640px]
            rotate-[-10deg]
            drop-shadow-[0_50px_100px_rgba(0,0,0,0.9)]
          "
            />
          </div>
        </div>
      </section>
      <section className="relative px-6 lg:px-32 py-32 bg-[#050505] overflow-hidden font-body text-white">
        {/* SOFT BACKGROUND GRADIENT */}

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-[#0f0f0f]">
            {/* TOP GRID */}
            <div className="grid lg:grid-cols-[1.5fr_1fr] border-b border-white/10">
              {/* LEFT DESCRIPTION */}
              <div className="p-10 lg:p-16 flex items-center">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
                  {project.caseStudy.overviewSection.description}
                </p>
              </div>

              {/* RIGHT META */}
              <div className="p-10 lg:p-16 lg:border-l border-white/10 bg-black/20">
                <div className="grid grid-cols-2 gap-y-12 gap-x-10">
                  {project.caseStudy.overviewSection.meta.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-xs font-heading tracking-[0.25em] uppercase text-purple-400">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-400">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IMAGE AREA */}
            <div className="p-8 lg:p-20">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 transition-all duration-500 hover:border-purple-500/30">
                <img
                  src={project.caseStudy.overviewSection.image}
                  alt="Project Overview"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                />

                {/* SUBTLE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 lg:px-32 py-32 bg-[#050505] text-white overflow-hidden font-body">
        {/* SOFT PURPLE GLOW */}

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* SECTION LABEL */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            <span className="text-xs font-heading tracking-[0.25em] uppercase text-purple-400">
              {project.caseStudy.aboutClient.label}
            </span>
          </div>

          {/* HEADING & DESCRIPTION */}
          <div className="max-w-4xl mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight mb-10">
              {project.caseStudy.aboutClient.heading}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {project.caseStudy.aboutClient.description}
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT: SERVICES CARD */}
            <div className="bg-[#0f0f0f] p-10 lg:p-16 rounded-[32px] border border-white/10 flex flex-col justify-center transition-all duration-500 hover:border-purple-500/30">
              <h3 className="text-2xl lg:text-3xl font-heading font-medium mb-6 text-white">
                {project.caseStudy.ourServices.heading}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {project.caseStudy.ourServices.description}
              </p>
            </div>

            {/* RIGHT: MOCKUP */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 group">
              <img
                src={project.caseStudy.ourServices.mockupImage}
                alt="Tablet Display"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 lg:px-32 py-32 bg-[#050505] text-white overflow-hidden font-body">
        <div className="relative z-10 max-w-[1440px] mx-auto mb-20">
          {/* SECTION LABEL */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            <span className="text-xs font-heading tracking-[0.25em] uppercase text-purple-400">
              {project.caseStudy.challengesSection.label}
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight max-w-4xl">
            {project.caseStudy.challengesSection.heading}
          </h2>
        </div>

        {/* CHALLENGES LIST */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-[#0f0f0f] overflow-hidden">
            {project.caseStudy.challengesSection.items.map(
              (challenge, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start p-8 lg:p-12 transition-colors duration-500 hover:bg-white/[0.02] ${
                    index !==
                    project.caseStudy.challengesSection.items.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  {/* TITLE */}
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                    <h3 className="text-xl md:text-2xl font-heading font-medium text-white">
                      {challenge.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
                    {challenge.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative px-6 lg:px-32 py-32 bg-[#050505] text-white overflow-hidden font-body">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* TOP DIVIDER (TESTIMONIAL STYLE) */}
          <div className="border-b border-white/10 pb-10 mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
                {project.caseStudy.resultsSection.label}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight max-w-4xl">
              {project.caseStudy.resultsSection.heading}
            </h2>
          </div>

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 mb-32">
            <div>
              <p className="text-gray-400 leading-relaxed font-light text-lg max-w-xl">
                {project.caseStudy.resultsSection.description}
              </p>
            </div>

            {/* DELIVERABLES */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.caseStudy.resultsSection.deliverables.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-[#0f0f0f] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between transition-all duration-500 hover:border-purple-500/30"
                  >
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-purple-400">
                      ✓
                    </div>
                    <h4 className="text-lg font-heading font-medium leading-snug text-white mt-6">
                      {item}
                    </h4>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* STATS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-16">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading tracking-[0.25em] uppercase">
                {project.caseStudy.resultsSection.statsLabel}
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
              {project.caseStudy.resultsSection.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center px-4 lg:px-10 ${
                    index !== project.caseStudy.resultsSection.stats.length - 1
                      ? "lg:border-r border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-gray-400 text-sm mb-4 font-light uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-headingAlt font-light tracking-tighter text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#050505] py-32 px-6 overflow-hidden font-body text-white">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* TOP DIVIDER */}
          <div className="border-b border-white/10 pb-10 mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
                {testimonialSection.label}
              </span>
            </div>
          </div>

          {/* STAR RATING (PURPLE, SUBTLE) */}
          <div className="flex justify-center gap-2 mb-12">
            {[...Array(testimonialSection.stars)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="text-purple-500 text-xl"
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* QUOTE */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-2xl md:text-4xl lg:text-5xl font-headingAlt font-light leading-tight text-gray-300 tracking-tight"
          >
            “{testimonialSection.content}”
          </motion.blockquote>
        </div>
      </section>

      <div className="relative bg-gray-100">
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="font-sans    bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group"
          >
            <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Get A Quote!
            </span>
          </button>
        </div>

        {/* Modal Component */}
        <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
    </div>
  );
};

export default CaseStudy;
