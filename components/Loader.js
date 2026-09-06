'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const GREETINGS = [
  'Bonjour',
  'Hola',
  'Ciao',
  'Hallo',
  'Olá',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Halo',        // Indonesian
  'Selamat',     // Malaysian
  'Hello lah',   // Singaporean
  'Hello',
  'Kumusta',     // Filipino
]

let hasPlayedIntroMemory = false

export function hasIntroPlayed() {
  if (hasPlayedIntroMemory) return true
  if (typeof window !== 'undefined') {
    try {
      if (sessionStorage.getItem('gelo_intro_done')) {
        hasPlayedIntroMemory = true
        return true
      }
    } catch {}
  }
  return false
}

export function markIntroPlayed() {
  hasPlayedIntroMemory = true
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.setItem('gelo_intro_done', '1')
    } catch {}
  }
}

export default function Loader({ onComplete }) {
  const [isMounted, setIsMounted] = useState(false)
  const [index, setIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)

    // If already played once, do not trigger again when returning to home
    if (hasIntroPlayed()) {
      setIsMounted(false)
      onComplete?.()
      return
    }

    // First time loading: show loader and cycle through greetings
    setIsMounted(true)

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          // Initiate exit fade
          setIsExiting(true)
          markIntroPlayed()
          setTimeout(() => {
            setIsMounted(false)
            onComplete?.()
          }, 800)
          return prev
        }
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isMounted) return null

  const loaderContent = (
    <div
      id="intro-loader"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 99999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: isExiting ? 'none' : 'all',
        userSelect: 'none',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-live="polite"
      role="status"
      aria-label="Loading portfolio"
    >
      <span
        style={{
          fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          lineHeight: 1,
          textAlign: 'center',
        }}
      >
        {GREETINGS[index]}
      </span>
    </div>
  )

  // Portal to document.body on client to prevent any parent transforms from clipping fixed positioning
  if (hasHydrated && typeof document !== 'undefined') {
    return createPortal(loaderContent, document.body)
  }

  return loaderContent
}
