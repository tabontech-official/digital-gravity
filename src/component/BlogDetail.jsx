import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogsData from "../data/blogsData";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import {
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ContactModal } from "./ContactModal";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((item) => item.slug === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!blog) {
    return (
      <div className="h-screen bg-[#050505] text-white flex items-center justify-center">
        <h1 className="text-xl font-light">Article not found</h1>
      </div>
    );
  }

  const handleGetQuote = () => {
    if (window.innerWidth < 640) {
      navigate("/contact");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <article className="relative h-screen overflow-hidden text-white font-body">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative h-full px-6 pt-28 pb-10 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          {/* ARTICLE CARD */}
          <div className="bg-black/40 border border-white/10 rounded-[32px] p-8
                          h-[80vh]
                          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                          backdrop-blur-xl
                          flex flex-col">

            {/* META */}
            <span className="text-purple-400 text-xs uppercase tracking-widest">
              {blog.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mt-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mt-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <User size={16} className="text-purple-500" />
                NexaSoft Team
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-purple-500" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-purple-500" />5 min read
              </div>
            </div>

            {/* ARTICLE CONTENT (SCROLL AREA) */}
            <div
              className="
                mt-8
                flex-1
                overflow-y-auto
                pr-3
                prose prose-invert prose-purple max-w-none
                prose-headings:font-light prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-14
                prose-h3:text-2xl
                prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed
                prose-li:text-gray-300
                prose-strong:text-white
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* FOOTER */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/our-blogs"
                className="group flex items-center gap-2 text-purple-400 hover:text-white transition"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        {[FaBehance, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-9 h-9 rounded-full bg-black/70 border border-purple-500/20
                         flex items-center justify-center text-gray-400
                         hover:text-white hover:border-purple-500
                         hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
                         transition"
            >
              <Icon size={14} />
            </a>
          )
        )}
      </div>

      {/* GET A QUOTE BUTTON */}
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

      {/* MODAL */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </article>
  );
};

export default BlogDetail;
