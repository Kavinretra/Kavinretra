import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">
              {profile.name}
            </span>
            <span className="text-zinc-600 text-xs font-mono">•</span>
            <span className="text-zinc-400 text-xs font-mono">
              {profile.role}
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            Crafted with Next.js 15, React 19, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>github.com/Kavinretra</span>
          </a>

          <a
            href="#top"
            className="flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors p-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50"
            title="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only text-[11px]">Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
