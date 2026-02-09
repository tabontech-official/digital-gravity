import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogsData from "../data/blogsData";

import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ContactModal } from "./ContactModal";

const BlogsPage = () => {
  const navigate = useNavigate();
  const blogs = blogsData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetQuote = () => {
    window.innerWidth < 640 ? navigate("/contact") : setIsModalOpen(true);
  };

  return (
    <div className="bg-[#050505] text-white font-body">
      {/* HERO */}
      <section className="py-32 px-6">
        <div className="max-w-[1440px] mx-auto border-b border-white/10 pb-12">
          <span className="text-purple-400 text-xs tracking-[0.25em] uppercase">
            Our Expertise
          </span>

          {/* SERVICE-FOCUSED H1 */}
          <h1 className="text-4xl md:text-6xl font-light mt-6 max-w-4xl">
            Insights on Web, Ecommerce & Shopify Growth
          </h1>

          {/* SEO SERVICE TEXT */}
          <p className="text-gray-400 max-w-3xl mt-6">
            Explore expert blogs by NexaSoft Solutions covering web development,
            ecommerce solutions, Shopify SEO optimization, website audits and
            content marketing strategies designed to grow your business online.
          </p>
        </div>
      </section>

      {/* FEATURED BLOG */}
      <section className="px-6 mb-32">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 bg-[#0f0f0f] p-12 rounded-[32px]">
          <div>
            <span className="text-purple-400 text-xs uppercase">
              Featured Service Insight
            </span>
            <h2 className="text-3xl md:text-4xl font-light mt-6 mb-6">
              {blogs[0].title}
            </h2>
            <p className="text-gray-400 mb-10">{blogs[0].excerpt}</p>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className="px-8 py-3 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
            >
              Read Article
            </Link>
          </div>

          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="rounded-[24px] object-cover"
          />
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-32">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="bg-[#0f0f0f] border border-white/10 rounded-[32px] overflow-hidden hover:border-purple-500/30 transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="aspect-[16/10] object-cover"
              />
              <div className="p-8">
                <span className="text-xs text-purple-400 uppercase">
                  {blog.category}
                </span>
                <h3 className="text-xl mt-4 mb-3">{blog.title}</h3>
                <p className="text-gray-400 text-sm">{blog.excerpt}</p>
                <div className="mt-6 flex justify-between text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={handleGetQuote}
          className="font-sans bg-gradient-to-br from-[#6318C6] via-[#8B22CD] to-[#A526D1]
                     text-white py-8 px-3 rounded-l-[20px]
                     shadow-[0_0_30px_rgba(139,44,245,0.3)] transition-all"
        >
          <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase">
            Get A Quote!
          </span>
        </button>
      </div>

      {/* SOCIALS */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
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
              <Icon size={14} />
            </a>
          ),
        )}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BlogsPage;
