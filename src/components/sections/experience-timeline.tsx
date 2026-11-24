import React from "react";
import { experiences, ExperienceItem } from "@/data/experience";
import { profile } from "@/data/profile";
import { Briefcase, GraduationCap, Calendar, MapPin, Terminal, Award, Languages } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>CAREER &amp; TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Background
          </h2>
          <p className="mt-3 text-zinc-400 leading-relaxed text-base">
            Where I have shipped production business software, engineered AI agent workflows, and solved real-world enterprise constraints.
          </p>
        </div>

        {/* Timeline items */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {experiences.map((item: ExperienceItem) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[38px] sm:-left-[46px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-emerald-400 group-hover:border-emerald-500 group-hover:scale-110 transition-all">
                {item.type === "Education" ? (
                  <GraduationCap className="h-3.5 w-3.5" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7 backdrop-blur-sm hover:border-zinc-700/80 transition-all duration-200">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <span className="text-emerald-400 font-medium text-sm">
                      @ {item.company}
                    </span>
                    {item.current && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 font-semibold">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Responsibilities bullets */}
                <ul className="mt-4 space-y-2 border-t border-zinc-800/60 pt-4">
                  {item.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-emerald-400 font-mono font-bold mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Languages Card Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Certifications (2 cols) */}
          <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
              <Award className="h-4 w-4" />
              <span className="uppercase tracking-wider">Professional Certifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-zinc-800/70 bg-zinc-950/50 flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-zinc-200">
                    {cert.title}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-400/90 font-medium">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Quick Info (1 col) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                <Languages className="h-4 w-4" />
                <span className="uppercase tracking-wider">Spoken Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-lg border border-zinc-700/60 bg-zinc-800 text-zinc-200 text-xs font-mono"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/70 text-xs font-mono text-zinc-400">
              <div className="text-zinc-500 text-[11px]">Primary Location:</div>
              <div className="text-zinc-200 font-medium mt-0.5">{profile.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
