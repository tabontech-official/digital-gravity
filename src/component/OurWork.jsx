import React from "react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const projects = [
  {
    title: "Digital Uplift for DIFC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Engineered DP World for Global Reach",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sephora – Beauty brand, Powered by Tech",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
];

const partners = [
  { name: "Bloomberg", logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/bloomberg.webp" },
  { name: "NPR", logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/npr.webp" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Zendesk", logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/zendesk.webp" },
  { name: "Inc 5000", logo: "https://www.digitalgravity.ae/assets/images/partners-recognition/inc.webp" },
];

const testimonials = [
  {
    title: "Outstanding Website Experience",
    text: "The feedback from users has been overwhelmingly positive, from design to usability. The team delivered excellence at every stage.",
  },
  {
    title: "Smooth Sailing",
    text: "They clearly understood our requirements and delivered a website beyond expectations. Communication was flawless.",
  },
  {
    title: "Sleek & Modern",
    text: "The final product was fast, elegant, and perfectly aligned with our brand vision.",
  },
   {
    title: "Outstanding Website Experience",
    text: "The feedback from users has been overwhelmingly positive, from design to usability. The team delivered excellence at every stage.",
  },
  {
    title: "Smooth Sailing",
    text: "They clearly understood our requirements and delivered a website beyond expectations. Communication was flawless.",
  },
  {
    title: "Sleek & Modern",
    text: "The final product was fast, elegant, and perfectly aligned with our brand vision.",
  },
];

const OurWork = () => {
  return (
    <section className="relative py-32 overflow-hidden font-body">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[10%] w-[35%] h-[35%] bg-purple-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-indigo-300/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12]" />
      </div>

      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="border-b border-slate-200 pb-10 mb-20">
          <span className="text-purple-700 text-xs font-heading tracking-[0.25em] uppercase">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-headingAlt font-light text-slate-900">
            10+ Years Exp with{" "}
            <span className="italic text-slate-500">Countless Innovations</span>
          </h2>
        </div>

        {/* PROJECTS */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {projects.map((p, i) => (
            <div key={i} className="group">
              <div className="rounded-[28px] overflow-hidden mb-6 bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="text-lg font-heading font-medium text-slate-900">
                {p.title}
              </h3>
            </div>
          ))}
        </div>

        {/* PARTNERS */}
        <div className="mb-32 text-center">
          <h3 className="text-4xl md:text-5xl font-headingAlt font-light text-slate-900 mb-16">
            Trusted by{" "}
            <span className="italic text-slate-500">Industry Leaders</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p, i) => (
              <div
                key={i}
                className="w-[220px] h-28 bg-white/60 backdrop-blur-xl border border-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                <img src={p.logo} alt={p.name} className="max-h-10 opacity-80" />
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mb-32 relative">

  {/* HEADING */}
  <h3 className="text-center text-4xl md:text-5xl font-headingAlt font-light text-slate-900 mb-16">
    What Our Clients Say
  </h3>

  {/* FADE EDGES */}

  {/* SLIDER */}
  <div className=" scrollbar-hide snap-x snap-mandatory md:animate-marquee hover:[animation-play-state:paused]">
    <div className="flex gap-6 md:gap-8 px-2 md:px-6 w-max">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="
            snap-center shrink-0
            w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw]
          "
        >
          <div
            className="
              h-full
              bg-white/60 backdrop-blur-xl
              border border-white
              rounded-[28px]
              p-8
              shadow-[0_20px_50px_rgba(0,0,0,0.1)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_70px_rgba(109,40,217,0.2)]
            "
          >
            {/* QUOTE MARK */}
            <span className="text-purple-600 font-bold text-xl">//</span>

            {/* TITLE */}
            <h4 className="mt-4 text-lg font-heading font-semibold text-slate-900">
              {t.title}
            </h4>

            {/* TEXT */}
            <p className="mt-4 text-slate-600 italic leading-relaxed">
              “{t.text}”
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>

      {/* SOCIAL BAR */}
    
    </section>
  );
};

export default OurWork;
