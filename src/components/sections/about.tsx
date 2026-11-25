import React from "react";
import {
  Database,
  Server,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";

export function About() {
  const pillars = [
    {
      icon: Database,
      title: "Relational Data Modeling & Indexing",
      badge: "MySQL / PostgreSQL",
      description:
        "I treat database design as the foundation of application reliability. I normalize schemas, design indexes around real query patterns, and enforce referential integrity across financial and CRM pipelines.",
      points: [
        "Normalized relational schemas & foreign keys",
        "ACID transactions for ledger consistency",
        "Query optimization & clean ORM usage",
      ],
    },
    {
      icon: Server,
      title: "Resilient RESTful Backend Architecture",
      badge: "Django / Node.js",
      description:
        "Building predictable, secure API endpoints. Separating business logic from transport with clean serializers, middleware error pipelines, JWT authentication, and granular RBAC.",
      points: [
        "Clean HTTP contracts & request validation",
        "Stateless JWT auth & hierarchical RBAC",
        "Dockerized Django & Node.js service parity",
      ],
    },
    {
      icon: Sparkles,
      title: "AI Agents & Agentic Workflows",
      badge: "LLMs / Tool Calling",
      description:
        "Designing practical LLM-powered automation workflows. Combining structured prompt engineering, strict JSON schema validation, and function orchestration so agents interact safely with backend tools.",
      points: [
        "Tool calling & function orchestration loops",
        "System guardrails & schema validation",
        "AI-assisted business workflow automation",
      ],
    },
    {
      icon: Zap,
      title: "Snappy React UIs & End-to-End Ownership",
      badge: "React / Next.js / AWS",
      description:
        "Building modular, responsive interfaces paired with cloud deployment. I focus on reusable component architecture, accessibility, AWS S3/EC2 integration, and owning features from spec to production.",
      points: [
        "Reusable React component libraries",
        "Responsive, accessible UI & SEO focus",
        "AWS S3 document vaults & Dockerized builds",
      ],
    },
  ];

  return (
    <section id="systems" className="scroll-mt-20 py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>ARCHITECTURE &amp; MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I approach building software.
          </h2>
          <p className="mt-3 text-zinc-400 leading-relaxed text-base">
            Software isn&apos;t just code snippets in isolation—it&apos;s a continuous pipeline of data modeling, predictable server contracts, intelligent automation, and intuitive interfaces that solve real business problems.
          </p>
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={idx * 0.05}>
                <div className="group relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7 backdrop-blur-sm hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800/90 border border-zinc-700 text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-zinc-800/80 pt-4">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
