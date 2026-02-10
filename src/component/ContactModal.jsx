import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export const ContactModal = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState(10000);

  const countries = [
    { name: "USA", code: "+1", iso: "us" },
    { name: "UK", code: "+44", iso: "gb" },
    { name: "UAE", code: "+971", iso: "ae" },
    { name: "Pakistan", code: "+92", iso: "pk" },
    { name: "India", code: "+91", iso: "in" },
  ];

  const [selected, setSelected] = useState(countries[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-body">
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/60 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative w-full max-w-[1100px]
              bg-white/70 backdrop-blur-2xl
              border border-white
              rounded-[2.5rem]
              p-10 md:p-16
              shadow-[0_30px_80px_rgba(0,0,0,0.2)]
              overflow-y-auto max-h-[95vh]
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-10 h-10 rounded-full
                bg-white/70 backdrop-blur-md
                border border-white
                flex items-center justify-center
                text-slate-700
                hover:text-purple-700
                hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]
                transition
              "
            >
              <FiX />
            </button>

            {/* HEADER */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                <span className="text-xs uppercase tracking-[0.35em] text-purple-700 font-heading font-semibold">
                  Let’s Get Started
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-headingAlt font-light leading-[1.1] text-slate-900">
                This Could Be the Start of <br />
                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-600">
                  Something Incredible
                </span>
              </h2>
            </div>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* INPUTS */}
              {["Name*", "Company / Organisation*", "Email*"].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  className="
                    w-full rounded-xl
                    bg-white/60 backdrop-blur-xl
                    border border-slate-300/70
                    px-6 py-4
                    text-slate-900 placeholder:text-slate-500
                    focus:outline-none
                    focus:border-purple-500
                    focus:ring-2 focus:ring-purple-500/20
                    transition
                  "
                />
              ))}

              {/* PHONE */}
              <div className="relative">
                <div
                  className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  flex items-center gap-2
                  bg-white/70 backdrop-blur-md
                  border border-slate-300/60
                  rounded-lg px-2 py-1
                "
                >
                  <img
                    src={`https://flagcdn.com/w20/${selected.iso}.png`}
                    className="w-5 h-3 rounded-sm"
                    alt={selected.name}
                  />

                  <select
                    value={selected.code}
                    onChange={(e) =>
                      setSelected(
                        countries.find((c) => c.code === e.target.value),
                      )
                    }
                    className="bg-transparent text-sm text-slate-700 outline-none cursor-pointer"
                  >
                    {countries.map((c, idx) => (
                      <option key={idx} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  placeholder="Phone No*"
                  className="
                    w-full rounded-xl
                    bg-white/60 backdrop-blur-xl
                    border border-slate-300/70
                    pl-32 pr-6 py-4
                    text-slate-900 placeholder:text-slate-500
                    focus:outline-none
                    focus:border-purple-500
                    focus:ring-2 focus:ring-purple-500/20
                    transition
                  "
                />
              </div>

              {/* SELECTS */}
              {["Service you are interested in*", "Project Timeline*"].map(
                (label) => (
                  <div key={label} className="relative">
                    <select
                      className="
                        w-full appearance-none
                        rounded-xl
                        bg-white/60 backdrop-blur-xl
                        border border-slate-300/70
                        px-6 py-4
                        text-slate-700
                        focus:outline-none focus:border-purple-500
                      "
                    >
                      <option>{label}</option>
                    </select>
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
                      ▼
                    </span>
                  </div>
                ),
              )}

              {/* BUDGET */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs uppercase tracking-widest text-slate-500 font-heading">
                  <span>USD 1K</span>
                  <span>USD 50K+</span>
                </div>

                <div className="relative">
                  <div className="h-3 rounded-full bg-purple-500/20 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600"
                      style={{ width: `${(budget / 50000) * 100}%` }}
                    />
                  </div>

                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    step={1000}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-slate-900">
                    ${budget.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500">
                    Estimated budget
                  </span>
                </div>
              </div>

              {/* MESSAGE */}
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="
                  md:col-span-2 rounded-xl
                  bg-white/60 backdrop-blur-xl
                  border border-slate-300/70
                  px-6 py-4
                  text-slate-900 placeholder:text-slate-500
                  focus:outline-none focus:border-purple-500
                "
              />

              {/* CTA */}
              <div className="md:col-span-2 mt-6">
                <button
                  className="
      group relative
      px-10 py-4 rounded-2xl

      bg-white/60
      border border-white
      shadow-[0_4px_30px_rgba(0,0,0,0.1)]

      text-slate-900 font-heading font-semibold text-sm
      transition-all duration-300

      hover:bg-white/75
      hover:shadow-[0_8px_40px_rgba(109,40,217,0.25)]
      hover:text-purple-700
      active:scale-95
    "
                  style={{
                    backdropFilter: "blur(11.4px)",
                    WebkitBackdropFilter: "blur(11.4px)",
                  }}
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
