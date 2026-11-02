import { Calendar, GraduationCap, Award, Briefcase } from "lucide-react";

const milestones = [
    {
    period: "2026 — Present",
    role: "AWS Cloud Practitioner & Web Deployments",
    organization: "Independent Learning & Cloud Certification",
    stamp: "AWS CERTIFIED",
    stampColor: "bg-[#a6e82e] text-black",
    bullets: [
      "Earned the AWS Cloud Practitioner Essentials certificate, validating knowledge of core AWS services, cloud security, and architecture.",
      "Architected and deployed full-stack web applications including EventHub and Generative AI-powered interview tools on Vercel & Render.",
      "Actively expanding technical domain into Cybersecurity fundamentals, network security, and penetration testing concepts.",
    ],
    technologies: ["AWS Cloud Practitioner", "Full-Stack Deployment", "Generative AI", "Cybersecurity"],
    icon: Briefcase,
  },
  {
    period: "2025 — Present",
    role: "Member & Event Supervisor (Web Development Team)",
    organization: "ACE | Technical Society, VIPS",
    stamp: "LEADERSHIP & WEB",
    stampColor: "bg-[#ffd000] text-black",
    bullets: [
      "Active member of ACE, contributing to the planning and execution of technical and student engagement activities.",
      "Working with the Web Development team in ACE on real-world projects and technical initiatives.",
      "Served as Event Supervisor for departmental activities, ensuring smooth execution, adherence to schedules, and effective team coordination.",
    ],
    technologies: ["Web Development", "Team Coordination", "Event Supervision", "ACE Society"],
    icon: Award,
  },
  {
    period: "2025 — Present",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Vivekananda Institute of Professional Studies (VIPS, GGSIPU)",
    stamp: "8.65 CGPA",
    stampColor: "bg-[#44d4c2] text-black",
    bullets: [
      "Maintaining an 8.65 CGPA with a strong foundation in computer science and software development.",
      "Core focus on C++, C, JavaScript, Modular JS, Data Structures & Algorithms, and modern web architectures.",
      "Actively participate in departmental hackathons, workshops, and technical events organized by ACE.",
    ],
    technologies: ["BCA", "CGPA 8.65", "C++", "C", "Data Structures", "Algorithms"],
    icon: GraduationCap,
  },
  {
    period: "2025",
    role: "Class XII (CBSE Board Examination) — 87%",
    organization: "St Thomas School, Indrapuram",
    stamp: "CBSE 87%",
    stampColor: "bg-[#ff6a00] text-white",
    bullets: [
      "Graduated senior secondary education with an 87% aggregate in CBSE board examinations in 2025.",
      "Established strong grounding in mathematics, analytical problem solving, and science fundamentals.",
    ],
    technologies: ["CBSE Board (87%)", "Indrapuram", "Analytical Problem Solving"],
    icon: GraduationCap,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
          // TIMELINE & BACKGROUND
        </span>
        <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none mt-2">
          JOURNEY & MILESTONES
        </h2>
      </div>

      {/* Timeline with Sticker Stamps */}
      <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
        {milestones.map((item, idx) => {
          return (
            <div key={idx} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white group-hover:border-[#ffd000] transition-colors" />

              <div className="p-5 sm:p-6 rounded-2xl studio-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {item.period}
                  </span>
                  <span className={`sticker-badge text-[10px] px-2.5 py-0.5 rounded-full ${item.stampColor}`}>
                    {item.stamp}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">
                  {item.role}
                </h3>

                <div className="text-xs text-zinc-400 font-medium mt-0.5 mb-3.5">
                  {item.organization}
                </div>

                <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#ffd000] mt-0.5 font-bold">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
