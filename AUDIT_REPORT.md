# RIWA CREATIVES — REPOSITORY AUDIT REPORT (PHASE 1)

**Audit Scope:** Strictly Read-Only Evidence-Based Repository & Blueprint Audit  
**Repository Root:** `c:\Users\Ranjan\web-coming-soon`  
**Reference Blueprint:** `Riwa Creatives Website Strategy Blueprint-2.pdf` (114 pages inspected)  
**Git Baseline:** Branch `main` at `HEAD` commit `db4d0a2` (`chore(hero): restore previous Worktable hero section only`)  
**Audit Date:** 2026-11-25  

> [!IMPORTANT]
> **CRITICAL REPOSITORY STATE NOTICE (DIRTY WORKING TREE):**  
> Before Phase 3 implementation begins, note that the local working tree is **NOT clean against `HEAD` (`db4d0a2`)**. `git diff --stat HEAD` reports **13 modified tracked files** (`1,956 insertions(+), 1,983 deletions(-)`) plus **2 untracked files** (`src/components/chapters/ChapterTransition.tsx` and `Riwa Creatives Website Strategy Blueprint-2.pdf`).  
> These uncommitted edits reflect incomplete prior V3/D2 experimental work (replacing `BrandTicker` with `ChapterTransition` banners in `src/pages/HomePage.tsx`, removing `<NoiseOverlay />` in `src/App.tsx`, adding `LiquidArtworkCanvas` into `HeroSection.tsx`, and altering chapter files `ThePointOfView.tsx`, `TheAttention.tsx`, `TheWorld.tsx`, `TheRealWorld.tsx`, `ThePeople.tsx`, `TheNextIdea.tsx`).  
> No code, config, dependency, CSS, HTML, asset, or git state was altered during this Phase 1/2 audit.

---

## Executive Summary

The repository at `c:\Users\Ranjan\web-coming-soon` is a React 19 + TypeScript + Vite + Tailwind CSS single-page application (SPA) containing solid typography foundations (`Syne`, `Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`) and an intact `mailto:` + copy-to-clipboard brief workflow plus WhatsApp concierge links. However, it suffers from **six severity-1 blockers** against the locked Strategy Blueprint and production quality bar:

1. **Contradictory Persona & Unverified Claims:** Legacy persona name **`"Abhinav Singh"` / `"Abhinav"`** appears in `RegionalHubModal.tsx:228` and `ManifestoSection.tsx:23`, directly contradicting founder **Ranjan Kumar**. Hardcoded unverified KPIs (`+420% Weekend Orders`, `+340% Dinner Inbounds`, `6.2% Meta Ads CTR`, `5.4x ROAS`, `99.4% CAPI`, `-34% CAC`, `₹2.5 Cr Net Run Rate`, `EST. 2024`, `GOVT. OF INDIA MSME`) appear across 9+ files without confirmation or client sign-off (`DEC-12`).
2. **WCAG 2.2 AA Contrast Failures:** Verified sRGB calculations show **white `#FFFFFF` on Riwa Orange `#FD7D3C` = `2.57:1`** (fails even `3.0:1` Large Text AA) across `TheRealWorld.tsx`, `EventsTakeoverSection.tsx`, and `DifferenceSection.tsx`. Normal/small red text (`#EA1E4D`) on cotton/concrete/white light grounds (`3.55:1`–`4.38:1`) and dark charcoal (`#EA1E4D` on `#111116` = `4.29:1`) also fails `4.5:1`.
3. **Brand Vector Color Variance (`DEC-09`):** All three `.svg` files in `public/brand/` (`riwa-crow-logo.svg`, `riwa-crow-vector.svg`, `riwa-r-logo.svg`) use legacy crimson `#FF2A55` instead of official `#FD7D3C` orange present in `public/brand/riwa-logo-official.png`.
4. **Misappropriated Artwork & Bloated IA:** Unrelated Solanas food campaign photography (`solanas-poster.jpg`, `solanas-sushi.png`, `solanas-green-dimsum.png`) is mounted onto `Hack Uttar Pradesh`, `Horizon MUN`, and `DTC Brand Accelerator` cards in `projectsData.ts`. Routing exposes 8+ routes instead of the locked 5-section IA, splits capabilities onto 5 `/services/:serviceId` pages instead of a unified `#anchor`-driven `/services` page, and omits `#brand-management-growth` as a standalone top-level discipline.
5. **Prohibited / Heavy UX Patterns:** Native cursor suppression (`cursor: none !important`), `Lenis` smooth-scroll interception, continuous `requestAnimationFrame` WebGL fluid displacement (`LiquidArtworkCanvas.tsx`), blocking preloader curtain (`StudioCardWarpLoader.tsx`), infinite marquees, and unused `gsap` dependency conflict with the Blueprint performance/accessibility spec.
6. **`riwacreatives.in` Crawlability & Deployment Gaps:** Pure CSR `<div id="root"></div>`, misplaced `sitemap.xml` at repository root (excluded from `dist/`), canonical mismatch (`riwacreatives.vercel.app` vs `riwacreatives.in`), and missing `vercel.json` SPA rewrites undermine organic indexing and route reliability.

