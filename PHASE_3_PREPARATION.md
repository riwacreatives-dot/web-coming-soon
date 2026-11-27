# RIWA CREATIVES — PHASE 3 SAFETY & PREPARATION REVIEW

**Repository Root:** `c:\Users\Ranjan\web-coming-soon`  
**Current Branch / `HEAD`:** `main` @ `db4d0a2` (`chore(hero): restore previous Worktable hero section only`)  
**Remote (`origin`):** `https://github.com/riwacreatives-dot/web-coming-soon`  
**Status:** Strictly Read-Only Safety Review — **Zero Git commands executed; zero source files, configs, or assets modified.**

---

## 1. Current Git Status Inventory

`git status --short` shows **13 modified tracked files** (`1,956 insertions(+), 1,983 deletions(-)`) and **5 untracked files** (consisting of the **2 pre-audit untracked files** plus the **3 Phase 1–2 planning reports** added during this audit):

### Modified Tracked Files (13)
1. `src/App.tsx`
2. `src/pages/HomePage.tsx`
3. `src/components/hero/HeroSection.tsx`
4. `src/components/chapters/ThePointOfView.tsx`
5. `src/components/chapters/TheAttention.tsx`
6. `src/components/chapters/TheWorld.tsx`
7. `src/components/chapters/TheRealWorld.tsx`
8. `src/components/chapters/ThePeople.tsx`
9. `src/components/chapters/TheNextIdea.tsx`
10. `src/components/common/LiquidArtworkCanvas.tsx`
11. `src/components/common/SparkElement.tsx`
12. `src/components/home/ManifestoSection.tsx`
13. `src/components/home/ProcessSection.tsx`

### Untracked Files (`??`)
- **Pre-Audit Untracked Files (2):**
  1. `src/components/chapters/ChapterTransition.tsx` (experimental chapter bridge component from incomplete D2 work)
  2. `Riwa Creatives Website Strategy Blueprint-2.pdf` (`1,595,005` bytes — approved master Blueprint PDF)
- **Phase 1–2 Planning Docs Created During Audit (3):**
  3. `AUDIT_REPORT.md`
  4. `ASSET_AND_CONTENT_INVENTORY.md`
  5. `IMPLEMENTATION_PLAN.md`
*(Note: `.gitignore` status should be verified before committing so only intended documents/code enter snapshots; temporary/local docs can stay untracked or live on a snapshot branch.)*

---

## 2. Plain-English File-by-File Breakdown & Blueprint Assessment

