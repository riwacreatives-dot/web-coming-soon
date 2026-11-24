# 🧠 RIWA × Studio Namma — Website Brainstorming & Final Master Architecture

> **Document Type:** Master Website Blueprint & Content Specification  
> **Status:** ✅ FINALIZED TO THE MINUTEST DETAIL (Ready for Development)  
> **Workspace State:** All temporary scrapers and analysis files removed. Only `brainstorm.md` preserved.  
> **Objective:** Redesign the RIWA agency website by transposing the award-winning UI architecture, kinetic typography, and brutalist-minimal luxury structure of **Studio Namma** (`studionamma.com`), mapped 1:1 with **RIWA Creatives**' brand identity, services, case studies, and visual gravity.

---

## 1. 🦅 Brand Intelligence Dossier (RIWA Creatives)

### 1.1 Brand Identity & Positioning
* **Brand Name:** RIWA CREATIVES
* **Core Tagline:** *Engineered Growth. Unapologetic Design.*
* **Hero Punchline:** *"We make it happen."*
* **Agency Ethos:** "The Anti-Agency Growth Engine" / "The Crow Protocol".
* **Core Philosophy:**
  * *"Dikhega Toh Bikega"* (What is seen, sells).
  * *"Thinks Like a Founder. Creates Like an Artist."*
  * *"Math always precedes magic"* — rigorous attribution and unit economics paired with museum-grade creative poster art.
* **Mascot & Iconography:**
  * The **RIWA Crow** mascot: Symbolizing aerial foresight, razor-sharp intelligence, predatory speed, and survival instincts.
  * Razor geometric crow silhouettes, peeking crow vector motifs, and crow stamp seals.
* **Visual Identity & Color Palette:**
  * **Dark Mode (Default Canvas):** Pure Black (`#050608`), Off-Black (`#0B0D12`), Charcoal Border (`#1B1E26`).
  * **Light Mode (Inverted Canvas):** Off-White Chalk (`#F9F9FB`), Crisp White (`#FFFFFF`), Line Border (`#E4E6EB`).
  * **Primary Laser Accent:** Electric Crimson / Laser Red (`#FF2A55` / `#DC2626`).
  * **Secondary Accents:** Amber Gold (`#FFB800` / `#F5B31B`), Crisp White (`#FFFFFF`), Muted Slate (`#8E95A5`).
* **Verified Accreditations & Social Proof:**
  * Government of India MSME Registered Enterprise.
  * ₹400 Cr+ client revenue delivered / ₹550 Cr+ collective ad spend managed.
  * 99.4% client retention rate across high-intensity 90-day agile sprints.

---

### 1.2 The 6 Core Disciplines
1. **Commercial Poster Design & Viral Ad Art**
   * *Art Direction & Key Visuals:* High-impact culinary art direction, viral hook framing, 3D CGI product renders, retro-pop provocative typography (avg watch time 4.8s, 3.4x hook rate).
2. **Paid Performance Media**
   * *Meta Advantage+ & P-Max:* Multi-tiered acquisition across Meta, Google Performance Max, YouTube & TikTok Spark Ads (5.4x avg ROAS, 34% lower blended CAC).
3. **3D Web & Conversion Funnels**
   * *Three.js & Next.js Headless:* Immersive Three.js interactive 3D web experiences, custom storefronts, and conversion-engineered advertorials (+42% conversion lift, sub-0.8s LCP load time).
4. **AI Search & GEO Dominance**
   * *Generative Engine Optimization:* Knowledge graph structure and technical entity schema to make client brands the #1 cited authority across ChatGPT, Perplexity, Claude & Gemini (+280% organic AI traffic, #1 AI citation rank).
5. **Lifecycle & Retention CRM**
   * *Klaviyo & VIP Architecture:* Hyper-segmented Klaviyo VIP flows, omnichannel SMS sequences, and RFM predictive churn intervention (38% of revenue via CRM, 48% repeat purchase rate).
