import { Metadata } from "next";
import LifeDashboard from "../components/life-dashboard";
import { getMdxFiles } from "../lib/mdx-utils";

export const metadata: Metadata = {
  title: "Léo Meyniel - Portfolio Développeur Full Stack",
  description: "Système de gestion des connaissances personnelles et portfolio de développeur",
  generator: "v0.dev",
};

export default async function Page() {
  const notes = await getMdxFiles("notes");
  const projects = await getMdxFiles("projects");

  return <LifeDashboard notes={notes} projects={projects} />;
}
