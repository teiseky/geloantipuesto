import ScrollReveal from '@/components/ScrollReveal'
import styles from '@/styles/Work.module.css'

export const metadata = {
  title: 'Work',
  description:
    'Development communication projects by Angelo Andrei Antipuesto — multimedia production, knowledge management, communication for development, and notable writings.',
}

// 8 Projects WITH Canva Embed (Rendered in alternating side-by-side format)
const CANVA_PROJECTS = [
  {
    title: 'LB Times Magazine: "Para Po!" (DEVC 136 – Multi-media Materials Production and Management)',
    category: 'Multimedia & Media-Based Learning Projects',
    role: 'Feature Writer',
    desc: 'Contributed as a feature writer for Los Baños Times Magazine\'s special transport issue, “Para Po! Mga Kuwentong Pasada sa Timog Katagalugan.” The article humanizes everyday stories of local drivers and commuters, showcasing the intersection of mobility, livelihood, and identity in Southern Tagalog. Published in collaboration with DEVC 136, the magazine aimed to amplify community narratives through development journalism.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFl9S8MI/HWwCoPpVz2FvbA0EtfQPtg/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFl9S8MI/HWwCoPpVz2FvbA0EtfQPtg/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'Card Game & Video Series on English Proficiency (DEVC 144)',
    category: 'Multimedia & Media-Based Learning Projects',
    role: 'Developer & Producer',
    desc: 'Engaging tools promoting English proficiency among children through interactive card gameplay and educational videos tailored for elementary learners.',
    canvaEmbed: 'https://www.canva.com/design/DAF43b8cRHM/aoOFWcW-En2sly6_mpb2Og/watch?embed',
    links: [
      {
        label: 'Watch on Canva ↗',
        href: 'https://www.canva.com/design/DAF43b8cRHM/aoOFWcW-En2sly6_mpb2Og/watch',
        type: 'canva',
      },
      {
        label: 'Google Drive Folder ↗',
        href: 'https://drive.google.com/drive/folders/1iYdMqDntnj_-YIv8NRQGpEqYuiMRaJRU?usp=sharing',
        type: 'drive',
      },
    ],
  },
  {
    title: 'Knowledge Management Project (DEVC 155 x LLOOP Los Baños)',
    category: 'Knowledge Management & Development Work',
    role: 'Co-developer',
    desc: 'Continuing to work with LLOOP Los Baños to co-develop knowledge management tools that capture and organize local practices. The project aimed to enhance institutional memory, support evidence-based decision-making, and ensure sustainability by empowering local actors to share, document, and apply community knowledge for ongoing development initiatives.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFg_PCaY/gfkgrTvfc8qnQdNIhB0hzQ/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFg_PCaY/gfkgrTvfc8qnQdNIhB0hzQ/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'Kwen-Tulay: A Communication for Development Plan on Land-Grabbing and IP Rights (DEVC 180)',
    category: 'Communication for Development',
    role: 'Co-developer',
    desc: 'Co-developed a strategic communication campaign addressing land-grabbing against Indigenous Peoples. Contributed to stakeholder analysis, message design, and campaign planning using participatory journalism, folk media, and educational seminars. The plan empowered IP communities and strengthened collaboration with groups like PAKISAMA through evidence-based, people-centered communication grounded in the P-Process framework.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFnKtk5o/XGhZgDLAJRV6A2S_ISzwSg/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFnKtk5o/XGhZgDLAJRV6A2S_ISzwSg/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'Edukatarungan: Module and Video Series on Katarungang Pambarangay (DEVC 145)',
    category: 'Distance Learning Systems in Development Communication Practice',
    role: 'Co-producer',
    desc: 'Co-produced a comprehensive printed module and instructional video series that educate barangay officials on the Katarungang Pambarangay justice system. Developed in partnership with DILG Los Baños, the materials simplify legal concepts into accessible learning content, hosted on a dedicated website for wider reach and community learning impact.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFiix-SA/KHUdlJFKeMyMgIou-yguNA/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFiix-SA/KHUdlJFKeMyMgIou-yguNA/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'CDC Survival Kit for Freshies (Vice Chairperson, CDC Freshman Council)',
    category: 'Notable Projects and Writings',
    role: 'Vice Chairperson, CDC Freshman Council',
    desc: 'Co-led the development of the BS Development Communication Survival Kit, a comprehensive guide designed to orient and empower incoming freshmen. The kit features practical advice, encouraging messages, and insights on navigating academic life, student activism, and values formation, fostering resilience and community among new iskolars ng bayan.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFo4DMMI/OlZ0jsIf5n1OmtGhn-p8gQ/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFo4DMMI/OlZ0jsIf5n1OmtGhn-p8gQ/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'Sukól: 44th KASAMA sa UP National Congress Booklet (Co-Writer, 2023)',
    category: 'Notable Projects and Writings',
    role: 'Deputy Secretary-General for Education and Research',
    desc: 'As Deputy Secretary-General for Education and Research, I co-wrote the official congress booklet for Sukól, the 44th KASAMA sa UP National Congress. The publication featured critical resolutions, historical context, and thematic discussions that shaped student governance dialogues across the UP system, highlighting collective resistance, unity, and progressive student leadership.',
    canvaEmbed: 'https://www.canva.com/design/DAGlFmpJviM/51A_cvmjrWzT9rqmsCb0XA/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAGlFmpJviM/51A_cvmjrWzT9rqmsCb0XA/view',
        type: 'canva',
      },
    ],
  },
  {
    title: 'Tambalang Kambal: Reporting on the Ahunan Dam Controversy',
    category: 'Notable Projects and Writings',
    role: 'Co-writer & Investigative Journalist',
    desc: 'Co-written as part of a journalism project, Tambalang Kambal investigates the socio-environmental impact of the 1400MW Ahunan Hydropower Project in Pakil, Laguna. The article highlights local resistance led by MANAPAK, ecological threats to sacred springs and fault lines, and the tension between promised development and cultural preservation. Published as part of a mock news website for DEVC coursework.',
    canvaEmbed: 'https://www.canva.com/design/DAFV2n6qGqM/57Kh5i8OPrZz1G0LhSbW5Q/view?embed',
    links: [
      {
        label: 'Open in Canva ↗',
        href: 'https://www.canva.com/design/DAFV2n6qGqM/57Kh5i8OPrZz1G0LhSbW5Q/view',
        type: 'canva',
      },
    ],
  },
]

