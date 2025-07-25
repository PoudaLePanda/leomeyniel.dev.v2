"use client";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import MdxContentWrapper from "./mdx-content-wrapper";

interface MdxLayoutProps {
  children: React.ReactNode;
  frontmatter?: {
    title: string;
    status?: string;
    type?: string;
    lastModified: string;
    author?: string;
    tags?: string[];
    excerpt?: string;
  };
}

export default function MdxLayout({ children, frontmatter }: MdxLayoutProps) {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];
  return (
    <div
      className="min-h-screen font-mono transition-colors duration-200"
      style={{ backgroundColor: colors.bg0, color: colors.fg }}
    >
      {/* Header avec métadonnées si fournies */}
      {frontmatter && (
        <div className="p-4">
          <h1
            className="text-2xl font-semibold mb-2"
            style={{ color: colors.fg }}
          >
            {frontmatter.title}
          </h1>

          {frontmatter.excerpt && (
            <p className="text-sm mb-3" style={{ color: colors.grey2 }}>
              {frontmatter.excerpt}
            </p>
          )}

          <div
            className="flex flex-wrap items-center gap-3 text-xs"
            style={{ color: colors.grey1 }}
          >
            {frontmatter.author && (
              <>
                <span>Par {frontmatter.author}</span>
                <span>•</span>
              </>
            )}
            <span>Modifié le {frontmatter.lastModified}</span>
            {frontmatter.type && (
              <>
                <span>•</span>
                <span
                  className="px-2 py-0.5 rounded text-xs font-medium"
                  style={{
                    backgroundColor: colors.blue,
                    color: colors.bg0,
                  }}
                >
                  {frontmatter.type}
                </span>
              </>
            )}
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex gap-1 mt-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded text-xs"
                  style={{
                    backgroundColor: colors.bg2,
                    color: colors.grey1,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contenu MDX avec styles personnalisés utilisant le thème */}
      <div className="p-6 max-w-4xl mx-auto">
        <div
          className="prose prose-sm md:prose-lg max-w-none mb-8"
          style={
            {
              color: colors.fg,
              "--tw-prose-headings": colors.fg,
              "--tw-prose-h1": colors.aqua,
              "--tw-prose-h2": colors.blue,
              "--tw-prose-h3": colors.green,
              "--tw-prose-h4": colors.purple,
              "--tw-prose-h5": colors.orange,
              "--tw-prose-h6": colors.fg,
              "--tw-prose-body": colors.fg,
              "--tw-prose-lead": colors.grey2,
              "--tw-prose-links": colors.blue,
              "--tw-prose-bold": colors.fg,
              "--tw-prose-counters": colors.grey1,
              "--tw-prose-bullets": colors.grey1,
              "--tw-prose-hr": colors.bg5,
              "--tw-prose-quotes": colors.grey2,
              "--tw-prose-quote-borders": colors.bg5,
              "--tw-prose-captions": colors.grey1,
              "--tw-prose-code": colors.aqua,
              "--tw-prose-pre-code": colors.fg,
              "--tw-prose-pre-bg": colors.bg2,
              // "--tw-prose-pre-border": colors.bg5,
              // "--tw-prose-th-borders": colors.bg5,
              // "--tw-prose-td-borders": colors.bg5,
              "--tw-prose-invert-headings": colors.fg,
              "--tw-prose-invert-body": colors.fg,
              "--tw-prose-invert-lead": colors.grey2,
              "--tw-prose-invert-links": colors.blue,
              "--tw-prose-invert-bold": colors.fg,
              "--tw-prose-invert-counters": colors.grey1,
              "--tw-prose-invert-bullets": colors.grey1,
              "--tw-prose-invert-hr": colors.bg5,
              "--tw-prose-invert-quotes": colors.grey2,
              "--tw-prose-invert-quote-borders": colors.bg5,
              "--tw-prose-invert-captions": colors.grey1,
              "--tw-prose-invert-code": colors.aqua,
              "--tw-prose-invert-pre-code": colors.fg,
              "--tw-prose-invert-pre-bg": colors.bg2,
              "--tw-prose-invert-pre-border": colors.bg5,
              "--tw-prose-invert-th-borders": colors.bg5,
              "--tw-prose-invert-td-borders": colors.bg5,
            } as React.CSSProperties
          }
        >
          <MdxContentWrapper frontmatter={frontmatter}>
            {children}
          </MdxContentWrapper>
        </div>
      </div>
    </div>
  );
}
