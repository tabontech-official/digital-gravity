// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Youtube,
//   Linkedin,
//   Twitter,
//   ArrowRight,
// } from "lucide-react";

// const Footer = () => {
//   const sections = [
//   {
//     title: "Overview",
//     links: ["About Us", "Services", "Our Work", "Contact Us"]
//   },
//   {
//     title: "Services",
//     links: [
//       "Web Development",
//       "Ecommerce Development",
//       "ERP Software",
//       "AI & Machine Learning",
//       "Cloud Solutions",
//       "Shopify Store Build & Redesign",
//       "Shopify Theme Customization"
//     ]
//   },
//   {
//     title: "Shopify Growth",
//     links: [
//       "Shopify SEO Optimization",
//       "Shopify Analytics & Tracking",
//       "Shopify Digital Branding",
//       "Shopify Business Strategy",
//       "Website Audit",
//       "Shopify Content Marketing",
//     ]
//   }
// ];

//   return (
//     <footer className="relative bg-[#010101] text-gray-400 py-24 px-6 overflow-hidden border-t border-white/5">
//       {/* Soft top glow */}
//       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-20">
//           {/* Brand / Newsletter */}
//           <div className="lg:col-span-4 space-y-10">
//             <div className="space-y-4">
//               <h2 className="text-2xl font-light text-white tracking-tight">
//                  <span className="font-light">NexaSoft</span>
//           <span className="font-bold text-purple-400">Solutions.</span>
//               </h2>
//               <p className="text-sm leading-relaxed max-w-xs">
//                 Crafting digital experiences that bridge imagination with
//                 next-gen technology.
//               </p>
//             </div>

//             {/* Newsletter */}
//             <div className="relative max-w-sm">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="
//                   w-full bg-white/5 border border-purple-500/20
//                   py-3 px-4 rounded-xl text-sm
//                   focus:outline-none focus:border-purple-500
//                   focus:ring-1 focus:ring-purple-500/40
//                   backdrop-blur-md transition
//                 "
//               />
//               <button
//                 className="
//                   absolute right-2 top-1.5
//                     bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
//                   text-white p-2 rounded-lg
//                   hover:shadow-lg hover:shadow-purple-500/30
//                   transition
//                 "
//               >
//                 <ArrowRight size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
//             {sections.map((section, idx) => (
//               <div key={idx} className="space-y-6">
//                 <h3 className="text-white text-xs font-semibold uppercase tracking-widest">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-4">
//                   {section.links.map((link, i) => (
//                     <li key={i}>
//                       <a
//                         href="#"
//                         className="
//                           text-sm inline-block
//                           hover:text-purple-400
//                           hover:translate-x-1
//                           transition-all duration-300
//                         "
//                       >
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-12" />

//         {/* Bottom bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
//           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14 text-center md:text-left">
//             <div>
//               <p className="text-xs font-medium text-white">
//                 DUBAI HEADQUARTERS
//               </p>
//               <p className="text-xs">Sheikh Zayed Road, UAE</p>
//             </div>
//             <div>
//               <p className="text-xs font-medium text-white">GET IN TOUCH</p>
//               <p className="text-xs">+971 4 242 1375</p>
//             </div>
//           </div>

//           {/* Social icons */}
//           <div className="flex gap-4">
//             {[Facebook, Instagram, Youtube, Linkedin, Twitter].map(
//               (Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="
//                     p-3 rounded-full
//                     bg-white/5 border border-purple-500/20
//                     text-gray-400
//                     hover:text-white
//                     hover:bg-gradient-to-br hover:from-[#6318C6] hover:via-[#8B22CD] hover:to-[#A526D1]
//                     hover:shadow-lg hover:shadow-purple-500/30
//                     transition-all duration-500
//                   "
//                 >
//                   <Icon size={18} />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Background text */}
//       <div className="absolute -bottom-12 left-0 w-full opacity-[0.025] pointer-events-none text-center select-none">
//         <span className="text-[15vw] font-black tracking-tighter text-white">
//           NEXASOFT
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Overview",
      links: ["About Us", "Services", "Our Work", "Contact Us"],
    },
    {
      title: "Services",
      links: [
        "Web Development",
        "Ecommerce Development",
        "ERP Software",
        "AI & Machine Learning",
        "Cloud Solutions",
        "Shopify Store Build & Redesign",
        "Shopify Theme Customization",
      ],
    },
    {
      title: "Shopify Growth",
      links: [
        "Shopify SEO Optimization",
        "Shopify Analytics & Tracking",
        "Shopify Digital Branding",
        "Shopify Business Strategy",
        "Website Audit",
        "Shopify Content Marketing",
      ],
    },
  ];

  return (
    <footer className="relative bg-[#010101] text-gray-400 py-24 px-6 overflow-hidden border-t border-white/5 font-body">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl tracking-tight text-white font-heading">
                <span className="font-light">NexaSoft</span>{" "}
                <span className="font-bold text-purple-400">Solutions</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-xs">
                Crafting digital experiences that bridge imagination with
                next-gen technology.
              </p>
            </div>

            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full bg-white/5 border border-white/10
                  py-3 pl-4 pr-12 rounded-xl text-sm text-white
                  placeholder:text-gray-500
                  focus:outline-none focus:border-purple-500
                  focus:ring-1 focus:ring-purple-500/40
                  backdrop-blur-md transition
                "
              />
              <button
                className="
                  absolute right-2 top-1/2 -translate-y-1/2
                  bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
                  text-white p-2 rounded-lg
                  hover:shadow-lg hover:shadow-purple-500/30
                  transition
                "
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-white text-xs font-semibold uppercase tracking-widest font-heading">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          text-sm inline-block
                          hover:text-purple-400
                          hover:translate-x-1
                          transition-all duration-300
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14 text-center md:text-left">
            <div>
              <p className="text-xs font-medium text-white">
                DUBAI HEADQUARTERS
              </p>
              <p className="text-xs">Sheikh Zayed Road, UAE</p>
            </div>
            <div>
              <p className="text-xs font-medium text-white">GET IN TOUCH</p>
              <p className="text-xs">+971 4 242 1375</p>
            </div>
          </div>

          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Linkedin, Twitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-3 rounded-full
                    bg-white/5 border border-white/10
                    text-gray-400
                    hover:text-white
                    hover:bg-gradient-to-br hover:from-[#6318C6] hover:via-[#8B22CD] hover:to-[#A526D1]
                    hover:shadow-lg hover:shadow-purple-500/30
                    transition-all duration-500
                  "
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 left-0 w-full opacity-[0.025] pointer-events-none text-center select-none">
        <span className="text-[15vw] font-black tracking-tighter text-white">
          NEXASOFT
        </span>
      </div>
    </footer>
  );
};

export default Footer;
