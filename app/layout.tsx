import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import "../styles/globals.css";

import { ThemeProvider } from "../contexts/theme-context";
import { ConstructProvider } from "@/providers/construct";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "../components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://leomeyniel.dev"),
  title: {
    default: "Léo Meyniel - Développeur Full Stack",
    template: "%s | Léo Meyniel - Développeur Full Stack",
  },
  description:
    "Portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, Node.js et TypeScript. Découvrez mes projets et compétences techniques.",
  keywords: [
    "Léo Meyniel",
    "développeur full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "développeur web",
  ],
  authors: [{ name: "Léo Meyniel", url: "https://leomeyniel.dev" }],
  creator: "Léo Meyniel",
  publisher: "Léo Meyniel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://leomeyniel.dev",
    title: "Léo Meyniel - Développeur Full Stack",
    description:
      "Portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, Node.js et TypeScript.",
    siteName: "Léo Meyniel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Léo Meyniel - Développeur Full Stack",
    description:
      "Portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, Node.js et TypeScript.",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn(GeistSans.className, GeistMono.className)}>
      <head>
        <link rel="canonical" href="https://leomeyniel.dev" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <PersonStructuredData
          name="Léo Meyniel"
          url="https://leomeyniel.dev"
          jobTitle="Développeur Full Stack"
          description="Développeur full stack spécialisé en React, Next.js, Node.js et TypeScript. Passionné par les technologies modernes et l'innovation."
          sameAs={[
            "https://www.linkedin.com/in/leo-meyniel-dev-full-stack/",
            "https://github.com/PoudaLePanda",
          ]}
          email="contact@leomeyniel.dev"
        />
        <WebsiteStructuredData
          name="Léo Meyniel Portfolio"
          url="https://leomeyniel.dev"
          description="Portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, Node.js et TypeScript."
          author="Léo Meyniel"
        />
        <ThemeProvider>
          <ConstructProvider>{children}</ConstructProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
