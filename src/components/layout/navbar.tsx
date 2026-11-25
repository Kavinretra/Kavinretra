"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useCommandPalette } from "@/components/common/portfolio-shell";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#systems", id: "systems", label: "Architecture" },
  { href: "#skills", id: "skills", label: "Tech Stack" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollToTarget } = useCommandPalette();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 160) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-zinc-100 font-medium tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700/80 text-emerald-400 font-mono text-xs font-bold group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-all">
            KR
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              Full-Stack Eng
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated active indicator */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 backdrop-blur-md"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative px-3 py-1 text-xs font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-emerald-300"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavSection"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/25 -z-10"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA cluster (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-all cursor-pointer"
            title="Open Command Palette (Cmd + K / Ctrl + K)"
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-mono text-[11px] text-zinc-500">Cmd + K</span>
          </button>

          {/* Resume Link */}
          <Link
            href="/resume"
            className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs font-mono text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
            title="View & Print Resume"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            <span>Resume</span>
          </Link>

          {/* GitHub link */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-800/60 border border-transparent hover:border-zinc-800"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Contact CTA */}
          <Button
            size="sm"
            variant="primary"
            onClick={() => scrollToTarget("contact")}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile menu button (Screens < 768px) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg border border-zinc-800 bg-zinc-900/50"
            title="Open Command Menu"
            aria-label="Command Menu"
          >
            <Terminal className="h-4 w-4 text-emerald-400" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg border border-zinc-800 bg-zinc-900/50 min-h-[38px] min-w-[38px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-zinc-800 bg-zinc-950/98 px-5 py-5 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.id)}
                  className="text-base font-medium text-zinc-200 hover:text-emerald-400 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-900"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-base font-medium text-emerald-300 hover:text-emerald-200 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-900"
              >
                <FileText className="h-4 w-4" />
                <span>Resume / CV</span>
              </Link>
              <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center justify-between px-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white py-1"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTarget("contact");
                  }}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
