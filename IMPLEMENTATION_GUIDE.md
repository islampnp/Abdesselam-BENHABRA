# Portfolio — Implementation & Deployment Guide

**Owner:** Abdesselam BENHABRA  
**Version:** 2.0  
**Last updated:** May 2026  
**Stack:** Single HTML file + Google Fonts CDN + Tabler Icons CDN

---

## Table of contents

1. [Quick start](#quick-start)
2. [Project structure](#project-structure)
3. [How it works](#how-it-works)
4. [Local development](#local-development)
5. [GitHub Pages deployment](#github-pages-deployment)
6. [Custom domain](#custom-domain)
7. [Updating content](#updating-content)
8. [Troubleshooting](#troubleshooting)

---

## Quick start

```bash
git clone https://github.com/Abdesselam-BENHABRA/Abdesselam-BENHABRA.git
cd Abdesselam-BENHABRA

# Option A: open directly (file://)
open index.html

# Option B: local server
python -m http.server 8000
# → http://localhost:8000
```

No dependencies to install. No build step.

---

## Project structure

```
Abdesselam-BENHABRA/
├── index.html                       # Everything: HTML + inline CSS + inline JS
├── README.md                        # Overview
├── DESIGN_SPECIFICATION.md          # Design system docs
├── IMPLEMENTATION_GUIDE.md          # This file
└── PROJECT_INFERENCE_NOTES.md       # Project mapping details
```

That's it. Five files, one of which is the entire website.

---

## How it works

The entire portfolio is a single `index.html` file:

- **`<style>`** in the `<head>` contains all CSS (~200 lines minified)
- **`<script>`** before `</body>` contains all JavaScript (~140 lines)
- **External assets** are loaded via CDN only:
  - Google Fonts (Space Grotesk, Inter, JetBrains Mono)
  - Tabler Icons webfont

No local images, no vendor folders, no build artifacts. The file works when opened directly (`file://` protocol) and when served via GitHub Pages.

### CSS architecture

CSS is organized in sections:
1. Reset + custom properties (lines 13–32)
2. Navigation (34–51)
3. Hero (53–73)
4. About (75–95)
5. Experience timeline (97–120)
6. Certifications (122–139)
7. Skills (141–152)
8. Education (154–165)
9. Contact (167–179)
10. Footer (181–186)
11. Scroll-to-top (188–191)
12. Scroll animations + reduced-motion (193–201)

All colors are CSS custom properties in `:root` for easy theming.

### JavaScript architecture

Single IIFE (Immediately Invoked Function Expression) containing:

| Feature | Implementation |
|---------|---------------|
| Typing animation | `setTimeout` loop appending chars to `#typedText` span |
| Scroll reveals | `IntersectionObserver` adding `.visible` class to `.reveal` elements |
| Stats counter | `IntersectionObserver` trigger → `setTimeout` loop incrementing `data-count` |
| Timeline durations | `calcDurations()` parses `data-start`/`data-end` attributes, computes month diffs, displays per-item badges, flattens total years into `.stat-year` |
| Mobile nav | Toggle `.open` on nav, `.show` on overlay, swap icon class |
| Smooth scroll | `scrollTo` with offset for fixed nav (64px), `preventDefault` on hash links |
| Active nav highlight | `scroll` event listening, comparing `offsetTop` against scroll position |
| Scroll-to-top | Toggle `.visible` class, `scrollTo(0,0)` on click |
| Reduced motion | `matchMedia('prefers-reduced-motion: reduce')` check disables animations |

---

## Local development

### Editing the file

Open `index.html` in any text editor. Make changes, save, refresh browser.

### Testing responsive design

Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M). Test at:
- 375px (small mobile)
- 768px (tablet)
- 1280px (desktop)

### Testing accessibility

- Tab through all interactive elements (check focus visibility)
- Run Lighthouse → Accessibility audit (target: 100)
- Check `prefers-reduced-motion: reduce` in DevTools → Rendering → Emulate CSS media feature

---

## GitHub Pages deployment

### One-time setup

1. Push repo to `https://github.com/Abdesselam-BENHABRA/Abdesselam-BENHABRA`
2. Go to repo **Settings → Pages**
3. Source: **Deploy from branch**
4. Branch: **main**, folder: **/ (root)**
5. Save

### Deploying changes

```bash
git add index.html
git commit -m "Update portfolio"
git push origin main
# Live in ~2 minutes at:
# https://abdesselam-benhabra.github.io/Abdesselam-BENHABRA/
```

No build step. No CI config. Just push.

---

## Custom domain

1. Purchase domain (Namecheap, Cloudflare, etc.)
2. Add DNS records:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` (www) → `abdesselam-benhabra.github.io`
3. In repo Settings → Pages → Custom domain: enter your domain
4. Enforce HTTPS

---

## Updating content

All content is in `index.html`. Here's where to find each section:

| Content | Location (search for) |
|---------|----------------------|
| Hero title typing text | `var fullText = 'Project Manager';` (line ~596) |
| Hero subtitle | `End-to-end delivery of complex programs` (line ~242) |
| Stats numbers | `data-count="4"`, `data-count="8000"`, `data-count="3"` |
| About bio | `I'm <strong>Abdesselam BENHABRA</strong>` (line ~274) |
| Strength cards | `class="strength-card"` (x4) |
| Experience entries | `class="timeline-item"` (x4) — each has `data-start="YYYY-MM"` and `data-end="YYYY-MM"` (or `"present"`) |
| Certifications | `class="cert-card"` (x3) |
| Skill groups | `class="skill-group"` (x4) |
| Education cards | `class="edu-card"` (x4) |
| Contact rows | `class="contact-item"` (x6) |
| Colors | `:root` CSS block (line 14) |

### Quick edits

**Change a stat number:**
```html
<span class="stat-number" data-count="4">0</span>
<!-- Change data-count="4" to your new number -->
```

**Add a timeline entry:**
Copy a `.timeline-item` block, update the date, role, company, and bullets. Set `data-start="YYYY-MM"` and `data-end="YYYY-MM"` (or `data-end="present"` for current role). The duration badge and hero stat total update automatically.

**Change accent color:**
```css
--cyan: #00D4FF;   /* Change this hex value */
--amber: #F59E0B;  /* Change this hex value */
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Icons not showing | Verify Tabler Icons CDN loads. Try pinning version: `@2.47.0` instead of `@latest` |
| Fonts not loading | Check Google Fonts URL in `<head>`. Test with `file://` (CDN fonts may need internet) |
| Animations not working | Check JS console for errors. Verify `IntersectionObserver` support (Chrome 58+, Firefox 55+) |
| Mobile nav broken | Confirm `#navToggle`, `#navLinks`, `#navOverlay` IDs exist in HTML |
| Stats not counting | Ensure `.stat-number` elements have `data-count` attributes |
| Scroll highlighting off | Adjust `- 100` offset in `highlightNav()` function if nav height changes |
| Git push rejected | `git pull origin main --rebase` first, then push again |

---

## Performance notes

- Total file: ~36KB (smaller than most hero images)
- CDN resources cached by browser after first load
- No render-blocking JS (script at end of body)
- No external CSS files (all inline in `<style>`)
- No custom fonts flash (preconnect + display=swap in URL)

---

**Version:** 2.0 | **Last updated:** May 2026