---

## Section A — Architecture, Routing & Crawlability (`riwacreatives.in`)

### 1. Stack & Dependency Inventory (`package.json`)
| Package / Config | Observed Value | Status vs Blueprint | Citation |
|---|---|---|---|
| `react` / `react-dom` | `^19.0.0` | Keep (`README.md` & `TheWorld.tsx:261` falsely say React 18) | `package.json:17-18`, `TheWorld.tsx:261`, `README.md:27` |
| `vite` | `^6.1.0` | Keep; needs static prerender/sitemap fix | `package.json:31`, `vite.config.ts:1-18` |
| `tailwindcss` | `^3.4.17` | Keep | `package.json:29`, `tailwind.config.js` |
| `react-router-dom` | `^7.18.5` | Keep | `package.json:19` |
| `framer-motion` | `^12.4.7` | Audit/Restrict to CSS + reduced-motion safe transitions | `package.json:13` |
| `gsap` | `^3.15.1` | Remove (unneeded bundle dependency) | `package.json:14` |
| `lenis` | `^1.1.20` | **Remove** (Blueprint bans virtual scroll hijacking) | `package.json:15`, `SmoothScroll.tsx:2` |
| `lucide-react` | `^0.475.0` | Optional / minimize | `package.json:16` |

### 2. Routing & Information Architecture Mismatches
Current router (`src/App.tsx:120-135`):
- `/` -> `HomePage`
- `/work` -> `WorkPage` (contains `SelectedWorks` with 3 tiers A/B/C; lacks clean 2-tier `Featured` + `Archive` restraint per Blueprint)
- `/work/:projectId` -> `ProjectDetailPage` (alias handles `solanas-baddies` -> `solanas-campaign` at L12)
- `/about` (+ `/vision`, `/protocol`, `/manifesto` redirects at L124-127) -> `AboutPage`
- `/services` -> `ServicesPage` + `/services/:serviceId` -> `ServiceDetailPage` (**Conflict:** Blueprint requires a single unified `/services` page using anchored discipline sections `#brand-identity`, `#creative-advertising`, `#digital-technology`, `#events-experiences`, `#brand-management-growth`, scrolled with `scroll-padding-top: var(--sticky-offset)` via `ResizeObserver`)
- `/leadership` (+ `/team` redirect at L130-131) -> `LeadershipPage` (**Conflict:** Blueprint folds Leadership into `/about` when team confirmation exists)
- `/contact` (+ `/brief` redirect at L132-133) -> `ContactPage`
- `*` -> `NotFoundPage`
- **Missing:** Conditional `/privacy` route (`AUDIT`: needed only if backend form storage or analytics are introduced later).

### 3. Capabilities & Anchor ID Drift (`src/data/servicesData.ts`)
| Index | Current `id` in `servicesData.ts` | Current Label | Blueprint Locked Anchor ID | Status |
|---|---|---|---|---|
| 01 | `brand-identity` (`L7`) | Brand & Identity | `#brand-identity` | Matches ID; wrongly absorbs Brand Stewardship |
| 02 | `commercial-advertising` (`L40`) | Commercial Creative & Advertising | `#creative-advertising` | ID mismatch; missing focus |
| 03 | `digital-growth` (`L73`) | Digital & Growth | `#digital-technology` | Merged/Misaligned taxonomy |
| 04 | `technology-experiences` (`L106`) | Technology & Digital Experiences | `#events-experiences` (at slot 04) | Slot & ID mismatch |
| 05 | `events-experiences` (`L138`) | Events, Experiences & Activations | `#brand-management-growth` (at slot 05) | **Missing 5th top-level pillar `#brand-management-growth`** |

