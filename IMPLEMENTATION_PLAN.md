# RIWA CREATIVES — EVIDENCE-BASED IMPLEMENTATION PLAN (PHASE 2)

**Target Workspace:** `c:\Users\Ranjan\web-coming-soon`  
**Strategy Source:** `Riwa Creatives Website Strategy Blueprint-2.pdf` (114 pages)  
**Precondition:** **DO NOT START PHASE 3** until this plan, `AUDIT_REPORT.md`, and `ASSET_AND_CONTENT_INVENTORY.md` are reviewed and explicitly approved in writing by Ranjan Kumar (including resolution of `DEC-09`–`DEC-15` and the dirty working tree).

---

## 1. Blueprint vs. Current Repository Comparison Matrix

| Dimension | `HEAD@db4d0a2` & Dirty Working Tree (`src/`) | Strategy Blueprint Locked Specification | Plan Action |
|---|---|---|---|
| **Home Page Structure** | `HEAD`: Worktable Hero + `BrandTicker` + 6 chapter components + `ManifestoSection` + `EditorialFooter`.<br>**Working Tree:** `BrandTicker` replaced by 5 `ChapterTransition` bars; WebGL in Hero; `NoiseOverlay` removed. | Tight editorial rhythm centered on **Direction A (Anchored Editorial Worktable Hero)** (`IDEAS, MADE unreasonable.`), 5 capability pillars, curated Work preview (`Featured` + `Archive`), signature `#FD7D3C` Events stage takeover (`#111116` ink), concise Studio ethos, direct Intake. | Keep React component architecture; strip redundant chapter chrome (`ChapterIndicator`, `SparkElement`, WebGL `LiquidArtworkCanvas`, `StudioCardWarpLoader`) and consolidate overlapping sections (`TheRealWorld` vs `EventsTakeoverSection`, double `ManifestoSection`). |
| **Information Architecture / Routes** | 8+ pages (`/`, `/work`, `/work/:id`, `/about`, `/services`, `/services/:id` x5, `/leadership`, `/contact`) + legacy redirects | Clean 5-destination nav: **`/` (Home), `/work` (+ `/work/:slug`), `/services` (unified anchored page), `/about` (includes Leadership + FAQ), `/contact`**, plus conditional `/privacy`. Keep backward redirects (`301`/router redirect) for legacy URLs (`/leadership`->`/about`, `/services/:id`->`/services#:id`). | Refactor `App.tsx` + `HeaderHUD.tsx` + `EditorialFooter.tsx` + `MenuDrawer.tsx`; collapse 5 `/services/:id` routes into anchored `/services` sections with legacy hash redirects. |
| **Capabilities Taxonomy** | 5 items where `digital-growth` & `technology-experiences` split, and **`Brand Management & Growth` lacks its own pillar** | 5 locked anchors:<br>1. `#brand-identity`<br>2. `#creative-advertising`<br>3. `#digital-technology`<br>4. `#events-experiences`<br>5. **`#brand-management-growth`** | Restructure `src/data/servicesData.ts` to match all 5 locked anchors, headings, and deliverables cleanly. |
| **Work / Archive View** | 3-tier hierarchy (`Featured` / `Supporting` / `Archive`) displaying Solanas food art on `Hack UP`, `Horizon MUN`, and `DTC Accelerator`; unverified `+420%` KPIs | Editorial **2-tier hierarchy** (`Featured` + `Archive`), **zero filter tabs**, strictly honest real/confirmed cases with authentic visuals only. | Clean `src/data/projectsData.ts`; decouple mismatched Solanas images; remove unverified metrics until `DEC-12` approval. |
| **Contact & Intake** | Preserved `mailto:riwacreatives@gmail.com` + clipboard copy + WhatsApp `917015048144`; `/contact` adds INR `BudgetTiers` & 7 category pills | Fast, low-friction intake preserving `mailto:` / WhatsApp / copy brief without mandatory budget quiz gates (`DEC` low-friction conversion). | Preserve `mailto:` + copy + WhatsApp UX; align categories cleanly to the 5 locked studio capabilities + `"Something Else"`; remove hardcoded INR budget quiz unless requested. |
| **Colour & Contrast** | `#EA1E4D` used for small `<24px` labels on light (`3.55–4.38:1` FAIL) and dark (`4.29:1` FAIL); white text `#FFFFFF` on `#FD7D3C` orange (`2.57:1` FAIL) | **WCAG 2.2 AA strict:** `#111116` on `#FD7D3C` (`7.33:1` AAA); `#C4123D` (`>=4.86:1`–`5.45:1` AA) for normal red text on light surfaces; `#EA1E4D` only `>=24px` or large/non-text accents. Interactive border controls `>= 3.0:1`. | Upgrade CSS variables in `src/styles/globals.css` & `tailwind.config.js`; fix every orange/white headline & small crimson label sitewide. |
| **Typography** | `Syne:wght@700;800;900` (`index.html:42`); `font-black` (`900`) everywhere | Load **Syne `400;500;600;700;800`** (upright only; max weight `800` -> `font-extrabold`), `Instrument Serif` `400` regular/italic (never bold), `Plus Jakarta Sans` `400..700/800`, `JetBrains Mono` w/ `font-variant-ligatures: no-contextual`. | Fix Google Fonts `<link>` in `index.html`, update global utilities, convert `font-black` -> `font-extrabold` on `.font-display` elements. |
| **Motion & Scroll** | Lenis `SmoothScroll.tsx`, `CustomCursor.tsx` (`cursor: none !important`), WebGL `LiquidArtworkCanvas.tsx`, blocking `StudioCardWarpLoader.tsx`, infinite marquees, unused `gsap` | Native browser scroll + `scroll-padding-top: var(--sticky-offset)` (`ResizeObserver`), visible OS pointer, static/CSS micro-interactions, full `prefers-reduced-motion: reduce` support, clean LCP without blocking curtains. | Uninstall `lenis` & `gsap` (clean `package.json`); delete `SmoothScroll`, `CustomCursor`, `LiquidArtworkCanvas`, `StudioCardWarpLoader`, infinite `repeat: Infinity` marquees, `ChapterIndicator`, `SparkElement`. |
| **SEO & Hosting (`riwacreatives.in`)** | Pure CSR `<div id="root"></div>`, root `sitemap.xml` omitted from `dist/`, `vercel.app` meta leak, zero `vercel.json` | Prerendered static HTML routes (`vite` build post-prerender or SSG), `public/sitemap.xml` matching live routes, unified `https://riwacreatives.in` canonical tags, `1200×630` OG asset, clean `vercel.json`. | Move `sitemap.xml` -> `public/`, add prerendering + `vercel.json` rewrites + canonical/OG fix. |

