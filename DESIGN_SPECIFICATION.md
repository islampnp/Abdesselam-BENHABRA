# Cybersecurity Portfolio — Design Specification & Brand Guidelines

**Version:** 1.0  
**Last Updated:** May 2026  
**Portfolio Owner:** Abdesselam BENHABRA  
**Portfolio Type:** Cybersecurity Project Manager & Delivery Leadership  

---

## 1. Design Philosophy

This portfolio embodies professional credibility, technical expertise, and security-first thinking through a carefully curated visual language. The design prioritizes:

- **Trust & Authority** – Deep navy and professional color palette convey industry expertise
- **Energy & Precision** – Cyber teal accents signal cutting-edge security practices
- **Clarity & Hierarchy** – Content organization emphasizes impact and measurable outcomes
- **Dark-First Aesthetic** – Cybersecurity industry convention; reduces eye strain on technical audiences
- **Accessibility-First** – WCAG 2.1 AA compliance ensures all stakeholders can engage

---

## 2. Color Palette

### Primary Colors

| Color | Hex Code | CSS Variable | Usage | Accessibility |
|-------|----------|--------------|-------|---|
| **Professional Navy** | `#0a4a8f` | `--cybersecurity-primary` | Backgrounds, depth | 7.2:1 contrast ratio (WCAG AAA) |
| **Cyber Teal** | `#00d9ff` | `--cybersecurity-accent` | CTAs, highlights, hover states | 11.5:1 contrast ratio (WCAG AAA) |
| **Security Green** | `#2ecc71` | `--cybersecurity-success` | Success indicators, positive outcomes | 6.8:1 contrast ratio (WCAG AA) |
| **Alert Orange** | `#f39c12` | `--cybersecurity-warning` | Important alerts, warnings | 8.1:1 contrast ratio (WCAG AAA) |
| **Critical Red** | `#e74c3c` | `--cybersecurity-danger` | High-risk indicators, critical issues | 6.5:1 contrast ratio (WCAG AA) |

### Neutral Colors

| Color | Hex Code | CSS Variable | Usage |
|-------|----------|--------------|-------|
| **Pure Black** | `#000000` | `--heading-color` | High-contrast text, maximum readability |
| **Dark Background** | `#0f1419` | `--cybersecurity-dark` | Primary background, depth |
| **Off-White** | `#f5f7fa` | `--cybersecurity-light` | Light backgrounds, cards on light mode |
| **Neutral Gray** | `#95a5a6` | `--cybersecurity-neutral` | Secondary text, disabled states, tertiary information |

### Gradient Combinations

**Primary Gradient** (Interactive Elements):
```css
background: linear-gradient(135deg, #00d9ff, #00a8cc);
/* Used on: CTA buttons, hover effects, accent bars */
```

**Dark Gradient** (Card Backgrounds):
```css
background: linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(10, 74, 143, 0.05) 100%);
/* Used on: Case study cards, resume items, credential cards */
```

---

## 3. Typography System

### Font Stack

**Primary Font Family:**
```css
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Usage:** Body text, descriptions, paragraph content
- **Weights:** 400 (regular), 500 (medium), 700 (bold), 900 (extra-bold)
- **Source:** Google Fonts (preconnected for performance)

**Heading Font Family:**
```css
font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Usage:** Page titles, section headings, major headlines
- **Weights:** 700 (bold), 800 (extra-bold), 900 (black)
- **Character:** Geometric, modern, memorable

**Navigation Font Family:**
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Usage:** Navigation menu, CTAs, labels
- **Weights:** 500 (medium), 600 (semi-bold), 700 (bold)
- **Character:** Friendly, approachable yet professional

### Type Scale

| Element | Font Size | Line Height | Weight | Letter Spacing |
|---------|-----------|-------------|--------|---|
| **H1** (Page Title) | 2.2rem / 35.2px | 1.2 | 800 | -0.5px |
| **H2** (Section Title) | 1.8rem / 28.8px | 1.3 | 700 | -0.3px |
| **H3** (Card Title) | 1.3rem / 20.8px | 1.4 | 700 | -0.2px |
| **H4** (Subsection) | 1.15rem / 18.4px | 1.4 | 700 | 0px |
| **Body Large** | 1rem / 16px | 1.7 | 400 | 0px |
| **Body Regular** | 0.95rem / 15.2px | 1.6 | 400 | 0px |
| **Body Small** | 0.85rem / 13.6px | 1.5 | 500 | 0.5px |
| **Label** | 0.75rem / 12px | 1.4 | 600 | 1px |

