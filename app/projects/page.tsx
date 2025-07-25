import { ProjectsClient } from "./projects-client";
import { getMdxFiles } from "../../lib/mdx-utils";

export default async function ProjectsPage() {
  const projects = await getMdxFiles("projects");
  return <ProjectsClient projects={projects} />;
}
