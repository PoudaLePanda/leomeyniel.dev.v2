"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className="flex items-center gap-4 justify-between w-full relative"
    >
      {/* Logo et titre - toujours visible */}
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Retour à l'accueil"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.fg }}
        >
          <Image
            src="/logo.png"
            alt="Logo Léo Meyniel"
            width={40}
            height={40}
          />
          <span className="sr-only">Léo Meyniel .dev</span>
        </div>
        <span className="text-xl font-bold">.dev 2.0</span>
      </Link>

      {/* Menu hamburger pour mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md transition-colors"
        style={{
          backgroundColor: isMenuOpen ? colors.bg3 : "transparent",
          color: colors.fg,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = colors.bg3;
        }}
        onMouseLeave={(e) => {
          if (!isMenuOpen) {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
        aria-label="Ouvrir le menu de navigation"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute z-50 top-full left-0 right-0 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        style={{
          backgroundColor: colors.bg1,
          borderBottom: `1px solid ${colors.bg5}`,
        }}
      >
        <nav
          className="flex flex-col p-4 space-y-4"
          role="navigation"
          aria-label="Navigation mobile"
        >
          <Link
            href="/projects"
            onClick={closeMenu}
            className="text-lg font-medium transition-colors"
            style={{ color: colors.fg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.blue;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.fg;
            }}
            aria-label="Voir mes projets"
          >
            Projets
          </Link>
          <Link
            href="/notes"
            onClick={closeMenu}
            className="text-lg font-medium transition-colors"
            style={{ color: colors.fg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.blue;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.fg;
            }}
            aria-label="Lire mes notes et articles"
          >
            Notes
          </Link>

          {/* Liens sociaux dans le menu mobile */}
          <div
            className="flex items-center gap-4 pt-4"
            style={{ borderTop: `1px solid ${colors.bg5}` }}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/leo-meyniel-dev-full-stack/"
              aria-label="Profil LinkedIn de Léo Meyniel (ouvre dans un nouvel onglet)"
              className="p-2 rounded-md transition-colors"
              style={{ color: colors.fg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.bg3;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/PoudaLePanda"
              aria-label="Profil GitHub de Léo Meyniel (ouvre dans un nouvel onglet)"
              className="p-2 rounded-md transition-colors"
              style={{ color: colors.fg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.bg3;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </Link>

            <Link
              href="mailto:contact@leomeyniel.dev"
              aria-label="Envoyer un email à Léo Meyniel"
              className="p-2 rounded-md transition-colors"
              style={{ color: colors.fg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.bg3;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Menu desktop */}
      <nav
        className="hidden md:flex items-center gap-4"
        role="navigation"
        aria-label="Navigation principale"
      >
        <Link
          href="/projects"
          className="transition-colors"
          style={{ color: colors.fg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.blue;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.fg;
          }}
          aria-label="Voir mes projets"
        >
          Projets
        </Link>
        <Link
          href="/notes"
          className="transition-colors"
          style={{ color: colors.fg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.blue;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.fg;
          }}
          aria-label="Lire mes notes et articles"
        >
          Notes
        </Link>
      </nav>

      {/* Liens sociaux et thème - desktop */}
      <div
        className="hidden md:flex justify-center items-center gap-4"
        role="complementary"
        aria-label="Liens sociaux et paramètres"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/leo-meyniel-dev-full-stack/"
          aria-label="Profil LinkedIn de Léo Meyniel (ouvre dans un nouvel onglet)"
          className="p-2 rounded-md transition-colors"
          style={{ color: colors.fg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.bg3;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Linkedin className="w-5 h-5" aria-hidden="true" />
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/PoudaLePanda"
          aria-label="Profil GitHub de Léo Meyniel (ouvre dans un nouvel onglet)"
          className="p-2 rounded-md transition-colors"
          style={{ color: colors.fg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.bg3;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Github className="w-5 h-5" aria-hidden="true" />
        </Link>

        <Link
          href="mailto:contact@leomeyniel.dev"
          aria-label="Envoyer un email à Léo Meyniel"
          className="p-2 rounded-md transition-colors"
          style={{ color: colors.fg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.bg3;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <Mail className="w-5 h-5" aria-hidden="true" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
