import { useState } from "react";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "cloud", label: "Cloud & AI" },
  { id: "tools", label: "Tools" },
];

const skills = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    role: "Frontend Library",
    accent: "text-[#00d8ff]",
    badge: "bg-[#ffd000] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#00d8ff]" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "frontend",
    role: "Modular ES6+",
    accent: "text-[#f7df1e]",
    badge: "bg-[#ffd000] text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-[#f7df1e] text-black font-extrabold text-[10px] flex items-center justify-center font-mono">
        JS
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    role: "Utility Styling",
    accent: "text-[#38bdf8]",
    badge: "bg-[#38bdf8] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    role: "Semantic Web",
    accent: "text-[#ff6a00]",
    badge: "bg-[#ff6a00] text-white",
    icon: (
      <div className="w-5 h-5 rounded bg-[#e34f26] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
        H5
      </div>
    ),
  },
  {
    name: "C++ & C",
    category: "frontend",
    role: "Systems & DSA",
    accent: "text-[#00599c]",
    badge: "bg-[#44d4c2] text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-[#00599c] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
        C++
      </div>
    ),
  },
  {
    name: "PHP",
    category: "frontend",
    role: "Server Scripting",
    accent: "text-[#777bb4]",
    badge: "bg-[#c084fc] text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-[#777bb4] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
        PHP
      </div>
    ),
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    role: "Backend Runtime",
    accent: "text-[#68a063]",
    badge: "bg-[#a6e82e] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.8v11.5L12 25l10-5.7V7.8L12 2zm-1.1 19.3L4.2 17.5V9.4l6.7 3.9v8zm2.2 0v-8l6.7-3.9v8.1l-6.7 3.8zM12 10.9L5.3 7 12 3.1 18.7 7 12 10.9z" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "backend",
    role: "REST Framework",
    accent: "text-white",
    badge: "bg-white text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-zinc-800 text-white font-bold text-xs flex items-center justify-center font-mono border border-zinc-700">
        ex
      </div>
    ),
  },
  {
    name: "MongoDB",
    category: "backend",
    role: "NoSQL Database",
    accent: "text-[#00ed64]",
    badge: "bg-[#44d4c2] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#00ed64]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 0 6 7.5 6 13.5C6 17.5 8.5 20.8 12 22V24C12 24 12.2 23.9 12.4 23.8C13 23.4 18 19.8 18 13.5C18 7.5 12 0 12 0ZM12 20.3C9.4 19.2 7.7 16.5 7.7 13.5C7.7 9.8 11.2 4.4 12 3.1V20.3Z" />
      </svg>
    ),
  },
  {
    name: "Appwrite",
    category: "backend",
    role: "Backend-as-a-Service",
    accent: "text-[#fd366e]",
    badge: "bg-[#ff2a70] text-white",
    icon: (
      <svg className="w-5 h-5 text-[#fd366e]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6-6.5 3.6-6.5-3.6L12 4.5zM5 8.8l6 3.3v6.7l-6-3.3V8.8zm8 10V12.1l6-3.3v6.7l-6 3.3z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "backend",
    role: "Relational DB",
    accent: "text-[#00758f]",
    badge: "bg-[#38bdf8] text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-[#00758f] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
        SQL
      </div>
    ),
  },
  {
    name: "JWT & Auth",
    category: "backend",
    role: "Secure Cookies",
    accent: "text-[#c084fc]",
    badge: "bg-[#ffd000] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#c084fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },

  // Cloud & AI
  {
    name: "AWS Cloud",
    category: "cloud",
    role: "Certified Practitioner",
    accent: "text-[#ff9900]",
    badge: "bg-[#ffd000] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#ff9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.8 15.5c-2.4 0-4.3-1.9-4.3-4.3 0-2.2 1.6-4 3.8-4.3C7 4.1 9.4 2 12.3 2c3.4 0 6.2 2.7 6.3 6.1 2 .4 3.4 2.1 3.4 4.2 0 2.4-1.9 4.3-4.3 4.3H6.8zm11-1.3c1.7 0 3-1.3 3-3s-1.3-3-3-3h-.9v-.9c0-2.6-2.1-4.7-4.7-4.7-2.3 0-4.3 1.7-4.6 4l-.2 1.2-1.2.2c-1.5.2-2.7 1.6-2.7 3.2 0 1.8 1.4 3.2 3.2 3.2h11.1z" />
      </svg>
    ),
  },
  {
    name: "Generative AI",
    category: "cloud",
    role: "LLM APIs & Prompting",
    accent: "text-[#ff2a70]",
    badge: "bg-[#ff2a70] text-white",
    icon: (
      <svg className="w-5 h-5 text-[#ff2a70]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    role: "Version Control",
    accent: "text-[#f05032]",
    badge: "bg-[#ffd000] text-black",
    icon: (
      <svg className="w-5 h-5 text-[#f05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l8 8c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8-8c-.8-.7-.8-2 0-2.8zm12.3 2.8v-2.3c-.6-.2-1.2-.2-1.7 0v3.4c.5.3.8.8.8 1.4 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.6.3-1.1.8-1.4v-4.1c-.5-.3-.8-.8-.8-1.4 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .6-.3 1.1-.8 1.4v1.8c.8-.2 1.9-.3 2.8.4.9.7.9 1.8.9 2.5zm-3.8-5c0-.4-.4-.8-.8-.8s-.8.4-.8.8.4.8.8.8.8-.4.8-.8zm0 8.8c0-.4-.4-.8-.8-.8s-.8.4-.8.8.4.8.8.8.8-.4.8-.8z" />
      </svg>
    ),
  },
  {
    name: "Postman",
    category: "tools",
    role: "API Testing",
    accent: "text-[#ff6c37]",
    badge: "bg-[#ff6a00] text-white",
    icon: (
      <svg className="w-5 h-5 text-[#ff6c37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V17h-2v-.07A6.002 6.002 0 0 1 6.07 12H7v-2h-.93A6.002 6.002 0 0 1 11 6.07V7h2v-.93A6.002 6.002 0 0 1 17.93 11H17v2h.93A6.002 6.002 0 0 1 13 16.93z" />
      </svg>
    ),
  },
  {
    name: "Vercel & Render",
    category: "tools",
    role: "Cloud Deployments",
    accent: "text-white",
    badge: "bg-[#a6e82e] text-black",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    category: "tools",
    role: "Primary IDE",
    accent: "text-[#38bdf8]",
    badge: "bg-[#38bdf8] text-black",
    icon: (
      <div className="w-5 h-5 rounded bg-[#007acc] text-white font-extrabold text-[9px] flex items-center justify-center font-mono">
        VSC
      </div>
    ),
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-14 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Compact Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
            // ARSENAL
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight leading-none mt-1">
            CORE SKILLS
          </h2>
        </div>

        {/* Minimal Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
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

      {/* Minimized Logo Badge Grid (No long sentences, clean 1-2 words descriptor) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="p-3.5 rounded-xl studio-card flex items-center gap-3 hover:-translate-y-0.5 transition-all group"
          >
            {/* Tech Logo */}
            <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-zinc-700 transition-colors">
              {skill.icon}
            </div>

            {/* Name & 1-2 words descriptor */}
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white truncate font-heading group-hover:text-[#ffd000] transition-colors">
                {skill.name}
              </div>
              <div className="text-[10px] text-zinc-400 font-mono truncate mt-0.5">
                {skill.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