---

## 2. Mandatory Pre-Phase-3 Git Safety & Branching Gate

Because the repository currently has **13 modified tracked files and 2 untracked files** in `c:\Users\Ranjan\web-coming-soon` from prior uncommitted D2 work:

1. **Snapshot First (Zero Data Loss):** Create an archival snapshot branch from the current working tree (e.g., `git checkout -b archive/pre-blueprint-d2` -> stage `src/` changes -> commit WIP snapshot, excluding temporary/PDF artifacts if kept untracked or `.gitignore`-checked).
2. **Return to Clean Baseline (`HEAD@db4d0a2` or `main`):** Branch cleanly into `git checkout -b feat/blueprint-implementation main` so Phase 3 builds incrementally from verified committed state rather than mixing half-finished D2 edits.

*(Do NOT run any git commands until Phase 3 is authorized by the founder.)*

---

## 3. Founder Approval Checklist (`DEC-09`–`DEC-15` + Repo Decisions)

**Phase 3 implementation cannot finalize live copy, vectors, or case studies cleanly without Ranjan Kumar's written answers on these 7 items:**

| ID | Blocking Question / Asset Needed | Current Gap in Repo | Default Fallback if Unanswered |
|---|---|---|---|
| **DEC-09** | **Approve Official Orange Vector Mark (`#FD7D3C` SVG):** Confirm `riwa-logo-official.png` orange (`#FD7D3C`) & authorize creating a matching SVG vector (`#FD7D3C` + ink/white) while keeping `#C4123D` crimson for WCAG AA light-ground text. | All 3 `.svg` files in `public/brand/` use deprecated `#FF2A55`. `riwa-logo-transparent.png` is duplicate. | Create faithful clean vector SVG from `riwa-logo-official.png` & delete duplicate PNG. |
| **DEC-10** | **Working-Tree Resolution:** Confirm discarding/archiving the uncommitted Phase D2 `ChapterTransition.tsx` + `LiquidArtworkCanvas` hero changes in favor of the clean Direction A Architecture Plan. | 13 dirty working-tree files conflict with Blueprint rules. | Snapshot WIP to archive branch, implement clean Direction A on new feature branch. |
| **DEC-11** | **Hero Tier 1 Visual Approval & `DEC-12` Solanas Sign-off:** Supply client permission + real verified brief, role credits, and confirm whether `+420%`, `+340%`, `6.2%` have documentary proof or should be replaced with qualitative verified case narrative. | Hardcoded in 7+ files as `"VERIFIED CLIENT DATA"` without confirmation. | Strip all unconfirmed `%` / CTR KPIs completely; present qualitative art direction scope cleanly until confirmed. |
| **DEC-13** | **Conceptual Projects (`Hack UP`, `Horizon MUN`, `DTC Accelerator`):** Supply authentic event/UI screenshots if real; otherwise confirm removing mismatched Solanas food photos and cutting unsubstantiated concept cards. | Food photos (`solanas-poster.jpg`, `solanas-sushi.png`, `solanas-green-dimsum.png`) placed on event & tech cards. | Cut `horizon-mun` & placeholder `dtc-accelerator`; keep Events capabilities + honest `#FD7D3C` stage/pass architecture with zero food imagery. |
| **DEC-14** | **Founder Portrait (`public/brand/founder-ranjan.*`) & Team Profiles:** Provide portrait photo of Ranjan Kumar and names/portraits/roles of any real collaborators to include on `/about`. | `"RK. [REAL PHOTO PENDING]"` placeholder (`ThePeople.tsx:55`, `LeadershipSection.tsx:56`). | Clean typographic founder block on `/about` with no `"PENDING UPLOAD"` placeholder text and no fake squad cards (`Studio Creative Squad`, etc.). |
| **DEC-15** | **Legal, Credentials & Collective Details:** Confirm `EST. 2024`, `Govt. of India MSME` registration status/Udyam proof, whether **Brand Dalal** stays public, X/Twitter `@riwacreatives`, and whether `/privacy` + analytics are wanted now. | Unverified MSME banner in footer/drawer/home; conflicting `"Abhinav Singh"` in modal/manifesto. | Purge `"Abhinav Singh"` immediately; remove unverified MSME/`@riwacreatives` claims until verified; omit `/privacy` if zero tracking/backend DB is added. |

