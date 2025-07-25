import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Léo Meyniel - Développeur Full Stack",
    short_name: "Léo Meyniel",
    description:
      "Portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, Node.js et TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#2d353b",
    theme_color: "#a7c080",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
