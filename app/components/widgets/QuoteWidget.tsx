"use client"

import { motion, useDragControls } from "framer-motion"
// Quotes live in /config/quotes.ts — edit there to customise.
import { quotes as QUOTES } from "@/config/quotes"

export default function QuoteWidget() {
  const dragControls = useDragControls()

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      className="absolute select-none"
      style={{ top: 48, left: 24, zIndex: 5, width: 240 }}
    >
      <div className="widget-handle" onPointerDown={(e) => dragControls.start(e)}>
        <div style={{ width: 24, height: 2, borderRadius: 1, background: "rgba(255,255,255,0.12)" }} />
      </div>

      <div className="widget-body px-4 py-3.5" style={{ minHeight: 74 }}>
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          &ldquo;{QUOTES[0]}&rdquo;
        </motion.p>

        <p
          className="font-mono text-[9px] uppercase tracking-[0.1em] mt-2"
          style={{ color: "var(--text-faint)" }}
        >
          — ASI
        </p>
      </div>
    </motion.div>
  )
}