6. **Growth Intelligence & Attribution**
   * *Server-side CAPI & MER:* Zero-loss server-side Conversion API (CAPI) on Cloud Run, Triple Whale & Northbeam calibrations, and blended MER executive dashboards (99.4% tracking accuracy).

---

### 1.3 Flagship Work & Case Studies
* **Solanas Chinese • Thai Commercial Suite (5-Poster Ad Art Masterpiece):**
  1. *Hotter Than Baddies:* Chilli Garlic Chicken retro pop-art street poster (+420% weekend orders, 86,000+ organic shares).
  2. *Dim Sum Silk Dynamics:* Liquid silk & overhead dumpling composition (+340% dinner inbounds).
  3. *Sushi Condensed Key Art:* Kinetic brutalist typography platter (6.2% CTR on Meta Ads).
  4. *Jade Dim Sum:* Traditional bamboo steamer with Japanese Seigaiha wave patterns (+280% crave rate).
  5. *It's Hot. It's Tempting:* Direct-response bamboo steamer with bold red action tab.
* **HyperBrand DTC & Global Sprints:**
  * Full-funnel omnichannel Meta/Google P-Max scaling sprint with 3D product visualizer (`₹14.8 Cr Net Revenue Lift`).

---

### 1.4 Sub-Divisions & Special Modules
* **Brand Dalal (Delhi NCR Regional Engine):** Dedicated regional engine pairing viral food reels, street posters, and hyper-geofenced footfall ads (*"Dikhega Toh Bikega"*).
* **Founder's Office Careers:** Active hiring call for high-velocity right-hand co-founder persona (*"Thinks like a founder, creates like an artist"*).
* **Client Command Center:** Interactive client sprint demo showing live ROAS telemetry and creative approval queues.

---

## 2. 🏛️ Studio Namma (`studionamma.com`) Architectural Dissection

Studio Namma is an Awwwards Site of the Day winner celebrated for its ultra-minimalist, editorial Parisian luxury aesthetic and fluid motion.

### Core Signature UI Patterns:
* **`mix-blend-mode: difference` Floating HUD:** Persistent navigation that dynamically inverts colors against background images/videos.
* **Live Global Time Clocks:** Real-time city clocks displaying current local hours with AM/PM indicators in monospace typography.
* **Interactive Light / Dark Mode Toggle:** Instantaneous palette inversion with smooth CSS transitions.
* **Kinetic Oversized Typography:** Giant display headlines that stagger, scrub, and scale upon scroll.
* **Interactive Inline Text Triggers:** Editorial narrative paragraphs containing hover-activated keyword pills (`[word]`) that trigger floating visual overlays.
* **Line-Appear Dual-Column Services:** Minimalist horizontal rows with hairline borders that reveal on scroll; bold title on the left, monospace category tag on the right.
* **Fullscreen Slide-Out Navigation Drawer:** Elegant curtain slide-over menu with oversized navigation links and studio contact details.
* **Custom Intake Form:** Oversized *"Let's work together"* headline with interactive radio pill selectors for disciplines and budget tiers.

---

## 3. 🎯 Confirmed Design Decisions Matrix

| Decision Area | Final Confirmed Direction | Technical Specification |
| :--- | :--- | :--- |
| **Aesthetic & Tone** | **Studio Namma Editorial Luxury** | Ultra-slick, quiet-luxury digital studio aesthetic; replaces neon-red brutalism with high-contrast editorial refinement. |
| **Theme System** | **Interactive Dark / Light Mode Toggle** | Interactive toggle in HUD; defaults to cinematic dark (`#050608`), inverts to chalk white (`#F9F9FB`). |
| **Color Accents** | **Monochrome + Laser Red (`#FF2A55`)** | Black, Charcoal, Off-White foundation with precision Laser Red highlights on active pills, badges, and hover states. |
| **Hero Punchline** | **"We make it happen."** | Staggered kinetic typography headline, accompanied by an ambient showreel container cycling through Solanas posters and 3D art. |
| **Agency Positioning** | **50/50 Creative Studio & Growth Engine** | Seamless union of museum-grade commercial ad art with rigorous attribution, CAC/ROAS telemetry, and conversion funnels. |
| **Social Proof Model** | **No Testimonials; Visible Founder Profiles** | Replaces quote reviews with an elite editorial "Studio Leadership" section featuring Abhinav Singh & Sarah Sterling. |
| **Sub-Brands Integration** | **Fullscreen Drawer & Editorial Footer** | Keeps primary sticky HUD uncluttered while featuring Brand Dalal & Careers prominently in the menu drawer and footer. |

