'use client'

import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}

/**
 * template.js — re-renders on every navigation (unlike layout.js which persists).
 * This is the correct Next.js App Router pattern for page transitions.
 * AnimatePresence is handled by the fact that template remounts, giving
 * the motion.div a fresh key and triggering enter/exit animations.
 */
export default function Template({ children }) {
  return (
    <motion.div
      className="page-transition"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
