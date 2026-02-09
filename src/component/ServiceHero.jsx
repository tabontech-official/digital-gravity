import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import { useState } from "react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiArrowDown, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ContactModal } from "./ContactModal";

const ServiceHero = () => {
  const { service } = useParams();
  const data = servicesData[service];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetQuote = () => {
    if (window.innerWidth < 640) {
      navigate("/contact"); // mobile
    } else {
      setIsModalOpen(true); // desktop
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
        Service not found
      </div>
    );
  }

  const section = data.techStackSection;

  const [budget, setBudget] = useState(20000);
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("web-development");
  const categoryData = {
    "web-development": {
      title: "Digital Uplift for DIFC",
      desc: "By utilizing our 10+ years of experience, we developed DIFC's portal with a sleek design and seamless UX, enabling quick hassle-free management and operations. As a result, they got 20% higher conversions, 100% more security with Mysql and Azure.",
      image:
        "https://cdn.shopify.com/s/files/1/0654/1210/4348/files/difc-website.gif?v=1769150548",
    },
    "ecommerce-development": {
      title: "Global E-retail Transformation",
      desc: "We built a high-performance headless commerce engine for a global fashion brand. This migration resulted in a 40% decrease in page load times and a 15% increase in average order value across GCC markets.",
      image:
        "https://cdn.shopify.com/s/files/1/0654/1210/4348/files/difc-website.gif?v=1769150548",
    },
    "erp-software": {
      title: "Supply Chain Automation",
      desc: "Custom ERP implementation for a leading logistics provider in Dubai. Integrated real-time tracking and automated inventory management, reducing manual entry errors by 65%.",
      image:
        "https://cdn.shopify.com/s/files/1/0654/1210/4348/files/difc-website.gif?v=1769150548",
    },
   
    "cloud-solutions": {
      title: "Azure Enterprise Migration",
      desc: "Seamless cloud migration of legacy infrastructure for a financial institution. Enhanced security protocols and established a 99.99% uptime architecture using multi-region failovers.",
      image:
        "https://cdn.shopify.com/s/files/1/0654/1210/4348/files/difc-website.gif?v=1769150548",
    },
    "shopify-store-build-redesign": {
      title: "Luxury Brand Shopify Launch",
      desc: "A complete visual overhaul and Shopify Plus migration for a luxury jewelry brand. Focused on high-fidelity visual storytelling and a conversion-optimized checkout flow.",
      image:
        "https://cdn.shopify.com/s/files/1/0654/1210/4348/files/difc-website.gif?v=1769150548",
    },
  };

  const commonTechStack = [
    {
      name: "TensorFlow Lite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      color: "#ff6f00",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776ab",
    },
    {
      name: "AI / Machine Learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
      color: "#a855f7",
    },

    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#68a063",
    },
    {
      name: "WebSockets",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      color: "#ffffff",
    },

    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#ffffff",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "#a855f7",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#f7df1e",
    },

    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb",
    },

    {
      name: "Shopify",
      icon: "https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png",
      color: "#95bf47",
    },
    {
      name: "Shopify Liquid",
      icon: "https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png",
      color: "#95bf47",
    },
  ];
  const stats = [
    { value: "265+", label: "Clients" },
    { value: "100+", label: "Custom Apps Delivered" },
    { value: "10+ ", label: "Years of Experience" },
  ];
  const countries = [
    { name: "Afghanistan", code: "+93", iso: "af" },
    { name: "Albania", code: "+355", iso: "al" },
    { name: "Algeria", code: "+213", iso: "dz" },
    { name: "Andorra", code: "+376", iso: "ad" },
    { name: "Angola", code: "+244", iso: "ao" },
    { name: "Argentina", code: "+54", iso: "ar" },
    { name: "Armenia", code: "+374", iso: "am" },
    { name: "Australia", code: "+61", iso: "au" },
    { name: "Austria", code: "+43", iso: "at" },
    { name: "Azerbaijan", code: "+994", iso: "az" },
    { name: "Bahrain", code: "+973", iso: "bh" },
    { name: "Bangladesh", code: "+880", iso: "bd" },
    { name: "Belgium", code: "+32", iso: "be" },
    { name: "Brazil", code: "+55", iso: "br" },
    { name: "Canada", code: "+1", iso: "ca" },
    { name: "China", code: "+86", iso: "cn" },
    { name: "Egypt", code: "+20", iso: "eg" },
    { name: "France", code: "+33", iso: "fr" },
    { name: "Germany", code: "+49", iso: "de" },
    { name: "India", code: "+91", iso: "in" },
    { name: "Indonesia", code: "+62", iso: "id" },
    { name: "Iran", code: "+98", iso: "ir" },
    { name: "Iraq", code: "+964", iso: "iq" },
    { name: "Ireland", code: "+353", iso: "ie" },
    { name: "Italy", code: "+39", iso: "it" },
    { name: "Japan", code: "+81", iso: "jp" },
    { name: "Jordan", code: "+962", iso: "jo" },
    { name: "Kenya", code: "+254", iso: "ke" },
    { name: "Kuwait", code: "+965", iso: "kw" },
    { name: "Malaysia", code: "+60", iso: "my" },
    { name: "Mexico", code: "+52", iso: "mx" },
    { name: "Netherlands", code: "+31", iso: "nl" },
    { name: "New Zealand", code: "+64", iso: "nz" },
    { name: "Nigeria", code: "+234", iso: "ng" },
    { name: "Norway", code: "+47", iso: "no" },
    { name: "Oman", code: "+968", iso: "om" },
    { name: "Pakistan", code: "+92", iso: "pk" },
    { name: "Philippines", code: "+63", iso: "ph" },
    { name: "Portugal", code: "+351", iso: "pt" },
    { name: "Qatar", code: "+974", iso: "qa" },
    { name: "Russia", code: "+7", iso: "ru" },
    { name: "Saudi Arabia", code: "+966", iso: "sa" },
    { name: "Singapore", code: "+65", iso: "sg" },
    { name: "South Africa", code: "+27", iso: "za" },
    { name: "South Korea", code: "+82", iso: "kr" },
    { name: "Spain", code: "+34", iso: "es" },
    { name: "Sri Lanka", code: "+94", iso: "lk" },
    { name: "Sweden", code: "+46", iso: "se" },
    { name: "Switzerland", code: "+41", iso: "ch" },
    { name: "Thailand", code: "+66", iso: "th" },
    { name: "Turkey", code: "+90", iso: "tr" },
    { name: "UAE", code: "+971", iso: "ae" },
    { name: "UK", code: "+44", iso: "gb" },
    { name: "USA", code: "+1", iso: "us" },
    { name: "Vietnam", code: "+84", iso: "vn" },
  ];
  const [selected, setSelected] = useState(countries[0]);

  return (
    <>
      <section className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden text-white">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-md brightness-[0.45]"
            style={{ backgroundImage: `url(${data.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-l from-purple-900/40 via-transparent to-transparent" />
        </div>

        {/* LEFT SOCIAL */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
          {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="
            relative w-9 h-9 rounded-full
            bg-black/70
            border border-purple-500/20
            flex items-center justify-center
            text-gray-400
            transition-all duration-300
            hover:text-white
            hover:border-purple-500
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          "
              >
                <Icon size={14} />
              </a>
            ),
          )}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">
            {/* TEXT */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
                <span className="text-xs uppercase tracking-wide text-gray-300">
                  {data.tag}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headingAlt leading-[1.15]  mb-6">
                {(() => {
                  const words = data.title.split(" ");
                  const mid = Math.ceil(words.length / 2);
                  return (
                    <>
                      <span className="block">
                        {words.slice(0, mid).join(" ")}
                      </span>
                      <span className="block">
                        {words.slice(mid).join(" ")}
                      </span>
                    </>
                  );
                })()}
              </h1>

              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* FORM */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[480px] bg-black/30 backdrop-blur-md border border-white/20 rounded-[40px] p-8 md:p-12 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-8">
                  Have any questions?
                </h3>

                <div className="space-y-5">
                  {["Name*", "Email*"].map((ph, i) => (
                    <input
                      key={i}
                      placeholder={ph}
                      className="
                  w-full bg-transparent
                  border border-white/20
                  rounded-xl px-6 py-4
                  text-white placeholder-gray-400
                  focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40
                  transition
                "
                    />
                  ))}

                  {/* PHONE */}
                  <div className="relative">
                    {/* COUNTRY SELECT */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3">
                      {/* FLAG */}
                      <img
                        src={`https://flagcdn.com/w20/${selected.iso}.png`}
                        className="w-5 h-3 rounded-sm"
                        alt={selected.name}
                      />

                      {/* CODE */}
                      <span className="text-sm text-white">
                        {selected.code}
                      </span>

                      {/* CLEAN DIVIDER */}
                      <div className="h-5 w-px bg-white/20 mx-2" />

                      {/* HIDDEN SELECT */}
                      <select
                        value={selected.code}
                        onChange={(e) =>
                          setSelected(
                            countries.find((c) => c.code === e.target.value),
                          )
                        }
                        className="
        absolute inset-0 opacity-0 cursor-pointer bg-gray-800
      "
                      >
                        {countries.map((c, idx) => (
                          <option key={idx} value={c.code}>
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* PHONE INPUT */}
                    <input
                      placeholder="Phone No*"
                      className="
      w-full bg-transparent
      border border-white/20
      rounded-xl pl-28 pr-6 py-4
      text-white placeholder-gray-400
      focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40
      transition
    "
                    />
                  </div>

                  {/* BUDGET */}
                  <div>
                    {/* LABELS */}
                    <div className="flex justify-between text-[10px] uppercase tracking-wider mb-3 text-gray-300">
                      <span>USD 1K</span>
                      <span className="text-purple-400 font-bold">
                        Budget: {Number(budget).toLocaleString()}
                      </span>
                      <span>USD 50K</span>
                    </div>

                    {/* SLIDER */}
                    <div className="relative h-2 rounded-full bg-white/10">
                      {/* PROGRESS */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full bg-purple-500 transition-all duration-300"
                        style={{ width: `${(budget / 50000) * 100}%` }}
                      />

                      {/* RANGE INPUT */}
                      <input
                        type="range"
                        min="5000"
                        max="50000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="
        absolute inset-0 w-full
        bg-transparent appearance-none
        cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:w-5
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-purple-500
        [&::-webkit-slider-thumb]:shadow-[0_0_15px_#a855f7]
        [&::-webkit-slider-thumb]:border-2
        [&::-webkit-slider-thumb]:border-[#050505]
      "
                      />
                    </div>
                  </div>

                  <textarea
                    rows="2"
                    placeholder="Tell us about your project"
                    className="
                w-full bg-transparent
                border border-white/20
                rounded-2xl px-6 py-4
                text-white placeholder-gray-400
                focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40
                resize-none transition
              "
                  />

                  {/* PRIMARY CTA */}
                  <button
                    className="
                w-full
                bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
                py-4 rounded-full
                text-sm font-semibold
                hover:brightness-110
                active:scale-95
                transition-all
                shadow-[0_10px_30px_rgba(139,44,245,0.35)]
              "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT */}
        <div className="fixed right-6 bottom-40 hidden xl:flex flex-col gap-3 z-40">
          {[FaWhatsapp, HiOutlineMail, HiOutlinePhone].map((Icon, i) => (
            <div
              key={i}
              className="
          w-9 h-9 rounded-full
          bg-black/70
          border border-purple-500/20
          flex items-center justify-center
          text-gray-400
          hover:text-white hover:border-purple-500
          hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          transition
        "
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </section>

      {section && (
        <section className="bg-[#050505] py-32 relative overflow-hidden font-body text-white">
          <div className="max-w-[1440px] mx-auto px-6  grid lg:grid-cols-2 gap-20 relative z-10">
            {/* LEFT HEADING */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight tracking-tight">
                {section.heading}
              </h2>
            </div>

            {/* RIGHT ACCORDION */}
            <div className="flex flex-col">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="
              group
              border-b border-white/10
              py-8
              cursor-pointer
              transition-all duration-500
              hover:border-purple-500/30
            "
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* TITLE ROW */}
                  <div className="flex items-center justify-between gap-8">
                    <h3
                      className="
                  text-xl md:text-2xl
                  font-heading font-medium
                  text-gray-400
                  group-hover:text-white
                  transition-colors
                "
                    >
                      {item.title}
                    </h3>

                    {/* ARROW */}
                    <div
                      className={`
                  w-9 h-9 flex items-center justify-center
                  rounded-full
                  border border-white/10
                  text-gray-400
                  transition-all duration-300
                  ${
                    active === i
                      ? "rotate-180 border-purple-500/40 text-purple-300 shadow-[0_0_10px_#a855f7]"
                      : "group-hover:border-purple-500/30 group-hover:text-white"
                  }
                `}
                    >
                      <FiArrowDown className="text-sm" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      active === i
                        ? "max-h-40 opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute  bottom-0 left-0 w-full h-px bg-white/10 " />
        </section>
      )}

      <section className="bg-[#050505] py-24 text-white relative font-body">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gray-400">
                  Our Work
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-headingAlt font-light leading-tight">
                10+ Years Exp but <br /> Countless Innovations
              </h2>
            </div>

            {/* PRIMARY CTA */}
            <button
              className="
          font-heading
          bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
          text-white
          px-10 py-3.5
          rounded-full
          text-sm font-semibold
          shadow-[0_10px_30px_rgba(139,44,245,0.35)]
          hover:brightness-110
          active:scale-95
          transition-all
        "
            >
              View More
            </button>
          </div>

          {/* Tabs */}
        <div className="relative mb-12 md:mb-20">
  {/* Mobile Fade Mask: Helps indicate more content to the right */}
  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none md:hidden" />

  <div 
    className="
      flex items-center 
      gap-x-8 md:gap-x-10 
      pb-4 md:pb-8 
      border-b border-white/5 
      font-heading
      /* Mobile: Single line scrolling */
      overflow-x-auto 
      whitespace-nowrap 
      scrollbar-hide 
      snap-x snap-mandatory
    "
  >
    {Object.keys(categoryData).map((key) => {
      const isActive = activeTab === key;
      return (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`
            group flex items-center gap-2 
            text-base md:text-lg capitalize
            transition-all duration-300
            snap-start scroll-ml-6
            flex-shrink-0
            ${isActive ? "text-white font-medium" : "text-gray-500 hover:text-gray-300"}
          `}
        >
          <FiChevronRight
            className={`
              transition-all duration-300
              ${
                isActive
                  ? "opacity-100 translate-x-0 text-purple-400"
                  : "opacity-0 -translate-x-2 w-0" /* Collapse width when hidden */
              }
            `}
          />
          <span className={`${isActive ? "translate-x-0" : "-translate-x-2 md:translate-x-0"} transition-transform duration-300`}>
             {key.replace(/-/g, " ")}
          </span>
        </button>
      );
    })}
  </div>
</div>

          {/* Content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-500">
            {/* LEFT */}
            <div className="lg:col-span-5 space-y-10 animate-fadeIn">
              <h3 className="text-4xl md:text-5xl font-headingAlt font-light leading-tight">
                {categoryData[activeTab].title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg max-w-lg font-body">
                {categoryData[activeTab].desc}
              </p>

              <div className="space-y-4">
                <h4 className="text-6xl md:text-7xl font-headingAlt font-light text-white">
                  75%
                </h4>
                <p className="text-gray-400 text-lg leading-snug max-w-[250px] font-body">
                  increase in online interaction and service accessibility.
                </p>
              </div>

              {/* SECONDARY CTA (same theme, smaller) */}
              <button
                className="
            group flex items-center gap-3
            font-heading
            bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
            px-8 py-4
            rounded-full
            text-sm font-semibold
            hover:brightness-110
            active:scale-95
            transition-all
            shadow-[0_8px_24px_rgba(139,44,245,0.3)]
          "
              >
                View Case Study
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-7 relative group">
              <div className="rounded-[45px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 shadow-2xl">
                <div className="relative overflow-hidden rounded-[32px]">
                  <img
                    key={activeTab}
                    src={categoryData[activeTab].image}
                    alt={categoryData[activeTab].title}
                    className="w-full h-[450px] lg:h-[550px] object-cover transition-all duration-700 ease-out group-hover:scale-105 animate-slideUp"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-purple-600/10 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

     <section className="bg-[#050505] py-16 md:py-24 text-white font-body overflow-hidden">
  <div className="container mx-auto px-6 lg:px-16 border-t border-white/10 pt-12 md:pt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
      
      {/* CASE STUDY CARD */}
      {[
        {
          title: "Engineered DP World for Global Reach",
          img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
          stat: "120%",
          desc: "Our team of 50+ web development experts partnered with DP World to engineer a high-performance, customer-focused website.",
          sub: "A surge in website visitors during key events."
        },
        {
          title: "Sephora – Beauty brand, Powered by Tech",
          img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
          stat: "110%",
          desc: "Our designers and developers built a sleek, user-centric eCommerce experience for Sephora delivering mobile optimization.",
          sub: "Increase in online shopping and retail inquiries."
        }
      ].map((item, index) => (
        <div key={index} className="group cursor-pointer flex flex-col">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] mb-6 md:mb-8 bg-[#111] aspect-[4/3] border border-white/5">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Content */}
          <div className="px-1 md:px-2 flex-grow space-y-4 md:space-y-6">
            <h3 className="text-3xl lg:text-5xl font-headingAlt font-light leading-[1.1] tracking-tight transition-colors group-hover:text-purple-400">
              {item.title}
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-body line-clamp-3 md:line-clamp-none">
              {item.desc}
            </p>

            {/* Stats & CTA Container */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-headingAlt font-light text-white">
                  {item.stat}
                </span>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] max-w-[120px] leading-tight">
                  {item.sub}
                </p>
              </div>

              <button
                className="
                  w-full sm:w-auto
                  font-heading
                  bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
                  px-8 py-4 sm:py-3 rounded-full
                  text-sm font-semibold text-white
                  hover:brightness-110
                  active:scale-95
                  transition-all
                  shadow-[0_8px_24px_rgba(139,44,245,0.25)]
                  whitespace-nowrap
                "
              >
                View Case Study
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
      <section className="bg-[#050505] py-24 text-white relative overflow-hidden font-body">
        <div className="container mx-auto px-6  text-center relative z-10 border-t border-white/10 pt-12">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-headingAlt font-light mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            {data.techStacktitle} <br />
            <span className="opacity-80">Technology Stack</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-20 leading-relaxed font-body">
            {data.techStackDesc}
          </p>

          {/* Slider */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-10 animate-techSlider hover:[animation-play-state:paused]">
              {[...commonTechStack, ...commonTechStack].map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-4 shrink-0"
                >
                  {/* Icon Card */}
                  <div
                    className="
                relative
                px-8 py-7
                rounded-3xl
                bg-[#0f0f0f]
                border border-white/10
                flex items-center justify-center
                transition-all duration-500
                hover:-translate-y-2
                hover:border-purple-500/40
              "
                    style={{
                      boxShadow: `0 0 30px ${tech.color}20`,
                    }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="
                  w-10 h-10 md:w-12 md:h-12
                  object-contain
                  transition-all duration-500
                  opacity-80 saturate-75
                  group-hover:opacity-100
                  group-hover:saturate-150
                  group-hover:scale-110
                "
                    />

                    {/* Accent Bar */}
                    <div
                      className="
                  absolute -bottom-2 left-1/2 -translate-x-1/2
                  w-1/2 h-[3px]
                  rounded-full
                  opacity-60
                  transition-all duration-500
                  group-hover:opacity-100
                "
                      style={{
                        backgroundColor: tech.color,
                        boxShadow: `0 0 18px ${tech.color}`,
                      }}
                    />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-body tracking-wide text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4  blur-[120px] rounded-full pointer-events-none" />
      </section>

      <div className="relative bg-gray-100">
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <button
            onClick={handleGetQuote}
            className="font-sans    bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1] text-white py-8 px-3 rounded-l-[20px] shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all group"
          >
            <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Get A Quote!
            </span>
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ServiceHero;