---

## 4. 📐 Exhaustive Section-by-Section Specification (The Minutest Details)

```
┌────────────────────────────────────────────────────────────────────────┐
│  [RIWA ✦]    DELHI 21:48   MUMBAI 21:48   LONDON 16:18   NYC 12:18  [DARK/LIGHT] [LET'S TALK] [MENU] │  <- Sticky HUD (mix-blend-mode: difference)
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [01 / CREATIVE DIRECTION & GROWTH]                                   │
│   WE MAKE IT                                                           │
│   HAPPEN.                                                              │
│                                                                        │
│   ┌──────────────────────────────────────────────────────────────┐     │
│   │  [AMBIENT SHOWREEL / SOLANAS CULINARY POSTER SUITE CANVAS]   │     │  <- Embedded Showreel Viewport
│   │  ✦ "Hotter Than Baddies" · Dim Sum Silk · Brutalist Sushi    │     │
│   └──────────────────────────────────────────────────────────────┘     │
│                                                                        │
│   [ SCROLL TO EXPLORE ]                                                │
├────────────────────────────────────────────────────────────────────────┤
│  02 / THE PHILOSOPHY (Interactive Narrative with Hover Keyword Cards)  │
│  "We operate at the razor-edge where [PROVOCATIVE ART] meets           │
│   [PREDATORY MATH]. We discard bloated agency decks to scale brands."   │
├────────────────────────────────────────────────────────────────────────┤
│  03 / SELECTED WORKS (Full-Bleed Cursor-Scrub Cards)                   │
│  • Solanas Chinese • Thai — "Hotter Than Baddies" (+420% Orders)       │
│  • Solanas Silk Dynamics — Liquid 3D Dim Sum Art (+340% Dinner Inbounds│
│  • Solanas Sushi Platter — Kinetic Brutalist Typography (6.2% CTR)     │
│  • HyperBrand DTC — 3D Web & Conversion Engine (₹14.8 Cr Net Lift)     │
├────────────────────────────────────────────────────────────────────────┤
│  04 / DISCIPLINES (Dual-Column Line-Appear Rows)                       │
│  Commercial Poster Design          — [ Art Direction & Key Visuals ]   │
│  Paid Performance Media            — [ Meta Advantage+ & P-Max ]       │
│  3D Web & Conversion Funnels       — [ Three.js & Next.js Headless ]   │
│  AI Search & GEO Dominance         — [ Generative Engine Optimization ]│
│  Lifecycle & Retention CRM         — [ Klaviyo & VIP Architecture ]    │
│  Growth Intelligence & Attribution — [ Server-side CAPI & MER ]        │
├────────────────────────────────────────────────────────────────────────┤
│  05 / STUDIO LEADERSHIP (Editorial Founder Grid — No Testimonials)     │
│  • Abhinav Singh  | Founder & Chief Growth Architect (₹400 Cr+ Managed)│
│  • Sarah Sterling | Head of Client Success & Retention (99.4% Retained)│
├────────────────────────────────────────────────────────────────────────┤
│  06 / INTAKE (Studio Namma Interactive Form)                           │
│  "Let's work together. Drop it, we'll build it."                       │
│  Pills: [ Commercial Posters ] [ Paid Media ] [ 3D Web ] [ Full Sprint]│
│  Budget: [ < ₹5L / $5k ] [ ₹5L - ₹20L / $10k-$25k ] [ ₹20L+ / Enterpr] │
│  Inputs: Name · Email · Brand/URL · Vision · [ Submit Brief ✦ ]        │
├────────────────────────────────────────────────────────────────────────┤
│  07 / FOOTER                                                           │
│  Bureaus: New Delhi (NCR) · Mumbai · London · New York                 │
│  Sub-Links: Brand Dalal ↗ · Careers: Founder's Office ↗ · Portal ↗     │
│  MSME Registered Enterprise · RIWA CREATIVES © 2026                    │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Detailed Component Specifications

### 4.1 Sticky Top HUD Navigation
* **Position:** Fixed `top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6`.
* **CSS Blend Mode:** `mix-blend-mode: difference; color: #FFFFFF;` (ensures readability regardless of underlying image luminance).
* **Left Segment:**
  * Typographic mark: `RIWA` (Heavy bold sans-serif, letter-spacing: `-0.04em`).
  * Mascot Emblem: Minimalist geometric crow vector icon with laser-red eye dot.