### 4. Technical Reasons Explaining `riwacreatives.in` Crawlability & Access Issues
1. **Empty CSR Shell (`index.html:77`, `vite.config.ts`):** `index.html` ships only `<div id="root"></div>` + module bundle `/src/main.tsx`. No SSR, SSG, or Vite prerendering exists in `vite.config.ts` or `package.json`, starving search crawlers and link scrapers of route-specific HTML content.
2. **Broken Sitemap Deployment Path (`sitemap.xml` vs `public/robots.txt`):** `public/robots.txt:4` declares `Sitemap: https://riwacreatives.in/sitemap.xml`, but `sitemap.xml` sits at repo root (`c:\Users\Ranjan\web-coming-soon\sitemap.xml`) rather than `public/sitemap.xml`. Vite only copies `public/` into `dist/`. `sitemap.xml` also includes `/leadership` and lacks individual `/work/:slug` URLs.
3. **Domain & Meta Tag Inconsistency:** `useDocumentMeta.ts:11` hardcodes `const BASE_URL = 'https://riwacreatives.vercel.app'` while `index.html:21,55` and `WorkPage.tsx:15` use `https://riwacreatives.in`. Neither `index.html` nor `useDocumentMeta.ts` sets `<link rel="canonical">`. Furthermore, `index.html:25-26` declares `og:image:width="1200"` and `og:image:height="630"` for `/work/solanas-chilli-chicken.jpg`, whose actual natural dimensions are **`819x1024`** (portrait).
4. **No-Cache Meta Headers & Missing Vercel SPA Rewrites:** `index.html:10-12` embeds aggressive `http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"`. No `vercel.json` exists in repo root to guarantee SPA fallback routing or security/cache headers. *(Note: Live external HTTP/DNS response of `https://riwacreatives.in` was **NOT RUN / NOT TESTED** in this offline audit.)*

---

## Section B — Integrations, Forms & Privacy Compliance

### 1. Working Interactive Channels (Preserve)
- **Project Enquiry Submission (`src/components/intake/IntakeSection.tsx:117-144` & `src/components/chapters/TheNextIdea.tsx:109-127`):**
  - Validates required `name` and `email`.
  - Formats structured plain-text brief and invokes `window.location.href = 'mailto:riwacreatives@gmail.com?subject=...&body=...'`.
  - Shows confirmation feedback with one-click Clipboard Copy (`navigator.clipboard.writeText(...)`) and direct WhatsApp fallback — honest client-side pattern with **zero fabricated "Saved to database" claims**.
  - *Blueprint Alignment Note:* Current multi-discipline pills (`CategoryPills.tsx`) and **`BudgetTiers.tsx:8-13`** (`₹2,50,000`–`₹15,00,000+` rupee tier pills) in `/contact` (`IntakeSection.tsx`) conflict with the Blueprint requirement to avoid budget quizzes/friction gates in intake (`TheNextIdea.tsx` uses 5 cleaner category selectors without budget tiers, though naming must match 5 locked services).
- **Direct Contact Endpoints Across Codebase:**
  - **Email:** `riwacreatives@gmail.com` (`IntakeSection.tsx`, `TheNextIdea.tsx`, `EditorialFooter.tsx`, `FinalCTASection.tsx`, `LeadershipSection.tsx`, `RegionalHubModal.tsx`, `MenuDrawer.tsx`, `faqData.ts`).
  - **WhatsApp:** `https://wa.me/917015048144` (`WhatsAppCTA.tsx:5,13`, `EditorialFooter.tsx:136`, `IntakeSection.tsx:403`, `TheNextIdea.tsx:198,341,410`).
  - **Social:** `https://instagram.com/madebyriwa` (`EditorialFooter.tsx:131`, `MenuDrawer.tsx:200,253`, `TheNextIdea.tsx:407`, `index.html:64`). *(Defect: `index.html:30-31` declares unverified Twitter handle `@riwacreatives`.)*

### 2. Storage, Cookies & Telemetry Status
- Zero analytics scripts (`gtag`, `fbq`, `plausible`, Vercel Analytics) and zero `fetch`/`XMLHttpRequest`/`axios` endpoints exist.
- Only browser storage used: `localStorage` key `riwa_theme_preference` (`ThemeContext.tsx:18,35`) and `sessionStorage` key `riwa_intro_seen` (`TransitionContext.tsx:18,27`).
- Privacy posture: Currently zero backend PII transmission; `/privacy` route remains conditional if form endpoints or privacy-friendly analytics are introduced later.

---

## Section C — Content Accuracy, Naming & Brand Governance