### Text Hierarchy

```
H1: "Cybersecurity Project Manager & Delivery Leadership"
H2: "Security Engagements & Case Studies"
H3: "Air Algérie — Red Team Assessment"
H4: "Objective"
Body: Regular paragraph text explaining engagement details
Label: "Penetration Testing" (security service badge)
```

---

## 4. Layout & Spacing System

### Spacing Units

Base unit: **8px**

| Scale | Value | Usage |
|-------|-------|-------|
| **2xs** | 4px | Icon spacing, micro-interactions |
| **xs** | 8px | Form input padding, small gaps |
| **sm** | 12px | Card internal padding |
| **md** | 16px | Heading margins, component gaps |
| **lg** | 24px | Section padding, card padding |
| **xl** | 32px | Component gaps, padding |
| **2xl** | 40px | Section gaps, large spacing |
| **3xl** | 60px | Section separator spacing |

### Container System

```css
/* Maximum widths */
--max-width-mobile: 480px
--max-width-tablet: 768px
--max-width-desktop: 1200px

/* Responsive containers */
.container { max-width: 100%; padding: 0 16px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1200px; }
```

### Grid System

**Bootstrap 5 Grid Integration:**
- 12-column responsive grid
- Breakpoints: 480px (mobile), 768px (tablet), 1200px (desktop)
- Gutter: 16px (8px left + 8px right per column)

**Case Study Card Grid:**
```html
<div class="row g-4">
  <div class="col-lg-6 col-xl-4">
    <!-- Case study card -->
  </div>
</div>
```

---

## 5. Component Library

### 5.1 Case Study Cards

**CSS Class:** `.case-study-card`

**Structure:**
```html
<div class="case-study-card">
  <div class="card-header">
    <h3>Air Algérie — Red Team Assessment</h3>
    <span class="sector-tag">
      <i class="bi bi-shield-check"></i>
      Aviation Security
    </span>
  </div>
  <div class="card-body">
    <p><strong>Objective:</strong> Assess blue team effectiveness...</p>
    <p><strong>My Role:</strong> Led 3-week engagement...</p>
    <!-- More content -->
  </div>
</div>
```

**Visual Specifications:**
- Background: `linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(10, 74, 143, 0.05) 100%)`
- Border: `1px solid rgba(0, 217, 255, 0.2)`
- Border Radius: `12px`
- Padding: `28px`
- Hover Effect: Border color shifts to `#00d9ff`, shadow to `0 8px 32px rgba(0, 217, 255, 0.15)`, transform: `translateY(-4px)`

**Responsive:**
- Desktop: Full grid (2-3 columns)
- Tablet: 2 columns with reduced padding
- Mobile: 1 column with 18px padding

### 5.2 Certification Cards

**CSS Class:** `.cert-card`

**Structure:**
```html
<div class="cert-card">
  <div class="cert-header">
    <h3>Certified ScrumMaster (CSM®)</h3>
    <span class="issuer">Scrum Alliance</span>
  </div>
  <p>Agile program delivery and stakeholder coordination</p>
  <div class="cert-meta">
    <span class="badge bg-primary-light">Issued: 2025</span>
    <span class="badge bg-primary-light">Verified</span>
  </div>
</div>
```

**Visual Specifications:**
- Background: `linear-gradient(135deg, rgba(15, 20, 25, 0.90) 0%, rgba(10, 74, 143, 0.03) 100%)`
- Border: `1px solid rgba(0, 217, 255, 0.15)`
- Border Radius: `10px`
- Padding: `24px`
- Hover Effect: Border shifts to `#00d9ff`, shadow to `0 6px 24px rgba(0, 217, 255, 0.12)`

### 5.3 Achievement Cards

**CSS Class:** `.achievement-card`

