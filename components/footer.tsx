"use client";

import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";

export function Footer() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <div
      className="flex items-center justify-center gap-4 text-xs flex-wrap"
      style={{ color: colors.grey1 }}
    >
      <div className="mb-4 text-sm text-center sm:mb-0">
        © 2025{" "}
        <Link target="_blank" href="https://leomeyniel.dev">
          leomeyniel.dev
        </Link>
        . All rights reserved.
      </div>

      <span className="flex-1 hidden md:block"></span>

      <div className="flex justify-center items-center space-x-1 gap-6 w-full md:w-auto">
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
      </div>

      <span className="flex-1 hidden md:block"></span>

      <div className="mb-4 text-sm text-center sm:mb-0">
        <Link href="/mentions-legales">mentions légales</Link>
      </div>
    </div>
  );
}