---

## 4. Dependency-Aware Phase 3–11 Execution Sequence

Once approved, execute incrementally in small verifiable stages (reusing Vite 6 + React 19 + Tailwind CSS + React Router v7):

### Stage I — Foundation, Cleanup & Compliance Tokens (Blueprint Phases 1–3)
1. **Git Snapshot & Clean Feature Branch:** Archive dirty D2 working tree safely; branch `feat/blueprint-implementation` from `main`.
2. **Purge Persona/Fabrication & Unused Libs:**
   - Delete `"Abhinav Singh"` (`RegionalHubModal.tsx:228`, `ManifestoSection.tsx:23`), fabricated `TelemetryCard.tsx` (`5.4x ROAS`, `99.4% CAPI`), demo `RegionalHubModal` INR sprint metrics, `SmoothScroll.tsx` (Lenis), `CustomCursor.tsx`, `LiquidArtworkCanvas.tsx`, `StudioCardWarpLoader.tsx`, `SparkElement.tsx`, `ChapterIndicator.tsx`, `ScrollVelocityMarquee.tsx`.
   - Remove `lenis` and `gsap` from `package.json`.
3. **Design Tokens, Fonts & Sticky Offset (`index.html`, `src/styles/globals.css`, `tailwind.config.js`):**
   - Fix Google Fonts link in `index.html:42` -> `Syne:wght@400;500;600;700;800`, `Instrument+Serif:ital@0;1`, `Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800`, `JetBrains+Mono:wght@400;500;600;700`.
   - Define semantic tokens in `globals.css`: `--brand-red: #EA1E4D`, `--brand-red-accessible: #C4123D` (for all `<24px` light-ground text), `--brand-red-dark-text: #FF5C80` (for `<24px` dark-ground red text >= 4.5:1), `--brand-orange: #FD7D3C`, `--ink-black: #111116`, `--warm-paper: #F5F4F0`. Enforce `#111116` on `#FD7D3C` everywhere (`7.33:1` AAA); **ban white text on `#FD7D3C`**.
   - Replace `font-black` on `.font-display` with `font-extrabold` (max genuine weight `800` for Syne); verify `Instrument Serif` never uses `font-bold`.
   - Remove `cursor: none !important` and install dynamic `ResizeObserver`-driven `--sticky-offset` + `html { scroll-padding-top: var(--sticky-offset); }` synced to `HeaderHUD` height.
   - Add `prefers-reduced-motion: reduce` stylesheet guard + Framer `<MotionConfig reducedMotion="user">`.

