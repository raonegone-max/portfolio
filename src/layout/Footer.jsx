import { Github, Linkedin, Twitter, ArrowUp, Terminal, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/raonegonemax", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-gupta/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
  { href: "/Aryan_Gupta_Resume.pdf", label: "Resume (PDF)" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#04060a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & System Badge */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-lg font-bold tracking-wider text-slate-100 hover:text-cyan-400 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span>
                AG<span className="text-cyan-400">.</span>DEV
              </span>
            </a>
            <p className="text-xs font-mono text-slate-500">
              © {currentYear} Aryan Gupta. Engineered with React 19 & Tailwind CSS v4.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-5 font-mono text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all ml-2 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* System Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYS_STATUS: ALL_SYSTEMS_NOMINAL</span>
          </div>

          <div>
            NODE_HOST: GH_PAGES // DELPHI_CORE
          </div>
        </div>
      </div>
    </footer>
  );
};
