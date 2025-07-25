import { notFound } from "next/navigation";
import { getMdxSlugs, getMdxFileBySlug } from "../../../lib/mdx-utils";
import MdxLayout from "../../../components/mdx-layout";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

// Génération des paramètres statiques
export async function generateStaticParams() {
  const slugs = await getMdxSlugs("content/projects");
  return slugs.map((slug) => ({
    projectName: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  try {
    // Récupérer les métadonnées du fichier MDX
    const mdxFile = await getMdxFileBySlug(
      "content/projects",
      params.projectName
    );

    if (!mdxFile) {
      notFound();
    }

    // Import dynamique du fichier MDX
    const ProjectComponent = await import(
      `../../../content/projects/${params.projectName}.mdx`
    );

    // Vérifier si le composant existe
    if (!ProjectComponent.default) {
      notFound();
    }

    return (
      <MdxLayout frontmatter={mdxFile.frontmatter}>
        <ProjectComponent.default />
      </MdxLayout>
    );
  } catch (error) {
    console.error("Erreur lors du chargement du projet:", error);
    notFound();
  }
}
