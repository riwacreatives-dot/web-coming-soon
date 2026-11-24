# 🏛️ RIWA × Studio Namma — System & UX Architecture

> **Document:** `architecture.md`  
> **Status:** Architecture Blueprint (Brainstorming & Design Phase)  
> **Objective:** Comprehensive technical, UI/UX, and component-level architecture defining how the RIWA website is structured, how elements interact, user state flows, and data contracts.

---

## 1. Architectural Overview & System Philosophy

The website is engineered as a **high-performance, cinematic Single Page Application (SPA)** with deep route anchors and modal drawers. It bridges **Studio Namma's award-winning editorial minimalism** with **RIWA's commercial gravity**, utilizing hardware-accelerated animations, zero-layout-shift typography, and a reactive theme inversion engine.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT VIEWPORT                                │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  FIXED HUD: Logo · Live World Clocks · Theme Switcher · Menu Drawer    │  │  <- mix-blend-mode: difference
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  SMOOTH INERTIAL SCROLL CANVAS (Lenis Engine)                         │  │
│  │                                                                       │  │
│  │  [01] KINETIC HERO VIEWPORT       — "We make it happen" + Showreel     │  │
│  │  [02] INTERACTIVE MANIFESTO       — The Crow Protocol + Telemetry     │  │
│  │  [03] SELECTED WORKS SHOWCASE     — Solanas Suite + Cursor Scrubbing  │  │
│  │  [04] SERVICES & DISCIPLINES      — Line-Appear Dual-Column Rows      │  │
│  │  [05] STUDIO LEADERSHIP           — Founder & Operations Grid         │  │
│  │  [06] INTAKE & CONVERSION FORM    — Interactive Category & Budget     │  │
│  │  [07] EDITORIAL GLOBAL FOOTER     — Bureaus · Brand Dalal · MSME      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  FIXED DOCK: Status Pill · Scroll Indicator · Sound FX Indicator      │  │  <- mix-blend-mode: difference
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  FULLSCREEN SLIDE-OUT MENU DRAWER (Staggered Kinetic Curtain)         │  │  <- z-index: 100
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  INTERACTIVE HOVER TOOLTIP CANVAS (Spring Physics Cursor Portal)      │  │  <- z-index: 90
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack & Design System Tokens

### 2.1 Core Technology Stack
* **Framework:** React 19 (TypeScript) with Vite build tooling for sub-second HMR.
* **Styling Engine:** Tailwind CSS with custom CSS variable mapping for dynamic theme switching.
* **Animation & Physics:** 
  * `framer-motion` for declarative layout transitions, drawer slide-overs, and hover springs.
  * `@studio-freight/lenis` for 60fps inertial smooth scrolling.
* **Icons & Vector Art:** Lucide React + custom inline SVG vector assets (Crow Emblem, Seigaiha wave motifs).
* **State Management:** React Context + lightweight custom hooks (`useTheme`, `useWorldTime`, `useCursorPosition`).

### 2.2 Typography Hierarchy
* **Display & Kinetic Headlines:** `Syne` (Weights: 700, 800) + `Plus Jakarta Sans` (Weight: 900)
  * Scale: `text-hero` (`clamp(3.5rem, 11vw, 10.5rem)`), `letter-spacing: -0.04em`, `leading: 0.88`.
* **Editorial Sub-Headings:** `Plus Jakarta Sans` (Weights: 600, 700, 800)
  * Scale: `text-h2` (`clamp(2rem, 5vw, 4.25rem)`), `letter-spacing: -0.02em`.
* **Telemetry, Clocks & Metadata:** `JetBrains Mono` (Weights: 400, 500, 700)
  * Scale: `text-mono-xs` (`10px`), `text-mono-sm` (`12px`), `tracking-[0.15em]`, uppercase.
* **Editorial Body:** `Inter` / `Plus Jakarta Sans` (Weights: 400, 500)
  * Scale: `text-base` (`16px`), `leading-relaxed` (`1.65`).

### 2.3 Color Palette & Semantic Tokens
The interface dynamically toggles between **Cinematic Dark** (Default) and **Chalk Light**:

