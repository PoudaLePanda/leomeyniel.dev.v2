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
  return (
    <div className="min-h-screen font-mono transition-colors duration-200 bg-background text-foreground">
      {/* Header avec métadonnées si fournies */}
      {frontmatter && (
        <div className="p-6 border-b border-border">
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            {frontmatter.title}
          </h1>

          {frontmatter.excerpt && (
            <p className="text-lg mb-4 text-muted-foreground">
              {frontmatter.excerpt}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                <span className="px-2 py-1 rounded text-xs font-medium text-white bg-primary">
                  {frontmatter.type}
                </span>
              </>
            )}
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex gap-2 mt-3">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contenu MDX avec styles Tailwind Typography */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-current prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-p:text-current prose-p:leading-relaxed prose-strong:text-current prose-em:text-muted-foreground prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:text-secondary-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-ul:text-current prose-ol:text-current prose-li:text-current prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert">
          {children}
        </div>
      </div>
    </div>
  );
}
