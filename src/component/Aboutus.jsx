import React, { useState } from "react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiArrowDown, FiArrowUp, FiChevronDown } from "react-icons/fi";
import TechStack from "./TecjStack";
import TestimonialsSection from "./Testimonial";

const AboutUs = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995', // Placeholder for AI image
      tags: ['Artificial Intelligence (AI)', 'DG NEWS'],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679', // Placeholder for Astronaut image
      tags: ['Digital Marketing'],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', // Placeholder for Web Design image
      tags: ['Web Design'],
    },
  ];
  const logos = [
    "https://www.digitalgravity.ae/assets/svg/home/client-3.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-4.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-5.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
    "https://www.digitalgravity.ae/assets/svg/home/client-6.svg",
  ];

  const valuesData = [
    {
      title: "Our Mission",
      content:
        "Be fearless, challenge the norms, and inspire everyone to achieve excellence.",
    },
    {
      title: "Our Vision",
      content:
        "To become a global digital force empowering brands with innovation, strategy, and technology.",
    },
    {
      title: "Our Values",
      type: "list",
      content: [
        {
          label: "Leadership",
          desc: "We use our experience to lead with purpose, inspire action, and create lasting progress.",
        },
        {
          label: "Passion",
          desc: "We put heart into everything we do, fueling our work with relentless energy and unwavering purpose.",
        },
        {
          label: "Transparency",
          desc: "We build trust through honesty and clear communication across teams, projects, and relationships.",
        },
        {
          label: "Creativity",
          desc: "We think outside the box to create bold, innovative ideas that drive lasting impact.",
        },
        {
          label: "Excellence",
          desc: "We push boundaries to deliver our best and exceed expectations with every outcome.",
        },
        {
          label: "Fun",
          desc: "We believe in fun that sparks innovation, turning challenges into energizing and joyful experiences.",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden text-white font-sans">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1024271179?background=1&autoplay=1&loop=1&muted=1&autopause=0"
            className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-12 pt-[220px] pb-40">
          <div className="flex items-center gap-3 mb-10 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Our Story</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-28 items-start">
            <h1 className="text-[56px] leading-[1.15] font-semibold tracking-tight max-w-[620px]">
              From Dubai’s #1 Tech
              <br />
              Nerds to a Global
              <br />
              Force
            </h1>

            <div className="max-w-[520px] text-[15px] leading-[1.9] text-gray-200 space-y-6">
              <p>
                With <strong className="text-white">10+ years</strong>,{" "}
                <strong className="text-white">500+ clients</strong>,{" "}
                <strong className="text-white">50+ developers</strong>, and a{" "}
                <strong className="text-white">200+ team</strong>, we help
                brands scale globally.
              </p>
              <p>
                We deliver web, mobile, and marketing solutions powered by AI,
                AR/VR, and emerging technologies.
              </p>
              <p>
                Expanding across{" "}
                <span className="bg-purple-600/30 px-2 py-0.5 rounded text-purple-300 font-medium">
                  USA
                </span>{" "}
                &{" "}
                <span className="bg-purple-600/30 px-2 py-0.5 rounded text-purple-300 font-medium">
                  MENA
                </span>
                , empowering digital leaders worldwide.
              </p>
            </div>
          </div>

          {/* Logos */}
          <div className="relative mt-40 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-20 opacity-60">
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="brand"
                  className="h-10 grayscale"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
          {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition"
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
              className="w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#050505] text-white py-32 px-6 overflow-hidden font-sans">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20">
            {/* Left Side: Sticky Heading */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className="text-5xl lg:text-7xl font-normal leading-tight tracking-tight">
                What Moves and <br /> Defines Us
              </h2>
            </div>

            {/* Right Side: Accordion */}
            <div className="space-y-0">
              {valuesData.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-white/10 py-8 first:pt-0"
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full justify-between items-center text-left group"
                    >
                      <h3
                        className={`text-3xl lg:text-4xl transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white/10 border-white/40" : ""}`}
                      >
                        {isOpen ? (
                          <FiArrowUp className="text-sm" />
                        ) : (
                          <FiArrowDown className="text-sm opacity-40" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}
                    >
                      {item.type === "list" ? (
                        /* Glowing Sub-list for "Our Values" */
                        <div className="space-y-10 pb-4">
                          {item.content.map((val, idx) => (
                            <div key={idx} className="flex gap-6">
                              <div className="mt-2 shrink-0">
                                <div className="w-2.5 h-2.5 bg-[#bc00ff] rounded-full shadow-[0_0_12px_#bc00ff,0_0_4px_#bc00ff]" />
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-xl font-bold text-white tracking-wide">
                                  {val.label}
                                </h4>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                  {val.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Standard Text for Mission/Vision */
                        <p className="text-gray-300 text-lg leading-relaxed max-w-lg pb-4">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <TechStack />
      <TestimonialsSection />
      <section className="bg-[#010101] text-white py-24 px-8 font-sans relative overflow-hidden">
  {/* Soft top fade */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Our Blog
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          What’s Happening in The <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]">
            Industry?
          </span>
        </h2>
      </div>

      {/* CTA */}
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
        View All Blogs
      </button>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="group cursor-pointer">
          
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
            <img
              src={blog.image}
              alt="Blog cover"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4 py-1.5 rounded-full text-xs
                  border border-purple-500/20
                  bg-gradient-to-r from-purple-500/10 to-pink-500/10
                  backdrop-blur-md
                  text-gray-300
                  hover:text-white hover:border-purple-500/40
                  transition
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default AboutUs;
