import { Button } from "@/components/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0e0f12]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Brand Pill matching reference image */}
        <a
          href="#"
          className="group flex items-center gap-2.5 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-full transition-all"
        >
          <div className="w-6 h-4 rounded-full bg-white flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>
          <span className="text-xs font-semibold tracking-tight text-white">
            Aryan Gupta
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
            DEV
          </span>
        </a>

        {/* Desktop Nav Items (as in reference image: Work, About, Blog/Skills, Contact) */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Aryan_Gupta_Resume.pdf"
            download="Aryan_Gupta_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 transition-colors"
          >
            Resume.pdf
          </a>
          <a href="#contact">
            <Button size="sm" variant="yellow">
              <span>Get in touch</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0e0f12]/98 border-b border-zinc-800 px-6 py-5">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-zinc-300 hover:text-white text-sm font-medium"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
              <a
                href="/Aryan_Gupta_Resume.pdf"
                download="Aryan_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 text-xs font-mono text-center flex items-center justify-center gap-2"
              >
                <span>Download Resume (PDF)</span>
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                <Button size="default" variant="yellow" className="w-full">
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
