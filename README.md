# Abdesselam BENHABRA — Project Manager | CSM®

**Live:** https://abdesselam-benhabra.github.io/Abdesselam-BENHABRA/  
**Contact:** abdesselambenhabra@gmail.com  
**LinkedIn:** https://linkedin.com/in/abdesselam-benhabra

---

## Profile

Project Manager with 4+ years delivering complex programs across cybersecurity, IT infrastructure, platform launches, and digital transformation for government and enterprise in Algeria and the MENA region. CSM® certified, Lean Six Sigma trained, trilingual (Arabic, English, French).

### By the numbers

- **4** years managing cross-functional programs (auto-calculated from timeline dates)
- **8,000+** individuals impacted through program delivery
- **3** professional certifications (CSM, LSSWBPC, Salesforce)
- **4** sectors: government, pharma, humanitarian, construction
- **3** multinational corporations (Italian, French, UN)

---

## What's included

| Section | Content |
|---------|---------|
| Hero | Typing title, stat counters (4yr XP, 8K+ impacted, 3 certs), two CTAs |
| About | Bio paragraph + 4 strength badges (delivery, stakeholders, multi-sector, operational excellence) |
| Experience | Alternating vertical timeline — 4 roles from WFP to Realistic Security, with auto-calculated duration badges and total years |
| Certifications | 3-card grid (CSM, Lean Six Sigma, Salesforce) with issuer, year, verify link |
| Skills | 4 grouped blocks — Methodologies, Tools, Technical, Soft Skills |
| Education & Training | 2-column grid — ESI Master's degree + PMP, ITIL, Trailhead |
| Contact | 6 icon+link rows (email, phone, location, LinkedIn, Credly, Trailhead) |

---

## Tech stack

- **Single HTML file** — inline CSS + JS, zero build tools
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (labels) — Google Fonts CDN
- **Icons:** Tabler Icons CDN
- **Deployment:** GitHub Pages (push-to-main)
- **Accessibility:** WCAG 2.1 AA, ARIA labels, prefers-reduced-motion support

---

## Repository structure

```
Abdesselam-BENHABRA/
├── index.html                       # Single-page portfolio (all CSS + JS inline)
├── README.md                        # This file
├── DESIGN_SPECIFICATION.md          # Design system & brand guide
├── IMPLEMENTATION_GUIDE.md          # Deployment & maintenance
└── PROJECT_INFERENCE_NOTES.md       # Project mapping details
```

---

## Quick start

```bash
# Clone
git clone https://github.com/Abdesselam-BENHABRA/Abdesselam-BENHABRA.git
cd Abdesselam-BENHABRA

# No build. Open directly:
open index.html

# Or serve locally:
python -m http.server 8000
# → http://localhost:8000
```

---

## Deployment

GitHub Pages auto-deploys from `main`:

```bash
git add index.html
git commit -m "Update portfolio"
git push origin main
# Live at https://abdesselam-benhabra.github.io/Abdesselam-BENHABRA/ in ~2 min
```

---

## Performance targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| First Paint | <1s |
| LCP | <2.5s |
| CLS | <0.1 |

---

## Updating content

Since everything is in a single file, edits are straightforward:

- **Change title/text:** Search and replace in `index.html`
- **Update experience:** Edit the timeline entries in the `<section id="experience">` block
- **Add certification:** Copy a `.cert-card` block, fill in details
- **Change colors:** Edit CSS variables in the `:root` block
- **Update stat numbers:** Change `data-count` attributes on `.stat-number` spans

---

## License & attribution

- **Fonts:** Google Fonts (OFL 1.1)
- **Icons:** Tabler Icons (MIT)
- **Code:** Open for personal use

---

**Last updated:** May 2026  
**Built with HTML &middot; CSS &middot; JS &mdash; no frameworks, no build tools.**
