import { Code2, Cpu, Rocket, ShieldCheck, Terminal, Sparkles, Workflow, Zap, Award, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    tag: "01",
    title: "Clean Modular Code",
    description:
      "Translating complex requirements into clean, responsive, and modular code with React, JavaScript, C++, and modern frontend standards.",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-400/50",
    iconColor: "text-cyan-400",
  },
  {
    icon: Workflow,
    tag: "02",
    title: "Full-Stack & BaaS Synergy",
    description:
      "Architecting end-to-end web platforms using Node.js, Express.js, MongoDB, RESTful APIs, and BaaS systems like Appwrite.",
    accent: "from-purple-500/20 to-pink-500/10",
    border: "hover:border-purple-400/50",
    iconColor: "text-purple-400",
  },
  {
    icon: Sparkles,
    tag: "03",
    title: "Generative AI Engineering",
    description:
      "Integrating cutting-edge LLM APIs to build automated interview preparation tools, conversational AI, and intelligent workflows.",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-400/50",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    tag: "04",
    title: "Cloud & Security Mindset",
    description:
      "AWS Cloud Practitioner Essentials certified, JWT security in HTTP-only cookies, and exploring cybersecurity penetration testing.",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-400/50",
    iconColor: "text-amber-400",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#06090e]">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Mission (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 01. CORE_PROFILE & PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
              Translating complex ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                clean, responsive code.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Aspiring Software Developer with a strong foundation in full-stack web development and a passion for building interactive, user-focused applications. Proficient in React, JavaScript, and backend integration with Appwrite.
              </p>
              <p className="text-slate-400">
                Proven ability to translate complex requirements into clean, responsive code through hands-on project experience. Growing hands-on experience building generative AI-powered applications, and familiar with cloud computing fundamentals (<span className="text-cyan-300 font-medium">AWS Cloud Practitioner Essentials</span>).
              </p>
            </div>

            {/* Quick Education & Leadership Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-200">
                    Vivekananda Institute of Technology, GGSIPU
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                    CGPA: 8.65 • B.Tech
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-200">
                    St Thomas School, Indrapuram
                  </div>
                  <div className="text-[11px] font-mono text-purple-400 mt-0.5">
                    XII (CBSE) • 87% (2025)
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Terminal Quote Block */}
            <div className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-5 font-mono text-xs text-slate-300 relative overflow-hidden">
              <div className="flex items-center gap-2 text-slate-500 pb-2 mb-2 border-b border-slate-800 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>mission_statement.sh</span>
              </div>
              <p className="italic text-slate-200">
                "Software engineering is more than just shipping features — it's about engineering
                seamless, intuitive experiences that empower users while preserving long-term architectural integrity."
              </p>
              <div className="mt-3 text-cyan-400 font-semibold">
                // Aryan Gupta — Delhi NCR, India
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars (6 cols) */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0a0f18] border border-slate-800/80 ${item.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden`}
              >
                {/* Subtle Card Glow */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.accent} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition duration-500`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <span className="font-mono text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                    [{item.tag}]
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-200 mb-2 font-heading group-hover:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};