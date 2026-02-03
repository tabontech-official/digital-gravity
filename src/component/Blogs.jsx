import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How Modern SaaS Products Scale Faster With Better UX",
    excerpt:
      "Discover how UX decisions directly impact scalability, retention and growth in modern SaaS platforms.",
    category: "UX Design",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Why Performance Optimization Matters More Than Ever",
    excerpt:
      "A deep dive into performance, Core Web Vitals and why speed is now a business advantage.",
    category: "Development",
    date: "Feb 02, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Design Systems: The Backbone of Scalable Products",
    excerpt:
      "How strong design systems help teams ship faster while maintaining consistency.",
    category: "Product Design",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Building Trust Through Branding in the Digital Age",
    excerpt:
      "Branding is more than visuals — learn how perception shapes long-term trust.",
    category: "Branding",
    date: "Mar 05, 2026",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "From MVP to Enterprise: Scaling the Right Way",
    excerpt:
      "Avoid common pitfalls when scaling your MVP into a full enterprise product.",
    category: "Startups",
    date: "Mar 18, 2026",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "The Role of AI in Modern Web Applications",
    excerpt:
      "Explore how AI is reshaping user experiences and backend workflows.",
    category: "AI & Tech",
    date: "Apr 01, 2026",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
  },
];

const BlogsPage = () => {
  return (
    <div className="bg-[#050505] text-white font-body">

      {/* ================= BLOGS HERO ================= */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto">

          <div className="border-b border-white/10 pb-10 mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <span className="text-purple-400 text-xs font-heading tracking-[0.25em] uppercase">
                Insights & Articles
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headingAlt font-light leading-tight max-w-4xl">
              Thoughts, Stories & Ideas <br />
              from Our Experts
            </h1>
          </div>

        </div>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      <section className="relative px-6 mb-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#0f0f0f] border border-white/10 rounded-[32px] p-10 lg:p-16">

            <div>
              <span className="text-purple-400 text-xs font-heading tracking-[0.25em] uppercase">
                Featured Article
              </span>

              <h2 className="text-2xl md:text-4xl font-headingAlt font-light mt-6 mb-8">
                {blogs[0].title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10 max-w-xl">
                {blogs[0].excerpt}
              </p>

              <Link
                to={`/blog/${blogs[0].id}`}
                className="inline-flex px-8 py-3 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_25px_#a855f7] transition-all duration-500"
              >
                Read Article
              </Link>
            </div>

            <div className="rounded-[32px] overflow-hidden border border-white/10">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative px-6 pb-32">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="bg-[#0f0f0f] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:border-purple-500/30"
            >

              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col h-full">
                <span className="text-xs font-heading tracking-[0.25em] uppercase text-purple-400 mb-4">
                  {blog.category}
                </span>

                <h3 className="text-xl font-heading font-medium mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

    </div>
  );
};

export default BlogsPage;
