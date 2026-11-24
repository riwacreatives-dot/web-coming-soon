# 🛠️ RIWA × Studio Namma — Step-by-Step Implementation Roadmap

> **Document:** `build_steps.md`  
> **Status:** ✅ ALL PHASES IMPLEMENTED & VERIFIED (Production Ready)  
> **Objective:** Comprehensive, step-by-step master plan breaking down the end-to-end development of the RIWA agency website from zero to production deployment.

---

## Roadmap Overview

```
[✓] Phase 1: Project Scaffolding & Core Architecture
[✓] Phase 2: Asset Pipeline & Data Foundations
[✓] Phase 3: Persistent Global Elements (HUD, Clocks, Dock & Drawer)
[✓] Phase 4: Kinetic Hero Viewport & Ambient Showreel Canvas
[✓] Phase 5: Interactive Manifesto & Hover Telemetry Badges
[✓] Phase 6: Selected Works & Cursor-Scrub Case Studies
[✓] Phase 7: Disciplines & Dual-Column Line-Appear Services
[✓] Phase 8: Studio Leadership (Founder Profiles Grid)
[✓] Phase 9: Interactive Intake Form & Category Selectors
[✓] Phase 10: Editorial Footer, Bureaus & Sub-Brand Modals
[✓] Phase 11: Micro-Interactions, Custom Cursor & Polish
[✓] Phase 12: Production Verification & Performance Tuning
```

---

## Phase 1: Project Scaffolding & Core Architecture Setup

### Step 1.1: Initialize Framework & Tooling
* Initialize a modern **Vite + React 19 + TypeScript** workspace:
  ```bash
  npm create vite@latest riwa-web -- --template react-ts
  ```
* Install primary production dependencies:
  * `tailwindcss` + `@tailwindcss/vite` (or PostCSS) for utility-first styling.
  * `framer-motion` for spring physics, layout animations, and drawer transitions.
  * `@studio-freight/lenis` for 60fps inertial smooth scrolling.
  * `lucide-react` for clean iconography.
  * `clsx` and `tailwind-merge` for conditional class management.

### Step 1.2: Design Tokens & Dynamic Theme Engine
* Configure `globals.css` with CSS custom properties supporting the **Studio Namma Dark/Light Theme Inversion**:
  ```css
  :root[data-theme="dark"] {
    --bg-canvas: #050608;
    --bg-surface: #0D0F14;
    --text-primary: #FFFFFF;
    --text-secondary: #8E95A5;
    --text-mono: #B0B6C4;
    --border-line: rgba(255, 255, 255, 0.10);
    --accent-red: #FF2A55;
    --accent-amber: #F5B31B;
  }
  :root[data-theme="light"] {
    --bg-canvas: #F9F9FB;
    --bg-surface: #FFFFFF;
    --text-primary: #0A0B0E;
    --text-secondary: #5A6172;
    --text-mono: #333742;
    --border-line: rgba(0, 0, 0, 0.08);
    --accent-red: #E11D48;
    --accent-amber: #D97706;
  }
  ```
* Import Google Fonts into `index.html`:
  * `Syne` (Weights: 700, 800, 900)
  * `Plus Jakarta Sans` (Weights: 400, 600, 700, 800)
  * `JetBrains Mono` (Weights: 400, 500, 700)
* Set up `ThemeContext.tsx` with:
  * Local storage synchronization (`localStorage.getItem('riwa_theme')`).
  * System preference detection (`prefers-color-scheme: dark`).
  * Instantaneous, smooth CSS class toggle on the document root element.

