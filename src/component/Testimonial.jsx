import React, { useRef } from "react";

const TestimonialsSlider = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      title: "The Success of EMDAD's Website Launch",
      text: "Just writing to express our appreciation to Digital Gravity and their team for their efforts that contributed to the success of the EMDAD website at its launch. A special thanks to Aashir for showing leadership and resilience each step of the way, attending to our requirements, providing us",
    },
    {
      title: "Sleek and Smooth Experience",
      text: "Everything went so smoothly, we loved the website, and everyone was completely amazed by it. The few hiccups that happened due to miscommunication were also managed brilliantly by the project manager who was assigned to our project. Overall everything was great, so thank you to the entire",
    },
    {
      title: "Smooth Sailing",
      text: "A big thanks to Wasi, the project manager at Deep Water Marine's website. After the first draft, we were asked for feedback and suggested some changes. They clearly understand what we ask for. And at the end of the day, we got a website developed very nicely and as per my expectations.",
    },
    {
      title: "Outstanding Website Experience",
      text: "We wanted to thank the team for their incredible effort on the Terra website. The feedback from users has been overwhelmingly positive, from design to usability. Special appreciation for the ongoing support throughout the project duration.",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-16 font-sans">
      <div className="max-w-[1440px] mx-auto">
        <div className="border-b border-gray-200 pb-16 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#9b30ff]" />
            <span className="text-[#9b30ff] text-sm font-semibold tracking-wide uppercase">
              Client Testimonials & Reviews
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-6xl font-semibold text-black leading-[1.2] max-w-3xl">
              What Our Happy Clients <br /> Say About Us
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 animate-marquee  hover:[animation-play-state:paused]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[90%] md:min-w-[45%] lg:min-w-[32.5%] snap-start"
            >
              <div className="bg-white rounded-[40px] p-10 md:p-14 h-full min-h-[500px] shadow-sm border border-gray-100 flex flex-col relative">
                <div className="text-[#9b30ff] text-2xl font-bold mb-8 tracking-tighter">
                  //
                </div>

                <h4 className="text-xl md:text-2xl font-semibold text-black mb-8 leading-tight">
                  {item.title}
                </h4>

                <div className="relative pr-8 flex-grow">
                  <p className="text-gray-600 leading-relaxed text-base font-normal">
                    {item.text}
                  </p>

                  {/* Two-tone Accent Line on Right */}
                  <div className="absolute right-0 top-0 w-[3px] h-full flex flex-col">
                    <div className="h-2/3 bg-[#9b30ff] rounded-t-full" />
                    <div className="h-1/3 bg-gray-400 rounded-b-full" />
                  </div>
                </div>

                {/* Card Specific Dots */}
                <div className="mt-12 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9b30ff]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