| Semantic Token | Dark Mode (Default) | Light Mode (Inverted) | Description |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#050608` | `#F9F9FB` | Primary page backdrop |
| `--bg-surface` | `#0D0F14` | `#FFFFFF` | Card & frame backgrounds |
| `--text-primary`| `#FFFFFF` | `#0A0B0E` | High-contrast display text |
| `--text-secondary`| `#8E95A5` | `#5A6172` | Subtitles, bios, descriptions |
| `--text-mono` | `#B0B6C4` | `#333742` | Clocks, metrics, badges |
| `--border-line` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.08)` | Hairline dividers |
| `--accent-red` | `#FF2A55` | `#E11D48` | Constant brand anchor (pills, dots) |
| `--accent-amber`| `#F5B31B` | `#D97706` | Secondary telemetry accent |

---

## 3. Component Hierarchy & File Structure

```
riwa-studio/
├── public/
│   ├── brand/
│   │   ├── riwa-crow-logo.svg
│   │   ├── riwa-crow-vector.svg
│   │   └── dalal-mascot.png
│   └── work/
│       ├── solanas-chilli-chicken.jpg
│       ├── solanas-poster.jpg
│       ├── solanas-sushi.png
│       ├── solanas-green-dimsum.png
│       └── solanas-steamer-dimsum.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx       # Magnetic custom pointer & expanding ring
│   │   │   ├── NoiseOverlay.tsx       # Subtle film grain texture overlay
│   │   │   └── ScrollProgress.tsx     # Hairline reading progress bar
│   │   ├── navigation/
│   │   │   ├── HeaderHUD.tsx          # Fixed top bar with mix-blend-mode: difference
│   │   │   ├── WorldClocks.tsx        # Real-time ticking world clocks (Delhi, Mumbai, London, NYC)
│   │   │   ├── ThemeToggle.tsx        # Animated Dark/Light mode toggle switch
│   │   │   ├── BottomDock.tsx         # Fixed bottom indicator and status pill
│   │   │   └── MenuDrawer.tsx         # Fullscreen slide-out kinetic navigation curtain
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx        # Massive kinetic "We make it happen" headline
│   │   │   ├── ShowreelViewport.tsx   # Embedded 16:9 cinematic video/poster canvas
│   │   │   └── HeroMeta.tsx           # Monospace coordinates and category badge
│   │   ├── manifesto/
│   │   │   ├── ManifestoSection.tsx   # Editorial Crow Protocol narrative
│   │   │   ├── KeywordTrigger.tsx     # Interactive hover keyword pill ([provocative art])
│   │   │   └── TelemetryCard.tsx      # Cursor-following floating ROAS/attribution card
│   │   ├── work/
│   │   │   ├── SelectedWorks.tsx      # Studio Namma full-bleed project showcase
│   │   │   ├── ProjectCard.tsx        # Interactive project card with cursor scrubbing
│   │   │   └── WorkPreviewModal.tsx   # Deep zoom view for Solanas poster art
│   │   ├── services/
│   │   │   ├── ServicesSection.tsx    # Line-appear dual-column services list
│   │   │   ├── ServiceRow.tsx         # Individual hoverable row with hairline dividers
│   │   │   └── ServiceHoverPreview.tsx# Cursor-attached thumbnail preview showing KPIs
│   │   ├── leadership/
│   │   │   ├── LeadershipSection.tsx  # Editorial founder cards (no testimonials)
│   │   │   └── FounderCard.tsx        # Monochrome portrait, role, and track record
│   │   ├── intake/
│   │   │   ├── IntakeSection.tsx      # Studio Namma "Let's work together" form
│   │   │   ├── CategoryPills.tsx      # Interactive discipline toggle selector
│   │   │   ├── BudgetTiers.tsx        # Monthly budget tier selector
│   │   │   └── IntakeFormFields.tsx   # Underlined text inputs with monospace labels
│   │   ├── footer/
│   │   │   ├── EditorialFooter.tsx    # 4-column studio bureaus & legal accreditation
│   │   │   └── RegionalHubModal.tsx   # Brand Dalal (Delhi NCR) spotlight drawer
│   ├── contexts/
│   │   └── ThemeContext.tsx           # Global dark/light theme state & persistence
│   ├── hooks/
│   │   ├── useWorldClocks.ts          # Computes real-time hours/minutes for 4 global hubs
│   │   ├── useMousePosition.ts        # Tracks viewport coordinates for floating cards
│   │   └── useScrollLock.ts           # Freezes background scroll when drawer is open
│   ├── data/
│   │   ├── projectsData.ts            # Detailed metadata for Solanas & DTC case studies
│   │   ├── servicesData.ts            # 6 core disciplines, deliverables, and KPIs
│   │   ├── leadershipData.ts          # Founder bios, departments, and credentials
│   │   └── clocksData.ts              # Timezone offsets for Delhi, Mumbai, London, NYC
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces for all components
│   ├── styles/
│   │   └── globals.css                # Custom CSS variables, typography imports, blend modes
│   ├── App.tsx                        # Master layout assembler & Lenis scroll provider
│   └── main.tsx                       # React application entry point
```

