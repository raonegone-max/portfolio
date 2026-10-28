import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "academic", label: "Academic Projects" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "ai", label: "Generative AI" },
];

const projects = [
  {
    title: "AI Interview Prep Planner",
    subtitle: "React, Node.js/Express, Generative AI (LLM) API",
    category: "academic",
    secondaryCategory: "ai",
    status: "ACADEMIC_PROJECT // GEN_AI",
    isAcademic: true,
    description:
      "A generative AI web application that takes a user's resume and a target job description to produce a tailored interview-preparation plan, role-specific questions, and a customized preparation roadmap.",
    image: "/projects/blog-website.png",
    tags: ["React", "Node.js", "Express.js", "Generative AI (LLM) API", "Prompt Engineering", "Tailwind CSS"],
    features: [
      "Built a generative AI web app that takes a user's resume and a target job description and produces a tailored interview-preparation plan.",
      "Generated likely technical and behavioral interview questions specific to the role by prompting an LLM with parsed resume and JD content.",
      "Designed a structured preparation roadmap (topics to review, skill gaps, suggested timeline) with a decoupled Frontend/Backend architecture.",
    ],
    metric: "Generative AI (LLM)",
    link: "https://github.com/raonegonemax",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
  },
  {
    title: "EventHub",
    subtitle: "React, Node.js/Express, MongoDB, JWT",
    category: "academic",
    secondaryCategory: "fullstack",
    status: "ACADEMIC_PROJECT // LIVE",
    isAcademic: true,
    description:
      "A full-stack campus event platform where organizers create events and students search, filter, and RSVP; deployed live on Vercel, Render, and MongoDB Atlas.",
    image: "/projects/amazon-clone.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Vercel", "Render", "Tailwind CSS"],
    features: [
      "Built a full-stack campus event platform where organizers create events and students search, filter, and RSVP; deployed on Vercel, Render, and MongoDB Atlas.",
      "Implemented role-based access, JWT auth in HTTP-only cookies with logout token blacklisting, protected routes, and server-enforced RSVP capacity limits.",
    ],
    metric: "Live on Vercel & Render",
    link: "https://eventhub-khaki-five.vercel.app",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  },
  {
    title: "Blog Management System",
    subtitle: "React, Appwrite, Tailwind CSS",
    category: "academic",
    secondaryCategory: "fullstack",
    status: "ACADEMIC_PROJECT // BAAS",
    isAcademic: true,
    description:
      "A full-stack blog platform with user authentication, post creation, editing, and deletion using React for the frontend and Appwrite as the backend-as-a-service for database, storage, and auth.",
    image: "/projects/blog-website.png",
    tags: ["React", "Appwrite BaaS", "Tailwind CSS", "React Router", "Cloud Storage", "User Auth"],
    features: [
      "Developed a full-stack blog platform with user authentication, post creation, editing, and deletion using React for the frontend and Appwrite as the backend-as-a-service for database, storage, and auth.",
      "Implemented protected routes, real-time content updates, rich text editing, and file/image upload functionality with Appwrite Storage and React Router.",
    ],
    metric: "Appwrite Cloud BaaS",
    link: "https://github.com/raonegonemax",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
  },
  {
    title: "Gemini Clone // Conversational AI Assistant",
    subtitle: "React, Google Gemini API, Tailwind CSS",
    category: "ai",
    secondaryCategory: "frontend",
    status: "AI_ASSISTANT",
    isAcademic: false,
    description:
      "Conversational AI chatbot application powered by the Google Gemini API. Implements real-time AI responses, context-aware prompt sessions, animated typing simulation, and chat history management.",
    image: "/projects/spotify-clone.png",
    tags: ["React", "Google Gemini API", "Tailwind CSS", "React Hooks", "Vite"],
    features: [
      "Conversational streaming with Google Gemini REST API",
      "Dynamic prompt suggestions and contextual session history",
      "Responsive cyberpunk dark theme with fluid animations",
    ],
    metric: "Conversational UI",
    link: "https://github.com/raonegonemax",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  },
  {
    title: "Jan-Shiksha (जन-शिक्षा) // Citizen Innovation Hub",
    subtitle: "React, Context API, Node.js, Express",
    category: "fullstack",
    secondaryCategory: "fullstack",
    status: "CITIZEN_PORTAL",
    isAcademic: false,
    description:
      "Multi-portal platform connecting Citizens, Universities, Industry Partners, and Administrators with challenge submissions, impact analytics, and centralized state management.",
    image: "/projects/github-fetcher.png",
    tags: ["React", "Context API", "Node.js", "Express", "Tailwind CSS"],
    features: [
      "Dedicated portals for Citizens, Universities, Industry & Admins",
      "Interactive problem submission and challenge resolution modals",
      "Decoupled architecture with impact metrics dashboard",
    ],
    metric: "Multi-Portal OS",
    link: "https://github.com/raonegonemax",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-amber-500/40 text-amber-300 bg-amber-500/10",
  },
  {
    title: "Retail Sales Forecasting & ML Analytics",
    subtitle: "Python, Pandas, Scikit-Learn, HTML5",
    category: "fullstack",
    secondaryCategory: "data",
    status: "DATA_SCIENCE",
    isAcademic: false,
    description:
      "End-to-end Python data pipeline executing automated cleaning, exploratory data analysis (EDA), feature engineering, monthly sales trend forecasting, and interactive HTML dashboard generation.",
    image: "/projects/amazon-clone.png",
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "HTML5"],
    features: [
      "Automated data ingestion, outlier cleaning, and feature engineering",
      "Predictive monthly sales trends and performance metrics",
      "Interactive analytics dashboard output",
    ],
    metric: "Predictive Analytics",
    link: "https://github.com/raonegonemax",
    github: "https://github.com/raonegonemax",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
  },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.secondaryCategory === activeFilter ||
            (activeFilter === "academic" && p.isAcademic)
        );

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#06090e] cyber-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 03. AUTHENTIC_PROJECTS & SHIPPED_SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Real Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
              Engineering Work
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Real-world full-stack web applications, Generative AI tools, and data science pipelines
            built with React, Node.js, Express, MongoDB, and Python.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;
              const isActive = activeFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-105"
                      : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-200"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1b] border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(0,242,254,0.15)] transition-all duration-500 flex flex-col overflow-hidden relative"
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden aspect-video bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1b] via-[#0a0f1b]/40 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border backdrop-blur-md font-semibold ${project.badgeColor}`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800">
                    {project.metric}
                  </span>
                </div>

                {/* Overlay Action Buttons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/60 backdrop-blur-xs">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-heading">
                      {project.title}
                    </h3>
                    {project.isAcademic && (
                      <span className="shrink-0 text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                        Resume Project
                      </span>
                    )}
                  </div>

                  {project.subtitle && (
                    <div className="text-[11px] font-mono text-cyan-400/90 mt-1">
                      {project.subtitle}
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-2 pt-3 border-t border-slate-800/60">
                    {project.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-[11px] text-slate-300 font-mono leading-relaxed"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags & Links Footer */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/40">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group/link"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#0d1527] to-slate-900/80 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(0,242,254,0.06)]">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-cyan-400">// GITHUB: @raonegonemax</div>
            <h3 className="text-xl font-bold text-slate-100 font-heading">
              Explore more repositories on GitHub
            </h3>
            <p className="text-xs text-slate-400">
              Browse repositories, source code, pull requests, and ongoing projects on github.com/raonegonemax.
            </p>
          </div>

          <a
            href="https://github.com/raonegonemax"
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button size="default" variant="secondary" className="font-mono text-xs">
              <Github className="w-4 h-4" />
              <span>github.com/raonegonemax</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};