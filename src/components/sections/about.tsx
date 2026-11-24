import React from "react";
import { Database, Server, Cpu, CheckCircle2, ShieldCheck, Zap, GitBranch, Terminal } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Database,
      title: "Relational Data Modeling & Indexing",
      badge: "MySQL / PostgreSQL",
      description:
        "I treat database design as the foundation of application scalability. I normalize schemas (3NF), design composite indexes to support critical access patterns, and use EXPLAIN plans to eliminate N+1 queries in ORMs.",
      points: [
        "Index tuning for high-cardinality filters",
        "ACID transactions with row-level locks",
        "Strict foreign key relational constraints",
      ],
    },
    {
      icon: Server,
      title: "Resilient RESTful Backend Architecture",
      badge: "Django / Node.js",
      description:
        "Building predictable, secure, and throttled API endpoints. Decoupling business logic from presentation through clean serializers, middleware error pipelines, and stateless JWT token authentication.",
      points: [
        "Standardized RFC status codes & error responses",
        "Granular Role-Based Access Control (RBAC)",
        "Idempotency patterns for webhook processing",
      ],
    },
    {
      icon: Zap,
      title: "Snappy, Modern React Interfaces",
      badge: "React / Next.js / Tailwind",
      description:
        "Writing modular, type-safe React code that feels instantaneous to the user. Leveraging optimistic UI updates, debounced inputs, lazy loading, and accessible semantic markup.",
      points: [
        "Component reuse & clean state lifting",
        "Responsive, mobile-first design tokens",
        "Sub-second load times & 0 layout shift",
      ],
    },
    {
      icon: Cpu,
      title: "Product Engineering & End-to-End Ownership",
      badge: "Ship & Iterate",
      description:
        "Bridging the gap between product requirements and technical execution. I enjoy turning ambiguous specs into working prototypes, validating edge cases, and taking full responsibility for uptime.",
      points: [
        "Direct translation of business logic to code",
        "Structured logging & quick debugging",
        "Curiosity for distributed systems & scalability",
      ],
    },
  ];

  return (
    <section id="systems" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>ARCHITECTURE &amp; MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I approach building software.
          </h2>
          <p className="mt-3 text-zinc-400 leading-relaxed text-base">
            Software isn&apos;t just code snippets in isolation—it&apos;s a continuous pipeline of data modeling, predictable server contracts, and intuitive interfaces that solve real-world problems.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 backdrop-blur-sm hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all duration-300"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