---

## 4. UI Elements & Behavioral Blueprint

### 4.1 Sticky Top HUD Navigation
* **Element:** `HeaderHUD.tsx`
* **Behavior:** Fixed `top-0 left-0 w-full z-50`. Uses `mix-blend-mode: difference; color: white;`.
* **Child Components:**
  * `Logo`: Typographic uppercase `RIWA` + vector geometric crow glyph.
  * `WorldClocks`: Sub-component rendering 4 live clocks calculated with accurate timezone offsets:
    * `DELHI` (UTC+5:30)
    * `MUMBAI` (UTC+5:30)
    * `LONDON` (UTC+0 / UTC+1)
    * `NEW YORK` (UTC-5 / UTC-4)
  * `ThemeToggle`: Animated pill showing active mode (`DARK` / `LIGHT`). Tapping triggers a 300ms cubic-bezier canvas color transition.
  * `Let's Talk CTA`: Quick anchor that smooth-scrolls to the `#contact` section.
  * `Menu Trigger`: Toggles `isMenuOpen` state, opening the fullscreen drawer.

---

### 4.2 Fullscreen Slide-Out Navigation Drawer
* **Element:** `MenuDrawer.tsx`
* **Behavior:** Modal curtain that slides downward from `y: -100%` to `y: 0` with Framer Motion spring physics. Locks underlying page scroll via `useScrollLock`.
* **Interactive Elements:**
  * Staggered navigation links (`Home`, `Work`, `Services`, `The Protocol`, `Leadership`, `Brand Dalal`, `Careers`, `Contact`).
  * Hovering any link animates a Laser Red indicator bullet and reveals thumbnail artwork.
  * Right-hand panel features direct mailto (`riwacreatives@gmail.com`), Instagram `@madebyriwa`, and bureau locations.

---

### 4.3 Hero Viewport & Embedded Showreel
* **Element:** `HeroSection.tsx` & `ShowreelViewport.tsx`
* **Visual Hierarchy:**
  * Monospace Eyebrow: `[ 01 / CREATIVE DIRECTION & PERFORMANCE MEDIA ]`.
  * Headline:
    ```
    WE MAKE IT
    HAPPEN.
    ```
    Rendered with large-scale kinetic type that staggers into view on load and subtly scales down as the user scrolls.
  * Embedded Showreel Viewport:
    * 16:9 container with subtle inner hairline border.
    * Cycles smoothly through Solanas commercial poster masterpieces and 3D motion art.
    * Pointer hover morphs the custom cursor into `[ EXPLORE ART ↗ ]`.
  * Meta bar displaying latitude/longitude coordinates (`28.6139° N, 77.2090° E`), client volume delivered (`₹400 Cr+ Delivered`), and scroll cue (`[ SCROLL TO EXPLORE ↓ ]`).

---

### 4.4 Interactive Manifesto ("The Crow Protocol")
* **Element:** `ManifestoSection.tsx`
* **Behavior:** Large editorial narrative paragraph with embedded interactive triggers:
  > *"We operate at the razor-edge where `[provocative art]` meets `[predatory math]`. We discard bloated agency decks, junior handoffs, and vanity impressions to engineer category-defining brands."*
* **Trigger 1: `[provocative art]`**
  * On mouse enter: Text underlines in Laser Red; cursor spawns a floating image card of the Solanas *"Hotter Than Baddies"* poster with smooth spring damping.