### Stage II — Brand Vectors, Media Pipeline & SEO Setup (Blueprint Phases 4 & 10 Prep)
4. **Asset Consolidation & Optimization:**
   - Remove duplicate `riwa-logo-transparent.png`, convert approved raster work (`solanas-chilli-chicken.jpg`, `solanas-poster.jpg`, `riwa-hiring-poster.jpg`, `dalal-mascot.png`, `founder-ranjan.*`) to `.avif` + `.webp` + responsive `<picture>` / `srcset` (`sizes`), add explicit HTML `width` & `height`.
   - Create verified `#FD7D3C` vector SVG logo mark (`DEC-09`) and `1200×630` static OG social card (`public/og-riwa.jpg`).
   - Move `sitemap.xml` -> `public/sitemap.xml` with clean canonical `https://riwacreatives.in` URLs; unify `useDocumentMeta.ts` (`BASE_URL = 'https://riwacreatives.in'`) with `<link rel="canonical">` updates per route.
   - Add `vercel.json` (clean SPA fallback rewrites + immutable cache headers on `/assets/*` hashed bundles, removing `no-store` meta tag in `index.html:10-12`).

### Stage III — Information Architecture, Homepage Worktable & Dedicated Pages (Blueprint Phases 5–8)
5. **Navigation & Route Refactor (`App.tsx`, `HeaderHUD.tsx`, `MenuDrawer.tsx`, `EditorialFooter.tsx`, `BottomDock.tsx`):**
   - Limit primary HeaderHUD links to 5 clean items (`Work`, `Services`, `About`, `Contact` / `Start a Project` CTA pill + mobile menu/theme utility), ensuring all interactive targets `>= 44×44px` and accessible focus trapping/Restore focus inside `MenuDrawer`.
   - Route `/leadership` -> `<Navigate to="/about#leadership" replace />` and `/services/:serviceId` -> `<Navigate to="/services#:serviceId" replace />` (mapping legacy slugs cleanly!).
