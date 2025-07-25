import { notFound } from "next/navigation";
import { getMdxSlugs, getMdxFileBySlug } from "../../../lib/mdx-utils";
import MdxLayout from "../../../components/mdx-layout";

interface NotePageProps {
  params: {
    noteName: string;
  };
}

// Génération des paramètres statiques
export async function generateStaticParams() {
  const slugs = await getMdxSlugs("notes");
  return slugs.map((slug) => ({
    noteName: slug,
  }));
}

export default async function NotePage({ params }: NotePageProps) {
  try {
    // Récupérer les métadonnées du fichier MDX
    const mdxFile = await getMdxFileBySlug("notes", params.noteName);

    if (!mdxFile) {
      notFound();
    }

    // Import dynamique du fichier MDX
    const NoteComponent = await import(
      `../../../content/notes/${params.noteName}.mdx`
    );

    // Vérifier si le composant existe
    if (!NoteComponent.default) {
      notFound();
    }

    return (
      <MdxLayout frontmatter={mdxFile.frontmatter}>
        <NoteComponent.default />
      </MdxLayout>
    );
  } catch (error) {
    console.error("Erreur lors du chargement de la note:", error);
    notFound();
  }
}
