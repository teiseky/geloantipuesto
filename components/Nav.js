'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/Nav.module.css'

export default function Nav() {
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <div className={`wrap ${styles.inner}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Gelo — Home"
        >
          <span>Gelo</span>
          <span className={styles.brandDot} aria-hidden="true">•</span>
        </Link>

        <div className={styles.navRight}>
          <ul className={styles.links} role="list">
            <li>
              <Link
                href="/"
                className={`${styles.link} ${isActive('/') ? styles.linkActive : ''}`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${styles.link} ${isActive('/about') ? styles.linkActive : ''}`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={`${styles.link} ${isActive('/work') ? styles.linkActive : ''}`}
                aria-current={isActive('/work') ? 'page' : undefined}
              >
                Work
              </Link>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/angelo-andrei-antipuesto-2ab0b5255/"
            className={styles.ctaBtn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch with Angelo on LinkedIn"
          >
            <span>Get in touch</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
