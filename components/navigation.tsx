"use client";

import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export function Navigation() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <header role="banner" className="flex items-center gap-4 justify-between w-full">
      <nav role="navigation" aria-label="Navigation principale" className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Retour à l'accueil">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.fg }}
          >
            <Image src="/logo.png" alt="Logo Léo Meyniel" width={40} height={40} />
            <span className="sr-only">Léo Meyniel .dev</span>
          </div>
          <span className="text-xl font-bold">.dev 2.0</span>
        </Link>
        <Link href="/projects" aria-label="Voir mes projets">Projets</Link>
        <Link href="/notes" aria-label="Lire mes notes et articles">Notes</Link>
      </nav>

      <div className="ml-auto flex justify-center items-center gap-4" role="complementary" aria-label="Liens sociaux et paramètres">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/leo-meyniel-dev-full-stack/"
          aria-label="Profil LinkedIn de Léo Meyniel (ouvre dans un nouvel onglet)"
        >
          <Linkedin className="w-5 h-5" aria-hidden="true" />
        </Link>

        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://github.com/PoudaLePanda"
          aria-label="Profil GitHub de Léo Meyniel (ouvre dans un nouvel onglet)"
        >
          <Github className="w-5 h-5" aria-hidden="true" />
        </Link>

        <Link 
          href="mailto:contact@leomeyniel.dev"
          aria-label="Envoyer un email à Léo Meyniel"
        >
          <Mail className="w-5 h-5" aria-hidden="true" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
