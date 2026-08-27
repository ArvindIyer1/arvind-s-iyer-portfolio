/**
 * uses.ts
 * ─────────────────────────────────────────────────────────────
 * Data for the /uses-style window. Group your tools by category;
 * each item has a name and an optional short note.
 *
 * Categories and counts are fully flexible — the UI iterates over
 * whatever you provide.
 * ─────────────────────────────────────────────────────────────
 */

export interface UseItem {
  name: string
  /** Optional short descriptor shown in the faint mono style. */
  note?: string
}

export interface UseGroup {
  category: string
  items: UseItem[]
}

export const uses: UseGroup[] = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Air M5", note: "primary machine" },
      { name: "External  Monitor" },
      { name: "Mechanical Keyboard" },
      
    ],
  },
  {
    category: "Editor",
    items: [
      { name: "Cursor", note: "AI-assisted coding" },
      { name: "VS Code", note: "general editing" },
    ],
  },
  {
    category: "Terminal",
    items: [
      { name: "Terminal.app", note: "default macOS terminal" },
    { name: "zsh", note: "shell" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", note: "version control" },
    { name: "Bun", note: "JS runtime & package manager" },
    { name: "Postman", note: "API testing" },
    { name: "Notion", note: "docs & planning" },
    ],
  },
  {
    category: "Stack defaults",
    items: [
      { name: "TypeScript" },
      { name: "Next.js", note: "web" },
      { name: "PostgreSQL", note: "data" },
      { name: "Vercel", note: "deploy" },
    ],
  },
]
