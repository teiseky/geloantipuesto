'use client'

import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const GREETINGS = [
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Hallo',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Kumusta',
  'Olá',
]

const HOLD_MS     = 230
const FADE_IN_MS  = 100
const FADE_OUT_MS = 110
const GAP_MS      = 16
const SEEN_KEY    = 'aaa-intro-seen'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function Loader({ onComplete }) {
  const [visible, setVisible]   = useState(true)
  const [word, setWord]         = useState('')
  const [wordOn, setWordOn]     = useState(false)
  const didRun = useRef(false)

  const runSequence = useCallback(async () => {
    // Skip if already seen this session
    if (typeof window !== 'undefined' && sessionStorage.getItem(SEEN_KEY)) {
      setVisible(false)
      onComplete?.()
      return
    }

    for (const greeting of GREETINGS) {
      setWord(greeting)
      setWordOn(true)
      await sleep(FADE_IN_MS + HOLD_MS)
      setWordOn(false)
      await sleep(FADE_OUT_MS + GAP_MS)
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SEEN_KEY, '1')
    }

    // Trigger exit animation, then unmount
    setVisible(false)
    await sleep(500) // match exit duration
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    if (didRun.current) return
    didRun.current = true
    runSequence()
  }, [runSequence])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          aria-live="polite"
          role="status"
          aria-label="Loading portfolio"
        >
          <span
            className="loader__word"
            style={{
              opacity: wordOn ? 1 : 0,
              transition: `opacity ${FADE_IN_MS}ms ease`,
            }}
          >
            {word}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
