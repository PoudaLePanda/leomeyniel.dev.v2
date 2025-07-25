import { getMdxFileBySlug } from "../../lib/mdx-utils";
import MdxLayout from "../../components/mdx-layout";
import { notFound } from "next/navigation";

export default async function TermsPage() {
  try {
    // Récupérer le contenu du fichier MDX
    const termsFile = await getMdxFileBySlug("", "mentions-legales");

    if (!termsFile) {
      notFound();
    }

    // Import dynamique du fichier MDX
    const TermsComponent = await import("../../content/mentions-legales.mdx");

    if (!TermsComponent.default) {
      notFound();
    }

    return (
      <MdxLayout frontmatter={termsFile.frontmatter}>
        <TermsComponent.default />
      </MdxLayout>
    );
  } catch (error) {
    console.error("Erreur lors du chargement des mentions légales:", error);
    notFound();
  }
}
