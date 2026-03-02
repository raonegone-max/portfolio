const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "Frontend Developer (Learning Phase)",
    company: "Self Learning",
    description:
      "Started journey with JavaScript and React. Building small projects to understand components, hooks, state management, and responsive UI. Practicing modern frontend workflows and improving problem-solving through daily coding.",
    technologies: ["JavaScript", "React", "HTML", "CSS", "Tailwind"],
    current: true,
  },
  {
    period: "2025 — Present",
    role: "React Project Builder",
    company: "Personal Projects",
    description:
      "Developing beginner-to-intermediate React projects such as portfolio components, UI sections, and practice apps. Focused on reusable components, clean layouts, and understanding real-world project structure.",
    technologies: ["React", "Vite", "Git", "REST APIs"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Programming Fundamentals Learner",
    company: "Self Learning",
    description:
      "Built foundational knowledge in programming concepts, problem solving, and basic web development before moving into React. Practiced algorithms, debugging, and version control basics.",
    technologies: ["JavaScript Basics", "C++", "GitHub"],
    current: false,
  },
  {
    period: "Before 2024",
    role: "Tech Enthusiast / Student",
    company: "Academic Practice",
    description:
      "Explored basic computer science concepts and experimented with simple web pages and coding exercises. Developed interest in frontend development which led to starting React in 2025.",
    technologies: ["HTML", "CSS", "Basic Programming"],
    current: false,
  },
];


export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            My{" "}
            <span className="font-serif italic font-normal text-white">
              Learning Journey.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            My journey into JavaScript and React — building projects,
            strengthening fundamentals, and continuously growing as a frontend
            developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.period + exp.role}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-primary/30
                    hover:border-primary/50 transition-all duration-500
                    hover:-translate-y-1"
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs
                          rounded-full text-muted-foreground"
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