* **Trigger 2: `[predatory math]`**
  * On mouse enter: Cursor spawns a floating telemetry badge displaying real-time metrics:
    * `5.4x Blended ROAS`
    * `99.4% Attribution Accuracy`
    * `34% Lower Blended CAC`

---

### 4.5 Selected Works Showcase
* **Element:** `SelectedWorks.tsx` & `ProjectCard.tsx`
* **Layout:** Full-width vertical card stack matching Studio Namma's project layout.
* **Projects Loaded:**
  1. **Solanas Chinese • Thai** — *"Hotter Than Baddies"* Pop-Art Ad Poster Campaign (`+420% Weekend Orders · 86K+ Shares`).
  2. **Solanas Silk Dynamics** — Liquid 3D Dim Sum Art Direction (`+340% Dinner Inbounds`).
  3. **Solanas Sushi Brutalist** — Kinetic Key Art & Meta Ads Suite (`6.2% CTR on Meta Advantage+`).
  4. **HyperBrand DTC** — Headless 3D Storefront & Scaled Acquisition (`₹14.8 Cr Net Revenue Lift`).
* **Interaction:** Moving cursor over project cards scrubs through high-res poster crops and motion video reels. Clicking opens a high-resolution lightbox modal.

---

### 4.6 Services & Disciplines List
* **Element:** `ServicesSection.tsx` & `ServiceRow.tsx`
* **Layout:** Clean dual-column horizontal rows separated by hairline borders that animate smoothly into view (`line-appear` on scroll).
* **The 6 Disciplines:**
  1. `Commercial Poster Design` — *[ Art Direction & Key Visuals ]* · KPI: `4.8s Avg Watch Time`
  2. `Paid Performance Media` — *[ Meta Advantage+ & P-Max ]* · KPI: `5.4x Avg ROAS`
  3. `3D Web & Conversion Funnels` — *[ Three.js & Next.js Headless ]* · KPI: `Sub-0.8s LCP Load Time`
  4. `AI Search & GEO Dominance` — *[ Generative Engine Optimization ]* · KPI: `#1 AI Citation Rank`
  5. `Lifecycle & Retention CRM` — *[ Klaviyo & VIP Architecture ]* · KPI: `38% Revenue via CRM`
  6. `Growth Intelligence` — *[ Server-side CAPI & MER ]* · KPI: `99.4% Tracking Accuracy`
* **Interaction:** Hovering any row expands a detail drawer revealing specific deliverables, while a cursor-following badge displays the flagship KPI.

---

### 4.7 Studio Leadership Grid (No Testimonials)
* **Element:** `LeadershipSection.tsx` & `FounderCard.tsx`
* **Layout:** Minimalist 2-column card grid with black-and-white editorial portraits, hairline borders, and monospace credentials.
* **Profiles:**
  * **Abhinav Singh** — *Founder & Chief Growth Architect* (Ex-hypergrowth consultant, ₹400 Cr+ ad spend managed, CAPI telemetry).
  * **Sarah Sterling** — *Head of Client Success & Operations* (Sprint orchestration, lifecycle retention, 99.4% client retention rate).

---

### 4.8 Interactive Intake Form
* **Element:** `IntakeSection.tsx`
* **Headline:** *"Let's work together. Drop it, we'll build it."*
* **Interactive Controls:**
  * `Discipline Pills`: Single or multi-select buttons (`Commercial Posters`, `Paid Performance`, `3D Web`, `Full 90-Day Sprint`).
  * `Budget Tiers`: Interactive pills (`< ₹5L / $5k`, `₹5L – ₹20L / $10k – $25k`, `₹20L+ / Enterprise`).
  * `Form Inputs`: Studio Namma minimalist underline input fields (`Name`, `Email`, `Brand / Website`, `Project Vision`).
  * `Submit CTA`: Inverted high-contrast button `[ Submit Brief ✦ ]` triggering validated submission modal.

---

### 4.9 Editorial Footer & Bureau Network
* **Element:** `EditorialFooter.tsx`
* **Structure:**
  * 4 Global Bureaus: New Delhi (NCR), Mumbai, London, New York.
  * Direct Mailto: `riwacreatives@gmail.com`
  * Instagram: `@madebyriwa`
  * Secondary Sub-Hub Links:
    * `Brand Dalal (Delhi NCR Regional Engine) ↗` (opens spotlight modal)
    * `Careers: Founder's Office Role ↗` (opens application modal)
    * `Client Portal Access ↗`
  * Verification Stamp: *Government of India MSME Registered Enterprise*.

