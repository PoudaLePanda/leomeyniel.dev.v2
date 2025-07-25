export interface Skill {
  id: string;
  name: string;
  description: string;
  category: "frontend" | "backend" | "tools" | "ai" | "deployment" | "database";
  proficiency: 1 | 2 | 3 | 4 | 5; // 1 = beginner, 5 = expert
  selected: boolean;
}

export const availableSkills: Skill[] = [
  {
    id: "angular-material",
    name: "Angular Material",
    description:
      "A UI component library for Angular, inspired by Google's Material Design, used to create modern and responsive user interfaces.",
    category: "frontend",
    proficiency: 4,
    selected: false,
  },
  {
    id: "appwrite",
    name: "Appwrite",
    description:
      "An open-source backend as a service (BaaS) platform providing features like user management, databases, and file storage.",
    category: "backend",
    proficiency: 3,
    selected: false,
  },
  {
    id: "bun",
    name: "Bun",
    description:
      "A fast and lightweight JavaScript runtime with a built-in package manager, designed to improve application performance and reduce latency.",
    category: "tools",
    proficiency: 2,
    selected: false,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "An artificial intelligence model developed by OpenAI, designed for conversation and natural language processing.",
    category: "ai",
    proficiency: 4,
    selected: false,
  },
  {
    id: "coolify",
    name: "Coolify",
    description:
      "An app and service deployment tool for containerized environments, designed to simplify server deployments for developers.",
    category: "deployment",
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
      "An animation library for React, allowing complex transitions and animations for interactive user interfaces.",
    category: "frontend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "A development platform and source code hosting service based on Git, used for collaboration and version control.",
    category: "tools",
    proficiency: 5,
    selected: false,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "An AI-powered code-writing assistant developed by GitHub and OpenAI, designed to suggest lines and blocks of code in real-time.",
    category: "ai",
    proficiency: 4,
    selected: false,
  },
  {
    id: "gitlab",
    name: "GitLab",
    description:
      "A DevOps platform for source code management, continuous integration (CI/CD), and collaborative features for software development.",
    category: "tools",
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
    category: "tools",
    proficiency: 5,
    selected: false,
  },
  {
    id: "nestjs",
    name: "Nest.js",
    description:
      "A Node.js framework for building robust and scalable backend applications, designed to leverage server-side development paradigms such as routing, controllers, and services.",
    category: "backend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "A server-side rendering framework for React, optimized for performance and SEO, used to build modern web applications.",
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
      "A JavaScript library for building user interfaces, especially suited for developing dynamic and interactive applications.",
    category: "frontend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "shadcn-ui",
    name: "Shadcn UI",
    description:
      "A collection of customizable UI components for frontend applications, integrated with Tailwind CSS and optimized for a consistent user experience.",
    category: "frontend",
    proficiency: 4,
    selected: true,
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "An open-source platform providing backend features like PostgreSQL databases, a REST API, authentication, and file storage.",
    category: "database",
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
      "A typed superset of JavaScript that enables better error-checking and code maintainability.",
    category: "frontend",
    proficiency: 5,
    selected: false,
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "An AI-powered code editor developed by Cursor, designed to improve developer productivity and code quality through intelligent suggestions and automated refactoring.",
    category: "tools",
    proficiency: 5,
    selected: true,
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description:
      "An open-source code editor developed by Microsoft, popular for its extensibility, multi-language support, and integration with modern development tools.",
    category: "tools",
    proficiency: 5,
    selected: false,
  },
  {
    id: "zod",
    name: "Zod",
    description:
      "A TypeScript schema validation library, used to ensure input data validation and security by defining typed schemas.",
    category: "tools",
    proficiency: 4,
    selected: false,
  },
];
