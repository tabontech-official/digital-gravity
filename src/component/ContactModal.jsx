import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export const ContactModal = ({ isOpen, onClose }) => {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 font-body">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative w-full max-w-[1100px]
              bg-[#050505]
              border border-white/10
              rounded-[2.5rem]
              p-10 md:p-16
              shadow-[0_0_60px_rgba(168,85,247,0.25)]
              overflow-y-auto max-h-[95vh]
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-10 h-10 rounded-full
                border border-purple-500/30
                flex items-center justify-center
                text-purple-300
                hover:bg-purple-500/20 hover:text-white
                hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
                transition
              "
            >
              <FiX />
            </button>

            {/* Header */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                <span className="text-xs uppercase tracking-[0.35em] text-gray-400 font-heading">
                  Let’s Get Started
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-headingAlt font-light leading-[1.1] tracking-tight text-white">
                This Could Be the Start of <br />
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]">
                  Something Incredible
                </span>
              </h2>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Name*",
                "Company / Organisation*",
                "Email*",
              ].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  className="
                    w-full rounded-xl
                    bg-[#0f0f0f]
                    border border-white/10
                    px-6 py-4
                    text-gray-200
                    placeholder:text-gray-500
                    focus:outline-none focus:border-purple-500
                    focus:shadow-[0_0_15px_rgba(168,85,247,0.25)]
                    transition
                  "
                />
              ))}

            <div className="relative">
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3">
    {/* FLAG */}
    <img
      src={`https://flagcdn.com/w20/${selected.iso}.png`}
      className="w-5 h-3 rounded-sm opacity-90"
      alt={selected.name}
    />

    {/* CODE */}
    <span className="text-sm font-body text-gray-200 tracking-wide">
      {selected.code}
    </span>

    {/* CLEAN DIVIDER */}
    <div className="h-5 w-px bg-white/15 mx-2" />

    {/* HIDDEN SELECT */}
    <select
      value={selected.code}
      onChange={(e) =>
        setSelected(
          countries.find((c) => c.code === e.target.value),
        )
      }
      className="
        absolute inset-0 opacity-0 cursor-pointer
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
      w-full
      bg-[#0f0f0f]
      border border-white/10
      rounded-xl
      pl-28 pr-6 py-4

      font-body text-[15px] text-gray-200
      placeholder:text-gray-500

      focus:outline-none
      focus:border-purple-500
      focus:ring-1 focus:ring-purple-500/30
      focus:shadow-[0_0_15px_rgba(168,85,247,0.25)]

      transition
    "
  />
</div>

              {/* Selects */}
              {["Service you are interested in*", "Project Timeline*"].map(
                (label) => (
                  <div key={label} className="relative">
                    <select
                      className="
                        w-full appearance-none
                        rounded-xl
                        bg-[#0f0f0f]
                        border border-white/10
                        px-6 py-4
                        text-gray-400
                        focus:outline-none focus:border-purple-500
                        transition
                      "
                    >
                      <option>{label}</option>
                    </select>
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
                      ▼
                    </span>
                  </div>
                )
              )}

              {/* Budget */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500 font-heading">
                  <span>USD 5K</span>
                  <span>USD 100K+</span>
                </div>

                <div className="relative h-3 rounded-full bg-purple-500/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6318C6] via-[#8B22CD] to-[#A526D1]" />
                </div>

                <p className="text-sm text-gray-400 max-w-sm">
                  Ballpark budgets help us align expectations. Precision comes later.
                </p>
              </div>

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="
                  w-full rounded-xl
                  bg-[#0f0f0f]
                  border border-white/10
                  px-6 py-4
                  text-gray-200
                  placeholder:text-gray-500
                  focus:outline-none focus:border-purple-500
                  transition
                "
              />

              {/* CTA */}
              <div className="md:col-span-2 mt-6">
                <button
                  className="
                    inline-flex items-center justify-center
                    px-14 py-4 rounded-full
                    font-heading font-semibold text-sm uppercase tracking-[0.25em]
                    bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
                    hover:brightness-110
                    active:scale-95
                    shadow-lg shadow-purple-900/40
                    transition
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
