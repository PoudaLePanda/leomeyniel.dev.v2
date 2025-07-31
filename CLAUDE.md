# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

### Package Management
- Uses pnpm for package management
- Dependencies are locked in `pnpm-lock.yaml`

## Architecture Overview

### Framework & Tech Stack
- **Next.js 14** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** with shadcn/ui components
- **MDX** for content management with remark/rehype plugins
- **Framer Motion** for animations
- **React Hook Form** with Zod validation

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with metadata and providers
├── page.tsx           # Homepage using LifeDashboard component
├── notes/             # Notes section with dynamic routing
├── projects/          # Projects section with dynamic routing
└── mentions-legales/  # Legal pages

components/            # React components
├── ui/               # shadcn/ui components
├── life-dashboard.tsx # Main dashboard component
├── navigation.tsx    # Site navigation
├── theme-provider.tsx # Theme switching logic
└── ...

content/              # MDX content files
├── notes/           # Blog posts/notes in MDX format
└── projects/        # Project documentation in MDX

lib/                 # Utility functions
├── mdx-utils.ts    # MDX file processing utilities
├── utils.ts        # General utilities (cn function, etc.)
└── skills-data.ts  # Skills configuration data

contexts/           # React contexts
└── theme-context.tsx # Theme management (light/dark/everforest)
```

### Key Components Architecture
- **LifeDashboard**: Main homepage component displaying notes, projects, and skills
- **MDX Integration**: Custom MDX processing with frontmatter support for metadata
- **Theme System**: Multi-theme support (light/dark/everforest) with CSS variables
- **Content Management**: File-based CMS using MDX files with gray-matter frontmatter parsing

### Content System
- MDX files in `content/` directory with frontmatter metadata
- Automatic slug generation from filenames
- Support for notes and projects with different types and statuses
- Frontmatter structure: `title`, `status`, `type`, `lastModified`, `author`, `tags`, `excerpt`

### Styling & UI
- **shadcn/ui**: Component library with Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom theme configuration
- **CSS Variables**: Theme-aware color system using HSL values
- **Animations**: Framer Motion for page transitions and component animations
- **Typography**: Geist font family (Sans & Mono variants)

### Configuration Files
- `next.config.mjs`: Next.js configuration with MDX, security headers, and image optimization
- `tailwind.config.ts`: Tailwind configuration with custom theme and animations
- `components.json`: shadcn/ui configuration with aliases and styling preferences
- `tsconfig.json`: TypeScript configuration with path aliases (`@/*` maps to `./`)

### MDX Processing
- Remark plugins: `remark-gfm`, `remark-toc`
- Rehype plugins: `rehype-slug`, `rehype-katex` for math support
- File processing utilities in `lib/mdx-utils.ts` for reading and parsing content

### Performance & SEO
- Comprehensive metadata configuration in layout.tsx
- Structured data implementation for Person and Website
- Image optimization with WebP/AVIF formats
- Security headers configured in next.config.mjs
- Umami analytics integration