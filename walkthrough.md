# Walkthrough — Unboxed Work Layout, Canva Video & Embeds, & Clean About Page

All requested updates have been applied:

---

## 1. Work Page Updates (`/work`)

### A. All Canva Embeds & Video (Main Alternating Side-by-Side Section)
- **LB Times Magazine: "Para Po!"**: Embed on Left, Text on Right.
- **Card Game & Video Series on English Proficiency (DEVC 144)**:
  - **Embedded Canva Video player**: `https://www.canva.com/design/DAF43b8cRHM/aoOFWcW-En2sly6_mpb2Og/watch?embed`
  - Text on Left, Video on Right.
- **Knowledge Management Project (DEVC 155 x LLOOP Los Baños)**: Embed on Left, Text on Right.
- **Kwen-Tulay: IP Rights (DEVC 180)**: Text on Left, Embed on Right.
- **Edukatarungan: Module & Video Series (DEVC 145)**: Embed on Left, Text on Right.
- **CDC Survival Kit for Freshies**: Text on Left, Embed on Right.
- **Sukól: 44th KASAMA sa UP National Congress Booklet (Co-Writer, 2023)**:
  - **New Canva Embed**: `https://www.canva.com/design/DAGlFmpJviM/51A_cvmjrWzT9rqmsCb0XA/view?embed`
  - Embed on Left, Text on Right.
- **Tambalang Kambal: Ahunan Dam Controversy**: Text on Left, Embed on Right.

### B. Works Without Canva Embed (Bottom Section)
Rendered in the same side-by-side alternating format with their images completely uncropped (`object-fit: contain`):
- **Breastfeeding Awareness Reels (DEVC 154 x LATCH LB)**:
  - Image: `/Breastfeeding.png`
  - Links: Google Drive Folder ↗
- **Panghulo: Visual Storytelling on Pakil’s Cultural Waterscape (DEVC 103)**:
  - Image: `/Panghulo.png`
  - Links: Google Drive ↗

### C. Zero Boxes / Zero Containers
- Removed all borders, card wrappers, background fills, and shadows from both embed wrappers and project items.

---

## 2. About Me Page Updates (`/about`)

- **Removed all horizontal line dividers**:
  - Removed `<hr className="rule" />`.
  - Removed `border-bottom` from `.pageHd`.
  - Removed `border-top` and `border-bottom` from `.domains`.
  - Removed `border-bottom` from `.domainItem`.
- **Photo**:
  - Displays `/about-me.png` uncropped (`object-fit: contain`).
  - Removed box border and background wrapper around the photo.

---

## 3. Verification
- `npm run build`: Exit code 0, all static pages compiled successfully.
- Dev server running on `http://localhost:3000`.
