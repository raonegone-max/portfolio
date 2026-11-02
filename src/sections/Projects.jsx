import { ArrowUpRight, Github, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";

const projects = [
  {
    title: "AI Interview Prep Planner",
    category: "GENERATIVE AI",
    badgeColor: "bg-[#ff2a70] text-white",
    subtitle: "React • Node.js/Express • Generative AI (LLM) API • Tailwind CSS",
    description:
      "A generative AI web application that takes a candidate's resume and a target job description to synthesize an automated interview roadmap, role-specific technical & behavioral questions, and skill gap remediation steps.",
    image: "/projects/interview.png",
    tags: ["React", "Node.js", "Express.js", "Generative AI", "LLM APIs", "Tailwind CSS"],
    features: [
      "Produces a personalized interview-preparation plan from uploaded resume and target job description.",
      "Prompts an LLM to generate targeted technical and behavioral interview questions specific to the role.",
      "Features a structured preparation roadmap (topics to review, skill gaps, suggested timeline) with decoupled architecture.",
    ],
    link: "https://github.com/raonegone-max",
    github: "https://github.com/raonegone-max/GenAI",
    isLive: false,
  },
  {
    title: "EventHub",
    category: "FULL-STACK PLATFORM",
    badgeColor: "bg-[#44d4c2] text-black",
    subtitle: "React • Node.js/Express • MongoDB • JWT Auth • Vercel • Render",
    description:
      "A production campus event platform where organizers publish and manage events while students search, filter, and RSVP with capacity control and secure authentication.",
    image: "/projects/eventhub.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Vercel", "Render"],
    features: [
      "Live deployment across Vercel (frontend), Render (backend APIs), and MongoDB Atlas.",
      "Role-based access for student RSVPs and organizer event management.",
      "JWT authentication in HTTP-only cookies with logout token blacklisting and server-enforced capacity limits.",
    ],
    link: "https://eventhub-khaki-five.vercel.app",
    github: "https://github.com/raonegone-max/eventhub",
    isLive: true,
  },
  {
    title: "Gemini Clone",
    category: "CONVERSATIONAL AI",
    badgeColor: "bg-[#ffd000] text-black",
    subtitle: "React • Google Gemini API • Tailwind CSS • React Hooks",
    description:
      "A conversational AI assistant powered by the Google Gemini API. Implements real-time AI responses, context-aware prompt sessions, dynamic prompt suggestions, and responsive conversation history.",
    image: "/projects/gemini.jpeg",
    tags: ["React", "Google Gemini API", "Tailwind CSS", "React Hooks", "Vite"],
    features: [
      "Conversational streaming responses powered by Google Gemini LLM API.",
      "Sidebar conversation history, dynamic prompt suggestions, and contextual chat memory.",
      "Clean, responsive interface with animated typing state and robust error boundaries.",
    ],
    link: "https://github.com/raonegone-max",
    github: "https://github.com/raonegone-max/gemini-clone",
    isLive: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Header with Big Editorial Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
            // SELECTED WORK
          </span>
          <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none mt-2">
            FEATURED PROJECTS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
          Three focused production builds spanning full-stack campus platforms and practical Generative AI tools.
        </p>
      </div>

      {/* 3 Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="rounded-2xl studio-card overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            <div>
              {/* Image Preview with Top Sticker Badge */}
              <div className="relative overflow-hidden aspect-video bg-zinc-950 border-b border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Top Badge matching reference sticker palette */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className={`sticker-badge text-[10px] px-2.5 py-0.5 rounded-md ${project.badgeColor}`}
                  >
                    {project.category}
                  </span>

                  {project.isLive && (
                    <span className="sticker-badge text-[10px] px-2.5 py-0.5 rounded-full bg-[#a6e82e] text-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      LIVE ON VERCEL
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ffd000] transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-zinc-800/80">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                    >
                      <span className="text-[#ffd000] font-mono text-xs shrink-0 mt-0.5">▸</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Links */}
            <div className="p-6 pt-0 space-y-4">
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-white hover:text-[#ffd000] transition-colors"
                >
                  <span>{project.isLive ? "Open Live App" : "Explore Projects"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors font-mono"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