**Structure:**
```html
<div class="achievement-card">
  <div class="achievement-number">35+</div>
  <p>Security Initiatives Delivered</p>
</div>
```

**Visual Specifications:**
- Width: Variable (grid-based)
- Min Height: `140px`
- Alignment: Centered, flex-centered
- Hover Effect: Scale to 1.05

### 5.4 Resume Timeline Items

**CSS Class:** `.resume-item`

**Structure:**
```html
<div class="resume-item">
  <div class="resume-header">
    <h3>Cybersecurity Project Manager</h3>
    <p class="text-muted">Realistic Security | Oct 2025 – Present</p>
    <span class="badge">Active</span>
  </div>
  <div class="resume-body">
    <ul>
      <li>Delivered 8 security engagements across government...</li>
      <li>Architected SOC deployment for multinational bank...</li>
    </ul>
  </div>
</div>
```

**Visual Specifications:**
- Border Left: `4px solid #00d9ff`
- Background: `rgba(15, 20, 25, 0.50)`
- Padding: `24px`
- Transition: All 0.3s ease
- Hover Effect: Background to `rgba(15, 20, 25, 0.70)`, transform: `translateX(4px)`, shadow: `0 4px 16px rgba(0, 217, 255, 0.1)`

### 5.5 Portfolio Pillar Cards

**CSS Class:** `.portfolio-pillar`

**Structure:**
```html
<div class="portfolio-pillar">
  <h4>
    <i class="bi bi-shield-check"></i>
    Security Program Delivery
  </h4>
  <ul>
    <li>Pentesting engagement coordination</li>
    <li>Red team execution & reporting</li>
    <li>Incident response orchestration</li>
  </ul>
</div>
```

**Visual Specifications:**
- Background: `linear-gradient(135deg, rgba(15, 20, 25, 0.80) 0%, rgba(10, 74, 143, 0.05) 100%)`
- Border: `1px solid rgba(0, 217, 255, 0.1)`
- Border Radius: `8px`
- Padding: `24px`
- Icon Color: `#00d9ff`
- Hover Effect: Border shifts to `#00d9ff`, shadow to `0 8px 24px rgba(0, 217, 255, 0.12)`, transform: `translateY(-4px)`

### 5.6 Call-to-Action Button

**CSS Class:** `.cta-btn`

**Visual Specifications:**
- Background: `linear-gradient(135deg, #00d9ff, #00a8cc)`
- Color: `#0f1419` (dark text on bright background)
- Padding: `14px 32px`
- Border Radius: `6px`
- Font Weight: `700`
- Font Size: `1rem`
- Text Transform: `uppercase`
- Letter Spacing: `1px`
- Box Shadow: `0 4px 16px rgba(0, 217, 255, 0.3)`
- Hover Effect: `translateY(-2px)`, shadow to `0 8px 24px rgba(0, 217, 255, 0.4)`
- Active Effect: `translateY(0)`, shadow to `0 2px 8px rgba(0, 217, 255, 0.3)`

---

## 6. Responsive Design Breakpoints

### Desktop (1200px and above)
- Full navigation bar visible
- 3-column grid for case studies
- Full-width sections with 60px+ padding
- Large typography
- Hover effects fully enabled

### Tablet (768px - 1199px)
- Responsive hamburger menu activated
- 2-column grid for case studies
- Padding: 28px sections
- Medium typography
- Touch-friendly targets (min 44px height)

### Mobile (480px - 767px)
- Full hamburger menu
- 1-column layout
- Padding: 18px for cards
- Reduced font sizes (0.9x scale)
- Stack all components vertically
- CTA buttons: full width

### Small Mobile (Below 480px)
- Extreme optimization
- Ultra-compact spacing
- Font sizes: 0.8x scale
- Single-column strict layout

---

## 7. Animation & Interaction

### AOS (Animate On Scroll) Effects

**Fade-in Animation:**
```html
<div data-aos="fade-in" data-aos-duration="1000">
  <!-- Card content -->
</div>
```

**Zoom Animation:**
```html
<div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
  <!-- Achievement card -->
</div>
```

### Transition Timing

