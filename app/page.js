'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Loader from '@/components/Loader'
import ScrollReveal from '@/components/ScrollReveal'
import styles from '@/styles/Hero.module.css'
import home from '@/styles/Home.module.css'

export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false)

  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const pillarsRef = useRef(null)

  // Fire GSAP hero stagger after loader exits
  useEffect(() => {
    if (!loaderDone) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      if (leftRef.current) leftRef.current.style.opacity = '1'
      if (rightRef.current) rightRef.current.style.opacity = '1'
      if (pillarsRef.current) {
        Array.from(pillarsRef.current.children).forEach((el) => {
          el.style.opacity = '1'
        })
      }
      return
    }

    const tl = gsap.timeline()

    tl.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }
    )
      .fromTo(
        rightRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' },
        '-=0.45'
      )
      .fromTo(
        pillarsRef.current ? pillarsRef.current.children : [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        '-=0.3'
      )
  }, [loaderDone])

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />

      <main id="main-content">

        {/* Hero ─────────────────────────────────────────────── */}
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroBg} aria-hidden="true" />

          <div className={`wrap ${styles.heroContent}`}>
            <div className={styles.grid}>

              {/* Left Column: Greeting & Sized Stacked Title */}
              <div ref={leftRef} className={styles.leftCol} style={{ opacity: 0 }}>
                <p className={styles.greeting}>Hi, I am</p>
                <h1 className={styles.title} id="hero-heading">
                  <span className={styles.titleLine}>Angelo</span>
                  <span className={styles.titleLine}>Andrei</span>
                  <span className={styles.titleLine}>Antipuesto</span>
                </h1>
              </div>

              {/* Right Column: Statement & Subtext */}
              <div ref={rightRef} className={styles.rightCol} style={{ opacity: 0 }}>
                <h2 className={styles.statement}>
                  Great communication should move communities.
                </h2>
                <p className={styles.desc}>
                  From grassroots dialogues to national advocacy campaigns, I craft communication strategies that connect, empower, and transform.
                </p>
              </div>

            </div>

            {/* Bottom: 4 Pillars (No Box, Maroon Accent) */}
            <div ref={pillarsRef} className={styles.pillars}>
              <div className={styles.pillar} style={{ opacity: 0 }}>
                <span className={styles.pillarNum}>#01</span>
                <p className={styles.pillarTitle}>Advocacy Campaigns</p>
              </div>
              <div className={styles.pillar} style={{ opacity: 0 }}>
                <span className={styles.pillarNum}>#02</span>
                <p className={styles.pillarTitle}>Community Fieldwork</p>
              </div>
              <div className={styles.pillar} style={{ opacity: 0 }}>
                <span className={styles.pillarNum}>#03</span>
                <p className={styles.pillarTitle}>Multimedia &amp; Broadcast</p>
              </div>
              <div className={styles.pillar} style={{ opacity: 0 }}>
                <span className={styles.pillarNum}>#04</span>
                <p className={styles.pillarTitle}>Development Research</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 1: Advocacy & Campaign Projects ───────── */}
        <section className={home.section} aria-labelledby="advocacy-heading">
          <div className="wrap">

            <div className={home.sectionHeader}>
              <span className={home.sectionTag}>01 / Selected Works</span>
              <h2 id="advocacy-heading" className={home.sectionTitle}>
                Advocacy &amp; Campaign Projects
              </h2>
              <p className={home.sectionDesc}>
                Action-oriented communication initiatives bridging community stakeholders, youth leaders, educational campaigns, and civic mobilization.
              </p>
            </div>

            <div className={home.projectList}>

              {/* Project 1: Alay sa Sambayanan Scholarship Program */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="Alay sa Sambayanan Scholarship Program">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Co-head of program</span>
                    <h3 className={home.cardTitle}>Alay sa Sambayanan Scholarship Program</h3>
                  </div>
                  <div className={home.cardLinks}>
                    <a
                      href="https://www.facebook.com/masigscholarship"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${home.chipLink} ${home.chipFacebook}`}
                      aria-label="View Alay sa Sambayanan Scholarship Program on Facebook"
                    >
                      <span className={home.chipIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      <span>Facebook ↗</span>
                    </a>
                  </div>
                </div>

                {/* 3 Images */}
                <div className={home.gallery3}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Alay sa Sambayanan Scholarship Program/Screenshot 2026-09-06 111420.png')}
                      alt="Alay sa Sambayanan Scholarship Program orientation"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Alay sa Sambayanan Scholarship Program/Screenshot 2026-09-06 111523.png')}
                      alt="Alay sa Sambayanan Scholarship Program outreach"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Alay sa Sambayanan Scholarship Program/Screenshot 2026-09-06 111604.png')}
                      alt="Alay sa Sambayanan Scholarship Program community awarding"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 2: Rising Edges: Ethics in AI & Data Science */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="Rising Edges: Ethics in AI & Data Science">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Co-head of program</span>
                    <h3 className={home.cardTitle}>Rising Edges: Ethics in AI &amp; Data Science</h3>
                  </div>
                </div>

                {/* 6 Images in 3x2 Grid */}
                <div className={home.gallery6}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 111716.png')}
                      alt="Rising Edges: Ethics in AI keynote"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 111829.png')}
                      alt="Rising Edges: Ethics in AI panel"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 111859.png')}
                      alt="Rising Edges: Ethics in AI interactive session"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 111919.png')}
                      alt="Rising Edges: Ethics in AI workshop discussion"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 111941.png')}
                      alt="Rising Edges: Ethics in AI brand identity"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Rising Edges Ethics in AI & Data Science/Screenshot 2026-09-06 112003.png')}
                      alt="Rising Edges: Ethics in AI cohort"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 3: Wash O’Clock Seminar in La Mesa Elementary School */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="Wash O’Clock Seminar in La Mesa Elementary School">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Public Relations Head</span>
                    <h3 className={home.cardTitle}>Wash O’Clock Seminar in La Mesa Elementary School</h3>
                  </div>
                </div>

                {/* 3 Images */}
                <div className={home.gallery3}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Wash O’Clock Seminar in La Mesa Elementary School/Screenshot 2026-09-06 112031.png')}
                      alt="Wash O’Clock Seminar classroom demonstration"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Wash O’Clock Seminar in La Mesa Elementary School/Screenshot 2026-09-06 112113.png')}
                      alt="Wash O’Clock Seminar hygiene kit distribution"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Wash O’Clock Seminar in La Mesa Elementary School/Screenshot 2026-09-06 112141.png')}
                      alt="Wash O’Clock Seminar student games"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 4: TikTok Challenge Campaign for Global Handwashing Day */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="TikTok Challenge Campaign for Global Handwashing Day">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Vice President for External Affairs</span>
                    <h3 className={home.cardTitle}>TikTok Challenge Campaign for Global Handwashing Day</h3>
                  </div>
                </div>

                {/* 3 Vertical Images */}
                <div className={home.galleryVertical}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/TikTok Challenge Campaign for Global Handwashing Day/Screenshot 2026-09-06 112217.png')}
                      alt="TikTok Challenge Campaign video launch"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/TikTok Challenge Campaign for Global Handwashing Day/Screenshot 2026-09-06 112342.png')}
                      alt="TikTok Challenge Campaign viral dance routine"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/TikTok Challenge Campaign for Global Handwashing Day/Screenshot 2026-09-06 112422.png')}
                      alt="TikTok Challenge Campaign community engagement"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 5: Tikom o Sulong: Halalan Starter Pack 2022 */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="Tikom o Sulong: Halalan Starter Pack 2022">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Co-founder and co-producer</span>
                    <h3 className={home.cardTitle}>Tikom o Sulong: Halalan Starter Pack 2022</h3>
                  </div>
                  <div className={home.cardLinks}>
                    <a
                      href="https://open.spotify.com/show/4Ftm4JIQdLCvliBLR4Z7HL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${home.chipLink} ${home.chipSpotify}`}
                      aria-label="Listen to Tikom o Sulong on Spotify"
                    >
                      <span className={home.chipIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </span>
                      <span>Spotify Podcast ↗</span>
                    </a>
                    <a
                      href="https://www.facebook.com/uplbcdcfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${home.chipLink} ${home.chipFacebook}`}
                      aria-label="View Tikom o Sulong on Facebook"
                    >
                      <span className={home.chipIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      <span>Facebook ↗</span>
                    </a>
                  </div>
                </div>

                {/* 3 Images */}
                <div className={home.gallery3}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Tikom o Sulong Halalan Starter Pack 2022/Screenshot 2026-09-06 112507.png')}
                      alt="Tikom o Sulong podcast cover and episode art"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Tikom o Sulong Halalan Starter Pack 2022/Screenshot 2026-09-06 112542.png')}
                      alt="Tikom o Sulong studio recording session"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Tikom o Sulong Halalan Starter Pack 2022/Screenshot 2026-09-06 112612.png')}
                      alt="Tikom o Sulong voter education outreach"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 6: Kalingang Busko: A Solidarity Citizenship Project */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="Kalingang Busko: A Solidarity Citizenship Project">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Co-founder and co-producer</span>
                    <h3 className={home.cardTitle}>Kalingang Busko: A Solidarity Citizenship Project</h3>
                  </div>
                  <div className={home.cardLinks}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100069618646572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${home.chipLink} ${home.chipFacebook}`}
                      aria-label="View Kalingang Busko on Facebook"
                    >
                      <span className={home.chipIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      <span>Facebook ↗</span>
                    </a>
                  </div>
                </div>

                {/* 3 Images */}
                <div className={home.gallery3}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Kalingang Busko A Solidarity Citizenship Project/Screenshot 2026-09-06 112637.png')}
                      alt="Kalingang Busko community mobilization"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Kalingang Busko A Solidarity Citizenship Project/Screenshot 2026-09-06 112708.png')}
                      alt="Kalingang Busko solidarity aid distribution"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/Kalingang Busko A Solidarity Citizenship Project/Screenshot 2026-09-06 112739.png')}
                      alt="Kalingang Busko citizen dialogue session"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 7: CDCiklaban */}
              <ScrollReveal as="article" className={home.projectCard} aria-label="CDCiklaban">
                <div className={home.cardHead}>
                  <div className={home.cardLeft}>
                    <span className={home.roleBadge}>Role: Head and External Relations Officer</span>
                    <h3 className={home.cardTitle}>CDCiklaban</h3>
                  </div>
                  <div className={home.cardLinks}>
                    <a
                      href="https://www.facebook.com/uplbCDCiklaban"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${home.chipLink} ${home.chipFacebook}`}
                      aria-label="View CDCiklaban on Facebook"
                    >
                      <span className={home.chipIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      <span>Facebook ↗</span>
                    </a>
                  </div>
                </div>

                {/* 3 Images */}
                <div className={home.gallery3}>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/CDCiklaban/Screenshot 2026-09-06 112913.png')}
                      alt="CDCiklaban festival opening stage"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/CDCiklaban/Screenshot 2026-09-06 113000.png')}
                      alt="CDCiklaban inter-organization sports event"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={`${home.imageFrame}`}>
                    <img
                      src={encodeURI('/CDCiklaban/Screenshot 2026-09-06 113024.png')}
                      alt="CDCiklaban culminating program"
                      className={home.projectImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* ── Section 2: Multimedia & Media-Based Learning Projects ── */}
        <section className={home.section} style={{ paddingTop: 0 }} aria-labelledby="multimedia-heading">
          <div className="wrap">

            <div className={home.sectionHeader}>
              <span className={home.sectionTag}>02 / Media &amp; Broadcast</span>
              <h2 id="multimedia-heading" className={home.sectionTitle}>
                Multimedia &amp; Media-Based Learning Projects
              </h2>
              <p className={home.sectionDesc}>
                Broadcasting, investigative co-writing, and participatory community media produced across UPLB radio and regional publications.
              </p>
            </div>

            <div className={home.mmGrid}>

              {/* Sub-project 8A: Radyo DZLB Radio Co-anchor */}
              <ScrollReveal as="article" className={home.mmCard} aria-label="Radyo DZLB Radio Co-anchor (DEVC 136)">
                <div className={home.mmHead}>
                  <span className={home.mmRole}>Role: Co-writer, co-anchor, logistics</span>
                  <h3 className={home.mmTitle}>Radyo DZLB Radio Co-anchor (DEVC 136)</h3>
                </div>

                {/* 1 Image */}
                <div className={`${home.imageFrame}`}>
                  <img
                    src={encodeURI('/Radyo DZLB Radio Co-anchor (DEVC 136).png')}
                    alt="Radyo DZLB broadcast session"
                    className={home.projectImg}
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              {/* Sub-project 8B: Article on UPLB Ride-Sharing Initiative */}
              <ScrollReveal delay={0.1} as="article" className={home.mmCard} aria-label="Article on UPLB Ride-Sharing Initiative">
                <div className={home.mmHead}>
                  <span className={home.mmRole}>Role: Co-writer</span>
                  <h3 className={home.mmTitle}>Article on UPLB Ride-Sharing Initiative</h3>
                </div>

                {/* 1 Image */}
                <div className={`${home.imageFrame}`}>
                  <img
                    src={encodeURI('/Article on UPLB Ride-Sharing Initiative.png')}
                    alt="Article on UPLB Ride-Sharing Initiative editorial publication"
                    className={home.projectImg}
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}
