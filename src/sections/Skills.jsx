import { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Sparkles,
  Layers,
  Globe,
  Bot,
  Shield,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "frontend", label: "Frontend & Languages", icon: Globe },
  { id: "backend", label: "Backend & BaaS", icon: Server },
  { id: "tools", label: "Tools & Platforms", icon: Wrench },
  { id: "cloud", label: "Cloud, AI & Concepts", icon: Bot },
];

const skillsData = [
  // Frontend & Languages
  {
    name: "React (Vite)",
    category: "frontend",
    level: "Proficient",
    percentage: 92,
    description: "Component architecture, React Hooks, React Router, state management, and modern SPA design",
    tags: ["React", "React Router", "Vite", "UI Layout"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "JavaScript (Modular JS)",
    category: "frontend",
    level: "Advanced",
    percentage: 90,
    description: "Modular JavaScript, DOM manipulation, event handling, async/await, and ES6+ patterns",
    tags: ["Modular JS", "DOM Manipulation", "Event Handling"],
    color: "from-amber-300 to-yellow-500",
  },
  {
    name: "Tailwind CSS & Responsive Design",
    category: "frontend",
    level: "Expert",
    percentage: 95,
    description: "Responsive web design, custom utilities, dark mode UI layouts, and micro-interactions",
    tags: ["Tailwind CSS", "Responsive Web Design", "UI Layout"],
    color: "from-cyan-400 to-teal-400",
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: "Expert",
    percentage: 96,
    description: "Semantic web architecture, responsive viewports, CSS styling, accessible UI layouts",
    tags: ["HTML", "CSS", "Responsive Layout"],
    color: "from-orange-400 to-rose-500",
  },
  {
    name: "C++ & C",
    category: "frontend",
    level: "Proficient",
    percentage: 86,
    description: "Object-oriented programming, data structures, algorithms, game logic, and memory fundamentals",
    tags: ["C++", "C", "Data Structures", "Game Logic"],
    color: "from-blue-400 to-indigo-600",
  },
  {
    name: "PHP",
    category: "frontend",
    level: "Proficient",
    percentage: 80,
    description: "Server-side scripting, form processing, dynamic templating, and relational database connectivity",
    tags: ["PHP", "Server-Side Scripting"],
    color: "from-indigo-400 to-purple-500",
  },

  // Backend & BaaS
  {
    name: "Node.js & Express.js",
    category: "backend",
    level: "Proficient",
    percentage: 88,
    description: "RESTful API development, custom middleware, route protection, and decoupled architecture",
    tags: ["Node.js", "Express.js", "REST APIs", "Middleware"],
    color: "from-emerald-400 to-green-600",
  },
  {
    name: "Appwrite BaaS",
    category: "backend",
    level: "Proficient",
    percentage: 88,
    description: "Backend-as-a-Service integration for user auth, cloud databases, storage buckets, and sessions",
    tags: ["Appwrite", "BaaS", "Cloud Storage", "User Auth"],
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "MongoDB & MongoDB Atlas",
    category: "backend",
    level: "Proficient",
    percentage: 86,
    description: "NoSQL document modeling, Mongoose schemas, queries, validation, and cloud Atlas hosting",
    tags: ["MongoDB", "MongoDB Atlas", "NoSQL", "Schemas"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "MySQL",
    category: "backend",
    level: "Proficient",
    percentage: 82,
    description: "Relational database schemas, SQL queries, table normalization, and transactional integrity",
    tags: ["MySQL", "SQL Queries", "Relational DB"],
    color: "from-blue-400 to-sky-500",
  },
  {
    name: "REST APIs & JWT Authentication",
    category: "backend",
    level: "Proficient",
    percentage: 89,
    description: "JWT in HTTP-only cookies, logout token blacklisting, protected routes, and role-based access",
    tags: ["REST APIs", "JWT Auth", "Token Blacklisting", "Security"],
    color: "from-purple-400 to-indigo-500",
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    percentage: 92,
    description: "Version control, branching strategies, pull requests, repository management (@raonegonemax)",
    tags: ["Git", "GitHub", "Version Control"],
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Vercel, Render & Netlify",
    category: "tools",
    level: "Advanced",
    percentage: 90,
    description: "Cloud deployments: frontend apps on Vercel & Netlify, backend APIs on Render, database on Atlas",
    tags: ["Vercel", "Render", "Netlify", "Cloud Deploy"],
    color: "from-slate-200 to-slate-400",
  },
  {
    name: "VS Code, AntiGravity & Replit",
    category: "tools",
    level: "Expert",
    percentage: 94,
    description: "Modern developer toolchains, AntiGravity agentic workspace, Replit cloud IDE, Vite build setup",
    tags: ["VS Code", "AntiGravity", "Replit", "Vite"],
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Postman & Stitch",
    category: "tools",
    level: "Advanced",
    percentage: 88,
    description: "REST API testing, endpoint simulation, request/response verification, and Stitch UI tooling",
    tags: ["Postman", "Stitch", "API Testing"],
    color: "from-amber-400 to-orange-500",
  },

  // Cloud, AI & Concepts
  {
    name: "AWS Cloud Practitioner Essentials",
    category: "cloud",
    level: "Certified",
    percentage: 88,
    description: "Cloud computing fundamentals, core AWS services, security, scalability, and architecture principles",
    tags: ["AWS Certified", "Cloud Fundamentals", "Architecture"],
    color: "from-amber-400 to-yellow-500",
  },
  {
    name: "Generative AI & LLM APIs",
    category: "cloud",
    level: "Proficient",
    percentage: 88,
    description: "LLM prompt engineering, resume & JD parsing, tailored roadmap and interview question synthesis",
    tags: ["Generative AI", "LLM APIs", "Prompt Engineering"],
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Cybersecurity Fundamentals",
    category: "cloud",
    level: "Learning",
    percentage: 80,
    description: "Actively studying network security fundamentals, threat analysis, and penetration testing concepts",
    tags: ["Cybersecurity", "Network Security", "Penetration Testing"],
    color: "from-red-400 to-rose-500",
  },
  {
    name: "Game Logic & Event Handling",
    category: "cloud",
    level: "Proficient",
    percentage: 85,
    description: "Interactive game logic, event loop handling, asynchronous patterns, state-driven UI cycles",
    tags: ["Game Logic", "Event Handling", "System Flow"],
    color: "from-teal-400 to-emerald-500",
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#070b13] cyber-dots">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 02. TECHNICAL_SKILLS & PROFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Skills, Frameworks &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
              Tech Stack
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Core competencies across Full-Stack Web Development, Generative AI APIs,
            and software engineering tools.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-105"
                      : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0a0f1b] border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Row: Name and Level Badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                  {skill.level}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Meter HUD */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-500">PROFICIENCY</span>
                  <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/30">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:shadow-[0_0_10px_#00f2fe]`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/60 text-slate-400 border border-slate-800 group-hover:border-cyan-500/20 group-hover:text-slate-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Matrix Overview */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold font-mono text-cyan-400">8.65</div>
            <div className="text-xs text-slate-400 font-mono mt-1">CGPA (Vivekananda Institute of Technology)</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-purple-400">AWS ESSENTIALS</div>
            <div className="text-xs text-slate-400 font-mono mt-1">CERTIFIED PRACTITIONER</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-emerald-400">FULL-STACK & AI</div>
            <div className="text-xs text-slate-400 font-mono mt-1">REACT • NODE • APPWRITE</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-amber-400">ACE SOCIETY</div>
            <div className="text-xs text-slate-400 font-mono mt-1">WEB DEV & EVENT SUPERVISOR</div>
          </div>
        </div>
      </div>
    </section>
  );
};
