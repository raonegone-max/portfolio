import { Button } from "@/components/Button";
import { Menu, X, Terminal, Sparkles, Send } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", tag: "01" },
  { href: "#skills", label: "Skills", tag: "02" },
  { href: "#projects", label: "Projects", tag: "03" },
  { href: "#experience", label: "Journey", tag: "04" },
  { href: "#contact", label: "Contact", tag: "05" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06090e]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Cyberpunk Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-base font-bold tracking-wider text-slate-100 hover:text-cyan-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <span>
            AG<span className="text-cyan-400">.</span>DEV
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse mr-1" />
            SYS_ONLINE
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-800/80 shadow-inner flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-[10px] text-cyan-400/60">{link.tag}</span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Aryan_Gupta_Resume.pdf"
            download="Aryan_Gupta_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/5 transition-all"
          >
            Resume.pdf
          </a>
          <a href="#contact">
            <Button size="sm" variant="primary" className="shadow-[0_0_20px_rgba(0,242,254,0.3)]">
              <Send className="w-3.5 h-3.5" />
              <span>Let's Build</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Modal / Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-2xl border-b border-cyan-500/20 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400">// NAVIGATION_INDEX</span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 font-mono text-sm transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">[{link.tag}]</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Aryan_Gupta_Resume.pdf"
                download="Aryan_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-cyan-500/30 bg-slate-900/80 text-cyan-300 text-xs font-mono text-center flex items-center justify-center gap-2"
              >
                <span>Download Resume (PDF)</span>
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                <Button size="default" variant="primary" className="w-full">
                  <Send className="w-4 h-4" />
                  Initiate Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