### Step 1.3: Inertial Smooth Scroll Integration
* Wrap the main application container in a **Lenis Smooth Scroll** provider inside `App.tsx`.
* Configure Lenis parameters:
  * `lerp: 0.08` (matches Studio Namma's fluid, weighted inertial feel).
  * `smoothWheel: true`.
  * Synchronize with Framer Motion scroll hooks.

---

## Phase 2: Asset Pipeline & Data Foundations

### Step 2.1: Asset Organization
* Place high-resolution Solanas artwork and vector brand marks in `/public`:
  * `/public/brand/riwa-crow-logo.svg` (minimalist geometric crow vector).
  * `/public/work/solanas-chilli-chicken.jpg` (*Hotter Than Baddies* Chilli Garlic Chicken).
  * `/public/work/solanas-poster.jpg` (*Dim Sum Silk Dynamics* fluid 3D render).
  * `/public/work/solanas-sushi.png` (*Sushi Brutalist* key art platter).
  * `/public/work/solanas-green-dimsum.png` (*Jade Dim Sum* Japanese Seigaiha wave poster).
  * `/public/work/solanas-steamer-dimsum.jpg` (*It's Hot. It's Tempting* bamboo steamer poster).
  * `/public/brand/dalal-mascot.png` (Brand Dalal regional mascot).

### Step 2.2: Data Schemas & Content Files
* Create structured TypeScript content files in `src/data/`:
  1. `projectsData.ts`: 4 flagship case studies with verified metrics (`+420% Weekend Orders`, `6.2% CTR`, `₹14.8 Cr Lift`).
  2. `servicesData.ts`: 6 core disciplines with dual-column titles, categories, deliverables, and flagship KPIs.
  3. `leadershipData.ts`: Bios, credentials, and specialties for Abhinav Singh & Sarah Sterling.
  4. `clocksData.ts`: Timezone identifiers and coordinates for New Delhi, Mumbai, London, and New York.

### Step 2.3: Custom Utility Hooks
* Build custom hooks in `src/hooks/`:
  * `useWorldClocks.ts`: Runs a 1,000ms `setInterval` computing live local hours/minutes formatted with AM/PM indicators for the 4 global hubs.
  * `useMousePosition.ts`: High-performance mouse coordinate listener for cursor-scrubbing and magnetic tooltips.
  * `useScrollLock.ts`: Toggles `overflow: hidden` on `document.body` when the navigation drawer or modal is active.

---

## Phase 3: Persistent Global Elements (HUD, Clocks, Dock & Drawer)

### Step 3.1: Fixed Top HUD (`HeaderHUD.tsx`)
* Apply `fixed top-0 left-0 w-full z-50` with CSS `mix-blend-mode: difference; color: #FFFFFF;`.
* Render typographic brand mark `RIWA` + subtle geometric crow vector on the left.
* Mount `WorldClocks.tsx` in the center.
* Mount `ThemeToggle.tsx`, `[ Let's talk ]` anchor button, and `[ Menu ]` drawer toggle on the right.

### Step 3.2: Live World Clocks (`WorldClocks.tsx`)
* Render the 4 business hubs in monospace typography:
  * `DELHI 21:48`
  * `MUMBAI 21:48`
  * `LONDON 16:18`
  * `NEW YORK 12:18`
* Include subtle pulsing dot separator between city name and ticking digits.

### Step 3.3: Animated Theme Switcher (`ThemeToggle.tsx`)
* Build an interactive capsule button.
* Display active state indicator with smooth icon/label flip.
* Tapping updates the theme context and inverts all semantic color tokens seamlessly.

### Step 3.4: Fullscreen Slide-Out Navigation Drawer (`MenuDrawer.tsx`)
* Animate with Framer Motion: `y: -100%` to `y: 0` with spring damping.
* Left Column: Staggered animated links:
  * `01 / HOME`
  * `02 / WORK`
  * `03 / SERVICES`
  * `04 / PROTOCOL`
  * `05 / LEADERSHIP`
  * `06 / BRAND DALAL (DELHI NCR)`
  * `07 / CAREERS (FOUNDER'S OFFICE)`
  * `08 / LET'S TALK`
* Right Column: Direct studio contact channels (`riwacreatives@gmail.com`, `@madebyriwa`), bureau addresses, and MSME accreditation.
* Hover effect: Moving pointer over navigation links reveals thumbnail previews of case study artwork and triggers a Laser Red indicator marker.

### Step 3.5: Fixed Bottom Dock (`BottomDock.tsx`)
* Mount persistent bottom bar with `mix-blend-mode: difference`.
* Left: Monospace tag `[ DIKHEGA TOH BIKEGA ]`.
* Center: `[ SCROLL TO EXPLORE ↓ ]` with animated indicator.
* Right: `[ ACCEPTING CLIENTS · Q1/Q2 SPRINT ]`.

---

## Phase 4: Kinetic Hero Viewport & Ambient Showreel Canvas

### Step 4.1: Kinetic Typography Component (`HeroSection.tsx`)
* Render category eyebrow: `[ 01 / CREATIVE DIRECTION & PERFORMANCE MEDIA ]`.
* Construct the primary kinetic headline:
  ```
  WE MAKE IT
  HAPPEN.
  ```
* Implement character/word stagger reveal on page load using Framer Motion.
* Bind scroll position to headline scale and opacity (subtle scale-down on scroll down).

### Step 4.2: Embedded Showreel Viewport (`ShowreelViewport.tsx`)
* Embed a 16:9 cinematic container framed with hairline borders and subtle backdrop glow.
* Implement an ambient auto-advancing canvas showcasing:
  1. Solanas *"Hotter Than Baddies"* retro pop-art poster.
  2. Solanas *Dim Sum Silk Dynamics* fluid 3D visual.
  3. Solanas *Sushi Brutalist* key art.
  4. 3D Web interactive visualizer.
* Hover state: Morph cursor into `[ EXPLORE ART ↗ ]`. Clicking triggers deep zoom lightbox modal.

### Step 4.3: Hero Metadata Bar (`HeroMeta.tsx`)
* Monospace grid displaying:
  * Latitude / Longitude: `28.6139° N, 77.2090° E`
  * Verified Metric: `₹400 Cr+ Client Revenue Delivered`
  * Scroll Indicator: `[ SCROLL ]`

---

## Phase 5: Interactive Manifesto & Hover Telemetry Badges

### Step 5.1: Editorial Manifesto Section (`ManifestoSection.tsx`)
* Eyebrow: `02 / THE PHILOSOPHY`.
* Large editorial statement with custom inline interactive triggers:
  > *"We operate at the razor-edge where `[provocative art]` meets `[predatory math]`. We discard bloated agency decks, junior handoffs, and vanity impressions to engineer category-defining brands."*

### Step 5.2: Hover Triggers & Telemetry Overlay (`KeywordTrigger.tsx`, `TelemetryCard.tsx`)
* Implement spring-damped floating card tracking the pointer:
  * Hovering `[provocative art]`: Spawns Solanas poster art thumbnail with caption *"Museum-grade ad art that prints revenue."*
  * Hovering `[predatory math]`: Spawns glassmorphism card displaying live verified telemetry:
    * `5.4x Blended ROAS`
    * `99.4% Attribution Accuracy`
    * `34% Lower Blended CAC`
* Smooth fade and scale exit when mouse leaves the keyword.

### Step 5.3: Crow Protocol Pillars Grid
* Render 4 minimalist editorial cards:
  1. `01 / AERIAL FORESIGHT` — Math always precedes magic. Unit economics audit.
  2. `02 / UNAPOLOGETIC MAGNETISM` — Arresting commercial posters and 3D CGI art.
  3. `03 / ZERO-LEAK FUNNELS` — Sub-0.8s headless e-commerce and advertorials.
  4. `04 / PREDATORY SCALE` — Multi-channel Meta, Google, AI Search & CRM flywheel.

---

## Phase 6: Selected Works & Cursor-Scrub Case Studies

### Step 6.1: Full-Bleed Showcase Grid (`SelectedWorks.tsx`)
* Eyebrow: `03 / SELECTED PROJECTS`.
* Stack 4 full-width project cards matching Studio Namma's layout.

### Step 6.2: Interactive Project Card (`ProjectCard.tsx`)
* Card Header: Client name on left, discipline category in center, verified metric pill on right.
* Interactive Media Container:
  * Displays high-res artwork banner.
  * Moving cursor across horizontal X-axis scrubs through alternate detail crops and video preview frames.
* Projects Implemented:
  1. **Solanas Chinese • Thai:** *"Hotter Than Baddies"* (+420% Weekend Orders).
  2. **Solanas Silk Dynamics:** Liquid 3D Dim Sum Art (+340% Dinner Inbounds).
  3. **Solanas Sushi Brutalist:** Kinetic Key Art (6.2% CTR on Meta Ads).
  4. **HyperBrand DTC:** Headless 3D Storefront (₹14.8 Cr Net Revenue Lift).

### Step 6.3: Artwork Lightbox Modal (`WorkPreviewModal.tsx`)
* Tapping any project opens an unconstrained high-resolution modal displaying full artwork dimensions, art direction brief, and campaign results.

---

## Phase 7: Disciplines & Dual-Column Line-Appear Services

### Step 7.1: Services Section Framework (`ServicesSection.tsx`)
* Eyebrow: `04 / DISCIPLINES`.
* Section Title: *"Engineered Capabilities"*.
* Render 6 horizontal rows separated by thin hairline borders (`border-t border-line`).

### Step 7.2: Line-Appear Service Row (`ServiceRow.tsx`)
* Apply scroll-triggered entrance animation (`line-appear`).
* Dual-column layout:
  * Left: Bold editorial discipline name (e.g. `Commercial Poster Design`).
  * Right: Monospace category pill (e.g. `[ Art Direction & Key Visuals ]`).
* On Hover:
  * Background shifts subtly.
  * Title shifts right by 8px.
  * Cursor spawns floating preview thumbnail displaying the flagship KPI badge (e.g. `4.8s Avg Watch Time`, `5.4x Avg ROAS`, `#1 AI Citation Rank`).
  * Accordion opens to display included deliverables list.

---

## Phase 8: Studio Leadership (Founder Profiles Grid)

### Step 8.1: Leadership Section Framework (`LeadershipSection.tsx`)
* Eyebrow: `05 / STUDIO LEADERSHIP`.
* Headline: *"Thinks like a founder. Creates like an artist."*
* Explicitly exclude client testimonials per finalized design blueprint.

### Step 8.2: Founder Cards Grid (`FounderCard.tsx`)
* Construct 2-column minimalist editorial card layout:
  * **Card 1: Abhinav Singh**
    * Role: *Founder & Chief Growth Architect*
    * Division: *Executive Strategy & Ad Art Direction*
    * Bio: Ex-hypergrowth consultant having scaled ₹550 Cr+ in collective ad spend. Obsessed with mathematical attribution, commercial poster art direction, and category dominance.
    * Track Record: `₹400 Cr+ Ad Revenue Managed`
    * Specialties: Growth Architecture · Poster Art Direction · CAPI Telemetry.
  * **Card 2: Sarah Sterling**
    * Role: *Head of Client Success & Operations*
    * Division: *Client Operations & Sprint Orchestration*
    * Bio: Ensures flawless execution, transparent real-time communication, and relentless alignment between client revenue goals and daily sprint deliverables.
    * Track Record: `99.4% Client Retention Rate`
    * Specialties: Sprint Orchestration · Lifecycle CRM · LTV Expansion.

---

## Phase 9: Interactive Intake Form & Category Selectors

### Step 9.1: Intake Section Framework (`IntakeSection.tsx`)
* Eyebrow: `06 / INTAKE & INQUIRIES`.
* Oversized Editorial Headline:
  ```
  Let's work
  together.
  ```
* Sub-Headline: *"Drop it, we'll build it. Tell us what you want to achieve."*

### Step 9.2: Interactive Discipline Pills (`CategoryPills.tsx`)
* Render multi-select toggle pills with animated active states:
  * `[ Commercial Poster Art ]`
  * `[ Paid Performance Media ]`
  * `[ 3D Web & Conversion Funnels ]`
  * `[ Full 90-Day Brand Accelerator ]`

### Step 9.3: Monthly Budget Tiers (`BudgetTiers.tsx`)
* Render single-select budget tier pills:
  * `[ < ₹5,00,000 / $5,000 ]`
  * `[ ₹5,00,000 – ₹20,00,000 / $10,000 – $25,000 ]`
  * `[ ₹20,00,000+ / Enterprise / Custom ]`

### Step 9.4: Underlined Input Fields & Form Validation (`IntakeFormFields.tsx`)
* Studio Namma minimalist underline input styling:
  * `01 / YOUR NAME`
  * `02 / YOUR WORK EMAIL`
  * `03 / COMPANY / WEBSITE`
  * `04 / PROJECT VISION & GOALS`
* Submit CTA: High-contrast inverted button `[ Submit Growth Brief ✦ ]` with Laser Red hover state.
* Success state: Clean modal confirming receipt and promise of founder outreach within 12 hours.

---

## Phase 10: Editorial Footer, Bureaus & Sub-Brand Modals

### Step 10.1: 4-Column Bureau Grid (`EditorialFooter.tsx`)
* Eyebrow: `07 / WORLDWIDE NETWORK`.
* Render physical studio bureau locations:
  * **New Delhi (NCR):** Regional Headquarters & Brand Dalal Bureau
  * **Mumbai:** Commercial Production & Ad Art Studio
  * **London:** European Strategic Brand Desk
  * **New York:** Global DTC Growth Engine

### Step 10.2: Sub-Brand & Career Drawers (`RegionalHubModal.tsx`)
* Build slide-over modal drawers for:
  * **Brand Dalal (Delhi NCR Viral Division):** Food reels, street posters, footfall ads (*"Dikhega Toh Bikega"*).
  * **Careers: Founder's Office Role:** Application intake for right-hand co-founder persona.
  * **Client Portal Demo:** Interactive preview of live sprint telemetry and creative approval queue.

### Step 10.3: Legal Bar & Accreditation
* Monospace verification bar:
  * `Government of India MSME Registered Enterprise`
  * `RIWA CREATIVES INC. © 2026 · ALL RIGHTS RESERVED`
  * `Privacy Policy` · `Terms of Engagement`

---

## Phase 11: Micro-Interactions, Custom Cursor & Polish

### Step 11.1: Custom Trailing Cursor (`CustomCursor.tsx`)
* Implement custom dot + trailing spring ring.
* Enlarge ring on hover over interactive buttons, links, and project cards.
* Change cursor content to contextual badges (`[ EXPLORE ]`, `[ VIEW ]`, `[ DRAG ]`).

### Step 11.2: Subtle Film Grain Noise (`NoiseOverlay.tsx`)
* Add a low-opacity SVG noise texture overlay with `pointer-events: none` to replicate Studio Namma's tactile, high-fashion editorial surface feel.

### Step 11.3: Sound FX (Optional Micro-Clicks)
* Add subtle synthesized micro-click audio feedback upon toggling theme switcher and category pills (with mute toggle).

---

## Phase 12: Production Verification & Performance Tuning

### Step 12.1: Cross-Device Responsiveness
* Verify fluid layout adaptations across:
  * Mobile viewports (375px, 414px) — stack clocks, collapsible menu.
  * Tablet viewports (768px, 1024px) — 2-column layout balance.
  * Desktop & Ultra-Wide (1440px, 1920px, 2560px) — maintain max-width bounds and crisp typography scale.

### Step 12.2: Lighthouse & Performance Optimization
* Ensure:
  * First Contentful Paint (FCP) < 0.6s
  * Largest Contentful Paint (LCP) < 0.8s
  * Cumulative Layout Shift (CLS) = 0
  * 100/100 Accessibility & Best Practices score.

---
**Document Status:** ✅ `build_steps.md` COMPLETE & PERSISTED. Ready for development execution upon instruction.

