"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Lenis from "lenis";
import { MotionProvider, ScrollProgressBar } from "@/components/common/reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/common/command-palette";

interface CommandPaletteContextValue {
  openCommandPalette: () => void;
  scrollToTarget: (target: string) => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue>({
  openCommandPalette: () => {},
  scrollToTarget: () => {},
});

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const openCommandPalette = useCallback(() => {
    setCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setCommandPaletteOpen(false);
  }, []);

  const scrollToTarget = useCallback((target: string) => {
    const selector = target.startsWith("#") ? target : `#${target}`;
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        offset: selector === "#top" ? 0 : -80,
        duration: 1.05,
      });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: {
        offset: -80,
      },
    });

    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (commandPaletteOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [commandPaletteOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionProvider>
      <CommandPaletteContext.Provider
        value={{ openCommandPalette, scrollToTarget }}
      >
        <div
          id="top"
          className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative selection:bg-emerald-500/20 selection:text-emerald-400"
        >
          {/* Top Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Background Architectural Grid Pattern */}
          <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

          {/* Global Navigation */}
          <Navbar onOpenCommandPalette={openCommandPalette} />

          {/* Main Content Flow */}
          <main id="main-content" className="relative">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Command Palette Modal */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={closeCommandPalette}
          />
        </div>
      </CommandPaletteContext.Provider>
    </MotionProvider>
  );
}