* **Middle Segment (Global World Clocks):**
  * Displays real-time hours, minutes, and AM/PM indicators updating every second:
    * `DELHI 21:48` (IST: UTC+5:30)
    * `MUMBAI 21:48` (IST: UTC+5:30)
    * `LONDON 16:18` (GMT/BST)
    * `NEW YORK 12:18` (EST/EDT)
  * Font: `JetBrains Mono` / Monospace, uppercase, `text-[11px]`, subtle tracking.
* **Right Segment:**
  * **Theme Switcher Pill:** `[ Dark / Light ]` button with smooth animated canvas inversion.
  * **Quick CTA:** `[ Let's talk ]` triggering smooth scroll down to Intake Form.
  * **Menu Toggle:** `[ Menu ]` triggering the Fullscreen Slide-Out Drawer.

---

### 4.2 Fullscreen Slide-Out Navigation Drawer
* **Transition:** Slides in smoothly from top/right with cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
* **Background:** High-contrast backdrop (`#050608` in dark mode, `#F9F9FB` in light mode) with hairline borders.
* **Left Column (Primary Navigation):**
  * Oversized kinetic links that stagger on reveal:
    * `01 / HOME`
    * `02 / WORK`
    * `03 / SERVICES`
    * `04 / PROTOCOL`
    * `05 / LEADERSHIP`
    * `06 / BRAND DALAL (DELHI NCR)`
    * `07 / CAREERS (FOUNDER'S OFFICE)`
    * `08 / LET'S TALK`
  * Hover state: Link text shifts slightly right with Laser Red dot marker reveal.
* **Right Column (Contact & Meta):**
  * Direct Email: `mailto:riwacreatives@gmail.com`
  * Instagram: `@madebyriwa ↗`
  * Bureau Locations: New Delhi NCR · Mumbai · London · New York
  * Accreditation: *Government of India MSME Registered Enterprise*
  * Close Button: `[ Close ✕ ]` in top-right corner.

---

### 4.3 Hero Section
* **Eyebrow Tag:** `[ 01 / CREATIVE DIRECTION & PERFORMANCE MEDIA ]` in monospace uppercase.
* **Kinetic Headline:**
  ```
  WE MAKE IT
  HAPPEN.
  ```
  * Font: Bold High-Fashion Grotesk (`Syne` / `Plus Jakarta Sans`, 900 weight).
  * Scale: Fluid typography (`clamp(3.5rem, 11vw, 10.5rem)`), tight line-height (`0.88`), negative tracking.
  * Animation: ScrollTrigger scale down and smooth parallax on scroll.
* **Sub-Headline:**
  * Refined monospace text: `Engineered Growth & Commercial Art Direction · RIWA Creatives`.
