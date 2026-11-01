import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#787f8a] p-0 sm:p-4 md:p-6 lg:p-8 font-sans selection:bg-[#ffd000] selection:text-black">
      {/* Studio Header Meta Bar (as shown in reference image) */}
      <div className="hidden sm:flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-300 px-4 pb-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Portfolio / Engineering Exploration</span>
        </div>
        <div className="font-semibold text-white">Aryan Gupta</div>
        <div>BCA @ VIPS — 2026</div>
      </div>

      {/* Main Studio Frame Canvas */}
      <div className="studio-viewport rounded-none sm:rounded-2xl lg:rounded-3xl shadow-2xl border-0 sm:border border-black/30 overflow-hidden max-w-7xl mx-auto flex flex-col min-h-[92vh]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Studio Footer Meta Bar (as shown in reference image) */}
      <div className="hidden sm:flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-300 px-4 pt-3 max-w-7xl mx-auto">
        <span>Full-Stack & Generative AI Developer</span>
        <span>Based in Delhi NCR, India</span>
      </div>
    </div>
  );
}

export default App;