| File | What Changed vs. `HEAD@db4d0a2` (Plain English) | Assessment |
|---|---|---|
| `src/App.tsx` | Removed `<NoiseOverlay />` import and global fixed film-grain layer (`-4` lines). | **Partly Valuable / Incomplete** — Removing global fixed noise helps performance, though static 3.5% warm-paper grain stays scoped to Hero Paper (`#F5F4F0`) and rejected systems (`Lenis`, `CustomCursor`, `StudioCardWarpLoader`, 3D menu tilt) remain mounted. |
| `src/pages/HomePage.tsx` | Swapped `<BrandTicker />` (infinite scrolling strip) out for 5 `<ChapterTransition />` divider strips between chapters and adjusted comments. | **Experimental / Conflicting** — Dropping the infinite marquee is helpful, but keeping 5 artificial `ChapterTransition` bars, `<ChapterIndicator />`, `<ManifestoSection />`, and old Chapter 02/04 components conflicts with the Blueprint's clean 7-chapter sequence. |
| `src/components/hero/HeroSection.tsx` | Replaced `HEAD`'s 4-card Worktable hero with the D2 "Anchored Monograph & Spread" layout: SVG noise background, interactive hover inspector, hardbound Identity Folio (`riwa-crow-vector.svg`), Solanas poster wrapped in **WebGL `LiquidArtworkCanvas`**, Digital Slate (`solanas-poster.jpg` tint), tilted `RIWA LIVE PASS`, mobile 4-tab switcher, and scroll transforms (`useScroll`). | **Valuable Concept / Major Conflicts** — Keeps warm paper and `IDEAS, MADE unreasonable.`, **but directly conflicts with Blueprint Section 2.5**: re-introduces banned WebGL ripples (`DEC-05`), fabricates Brand Book/Digital Slate/Event Pass mockups, and uses diagonal tilts/heavy shadows instead of orthogonal `0deg` hairline framing around real cleared assets. |
| `src/components/common/LiquidArtworkCanvas.tsx` | Added `imgClassName` prop and gated `<canvas>` behind `hasWebGL && interactive` (`6` lines changed). Forces `decoding="sync"` on hero img. | **Conflicting** — WebGL canvas effects and forced hero `decoding="sync"` are explicitly rejected by the Blueprint (`DEC-05` & Section 4.5). |
| `src/components/common/SparkElement.tsx` | Removed `repeat: Infinity` infinite pulsing animations from Ch.01/Ch.05/Ch.07 (`-46` lines), leaving static geometric SVG icons. | **Valuable Hygiene / Obsolete Component** — Stopping infinite loops is good CSS discipline, but the Blueprint removes the morphing "Spark" tracker element completely. |
| `src/components/chapters/ThePointOfView.tsx` | Replaced 3 opinion pillars from `HEAD` with a 4-tab **"Brand Guideline Specimen Book"** (Logo Grid, Typography Showcase, Copyable Palette Swatches, Applied Mockups including unverified `"GOVT. OF INDIA MSME"` copy). | **Experimental / Conflicting** — Blueprint assigns **Chapter 02 to "What We Do: Five Capabilities Ledger"** (`#brand-identity` through `#brand-management-growth`), not an interactive self-referential specimen widget. |
| `src/components/chapters/TheAttention.tsx` | Reworked Solanas spread with 2 selectable high-res hero images, 3 small thumbnail drop cards (`363px` assets kept at thumbnail scale), 6-step mobile tabs, while retaining `+420% / +340% / 6.2%` KPIs and unverified `Hack UP` / `Horizon MUN` / `DTC Accelerator` cards. | **Mixed (Smart UX / Conflicting Data)** — Constraining small `363px` images to small plates is a **valuable** technical safeguard, but publishing unverified Solanas KPIs (`DEC-12`) and unconfirmed concept cards conflicts with zero-fabrication governance. |
| `src/components/chapters/TheWorld.tsx` | Replaced 2-column Digital/Funnel chapter with a complex inline **"Interactive Live Browser Prototype"** (RIWA vs Solanas site tabs, Desktop/Mobile/Dark toggles, sub-routes, section-local SVG reticle cursor follower), mislabels `"REACT 18"`, embeds `<ProcessSection embedded />`, and repeats `+420% / +340% / 6.2%`. | **Experimental / Conflicting** — Conflicts heavily: Blueprint assigns **Chapter 04 to "How We Think: Editorial Perspective"** (calm Charcoal `#111116` interlude), bans custom cursor reticles, and bans fabricated UI demos/metrics. |
| `src/components/chapters/TheRealWorld.tsx` | Removed `HEAD`'s infinite orange marquee banner (good!) and replaced card flip with a 4-stage `RIWA LIVE PASS` tab switcher + CSS film grain; **however** renders `text-white` directly on `#FD7D3C` (`L118-125`), keeps `/services/events-experiences` route link, and promotes `hack-uttar-pradesh` / `horizon-mun`. | **Valuable UX Cleanup / WCAG & Data Conflict** — Removing the marquee and keeping inner pass text Charcoal (`7.33:1`) are **valuable**, **but white headline text on `#FD7D3C` (`2.57:1`) fails WCAG even for Large Text** and unconfirmed events remain exposed. |
| `src/components/chapters/ThePeople.tsx` | Added `FOUNDER_PHOTO_SRC = null` fallback monogram (`"RK. REAL PHOTO PENDING"`), `riwa-hiring-poster.jpg` & `dalal-mascot.png` blocks, invented first-person founder quote (`L128`), unverified `"GOVT. OF INDIA MSME · DELHI, INDIA"`, and `+420%` footer proof bar. | **Incomplete / Conflicting** — Separating authentic Riwa assets (`hiring poster` + `Brand Dalal`) is useful, **but invented quotes, unverified operating claims (`no telephone games`), public `"PENDING"` badges, and unconfirmed KPIs violate Blueprint guardrails**. |
| `src/components/chapters/TheNextIdea.tsx` | Condensed 6 enquiry categories down to 5 (`brand`, `campaign`, `digital`, `event`, `other`) with dynamic contextual prompts, preserving working `mailto:riwacreatives@gmail.com` + copy brief + WhatsApp link (`917015048144`) and FAQ. | **Valuable Baseline / Missing Pillar** — Preserves core conversion flow cleanly, **but** omits `#brand-management-growth`, lacks direct alignment with unified Ch.07 (`Closing Conversation` -> `/contact`), and repeats banned `"account manager layers"` claim in FAQ (`L66`). |
| `src/components/home/ManifestoSection.tsx` | Condensed padding and staggered Framer Motion reveal across 3 manifesto lines (`WE BELIEVE IN IDEAS THAT MOVE...`). | **Experimental / Conflicting** — Blueprint rejects formal agency manifestos (`HOW WE THINK` replaces it without fabricated slogans; note also `src/components/manifesto/ManifestoSection.tsx` holds `"Abhinav"`). |
| `src/components/home/ProcessSection.tsx` | Turned timeline rail (`HEAD`) into a 5-tab boxed sequence (`DISCOVER`..`EVOLVE`) using Solanas artwork and `riwa-logo-official.png` as generic stage artefacts. | **Experimental / Conflicting** — Blueprint omits standalone invented process methodology sections and bans stretching client food art across generic process stages. |
| `src/components/chapters/ChapterTransition.tsx` *(Untracked)* | New component rendering 5 decorative inter-chapter bridges (folio flap, crop bar, runtime coordinates, orange wipe, backstage bar). | **Experimental / Conflicting** — Designed for the pre-Blueprint V3 D2 narrative rather than the Blueprint's streamlined 7-chapter cadence. |
| `Riwa Creatives Website Strategy Blueprint-2.pdf` *(Untracked)* | Approved 114-page Strategy & Technical Specification PDF. | **Valuable Reference Source** — Must remain protected and never overwritten or cleaned. |

