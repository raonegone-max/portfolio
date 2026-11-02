import { Button } from "@/components/Button";
import {
  ArrowUpRight,
  Download,
  Copy,
  CheckCircle2,
  Code2,
  Sparkles,
  Server,
  Layers,
  Award,
  Globe,
} from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText("aryangupta.in@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-6 pb-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* 1. Giant Headline (matching reference image) */}
      <div className="pt-4 sm:pt-8 pb-6">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] tracking-tight leading-[0.92] text-white uppercase select-none">
          FULL-STACK DEVELOPER
        </h1>
      </div>

      {/* 2. Two-Column Subtitle Deck (matching reference image) */}
      <div className="grid md:grid-cols-12 gap-6 sm:gap-10 pb-10 sm:pb-14 text-sm sm:text-base text-zinc-400 border-b border-zinc-800/80">
        <div className="md:col-span-6 leading-relaxed">
          <p>
            I'm currently pursuing my BCA at{" "}
            <span className="text-white font-medium">Vivekananda Institute of Professional Studies (VIPS, GGSIPU)</span>{" "}
            <span className="text-white font-semibold"></span>. Passionate about building fast, scalable, and responsive web applications.
          </p>
        </div>

        <div className="md:col-span-6 leading-relaxed flex flex-col justify-between items-start gap-4">
          <p>
            I specialize in full-stack architectures using React, Node.js, Express, MongoDB, and practical Generative AI tools with LLM APIs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-white uppercase underline underline-offset-4 hover:text-[#ffd000] transition-colors"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 3. Hero Showcase Card on Cream Architectural Grid (matching reference image) */}
      <div className="mt-8 rounded-3xl lg:rounded-[2.5rem] cream-grid border-2 border-black/80 shadow-[4px_4px_0px_#000000] p-6 sm:p-10 lg:p-12 relative overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
        {/* Subtle grid accent label */}
        <div className="absolute top-4 left-5 text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
          DEV // ARCHIVE_2026
        </div>
        <div className="absolute top-4 right-5 text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
          GGSIPU • BCA
        </div>

        {/* Center: Black & White Cutout Portrait */}
        <div className="relative z-10 my-4 sm:my-2">
          <div className="w-52 sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000000] bg-zinc-900 group">
            <img
              src="/profile-photo.jpeg"
              alt="Aryan Gupta"
              className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* SURROUNDING STICKERS (matching exact positions & colors of reference image) */}

        {/* STICKER 1: Teal Circle Stamp (Top-Left) */}
        <div className="absolute top-8 left-4 sm:left-10 lg:left-16 z-20 hidden sm:block">
          <div className="sticker-badge bg-[#44d4c2] text-black px-4 py-3 rounded-full -rotate-6 shadow-[3px_3px_0px_#000] cursor-default text-xs">
            <div className="flex flex-col items-center leading-tight">
              <span className="font-mono text-[9px] font-black uppercase tracking-widest">
                ARCHITECTURE
              </span>
              <span className="font-extrabold text-xs">FULL-STACK</span>
            </div>
          </div>
        </div>

        {/* STICKER 2: Yellow Tape Badge (Middle-Left) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 lg:left-12 z-20">
          <div className="sticker-badge bg-[#ffd000] text-black px-3.5 py-1.5 rounded-lg rotate-3 shadow-[3px_3px_0px_#000] cursor-default text-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>REACT • TAILWIND</span>
            <span className="text-[10px]">★</span>
          </div>
        </div>

        {/* STICKER 3: Orange Rounded Rect (Bottom-Left) */}
        <div className="absolute bottom-6 left-4 sm:left-12 lg:left-20 z-20">
          <div className="sticker-badge bg-[#ff6a00] text-white px-3.5 py-2 rounded-xl -rotate-3 shadow-[3px_3px_0px_#000] cursor-default text-xs">
            <Server className="w-3.5 h-3.5 text-white" />
            <span>NODE.JS • MONGODB →</span>
          </div>
        </div>

        {/* STICKER 4: Hot Pink Pill (Top-Right) */}
        <div className="absolute top-8 right-4 sm:right-10 lg:right-16 z-20">
          <div className="sticker-badge bg-[#ff2a70] text-white px-4 py-2 rounded-full rotate-4 shadow-[3px_3px_0px_#000] cursor-default text-xs">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>GENERATIVE AI // LLMs</span>
          </div>
        </div>

        {/* STICKER 5: Cyan Tag with Hole (Middle-Right) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 lg:right-12 z-20 hidden sm:block">
          <div className="sticker-badge bg-[#38bdf8] text-black px-3.5 py-1.5 rounded-md -rotate-6 shadow-[3px_3px_0px_#000] cursor-default text-xs relative">
            <div className="w-2 h-2 rounded-full bg-white border border-black mr-1" />
            <span>ACE SOCIETY @ VIPS '25</span>
          </div>
        </div>

        {/* STICKER 6: Acid Lime Green Seal (Bottom-Right) */}
        <div className="absolute bottom-6 right-4 sm:right-12 lg:right-20 z-20">
          <div className="sticker-badge bg-[#a6e82e] text-black px-4 py-2.5 rounded-full rotate-6 shadow-[3px_3px_0px_#000] cursor-default text-xs">
            <Globe className="w-3.5 h-3.5" />
            <span>AWS CERTIFIED </span>
          </div>
        </div>
      </div>

      {/* 4. Action Row Below Showcase */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button size="default" variant="yellow">
              <span>Explore Projects (3)</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <a
            href="/Aryan_Gupta_Resume.pdf"
            download="Aryan_Gupta_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-white text-xs font-mono font-medium transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-zinc-300" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Quick Email Copy */}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
          title="Click to copy email address"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#a6e82e]" />
              <span className="text-[#a6e82e]">Copied aryangupta.in@gmail.com</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>aryangupta.in@gmail.com</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
