import { Metadata } from "next";
import LifeDashboard from "../components/life-dashboard";
import { getMdxFiles } from "../lib/mdx-utils";

export const metadata: Metadata = {
  title: "Léo Meyniel - Développeur Full Stack",
  description:
    "Portfolio de Léo Meyniel, développeur full stack passionné par React, Next.js et les technologies modernes. Découvrez mes projets, compétences et expériences professionnelles.",
  openGraph: {
    title: "Léo Meyniel - Développeur Full Stack | Portfolio",
    description:
      "Découvrez le portfolio de Léo Meyniel, développeur full stack spécialisé en React, Next.js, TypeScript et Node.js.",
    url: "https://leomeyniel.dev",
    type: "website",
  },
  alternates: {
    canonical: "https://leomeyniel.dev",
  },
};

export default async function Page() {
  const notes = await getMdxFiles("notes");
  const projects = await getMdxFiles("projects");

  return <LifeDashboard notes={notes} projects={projects} />;
}
