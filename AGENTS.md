# Riwa Creatives Website — Global Agent Invariants

## 1. Immutable Brand Decisions (Iteration 1 Governing Baseline)

- **Hero Headline Display Rule:** Brand core statement is `IDEAS, MADE unreasonable.` (`IDEAS, MADE` in `Syne` 700–800; italic crimson emphasis in `Instrument Serif` 400 Italic). Per founder authorization on 2026-11-27, `HeroSection.tsx` preserves the exact `db4d0a2` (`riwacreatives.in`) display treatment (`UNREASONABLE.` uppercase italic) while non-Hero chapters follow lowercase serif emphasis (`unreasonable.`).
- **Exact Descriptor:** `Independent Creative & Growth Studio.`
- **Locked Five Capabilities & Anchor IDs** (centralize in ONE single-source data module adapted to the existing stack):
  1. Brand & Identity (`#brand-identity`)
  2. Creative & Advertising (`#creative-advertising`)
  3. Digital & Technology (`#digital-technology`)
  4. Events & Experiences (`#events-experiences`)
  5. Brand Management & Growth (`#brand-management-growth`)

## 2. Locked Visual, Hero Permission & Portfolio Rules

- **Fonts ONLY (all verified SIL OFL-1.1):** `Syne` (`400–800`, upright only — never italic or weight `900`), `Instrument Serif` (`400` Regular & Italic ONLY — never bold), `Plus Jakarta Sans` (`200–800`), `JetBrains Mono` (`100–800`, `font-variant-ligatures: no-contextual`).
- **Colors:** Charcoal `#111116`, Warm White `#F5F4F0`, Light Grey `#E7E7E9`, Riwa Red `#EA1E4D` (large text >= 24px & UI accents ONLY; `#C4123D` for body-size red text), Signature Orange `#FD7D3C` (verify against official vector logo; on `#FD7D3C` backgrounds ALWAYS use Charcoal `#111116` foreground ink/borders, NEVER white).
- **Permission-Aware Visual Priority (NEVER publish an unapproved client asset merely because the file exists in the repository):**
  - Priority 1 (ACTIVE — 2026-11-28): Written publication permission confirmed by founder for Solanas posters (`AST-C01` / `AST-C02`), Brand Dalal (`AST-S02`), Riwa Hiring Poster (`AST-R01`), and `riwa-crow-mascot.jpg` inside the `HeroSection.tsx` (`db4d0a2` tilted worktable: `-6deg`, `+6deg`, `-3deg`, `+9deg`) and `SelectedProjectsSection.tsx` (`0deg` orthogonal photo slider). WhatsApp, side rail, Hack UP (`AST-E01`), and unverified `/work` case-study copy remain gated.
  - Priority 2: Other suitable real Riwa studio artefacts remain gated until verified and explicitly approved for publication.
  - Priority 3: Restrained typographic/editorial fallback remains the automatic fallback whenever Priority 1/2 assets are unapproved.
  - Keep approved non-Hero portfolio/service artefacts orthogonal (`0deg`) and never fabricate client case studies, testimonials, metrics, or bios.
- **Work Page Architecture:** Retain Featured Stories, Creative Archive, clear `CLIENT PROJECT` / `STUDIO IP` / `EVENT INITIATIVE` labels, and editorial grouping. Do NOT add generic category filter tabs or any replacement filtering system.

## 3. Repository-First, Contact Fallback, Version-Control & Zero-Fabrication Guardrails

- Inspect the existing codebase read-only (Phases 1–2) before proposing stack patterns, file structure, or dependencies. Produce three base Phase 1–2 outputs: `AUDIT_REPORT.md`, `ASSET_AND_CONTENT_INVENTORY.md`, and `IMPLEMENTATION_PLAN.md` (creating extra files only if genuinely necessary).
- Preserve the existing client-side `mailto:` email-client launch and Copy Formatted Brief enquiry workflows, existing routing conventions, working reusable components, verified real brand assets, and deployment settings (no server-side backend exists).
- **Contact-Channel Fallbacks:** Display public email (and public click-to-copy control) ONLY after canonical email is confirmed; display public WhatsApp links ONLY after URL verification; never render a non-functional click-to-copy email control; never invent contact details, opening hours, physical address, or response-time promises.
- Never alter DNS, hosting, or production deployment configuration. Never push or deploy without explicit human approval.
- Never invent clients, testimonials, awards, metrics, founder quotes, operating structures, or external Ranjan Kumar biography data.
- Development placeholders (`AST-P01`) are permitted in local preview ONLY, must be logged in `MISSING_CONTENT_REPORT.md`, and must be supplied or cleanly omitted before any production build.
- Never ship placeholder tokens in production Schema.org JSON-LD.
- Never claim a test, build, or accessibility check passed unless actually executed and observed.
