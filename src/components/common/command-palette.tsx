"use client";

import React, { useState, useEffect } from "react";
import { Search, Terminal, ArrowRight, Mail, Copy, Check, ExternalLink, Code2, Database, Server } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery("");
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const items = [
    {
      type: "navigation",
      label: "View Featured Work & Projects",
      category: "Sections",
      action: () => navigateTo("work"),
      icon: Code2,
    },
    {
      type: "navigation",
      label: "Architecture & System Design Approach",
      category: "Sections",
      action: () => navigateTo("systems"),
      icon: Server,
    },
    {
      type: "navigation",
      label: "Technical Stack (React, Django, Node, MySQL)",
      category: "Sections",
      action: () => navigateTo("skills"),
      icon: Database,
    },
    {
      type: "navigation",
      label: "Work Experience & History",
      category: "Sections",
      action: () => navigateTo("experience"),
      icon: Terminal,
    },
    {
      type: "navigation",
      label: "Contact & Opportunities",
      category: "Sections",
      action: () => navigateTo("contact"),
      icon: Mail,
    },
    // Projects
    ...projects.map((p) => ({
      type: "project",
      label: p.title,
      category: `Project: ${p.category}`,
      action: () => navigateTo("work"),
      icon: Code2,
    })),
    // Actions
    {
      type: "action",
      label: copied ? "Email Copied to Clipboard!" : `Copy Email (${profile.socials.email})`,
      category: "Quick Actions",
      action: copyEmail,
      icon: copied ? Check : Copy,
    },
    {
      type: "action",
      label: "Open GitHub Profile (github.com/Kavinretra)",
      category: "Quick Actions",
      action: () => {
        window.open(profile.socials.github, "_blank");
        onClose();
      },
      icon: GithubIcon,
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800 bg-zinc-950/70">
          <Search className="h-4 w-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search (e.g. Django, Work, Contact)..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/60">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-zinc-500">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-zinc-800/80 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-zinc-700/80 transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-zinc-200 group-hover:text-white">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navigate with click or enter</span>
          <span>Kavin Retra • Full-Stack Portfolio</span>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
