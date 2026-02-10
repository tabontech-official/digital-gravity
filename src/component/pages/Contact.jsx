import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiBriefcase, FiClock } from "react-icons/fi";

const Contact = () => {
  const [budget, setBudget] = useState(10000);

  const serviceLinks = [
    [
      "Web Development",
      "Ecommerce Development",
      "ERP Software",
      "AI & Machine Learning",
      "Cloud Solutions",
      "Shopify Store Build & Redesign",
      "Shopify Theme Customization",
      "Shopify Store Migration",
      "Shopify Troubleshooting & Support",
      "Shopify Performance & Speed Optimization",
      "Shopify Custom Apps & Integrations",
      "Shopify Product & Collection Setup",
      "Shopify Custom Domain Setup",
    ],
    [
      "Shopify SEO Optimization",
      "Shopify Conversion Rate Optimization",
      "Shopify Analytics & Tracking",
      "Shopify Sales Channel Setup",
      "Shopify Email Marketing",
      "Shopify Website & Marketing Content",
      "Shopify Product Descriptions",
      "Shopify Content Marketing",
      "Shopify Social Media Marketing",
      "Shopify Search Engine Advertising",
      "Shopify Digital Branding & Visual Identity",
      "Shopify Business Strategy Guidance",
      "Shopify Website Audit & Optimization Strategy",
    ],
  ];

  const timelines = [
    "Immediately",
    "Within 1 Month",
    "1 – 3 Months",
    "3 – 6 Months",
    "6+ Months",
    "Not Sure Yet",
  ];

  return (
    <section className="min-h-screen font-body px-3 md:px-16 py-10 relative overflow-hidden">

   

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
          <span className="text-xs uppercase tracking-[0.35em] text-purple-700 font-heading font-semibold">
            Contact
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-headingAlt font-light leading-[1.1] text-slate-900">
          Let’s Build <br />
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-600">
            Something Exceptional
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
          Tell us about your idea. We’ll help you shape it into something
          beautiful, scalable, and impactful.
        </p>
      </div>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 relative z-10"
      >
        {["Name*", "Company / Organisation*", "Email*"].map((ph) => (
          <input
            key={ph}
            placeholder={ph}
            required
            className="
              w-full rounded-xl
              bg-white/60 backdrop-blur-xl
              border border-white
              px-6 py-4
              text-slate-900 placeholder:text-slate-500
              focus:outline-none focus:border-purple-500
              focus:shadow-[0_0_15px_rgba(124,58,237,0.25)]
              transition
            "
          />
        ))}

        <input
          placeholder="Phone No*"
          required
          className="
            w-full rounded-xl
            bg-white/60 backdrop-blur-xl
            border border-white
            px-6 py-4
            text-slate-900 placeholder:text-slate-500
            focus:outline-none focus:border-purple-500
            transition
          "
        />

        {/* SERVICE DROPDOWN */}
        <div className="relative">
          <FiBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-600" />
          <select
            required
            className="
              w-full appearance-none rounded-xl
              bg-white/60 backdrop-blur-xl
              border border-white
              pl-12 pr-12 py-4
              text-slate-700
              focus:outline-none focus:border-purple-500
            "
          >
            <option value="">Service you are interested in*</option>

            <optgroup label="Core & Shopify Development">
              {serviceLinks[0].map((service) => (
                <option key={service}>{service}</option>
              ))}
            </optgroup>

            <optgroup label="Marketing & Growth">
              {serviceLinks[1].map((service) => (
                <option key={service}>{service}</option>
              ))}
            </optgroup>
          </select>
          <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500" />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <FiClock className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-600" />
          <select
            required
            className="
              w-full appearance-none rounded-xl
              bg-white/60 backdrop-blur-xl
              border border-white
              pl-12 pr-12 py-4
              text-slate-700
              focus:outline-none focus:border-purple-500
            "
          >
            <option value="">Project Timeline*</option>
            {timelines.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500" />
        </div>

        {/* BUDGET */}
        <div className="md:col-span-2 space-y-4 mt-6">
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
            <span className="text-xs text-slate-500">Estimated budget</span>
          </div>
        </div>

        <textarea
          rows={5}
          placeholder="Tell us about your project"
          className="
            md:col-span-2 rounded-xl
            bg-white/60 backdrop-blur-xl
            border border-white
            px-6 py-4
            text-slate-900 placeholder:text-slate-500
            focus:outline-none focus:border-purple-500
          "
        />

        {/* SUBMIT */}
        <div className="md:col-span-2 mt-10">
          <button
            type="submit"
            className="
              px-16 py-4 rounded-full
              font-heading font-semibold text-sm uppercase tracking-[0.25em]
              bg-white/70 backdrop-blur-xl
              border border-white
              text-purple-700
              hover:bg-white/90
              hover:shadow-[0_12px_40px_rgba(124,58,237,0.3)]
              active:scale-95
              transition
            "
          >
            Submit Enquiry
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
