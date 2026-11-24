"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#systems", label: "Architecture" },
    { href: "#skills", label: "Tech Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-800/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA cluster (Desktop) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-all"
            title="Open Command Palette"
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-mono text-[11px] text-zinc-500">Cmd + K</span>
          </button>

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
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Talk
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg border border-zinc-800 bg-zinc-900/50 min-h-[38px] min-w-[38px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
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
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/98 px-5 py-5 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-emerald-400 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-900"
              >
                {link.label}
              </Link>
            ))}
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
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
