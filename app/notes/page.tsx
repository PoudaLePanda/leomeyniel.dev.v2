import { Metadata } from "next";
import { NotesClient } from "./notes-client";
import { getMdxFiles } from "../../lib/mdx-utils";

export const metadata: Metadata = {
  title: "Notes",
  description: "Collection de notes techniques et articles sur le développement web, React, Next.js, TypeScript et les technologies modernes.",
  openGraph: {
    title: "Notes | Léo Meyniel - Développeur Full Stack",
    description: "Articles et notes techniques de Léo Meyniel sur le développement web et les technologies modernes.",
    url: "https://leomeyniel.dev/notes",
  },
  alternates: {
    canonical: "https://leomeyniel.dev/notes",
  },
};

export default async function NotesPage() {
  const notes = await getMdxFiles("notes");
  return <NotesClient notes={notes} />;
}