* **Embedded Showreel / Visual Viewport:**
  * Aspect Ratio: 16:9 cinematic container with thin border and subtle inner shadow.
  * Autoplay ambient showreel / interactive image slider previewing:
    1. *Solanas "Hotter Than Baddies"* Chili Chicken Poster with retro lipstick kiss marks.
    2. *Solanas Dim Sum Silk Dynamics* fluid 3D render.
    3. *Solanas Sushi Brutalist* key art.
    4. 3D Web interactive visualizer.
  * Interactive Cursor Pill over frame: `[ View Reel ↗ ]` or `[ Drag / Scrub ]`.
* **Bottom Scroll Cue:**
  * Minimalist dock indicator: `[ SCROLL TO EXPLORE ↓ ]` with animated pulsing laser-red dot.

---

### 4.4 Interactive Manifesto / Narrative ("The Crow Protocol")
* **Eyebrow:** `02 / THE PHILOSOPHY`
* **Editorial Copy:**
  > *"We operate at the razor-edge where `[provocative art]` meets `[predatory math]`. We discard bloated agency decks, junior handoffs, and vanity impressions to engineer category-defining brands."*
* **Interactive Hover Keyword Mechanics:**
  * Hovering `[provocative art]`:
    * Underline turns Laser Red.
    * Floating tooltip card follows cursor showing Solanas commercial poster preview with caption: *"Museum-grade ad art that prints revenue."*
  * Hovering `[predatory math]`:
    * Underline turns Laser Red.
    * Floating glassmorphism card follows cursor displaying live telemetry:
      * `5.4x Avg Blended ROAS`
      * `99.4% CAPI Tracking Accuracy`
      * `34% Lower Blended CAC`
* **Secondary Brand Pillar Badges:**
  * `[ 01 · AERIAL FORESIGHT ]` — Unit economics and tracking before spending a single dollar.
  * `[ 02 · VISUAL GRAVITY ]` — Arresting commercial art that stops the scroll dead.
  * `[ 03 · ZERO-LEAK FUNNELS ]` — Sub-0.8s LCP headless web experiences.
  * `[ 04 · PREDATORY SCALE ]` — Multi-channel Meta, Google, AI Search & Klaviyo flywheel.

---

### 4.5 Selected Works (Flagship Showcase)
* **Eyebrow:** `03 / SELECTED PROJECTS`
* **Card Architecture (Studio Namma Style):**
  * Full-bleed interactive cards with video/image scrub on cursor movement.
  * Metadata bar on each card: Client name on left, discipline tag in center, year/metric on right.
* **The 4 Featured Case Studies:**
  1. **Solanas Chinese • Thai — "Hotter Than Baddies"**
     * *Category:* Pop-Art Ad Poster & Viral Street Campaign
     * *Headline:* Provocative retro typography, fiery food styling, and lipstick kiss marks printed on textured paper.
     * *Verified Metric:* `+420% Weekend Orders · 86K+ Organic Shares`
     * *Badge:* `VIRAL CAMPAIGN HIT`
  2. **Solanas Silk Dynamics — Liquid 3D Dim Sum**
     * *Category:* Luxury Culinary Art & Motion Direction
     * *Headline:* Artisanal wooden bowl with chili dipping oil set against sweeping fluid silk dynamics.
     * *Verified Metric:* `+340% Dinner Inbounds`
     * *Badge:* `FLAGSHIP ARTWORK`
  3. **Solanas Sushi Brutalist — Kinetic Key Art**
     * *Category:* Kinetic Ad Poster & Meta Performance Suite
     * *Headline:* Salmon & shrimp rolls on a wooden boat platter flanked by ultra-tall condensed typography and repeating ticker-tapes.
     * *Verified Metric:* `6.2% CTR on Meta Advantage+ (3.4x Industry Avg)`
     * *Badge:* `MODERN BRUTALIST`
  4. **HyperBrand DTC — Omnichannel Accelerator**
     * *Category:* 3D Interactive Web & Full-Funnel Scaling
     * *Headline:* Custom headless Next.js storefront paired with automated Meta/Google bid rules and Klaviyo retention.
     * *Verified Metric:* `₹14.8 Cr Net Revenue Lift · 99.4% Retained`
     * *Badge:* `SCALE ACCELERATOR`

