import React from "react";
// npm install react-icons
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
import { MdSubdirectoryArrowRight } from "react-icons/md";

const categories = [
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "Print",
  "SEO",
  "Branding",
  "View All",
];

const projects = [
  {
    title: "Digital Uplift for DIFC",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Engineered DP World for Global Reach",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sephora – Beauty brand, Powered by Tech",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
];

const partners = [
  {
    name: "Bloomberg",
    logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/bloomberg.webp",
  },
  {
    name: "NPR",
    logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/npr.webp",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "Zendesk",
    logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/zendesk.webp",
  },
  {
    name: "Inc 5000",
    logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/inc.webp",
  },
  {
    name: "Google Partner",
    logo: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
  },
  {
    name: "CNBC",
    logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/hubspot-certified-partner.webp",
  },
  {
    name: "TikTok",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png",
  },
];

// NEW: Testimonial Data
const testimonials = [
  {
    title: "The Success of EMDAD's Website Launch",
    text: "Just writing to express our appreciation to Digital Gravity and their team for their efforts that contributed to the success of the EMDAD website at its launch. A special thanks to Aashir for showing leadership and resilience each step of the way, attending to our requirements, providing us",
  },
  {
    title: "Sleek and Smooth Experience",
    text: "Everything went so smoothly, we loved the website, and everyone was completely amazed by it. The few hiccups that happened due to miscommunication were also managed brilliantly by the project manager who was assigned to our project. Overall everything was great, so thank you to the entire",
  },
  {
    title: "Smooth Sailing",
    text: "A big thanks to Wasi, the project manager at Deep Water Marine's website. After the first draft, we were asked for feedback and suggested some changes. They clearly understand what we ask for. And at the end of the day, we got a website developed very nicely and as per my expectations.",
  },
  {
    title: "Outstanding Website Experience",
    text: "We wanted to thank the team for their incredible effort on the Terra website. The feedback from users has been overwhelmingly positive, from design to usability. Special appreciation for the ongoing support throughout the project duration.",
  },
];

const OurWork = () => {
  return (
    <div className="bg-[#050505] font-body text-white overflow-x-hidden">
      <section className="relative py-32 px-6 lg:px-32">
        

        <div className="relative  mx-auto">
          {/* HEADER */}
          <div className="border-b border-white/10 pb-10 mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading tracking-[0.25em] uppercase">
                Our Work
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight max-w-4xl">
              10+ Years Exp but <br />
              <span className="italic text-gray-400">
                Countless Innovations
              </span>
            </h2>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                {/* IMAGE CARD */}
                <div className="rounded-[32px] overflow-hidden mb-6 bg-[#0f0f0f] border border-white/10 transition-all duration-700 group-hover:border-purple-500/30">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-heading font-medium text-gray-300 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-32 bg-[#050505] overflow-hidden font-body text-white">
        <div className="relative z-10 mx-auto px-6 ">
          {/* HEADER */}
          <div className="border-b border-white/10 pb-10 mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
                Partners & Recognition
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight">
              Trusted by Industry{" "}
              <span className="text-gray-400 italic">Leaders</span>
            </h2>
          </div>

          {/* MARQUEES */}
          <div className="flex flex-col gap-10 relative">
            {/* ROW 1 */}
            <div className="relative overflow-hidden group">
              <div className="flex w-max gap-8 animate-marqueeLeft py-4 group-hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="
                w-[200px] md:w-[260px]
                h-32 md:h-36
                bg-[#0f0f0f]
                border border-white/10
                rounded-[32px]
                flex items-center justify-center
                p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
              "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                  max-h-10 md:max-h-14
                  w-auto
                  opacity-80
                  transition-all duration-500
                  hover:opacity-100
                "
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="relative overflow-hidden group">
              <div className="flex w-max gap-8 animate-marqueeRight py-4 group-hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="
                w-[200px] md:w-[260px]
                h-32 md:h-36
                bg-[#0f0f0f]
                border border-white/10
                rounded-[32px]
                flex items-center justify-center
                p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
              "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                  max-h-10 md:max-h-14
                  w-auto
                  opacity-80
                  transition-all duration-500
                  hover:opacity-100
                "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EDGE FADES (SAME BG, NO GRADIENT COLOR) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20" />
        </div>
      </section>

     <section className="relative bg-[#050505] py-20 md:py-32 px-6 sm:px-14 overflow-hidden font-body text-white">
  <div className="relative px-2 sm:px-6 z-10 mx-auto">
    {/* HEADER */}
    <div className="border-b border-white/10 pb-10 mb-10 md:mb-16">
      <div className="flex items-center gap-3 mb-4 px-2 sm:px-4">
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
        <span className="text-purple-400 text-[10px] md:text-xs font-heading font-semibold tracking-[0.25em] uppercase">
          Client Testimonials & Reviews
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-[1.1] max-w-4xl px-2 sm:px-4">
        What Our Happy Clients <br className="hidden sm:block" /> Say About Us
      </h2>
    </div>

    {/* SLIDER */}
    <div className="relative w-full">
      {/* Desktop fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none hidden md:block" />

      {/* Scroll Container */}
      <div className="overflow-x-auto md:overflow-hidden py-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-8 w-max snap-x snap-mandatory md:animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={idx}
              className="w-[92vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] flex-shrink-0 snap-start"
            >
              {/* CARD */}
              <div className="bg-[#0f0f0f] rounded-[20px] md:rounded-[32px] p-5 sm:p-6 md:p-10 h-full min-h-[260px] sm:min-h-[300px] md:min-h-[400px] border border-white/10 flex flex-col transition-all duration-500 md:hover:border-purple-500/40 md:hover:-translate-y-1">
                {/* Quote */}
                <div className="text-purple-500 text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 tracking-tighter">
                  //
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-heading font-semibold text-white mb-3 md:mb-4 leading-snug">
                  {item.title}
                </h4>

                {/* Content */}
                <div className="relative pr-4 md:pr-6 flex-grow">
                  <p className="text-gray-400 leading-relaxed text-[14px] sm:text-sm md:text-base font-body italic">
                    “{item.text}”
                  </p>

                  {/* Accent Line */}
                  <div className="absolute right-0 top-0 w-[2px] md:w-[3px] h-full flex flex-col">
                    <div className="h-2/3 bg-purple-500 rounded-t-full shadow-[0_0_8px_#a855f7]" />
                    <div className="h-1/3 bg-white/5 rounded-b-full" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 md:mt-8 flex items-center justify-between">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] text-white/20 font-mono">
                    0{(idx % testimonials.length) + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

 
</section>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
          {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <a
                key={i}
                className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ),
          )}
        </div>
    </div>
  );
};

export default OurWork;
