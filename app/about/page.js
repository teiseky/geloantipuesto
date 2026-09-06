import ScrollReveal from '@/components/ScrollReveal'
import styles from '@/styles/About.module.css'

export const metadata = {
  title: 'About',
  description:
    'About Angelo Andrei Antipuesto — Development Communication graduate from the University of the Philippines Los Baños, working in storytelling, advocacy, media production, and community engagement.',
}

export default function AboutPage() {
  return (
    <main className="page-body" id="main-content">

      {/* Page Header ───────────────────────────────────────── */}
      <header className={styles.pageHd}>
        <div className="wrap">
          <h1 className={styles.pageTitle}>About</h1>
        </div>
      </header>

      {/* Biography ─────────────────────────────────────────── */}
      <section className={styles.section} aria-label="Biography">
        <div className="wrap">
          <ScrollReveal className={styles.split}>
            <div className={styles.bio}>
              <p>
                Angelo Andrei Antipuesto is a Development Communication graduate from the University of the Philippines Los Baños — and a communicator in the fullest sense of the word. His work moves across radio, print, digital media, advocacy campaigns, and community-based education, always with the same intent: to make complex ideas legible to the people they concern most.
              </p>
              <p>
                As a student-leader, radio co-anchor, multimedia producer, and campaign organizer, he has co-led a university-wide scholarship program, organized national conversations on AI ethics, produced knowledge materials for local governance, and co-developed a strategic communication campaign defending Indigenous Peoples' land rights. His work is built on direct collaboration with communities, institutions, and organizations — not on speculation.
              </p>
              <p>
                He is now looking to bring these skills to organizations working in biodiversity conservation, environmental advocacy, and inclusive development — particularly those that understand that the gap between good policy and real change is often a communication problem.
              </p>

              <div className={styles.resumeAction}>
                <a
                  href="/Resume_Angelo Andrei S. Antipuesto.pdf"
                  download="Resume_Angelo Andrei S. Antipuesto.pdf"
                  className={styles.downloadBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            <div className={styles.photo}>
              <img
                src="/about-me.png"
                alt="Angelo Andrei Antipuesto"
                className={styles.portraitImg}
                loading="eager"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Domains ────────────────────────────────────────────── */}
      <section className={styles.section} aria-labelledby="domains-heading">
        <div className="wrap">
          <ScrollReveal className={styles.domains}>
            <div>
              <p id="domains-heading" className={styles.domainLabel}>What he does</p>
              <ul className={styles.domainItems} role="list" aria-label="Areas of expertise">
                {[
                  'Public relations',
                  'Project management',
                  'Community engagement',
                  'Multimedia communication',
                  'Advocacy communication',
                  'Development journalism',
                ].map((item) => (
                  <li key={item} className={styles.domainItem}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className={styles.domainLabel}>Where he focuses</p>
              <ul className={styles.domainItems} role="list" aria-label="Focus areas">
                {[
                  'Biodiversity conservation',
                  'Environmental advocacy',
                  'Community development',
                  "Indigenous Peoples' rights",
                  'Inclusive communication',
                  'Civic education',
                ].map((item) => (
                  <li key={item} className={styles.domainItem}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Education ──────────────────────────────────────────── */}
      <section className={styles.section} aria-label="Education">
        <div className="wrap">
          <ScrollReveal className={styles.education}>
            <div className={styles.educationEntry}>
              <div>
                <p className={styles.educationSchool}>
                  University of the Philippines Los Baños
                </p>
              </div>
              <div>
                <p className={styles.educationDegree}>
                  Bachelor of Science in Development Communication
                </p>
                <p className={styles.educationProgram}>
                  College of Development Communication
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  )
}
