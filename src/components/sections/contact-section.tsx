"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Send,
  MessageSquare,
  Terminal,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/common/reveal";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
    );
    return `mailto:${profile.socials.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg("Please enter a message of at least 10 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setErrorMsg(
          data.error ||
            "Could not send your message. Please use the direct email option."
        );
        return;
      }

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#10b981", "#06b6d4", "#38bdf8"],
      });
    } catch {
      setErrorMsg(
        "Network error while submitting the form. You can send directly via email below."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct info & links */}
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build impactful software together.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I am actively looking for full-stack, backend, and AI engineering opportunities where I can solve challenging problems, optimize database systems, and deliver high-quality products.
            </p>

            {/* Direct Email & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm space-y-2 hover:border-zinc-700 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="font-mono text-xs text-zinc-100 font-semibold truncate hover:text-emerald-400 transition-colors"
                  >
                    {profile.socials.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    type="button"
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    className="flex items-center gap-1 rounded-md border border-zinc-700/80 bg-zinc-800 px-2 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-colors shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <Check className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm space-y-2 hover:border-zinc-700 transition-colors">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Phone
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${profile.phone}`}
                    className="font-mono text-xs text-zinc-100 font-semibold hover:text-emerald-400 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </Reveal>

          {/* Right Column: Interactive Form */}
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-8 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out, {formData.name}. Your message has been delivered and I&apos;ll reply to {formData.email} promptly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          message: "",
                          website: "",
                        });
                      }}
                      className="mt-4"
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                      <span>SEND A MESSAGE</span>
                    </div>

                    {/* Honeypot field for spam bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-zinc-300">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Miller"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-zinc-300">
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
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-mono text-zinc-300"
                      >
                        Message / Opportunity Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Tell me about the role, project, or what you're building..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="rounded-xl border border-amber-500/40 bg-amber-950/30 p-3 text-xs text-amber-200 space-y-2"
                      >
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{errorMsg}</span>
                        </div>
                        <a
                          href={buildMailtoHref()}
                          className="inline-flex items-center gap-1.5 font-mono text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
                        >
                          <span>Open pre-filled email in your mail app</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      className="w-full mt-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
