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
    <div className="bg-[#0a0a0a]">
      {/* 1. OUR WORK SECTION */}
      <section className="relative min-h-screen text-white py-24 px-8 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b1e] via-[#0d0d0d] to-[#0a0a0a]" />
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6d28d9]/10 blur-[120px] rounded-full" />
        </div>

        <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
          {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              >
                <Icon size={14} />
              </a>
            ),
          )}
        </div>

        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <button className="bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group">
            <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-bold tracking-[0.2em] uppercase">
              Get A Quote!
            </span>
          </button>
        </div>

        <div className="fixed right-6 bottom-32 hidden xl:flex flex-col gap-3 z-40">
          {[FaWhatsapp, HiOutlineMail, HiOutlinePhone].map((Icon, idx) => (
            <div
              key={idx}
              className="w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-purple-600 transition-colors"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#a855f7] uppercase tracking-[0.3em] text-[12px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_12px_#a855f7]"></span>
                Our Work
              </div>
              <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight">
                10+ Years Exp but <br />
                <span className="font-serif italic font-light opacity-80 text-gray-300">
                  Countless Innovations
                </span>
              </h2>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-[14px] font-medium text-gray-500">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`flex items-center gap-2 hover:text-white transition-all ${
                    i === 0 ? "text-white" : ""
                  }`}
                >
                  {i === 0 && (
                    <MdSubdirectoryArrowRight
                      className="text-purple-400 rotate-0"
                      size={18}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-zinc-900 mb-8 border border-white/5 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-normal leading-snug text-gray-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-2">
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
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Top Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2a0e3a]/20 blur-[120px] pointer-events-none" />

        {/* Bottom Line */}

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <div className="relative z-10 mx-auto px-6">
          {/* HEADER */}

          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-3 text-purple-500 uppercase tracking-[0.4em] text-[11px] font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              Partners & Recognition
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-200">
              Trusted by Industry{" "}
              <span className="font-serif italic font-light text-gray-400">
                Leaders
              </span>
            </h2>
          </div>

          {/* MARQUEE */}

          <div className="flex flex-col gap-8 relative">
            {/* ROW 1 – LEFT */}

            <div className="relative overflow-hidden group">
              <div className="flex w-max gap-6 animate-marqueeLeft py-4 group-hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="

                relative

                w-[200px] md:w-[280px]

                h-32 md:h-40

                bg-[#2a2a2d]/80

                backdrop-blur-sm

                border border-white/15

                rounded-[1.75rem]

                shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.35)]

                flex items-center justify-center

                p-8

                transition-all duration-500 ease-out

                hover:-translate-y-2

                hover:border-purple-500/40

                hover:bg-[#303035]/90

                group/card

              "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="

  max-h-10 md:max-h-14

  w-auto

  opacity-100

  transition-all duration-500

  group-hover/card:scale-105

"
                    />

                    {/* Glass sheen */}

                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2 – RIGHT */}

            <div className="relative overflow-hidden group">
              <div className="flex w-max gap-6 animate-marqueeRight py-4 group-hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="

                relative

                w-[200px] md:w-[280px]

                h-32 md:h-40

                bg-[#2a2a2d]/80

                backdrop-blur-sm

                border border-white/15

                rounded-[1.75rem]

                shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.35)]

                flex items-center justify-center

                p-8

                transition-all duration-500 ease-out

                hover:-translate-y-2

                hover:border-purple-500/40

                hover:bg-[#303035]/90

                group/card

              "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="

  max-h-10 md:max-h-14

  w-auto

  opacity-100

  transition-all duration-500

  group-hover/card:scale-105

"
                    />

                    {/* Glass sheen */}

                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-20" />

          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-20" />
        </div>
      </section>

      <section className="relative py-32 bg-[#fafafa] overflow-hidden">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="mb-16">
            <div className="flex items-center gap-3 text-purple-600 uppercase tracking-[0.3em] text-[12px] font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]" />
              Client Testimonials & Reviews
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-black tracking-tight">
              What Our Happy Clients <br />
              Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-marquee  hover:[animation-play-state:paused]">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                {/* Video/Portrait Card */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-zinc-200 shadow-xl">
                  <img
                    src={t.videoThumb}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Purple Mute Overlay */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#a855f7] rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaVolumeMute size={16} />
                  </div>

                  {/* Glass Top Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info Section */}
                <div className="px-2">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <img
                      src={t.brandLogo}
                      alt="brand"
                      className="h-10 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-black tracking-tight">
                    {t.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full flex items-center justify-center overflow-hidden text-white font-sans py-16 md:py-24 lg:h-[80vh] min-h-[600px]">
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
      </section>
    </div>
  );
};

export default OurWork;
