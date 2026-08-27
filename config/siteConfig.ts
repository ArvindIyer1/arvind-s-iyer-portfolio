/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  linkedin: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Arvind Subramanyam",
    lastName: "Iyer",
    fullName: "Arvind Subramanyam Iyer",
    initials: "AS",
    role: "Computer Engineering Student",
    shortRole: "Computer Engineering Student",
    tagline:
      "Computer Engineering student building real-time systems — from limit order books to collaborative whiteboards — one commit at a time.",
    location: "Pune, Maharashtra, India",
    age: 20,
    avatar: "/avatar.svg",
    username: "ArvindIyer1",
  },

  social: {
    github: "https://github.com/ArvindIyer1",
    twitter: "https://x.com/ArvindIyer01",
    linkedin: "https://linkedin.com/in/arvind-s-iyer-tech",
    githubUsername: "ArvindIyer1",
    twitterHandle: "ArvindIyer01",
  },

  contact: {
    email: "arvindiyer.dev@proton.me",
    calendar: "",
    heading: "Let's Connect",
    subheading: "Open to collaborations, freelance work, or just a conversation.",
    rows: [
      { icon: "mail",     href: "mailto:arvindiyer.dev@proton.me",       label: "Email",           mono: "arvindiyer.dev@proton.me" },
      { icon: "twitter",  href: "https://x.com/ArvindIyer01",            label: "X / Twitter",     mono: "@ArvindIyer01" },
      { icon: "github",   href: "https://github.com/ArvindIyer1",        label: "GitHub",          mono: "ArvindIyer1" },
    ],
  },

  seo: {
    title: "Arvind Subramanyam Iyer — Portfolio",
    description:
      "Portfolio of Arvind Subramanyam Iyer, a Computer Engineering student building real-time systems and collaborative applications.",
  },

  resumeLink: "/resume.pdf",

  features: {
    konami: false,
  },
}
