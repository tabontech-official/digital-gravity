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
    name: "Joe Ann Bleish",
    brandLogo:
      "https://www.digitalgravity.ae/assets/images/clients/hill-knowlton.webp",
    videoThumb:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bachar Kaawach",
    brandLogo: "https://www.digitalgravity.ae/assets/images/clients/admaf.webp",
    videoThumb:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Afaq Seyidova",
    brandLogo:
      "https://www.digitalgravity.ae/assets/images/clients/haka-group.webp",
    videoThumb:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Prue House",
    brandLogo:
      "https://www.digitalgravity.ae/assets/images/clients/scout-kidz.webp",
    videoThumb:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80",
  },
];

const OurWork = () => {
  return (
    <div className="bg-[#050505] font-body text-white overflow-x-hidden">
      <section className="relative py-32 px-6 lg:px-32">
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

        <div className="relative max-w-[1440px] mx-auto">
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
        <div className="relative z-10 mx-auto px-6 max-w-[1440px]">
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

      <section className="relative bg-[#050505] py-32 px-6 overflow-hidden font-body text-white">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* HEADER */}
          <div className="border-b border-white/10 pb-10 mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading font-semibold tracking-[0.25em] uppercase">
                Client Testimonials & Reviews
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight max-w-3xl">
              What Our Happy Clients <br /> Say About Us
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="group cursor-pointer">
                {/* VIDEO CARD */}
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-[#0f0f0f] border border-white/10 transition-all duration-700 group-hover:border-purple-500/30">
                  <img
                    src={t.videoThumb}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />

                  {/* PLAY ICON */}
                  <div className="absolute bottom-5 left-5 w-11 h-11 rounded-full bg-purple-500/90 flex items-center justify-center shadow-[0_0_20px_#a855f7]">
                    <FaVolumeMute size={16} />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* META */}
                <div className="mt-6 px-1">
                  <img
                    src={t.brandLogo}
                    alt="brand"
                    className="h-8 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-3"
                  />
                  <h4 className="text-sm font-heading font-medium text-white">
                    {t.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="relative w-full flex items-center justify-center overflow-hidden text-white font-sans py-16 md:py-24 lg:h-[80vh] min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/1dae855412ca4656b8ae4fa2a61c0d1b.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 z-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#7C1DF0]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium text-gray-300">
                Catch The Success
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Our 200+ Tech Nerds <br className="hidden md:block" />
              are here to help
            </h1>
          </div>

          <div className="lg:pl-12 space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-4 md:space-y-6 max-w-lg">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Client satisfaction is one of our top priorities. Our
                consistency, dedication, and constant innovation have earned
                trust across the globe.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed border-l-0 lg:border-l border-white/20 lg:pl-4">
                Hire expert developers to build scalable, high-performance
                digital products designed for long-term growth.
              </p>
            </div>

            <button className="group relative w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-[#7C1DF0] text-white overflow-hidden transition-all hover:bg-white hover:text-black active:scale-95">
              <span className="relative z-10">Start A Project</span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section> */}
    </div>
  );
};

export default OurWork;