// 2 Projects WITHOUT Canva Embed (Positioned at the bottom, rendered side-by-side with uncropped images)
const IMAGE_PROJECTS = [
  {
    title: 'Breastfeeding Awareness Reels (DEVC 154 x LATCH LB)',
    category: 'Multimedia & Media-Based Learning Projects',
    role: 'Content Creator & Strategist',
    desc: 'Short-form educational reels designed to boost breastfeeding awareness, combining science-based messaging with relatable, mother-centered storytelling on digital media channels.',
    image: '/Breastfeeding.png',
    links: [
      {
        label: 'Google Drive Folder ↗',
        href: 'https://drive.google.com/drive/folders/15kUG1UVyIyw3H0rgRA5havyD1ERz1hld?usp=sharing',
        type: 'drive',
      },
    ],
  },
  {
    title: 'Panghulo: Visual Storytelling on Pakil’s Cultural Waterscape (DEVC 103 - Visual and Audiovisual Media Production)',
    category: 'Notable Projects and Writings',
    role: 'Co-producer',
    desc: 'Co-produced Panghulo, a visual media project exploring the cultural, historical, and economic significance of Pakil, Laguna’s public bath and spring. The output combined photography, layout design, and narrative research to highlight how the community’s relationship with water is shaped by tradition, livelihood, and resistance—demonstrating visual media as a powerful tool for local storytelling.',
    image: '/Panghulo.png',
    links: [
      {
        label: 'View on Google Drive ↗',
        href: 'https://drive.google.com/file/d/18dXPSdHRgJhYGrWbsyWj8DYvEV5pfUxG/view',
        type: 'drive',
      },
    ],
  },
]

export default function WorkPage() {
  return (
    <main className="page-body" id="main-content">
      {/* Page Header */}
      <header className={styles.pageHd}>
        <div className="wrap">
          <h1 className={styles.pageTitle}>Work</h1>
          <p className={styles.pageDesc}>
            An archive of development communication work — multimedia materials production, participatory campaigns, knowledge management systems, and investigative community publications.
          </p>
        </div>
      </header>

      <div className="wrap">
        {/* Main Alternating Works (with Canva Embeds) */}
        <section className={styles.sideList} aria-label="Interactive Canva Works">
          {CANVA_PROJECTS.map((proj, idx) => {
            const isReversed = idx % 2 === 1 // Alternates layout each work
            return (
              <ScrollReveal
                key={proj.title}
                as="article"
                className={`${styles.sideBySide} ${isReversed ? styles.sideBySideReverse : ''}`}
              >
                {/* Canva Embed Column */}
                <div className={styles.embedCol}>
                  <div className={styles.embedWrapper}>
                    <iframe
                      src={proj.canvaEmbed}
                      title={proj.title}
                      loading="lazy"
                      allowFullScreen
                      allow="fullscreen"
                      className={styles.embedIframe}
                    />
                  </div>
                </div>

                {/* Text Description Column */}
                <div className={styles.textCol}>
                  <span className={styles.categoryLabel}>{proj.category}</span>
                  <span className={styles.roleTag}>{proj.role}</span>
                  <h2 className={styles.itemTitle}>{proj.title}</h2>
                  <p className={styles.itemDesc}>{proj.desc}</p>

                  {proj.links.length > 0 && (
                    <div className={styles.actionRow}>
                      {proj.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.actionBtn} ${
                            link.type === 'canva'
                              ? styles.btnCanva
                              : link.type === 'drive'
                              ? styles.btnDrive
                              : ''
                          }`}
                        >
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </section>

        {/* Bottom Section: Works Without Canva Embed (Image Media Works) */}
        <section className={styles.bottomSection} aria-label="Visual and Media-Based Productions">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Visual & Production Media</span>
            <h2 className={styles.sectionTitle}>Additional Projects & Media</h2>
          </div>

          <div className={styles.sideList}>
            {IMAGE_PROJECTS.map((proj, idx) => {
              const isReversed = idx % 2 === 1 // Alternates layout
              return (
                <ScrollReveal
                  key={proj.title}
                  as="article"
                  className={`${styles.sideBySide} ${isReversed ? styles.sideBySideReverse : ''}`}
                >
                  {/* Media Image Column */}
                  <div className={styles.embedCol}>
                    <div className={styles.mediaWrapper}>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className={styles.workImg}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Description Column */}
                  <div className={styles.textCol}>
                    <span className={styles.categoryLabel}>{proj.category}</span>
                    <span className={styles.roleTag}>{proj.role}</span>
                    <h3 className={styles.itemTitle}>{proj.title}</h3>
                    <p className={styles.itemDesc}>{proj.desc}</p>

                    {proj.links.length > 0 && (
                      <div className={styles.actionRow}>
                        {proj.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.actionBtn} ${
                              link.type === 'canva'
                                ? styles.btnCanva
                                : link.type === 'drive'
                                ? styles.btnDrive
                                : ''
                            }`}
                          >
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
