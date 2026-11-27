# RIWA CREATIVES — BLUEPRINT-3 FINAL ALIGNMENT & DELTA REPORT

**Governing Strategy Document:** [Riwa Creatives Website Strategy Blueprint-3.pdf](file:///c:/Users/Ranjan/web-coming-soon/Riwa%20Creatives%20Website%20Strategy%20Blueprint-3.pdf) (**Final Corrected Edition**, `125` pages, `1,686,417` bytes)  
**Superseded Draft:** [Riwa Creatives Website Strategy Blueprint-2.pdf](file:///c:/Users/Ranjan/web-coming-soon/Riwa%20Creatives%20Website%20Strategy%20Blueprint-2.pdf) (*Revised Final Edition*, `114` pages, `1,595,005` bytes)  
**Compared Repository Documents:** [PHASE_3_PREPARATION.md](file:///c:/Users/Ranjan/web-coming-soon/PHASE_3_PREPARATION.md), [IMPLEMENTATION_PLAN.md](file:///c:/Users/Ranjan/web-coming-soon/IMPLEMENTATION_PLAN.md), [AUDIT_REPORT.md](file:///c:/Users/Ranjan/web-coming-soon/AUDIT_REPORT.md), [ASSET_AND_CONTENT_INVENTORY.md](file:///c:/Users/Ranjan/web-coming-soon/ASSET_AND_CONTENT_INVENTORY.md)  
**Execution Posture:** Strictly Read-Only Alignment & Consistency Verification — **Zero Git commands executed; zero source code, assets, packages, or deployment configs modified.**

---

## 1. Material Differences Between Blueprint-2 and Blueprint-3 Affecting Implementation

Inspecting all 125 pages of `Blueprint-3.pdf` against `Blueprint-2.pdf` confirms **six concrete specification updates** (`Blueprint-3` pp. 117–121) plus Asset Register and Decision Log standardization:

1. **Permission-Aware Three-Tier Hero Priority Rule (`pp. 1, 28, 34, 37–39, 73, 77, 80, 84, 98–99, 118`):**
   - *Blueprint-2:* Treated Solanas (`AST-C01`) as the default desktop/mobile Hero focal visual.
   - *Blueprint-3:* **Strictly prohibits publishing unapproved Solanas client artwork merely because `public/work/solanas-chilli-chicken.jpg` exists in the repo.** Locks explicit `permissionApproved: boolean` gating and a 3-tier fallback:
     - **Priority 1:** Real Solanas campaign artwork (`AST-C01`) **only** after written publication permission is confirmed (`DEC-12`).
     - **Priority 2:** Another suitable real Riwa studio artefact (`AST-R01` Recruitment Poster or `AST-S02` Brand Dalal Mascot) **only** if verified and explicitly approved for public publication (`DEC-13`).
     - **Priority 3:** A restrained typographic/editorial composition with deliberate negative space on `#F5F4F0` Warm White (zero placeholder boxes, zero unapproved imagery, zero fabricated supporting objects). Under Priority 3 (`p. 69`), the Hero display heading becomes the LCP element, making fast webfont loading with `font-display: swap` the primary LCP priority.
2. **Complete Removal of `/work` Filter-Tab Threshold (`pp. 2, 35, 53, 73, 77, 81, 102–103, 108, 118`):**
   - *Blueprint-2:* Contained an automatic filter-tab threshold rule once `>= 6` Featured Stories existed.
   - *Blueprint-3:* **Permanently removes the `>= 6` project filter threshold and forbids generic category filter tabs** (or any replacement filtering system) on `/work`. Retains Tier 1 Featured Stories, Tier 2 Creative Archive (`#creative-archive`), explicit `CLIENT PROJECT` / `STUDIO IP` / `EVENT INITIATIVE` badges, and editorial grouping.
3. **Contact-Channel Verification Fallbacks (`pp. 11, 36, 48–49, 54, 73, 76, 79, 82, 96, 106–107, 119`):**
   - *Blueprint-2:* Treated existing repo email/WhatsApp strings as display-ready.
   - *Blueprint-3:* Enforces centralized verification gating for public display (`email: null`, `whatsappUrl: null` until explicitly confirmed under `DEC-14`). While Blueprint-3 uses generic `"contact-form backend"` terminology in places, this repository has **no server-side backend**: the existing enquiry submission strictly invokes client-side `mailto:` to open the visitor's default email client alongside the client-side `Copy Formatted Brief` workflow (`IntakeSection.tsx` & `TheNextIdea.tsx`). Those client-side submission and copy-brief workflows stay preserved, while unverified public email links, email click-to-copy buttons, WhatsApp links/CTAs, social links, and studio city are hidden cleanly (`#contact`, Ch. 07, Footer) so zero unverified links or dead copy buttons render. (See Section 6 below.)
4. **Core Web Vitals & Ban on Pre-Audit Numeric Guarantees (`pp. 3, 69–70, 83, 117`):**
   - Fixes Blueprint-2's `CLS <= 0.194` footnote collision to **`CLS <= 0.1`**, locking Google Field Core Web Vitals Good thresholds (75th percentile, mobile & desktop independently) as **`LCP <= 2.5s`**, **`INP <= 200ms`** (`TBT < 200ms` lab proxy), and **`CLS <= 0.1`**. Explicitly forbids pre-audit numeric Lighthouse score guarantees before running actual build diagnostics.
5. **Validated Antigravity Rules Schema (`pp. 71–75, 117–118`):**
   - Separates fenced plain-Markdown `AGENTS.md` (zero YAML frontmatter) from `.agents/rules/accessibility-performance.md` (fenced `---` YAML frontmatter, lowercase `trigger: glob`, quoted comma-separated string `globs: "*.css, **/*.css, ..."` to avoid `yaml: unmarshal errors: cannot unmarshal !!seq into string`, `<= 24 KB`).
6. **Clarified Phase 1–2 Document Scope (`pp. 73, 76, 78–79, 118–119`):**
   - Removes `"7 deliverables"` ambiguity; standardizes on 3 base Phase 1–2 files (`AUDIT_REPORT.md`, `ASSET_AND_CONTENT_INVENTORY.md`, `IMPLEMENTATION_PLAN.md`), allowing extra review files (`PHASE_3_PREPARATION.md`, `BLUEPRINT_FINAL_ALIGNMENT.md`) only where genuinely needed. Refines competitive research claims without altering architecture.

---

## 2. Confirmed Alignment

The following decisions and technical rules align **100%** across `Blueprint-3.pdf` and your written approvals:

- **Git Preservation Strategy:** Snapshot only the **13 modified tracked files** plus **`src/components/chapters/ChapterTransition.tsx`** onto `archive/pre-blueprint-d2` (by explicit file paths — **never** `git add src/` — excluding PDFs and planning `.md` files), preserve `main` untouched at `db4d0a2`, create `feat/riwa-blueprint-implementation` from `main`, and **never push remotely**.
- **Brand Core & 5 Capabilities:** Exact Hero statement (`IDEAS, MADE unreasonable.`), descriptor (`Independent Creative & Growth Studio.`), and 5 centralized capabilities/anchors (`#brand-identity`, `#creative-advertising`, `#digital-technology`, `#events-experiences`, `#brand-management-growth`).
- **Four Locked OFL-1.1 Fonts (`pp. 3, 60–65, 79`):** `Syne` (Variable `400–800`, upright only — never weight `900` or italic; `700` Hero/`h1`/`h2`, `600` subheads, `800` Footer `RIWA` mark only), `Instrument Serif` (Static `400` Regular & Italic only — never bold `>= 600`), `Plus Jakarta Sans` (Variable `200–800`; `400` body, `500/600` UI buttons), and `JetBrains Mono` (Variable `100–800`; `400/500`, `font-variant-ligatures: no-contextual`).
- **WCAG 2.2 AA/AAA Color & Offset Guardrails (`pp. 55–59, 67–69`):** Charcoal `#111116` ONLY on `#FD7D3C` Signature Orange (`7.32:1` truncated, AAA; zero white `#FFFFFF`/`#F5F4F0` text on orange), `#EA1E4D` limited to `>= 24px` display text & UI accents, `#C4123D` (`5.45:1` AA on Warm White / `4.85:1` AA on Light Grey) for normal red text, `#55555F` / `#8E8E9A` interactive UI borders (`SC 1.4.11 >= 3.0:1`), dynamic `--sticky-offset` (`ResizeObserver`) driving `scroll-padding-top` & `scroll-margin-top` (`SC 2.4.11`), focus-trapped modals/drawers, and `24x24px` floor / `>= 44x44px` standard touch targets.
- **Rejected Bloat Exclusions (`DEC-05`):** Purge Lenis `SmoothScroll.tsx`, `CustomCursor.tsx` (`cursor: none !important`), WebGL `LiquidArtworkCanvas.tsx`, `StudioCardWarpLoader.tsx`, `SparkElement.tsx` / `ChapterIndicator.tsx`, `BrandTicker.tsx` / `ScrollVelocityMarquee.tsx` infinite loops, `gsap`, `TelemetryCard.tsx`, demo INR sprints/budget tiers, and stray `"Abhinav Singh"` persona text.
- **Honesty & Placeholder Governance:** Strict separation of `CLIENT PROJECT`, `STUDIO IP` / `STUDIO CULTURE`, and `EVENT INITIATIVE`; log any missing copy/assets in `MISSING_CONTENT_REPORT.md` using dev-only `[PLACEHOLDER — REQUIRES RIWA INPUT: ...]` (or `[PREVIEW PLACEHOLDER — ...]`) blocked from public release; zero fabricated quotes, bios, metrics, or JSON-LD placeholders.

---

## 3. Canonical Asset Register Verification (`AST-*` IDs & `AST-S02` / Brand Dalal Resolution)

Auditing all 12 canonical entries in `Blueprint-3.pdf` Deliverable 6 (`pp. 84–95`) against [ASSET_AND_CONTENT_INVENTORY.md](file:///c:/Users/Ranjan/web-coming-soon/ASSET_AND_CONTENT_INVENTORY.md) and actual files in `public/` resolves every numbering discrepancy cleanly:

### A. Canonical Blueprint-3 `AST-*` Reconciliation Table (Zero Guesswork)

| Canonical Blueprint-3 ID (`p. ref`) | Blueprint-3 Asset & Intended Locations | Repo Inventory ID Used in Phase 2 (`ASSET_AND_CONTENT_INVENTORY.md`) | Verified Local Repo File(s) (`public/`) | Reconciliation & Resolution for Phase 3 |
|---|---|---|---|---|
| **`AST-C01`** (`p. 84–85`) | **Solanas Campaign (Hero / Primary Print Proof)** — Hero Priority 1 (ONLY after written permission), Home Ch. 03 Spread 01, `/work/solanas`, `/services#creative-advertising` | `AST-C01` *(Matches)* | [solanas-chilli-chicken.jpg](file:///c:/Users/Ranjan/web-coming-soon/public/work/solanas-chilli-chicken.jpg) (`561,667 B`, `819x1024`) | **ID Aligned.** Keep behind `permissionApproved: false` until `DEC-12` clears; convert to AVIF/WebP (`<=250 KB` mobile / `<=320 KB` desktop targets) only if cleared. |
| **`AST-C02`** (`p. 85`) | **Solanas Campaign (Secondary Gallery Frame)** — `/work/solanas` Final Work Gallery | `AST-C02` (`solanas-poster.jpg`) + extended local slots `AST-C03`..`C05` | [solanas-poster.jpg](file:///c:/Users/Ranjan/web-coming-soon/public/work/solanas-poster.jpg) (`399,919 B`, `815x1024`) *(plus local low-res derivatives — see Section B below)* | **ID Aligned for `solanas-poster.jpg`.** Remove `solanas-poster.jpg` from Hero Digital Slate & `hack-uttar-pradesh`; restrict `AST-C02` strictly to `/work/solanas` Final Work Gallery (gated behind `DEC-12`). |
| **`AST-S01`** (`p. 86, 121`) | **Riwa Brand Identity (Official Logo)** — Target SVG (`<=20 KB`) + `>=112x112px` raster; Global Header, Favicon, Schema `Organization.logo`, OG Card | `AST-S01` (`riwa-logo-official.png`) *(while `ASSET_AND_CONTENT_INVENTORY.md` also split duplicate PNG to `AST-S02`, mascot JPG to `AST-S03`, legacy SVGs to `AST-S04`..`S06`, and vector task to `AST-M03`)* | [riwa-logo-official.png](file:///c:/Users/Ranjan/web-coming-soon/public/brand/riwa-logo-official.png) (`131,743 B`, `460x537`, `#FC7D3C`/`#FD7D3C`) + legacy `#FF2A55` SVGs + duplicate PNG | **Canonical Logo ID = `AST-S01`.** All official logo tasks (`riwa-logo-official.png`, legacy `#FF2A55` SVG replacement, and duplicate `riwa-logo-transparent.png` removal) consolidate under **`AST-S01`** (`DEC-09` & `DEC-13`). |
| **`AST-S02`** (`p. 87–88, 121`) | **Brand Dalal Mascot (`STUDIO IP`)** — `/work#creative-archive`, optional Home Ch. 03 (Studio IP spread) or Ch. 04 editorial spot, `/services#brand-identity`, optional Hero Priority 2 candidate ONLY if founder approves | **CONFLICT:** Inventory assigned `AST-S02` to duplicate `riwa-logo-transparent.png` and pushed Brand Dalal to **`AST-S07`** (`L21, L26`) | [dalal-mascot.png](file:///c:/Users/Ranjan/web-coming-soon/public/brand/dalal-mascot.png) (`179,912 B`, `280x492`) | **DISCREPANCY RESOLVED:** **`AST-S02` IS canonically the Brand Dalal Mascot (`public/brand/dalal-mascot.png`), NOT `riwa-logo-transparent.png`.** Phase 3 code/data must assign `AST-S02` strictly to `dalal-mascot.png` (labelled `STUDIO IP`, never `CLIENT PROJECT`, subject to `DEC-13` approval) and treat `riwa-logo-transparent.png` purely as a redundant duplicate of `AST-S01`. |
| **`AST-R01`** (`p. 88–90, 121`) | **Riwa Recruitment Poster (`STUDIO CULTURE`)** — Home Ch. 06, `/about#studio-culture`, `/work#creative-archive`, candidate Hero Priority 2 artefact ONLY if Solanas is pending and founder approves | `AST-R01` *(Matches)* | [riwa-hiring-poster.jpg](file:///c:/Users/Ranjan/web-coming-soon/public/brand/riwa-hiring-poster.jpg) (`114,344 B`, `791x1024`) | **ID Aligned.** Subject to `DEC-13` founder publishing sign-off; remove stray `"Abhinav Singh"` modal copy associated with hiring. |
| **`AST-E01`** (`p. 90–91`) | **Hack Uttar Pradesh 2026 (`HACK_UP-X-RIWA — OBSERVED`)** — Home Ch. 05 Events (`#FD7D3C`), `/services#events-experiences`, optional `/work` (`EVENT INITIATIVE`) | `AST-E01` *(Inventory also added `AST-E02` for `horizon-mun`)* | **MISSING** (Repo currently misuses `solanas-poster.jpg`) | **ID Aligned for `AST-E01`.** Remove `solanas-poster.jpg`; keep **BLOCKED** under `DEC-15`. Drop invented `horizon-mun` (`AST-E02`). |
| **`AST-M01`** (`p. 92`) | **Ranjan Kumar Editorial Portrait** (`~1200x1500px 4:5`, `<=200 KB`) — Home Ch. 06, `/about` | **CONFLICT:** Inventory assigned Founder Portrait to **`AST-P01`** (`L63`) and used `AST-M01` for OG Image (`L71`) | **MISSING** (`FOUNDER_PHOTO_SRC = null` in `ThePeople.tsx:7`) | **Adopt Blueprint-3 `AST-M01`.** Render dev-only `[PLACEHOLDER]` or omit cleanly until supplied (`DEC-13`); remove `"REAL PHOTO PENDING"` public text. |
| **`AST-M02`** (`p. 92`) | **Approved Documentary Event Photography / Collateral** (`16:10`, `<=280 KB`) — Home Ch. 05 Events (`#FD7D3C`), `/services#events-experiences` *(needed if Hack UP photos unavailable)* | **CONFLICT:** Inventory assigned `AST-M02` to Digital/Brand case visuals (`L72`) | **MISSING** | **Adopt Blueprint-3 `AST-M02`.** Remediates missing event photography alongside `AST-E01` (`DEC-15`). |
| **`AST-M03`** (`p. 92–93`) | **Additional Verified Client Case Sets (`Brand & Identity`, `Digital & Technology`, `Brand Management & Growth`)** (`<=300 KB`) — Home Ch. 03, `/work`, `/services` | **CONFLICT:** Inventory placed these under `AST-M02` (`L72`) and put Orange Vector Logo at `AST-M03` (`L73`) | **MISSING** *(Optional for preview; recommended before broad promotion)* | **Adopt Blueprint-3 `AST-M03`.** Until supplied, omit placeholder slots cleanly or mark preview-only; never fill Digital/Tech with Solanas food photos. |
| **`AST-M04`** (`p. 93–94`) | **Open Graph Social Share Card (`og-image.png`, `1200x630px`, `<=200 KB`)** — Global `<meta property="og:image">` | **CONFLICT:** Inventory put OG Card at `AST-M01` (`L71`) and Signed Testimonials at `AST-M04` (`L74`) | **MISSING** (`index.html:24-26` misdeclares `819x1024` Solanas portrait as `1200x630`) | **Adopt Blueprint-3 `AST-M04`.** Generate static `1200x630` Riwa Open Graph card in Phase 10 after `DEC-09` logo hex lock (without unapproved client photos). Drop `AST-M04` testimonial placeholder card completely. |
| **`AST-M05`** (`p. 94–95`) | **Optional Real Supporting Hero Artefact(s)** (`<=160 KB`) — Home Ch. 01 Worktable beside Priority 1/2 focal piece *(ONLY if genuine & approved — never fabricated)* | **CONFLICT:** Inventory used `AST-M05` for AVIF/WebP derivatives (`L75`) | **MISSING / Strictly Optional** | **Adopt Blueprint-3 `AST-M05`.** Hero ships cleanly under Priority 1, 2, or 3 alone with zero synthetic Hero Folio/Slate/Pass props. (AVIF/WebP optimization belongs to `AST-C01/C02/S02/R01` pipeline rather than a separate ID.) |
| **`AST-P01`** (`p. 95–96`) | **`PreviewPlaceholder` Dev-Only Component** (`Code/HTML`) — Staging frames for any unresolved preview slot logged in `MISSING_CONTENT_REPORT.md`; **NEVER FOR PRODUCTION** | **CONFLICT:** Inventory assigned `AST-P01` to Founder Portrait (`L63`) | Not yet created in `src/` | **Adopt Blueprint-3 `AST-P01`.** Create dev-only `PreviewPlaceholder` helper in Phase 3, never shipped cleanly into public production builds. |

### B. Handling Additional Local Files Found in Phase 2 (`public/`) Not Pre-Indexed in Blueprint-3
Because Blueprint-3 was authored before inspecting `public/`, our Phase 2 audit found extra local binaries inside `public/work/` and `public/brand/` that must be mapped explicitly without renumbering Blueprint-3's 12 canonical IDs:
- **Low-res Solanas creatives (`public/work/solanas-sushi.png` `362x454`, `solanas-steamer-dimsum.jpg` `363x451`, `solanas-green-dimsum.png` `363x454` — inventoried as `AST-C03`–`AST-C05`):** Retain strictly as local sub-entries `AST-C02b/c/d` (or local supplemental `AST-C03..C05` inside `/work/solanas` thumbnail gallery ONLY if `DEC-12` approves and never stretched full-width); remove immediately from `horizon-mun`, `dtc-accelerator-concept`, and `#digital-technology`.
- **Additional Riwa brand binaries (`riwa-logo-transparent.png`, `riwa-crow-mascot.jpg`, `riwa-crow-logo.svg`, `riwa-crow-vector.svg`, `riwa-r-logo.svg` — inventoried as `AST-S02`..`S06`):** Keep tracked under **`AST-S01`** logo consolidation (delete duplicate `riwa-logo-transparent.png` after archive; retire `#FF2A55` legacy SVGs `riwa-crow-logo.svg`, `riwa-crow-vector.svg`, `riwa-r-logo.svg` once `#FD7D3C` SVG vector is approved under `DEC-09`; keep `riwa-crow-mascot.jpg` unused/archived unless founder clears an explicit slot).
- **Deprecated `Horizon MUN` (`AST-E02` in Inventory):** Not in Blueprint-3's register; remove unsubstantiated card cleanly.

---

## 4. Conflicts & Outdated Assumptions Requiring Correction Across Existing Docs

All discrepancies discovered across our earlier 4 preparation/audit docs against `Blueprint-3.pdf` are consolidated below (`IMPLEMENTATION_PLAN.md` and `PHASE_3_PREPARATION.md` are superseded by `Blueprint-3.pdf` and this alignment report):

| Source Document & Location | Outdated Assumption / Conflict | Blueprint-3 Governing Rule (`Page Ref`) | Phase 3 Correction |
|---|---|---|---|
| **[PHASE_3_PREPARATION.md](file:///c:/Users/Ranjan/web-coming-soon/PHASE_3_PREPARATION.md)** (§1, §4 `L89`, §5 `L117`) | Cited `Blueprint-2.pdf (114 pp.)`; §5 Row 1 assumed `"led by Solanas alone"`; **§4 `L89` used `git add src/` instead of explicit file paths** and lacked pre-commit `git diff --cached --name-only` verification. | **Pages 1, 34, 37–39, 73:** Solanas is `Priority 1` **ONLY after written permission (`DEC-12`)**; Hero falls back to `Priority 2` -> `Priority 3`. Git safety requires exact staged-path verification. | Enforce Priority `1 -> 2 -> 3` logic in Hero; follow **Section 7's explicit 14-path `git add -- ...` procedure** (NEVER `git add src/`). |
| **[IMPLEMENTATION_PLAN.md](file:///c:/Users/Ranjan/web-coming-soon/IMPLEMENTATION_PLAN.md)** (§1, §4 Stage I–IV #6, #9) | Contains all 8 conflicts caught in `PHASE_3_PREPARATION.md` §5 (`Tier 3` Hero Folio/Slate/Pass props; `#EA1E4D` Hero CTA; `#FF5C80` dark tint; `ThemeToggle`/`BottomDock` retention; blanket `Syne 800`; unapproved `vercel.json`/Puppeteer; `decoding="sync"`; missing governance reports), PLUS banned pre-audit numeric targets (`Lighthouse >= 95`, `LCP < 2.0s`, `CLS < 0.05` at `L92-93`). | **Pages 33, 36–47, 56–79, 83:** Orthogonal `0deg` Hero with zero fabricated props; Primary `#111116` Hero CTA; no `#FF5C80`; `Syne 700` Hero/`h1`/`h2`, `800` Footer mark only; `decoding="auto"` + `fetchpriority="high"`; minimal diff keeping Google Fonts & deployment config untouched until approved; target CWV `LCP <= 2.5s`, `INP <= 200ms` (`TBT < 200ms`), `CLS <= 0.1` without pre-audit scores. | Supersede completely with `Blueprint-3`; build exact 7-chapter sequence and ask before changing `vercel.json` / build tooling. |
| **[IMPLEMENTATION_PLAN.md](file:///c:/Users/Ranjan/web-coming-soon/IMPLEMENTATION_PLAN.md)** (§3 `L42-47`), **[AUDIT_REPORT.md](file:///c:/Users/Ranjan/web-coming-soon/AUDIT_REPORT.md)** & **[ASSET_AND_CONTENT_INVENTORY.md](file:///c:/Users/Ranjan/web-coming-soon/ASSET_AND_CONTENT_INVENTORY.md)** | **Swapped `DEC-10`–`DEC-15` labels/IDs:** Mapped `DEC-10` to D2 git WIP, `DEC-11` to Solanas, `DEC-13` to Concepts, `DEC-14` to Founder Portrait, `DEC-15` to MSME/Legal. | **Pages 103–108, 120–121:** Standard IDs are `DEC-09` through `DEC-15` (see Section 5 table below). | Standardize 100% on Blueprint-3 Deliverable 7 IDs, labels, and states. |
| **[ASSET_AND_CONTENT_INVENTORY.md](file:///c:/Users/Ranjan/web-coming-soon/ASSET_AND_CONTENT_INVENTORY.md)** (§1, Hero Matrix `L87`, Checklist `L98-99`) | Misaligned `AST-*` IDs (`AST-S07` vs `AST-S02` Brand Dalal; `AST-P01` vs `AST-M01`; `AST-M01` vs `AST-M04`; etc.); included Tier 3 Folio/Slate/Pass props; marked email & WhatsApp `"PRESERVE"` unconditionally; stated fixed `<120 KiB` cap. | **Pages 54, 69, 84–95:** Canonical 12-ID `AST-*` register (Section 3 above); no mock Hero props; hides unverified public email/copy & WhatsApp links behind `DEC-14` while keeping intake handler; flexible image optimization targets (`<=180-250 KB` mobile / `<=320 KB` desktop hero). | Adopt Section 3 `AST-*` ID mapping, drop Tier 3 Hero props, enforce Section 6 contact fallbacks, and use flexible AVIF/WebP targets. |
| **[AUDIT_REPORT.md](file:///c:/Users/Ranjan/web-coming-soon/AUDIT_REPORT.md)** (§B, §D.1 `L143`) | Proposed `#FF5C80` dark-ground red text & `#C4123D` white-ink buttons; assumed public email/WhatsApp links stay visible immediately. | **Pages 57–59, 67, 73, 79:** Rejects `#FF5C80` (dark sections use Warm White `#F5F4F0` / `#B4B4BE` body ink and `#EA1E4D >= 24px` display indices only; primary buttons are Charcoal `#111116` on light/orange and `#FD7D3C` w/ Charcoal ink on dark). Gates public email/WhatsApp display behind `DEC-14`. | Use Blueprint-3 contrast palette verbatim and apply Section 6 channel fallback separation. |

---

## 5. Founder Decisions Still Required (`DEC-09` to `DEC-15` Verified Against Blueprint-3)

Verified verbatim against **`Blueprint-3.pdf` Deliverable 7 (pp. 103–108) and §4 (pp. 120–121)**:

| Decision ID & Exact Blueprint-3 Label | Blueprint-3 State | Blueprint-3 Scope & What Ranjan Kumar Must Confirm | Repo Context & Preview Behavior During Phases 3–10 |
|---|---|---|---|
| **`DEC-09` Official Signature Orange Hex Verification (`#FD7D3C`)** | **PROVISIONAL** *(Yes — preview using `#FD7D3C`)* | Confirm exact hex value in official Riwa vector logo asset (`p. 103–104`), and approve any vector orange variance (`p. 121`). | Phase 2 confirmed [riwa-logo-official.png](file:///c:/Users/Ranjan/web-coming-soon/public/brand/riwa-logo-official.png) (`AST-S01`) uses `#FC7D3C`/`#FD7D3C`, while all 3 existing SVGs use legacy `#FF2A55`. Keep `#FD7D3C` UI tokens and preserve `riwa-logo-official.png`; authorize clean `#FD7D3C` SVG replacement (`AST-S01`) and duplicate `riwa-logo-transparent.png` removal. |
| **`DEC-10` Draft Website Copy & Optional Proposed `/services` Deliverables** | **PROVISIONAL** *(Yes — local preview only; blocks production)* | Review, edit, or trim all `[REQUIRES FOUNDER APPROVAL]` headlines, copy blocks, and optional deliverable extensions on `/services` (`p. 104`). | Render Blueprint-3 draft copy in preview while purging unverified claims under `Claims Governance` (`p. 10–11`: `"EST. 2024"`, `"GOVT. OF INDIA MSME"`, `"no account-management layers"` in `TheNextIdea.tsx:66` FAQ, `"REACT 18"`). |
| **`DEC-11` Schema.org Type Selection (`Organization` vs. `ProfessionalService`) & Real `/privacy` Disclosure** | **PROVISIONAL** *(Yes — scaffold clean `Organization` JSON-LD)* | Confirm whether a real physical street address (`PostalAddress`) and legal business entity name exist, and confirm `/privacy` disclosure text aligned with Phase 1 data-collection audit (`p. 70–71, 104–105`). | Phase 1 confirmed zero analytics scripts and client-side `mailto:` only. Scaffold clean `Organization` JSON-LD (`name`, `url`, `description`, `founder` — zero placeholders); omit `/privacy` unless backend persistence or analytics are introduced later. |
| **`DEC-12` Solanas Publishing Permission, Brief Copy & Credits** | **BLOCKED** *(for public publishing of Solanas)* | Supply legal written client permission to publish Solanas artwork (`AST-C01`/`C02` — governs Hero Priority 1 and `/work/solanas`), client name, factual brief narrative, credit split (`Riwa` vs `Client` vs `Collaborators`), sign-off on `+420% / +340% / 6.2%` metrics if claimed, plus **Priority 2** (`AST-R01` / `AST-S02`) vs **Priority 3** choice while permission is pending (`p. 105–106, 120–121`). | **Purge unverified `%` / `5.4x` KPIs immediately.** Enforce `permissionApproved: false` on Solanas in centralized data so preview renders **Hero Priority 3** (or founder-approved Priority 2 studio piece) cleanly without exposing unapproved Solanas client work. |
| **`DEC-13` Founder Bio, Natural-Light Portrait & Culture Copy** | **BLOCKED** *(for production)* | Supply verified `120–180` word founder biography, natural-light portrait photograph (`AST-M01` -> `public/brand/founder-ranjan.*`, zero external web inference), **founder publishing sign-off on `AST-S01` (logo), `AST-S02` (Brand Dalal Mascot), and `AST-R01` (Recruitment Poster)**, plus `#studio-culture` text (`p. 106, 121`). | Purge `"Abhinav Singh"` immediately; remove `"REAL PHOTO PENDING"` public badge. Gate `AST-S01`, `AST-S02`, `AST-R01` publishing sign-off cleanly; render `AST-P01` dev-only `PreviewPlaceholder` for missing bio/portrait until supplied. |
| **`DEC-14` Canonical Contact Channels, Fallbacks & Live Domain Crawlability (`riwacreatives.in`)** | **BLOCKED** *(for displaying email/WhatsApp & production launch)* | Confirm canonical studio email (`riwacreatives@gmail.com`), active WhatsApp URL (`https://wa.me/917015048144`), social handles (Instagram `@madebyriwa`, LinkedIn `company/144023065`, X `@riwacreatives`), displayed city (`New Delhi, India` or omit), and authorize crawlability fixes (`vercel.json` / prerendering) after Phase 1 diagnosis (`p. 106–107, 121`). | Hide all unverified public email links, copy-email buttons, WhatsApp links/CTAs, unconfirmed social links, and city cleanly while **keeping the existing enquiry form's `mailto:` + Copy Formatted Brief workflow functional** (see Section 6). |
| **`DEC-15` Hack Uttar Pradesh 2026 / Events Verification & Photography** | **BLOCKED** *(for publishing event proof)* | Confirm whether **Hack Uttar Pradesh 2026 (`AST-E01`)** appears publicly, Riwa's actual role, verified dates (resolving `2025/2026` vs `2026/2027` conflict), partners, permissions, and cleared documentary photos (`AST-E01` / `AST-M02`) (`p. 107–108, 121`). | Cut fabricated `Horizon MUN` / `DTC Brand Accelerator` and remove mismatched Solanas food photos (`solanas-poster.jpg`, `solanas-sushi.png`, `solanas-green-dimsum.png`) from event/tech cards. Render `#FD7D3C` Events band with `AST-P01` preview placeholder logged in `MISSING_CONTENT_REPORT.md` until cleared. |
| **Repo & Runtime Decisions (`Pre-Phase 3`)** | **OPEN** | Confirm: (1) creating workspace [AGENTS.md](file:///c:/Users/Ranjan/web-coming-soon/AGENTS.md) & `.agents/rules/accessibility-performance.md` per Blueprint §5.1, (2) removing `ThemeToggle` dark-default Hero inversion & floating `BottomDock`, and (3) deferring `vercel.json` / build-time prerendering edits until Phase 10 explicit sign-off. | Keep deployment config (`vercel.json`) untouched during Phases 3–9; align Hero/Chapters to fixed editorial palette rhythm without dark-mode Hero inversion or `BottomDock`. |

---

## 6. Contact-Channel Fallback Architecture & Preserved Enquiry Workflow (`DEC-14`)

Inspecting [IntakeSection.tsx](file:///c:/Users/Ranjan/web-coming-soon/src/components/intake/IntakeSection.tsx) (`L117–152, 190–198, 373–469`) and [TheNextIdea.tsx](file:///c:/Users/Ranjan/web-coming-soon/src/components/chapters/TheNextIdea.tsx) (`L66, 109–134, 178–205, 340–348, 402–413`) shows **two separate client-side concerns** (confirming **no server-side backend, API endpoint, or database persistence exists** in this repository) that must stay decoupled so hiding unverified public contact channels never breaks the existing enquiry form:

1. **Preserved Client-Side Enquiry Submission (`mailto:` Opening Email Client + Copy Formatted Brief) — STAYS FUNCTIONAL:**
   - Both [IntakeSection.tsx](file:///c:/Users/Ranjan/web-coming-soon/src/components/intake/IntakeSection.tsx#L117-L152) (`/contact`) and [TheNextIdea.tsx](file:///c:/Users/Ranjan/web-coming-soon/src/components/chapters/TheNextIdea.tsx#L109-L134) (Ch. 07) run purely in the browser: they format a plain-text project brief (`formattedBriefText` / `submittedBrief`), open the visitor's default email client via `window.location.href = 'mailto:riwacreatives@gmail.com?subject=...&body=...'` inside `handleSubmit`, and provide a working **`Copy Formatted Brief`** clipboard button (`navigator.clipboard.writeText(...)`) plus `aria-live="polite"` feedback.
   - **Critical Architectural Rule:** Do **NOT** gate `handleSubmit`'s `mailto:` email-client launch or the `Copy Formatted Brief` button behind `publicContact.email === null`. Keeping the existing client-side `mailto:` handler and formatted-brief clipboard workflow wired internally preserves the repository's existing enquiry flow without inventing a server-side backend (`Blueprint-3` p. 54, 79, 82).
   - **Honest Confirmation Copy & `DEC-14` Note:** When `publicContact.email` is still unverified (`null`), confirmation helper text (`IntakeSection.tsx:442-443`, `TheNextIdea.tsx:179`) must avoid printing unverified email text publicly (render e.g. *"Your formatted brief has been prepared in your email app. If it didn't open automatically, copy the formatted brief below."*). Note also for `DEC-14` sign-off that a visitor clicking **Send** will still see the legacy `mailto:` recipient in their local mail compose window until `riwacreatives@gmail.com` (or a replacement canonical address) is confirmed.

2. **Public Display Contact Channels (`publicContact` Config — HIDDEN UNTIL `DEC-14` CONFIRMED):**
   - Set centralized display config to `email: null`, `whatsappUrl: null`, `instagramUrl: null` *(if still unconfirmed under `DEC-14`)*, `linkedinUrl: null`, and `city: null`.
   - Hide cleanly wherever unverified:
     - All visible `<a href="mailto:riwacreatives@gmail.com">` links and public click-to-copy email controls (`EditorialFooter.tsx`, `IntakeSection.tsx:192,384`, `TheNextIdea.tsx:66,403`, `FinalCTASection.tsx`, `LeadershipSection.tsx`, `MenuDrawer.tsx`, `faqData.ts`). Never render a dead/placeholder copy button.
     - All public WhatsApp links, confirmation `WHATSAPP DIRECTLY` buttons (`TheNextIdea.tsx:198`), `OR WHATSAPP +91 70150 48144` links (`TheNextIdea.tsx:341,410`, `IntakeSection.tsx:403`, `EditorialFooter.tsx:136`), and floating [WhatsAppCTA.tsx](file:///c:/Users/Ranjan/web-coming-soon/src/components/common/WhatsAppCTA.tsx) until `DEC-14` verifies `https://wa.me/917015048144`.
     - If no external direct channel is verified yet on `/contact`, collapse the Left Column cleanly to an editorial prompt directing visitors to the preserved single-screen enquiry form (`Blueprint-3` p. 54).

---

## 7. Corrected Safe Git Snapshot & Branching Procedure *(NOT EXECUTED — Supersedes `PHASE_3_PREPARATION.md` §4)*

When Ranjan Kumar approves starting Phase 3, execute **only explicit-path staging** — **never `git add src/`**, `git add .`, or `git add -A` — and enforce fresh status/staged verification immediately before committing:

```powershell
# 1. Inspect fresh repository state and branch before any staging or branch switch
git status --short
git branch -v

# 2. Create & switch to the isolated D2 snapshot branch from current HEAD (db4d0a2)
git checkout -b archive/pre-blueprint-d2

# 3. Explicitly stage ONLY the 13 modified tracked files + untracked ChapterTransition.tsx
#    (Strictly NEVER run `git add src/`; leaves both PDFs and all 5 audit/prep .md files unstaged)
git add -- `
  src/App.tsx `
  src/pages/HomePage.tsx `
  src/components/hero/HeroSection.tsx `
  src/components/chapters/ThePointOfView.tsx `
  src/components/chapters/TheAttention.tsx `
  src/components/chapters/TheWorld.tsx `
  src/components/chapters/TheRealWorld.tsx `
  src/components/chapters/ThePeople.tsx `
  src/components/chapters/TheNextIdea.tsx `
  src/components/chapters/ChapterTransition.tsx `
  src/components/common/LiquidArtworkCanvas.tsx `
  src/components/common/SparkElement.tsx `
  src/components/home/ManifestoSection.tsx `
  src/components/home/ProcessSection.tsx

# 4. MANDATORY PRE-COMMIT VERIFICATION:
#    Confirm fresh status AND exact staged list = ONLY those 14 files (0 PDFs, 0 .md files)
git status --short
git diff --cached --name-only
git diff --cached --stat

# 5. Commit & tag D2 WIP snapshot only after verifying the 14-file staged list matches 100%
git commit -m "wip(archive): snapshot uncommitted Phase D2 worktable and chapter iterations"
git tag archive-d2-snapshot

# 6. Return cleanly to untouched baseline db4d0a2 on main & verify clean tracked state
git checkout main
git status --short

# 7. Create clean Phase 3 working branch from untouched main (no git push)
git checkout -b feat/riwa-blueprint-implementation
```

---

## 8. Implementation & Production Launch Blockers

### A. Preview-Branch Execution vs. Local Verification Constraint
- **READY for Preview Implementation (Once Approved):** Git archival (`archive/pre-blueprint-d2` -> `main@db4d0a2` -> `feat/riwa-blueprint-implementation`), design tokens, font loading fix (`Syne 400–800`), WCAG 2.2 AA contrast & `--sticky-offset`, purged bloat (`DEC-05`), centralized `AST-*` / `permissionApproved` / `publicContact` config, preserved intake `mailto:` + copy-brief handler, and Priority `1 -> 2 -> 3` Hero + 7-chapter Homepage + `/services` + `/work` + `/about` + `/contact` refactor using dev-only `AST-P01` placeholders.
- **ENVIRONMENT VERIFICATION BLOCKER (`NOT RUN` Constraint):** `node`, `npm`, `npx`, `pnpm`, and `chrome_devtools` browser tooling are unavailable in this local environment. Consequently, `tsc -b`, `vite build`, bundle-size audits, automated `axe-core` contrast scans, Lighthouse lab runs (`LCP` / `TBT` / `CLS`), and interactive 4-viewport (`1440px / 1280px / 768px / 375px`) browser checks remain **`NOT RUN`** locally and must be logged honestly in `VERIFICATION_REPORT.md` until executed in a Node/browser environment.

### B. Strict Production Launch Blockers (`Blueprint-3` Pages 120–121)
Public production build, `git push`, or deployment to `riwacreatives.in` remains **STRICTLY BLOCKED** until:
1. All `BLOCKED` (`DEC-12`–`DEC-15`) and `PROVISIONAL` (`DEC-09`–`DEC-11`) founder items are resolved in writing (or unapproved client/event media are omitted cleanly via Hero Priority 3 and conditional omission).
2. Zero `AST-P01` dev-only placeholders remain in production components or `MISSING_CONTENT_REPORT.md`.
3. `tsc -b`, `vite build`, WCAG 2.2 `SC 2.4.11` keyboard traversal + `200%` zoom, contrast audit, and non-spam intake (`mailto:` + copy-brief) tests are actually executed and observed passing.
4. Hosting/crawlability fix (`public/sitemap.xml`, `robots.txt`, prerendering/`vercel.json`) and final deploy receive explicit written sign-off.

**Stopped at final alignment review gate — awaiting your confirmation before running any Git command or starting Phase 3.**
