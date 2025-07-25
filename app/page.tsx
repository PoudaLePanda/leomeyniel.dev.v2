import LifeDashboard from "../components/life-dashboard";
import { ThemeProvider } from "../contexts/theme-context";
import { getMdxFiles } from "../lib/mdx-utils";

export default async function Page() {
  const notes = await getMdxFiles("notes");
  const projects = await getMdxFiles("projects");

  return (
    <ThemeProvider>
      <LifeDashboard notes={notes} projects={projects} />
    </ThemeProvider>
  );
}
