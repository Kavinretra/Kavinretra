"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { ExternalLink, Database, Server, Laptop, ChevronDown, ChevronUp, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const [expandedDiagram, setExpandedDiagram] = useState<string | null>(null);

  const toggleDiagram = (id: string) => {
    setExpandedDiagram(expandedDiagram === id ? null : id);
  };

  return (
    <section id="work" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>PRODUCTION CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Work
            </h2>
            <p className="mt-3 text-zinc-400 leading-relaxed text-base">
              Deep dives into full-stack systems showing architectural decisions, relational database schemas, and measurable performance optimizations.
            </p>
          </div>

          <a
            href="https://github.com/Kavinretra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors py-2"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Browse all repositories</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="rounded-3xl border border-zinc-800/90 bg-zinc-900/30 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/50"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header Row: Category, Index, Title, Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 tracking-wide uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-800/80 border border-zinc-700/60 px-3 py-1.5 rounded-lg hover:border-zinc-600 transition-all"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 hover:text-emerald-200 bg-emerald-950/50 border border-emerald-800/50 px-3 py-1.5 rounded-lg hover:border-emerald-600 transition-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Narrative */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-emerald-400/90 font-mono">
                    {project.tagline}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Architecture Spec Grid */}
                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-medium">
                      <Laptop className="h-3.5 w-3.5" />
                      <span>CLIENT TIER</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.architecture.client}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium">
                      <Server className="h-3.5 w-3.5" />
                      <span>SERVER TIER</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.architecture.server}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-medium">
                      <Database className="h-3.5 w-3.5" />
                      <span>DATABASE TIER</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.architecture.database}
                    </p>
                  </div>
                </div>

                {/* ASCII Architecture Diagram Toggle */}
                {project.diagramAscii && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleDiagram(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>
                        {expandedDiagram === project.id ? "Hide System Diagram" : "View Architecture Topology"}
                      </span>
                      {expandedDiagram === project.id ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>

                    {expandedDiagram === project.id && (
                      <div className="mt-3 p-4 rounded-xl bg-black border border-zinc-800 text-xs font-mono text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                        {project.diagramAscii}
                      </div>
                    )}
                  </div>
                )}

                {/* Engineering Challenges & Solutions */}
                <div className="mt-8 space-y-4">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Engineering Challenges &amp; Trade-offs
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {project.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-2 text-xs leading-relaxed"
                      >
                        <div className="text-red-300/90 font-medium flex items-start gap-2">
                          <span className="font-mono text-red-400 shrink-0 font-bold">[Problem]</span>
                          <span>{c.problem}</span>
                        </div>
                        <div className="text-emerald-300/90 font-medium flex items-start gap-2">
                          <span className="font-mono text-emerald-400 shrink-0 font-bold">[Solution]</span>
                          <span>{c.solution}</span>
                        </div>
                        {c.tradeoff && (
                          <div className="text-zinc-400 flex items-start gap-2 pl-6 italic">
                            <span className="text-zinc-500 font-mono">Trade-off:</span>
                            <span>{c.tradeoff}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Metrics & Stack Pills */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Metrics */}
                  <div className="flex flex-wrap items-center gap-4">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 px-3 py-1.5"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="font-mono text-xs font-bold text-white">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-mono">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
