/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects window.
 * Split into two lists: `personal` (side projects) and `client`
 * (paid / contracted work). Both use the same ProjectItem shape.
 *
 *  - `tech`   → array of tags rendered beneath the description.
 *  - `stars`  → optional — shown next to the title if present.
 *  - `status` → optional — rendered as a pill (e.g. "Paused").
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "Enclave AI Workbench",
      description: "Air-gapped AI workbench for confidential documents, featuring multi-agent workflows, document intelligence, access controls, and human-in-the-loop approvals.",
      tech: ["Next.js", "TypeScript", "Fastify"],
      link: "https://github.com/ArvindIyer1/workbench-ui",
    },
    {
      title: "Relay — Content Transformation Engine",
      description: "Document processing pipeline for transforming unstructured content into usable data through image ingestion, OCR, and automated content extraction.",
      tech: ["Python", "OCR", "AI"],
      link: "https://github.com/ArvindIyer1/Content-Transformation-Engine",
    },
    {
      title: "Polymarket-Style Prediction Market",
      description: "Limit order book matching bids and asks by price-time priority, binary-outcome market mechanics, and real-time updates.",
      tech: ["TypeScript", "Node.js", "WebSockets"],
      link: "https://github.com/ArvindIyer1/new-pred-mkts",
    },
    {
      title: "Draw-App (Collaborative Whiteboard)",
      description: "Excalidraw-style real-time canvas sync in a pnpm/Turborepo monorepo.",
      tech: ["Next.js", "WebSockets", "Prisma", "JWT", "Zod"],
      link: "https://github.com/ArvindIyer1/drawapp",
    },
    {
      title: "Real-Time Chat Application",
      description: "Bidirectional messaging with a real-time client and server architecture.",
      tech: ["React (Vite)", "Express.js", "TypeScript", "Socket.io"],
      link: "https://github.com/ArvindIyer1",
    },
    {
      title: "AyurSutra",
      description: "Panchakarma centre management system, built for Smart India Hackathon.",
      tech: ["Next.js", "PostgreSQL"],
      link: "https://github.com/ArvindIyer1",
    },
    {
      title: "airvynd-monorepo-template",
      description: "CLI scaffolding tool for Turborepo pnpm monorepos (open source).",
      tech: ["Turborepo", "pnpm", "Node.js"],
      link: "https://github.com/ArvindIyer1",
    },
  ],

  client: [],
}

/** Résumé-only condensed project highlights (short names + long descriptions). */
export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "Enclave AI — Air-Gapped AI Workbench",
    desc: "Self-hosted AI workbench for confidential environments, featuring local LLMs, multi-agent workflows, document intelligence, access controls, and human-in-the-loop approvals using Next.js, TypeScript, and Fastify.",
  },
  {
    name: "Relay — AI Content Transformation Engine",
    desc: "Multi-agent platform that transforms a single source into presentations, summaries, advisories, and social content, with audience-aware workflows, multilingual generation, and automated quality validation using Next.js, TypeScript, and LangGraph.",
  },
]
