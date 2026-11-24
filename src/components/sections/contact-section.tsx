"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, MessageSquare, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#10b981", "#06b6d4", "#38bdf8"],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct info & links */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build impactful software together.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I am actively looking for full-stack and backend software engineering opportunities where I can solve challenging problems, optimize database systems, and deliver high-quality products.
            </p>

            {/* Direct Email & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-zinc-100 font-semibold truncate select-all">
                    {profile.socials.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    type="button"
                    className="flex items-center gap-1 rounded-md border border-zinc-700/80 bg-zinc-800 px-2 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-colors shrink-0"
                  >
                    {copied ? (
                      <Check className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm space-y-2">
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
          </div>

          {/* Right Column: Interactive Form */}
          <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-8 backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. I&apos;ll review your note and respond back to {formData.email} promptly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                  <span>SEND A MESSAGE</span>
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-zinc-300">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about the role, project, or what you're building..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