---

## 5. User Flows & State Machines

### 5.1 First-Load & Animation Sequence
```
[User Arrives] 
       │
       ▼
[Check SessionStorage for 'loaderDisplayed']
       │
   ┌───┴────────────────────────┐
   │ (First Visit)              │ (Repeat Visit)
   ▼                            ▼
[Display Preloader Counter]  [Immediate Viewport Reveal]
• 00% -> 100% Counter        • Header HUD fades in
• Split-curtain wipe         • Lenis Smooth Scroll active
       │
       ▼
[Hero Section Kinetic Typography Stagger]
• "WE MAKE IT HAPPEN." reveals word by word
• Embedded showreel starts ambient loop
• Real-time clocks begin 1,000ms ticking interval
```

---

### 5.2 Theme Inversion State Machine
```
[State: 'dark' (Default)] ────────(User clicks ThemeToggle)────────► [State: 'light']
  • --bg-canvas: #050608                                              • --bg-canvas: #F9F9FB
  • --text-primary: #FFFFFF                                           • --text-primary: #0A0B0E
  • HUD mix-blend-mode: difference                                    • HUD mix-blend-mode: difference
  • Persisted in localStorage ('riwa_theme')                          • Persisted in localStorage ('riwa_theme')
```

---

### 5.3 Interactive Keyword Hover Flow
```
[User hovers keyword '[provocative art]']
       │
       ▼
[Set activeKeyword = 'art']
       │
       ├──► [Underline transitions to Laser Red #FF2A55]
       └──► [Mount Floating Telemetry/Image Card in Portal]
              • Interpolate mouse X/Y coordinates with spring damping
              • Render Solanas poster crop with caption
       │
[User unhovers] ──► [Unmount Portal Card with fade-out exit transition]
```

---

## 6. Endpoints, Data Contracts & API Routing

### 6.1 Client-Side Hash Routes & Section Anchors
* `#/` — Hero Viewport (`#hero`)
* `#/philosophy` — The Crow Protocol Manifesto (`#manifesto`)
* `#/work` — Selected Works & Case Studies (`#work`)
* `#/services` — Disciplines & Capabilities (`#services`)
* `#/leadership` — Studio Founders & Leadership (`#leadership`)
* `#/contact` — Interactive Intake Form (`#contact`)
* `#/brand-dalal` — Regional Delhi NCR Division Modal Drawer
* `#/careers` — Founder's Office Hiring Modal Drawer
* `#/portal` — Interactive Client Sprint Command Center

---

### 6.2 Data Contracts (TypeScript Interfaces)

```typescript
// Case Study / Portfolio Schema
export interface ProjectItem {
  id: string;
  client: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  heroImage: string;
  badge: string;
  metric: string;
  year: string;
  accentColor: string;
  deliverables: string[];
}

// Service / Discipline Schema
export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  categoryTag: string;
  shortDesc: string;
  fullDesc: string;
  flagshipKPI: string;
  kpiLabel: string;
  deliverables: string[];
  previewImage: string;
}

// Leadership / Founder Schema
export interface FounderItem {
  name: string;
  role: string;
  department: string;
  bio: string;
  trackRecord: string;
  specialties: string[];
  portraitImage: string;
}

// Lead Intake Submission Payload
export interface IntakeSubmissionPayload {
  selectedDisciplines: string[];
  selectedBudget: string;
  name: string;
  email: string;
  brandOrWebsite: string;
  projectVision: string;
  submittedAt: string;
  source: string;
}
```

---

### 6.3 External Integrations & Redirects
* **Direct Mailto Handler:** `mailto:riwacreatives@gmail.com?subject=Growth%20Sprint%20Brief%20—%20RIWA`
* **Instagram Direct Link:** `https://instagram.com/madebyriwa`
* **Lead Ingestion Endpoint / Webhook:** Form posts data to an email dispatch / client webhook or triggers formatted direct WhatsApp / mailto fallback.

---
**Document Status:** ✅ `architecture.md` COMPLETE & PERSISTED. Ready for implementation planning.

