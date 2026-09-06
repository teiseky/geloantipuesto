'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from '@/styles/Loader.module.css'

const GREETINGS = [
  'Hello',
  'Kumusta',
  'Bonjour',
  'Hola',
  'Ciao',
  'Hallo',
  'Olá',
  'こんにちは',
  '안녕하세요',
  '你好',
]

const HOLD_MS     = 180
const FADE_IN_MS  = 80
const FADE_OUT_MS = 80
const GAP_MS      = 10

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const [word, setWord] = useState(GREETINGS[0])
  const [wordOn, setWordOn] = useState(true)
  const didRun = useRef(false)

  const runSequence = useCallback(async () => {
    for (let i = 0; i < GREETINGS.length; i++) {
      setWord(GREETINGS[i])
      setWordOn(true)
      await sleep(FADE_IN_MS + HOLD_MS)
      setWordOn(false)
      await sleep(FADE_OUT_MS + GAP_MS)
    }

    // Trigger exit animation, then inform parent
    setVisible(false)
    await sleep(450)
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
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          aria-live="polite"
          role="status"
          aria-label="Loading portfolio"
        >
          <span
            className={styles.word}
            style={{
              opacity: wordOn ? 1 : 0,
              transform: wordOn ? 'scale(1)' : 'scale(0.96)',
              transition: `opacity ${FADE_IN_MS}ms ease, transform ${FADE_IN_MS}ms ease`,
            }}
          >
            {word}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
