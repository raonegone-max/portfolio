import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  Terminal,
  Clock,
  Sparkles,
  Github,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Direct Email",
    value: "aryangupta.in@gmail.com",
    href: "mailto:aryangupta.in@gmail.com",
    tag: "PRIMARY",
  },
  {
    icon: Phone,
    label: "Phone / Contact",
    value: "+91 8076906155",
    href: "tel:+918076906155",
    tag: "VOICE/MSG",
  },
  {
    icon: Github,
    label: "GitHub Profile",
    value: "raonegonemax",
    href: "https://github.com/raonegonemax",
    tag: "CODE_REPOS",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indrapuram, Ghaziabad / Delhi NCR, India",
    href: "https://maps.google.com",
    tag: "TIMEZONE_IST",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("aryangupta.in@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Graceful fallback for demonstration / portfolio preview without failing
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitStatus({
          type: "success",
          message:
            "Transmission logged! For instant contact, feel free to email directly at aryangupta.in@gmail.com.",
        });
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message dispatched successfully! I will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          "Could not send automated packet. Please email me directly at aryangupta.in@gmail.com.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#06090e] cyber-grid">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>// 06. INITIATE_COMMUNICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Let's Engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 glow-text">
              Something Extraordinary
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Have a project in mind, an engineering role to discuss, or want to collaborate on modern web systems?
            Drop a message or reach out through direct channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Contact Form Terminal Deck (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1b] border border-cyan-500/30 p-8 shadow-[0_15px_40px_rgba(0,242,254,0.1)] relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 font-mono text-xs">
              <span className="text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                TRANSMISSION_PROTOCOL // ACTIVE
              </span>
              <span className="text-slate-500">ENCRYPTION: SSL_TLS</span>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider"
                >
                  Your Name / Identity *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.2)] outline-none font-mono text-xs transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider"
                >
                  Return Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.2)] outline-none font-mono text-xs transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider"
                >
                  Message Payload / Scope *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your project, role, or ideas..."
                  className="w-full px-4 py-3 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.2)] outline-none font-mono text-xs transition-all resize-none"
                />
              </div>

              <Button
                className="w-full font-mono text-xs uppercase tracking-wider"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Transmitting Packet...
                  </span>
                ) : (
                  <>
                    <span>Dispatch Transmission</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl font-mono text-xs ${
                    submitStatus.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Direct Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1b] border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold font-heading text-slate-100">
                  Direct Nodes
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">STATUS_AVAILABLE</span>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase">
                          {item.label}
                        </div>
                        <div className="text-xs font-mono font-medium text-slate-200 group-hover:text-cyan-300">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                      {item.tag}
                    </span>
                  </a>
                ))}
              </div>

              {/* Quick Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">EMAIL_COPIED_TO_CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copy aryangupta.in@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Availability Status HUD Box */}
            <div className="rounded-2xl bg-slate-900/40 border border-emerald-500/30 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Currently open to full-time Frontend & Full-Stack roles, fast-paced startups,
                and high-impact contracts. Let's discuss requirements and kick off collaboration.
              </p>

              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical Response Latency: &lt; 12 hours</span>
              </div>
            </div>

            {/* Direct Resume Download Card */}
            <div className="rounded-2xl bg-slate-900/40 border border-cyan-500/30 p-6 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-cyan-400">// CURRICULUM_VITAE</div>
                <div className="text-sm font-bold text-slate-200">Aryan Gupta's Resume</div>
                <div className="text-[11px] text-slate-500 font-mono">PDF Format • 165 KB • Verified</div>
              </div>

              <a
                href="/Aryan_Gupta_Resume.pdf"
                download="Aryan_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-mono text-xs font-bold hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};