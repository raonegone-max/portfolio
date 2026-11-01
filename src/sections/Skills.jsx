import { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Globe,
  Bot,
  Shield,
  Layers,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & Languages" },
  { id: "backend", label: "Backend & BaaS" },
  { id: "cloud", label: "Cloud & AI" },
  { id: "tools", label: "Tools & Platforms" },
];

const skillsData = [
  // Frontend & Languages
  {
    name: "React (Vite)",
    category: "frontend",
    tagColor: "bg-[#ffd000] text-black",
    description: "Component lifecycle, React Hooks, React Router, dynamic state management, and modern SPA architecture.",
    tags: ["React", "React Router", "Vite", "UI Layout"],
  },
  {
    name: "JavaScript (Modular JS)",
    category: "frontend",
    tagColor: "bg-[#ffd000] text-black",
    description: "DOM manipulation, event handling, asynchronous JS (async/await), closures, and modern ES6+ standards.",
    tags: ["JavaScript", "Modular JS", "Async/Await", "DOM"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    tagColor: "bg-[#38bdf8] text-black",
    description: "Responsive layouts, custom utilities, dark mode theming, flexbox/grid structuring, and clean micro-interactions.",
    tags: ["Tailwind CSS", "Responsive Web Design", "UI Layout"],
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    tagColor: "bg-[#ff6a00] text-white",
    description: "Semantic web architecture, responsive viewports, CSS styling, accessible layouts, and clean DOM structures.",
    tags: ["HTML5", "CSS3", "Semantic HTML", "Accessibility"],
  },
  {
    name: "C++ & C",
    category: "frontend",
    tagColor: "bg-[#44d4c2] text-black",
    description: "Object-oriented programming, data structures, algorithms, problem solving, and game logic fundamentals.",
    tags: ["C++", "C", "Data Structures", "Algorithms"],
  },
  {
    name: "PHP",
    category: "frontend",
    tagColor: "bg-[#c084fc] text-black",
    description: "Server-side scripting, form processing, dynamic templating, and relational database connectivity.",
    tags: ["PHP", "Backend Scripting"],
  },

  // Backend & BaaS
  {
    name: "Node.js & Express.js",
    category: "backend",
    tagColor: "bg-[#a6e82e] text-black",
    description: "RESTful API development, custom middleware, route protection, error handling, and decoupled server architecture.",
    tags: ["Node.js", "Express.js", "REST APIs", "Middleware"],
  },
  {
    name: "Appwrite BaaS",
    category: "backend",
    tagColor: "bg-[#ff2a70] text-white",
    description: "Backend-as-a-Service integration for user auth, cloud databases, file storage buckets, and session management.",
    tags: ["Appwrite", "BaaS", "Cloud Storage", "User Auth"],
  },
  {
    name: "MongoDB & Atlas",
    category: "backend",
    tagColor: "bg-[#44d4c2] text-black",
    description: "NoSQL document modeling, Mongoose schemas, queries, validation, and cloud Atlas hosting.",
    tags: ["MongoDB", "MongoDB Atlas", "NoSQL", "Schemas"],
  },
  {
    name: "MySQL",
    category: "backend",
    tagColor: "bg-[#38bdf8] text-black",
    description: "Relational database schemas, SQL queries, table normalization, and transactional data integrity.",
    tags: ["MySQL", "SQL Queries", "Relational DB"],
  },
  {
    name: "REST APIs & JWT Auth",
    category: "backend",
    tagColor: "bg-[#ffd000] text-black",
    description: "JWT sessions in HTTP-only cookies, logout token blacklisting, protected client routes, and role-based access.",
    tags: ["REST APIs", "JWT Auth", "Token Blacklisting", "Security"],
  },

  // Cloud & AI
  {
    name: "AWS Cloud Practitioner",
    category: "cloud",
    tagColor: "bg-[#ffd000] text-black",
    description: "Certified understanding of cloud computing fundamentals, core AWS services, security, and scalability.",
    tags: ["AWS Certified", "Cloud Fundamentals", "Architecture"],
  },
  {
    name: "Generative AI & LLM APIs",
    category: "cloud",
    tagColor: "bg-[#ff2a70] text-white",
    description: "Prompt engineering, resume & JD parsing, tailored roadmap synthesis, and Google Gemini API integration.",
    tags: ["Generative AI", "LLM APIs", "Prompt Engineering"],
  },
  {
    name: "Cybersecurity Fundamentals",
    category: "cloud",
    tagColor: "bg-[#ff6a00] text-white",
    description: "Actively studying network security fundamentals, threat analysis, and ethical penetration testing concepts.",
    tags: ["Cybersecurity", "Network Security", "Threat Modeling"],
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    tagColor: "bg-[#ffd000] text-black",
    description: "Version control, branching workflows, pull requests, and repository management (@raonegonemax).",
    tags: ["Git", "GitHub", "Version Control"],
  },
  {
    name: "Vercel, Render & Netlify",
    category: "tools",
    tagColor: "bg-[#a6e82e] text-black",
    description: "Cloud deployments: frontend apps on Vercel & Netlify, backend APIs on Render, and database on Atlas.",
    tags: ["Vercel", "Render", "Netlify", "Cloud Deploy"],
  },
  {
    name: "VS Code & Development Tools",
    category: "tools",
    tagColor: "bg-[#38bdf8] text-black",
    description: "Modern developer toolchains, AntiGravity agentic workspace, Replit cloud IDE, and Vite build configuration.",
    tags: ["VS Code", "AntiGravity", "Replit", "Vite"],
  },
  {
    name: "Postman & Stitch",
    category: "tools",
    tagColor: "bg-[#ff6a00] text-white",
    description: "REST API endpoint verification, environment configs, request/response debugging, and Stitch UI tooling.",
    tags: ["Postman", "Stitch", "API Testing"],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
            // ARSENAL & TOOLKIT
          </span>
          <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none mt-2">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#ffd000] text-black shadow-[2px_2px_0px_#000] border border-black"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="p-5 rounded-2xl studio-card flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-sm font-bold text-white font-heading">
                  {skill.name}
                </h3>
                <span className={`sticker-badge text-[9px] px-2 py-0.5 rounded-md ${skill.tagColor}`}>
                  VERIFIED
                </span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {skill.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
