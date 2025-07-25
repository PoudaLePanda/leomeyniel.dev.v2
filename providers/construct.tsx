"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { useTheme } from "@/contexts/theme-context";
import { everforestTheme } from "@/lib/everforest-theme";

export function ConstructProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <div className="min-h-screen font-mono transition-colors duration-200 container mx-auto max-w-5xl">
      {/* Header */}
      <header
        className="flex items-center justify-between p-4"
        style={{ borderBottom: `1px solid ${colors.bg5}` }}
      >
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="space-y-8">{children}</main>

      {/* Footer */}
      <footer
        className="mt-12 py-6"
        style={{ borderTop: `1px solid ${colors.bg5}` }}
      >
        <Footer />
      </footer>
    </div>
  );
}