---

## 3. Exact Preservation Strategy (Zero Data Loss Guarantee)

To guarantee that **nothing** from `HEAD@db4d0a2`, the uncommitted D2 worktree, the Blueprint PDF, the audit docs, or `public/` binary assets is lost or overwritten:

1. **Snapshot the Uncommitted D2 State on a Dedicated Branch + Tag:** All 13 modified tracked files plus `src/components/chapters/ChapterTransition.tsx` represent previous Phase D2 work. Committing *only* those working-tree code changes onto an isolated archive branch (e.g., `archive/pre-blueprint-d2`) preserves them permanently in Git history alongside `db4d0a2`, without polluting `main`.
2. **Protect Untracked Strategic Assets Separately:** Never run `git clean -fd`. Keep `Riwa Creatives Website Strategy Blueprint-2.pdf`, `AUDIT_REPORT.md`, `ASSET_AND_CONTENT_INVENTORY.md`, and `IMPLEMENTATION_PLAN.md` completely untouched outside temporary branch checkouts (either left untracked locally or explicitly kept on `main` / docs commit if desired later).
3. **Never Modify `main` Directly During Phase 3:** After returning to `HEAD@db4d0a2` (`main`), create a clean implementation branch (`feat/riwa-blueprint-implementation`) from `main`. That keeps `main` intact at `db4d0a2` as an instant rollback target.
4. **Line-Ending Awareness (`core.autocrlf = true`):** Git reports `LF will be replaced by CRLF` warnings on the 13 modified files because `HEAD` uses `LF` while local Windows config has `core.autocrlf=true`. Committing the snapshot cleanly records the exact snapshot without harming code; during Phase 3 edits we keep `.gitattributes`/file formatting consistent to avoid noisy whitespace-only diffs.
5. **Preserve Live Integrations & Assets Byte-for-Byte:** Never overwrite existing `public/` assets (`solanas-*`, `riwa-logo-official.png`, `riwa-hiring-poster.jpg`, `dalal-mascot.png`); optimize by creating additional responsive `.webp`/`.avif` outputs or explicit clean files after founder confirmation (`DEC-09`–`DEC-15`).

---

## 4. Proposed Safe Git Snapshot & Branching Procedure *(NOT EXECUTED)*

When you authorize Phase 3 in writing, execute these exact sequential steps (none have been run yet):

