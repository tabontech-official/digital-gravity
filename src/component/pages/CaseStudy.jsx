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
    <div className=" text-white">
      <section className="relative min-h-screen px-8 lg:px-32 flex items-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
          }}
        />

        <div className="absolute inset-0 " />

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {hero.label}
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {hero.title}
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-xl mb-10">
              {hero.description}
            </p>

            <a
              href={hero.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-7 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
            >
              Visit Website
            </a>
          </div>

          {/* RIGHT MOCKUP IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={hero.mockupImage}
              alt={hero.title}
              className="
          w-[320px]
          sm:w-[420px]
          lg:w-[560px]
          xl:w-[640px]
          rotate-[-12deg]
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]
        "
            />
          </div>
        </div>
      </section>
      <section className="relative px-8 lg:px-32 py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0525] via-black to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border border-white/45 rounded-2xl">
            <div className="grid lg:grid-cols-[1.5fr_1fr] border-b border-white/45">
              {/* LEFT DESCRIPTION */}
              <div className="p-10 lg:p-16 flex items-center">
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  {project.caseStudy.overviewSection.description}
                </p>
              </div>

              {/* RIGHT META */}
              <div className="p-10 lg:p-16 lg:border-l border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                  {project.caseStudy.overviewSection.meta.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-xl text-white font-medium">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-400">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM IMAGE AREA */}
            <div className="p-8 lg:p-20 bg-black">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={project.caseStudy.overviewSection.image}
                  alt="Project Overview"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-8 lg:px-32 py-24 bg-black text-white overflow-hidden">
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
          <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
            {project.caseStudy.aboutClient.label}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main Heading & Description */}
          <div className="max-w-4xl mb-20">
            <h2 className="text-4xl lg:text-6xl font-semibold mb-8 tracking-tight">
              {project.caseStudy.aboutClient.heading}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {project.caseStudy.aboutClient.description}
            </p>
          </div>

          {/* Two Column Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Card: Text Content */}
            <div className="bg-[#111111] p-10 lg:p-16 rounded-[2rem] border border-white/5 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-medium mb-6">
                {project.caseStudy.ourServices.heading}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {project.caseStudy.ourServices.description}
              </p>
            </div>

            {/* Right Card: Tablet Mockup */}
            <div className="relative rounded-[2rem] overflow-hidden group">
              <img
                src={project.caseStudy.ourServices.mockupImage}
                alt="Tablet Display"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay to match the image mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Background Decoration (Purple Glow) */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      </section>
      <section className="relative px-8 lg:px-32 py-24 bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
              {project.caseStudy.challengesSection.label}
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight">
            {project.caseStudy.challengesSection.heading}
          </h2>
        </div>

        {/* Challenges Table/List */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
            {project.caseStudy.challengesSection.items.map(
              (challenge, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-[1fr_1.5fr] items-center p-8 lg:p-12 transition-colors duration-300 hover:bg-white/[0.03] ${
                    index !==
                    project.caseStudy.challengesSection.items.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  {/* Challenge Title */}
                  <div className="flex items-center gap-6 mb-4 lg:mb-0">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                    <h3 className="text-2xl lg:text-3xl font-normal text-gray-100">
                      {challenge.title}
                    </h3>
                  </div>

                  {/* Challenge Description */}
                  <div className="lg:pl-12">
                    <p className="text-gray-400 leading-relaxed font-light lg:text-lg">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Subtle Grid Background Effect */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            size: "40px 40px",
          }}
        />
      </section>
      <section className="relative px-8 lg:px-32 py-24 bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 mb-32">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
                  {project.caseStudy.resultsSection.label}
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
                {project.caseStudy.resultsSection.heading}
              </h2>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                {project.caseStudy.resultsSection.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.caseStudy.resultsSection.deliverables.map(
                (item, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-8 flex flex-col justify-between bg-white/[0.02] aspect-square lg:aspect-auto lg:h-48"
                  >
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <h4 className="text-xl font-medium leading-tight">
                      {item}
                    </h4>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* BOTTOM CONTENT: LARGE STATS */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
                {project.caseStudy.resultsSection.statsLabel}
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
              {project.caseStudy.resultsSection.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center lg:px-8 ${
                    index !== project.caseStudy.resultsSection.stats.length - 1
                      ? "lg:border-r border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-gray-400 text-lg mb-4 font-light">
                    {stat.label}
                  </p>
                  <span className="text-6xl lg:text-8xl font-light tracking-tighter">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black py-32 px-8 overflow-hidden">
        {/* Arched Purple Glow Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] rounded-[100%] opacity-30 blur-[80px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(0,0,0,0) 70%)",
            transform: "translateX(-50%) translateY(-60%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white">
              {testimonialSection.label}
            </span>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2 mb-10">
            {[...Array(testimonialSection.stars)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-yellow-500 text-3xl"
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* Testimonial Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.4] text-gray-200 tracking-tight italic"
          >
            "{testimonialSection.content}"
          </motion.blockquote>
        </div>
      </section>
      <div className="relative bg-gray-100">
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="font-sans bg-[#8b2cf5] hover:bg-[#7c1df0] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group"
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
