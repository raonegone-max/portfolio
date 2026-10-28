import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Terminal,
  Code2,
  Sparkles,
  Cpu,
  Layers,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { useState, useMemo } from "react";

const techTicker = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Appwrite",
  "Generative AI (LLMs)",
  "C++",
  "C",
  "HTML5",
  "CSS3",
  "PHP",
  "MySQL",
  "AWS Cloud Practitioner",
  "Git & GitHub",
  "Vercel",
  "Netlify",
  "Render",
  "Postman",
  "AntiGravity",
  "Replit",
  "Stitch",
  "JWT Authentication",
  "REST APIs",
];

const terminalCommands = {
  whoami:
    "Aryan Gupta — Aspiring Software Developer with a strong foundation in full-stack web development and a passion for building interactive, user-focused applications. Proficient in React, JavaScript, and backend integration with Appwrite.",
  skills:
    "Languages: HTML, CSS, JavaScript, C++, C, PHP | Frontend: React, Tailwind CSS | Backend: Express.js, MySQL, MongoDB, Node.js, REST APIs, JWT Auth | Tools: Git, GitHub, Vercel, Netlify, VS Code, Appwrite, Replit, AntiGravity, Postman, Render, Stitch",
  projects:
    "1. AI Interview Prep Planner (React, Node.js, GenAI LLM API) | 2. EventHub (React, Express, MongoDB, JWT) | 3. Blog Management System (React, Appwrite, Tailwind CSS)",
  education:
    "Vivekananda Institute of Technology, GGSIPU (CGPA: 8.65) | XII (CBSE): St Thomas School, Indrapuram (87% | 2025)",
  responsibilities:
    "ACE Technical Society, VIPS (2025 - Present): Web Development team & Event Supervisor for departmental technical activities.",
  contact:
    "Email: aryangupta.in@gmail.com | Phone: (+91) 8076906155 | GitHub: github.com/raonegonemax | LinkedIn: Aryan Gupta",
};



export const Hero = () => {
  const [activeTab, setActiveTab] = useState("whoami");
  const [copied, setCopied] = useState(false);

  const dots = useMemo(
    () =>
      [...Array(24)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 12 + Math.random() * 16,
        delay: Math.random() * 4,
      })),
    []
  );

  const copyEmail = () => {
    navigator.clipboard?.writeText("aryangupta.in@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 cyber-grid">
      {/* Ambient Cyberpunk Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? "#00f2fe" : "#a855f7",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              opacity: 0.6,
              boxShadow: i % 2 === 0 ? "0 0 8px #00f2fe" : "0 0 8px #a855f7",
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: HERO CONTENT (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* High-tech Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 absolute" />
                <span>FULL-STACK & FRONTEND ENGINEER</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Main Cyber Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
                Architecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
                  Scalable Web Systems
                </span>
                <br />
                <span className="text-slate-100">& Modern Digital Interfaces.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                Hi, I'm <span className="text-slate-100 font-semibold">Aryan Gupta</span> — an aspiring
                Software & Full-Stack Developer studying at{" "}
                <span className="text-cyan-300">Vivekananda Institute of Technology, GGSIPU</span> (CGPA: 8.65). I specialize in building
                interactive web applications, full-stack systems with Node.js & Appwrite, and Generative AI-powered tools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects">
                <Button size="lg" variant="primary">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#skills">
                <Button size="lg" variant="secondary">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Skills Matrix</span>
                </Button>
              </a>

              <a
                href="/Aryan_Gupta_Resume.pdf"
                download="Aryan_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-cyan-500/40 bg-slate-900/80 hover:bg-cyan-500/10 hover:border-cyan-400 text-cyan-300 text-sm font-medium transition-all shadow-[0_0_15px_rgba(0,242,254,0.15)]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Metrics HUD */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 max-w-lg">
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">8.65</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  CGPA (VIT, GGSIPU)
                </div>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">ACE</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Web Dev & Supervisor
                </div>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">FULL-STACK</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  React • Node • Appwrite
                </div>
              </div>
            </div>

            {/* Socials & Quick Email Copy */}
            <div className="flex items-center gap-4 text-sm text-slate-400 pt-1">
              <span className="font-mono text-xs text-slate-500">// CONNECT:</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com/raonegonemax", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-gupta/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com", label: "Twitter" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <button
                onClick={copyEmail}
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED!</span>
                  </>
                ) : (
                  <>
                    <span>aryangupta.in@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: CYBERPUNK HUD CARD & INTERACTIVE TERMINAL (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Avatar Card with Cyber Glow Frame */}
            <div className="relative group max-w-sm mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-40 blur-xl group-hover:opacity-75 transition duration-700" />

              <div className="relative bg-[#0b0f17] rounded-2xl p-3 border border-cyan-500/30 shadow-2xl">
                {/* HUD Top Corner Accents */}
                <div className="flex items-center justify-between pb-2 px-1 border-b border-slate-800 font-mono text-[11px] text-slate-400">
                  <span className="text-cyan-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    DEV_ID: ARYAN_01
                  </span>
                  <span className="text-emerald-400">ACTIVE_NODE</span>
                </div>

                <div className="relative mt-2 rounded-xl overflow-hidden aspect-4/3 sm:aspect-square bg-slate-950">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Aryan Gupta"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-80" />

                  {/* Cyber floating badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#06090e]/90 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                      ⚡ React 19 • Node.js
                    </span>
                    <span className="px-2 py-1 rounded bg-purple-500/20 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300">
                      v2026.1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Cyber Terminal Console */}
            <div className="bg-[#070b12] rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="bg-[#0d131f] px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2">bash - aryan@cyber-node:~</span>
                </div>
                <span className="text-[10px] text-cyan-400/80">// INTERACTIVE</span>
              </div>

              {/* Terminal Quick Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/60 p-1 gap-1">
                {Object.keys(terminalCommands).map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setActiveTab(cmd)}
                    className={`px-3 py-1 rounded text-[11px] transition-all cursor-pointer ${
                      activeTab === cmd
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Content Screen */}
              <div className="p-4 space-y-2 text-slate-300 min-h-[100px] bg-[#070b12]">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">aryan@cyber-core:~$</span>
                  <span>{activeTab}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed pl-2 border-l-2 border-cyan-500/40">
                  {terminalCommands[activeTab]}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-slate-500 text-[10px]">
                  <span>Ready for command input</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Marquee Tech Ticker */}
        <div className="mt-20 pt-8 border-t border-slate-800/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              // CORE TECHNOLOGY ARSENAL
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              HIGH_PERFORMANCE_MODULES
            </span>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#06090e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#06090e] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...techTicker, ...techTicker].map((tech, idx) => (
                <div
                  key={idx}
                  className="shrink-0 mx-3 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <span className="text-xs font-mono font-medium text-slate-300 group-hover:text-cyan-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00f2fe]" />
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Trigger */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400">
            SCROLL_DOWN
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};