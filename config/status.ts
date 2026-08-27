/**
 * status.ts
 * ─────────────────────────────────────────────────────────────
 * Data for the StatusWidget shown in the desktop's top-right
 * corner. Flip `available` to false to render a muted indicator.
 *
 * The `currently` rows are free-form "label + value" pairs — add
 * or remove as many as you want.
 * ─────────────────────────────────────────────────────────────
 */

export interface StatusRow {
  /** Short label (5-10 chars reads best). */
  label: string
  value: string
}

export interface StatusConfig {
  available: boolean
  label: string
  currently: StatusRow[]
}

export const status: StatusConfig = {
  available: true,
  label: "Open to work",
  currently: [
    { label: "Building", value: "An air-gapped local AI workbench for industrial/defence orgs — Smart India Hackathon" },
    { label: "Focus",    value: "Building real-time systems and finishing my SIH hackathon project" },
  ],
}
