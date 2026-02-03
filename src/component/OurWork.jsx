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
    <div className="bg-[#0a0a0a] font-body text-white overflow-x-hidden">
      <section className="relative py-24 px-6 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b1e] via-[#0d0d0d] to-[#0a0a0a]" />

        {/* Social */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
          {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <a
                key={i}
                className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500"
              >
                <Icon size={14} />
              </a>
            ),
          )}
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between mb-24 gap-12">
            <div>
              <div className="flex items-center gap-3 text-purple-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Our Work
              </div>
              <h2 className="text-5xl md:text-7xl font-headingAlt leading-tight">
                10+ Years Exp but <br />
                <span className="italic font-light text-gray-300">
                  Countless Innovations
                </span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <div key={i} className="group">
                <div className="rounded-[2rem] overflow-hidden mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <h3 className="text-2xl text-gray-200 group-hover:text-white">
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2a0e3a]/20 blur-[120px] pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <div className="relative z-10 mx-auto px-6">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-3 text-purple-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              Partners & Recognition
            </div>

            <h2 className="text-center text-4xl md:text-5xl font-headingAlt mb-20">
              Trusted by Industry{" "}
              <span className="italic text-gray-400">Leaders</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8 relative">
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

                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

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

      <section className="py-32 bg-[#fafafa] text-black">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="mb-16">
            <div className="flex items-center gap-3 text-purple-600 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              Client Testimonials & Reviews
            </div>
            <h2 className="text-5xl font-headingAlt mb-16">
              What Our Happy Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-zinc-200 shadow-xl">
                  <img
                    src={t.videoThumb}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#a855f7] rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaVolumeMute size={16} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="px-2">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <img
                      src={t.brandLogo}
                      alt="brand"
                      className="h-10 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    />
                  </div>
                  <h4 className="font-bold">{t.name}</h4>
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
