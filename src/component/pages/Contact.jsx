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
    <section className="min-h-screen bg-[#050505] text-white font-body px-6 md:px-16 py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
          <span className="text-xs uppercase tracking-[0.35em] text-gray-400 font-heading">
            Contact
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-headingAlt font-light leading-[1.1]">
          Let’s Build <br />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]">
            Something Exceptional
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
          Tell us about your idea. We’ll help you shape it into something
          beautiful, scalable, and impactful.
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
      >
        {["Name*", "Company / Organisation*", "Email*"].map((ph) => (
          <input
            key={ph}
            placeholder={ph}
            required
            className="
              w-full rounded-xl bg-[#0f0f0f]
              border border-white/10
              px-6 py-4
              text-gray-200 placeholder:text-gray-500
              focus:outline-none focus:border-purple-500
              focus:shadow-[0_0_15px_rgba(168,85,247,0.25)]
              transition
            "
          />
        ))}

        <input
          placeholder="Phone No*"
          required
          className="
            w-full rounded-xl bg-[#0f0f0f]
            border border-white/10
            px-6 py-4
            text-gray-200 placeholder:text-gray-500
            focus:outline-none focus:border-purple-500
            transition
          "
        />

        {/* Service Dropdown */}
        <div className="relative">
          <FiBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-400" />
          <select
            required
            className="
              w-full appearance-none rounded-xl
              bg-[#0f0f0f]
              border border-white/10
              pl-12 pr-12 py-4
              text-gray-400
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
          <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Timeline Dropdown */}
        <div className="relative">
          <FiClock className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-400" />
          <select
            required
            className="
              w-full appearance-none rounded-xl
              bg-[#0f0f0f]
              border border-white/10
              pl-12 pr-12 py-4
              text-gray-400
              focus:outline-none focus:border-purple-500
            "
          >
            <option value="">Project Timeline*</option>
            {timelines.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Budget */}
        <div className="md:col-span-2 space-y-4 mt-6">
          <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500 font-heading">
            <span>USD 1K</span>
            <span>USD 50K+</span>
          </div>

          <div className="relative">
            <div className="h-3 rounded-full bg-purple-500/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6318C6] via-[#8B22CD] to-[#A526D1]"
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
            <span className="font-semibold">${budget.toLocaleString()}</span>
            <span className="text-xs text-gray-400">Estimated budget</span>
          </div>
        </div>

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Tell us about your project"
          className="
            md:col-span-2 rounded-xl bg-[#0f0f0f]
            border border-white/10
            px-6 py-4
            text-gray-200 placeholder:text-gray-500
            focus:outline-none focus:border-purple-500
          "
        />

        {/* CTA */}
        <div className="md:col-span-2 mt-10">
          <button
            type="submit"
            className="
              px-16 py-4 rounded-full
              font-heading font-semibold text-sm uppercase tracking-[0.25em]
              bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
              hover:brightness-110 active:scale-95
              shadow-lg shadow-purple-900/40
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
