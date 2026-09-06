import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span className={styles.name}>Angelo Andrei Antipuesto</span>
        <span className={styles.meta}>Development Communicator &middot; UPLB</span>
        <a
          href="https://www.linkedin.com/in/angelo-andrei-antipuesto-2ab0b5255/"
          className="ext-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Angelo Antipuesto on LinkedIn (opens in new tab)"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
