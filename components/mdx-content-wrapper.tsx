"use client";

import { ReactNode, Children, isValidElement, cloneElement } from "react";

interface MdxContentWrapperProps {
  children: ReactNode;
  frontmatter?: {
    title: string;
    status?: string;
    type?: string;
    lastModified: string;
    author?: string;
    tags?: string[];
    excerpt?: string;
  };
}

export default function MdxContentWrapper({
  children,
  frontmatter,
}: MdxContentWrapperProps) {
  // Fonction récursive pour filtrer le contenu
  const filterContent = (node: any): boolean => {
    if (!node || typeof node !== "object") return true;

    // Si c'est un élément React
    if (node.type) {
      // Exclure les h1 qui correspondent au titre
      if (node.type === "h1" && frontmatter?.title) {
        const titleContent = getNodeText(node);
        if (titleContent === frontmatter.title) {
          return false;
        }
      }

      // Exclure les paragraphes qui correspondent à l'excerpt
      if (node.type === "p" && frontmatter?.excerpt) {
        const excerptContent = getNodeText(node);
        if (excerptContent === frontmatter.excerpt) {
          return false;
        }
      }

      // Exclure les éléments qui contiennent du texte brut du frontmatter
      if (node.props?.children) {
        const content = getNodeText(node);
        if (frontmatter?.title && content.includes(frontmatter.title)) {
          return false;
        }
        if (frontmatter?.excerpt && content.includes(frontmatter.excerpt)) {
          return false;
        }
      }
    }

    return true;
  };

  // Fonction pour extraire le texte d'un nœud
  const getNodeText = (node: any): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node || typeof node !== "object") return "";

    if (node.props?.children) {
      if (Array.isArray(node.props.children)) {
        return node.props.children.map(getNodeText).join(" ");
      }
      return getNodeText(node.props.children);
    }

    return "";
  };

  // Filtrer les enfants
  const filteredChildren = Children.toArray(children).filter(filterContent);

  return <>{filteredChildren}</>;
}