### 1. Contradictory Persona & Fabricated Demo Data (High Severity)
| Defect | Exact File & Line | Observed Content | Action Required |
|---|---|---|---|
| **Stray Persona Name** | `src/components/footer/RegionalHubModal.tsx:228` | `"...need an ambitious right-hand person to operate alongside Abhinav Singh..."` | **Remove immediately** (`Ranjan Kumar` is Founder) |
| **Stray Persona Name** | `src/components/manifesto/ManifestoSection.tsx:23` | `"Abhinav and our senior directors personally lead..."` | **Remove immediately** |
| **Unverified Demo Data** | `src/components/footer/RegionalHubModal.tsx:166-188` | `"Solanas Hospitality & DTC Sprint ... Target: ₹2.5 Cr Net Run Rate"` / `"₹2,50,000"` daily ad spend | **Remove unverified demo modal** |
| **Unverified KPI Cards** | `src/components/manifesto/TelemetryCard.tsx:45,67,74,80` | `"+420% Weekend Orders"`, `"5.4x"` ROAS, `"99.4%"` CAPI, `"-34% Lower"` CAC | **Remove fabricated telemetry** |

### 2. Unverified Solanas Metrics & Client Claims (`DEC-12` Blocked)
The metrics `+420% Weekend Orders`, `+340% Dinner Inbounds`, and `6.2% Meta Ads CTR` are hardcoded as `"VERIFIED"` in **7 active files**:
- `src/data/projectsData.ts:23,42` (`verifiedOutcome`)
- `src/components/chapters/TheAttention.tsx:220-235,271-286`
- `src/components/chapters/TheWorld.tsx:236,288-290`
- `src/components/chapters/ThePeople.tsx:195-200`
- `src/components/home/TestimonialsSection.tsx:59-68`
- `src/components/hero/ShowreelViewport.tsx:32,41,50`
- `src/components/manifesto/TelemetryCard.tsx:45`  
Until Ranjan Kumar provides written client confirmation and permission (`DEC-12`), these claims violate studio honesty rules and must be removed or clearly reframed without unverified metrics.

### 3. Unverified Credentials & Brand Assets Misuse
- **`EST. 2024` & `MSME Registered` Claims:** `LeadershipPage.tsx:28`, `EditorialFooter.tsx:219`, `MenuDrawer.tsx:215,262`, `ThePeople.tsx:30`, `ThePointOfView.tsx:404`. Unverified in Blueprint; require founder confirmation (`DEC-15`) with registration specifics or removal.
- **Misplaced Food Art on Concept Projects (`src/data/projectsData.ts`):**
  - `dtc-accelerator-concept` (`L55`): renders `/work/solanas-green-dimsum.png`
  - `hack-uttar-pradesh` (`L88`): renders `/work/solanas-poster.jpg`
  - `horizon-mun` (`L121`): renders `/work/solanas-sushi.png`  
  Displaying Solanas Chinese • Thai restaurant campaign artwork on Developer Hackathon, Model UN, and DTC software cards creates visual confusion. Must be replaced with genuine work, typographic/editorial spec sheets cleanly marked illustrative, or omitted until authentic visuals arrive.
- **Hero Digital Slate Misuse (`HeroSection.tsx:362,495`):** Uses `/work/solanas-poster.jpg` inside the dark digital slate background; visually readable only as texture, but better replaced with genuine digital layout geometry or honest interface wireframe.
- **Official Vector vs Raster Brand Mark Conflict (`DEC-09`):** Pixel sampling of `public/brand/riwa-logo-official.png` (`460x537`) confirms Riwa Orange `#FC7D3C`/`#FD7D3C`, and SHA256 confirms `riwa-logo-transparent.png` is byte-identical (`4EC743...`). However, all three SVG files (`riwa-crow-logo.svg`, `riwa-crow-vector.svg`, `riwa-r-logo.svg`) use `#FF2A55`. **Zero orange SVG brand vector exists.**

---

## Section D — Accessibility (WCAG 2.2 AA), Typography & Motion Audit

