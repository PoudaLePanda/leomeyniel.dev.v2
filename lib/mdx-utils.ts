import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MdxFrontmatter {
  title: string;
  status?: string;
  type?: string;
  lastModified: string;
  author: string;
  tags: string[];
  excerpt?: string;
}

export interface MdxFile {
  slug: string;
  frontmatter: MdxFrontmatter;
  content: string;
}

// Fonction pour obtenir tous les fichiers MDX d'un répertoire
export async function getMdxFiles(
  directory: "notes" | "projects" | ""
): Promise<MdxFile[]> {
  const fullPath = path.join(process.cwd(), "content", directory);

  try {
    const files = fs.readdirSync(fullPath);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const mdxData = mdxFiles.map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const slug = file.replace(/\.mdx$/, "");

      return {
        slug,
        frontmatter: data as MdxFrontmatter,
        content,
      };
    });

    return mdxData;
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers MDX:", error);
    return [];
  }
}

// Fonction pour obtenir un fichier MDX par son slug
export async function getMdxFileBySlug(
  directory: "notes" | "projects" | "",
  slug: string
): Promise<MdxFile | null> {
  const fullPath = path.join(
    process.cwd(),
    "content",
    directory,
    `${slug}.mdx`
  );

  try {
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data as MdxFrontmatter,
      content,
    };
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier MDX:", error);
    return null;
  }
}

// Fonction pour obtenir tous les slugs MDX d'un répertoire
export async function getMdxSlugs(
  directory: "notes" | "projects" | ""
): Promise<string[]> {
  const fullPath = path.join(process.cwd(), "content", directory);

  try {
    const files = fs.readdirSync(fullPath);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Erreur lors de la lecture des slugs MDX:", error);
    return [];
  }
}
