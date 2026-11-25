"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { MotionProvider } from "@/components/common/reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/common/command-palette";

interface CommandPaletteContextValue {
  openCommandPalette: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue>({
  openCommandPalette: () => {},
});

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const openCommandPalette = useCallback(() => {
    setCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setCommandPaletteOpen(false);
  }, []);

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
      <CommandPaletteContext.Provider value={{ openCommandPalette }}>
        <div
          id="top"
          className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative selection:bg-emerald-500/20 selection:text-emerald-400"
        >
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