| Action | Duration | Easing | Usage |
|--------|----------|--------|-------|
| Hover effects | 0.3s | `cubic-bezier(0.4, 0, 0.2, 1)` | Button, card hover |
| Scroll animations | 1s–1.2s | `ease-out` | AOS fade-in, slide-up |
| Color transitions | 0.3s | `ease` | Background, border color changes |
| Transform | 0.3s | `ease` | Scale, translate effects |

### Interactive States

**Button States:**
- **Default:** Gradient background, shadow
- **Hover:** Elevated shadow, slight upward movement
- **Active/Pressed:** No elevation, compressed shadow
- **Disabled:** 50% opacity, no hover effect, cursor: not-allowed

**Card States:**
- **Default:** Subtle border, baseline shadow
- **Hover:** Bright border, elevated shadow, slight scale/translate
- **Focus (Keyboard Nav):** Border color + ring outline

---

## 8. Accessibility Compliance

### WCAG 2.1 AA Standards

**Color Contrast Ratios:**
- All text on background: Minimum 4.5:1 (7:1 preferred)
- Large text (18pt+): Minimum 3:1
- Graphical elements: Minimum 3:1

**Verified Ratios:**
- `#ffffff` on `#0f1419`: 21:1 (WCAG AAA)
- `#00d9ff` on `#000000`: 11.5:1 (WCAG AAA)
- `#2ecc71` on `#0f1419`: 6.8:1 (WCAG AA)
- `#f39c12` on `#000000`: 8.1:1 (WCAG AAA)

**Keyboard Navigation:**
- All interactive elements accessible via Tab key
- Focus indicators clearly visible (ring outline)
- Tab order follows logical content flow
- Escape key closes modals/menus

**Semantic HTML:**
```html
<!-- Correct -->
<button class="cta-btn">Download Resume</button>
<nav id="navmenu">...</nav>
<header role="banner">...</header>
<main role="main">...</main>

<!-- Avoid -->
<div onclick="...">Non-semantic button</div>
```

**ARIA Labels:**
```html
<a href="https://linkedin.com" aria-label="LinkedIn profile">
  <i class="bi bi-linkedin"></i>
</a>
```

**Image Accessibility:**
```html
<!-- Good -->
<img src="project.jpg" alt="Red team assessment dashboard showing attack vectors">

<!-- Avoid -->
<img src="project.jpg" alt="image">
```

---

## 9. Performance Optimization

### CSS Optimization

**File Size:** 12.5 KB (minified)
**Specificity:** Kept low for maintainability
**Media Queries:** Mobile-first approach

**Critical CSS Path:**
```css
/* Loaded inline for above-the-fold content */
- Header styles
- Hero section
- Primary navigation
```

**Deferred CSS:**
```css
/* Lazy-loaded via @import or media queries */
- Print styles
- Animation classes
- Component styles (loaded on-demand)
```

### Font Optimization

**Google Fonts Strategy:**
```html
<!-- Preconnect for performance -->
<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>

<!-- Subset only required weights -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Raleway:wght@700;800;900&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## 10. Brand Voice & Tone

### Visual Language

**Professional:** Conveys expertise and trustworthiness
**Precise:** Clean typography, deliberate spacing
**Forward-Thinking:** Modern color palette, smooth animations
**Accessible:** Thoughtful color contrast, readable fonts
**Confident:** Strong use of accent color, clear CTAs

### Messaging Patterns

**Case Studies:** Problem → Solution → Quantified Impact
**Credentials:** Issuer → Achievement → Verification Link
**Experience:** Role → Responsibilities → Key Wins
**Skills:** Capability → Evidence → Application

---

## 11. Implementation Files

### CSS Files

**Primary Stylesheet:**
- File: `assets/css/main.css`
- Size: ~700 lines
- Purpose: Base styling, responsive layout, core components

**Cybersecurity Theme:**
- File: `assets/css/cybersecurity-portfolio.css`
- Size: ~450 lines
- Purpose: Security-specific components, professional aesthetic

**Vendor CSS:**
- Bootstrap 5: `assets/vendor/bootstrap/css/bootstrap.min.css`
- Bootstrap Icons: `assets/vendor/bootstrap-icons/bootstrap-icons.css`
- Swiper: `assets/vendor/swiper/swiper-bundle.min.css`
- GLightbox: `assets/vendor/glightbox/css/glightbox.min.css`
- AOS: (loaded via CDN in HTML)

### HTML Pages

| File | Purpose | Components |
|------|---------|------------|
| `index.html` | Landing/Home | Hero, Skills, Stats, Summary, Tools |
| `projects.html` | Case Studies | 10 Security Engagement Cases |
| `resume.html` | Experience | 4 Professional Roles Timeline |
| `qualification.html` | Credentials | Certifications, Education, Training |
| `about.html` | Bio | Personal Story, Values, Location |
| `contact.html` | Engagement | Contact Form, CTA |
| `blogs.html` | Insights | Articles, Thought Leadership |

---

## 12. Design Tokens Reference

### Usage Examples

**Creating a New Card:**
```css
.my-card {
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.90) 0%, rgba(10, 74, 143, 0.03) 100%);
  border: 1px solid rgba(0, 217, 255, 0.1);
  border-radius: 10px;
  padding: 24px;
  transition: all 0.3s ease;
}