### 1. Mathematically Verified sRGB Contrast Failures
| Foreground / Background Pair | Calculated Contrast Ratio | WCAG 2.2 AA Verdict | Affected Repository Locations |
|---|---|---|---|
| `#111116` on `#FD7D3C` | **7.33 : 1** | **PASS (AAA)** | `HeroSection.tsx:403`, `ServicesSection.tsx:75`, `TheRealWorld.tsx:83,201` |
| `#FFFFFF` on `#FD7D3C` | **2.57 : 1** | **CRITICAL FAIL** (even < 3.0:1 Large Text!) | `TheRealWorld.tsx:118-126`, `EventsTakeoverSection.tsx:81-88`, `DifferenceSection.tsx:55-58,77-79` |
| `#EA1E4D` on `#E7E7E9` | **3.55 : 1** | **FAIL Normal Text** (< 4.5:1) | `SelectedWorks.tsx:112-115`, `WhoWeWorkWithSection.tsx:73`, `FAQSection.tsx:44`, `TheWorld.tsx:78,83` |
| `#EA1E4D` on `#F5F4F0` | **3.98 : 1** | **FAIL Normal Text** (< 4.5:1) | `TheAttention.tsx:109,208`, `TestimonialsSection.tsx:45,77`, `AboutRiwaSection.tsx:96`, `HeroMeta.tsx:9-26` |
| `#EA1E4D` on `#FFFFFF` | **4.38 : 1** | **FAIL Normal Text** (< 4.5:1) | `ProcessSection.tsx:104`, `ProjectDetailPage.tsx:60,91,121,148` |
| `#FFFFFF` on `#EA1E4D` | **4.38 : 1** | **FAIL Normal Text** (< 4.5:1) | `HeroSection.tsx:170`, `FinalCTASection.tsx:9,30`, `NotFoundPage.tsx:53`, `BottomDock.tsx:154`, `BudgetTiers.tsx:32`, `CategoryPills.tsx:44` |
| `#111116` on `#EA1E4D` | **4.29 : 1** | **FAIL Normal Text** (< 4.5:1) | `FinalCTASection.tsx:15,46` |
| `#EA1E4D` on `#111116` | **4.29 : 1** | **FAIL Normal Text** (< 4.5:1) | `ThePointOfView.tsx:107,113`, `ThePeople.tsx:25,69,93,137`, `ServicesSection.tsx:98`, `ServiceRow.tsx:43,96`, `LeadershipSection.tsx:62,69,112` |
| `#71717A` on `#E7E7E9` | **3.91 : 1** | **FAIL Normal Text** (< 4.5:1) | `ProjectCard.tsx:51` (`project.year` in light mode) |
| `#C4123D` on `#F5F4F0` / `#E7E7E9` | **5.45 : 1** / **4.86 : 1** | **PASS AA** | Recommended Blueprint light-ground red text token (not yet implemented in repo) |

**Findings:**
- Every normal-size (`< 18.66px bold` / `< 24px regular`) `#EA1E4D` label on both light (`#FFFFFF`, `#F5F4F0`, `#E7E7E9`, `#F7F6F2`) **AND** dark (`#111116`) surfaces falls just below `4.5:1`! Furthermore, `#FFFFFF` text on `#EA1E4D` pills/buttons (`4.38:1`) should use `#C4123D` fill (`>= 5.45:1`) or darkened accessible red fill (`#C4123D` on white = ~6.0:1) for small 12px mono CTA labels, and `#EA1E4D` must stay restricted to display typography (`>= 24px` / `>= 18.66px bold`) or dark-fill UI borders/icons where `>= 3.0:1` applies. On `#111116` dark surfaces, small red text labels require a lighter accessible crimson tint (`>= 4.5:1`, e.g. `#FF5C80` / `#FF4D73`) or crisp white/silver ink with crimson border/accent marks.
- `#FFFFFF` on `#FD7D3C` (`2.57:1`) must be completely eliminated in favor of `#111116` ink (`7.33:1` AAA).

### 2. Typography Compliance Failures (`index.html`, `src/styles/globals.css`, components)
1. **Nonexistent Font Weight 900 on Syne (`index.html:42`):** Requests `family=Syne:wght@700;800;900`, omitting weights 400–600 while requesting unsupported weight `900` (Syne SIL OFL caps at `800`). Over 90 `font-display` elements apply Tailwind `font-black` (`font-weight: 900`), triggering synthetic/fallback weight clamping across browsers.
2. **Focus & Cursor Hazards:** `src/styles/globals.css:103-110` sets `cursor: none !important` whenever `CustomCursor.tsx` runs on fine pointers, violating user expectation/accessibility tooling.
3. **Missing Anchor Scroll Offset:** Neither `globals.css` nor `HeaderHUD.tsx` computes `--sticky-offset` via `ResizeObserver` for `scroll-padding-top`, causing hash jumps (`/#faq`, `/#process`, `/services#...`) to land under the fixed `HeaderHUD` bar.
4. **Interactive Div Role Semantics:** `HeroSection.tsx:304-316` uses a `<div role="button" tabIndex={0}>` instead of native `<button>` or `<Link>`, while `TheRealWorld.tsx:201` / `HeaderHUD.tsx:168` mix fixed minimum tap targets (`34px` on `HeaderHUD.tsx:172` mobile menu button — under 44x44px ergonomic target!).

