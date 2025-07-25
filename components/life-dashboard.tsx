"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HelpCircle,
  Notebook,
  FolderOpen,
  Camera,
  FileText,
  LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { motion } from "framer-motion";
import { AnimatedCard } from "./animated-card";
import { Timeline } from "./timeline";
import { Skills } from "./skills";
import { type MdxFile } from "../lib/mdx-utils";

interface LifeDashboardProps {
  notes: MdxFile[];
  projects: MdxFile[];
}

export default function LifeDashboard({ notes, projects }: LifeDashboardProps) {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const categories = [
    { name: "frontend", color: colors.blue },
    { name: "backend", color: colors.green },
    { name: "ia", color: colors.aqua },
    { name: "fullstack", color: colors.purple },
    { name: "outils", color: colors.orange },
    { name: "database", color: colors.red },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "note":
      case "recherche":
        return <FileText className="w-3 h-3" />;
      case "article":
        return <LinkIcon className="w-3 h-3" />;
      case "photograph":
        return <Camera className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "affaires":
        return colors.red;
      case "académique":
        return colors.blue;
      case "personnel":
        return colors.orange;
      case "technique":
        return colors.green;
      default:
        return colors.grey1;
    }
  };

  // Limiter les données pour le dashboard
  const dashboardNotes = notes.slice(0, 5);
  const dashboardProjects = projects.slice(0, 3);

  return (
    <main role="main">
      {/* Categories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 my-6 flex-wrap"
        aria-label="Catégories de compétences"
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="px-3 py-1 rounded text-sm font-medium"
            style={{
              backgroundColor: category.color,
              color: colors.bg0, // Utiliser la couleur de fond du thème pour le texte
            }}
            role="presentation"
          >
            {category.name}
          </div>
        ))}
      </motion.section>

      {/* Main Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Notebook Section */}
        <section aria-labelledby="notes-heading">
          <div className="flex items-center gap-2 mb-4">
            <Notebook
              className="w-5 h-5"
              aria-hidden="true"
              style={{ color: colors.fg }}
            />
            <h2
              id="notes-heading"
              className="text-lg font-semibold"
              style={{ color: colors.fg }}
            >
              cahier
            </h2>
          </div>
          <ScrollArea className="h-48 md:h-96">
            <div className="space-y-2">
              {dashboardNotes.length === 0 ? (
                <div className="text-center py-8">
                  <p style={{ color: colors.grey2 }}>Aucune note trouvée</p>
                </div>
              ) : (
                dashboardNotes.map((note, index) => (
                  <AnimatedCard key={note.slug} delay={index * 0.05}>
                    <Link href={`/notes/${note.slug}`}>
                      <div
                        className="flex items-start gap-3 p-2 rounded cursor-pointer transition-colors"
                        style={{
                          backgroundColor: colors.bg2,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.bg2;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div className="mt-1" style={{ color: colors.grey1 }}>
                          {getTypeIcon(note.frontmatter.type || "note")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-sm truncate w-64 md:w-auto"
                            style={{ color: colors.fg }}
                          >
                            {note.frontmatter.title}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className="text-xs"
                              style={{ color: colors.grey1 }}
                            >
                              {note.frontmatter.lastModified}
                            </span>
                            <div
                              className="px-2 py-0.5 rounded text-xs"
                              style={{
                                border: `1px solid ${colors.bg5}`,
                                color: colors.grey2,
                              }}
                            >
                              {note.frontmatter.type || "note"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedCard>
                ))
              )}
              {dashboardNotes.length > 0 && (
                <div className="text-center py-2">
                  <Link href="/notes">
                    <Button
                      variant="ghost"
                      className="text-sm"
                      style={{ color: colors.grey1 }}
                    >
                      Voir toutes les notes ...
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </ScrollArea>
        </section>

        {/* Projects Section */}
        <section aria-labelledby="projects-heading">
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen
              className="w-5 h-5"
              aria-hidden="true"
              style={{ color: colors.fg }}
            />
            <h2
              id="projects-heading"
              className="text-lg font-semibold"
              style={{ color: colors.fg }}
            >
              projets
            </h2>
          </div>
          <div className="space-y-4">
            {dashboardProjects.length === 0 ? (
              <div className="text-center py-8">
                <p style={{ color: colors.grey2 }}>Aucun projet trouvé</p>
              </div>
            ) : (
              dashboardProjects.map((project, index) => (
                <AnimatedCard key={project.slug} delay={0.3 + index * 0.1}>
                  <Link href={`/projects/${project.slug}`}>
                    <div
                      className="p-3 rounded"
                      style={{ backgroundColor: colors.bg2 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3
                            className="text-sm font-medium mb-1"
                            style={{ color: colors.fg }}
                          >
                            {project.frontmatter.title}
                          </h3>
                          {project.frontmatter.excerpt && (
                            <p
                              className="text-xs"
                              style={{ color: colors.grey2 }}
                            >
                              {project.frontmatter.excerpt}
                            </p>
                          )}
                          <div
                            className="mt-2 px-2 py-1 rounded text-xs font-medium text-white inline-block"
                            style={{
                              backgroundColor: getStatusColor(
                                project.frontmatter.status || "personal"
                              ),
                            }}
                          >
                            {project.frontmatter.status || "personal"}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          style={{ color: colors.grey1 }}
                        >
                          <HelpCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              ))
            )}
            {dashboardProjects.length > 0 && (
              <div className="text-center py-2">
                <Link href="/projects">
                  <Button
                    variant="ghost"
                    className="text-sm"
                    style={{ color: colors.grey1 }}
                  >
                    Voir tous les projets ...
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </motion.section>

      {/* Professional Links Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        aria-label="Expérience professionnelle"
      >
        <Timeline />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        aria-label="Compétences techniques"
      >
        <Skills />
      </motion.section>
    </main>
  );
}
