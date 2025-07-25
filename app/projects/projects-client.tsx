"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  FolderOpen,
  Calendar,
  User,
  Tag,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../../contexts/theme-context";
import { everforestTheme } from "../../lib/everforest-theme";
import { AnimatedCard } from "../../components/animated-card";
import { type MdxFile } from "../../lib/mdx-utils";

interface ProjectsClientProps {
  projects: MdxFile[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "business":
        return colors.red;
      case "academic":
        return colors.blue;
      case "personal":
        return colors.orange;
      case "technical":
        return colors.green;
      default:
        return colors.grey1;
    }
  };

  return (
    <div
      className="min-h-screen font-mono transition-colors duration-200"
      style={{
        backgroundColor: colors.bg0,
        color: colors.fg,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" style={{ color: colors.grey1 }}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6" />
            <span className="text-xl font-bold">Projets</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="mb-6">
          <p className="text-sm" style={{ color: colors.grey2 }}>
            {projects.length} projets • Système de gestion de connaissances
            personnelles
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex items-center justify-center mb-4">
              <FolderOpen
                className="w-12 h-12"
                style={{ color: colors.grey1 }}
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">Aucun projet trouvé</h2>
            <p style={{ color: colors.grey2 }}>
              Aucun fichier MDX n'a été trouvé dans le dossier content/projects.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <AnimatedCard key={project.slug} delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`}>
                    <div
                      className="p-6 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg"
                      style={{
                        backgroundColor: colors.bg1,
                        border: `1px solid ${colors.bg5}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.bg2;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.bg1;
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h2
                          className="text-lg font-semibold"
                          style={{ color: colors.fg }}
                        >
                          {project.frontmatter.title}
                        </h2>
                        <div
                          className="px-3 py-1 rounded text-xs font-medium text-white"
                          style={{
                            backgroundColor: getStatusColor(
                              project.frontmatter.status || "personal"
                            ),
                          }}
                        >
                          {project.frontmatter.status || "personal"}
                        </div>
                      </div>

                      {project.frontmatter.excerpt && (
                        <p
                          className="text-sm mb-4 leading-relaxed"
                          style={{ color: colors.grey2 }}
                        >
                          {project.frontmatter.excerpt}
                        </p>
                      )}

                      <div
                        className="flex items-center gap-4 text-xs mb-3"
                        style={{ color: colors.grey1 }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.frontmatter.lastModified}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {project.frontmatter.author}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Tag
                          className="w-3 h-3"
                          style={{ color: colors.grey1 }}
                        />
                        <div className="flex gap-2">
                          {project.frontmatter.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs"
                              style={{
                                backgroundColor: colors.bg3,
                                color: colors.grey2,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}
