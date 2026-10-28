import { Briefcase, Calendar, GraduationCap, Award, Terminal, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Member & Event Supervisor (Web Development Team)",
    company: "ACE | Technical Society, VIPS",
    bullets: [
      "Active member of ACE, contributing to the planning and execution of technical and student engagement activities.",
      "Working with the Web Development team in ACE on real-life projects.",
      "Worked as Event Supervisor for departmental activities, ensuring smooth execution, adherence to schedules, and effective team coordination.",
    ],
    technologies: ["Web Development", "Team Coordination", "Event Supervision", "ACE Society"],
    current: true,
    tag: "RESPONSIBILITY_ACE",
    icon: Award,
  },
  {
    period: "2025 — Present",
    role: "Undergraduate Degree (B.Tech)",
    company: "Vivekananda Institute of Technology, GGSIPU",
    bullets: [
      "Current Academic Performance: CGPA 8.65.",
      "Core focus on C++, C, JavaScript, Modular JS, Data Structures, and scalable full-stack web architectures.",
      "Actively participate in technical events and workshops organized by ACE.",
    ],
    technologies: ["CGPA: 8.65", "C++", "C", "Data Structures", "Algorithms", "Modular JS"],
    current: true,
    tag: "EDUCATION_CGPA_8.65",
    icon: GraduationCap,
  },
  {
    period: "2025 — Present",
    role: "AWS Cloud Practitioner & Full-Stack Deployments",
    company: "Cloud Computing & Production Platforms",
    bullets: [
      "Earned the AWS Cloud Practitioner Essentials certificate (cloud computing and core AWS services).",
      "Developed and deployed full-stack web applications, including a generative AI-powered interview preparation tool.",
      "Currently learning Cybersecurity fundamentals, including network security and penetration testing concepts.",
    ],
    technologies: ["AWS Cloud Practitioner", "Full-Stack Deployment", "Generative AI", "Cybersecurity"],
    current: true,
    tag: "AWS_CERTIFIED",
    icon: Briefcase,
  },
  {
    period: "2025",
    role: "Senior Secondary (Class XII CBSE) — 87%",
    company: "St Thomas School, Indrapuram",
    bullets: [
      "Completed Class XII CBSE board examinations with an 87% aggregate in 2025.",
      "Established strong grounding in mathematics, analytical problem solving, and science fundamentals.",
    ],
    technologies: ["CBSE Board (87%)", "Indrapuram (2025)", "Analytical Problem Solving"],
    current: false,
    tag: "CBSE_87%",
    icon: GraduationCap,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#070b13] cyber-dots">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 04. ACADEMICS_&_RESPONSIBILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Education, Leadership &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
              Milestones
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Academic achievements at VIPS (GGSIPU), technical society leadership at ACE, and project development milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Circuit Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-slate-800 md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,242,254,0.6)]" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.period + exp.role}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Node Marker Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-[#070b13] border-2 border-cyan-400 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_12px_#00f2fe]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {exp.current && (
                    <span className="absolute -inset-1 rounded-full bg-cyan-400/40 animate-ping" />
                  )}
                </div>

                {/* Left side on even, right side on odd */}
                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0a0f1b] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group hover:shadow-[0_10px_30px_rgba(0,242,254,0.12)]">
                    {/* Period & Tag */}
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {exp.tag}
                      </span>
                      {exp.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          CURRENT
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-heading">
                      {exp.role}
                    </h3>

                    <div className="text-xs font-mono text-purple-400 mt-1 mb-3">
                      {exp.company}
                    </div>

                    {exp.bullets ? (
                      <div className="space-y-2 text-xs text-slate-300">
                        {exp.bullets.map((b, bIdx) => (
                          <div
                            key={bIdx}
                            className={`flex items-start gap-2 ${
                              idx % 2 === 0 ? "md:justify-end md:text-right" : ""
                            }`}
                          >
                            <span className="text-cyan-400 shrink-0 font-mono text-[11px]">▸</span>
                            <span className="leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {/* Technologies Pills */}
                    <div
                      className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-slate-950/70 text-slate-300 border border-slate-800/80 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};