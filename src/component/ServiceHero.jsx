import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";
import { useState } from "react";

const ServiceHero = () => {
  const { service } = useParams();
  const data = servicesData[service];

  const [budget, setBudget] = useState(20000);

  if (!data) return null;

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-purple-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-sm font-medium text-purple-400">
                {data.tag}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              {data.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl">
              {data.description}
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Have any questions?
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-transparent border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-transparent border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />

              <input
                type="tel"
                placeholder="Phone No*"
                className="w-full bg-transparent border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />

              {/* Budget */}
              <div className="pt-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>AED 5K</span>
                  <span>AED 50K+</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full accent-purple-600"
                />
                <p className="mt-2 text-sm text-purple-400">
                  Selected Budget: AED {budget}
                </p>
              </div>

              <textarea
                rows="4"
                placeholder="Tell us about your project"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
              />

              <button className="w-full bg-purple-600 py-3 rounded-full text-sm font-medium text-white hover:bg-purple-500 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