---

### 4.6 Disciplines & Services (Line-Appear Layout)
* **Eyebrow:** `04 / DISCIPLINES`
* **Layout:** Dual-column horizontal rows separated by thin hairline borders (`border-t border-line`), animating smoothly into view (`line-appear`).
* **Interactive Hover State:** Row background subtly shifts, service title shifts right by 8px, and a cursor-attached thumbnail preview of relevant case study art floats beside the pointer.
* **The 6 Disciplines Specification:**
  1. **Commercial Poster Design**
     * *Right Pill:* `[ Art Direction & Key Visuals ]`
     * *KPI Badge:* `4.8s Avg Watch Time`
     * *Deliverables:* Commercial Campaign Posters & Billboards · Viral Hook Framing · Culinary Art Direction · 3D CGI Product Renders.
  2. **Paid Performance Media**
     * *Right Pill:* `[ Meta Advantage+ & P-Max ]`
     * *KPI Badge:* `5.4x Avg ROAS`
     * *Deliverables:* Meta Ads Advantage+ · Google Performance Max & YouTube · TikTok Spark Ads · Automated Daily Bid Tuning.
  3. **3D Web & Conversion Funnels**
     * *Right Pill:* `[ Three.js & Next.js Headless ]`
     * *KPI Badge:* `+42% Conversion Lift · Sub-0.8s LCP`
     * *Deliverables:* Headless E-Commerce · Interactive 3D Brand Experiences · High-Converting Advertorials · Multi-variant A/B Testing.
  4. **AI Search & GEO Dominance**
     * *Right Pill:* `[ Generative Engine Optimization ]`
     * *KPI Badge:* `#1 AI Citation Rank`
     * *Deliverables:* Generative Engine Optimization (GEO) · Technical Semantic Knowledge Graph · Citation Audits across ChatGPT, Perplexity & Gemini.
  5. **Lifecycle & Retention CRM**
     * *Right Pill:* `[ Klaviyo & VIP Architecture ]`
     * *KPI Badge:* `38% of Revenue via CRM`
     * *Deliverables:* 14+ Klaviyo Automated Flows · Two-Way SMS Campaigns · RFM Predictive Segmentation · VIP Replenishment Automations.
  6. **Growth Intelligence & Attribution**
     * *Right Pill:* `[ Server-side CAPI & MER ]`
     * *KPI Badge:* `99.4% Tracking Accuracy`
     * *Deliverables:* Server-side Meta & Google CAPI via Cloud Run · Triple Whale & Northbeam Calibration · Blended MER Executive Dashboards.

---

### 4.7 Studio Leadership (Founder Profiles — No Testimonials)
* **Eyebrow:** `05 / STUDIO LEADERSHIP`
* **Section Tagline:** *"Thinks like a founder. Creates like an artist."*
* **Design Pattern:** Studio Namma 2-column minimalist card layout with monochrome portraits, hairline borders, and monospace credentials.
* **Profile 1: Abhinav Singh**
  * *Role:* Founder & Chief Growth Architect
  * *Department:* Executive Strategy & Creative Direction
  * *Bio:* Ex-hypergrowth consultant having scaled ₹550 Cr+ in collective ad spend. Obsessed with mathematical attribution, commercial poster art direction, and ruthless category dominance.
  * *Key Track Record:* `₹400 Cr+ Ad Revenue Managed`
  * *Specialties:* Growth Architecture · Poster Art Direction · CAPI Telemetry · Category Dominance.
* **Profile 2: Sarah Sterling**
  * *Role:* Head of Client Success & Retention
  * *Department:* Client Operations & Sprint Orchestration
  * *Bio:* Ensures flawless execution, transparent real-time communication, and relentless alignment between client revenue goals and daily sprint deliverables.
  * *Key Track Record:* `99.4% Client Retention Rate`
  * *Specialties:* Sprint Orchestration · Lifecycle CRM · Executive Reporting · LTV Expansion.

