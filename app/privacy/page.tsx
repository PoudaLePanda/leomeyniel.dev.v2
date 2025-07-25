import { getMdxFileBySlug } from "../../lib/mdx-utils";
import MdxLayout from "../../components/mdx-layout";
import { notFound } from "next/navigation";

export default async function PrivacyPage() {
  try {
    // Récupérer le contenu du fichier MDX
    const privacyFile = await getMdxFileBySlug("", "privacy");

    if (!privacyFile) {
      notFound();
    }

    // Import dynamique du fichier MDX
    const PrivacyComponent = await import("../../content/privacy.mdx");

    if (!PrivacyComponent.default) {
      notFound();
    }

    return (
      <MdxLayout frontmatter={privacyFile.frontmatter}>
        <PrivacyComponent.default />
      </MdxLayout>
    );
  } catch (error) {
    console.error(
      "Erreur lors du chargement de la politique de confidentialité:",
      error
    );
    notFound();
  }
}