6. **Homepage Direction A — Anchored Editorial Worktable & Flow (`HeroSection.tsx`, `HomePage.tsx`):**
   - Render Direction A Hero (`IDEAS, MADE unreasonable.`, `Independent Creative & Growth Studio.`, crisp warm rag-paper editorial surface, 70/30 desktop visual hierarchy pairing Solanas mounted print proof + subordinate Brand Folio, Digital UI Slate, and Matte `#FD7D3C` Event Pass with `#111116` ink — pure CSS tactile depth, **zero WebGL loop**).
   - Connect cleanly into disciplined editorial chapters/bands: Selected Work 2-tier showcase (only verified real work), 5 Capabilities summary linking to `/services#<anchor>`, `#FD7D3C` Events & Activations showcase (`#111116` text, zero stock/food mismatch photos), Studio Ethos / People (`Ranjan Kumar`), and crisp Direct Enquiry (`mailto:` + copy + WhatsApp).
   - Remove redundant duplicate sections (`HomePage.tsx` vs `src/components/home/*`), infinite CSS/Motion marquees, and floating indicators.
7. **Dedicated Pages Refactor:**
   - `/work` (`WorkPage.tsx`) & `/work/:projectId` (`ProjectDetailPage.tsx`): 2-tier editorial layout (`Featured` + `Archive`, no filter tabs), full-resolution asset matching (`>=1000px` hero plates only), honest scope narrative without unverified KPIs.
   - `/services` (`ServicesPage.tsx`): Unified anchored page containing all 5 locked capabilities in exact order (`#brand-identity`, `#creative-advertising`, `#digital-technology`, `#events-experiences`, **`#brand-management-growth`**) with sticky in-page anchor index respecting `--sticky-offset`.
   - `/about` (`AboutPage.tsx`): Studio origin, multidisciplinary philosophy, Ranjan Kumar founder section (from `LeadershipSection` refactored cleanly without fake cards), and studio FAQ.
   - `/contact` (`ContactPage.tsx`): Low-friction commission flow matching the 5 locked services + `"Something Else"`, preserving working `mailto:riwacreatives@gmail.com`, clipboard copy confirmation, and WhatsApp (`917015048144`) links cleanly without intimidating budget-tier gatekeepers.

### Stage IV — Motion, Performance, Accessibility & Prerender QA (Blueprint Phases 9–11)
8. **Static HTML Prerendering & Meta Parity:** Configure build-time prerendering (e.g., `vite-plugin-prerender` / Puppeteer static snapshot script or Vite SSR pre-render) outputting crawlable HTML for `/`, `/work`, `/work/solanas-campaign`, `/services`, `/about`, `/contact` so Googlebot & social bots read full semantic HTML immediately on `riwacreatives.in`.
9. **Mandatory Quality & Compliance Gates Before Launch:**
   - **Type & Build Gate:** Zero errors on `tsc -b` & `vite build`; verify `dist/sitemap.xml`, `dist/robots.txt`, and `dist/*/index.html` prerendered markup.
   - **WCAG 2.2 AA Contrast & Keyboard Gate:** Automated audit (`axe-core` / Lighthouse Accessibility `>= 98–100`) + manual verification at **200% & 400% zoom**, 320px/390px/768px/1280px/1440px breakpoints, Tab order, Escape key, `scroll-padding-top` anchor landing clearance, and `prefers-reduced-motion: reduce`.
   - **CWV & Bundle Gate:** Lighthouse Performance `>= 95`, LCP `< 2.0s`, CLS `< 0.05`, zero `lenis`/`gsap`/WebGL scripts loaded, hero LCP image served as optimized `<picture>` `.avif`/`.webp`.
   - **Privacy & Content Honesty Audit:** Zero unconfirmed metrics, zero `"Abhinav Singh"`, zero placeholder `"Coming Soon"` blocks, working `mailto:` & `wa.me/917015048144` smoke test.
