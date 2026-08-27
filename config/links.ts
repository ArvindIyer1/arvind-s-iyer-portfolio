/**
 * links.ts
 * ─────────────────────────────────────────────────────────────
 * Curated external reading list shown in the LinksWidget on the
 * desktop. Each entry is an outbound link with a short tag used
 * for display only.
 * ─────────────────────────────────────────────────────────────
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  /** Freeform short label displayed under the author (e.g. "rust"). */
  tag: string
}

export const links: LinkItem[] = [
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann",       url: "https://dataintensive.net/",                              tag: "systems" },
  { title: "The Rust Programming Language",         author: "Steve Klabnik & Carol Nichols", url: "https://doc.rust-lang.org/book/",                tag: "rust" },
  { title: "Crafting Interpreters",                 author: "Robert Nystrom",          url: "https://craftinginterpreters.com/",                      tag: "compilers" },
  { title: "A Philosophy of Software Design",       author: "John Ousterhout",        url: "https://web.stanford.edu/~ouster/cgi-bin/book.php",      tag: "design" },
  { title: "Thinking in Systems",                   author: "Donella Meadows",         url: "https://donellameadows.org/systems-thinking-resources/", tag: "systems thinking" },
]
