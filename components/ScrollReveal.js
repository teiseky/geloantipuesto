'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollReveal — wraps children and reveals them when they enter the viewport.
 *
 * Props:
 *  - delay: number (seconds) — stagger offset for lists
 *  - y: number — initial Y offset (default 24)
 *  - className: string — extra classes on the wrapper
 *  - as: string — HTML element type (default 'div')
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [delay, y])

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  )
}
