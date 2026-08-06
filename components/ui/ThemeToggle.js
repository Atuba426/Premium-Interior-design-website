"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className={`h-9 w-9 rounded-full ${className}`} />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
