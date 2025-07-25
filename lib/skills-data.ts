export interface Skill {
  id: string;
  name: string;
  description: string;
  category: "frontend" | "backend" | "outils" | "ia" | "déploiement" | "base de données";
  proficiency: 1 | 2 | 3 | 4 | 5; // 1 = beginner, 5 = expert
  selected: boolean;
}

export const availableSkills: Skill[] = [
  {
    id: "angular-material",
    name: "Angular Material",
    description:
      "Une bibliothèque de composants UI pour Angular, inspirée du Material Design de Google, utilisée pour créer des interfaces utilisateur modernes et réactives.",
    category: "frontend",
    proficiency: 4,
    selected: false,
  },
  {
    id: "appwrite",
    name: "Appwrite",
    description:
      "Une plateforme backend as a service (BaaS) open source offrant des fonctionnalités comme la gestion des utilisateurs, les bases de données et le stockage de fichiers.",
    category: "backend",
    proficiency: 3,
    selected: false,
  },
  {
    id: "bun",
    name: "Bun",
    description:
      "Un runtime JavaScript rapide et léger avec un gestionnaire de paquets intégré, conçu pour améliorer les performances des applications et réduire la latence.",
    category: "outils",
    proficiency: 2,
    selected: false,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Un modèle d'intelligence artificielle développé par OpenAI, conçu pour la conversation et le traitement du langage naturel.",
    category: "ia",
    proficiency: 4,
    selected: false,
  },
  {
    id: "coolify",
    name: "Coolify",
    description:
      "An app and service deployment tool for containerized environments, designed to simplify server deployments for developers.",
    category: "déploiement",
    proficiency: 3,
    selected: false,
  },
  {
    id: "deno",
    name: "Deno",
    description:
      "A secure and modern JavaScript and TypeScript runtime developed by the creator of Node.js, focusing on default security and ES Modules.",
    category: "backend",
    proficiency: 2,
    selected: false,
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    description:
      "Une bibliothèque d'animation pour React, permettant des transitions complexes et des animations pour des interfaces utilisateur interactives.",
    category: "frontend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "Une plateforme de développement et service d'hébergement de code source basé sur Git, utilisé pour la collaboration et le contrôle de version.",
    category: "outils",
    proficiency: 5,
    selected: false,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "An AI-powered code-writing assistant developed by GitHub and OpenAI, designed to suggest lines and blocks of code in real-time.",
    category: "ia",
    proficiency: 4,
    selected: false,
  },
  {
    id: "gitlab",
    name: "GitLab",
    description:
      "Une plateforme DevOps pour la gestion du code source, l'intégration continue (CI/CD) et les fonctionnalités collaboratives pour le développement logiciel.",
    category: "outils",
    proficiency: 4,
    selected: true,
  },
  {
    id: "hono",
    name: "Hono",
    description:
      "A lightweight framework for creating fast APIs and web applications in JavaScript and TypeScript, optimized for serverless platforms.",
    category: "backend",
    proficiency: 3,
    selected: false,
  },
  {
    id: "markdown",
    name: "Markdown",
    description:
      "A lightweight markup language used to format plain text and produce simple HTML documents.",
    category: "outils",
    proficiency: 5,
    selected: false,
  },
  {
    id: "nestjs",
    name: "Nest.js",
    description:
      "Un framework Node.js pour construire des applications backend robustes et évolutives, conçu pour exploiter les paradigmes de développement côté serveur comme le routage, les contrôleurs et les services.",
    category: "backend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "Un framework de rendu côté serveur pour React, optimisé pour les performances et le SEO, utilisé pour construire des applications web modernes.",
    category: "frontend",
    proficiency: 5,
    selected: true,
  },
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "Node.js is an open-source and cross-platform JavaScript runtime environment. It's popular for almost any kind of project!",
    category: "backend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "react",
    name: "React",
    description:
      "Une bibliothèque JavaScript pour construire des interfaces utilisateur, particulièrement adaptée au développement d'applications dynamiques et interactives.",
    category: "frontend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "shadcn-ui",
    name: "Shadcn UI",
    description:
      "Une collection de composants UI personnalisables pour les applications frontend, intégrés avec Tailwind CSS et optimisés pour une expérience utilisateur cohérente.",
    category: "frontend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "Une plateforme open source offrant des fonctionnalités backend comme les bases de données PostgreSQL, une API REST, l'authentification et le stockage de fichiers.",
    category: "base de données",
    proficiency: 4,
    selected: false,
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework designed for quickly building interfaces using pre-defined style classes.",
    category: "frontend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Un surensemble typé de JavaScript qui permet une meilleure vérification des erreurs et une maintenabilité du code améliorée.",
    category: "frontend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "Un éditeur de code alimenté par l'IA développé par Cursor, conçu pour améliorer la productivité des développeurs et la qualité du code via des suggestions intelligentes et la refactorisation automatisée.",
    category: "outils",
    proficiency: 5,
    selected: true,
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description:
      "An open-source code editor developed by Microsoft, popular for its extensibility, multi-language support, and integration with modern development tools.",
    category: "outils",
    proficiency: 5,
    selected: false,
  },
  {
    id: "zod",
    name: "Zod",
    description:
      "A TypeScript schema validation library, used to ensure input data validation and security by defining typed schemas.",
    category: "outils",
    proficiency: 4,
    selected: false,
  },
];
