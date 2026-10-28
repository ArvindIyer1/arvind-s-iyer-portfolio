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

export const skills: Skills = 
{
  "Languages": ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  "Frontend": ["React.js", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Fastify", "REST APIs", "WebSockets"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  "AI & ML": ["LangGraph", "Ollama"],
  "Tools": ["Git", "GitHub", "Linux", "GitHub Copilot", "JWT", "Zod", "Turborepo", "pnpm", "Bun"]
}

