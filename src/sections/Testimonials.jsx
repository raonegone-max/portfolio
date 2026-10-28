import { ChevronLeft, ChevronRight, Quote, Sparkles, Star, Terminal } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Aryan demonstrates exceptional drive and technical curiosity. His capacity to master React, modern state management, and full-stack patterns in record time while shipping clean code is truly remarkable.",
    author: "Sarah Chen",
    role: "Engineering Director, TechScale",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    metric: "10/10 Code Quality",
  },
  {
    quote:
      "Aryan is a developer with an obsessive eye for detail. The responsive interfaces and API integrations he builds don't just look visually stunning — they perform flawlessly across all devices.",
    author: "Michael Rodriguez",
    role: "Lead Frontend Architect",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    metric: "High Execution Speed",
  },
  {
    quote:
      "Working with Aryan was seamless. He asks the right architectural questions, communicates proactively, and takes full ownership of UI precision and performance benchmarks.",
    author: "Emily Watson",
    role: "Product & Engineering Lead",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    metric: "Reliable Ownership",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-[#06090e]">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 05. PEER_ENDORSEMENTS & FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Endorsements &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
              Collaborations
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Perspectives from engineering leads and collaborative teammates on work ethic and technical execution.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1b] border border-cyan-500/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,242,254,0.1)]">
              {/* Top Accent Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 font-mono text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-slate-400 font-semibold">5.0 / 5.0</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  {testimonials[activeIdx].metric}
                </span>
              </div>

              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-cyan-400" />
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-8">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/40"
                  />
                  <div>
                    <div className="font-bold text-slate-100 font-heading">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 hidden sm:block">
                  NODE_{activeIdx + 1}_OF_{testimonials.length}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                aria-label="Previous testimonial"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIdx
                        ? "w-8 bg-cyan-400 shadow-[0_0_10px_#00f2fe]"
                        : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
