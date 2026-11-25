"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Terminal,
  ArrowRight,
  Mail,
  Copy,
  Check,
  Code2,
  Database,
  Server,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useCommandPalette } from "@/components/common/portfolio-shell";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  type: "navigation" | "project" | "action";
  label: string;
  category: string;
  action: () => void;
  icon: React.ElementType;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollToTarget } = useCommandPalette();

  const navigateTo = (id: string) => {
    onClose();
    setTimeout(() => scrollToTarget(id), 80);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-systems",
        type: "navigation",
        label: "Architecture & AI Engineering Approach",
        category: "Sections",
        action: () => navigateTo("systems"),
        icon: Server,
      },
      {
        id: "nav-work",
        type: "navigation",
        label: "View Featured Work & Case Studies",
        category: "Sections",
        action: () => navigateTo("work"),
        icon: Code2,
      },
      {
        id: "nav-skills",
        type: "navigation",
        label: "Technical Stack (Python, Django, React, AWS)",
        category: "Sections",
        action: () => navigateTo("skills"),
        icon: Database,
      },
      {
        id: "nav-experience",
        type: "navigation",
        label: "Work Experience & Certifications",
        category: "Sections",
        action: () => navigateTo("experience"),
        icon: Terminal,
      },
      {
        id: "nav-contact",
        type: "navigation",
        label: "Contact & Opportunities",
        category: "Sections",
        action: () => navigateTo("contact"),
        icon: Mail,
      },
      ...projects.map((p) => ({
        id: `proj-${p.id}`,
        type: "project" as const,
        label: p.title,
        category: `Project: ${p.category}`,
        action: () => navigateTo(p.id),
        icon: Code2,
      })),
      {
        id: "action-resume",
        type: "action",
        label: "View / Print Resume (PDF)",
        category: "Quick Actions",
        action: () => {
          onClose();
          router.push("/resume");
        },
        icon: FileText,
      },
      {
        id: "action-copy-email",
        type: "action",
        label: copied
          ? "Email Copied to Clipboard!"
          : `Copy Email (${profile.socials.email})`,
        category: "Quick Actions",
        action: copyEmail,
        icon: copied ? Check : Copy,
      },
      {
        id: "action-linkedin",
        type: "action",
        label: "Open LinkedIn Profile",
        category: "Quick Actions",
        action: () => {
          window.open(profile.socials.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
        icon: LinkedinIcon,
      },
      {
        id: "action-github",
        type: "action",
        label: "Open GitHub Profile (github.com/Kavinretra)",
        category: "Quick Actions",
        action: () => {
          window.open(profile.socials.github, "_blank", "noopener,noreferrer");
          onClose();
        },
        icon: GithubIcon,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copied]
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  const safeActiveIndex =
    filteredItems.length === 0
      ? 0
      : Math.min(activeIndex, filteredItems.length - 1);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) =>
          filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length
        );
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          filteredItems.length === 0
            ? 0
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
        return;
      }
      if (e.key === "Enter" && filteredItems[safeActiveIndex]) {
        e.preventDefault();
        filteredItems[safeActiveIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredItems, safeActiveIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const activeButton = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${safeActiveIndex}"]`
    );
    activeButton?.scrollIntoView({ block: "nearest" });
  }, [safeActiveIndex, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800 bg-zinc-950/70">
              <Search className="h-4 w-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="Type a command or search (e.g. Django, Resume, AI, Contact)..."
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none font-mono"
              />
              <kbd className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/60">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              data-lenis-prevent
              className="max-h-80 overflow-y-auto p-2 space-y-1"
            >
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-zinc-500">
                  No matching commands or projects found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === safeActiveIndex;
                  return (
                    <button
                      key={item.id}
                      data-index={idx}
                      type="button"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={item.action}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors group cursor-pointer ${
                        isSelected
                          ? "bg-zinc-800/90 text-white"
                          : "hover:bg-zinc-800/70 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                            isSelected
                              ? "bg-zinc-700/90 text-emerald-400"
                              : "bg-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-zinc-700/80"
                          }`}
                        >
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
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-transform ${
                          isSelected
                            ? "text-emerald-400 translate-x-0.5"
                            : "text-zinc-600 group-hover:text-emerald-400"
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer info */}
            <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Use &uarr;&darr; and Enter, or click</span>
              <span>Kavin Retra &bull; Full-Stack Portfolio</span>
            </div>
          </motion.div>

          {/* Backdrop click to close */}
          <div className="fixed inset-0 -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
