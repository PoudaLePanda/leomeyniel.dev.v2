import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";
import { getMdxFiles } from "../../lib/mdx-utils";

export const metadata: Metadata = {
  title: "Projets",
  description: "Découvrez les projets de développement web et applications que j'ai réalisés. Technologies utilisées : React, Next.js, Node.js, TypeScript et plus encore.",
  openGraph: {
    title: "Projets | Léo Meyniel - Développeur Full Stack",
    description: "Portfolio de projets techniques réalisés par Léo Meyniel, développeur full stack.",
    url: "https://leomeyniel.dev/projects",
  },
  alternates: {
    canonical: "https://leomeyniel.dev/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getMdxFiles("projects");
  return <ProjectsClient projects={projects} />;
}
