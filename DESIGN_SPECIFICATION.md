# Portfolio — Design Specification & Brand Guidelines

**Version:** 2.0  
**Last updated:** May 2026  
**Owner:** Abdesselam BENHABRA  
**Role:** Project Manager | CSM®

---

## 1. Design philosophy

Dark editorial aesthetic that communicates **control, clarity, and precision**. The portfolio is designed for CISOs, IT Directors, and procurement teams who value delivery assurance over flash. Every element serves credibility.

- **Trust** — deep navy base (#0D1117) conveys seriousness
- **Precision** — geometric typography, tight spacing, deliberate contrast
- **Data-forward** — stat counters, timeline, structured grids
- **Accessibility-first** — WCAG 2.1 AA, respects reduced motion
- **No decoration for decoration's sake** — every border, tag, and icon has a function

---

## 2. Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#0D1117` | Page background |
| `--navy-light` | `#161B22` | Section alt background, card base |
| `--navy-border` | `#21262D` | Borders, dividers |
| `--cyan` | `#00D4FF` | Primary accent — links, highlights, icons, CTAs |
| `--cyan-dim` | `rgba(0,212,255,0.08)` | Tag backgrounds, hover states, dot grid |
| `--amber` | `#F59E0B` | Secondary accent — certification tags, highlights |
| `--amber-dim` | `rgba(245,158,11,0.1)` | Tag backgrounds |
| `--text` | `#E6EDF3` | Primary body text |
| `--text-muted` | `#8B949E` | Secondary text, dates, companies |
| `--text-dim` | `#484F58` | Placeholder, subtle labels |

Contrast ratios (all WCAG AA):
- #E6EDF3 on #0D1117: 11.5:1 ✓
- #00D4FF on #0D1117: 7.4:1 ✓
- #F59E0B on #0D1117: 8.5:1 ✓
- #8B949E on #0D1117: 5.2:1 ✓

---

## 3. Typography

| Role | Font | Weights | Size (clamped) |
|------|------|---------|----------------|
| Display/headings | Space Grotesk | 600, 700 | `clamp(1.5rem, 3.5vw, 2.25rem)` for h2 |
| Body | Inter | 300, 400, 500, 600 | `1rem` base (16px) |
| Mono accents | JetBrains Mono | 400, 500 | `0.75rem`–`0.8125rem` for dates, tags |

```css
font-family: 'Space Grotesk', system-ui, sans-serif;  /* headings */
font-family: 'Inter', system-ui, -apple-system, sans-serif;  /* body */
font-family: 'JetBrains Mono', monospace;  /* dates, tags, labels */
```

Type scale:
- h1 (hero title): `clamp(2rem, 5.5vw, 3.5rem)` — 700 weight, -0.03em tracking
- h2 (section): `clamp(1.5rem, 3.5vw, 2.25rem)` — 600 weight
- h3 (card title): `clamp(1.125rem, 2vw, 1.375rem)` — 600 weight
- Body: 0.9375rem–1rem — 400 weight, 1.6–1.75 line height
- Mono labels: 0.75rem–0.8125rem — 500 weight

---

## 4. Layout system

**Container:** max-width 1120px, centered, 24px side padding.

**Section rhythm:** Background alternates navy ↔ navy-light. Section padding: `clamp(3rem, 8vw, 5.5rem)`.

**Grids used:**
- About: 2-column grid (photo + bio | strength badges)
- Experience: custom timeline (flexbox, alternating L/R)
- Certifications: 3-column grid → 2-col tablet → 1-col mobile
- Skills: 2x2 grid of grouped tag blocks
- Education: 2-column grid
- Contact: 2-column grid → 1-col at 480px

---

## 5. Component library

### 5.1 Navigation
Fixed top bar, 64px height, glass-morphism background (`rgba(13,17,23,0.85)` + `backdrop-filter: blur(12px)`). Logo left (initials "AB."), links right. Active link highlighted with cyan-dim background.

Mobile (<768px): slide-in panel from right (260px), overlay backdrop.

### 5.2 Hero
Full viewport height. Animated dot-grid background (`radial-gradient` pattern shifting 48px over 30s). Central glow radial gradient. Title typed character-by-character. Two CTA buttons (primary cyan, outline). Three stat counters with animated number reveal.

### 5.3 Tags
Pill-shaped badges for labels. `.tag` — cyan on cyan-dim, JetBrains Mono. `.tag-amber` — amber on amber-dim.

### 5.4 Buttons
`.btn-primary` — cyan background, navy text. `.btn-outline` — transparent, border. Both have translateY(-1px) on hover with shadow.

### 5.5 Strength cards
2x2 grid of bordered cards with icon, h4, description. Border shifts to cyan on hover.

### 5.6 Timeline
Central vertical line (`2px navy-border`). Alternating cards at 44% width. Cyan dot at intersection. Cards shift border on hover.

### 5.7 Certification cards
3-column grid. Icon + title + issuer + year + verify link divider. Slight translateY(-2px) on hover.

### 5.8 Skill groups
2x2 grid. Header row (icon + h3) with tag cloud below. Tags use `.tag` styling with Inter font.

### 5.9 Education cards
2-column grid. Title, meta line, detail line, tag (Degree/Training).

### 5.10 Contact items
2-column grid of clickable rows. Icon + label + value. Background shift on hover.

### 5.11 Footer
Centered stack: name, copyright, "Built with HTML · CSS · JS" in JetBrains Mono.

### 5.12 Scroll-to-top
Fixed bottom-right circle button. Cyan fill, navy icon. Appears after 400px scroll.

---

## 6. Animation system

| Trigger | Effect | Duration | Implementation |
|---------|--------|----------|----------------|
| Page load | Typing animation on hero title | ~2s | setInterval, 45ms + random 30ms per char |
| Section enters viewport | fade-in + translateY(24px) → visible | 0.6s | IntersectionObserver, threshold 0.12 |
| Stats in view | Number counter 0 → target | ~1.5s | requestAnimationFrame via setInterval |
| Nav link hover | Background fill + color shift | 0.3s | CSS transition |
| Card hover | Border color shift | 0.3s | CSS transition |
| Mobile nav open | Slide right panel 0→260px | 0.3s | CSS transition on `right` |
| Scroll-to-top | Opacity fade | 0.3s | CSS transition |
| Hero dot grid | Infinite pan | 30s linear | CSS keyframes |

All animations disabled when `prefers-reduced-motion: reduce` is active.

---

## 7. Responsive breakpoints

| Breakpoint | Layout changes |
|------------|----------------|
| >768px | Full nav, alternating timeline, 3-col certs, 2x2 skills |
| 768px | Hamburger nav, single-col timeline, 2-col certs (centered last), 1-col skills, 1-col education |
| 480px | 1-col strengths, 1-col contact, tighter spacing |

---

## 8. Accessibility

- Semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `footer`
- ARIA: `aria-label` on nav, buttons, links; `aria-expanded` on menu toggle; `aria-hidden` on decorative elements
- Focus: visible `:focus-visible` outline in cyan
- Motion: `prefers-reduced-motion: reduce` disables all animations, shows final state immediately
- Color contrast: all text passes WCAG 2.1 AA (4.5:1 minimum)

---

## 9. Version history

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | May 2026 | Complete redesign: single-file, dark editorial, Project Manager rebrand |
| 1.0 | May 2026 | Original multi-page Bootstrap cybersecurity portfolio |

---

**Maintained by:** Abdesselam BENHABRA
