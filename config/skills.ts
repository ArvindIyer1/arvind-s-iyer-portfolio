/**
 * skills.ts
 * ─────────────────────────────────────────────────────────────
 * Skills grouped by category. Keys become category labels on the
 * left; values become the chip list on the right.
 *
 * Add, remove, or rename categories freely — the Résumé section
 * iterates over Object.entries(skills), so the UI adapts.
 * ─────────────────────────────────────────────────────────────
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Languages":  ["JavaScript", "TypeScript", "C++", "HTML5", "CSS3"],
  "Frontend":   ["React.js", "Next.js", "Tailwind CSS"],
  "Backend":    ["Node.js", "Express.js", "Socket.io", "REST APIs"],
  "Databases":  ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  "Tools":      ["Git", "GitHub", "JWT", "Zod", "Turborepo", "pnpm workspaces"],
}
