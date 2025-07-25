"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  Notebook,
  Calendar,
  User,
  Tag,
  FileText,
  Camera,
  LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../../contexts/theme-context";
import { everforestTheme } from "../../lib/everforest-theme";
import { AnimatedCard } from "../../components/animated-card";
import { type MdxFile } from "../../lib/mdx-utils";

interface NotesClientProps {
  notes: MdxFile[];
}

export function NotesClient({ notes }: NotesClientProps) {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "note":
        return colors.green;
      case "recherche":
        return colors.blue;
      case "article":
        return colors.purple;
      case "photograph":
        return colors.orange;
      default:
        return colors.grey1;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "note":
      case "recherche":
        return <FileText className="w-4 h-4" />;
      case "article":
        return <LinkIcon className="w-4 h-4" />;
      case "photograph":
        return <Camera className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
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
            <Notebook className="w-6 h-6" />
            <span className="text-xl font-bold">Notes</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="mb-6">
          <p className="text-sm" style={{ color: colors.grey2 }}>
            {notes.length} notes • Collection de connaissances personnelles
          </p>
        </div>

        {notes.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex items-center justify-center mb-4">
              <Notebook className="w-12 h-12" style={{ color: colors.grey1 }} />
            </div>
            <h2 className="text-lg font-semibold mb-2">Aucune note trouvée</h2>
            <p style={{ color: colors.grey2 }}>
              Aucune note n&apos;a été trouvée dans le dossier.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[calc(100vh-200px)] md:h-auto">
            <div className="grid gap-4">
              {notes.map((note, index) => (
                <AnimatedCard key={note.slug} delay={index * 0.05}>
                  <Link href={`/notes/${note.slug}`}>
                    <div
                      className="p-4 rounded-lg cursor-pointer transition-all duration-200"
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
                      <div className="flex items-start gap-3">
                        <div className="mt-1" style={{ color: colors.grey1 }}>
                          {getTypeIcon(note.frontmatter.type || "note")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3
                              className="text-sm font-medium leading-tight truncate w-64 md:w-auto"
                              style={{ color: colors.fg }}
                            >
                              {note.frontmatter.title}
                            </h3>
                            <div
                              className="px-2 py-1 rounded text-xs font-medium text-white ml-3 flex-shrink-0"
                              style={{
                                backgroundColor: getTypeColor(
                                  note.frontmatter.type || "note"
                                ),
                              }}
                            >
                              {note.frontmatter.type || "note"}
                            </div>
                          </div>

                          {note.frontmatter.excerpt && (
                            <p
                              className="text-xs mb-3 leading-relaxed"
                              style={{ color: colors.grey2 }}
                            >
                              {note.frontmatter.excerpt}
                            </p>
                          )}

                          <div
                            className="flex items-center gap-4 text-xs mb-2"
                            style={{ color: colors.grey1 }}
                          >
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {note.frontmatter.lastModified}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {note.frontmatter.author}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Tag
                              className="w-3 h-3"
                              style={{ color: colors.grey1 }}
                            />
                            <div className="flex gap-1 flex-wrap">
                              {note.frontmatter.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded text-xs"
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
