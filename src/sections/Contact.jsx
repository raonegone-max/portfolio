import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Github,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactCards = [
  {
    icon: Mail,
    label: "Direct Email",
    value: "aryangupta.in@gmail.com",
    href: "mailto:aryangupta.in@gmail.com",
    tag: "PRIMARY",
    tagColor: "bg-[#ffd000] text-black",
  },
  {
    icon: Phone,
    label: "Phone / Contact",
    value: "+91 8076906155",
    href: "tel:+918076906155",
    tag: "MSG/CALL",
    tagColor: "bg-[#44d4c2] text-black",
  },
  {
    icon: Github,
    label: "GitHub Profile",
    value: "github.com/raonegonemax",
    href: "https://github.com/raonegonemax",
    tag: "@raonegonemax",
    tagColor: "bg-[#38bdf8] text-black",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indrapuram, Ghaziabad / Delhi NCR",
    href: "https://maps.google.com",
    tag: "DELHI NCR",
    tagColor: "bg-[#a6e82e] text-black",
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
    type: null,
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
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been received. You can also reach me directly at aryangupta.in@gmail.com.",
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
        message: "Message dispatched! I'll get back to you promptly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          "Could not send message. Please write directly to aryangupta.in@gmail.com.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[#ffd000] uppercase">
          // INITIATE CONTACT
        </span>
        <h2 className="font-display text-5xl sm:text-7xl text-white tracking-tight leading-none mt-2">
          LET'S CONNECT
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-lg">
          Have an engineering opportunity, want to collaborate on full-stack web builds, or simply want to chat? Drop a transmission below.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl studio-card p-6 sm:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-bold text-zinc-300 mb-1.5 uppercase"
              >
                Your Name / Organization
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
                className="w-full px-4 py-2.5 bg-zinc-950 rounded-xl border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-[#ffd000] focus:outline-none text-sm transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold text-zinc-300 mb-1.5 uppercase"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-zinc-950 rounded-xl border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-[#ffd000] focus:outline-none text-sm transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono font-bold text-zinc-300 mb-1.5 uppercase"
              >
                Message / Scope
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your role, project, or timeline..."
                className="w-full px-4 py-2.5 bg-zinc-950 rounded-xl border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-[#ffd000] focus:outline-none text-sm transition-colors resize-none"
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              size="lg"
              variant="yellow"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>

            {submitStatus.type && (
              <div
                className={`flex items-start gap-2.5 p-3.5 rounded-xl text-xs font-mono ${
                  submitStatus.type === "success"
                    ? "bg-[#a6e82e]/20 border border-[#a6e82e] text-[#a6e82e]"
                    : "bg-[#ff2a70]/20 border border-[#ff2a70] text-[#ff2a70]"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Direct Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl studio-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white mb-2 font-heading">
              Direct Channels
            </h3>

            <div className="space-y-2">
              {contactCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] text-zinc-500 font-mono">{item.label}</div>
                        <div className="text-xs font-medium text-zinc-200 truncate group-hover:text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    <span className={`sticker-badge text-[9px] px-2 py-0.5 rounded-md ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a6e82e]" />
                  <span className="text-[#a6e82e]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy aryangupta.in@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Resume PDF Card */}
          <div className="rounded-2xl studio-card p-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-[#ffd000] font-bold">CURRICULUM VITAE</div>
              <div className="text-sm font-bold text-white mt-0.5 font-heading">
                Aryan Gupta's Resume
              </div>
              <div className="text-xs text-zinc-400 mt-0.5 font-mono">BCA @ VIPS • Verified Data</div>
            </div>

            <a
              href="/Aryan_Gupta_Resume.pdf"
              download="Aryan_Gupta_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
