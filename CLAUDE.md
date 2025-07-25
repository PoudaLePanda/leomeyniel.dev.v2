# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` or `npm run dev`
- **Build**: `pnpm build` or `npm run build`
- **Production server**: `pnpm start` or `npm run start`
- **Linting**: `pnpm lint` or `npm run lint`

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 with custom Everforest theme
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Content**: MDX files with gray-matter for frontmatter parsing
- **Fonts**: Geist Sans and Geist Mono
- **Animations**: Framer Motion
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: pnpm (based on lock file)

## Architecture Overview

### App Router Structure
- **`app/`**: Next.js 14 App Router structure
  - `layout.tsx`: Root layout with theme providers and font setup
  - `page.tsx`: Homepage with LifeDashboard component
  - `notes/`: Dynamic routes for notes with MDX content
  - `projects/`: Dynamic routes for projects with MDX content
  - `privacy/` and `terms/`: Static pages

### Content Management
- **`content/`**: MDX files organized by type
  - `notes/`: Note files with frontmatter (title, type, lastModified, author, tags, excerpt)
  - `projects/`: Project files with frontmatter (title, status, excerpt, etc.)
- **`lib/mdx-utils.ts`**: Core utilities for reading and parsing MDX files
  - `getMdxFiles()`: Fetch all MDX files from a directory
  - `getMdxFileBySlug()`: Get specific file by slug
  - `getMdxSlugs()`: Get all slugs from directory

### Component Architecture
- **`components/`**: Reusable UI components
  - `life-dashboard.tsx`: Main dashboard component displaying notes and projects
  - `ui/`: shadcn/ui components built on Radix UI
  - Custom components: `animated-card`, `timeline`, `skills`, etc.
- **`contexts/theme-context.tsx`**: Custom theme system using Everforest color scheme
- **`lib/everforest-theme.ts`**: Theme configuration with dark/light modes

### Styling System
- **Tailwind CSS v3** with custom configuration
- **Everforest theme**: Custom color scheme implemented via CSS-in-JS, not Tailwind variables
- **Typography plugin**: For markdown content styling
- **Animation classes**: Custom keyframes for accordions

## Key Development Patterns

### MDX Content Structure
- All content uses consistent frontmatter schema defined in `lib/mdx-utils.ts`
- Dynamic routing handles `/notes/[noteName]` and `/projects/[projectName]`
- Content is rendered using custom MDX components in `components/mdx-components.tsx`

### Theme Implementation
- Uses a custom theme context instead of next-themes
- Colors are applied via inline styles using the `everforestTheme` object
- Theme state persisted in localStorage with key `everforest-theme`

### Component Patterns
- Heavy use of Framer Motion for page transitions and animations
- Radix UI primitives wrapped in custom styled components
- TypeScript interfaces for all component props and data structures

## Configuration Notes

- **MDX**: Configured with remark-gfm, remark-toc, rehype-slug, and rehype-katex plugins
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./`)
- **Tailwind**: Uses class-based dark mode and custom container configuration
- **Next.js**: Supports MDX files as pages alongside TSX files