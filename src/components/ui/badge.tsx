import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    secondary: "bg-zinc-800/80 text-zinc-300 border-zinc-700/60",
    outline: "text-zinc-400 border-zinc-800 hover:border-zinc-700",
    success: "bg-emerald-950/60 text-emerald-300 border-emerald-800/50",
    accent: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