---

### 4.8 Interactive Intake Form ("Let's Work Together")
* **Eyebrow:** `06 / INTAKE & INQUIRIES`
* **Headline:**
  ```
  Let's work
  together.
  ```
* **Sub-Headline:** *"Drop it, we'll build it. Tell us what you want to achieve."*
* **Interactive Category Selector Pills (Single/Multi-select):**
  * `[ Commercial Poster Art ]`
  * `[ Paid Performance Media ]`
  * `[ 3D Web & Conversion Funnels ]`
  * `[ Full 90-Day Brand Accelerator ]`
* **Monthly Ad / Project Budget Tiers:**
  * `[ < ₹5,00,000 / $5,000 ]`
  * `[ ₹5,00,000 – ₹20,00,000 / $10,000 – $25,000 ]`
  * `[ ₹20,00,000+ / Enterprise / Custom ]`
* **Minimalist Input Fields (Studio Namma Underline Style):**
  * `01 / YOUR NAME` — *e.g. Founder / Marketing Lead*
  * `02 / YOUR WORK EMAIL` — *e.g. alex@brand.com*
  * `03 / COMPANY / WEBSITE` — *e.g. brand.com or @handle*
  * `04 / PROJECT VISION & GOALS` — *e.g. Current ad spend, target revenue, primary bottlenecks...*
* **Submission Action:**
  * Custom magnetic button: `[ Submit Growth Brief ✦ ]`
  * Success State: Clean editorial modal: *"Thank you. Your inquiry has been received. Our founder's office will reach out within 12 hours."*
* **Direct Studio Channels:**
  * Direct Mail: `riwacreatives@gmail.com`
  * Instagram DM: `@madebyriwa`

---

### 4.9 Editorial Minimalist Footer & Regional Hubs
* **Eyebrow:** `07 / WORLDWIDE NETWORK`
* **Bureau Grid (4 Columns):**
  * **New Delhi (NCR):** Regional Headquarters & Brand Dalal Bureau
  * **Mumbai:** Commercial Production & Ad Art Studio
  * **London:** European Strategic Brand Desk
  * **New York:** Global DTC Growth Engine
* **Sub-Hub & Secondary Initiatives:**
  * `Brand Dalal (Delhi NCR Regional Engine) ↗`
  * `Careers: Founder's Office Role (We're Hiring) ↗`
  * `Client Portal Demo (Live Sprint Command Center) ↗`
* **Accreditation & Legal Bar:**
  * `Government of India MSME Registered Enterprise`
  * `RIWA CREATIVES INC. © 2026 · ALL RIGHTS RESERVED`
  * `Privacy Policy` · `Terms of Engagement` · `Cookies Policy`

---

## 5. 🛠️ Recommended Implementation Stack

* **Core Framework:** React 19 / Vite + Tailwind CSS (configured for instant dark/light palette inversion).
* **Motion & Physics Engine:** Framer Motion + Lenis Smooth Scroll (providing 60fps inertial scrolling, cursor parallax, and line-appear animations matching Studio Namma).
* **Typography Suite:**
  * Display Headline: `Syne` & `Plus Jakarta Sans` (weights 700, 800, 900)
  * Telemetry, Clocks & Metadata: `JetBrains Mono` (weights 400, 700)
  * Editorial Body: `Inter` / `Plus Jakarta Sans`
* **Assets & Media:**
  * Embedded high-resolution Solanas poster imagery (`solanas-chilli-chicken.jpg`, `solanas-poster.jpg`, `solanas-sushi.png`, `solanas-green-dimsum.png`, `solanas-steamer-dimsum.jpg`).
  * Optimized video canvas showreel for the hero container.
  * Crisp SVG crow vector mascot emblems and stamps.

---
**Status:** ✅ MASTER BRAINSTORM DOCUMENT FINALIZED. READY FOR INSTANT INVOCATION OF CODEBASE CREATION.
