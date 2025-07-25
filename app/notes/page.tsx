import { NotesClient } from "./notes-client";
import { getMdxFiles } from "../../lib/mdx-utils";

export default async function NotesPage() {
  const notes = await getMdxFiles("notes");
  return <NotesClient notes={notes} />;
}