```powershell
# 1. Verify exact starting tree and commit
git status --short
git branch -v

# 2. Create & switch to a dedicated snapshot branch for the uncommitted D2 work
git checkout -b archive/pre-blueprint-d2

# 3. Stage ONLY the 13 modified tracked files + untracked ChapterTransition.tsx
#    (Leaves PDF and Phase 1-3 planning .md docs untouched outside this code snapshot)
git add src/
git status --short

# 4. Commit the D2 WIP snapshot safely (never lost, easily inspected anytime via git show/diff)
git commit -m "wip(archive): snapshot uncommitted Phase D2 worktable and chapter iterations"
git tag archive-d2-snapshot

# 5. Optional off-machine backup (ONLY if you approve pushing archive branch to GitHub)
# git push -u origin archive/pre-blueprint-d2 --tags

# 6. Return cleanly to untouched commit db4d0a2 on main
git checkout main
git status --short   # Verify clean main (only untracked PDF + audit .md docs remain)

# 7. Create clean Phase 3 working branch from main
git checkout -b feat/riwa-blueprint-implementation
```

*(Note: Step 5 `git push` remains commented/optional and will NOT run unless explicitly requested by Ranjan Kumar.)*

---

## 5. Contradictions Found Between `IMPLEMENTATION_PLAN.md` and `Riwa Creatives Website Strategy Blueprint-2.pdf`

Auditing our own Phase 2 `IMPLEMENTATION_PLAN.md` directly against the full 114-page Blueprint uncovered **8 concrete discrepancies** that must be corrected before Phase 3 edits begin:

