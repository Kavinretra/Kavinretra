"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Terminal, Database, Server, Code2, Layers, Sparkles, Cloud, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenCommandPalette?: () => void;
}

export function Hero({ onOpenCommandPalette }: HeroProps) {
  const corePillars = [
    { label: "React.js", category: "Frontend", icon: Code2, color: "text-cyan-400" },
    { label: "Python & Django", category: "Backend", icon: Server, color: "text-emerald-400" },
    { label: "AI & Agents", category: "Intelligent Workflows", icon: Sparkles, color: "text-amber-400" },
    { label: "Node.js", category: "Services", icon: Layers, color: "text-green-400" },
    { label: "MySQL & AWS", category: "Cloud & Data", icon: Cloud, color: "text-sky-400" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Responsive Grid: Left info, Right photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Availability Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono text-emerald-300 backdrop-blur-sm shadow-sm shadow-emerald-950/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status.text}</span>
              </div>

              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 pt-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Full-Stack Engineer crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                  enterprise systems
                </span>{" "}
                &amp; AI workflows.
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal pt-2">
                Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span>. Full-Stack Developer with 2+ years of experience engineering scalable business platforms (CRM, HRMS, Accounting) and AI agent workflows using{" "}
                <span className="text-zinc-100 font-medium">Python &amp; Django</span>,{" "}
                <span className="text-zinc-100 font-medium">React.js</span>,{" "}
                <span className="text-zinc-100 font-medium">Node.js</span>,{" "}
                <span className="text-zinc-100 font-medium">MySQL</span>, and{" "}
                <span className="text-zinc-100 font-medium">AWS</span>.
              </p>
            </div>

            {/* Interactive Stack Pillars */}
            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-zinc-500 mr-1">Core Arsenal:</span>
              {corePillars.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-200 backdrop-blur-sm hover:border-zinc-700 transition-colors"
                  >
                    <Icon className={`h-3 w-3 ${pill.color}`} />
                    <span className="font-medium text-xs">{pill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                size="md"
                variant="primary"
                onClick={() => {
                  const el = document.getElementById("work");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Work
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                size="md"
                variant="secondary"
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                Contact Me
              </Button>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-xs font-medium gap-1.5"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-xs font-medium gap-1.5"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>

              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 h-10 px-3 rounded-lg border border-dashed border-zinc-700/80 bg-zinc-950/40 text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-emerald-500/50 transition-all"
                title="Press Cmd + K anywhere"
              >
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span>Cmd + K</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-End Portrait Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[360px]">
              {/* Vibrant ambient glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-sky-500/25 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl border border-zinc-800/90 bg-zinc-900/80 p-2.5 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle lower gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Identity & Status Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between shadow-lg">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        {profile.name}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                        Software Engineer • CoolGen
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/50">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-300 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Metric Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-zinc-800/80">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 backdrop-blur-sm hover:border-zinc-700/60 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-emerald-400 mt-1 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
