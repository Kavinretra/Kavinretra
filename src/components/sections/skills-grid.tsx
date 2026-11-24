import React from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Server, Layout, Database, Cpu, Terminal, Sparkles } from "lucide-react";

export function SkillsGrid() {
  const iconMap: Record<string, React.ElementType> = {
    Server: Server,
    Layout: Layout,
    Database: Database,
    Cpu: Cpu,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Stack &amp; Toolkit
          </h2>
          <p className="mt-3 text-zinc-400 leading-relaxed text-base">
            No arbitrary percentage bars. Here is my core engineering toolkit, categorized by where and how I apply each technology in production.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category: SkillCategory) => {
            const Icon = iconMap[category.icon] || Cpu;
            return (
              <div
                key={category.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm hover:border-zinc-700/80 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/90 border border-zinc-700/80 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2.5 rounded-xl border border-zinc-800/60 bg-zinc-950/40 hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-zinc-200 font-mono group-hover:text-emerald-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.featured && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.2 rounded">
                            <Sparkles className="h-2.5 w-2.5" />
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {skill.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
