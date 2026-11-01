import { Code2, Workflow, Sparkles, ShieldCheck, GraduationCap, BookOpen, Award } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    badge: "CLEAN CODE",
    badgeColor: "bg-[#ffd000] text-black",
    title: "Modular Codebase",
    description:
      "Writing clean, maintainable, and type-safe code that adheres to component reusability and modern React patterns.",
  },
  {
    icon: Workflow,
    badge: "FULL-STACK",
    badgeColor: "bg-[#ff6a00] text-white",
    title: "Full-Stack Synergy",
    description:
      "Bridging intuitive frontend interfaces with resilient Express.js REST APIs, MongoDB schemas, and BaaS systems like Appwrite.",
  },
  {
    icon: Sparkles,
    badge: "AI INTEGRATION",
    badgeColor: "bg-[#ff2a70] text-white",
    title: "Generative AI Systems",
    description:
      "Leveraging LLM APIs and prompt engineering to build tailored interview planners, conversational tools, and automated pipelines.",
  },
  {
    icon: ShieldCheck,
    badge: "PRODUCTION",
    badgeColor: "bg-[#a6e82e] text-black",
    title: "Security & Cloud",
    description:
      "Deploying apps on Vercel and Render with JWT authentication in HTTP-only cookies, logout blacklisting, and AWS cloud fundamentals.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Narrative & Bio (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
              // ABOUT ME
            </span>
            <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none mt-2">
              CODE, SYSTEMS & INTENTION.
            </h2>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an aspiring Software Developer currently pursuing my Bachelor of Computer Applications (BCA) at{" "}
              <span className="text-white font-medium">Vivekananda Institute of Professional Studies (VIPS, GGSIPU)</span>{" "}
              with an <span className="text-[#ffd000] font-bold">8.65 CGPA</span>.
            </p>
            <p className="text-zinc-400">
              My technical foundation centers on full-stack web development and user-focused engineering. I have hands-on experience building deployed applications like <span className="text-white font-medium">EventHub</span> (campus RSVP system on Vercel & Render), Generative AI applications with LLM APIs, and BaaS systems with Appwrite.
            </p>
            <p className="text-zinc-400">
              I also serve as an Event Supervisor and Web Development team member in the <span className="text-white font-medium">ACE Technical Society</span> at VIPS, while continuously studying AWS Cloud services and cybersecurity concepts.
            </p>
          </div>

          {/* Education Stamp Cards */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl studio-card relative">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1 font-heading">
                <GraduationCap className="w-4 h-4 text-[#ffd000]" />
                <span>VIPS, GGSIPU</span>
              </div>
              <div className="text-xs text-zinc-300 font-mono">
                BCA 
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-1">2025 — Present</div>
            </div>

            <div className="p-4 rounded-xl studio-card relative">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1 font-heading">
                <BookOpen className="w-4 h-4 text-[#44d4c2]" />
                <span>St Thomas School</span>
              </div>
              <div className="text-xs text-zinc-300 font-mono">
                XII (CBSE) • 87%
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-1">Indrapuram (2025)</div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars (6 cols) */}
        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl studio-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`sticker-badge text-[9px] px-2 py-0.5 rounded-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
