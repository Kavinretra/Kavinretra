"use client";

import React from "react";
import { ArrowRight, Mail, Terminal, Database, Server, Code2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenCommandPalette?: () => void;
}

export function Hero({ onOpenCommandPalette }: HeroProps) {
  const corePillars = [
    { label: "React", category: "Frontend", icon: Code2, color: "text-cyan-400" },
    { label: "Python & Django", category: "Backend", icon: Server, color: "text-emerald-400" },
    { label: "Node.js", category: "Runtime", icon: Layers, color: "text-green-400" },
    { label: "MySQL", category: "Database", icon: Database, color: "text-sky-400" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Status Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono text-emerald-300 backdrop-blur-sm shadow-sm shadow-emerald-950/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.status.text}</span>
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
            • {profile.location}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Full-Stack Engineer building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
              scalable systems
            </span>{" "}
            end-to-end.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal pt-2">
            Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span>. I build production-grade web applications with{" "}
            <span className="text-zinc-100 font-medium">React</span>,{" "}
            <span className="text-zinc-100 font-medium">Python &amp; Django</span>,{" "}
            <span className="text-zinc-100 font-medium">Node.js</span>, and{" "}
            <span className="text-zinc-100 font-medium">MySQL</span>. Passionate about product engineering, clean database schemas, and performant architectures.
          </p>
        </div>

        {/* Interactive Stack Pillars */}
        <div className="mt-8 flex flex-wrap gap-2.5 items-center">
          <span className="text-xs font-mono text-zinc-500 mr-1">Core Stack:</span>
          {corePillars.map((pill) => {
            const Icon = pill.icon;
            return (
              <div
                key={pill.label}
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-200 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <Icon className={`h-3.5 w-3.5 ${pill.color}`} />
                <span className="font-medium">{pill.label}</span>
              </div>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <Button
            size="lg"
            variant="primary"
            onClick={() => {
              const el = document.getElementById("work");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Featured Work
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Mail className="h-4 w-4 text-emerald-400" />
            Get in Touch
          </Button>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-sm font-medium gap-2"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>

          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 h-12 px-4 rounded-xl border border-dashed border-zinc-700/80 bg-zinc-950/40 text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-emerald-500/50 transition-all"
            title="Press Cmd + K anywhere"
          >
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span>Press Cmd + K</span>
          </button>
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
