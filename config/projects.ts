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
      title: "Polymarket-Style Prediction Market",
      description: "Limit order book matching bids and asks by price-time priority, binary-outcome market mechanics, and real-time updates.",
      tech: ["TypeScript", "Node.js", "WebSockets"],
      link: "https://github.com/ArvindIyer1",
    },
    {
      title: "Draw-App (Collaborative Whiteboard)",
      description: "Excalidraw-style real-time canvas sync in a pnpm/Turborepo monorepo.",
      tech: ["Next.js", "WebSockets", "Prisma", "JWT", "Zod"],
      link: "https://github.com/ArvindIyer1",
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
    name: "Polymarket-Style Prediction Market",
    desc: "Limit order book matching with price-time priority, binary-outcome market mechanics, and real-time updates using TypeScript, Node.js, and WebSockets.",
  },
  {
    name: "Draw-App (Collaborative Whiteboard)",
    desc: "Excalidraw-style real-time canvas sync in a Next.js, Prisma, JWT, Zod, and WebSockets pnpm/Turborepo monorepo.",
  },
]
