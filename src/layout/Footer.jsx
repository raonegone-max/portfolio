import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/raonegonemax", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-gupta/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
];

const footerLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
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
    <footer className="py-12 border-t border-zinc-800/80 bg-[#0b0c0f] mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          {/* Logo & Meta */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-white hover:text-[#ffd000] transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
              </div>
              <span>Aryan Gupta</span>
            </a>
            <p className="text-xs font-mono text-zinc-500">
              © {currentYear} Aryan Gupta. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-xs font-mono">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Return to Top */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer ml-1"
              title="Return to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
          <span>Vivekananda Institute of Professional Studies (VIPS, GGSIPU)</span>
          <span>Delhi NCR, India</span>
        </div>
      </div>
    </footer>
  );
};