| # | Conflict Area | What `IMPLEMENTATION_PLAN.md` Wrote | What Approved Blueprint Strictly Specifies | Required Correction for Phase 3 |
|---|---|---|---|---|
| **1** | **Hero Supporting Artefacts & Framing** | Plan Stage III §6 proposed pairing Solanas proof with `"subordinate Brand Folio, Digital UI Slate, and Matte #FD7D3C Event Pass"`. | **Pages 33, 36–37, 70, 76:** Strictly bans mock brand books, fake UI screenshots, invented event passes, diagonal tilts (`1deg`/`4deg`), and heavy multi-layer shadows. Locks **Asset-Adaptive orthogonal `0deg` framing** with `1px` hairlines (`0 1px 3px rgba(17,17,22,0.06)` grounding shadow), led by **Solanas alone** (adding real verified assets only if approved). | Remove Folio, Digital Slate, and Pass hardware from Phase 3 Hero scope; render clean `0deg` Solanas print mount (`0px–2px` border radius). |
| **2** | **Homepage 7-Chapter Sequence** | Plan Stage III §6 loosely listed `"Selected Work 2-tier showcase..., 5 Capabilities summary..., Events, People, Enquiry"`. | **Pages 36–47, 76:** Locks **exact 7 chapters**: `01 Hero` -> `02 What We Do (5 Capabilities Ledger on #E7E7E9)` -> `03 Selected Work (editorial spreads on #F5F4F0, tagging CLIENT PROJECT / STUDIO IP / EVENT)` -> `04 How We Think (dark #111116 interlude)` -> `05 Events (#FD7D3C w/ Charcoal #111116 ink)` -> `06 Studio & Founder (#F5F4F0)` -> `07 Closing Conversation + Charcoal RIWA Footer`. Also keeps Work 2-tier layout (`Featured + Archive`) on `/work`, not on Homepage. | Follow the exact 7-chapter Blueprint homepage map instead of collapsing `/work` tiers onto `/`. |
| **3** | **Hero Primary CTA Styling** | Repo (and implicitly Stage I contrast notes) kept `#EA1E4D` pill buttons (`"EXPLORE OUR WORK"`) with white text (`4.38:1` normal text FAIL). | **Page 37:** Locks **Primary Charcoal `#111116` pill button `"Start a Project"` (`/contact`, `17.10:1` AAA)** + **Secondary underlined link `"View Work ->"` (`/work`)**. | Use `#111116` pill for Primary Hero CTA (`/contact`) and `#FD7D3C` pill with `#111116` text on dark sections/footer (`7.33:1` AAA). |
| **4** | **Color & Theme System (`ThemeToggle` vs Fixed Surfaces)** | Plan Stage I §3 invented `--brand-red-dark-text: #FF5C80` and left `ThemeContext` (`dark` default + toggle) + `BottomDock` intact. | **Pages 56, 64–66, 70:** Defines fixed surface rhythm per chapter (`#F5F4F0`, `#E7E7E9`, `#111116`, `#FD7D3C`) with **no dark-mode Hero inversion** and **no unrequested `#FF5C80` hex** (dark sections use Warm White `#F5F4F0` / `#B4B4BE` body text, restricting `#EA1E4D` on Charcoal to large `>=24px` display indices `4.29:1` AA Large & UI borders). Footer `RIWA` wordmark is **decorative `aria-hidden="true"` `72px–240px` `Syne 800`**, and `BottomDock` / `ScrollProgressBar` / `StudioCardWarpLoader` are absent from Blueprint's header/footer nav. | Drop `#FF5C80`; reconcile whether `ThemeToggle` & `BottomDock` should be removed in favor of the clean single sticky top header (`Work`, `Services`, `About`, `Contact`, `Start a Project`) + WhatsApp pill. |
| **5** | **Typography Weights** | Plan Stage I §3 suggested blanket `font-extrabold` (`800`) on all `.font-display` elements and left Plus Jakarta Sans up to `800`. | **Pages 58–63, 70:** Locks **`Syne 700`** (`font-bold`) for `display-hero-syne` (`IDEAS, MADE`), `h1-page`, and `h2-section`; `Syne 600` for `h3-subhead`; reserves **`Syne 800`** exclusively for `display-footer-mark` (`RIWA`). Plus Jakarta Sans uses `400` body + `600` UI buttons. | Apply exact per-token weights (`Syne 700` headings / `Syne 800` footer mark), eliminating `900`/`font-black`. |
| **6** | **Hosting, Prerendering & Deployment File Changes** | Plan Stage II §4 & Stage IV §8 proposed creating `vercel.json` and adding `vite-plugin-prerender`/Puppeteer dependencies. | **Pages 72–73, 78:** Blueprint Principles 1 & 4 forbid modifying deployment/hosting configs without approval and instruct avoiding heavy new build dependencies unless inspected/approved. | Diagnose SSR/prerender options and propose `vercel.json` / prerendering strictly with explicit founder sign-off prior to editing deployment config or adding tooling. |
| **7** | **Hero `decoding`, Query Params & Package Choice** | Plan overlooked hero `decoding="sync"` defect (`LiquidArtworkCanvas.tsx:141`), missed `/services` `?service=<slug>` vs repo `?type=` mismatch, and kept `framer-motion` without explicit light-motion audit. | **Pages 48–50, 52, 67, 72:** Hero focal `<img>` must leave `decoding="auto"` + `fetchpriority="high"` (never `decoding="sync"`); `/services` links must emit `?service=<slug>` (while supporting backward compatibility); motion uses native single-run `IntersectionObserver` + CSS transitions + `prefers-reduced-motion: reduce`. Also forbids adding `@fontsource`. | Explicitly drop `decoding="sync"`, handle `?service=` + legacy `?type=`, strip `framer-motion` animations down to CSS/IO (or minimal accessible fade), and preserve existing Google Fonts `<link>`. |
| **8** | **Missing Blueprint Governance & Reporting Artifacts** | Plan omitted Blueprint-mandated workspace rules and Phase 4/10/11 tracking files. | **Pages 69–79:** Explicitly expects `AGENTS.md` & `.agents/rules/accessibility-performance.md` (exact lowercase YAML triggers), plus dev-only `[PLACEHOLDER — REQUIRES RIWA INPUT: ...]` markers logged in `MISSING_CONTENT_REPORT.md`, `VERIFICATION_REPORT.md`, and `FINAL_HANDOFF_REPORT.md`. | Add explicit creation/approval of those reporting artifacts into the corrected Phase 3–11 workflow. |

---

## 6. Recommended Clean Path Forward (Awaiting Your Decision)

Before any code edit or Git branch command runs:
1. **Confirm Git Preservation Plan:** Approve running the Section 4 procedure at the start of Phase 3 (`archive/pre-blueprint-d2` snapshot -> clean `main@db4d0a2` -> `feat/riwa-blueprint-implementation`).
2. **Confirm Blueprint Override Over Plan Discrepancies (Items 1–8 above):** Confirm that the **114-page Strategy Blueprint supersedes any conflicting wording in `IMPLEMENTATION_PLAN.md`** (especially Orthogonal `0deg` Solanas-only/real-asset Hero, fixed warm-paper chapter palette vs dark-mode toggle/BottomDock, `Syne 700` hero + `Syne 800` footer weights, `#111116` Primary Hero CTA, and asking before adding `vercel.json`/prerender tooling).
3. **Provide Missing `DEC-09`–`DEC-15` Decisions** (or confirm using Blueprint-mandated `[PLACEHOLDER — REQUIRES RIWA INPUT: ...]` dev preview slots strictly blocked from production builds until supplied).

**PAUSE GATE ACTIVE — Waiting for your explicit written approval before running any Git command or beginning Phase 3.**
