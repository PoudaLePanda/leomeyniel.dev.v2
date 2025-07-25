"use client";

import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../../../contexts/theme-context";
import { everforestTheme } from "../../../lib/everforest-theme";

export default function NotFound() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <div
      className="min-h-screen font-mono flex items-center justify-center"
      style={{
        backgroundColor: colors.bg0,
        color: colors.fg,
      }}
    >
      <div className="text-center max-w-md mx-auto p-6">
        <div className="flex items-center justify-center mb-4">
          <AlertCircle className="w-12 h-12" style={{ color: colors.red }} />
        </div>
        <h1 className="text-xl font-semibold mb-2">Projet non trouvé</h1>
        <p className="mb-6" style={{ color: colors.grey2 }}>
          Le projet demandé n'existe pas ou n'a pas pu être chargé.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded"
          style={{
            backgroundColor: colors.bg2,
            color: colors.fg,
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>
      </div>
    </div>
  );
}