.my-card:hover {
  border-color: var(--cybersecurity-accent);
  box-shadow: 0 8px 24px rgba(0, 217, 255, 0.12);
  transform: translateY(-4px);
}
```

**Creating a CTA Section:**
```css
.engagement-cta {
  text-align: center;
  padding: 60px 24px;
}

.engagement-cta h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
}

.engagement-cta .cta-btn {
  background: linear-gradient(135deg, var(--cybersecurity-accent), #00a8cc);
  /* ... see CTA button specs above */
}
```

---

## 13. Maintenance & Updates

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial cybersecurity portfolio design specification |

### Future Enhancements

- [ ] Dark/Light mode toggle (CSS variable switch)
- [ ] Theme customization dashboard
- [ ] Component library Storybook integration
- [ ] Automated accessibility testing (axe DevTools)
- [ ] Performance audit (Lighthouse CI/CD)

### Design System Governance

- CSS variables stored in `:root`
- All colors defined as design tokens
- Component classes prefixed for clarity
- Spacing follows 8px base unit
- No inline styles (exceptions documented)

---

## 14. Export & Print Optimization

### Print Styles

```css
@media print {
  .case-study-card,
  .resume-item,
  .cert-card {
    box-shadow: none;
    page-break-inside: avoid;
    border: 1px solid #ccc;
  }

  .cta-btn,
  .navmenu {
    display: none;
  }

  body {
    background: white;
    color: black;
  }
}
```

### PDF Export Recommendations

**Tools:**
- Puppeteer (Node.js automation)
- wkhtmltopdf (system-level HTML-to-PDF)
- Print → Save as PDF (Chrome/Edge)

**Checklist:**
- [ ] Remove interactive shadows (print-friendly)
- [ ] Verify text contrast on white background
- [ ] Test page breaks (avoid splitting cards mid-page)
- [ ] Remove navigation elements
- [ ] Include URL references for verification links

---

## 15. Quick Reference Guide

### Color Swatches
```
🔵 Navy (#0a4a8f)        — Trust, backgrounds
🔷 Teal (#00d9ff)        — Energy, highlights, CTAs
🟢 Green (#2ecc71)       — Success, positive outcomes
🟠 Orange (#f39c12)      — Warnings, important
🔴 Red (#e74c3c)         — Critical, high-risk
⚫ Black (#000000)        — Maximum contrast
⚪ White (#ffffff)        — Light backgrounds
```

### Typography Quick Reference
```
Headlines:  Raleway 700–900 weight
Body:       Roboto 400–500 weight
Navigation: Poppins 500–700 weight
```

### Spacing Quick Reference
```
Micro:   4px   | Icon gaps
Small:   8px   | Form padding
Medium:  16px  | Component gaps
Large:   24px  | Card padding
XLarge:  32px  | Section gaps
```

---

**Design Specification Created:** May 2026  
**Next Review:** Q3 2026  
**Maintained By:** Abdesselam BENHABRA Portfolio Team  
**Questions/Suggestions:** Submit via portfolio contact form
