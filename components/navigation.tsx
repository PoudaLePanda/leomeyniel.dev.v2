"use client";

import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <div className="flex items-center gap-4 justify-between w-full">
      <nav className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.fg }}
          >
            <div className="font-bold text-sm" style={{ color: colors.bg0 }}>
              LM
            </div>
            <span className="sr-only">Léo Meyniel .dev</span>
          </div>
          <span className="text-xl font-bold">.dev 2.0</span>
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/notes">Notes</Link>
      </nav>

      <div className="ml-auto flex justify-center items-center gap-4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/leo-meyniel-dev-full-stack/"
        >
          <Linkedin className="w-5 h-5" />
        </Link>

        <Link target="_blank" href="https://github.com/PoudaLePanda">
          <Github className="w-5 h-5" />
        </Link>

        <Link href="mailto:contact@leomeyniel.dev">
          <Mail className="w-5 h-5" />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