### 3. Prohibited / Bloated Animation & FX Systems
| Component | Issue | Recommendation |
|---|---|---|
| `src/components/common/SmoothScroll.tsx` | Lenis smooth scroll hijacks native scroll timing | Remove (`ScrollToTop.tsx` Lenis hook too) |
| `src/components/common/CustomCursor.tsx` | Hides OS pointer (`cursor: none !important`), continuous spring tracking | Remove |
| `src/components/common/LiquidArtworkCanvas.tsx` | Raw WebGL fragment shader running continuous RAF loop over Solanas poster (`HeroSection.tsx:326`) | Remove WebGL; use clean static editorial mount / subtle CSS hover |
| `src/components/common/StudioCardWarpLoader.tsx` | Full-viewport `z-[200]` curtain (`600ms + 320ms`) blocking initial LCP visual paint | Remove blocking loader; land immediately on Hero |
| `src/components/common/SparkElement.tsx` & `ChapterIndicator.tsx` | Unrequested floating/left-rail 7-chapter spark morph HUD | Remove per Blueprint |
| `src/components/home/BrandTicker.tsx` & `EventsTakeoverSection.tsx:43` | Continuous `repeat: Infinity` infinite marquee loops | Replace with static editorial strip or restrained CSS interaction |
| `src/components/common/ScrollVelocityMarquee.tsx` | Continuous `useAnimationFrame` scroll marquee (`LeadershipPage.tsx:22`) | Remove |
| `src/App.tsx:76-117` + `MenuDrawer.tsx` | Heavy 3D page rotation tilt (`rotate: 8`, `filter: blur(6px)`) on `#page-main` | Replace with clean accessible drawer (`useScrollLock`, Escape, focus management) |

---

## Section E — Core Web Vitals, Media & SEO Technical Audit

- **Uncompressed Raster Payloads:** Zero `.webp` or `.avif` assets exist in `public/`. `public/work/solanas-chilli-chicken.jpg` (`819x1024`, **561,667 B** / ~548 KiB) is preloaded on `index.html:37` as hero focal proof, and `public/work/solanas-poster.jpg` is **399,919 B** (~391 KiB). `solanas-green-dimsum.png` weighs **312,683 B** despite tiny `363x454`px dimensions (`dalal-mascot.png` = `179,912 B` for `280x492`px).
- **Redundant Brand Binary:** `public/brand/riwa-logo-official.png` and `public/brand/riwa-logo-transparent.png` are **byte-for-byte duplicates** (identical `131,743` bytes & SHA256 `4EC7430440463F7E9ABF5C3D37409D43CADA4045480BA74637E5CA8BBD6714BF`).
- **Hero Paint Latency:** `HeroSection.tsx:326` waits for WebGL shader compilation + texture load inside `LiquidArtworkCanvas` while `StudioCardWarpLoader.tsx` obscures `z-[200]` for up to ~920ms on first visit, directly penalizing FCP and LCP.
- **Missing Explicit `width`/`height` HTML Attributes:** `<img>` tags rely exclusively on Tailwind classes; adding explicit natural `width`/`height` + responsive `srcset` protects CLS.

---

## Section F — Verification Scope & Environment Disclosure

- **Directly Verified in This Session:** Full 114-page reading of `Riwa Creatives Website Strategy Blueprint-2.pdf`; full inspection of repository configuration, routing, contexts, hooks, pages, data modules, SVG vector sources, and chapter/section components; PowerShell file sizes, pixel dimensions (`System.Drawing.Image`), SHA256 checksums, `public/brand/riwa-logo-official.png` pixel color counts, and mathematical WCAG 2.2 sRGB luminance contrast calculations; `git status --short` and `git diff --stat HEAD`.
- **NOT RUN (Blocked by Environment Capabilities):** `tsc -b` TypeScript compile check, `vite build`, ESLint/code formatting, runtime Chrome DevTools visual screenshots, Core Web Vitals / Lighthouse performance & accessibility scans, keyboard/screen-reader testing, and external HTTP/DNS probing of `https://riwacreatives.in` — because `node`, `npm`, `npx`, `pnpm`, and `chrome_devtools` MCP are unavailable in this execution environment. These checks are scheduled as mandatory gates in `IMPLEMENTATION_PLAN.md` once Node tooling / browser testing is available.
