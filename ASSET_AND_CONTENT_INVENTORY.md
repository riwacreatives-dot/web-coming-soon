# RIWA CREATIVES — ASSET & CONTENT INVENTORY (PHASE 2)

**Repository Root:** `c:\Users\Ranjan\web-coming-soon`  
**Inspection Scope:** All binary/SVG assets in `public/`, copy/data modules in `src/data/`, and embedded copy/URLs/credentials in `src/` and `index.html`.  
**Audit Date:** 2026-11-25  

> [!WARNING]
> **NO INVENTED CLAIMS:** All asset authenticity, permissions, client metrics, and team/founder biography details not backed by written client confirmation remain marked **`NEEDS CONFIRMATION / BLOCKED`** until signed off by Ranjan Kumar (`DEC-09`–`DEC-15`).

---

## Mandatory 13-Field Asset Register (All 6 Categories)

Fields indexed per entry: **(1) Asset ID**, **(2) Category**, **(3) Filename & Path**, **(4) Format & Byte Size**, **(5) Natural Dimensions & Orientation**, **(6) Visual Description (Direct Inspection)**, **(7) Palette / Hex Compliance**, **(8) Authenticity Status**, **(9) Permissions / Rights Status**, **(10) Current Code References**, **(11) Misuse / Defect Flagged**, **(12) Target Blueprint Placement / Hero Tier**, **(13) Action Required**.

### Category 1 — Brand Logos, Wordmarks & Mascots (`AST-S01`–`AST-S06`)

| 1. Asset ID | 2. Category | 3. Filename & Path | 4. Format & Bytes | 5. Dimensions & Orient. | 6. Visual Description | 7. Hex Compliance | 8. Authenticity | 9. Rights Status | 10. Current References | 11. Defect / Misuse | 12. Target Placement | 13. Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **AST-S01** | Brand Marks | `public/brand/riwa-logo-official.png` | PNG, `131,743 B` (~129 KiB) | `460×537` px (Portrait ~`0.86:1`) | Official Riwa crow silhouette + wordmark in official orange with transparent background | **Compliant** (pixel sample peaks: `#FC7D3C` 601px, `#FC7C3C` 561px, `#FD7D3C` 373px) | Authentic Riwa studio brand asset | Studio-owned (`NEEDS DEC-09 Vector Lock`) | `index.html:15,16,56`, `HeaderHUD.tsx:37,151`, `EditorialFooter.tsx:61`, `MenuDrawer.tsx:108`, `HeroSection.tsx:262,478`, `AboutRiwaSection.tsx:60`, `ProcessSection.tsx:38`, `StudioCardWarpLoader.tsx:89`, `TheWorld.tsx:259` | Identical binary to `AST-S02` (SHA256 `4EC743...`); heavy ~129 KiB for small nav marks | **Hero Tier 2 (Official Folio Mark)**, Header/Footer wordmark | Keep; export optimized WebP/AVIF & approve `#FD7D3C` SVG replacement |
| **AST-S02** | Brand Marks | `public/brand/riwa-logo-transparent.png` | PNG, `131,743 B` (~129 KiB) | `460×537` px (Portrait) | Duplicate of `AST-S01` | Compliant (`#FC7D3C` / `#FD7D3C`) | Authentic duplicate | Studio-owned | Unreferenced in `src/` | **Redundant exact duplicate** (`SHA256: 4EC7430440463F7E9ABF5C3D37409D43CADA4045480BA74637E5CA8BBD6714BF`) | None | **Remove duplicate** in Phase 3 after verification |
| **AST-S03** | Brand Marks | `public/brand/riwa-crow-mascot.jpg` | JPEG, `168,071 B` (~164 KiB) | `1024×1024` px (Square `1:1`) | Dark matte card featuring orange illustrated crow mascot & lowercase `"Riwa"` script | Visually warm orange on dark ground | Authentic Riwa brand mascot card | Studio-owned | Unreferenced in current `src/` | Unused binary in `public/brand/`; 168 KiB JPG | Optional `/about` studio card or Hero spec badge | Confirm usage or archive; convert to WebP if used |
| **AST-S04** | Brand Marks | `public/brand/riwa-crow-logo.svg` | SVG, `580 B` | Vector (`viewBox="0 0 100 100"`) | Geometric hexagonal polygon enclosing angular crow head | **NON-COMPLIANT (`#FF2A55` old red beak/eye)** | Unofficial legacy vector variant | Studio-owned | Referenced visually only via check; replaced or unused | Uses deprecated `#FF2A55` neon red instead of `#FD7D3C` / `#EA1E4D` | None (Replace) | **Deprecate or recolor/replace** with approved SVG mark (`DEC-09`) |
| **AST-S05** | Brand Marks | `public/brand/riwa-crow-vector.svg` | SVG, `836 B` | Vector (`viewBox="0 0 300 200"`) | Minimalist side-profile crow wing/head silhouette (`id="riwa-crow-body"`) | **NON-COMPLIANT (`#FF2A55` beak & eye)** | Legacy vector derivative | Studio-owned | `HeroSection.tsx:254,476` (debossed w/ `brightness-0 invert`) | Deprecated `#FF2A55` fill (`L9,L11`); not exact official orange mark vector | Hero Brand Folio texture or replace with approved `#FD7D3C` vector | Replace with official approved SVG (`DEC-09`) |
| **AST-S06** | Brand Marks | `public/brand/riwa-r-logo.svg` | SVG, `344 B` | Vector (`viewBox="0 0 100 100"`) | Rounded dark `#0D0F14` square badge with white `Syne` `"R"` (`font-weight="900"`) & dot | **NON-COMPLIANT (`#FF2A55` dot + `#0D0F14` + `weight 900` Syne)** | Legacy favicon/monogram draft | Studio-owned | Unreferenced in `src/` | Uses `#FF2A55` dot, old `#0D0F14` fill, and invalid Syne weight `900` | Replace favicon SVG or delete | Deprecate; regenerate clean `#111116` + `#FD7D3C`/`#EA1E4D` SVG |
| **AST-S07** | Collective Mascot | `public/brand/dalal-mascot.png` | PNG (alpha), `179,912 B` (~176 KiB) | `280×492` px (Portrait ~`0.57:1`) | Clean cutout illustrated character carrying `"BRAND DALAL"` tote bag | Uses neutral/gold streetwear palette matching regional division | Authentic Brand Dalal collective asset | Needs Founder confirmation (`DEC-15`) for public scope wording | `ThePeople.tsx:103` (+ `RegionalHubModal.tsx` modal mention) | **180 KiB** oversized PNG for tiny `280×492` slot | `/about` or Studio Collective footer proof | Keep if collective remains public; convert to <35 KiB WebP |

---

### Category 2 — Client Campaign & Creative Artwork (`AST-C01`–`AST-C05`)

| 1. Asset ID | 2. Category | 3. Filename & Path | 4. Format & Bytes | 5. Dimensions & Orient. | 6. Visual Description | 7. Hex Compliance | 8. Authenticity | 9. Rights Status | 10. Current References | 11. Defect / Misuse | 12. Target Placement | 13. Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **AST-C01** | Client Artwork | `public/work/solanas-chilli-chicken.jpg` | JPEG, `561,667 B` (~549 KiB) | `819×1024` px (`4:5` Portrait) | Viral street poster `"HOTTER THAN BADDIES — TRY OUR CHILLI GARLIC CHICKEN"` for Solanas on textured cotton paper w/ lipstick ink stamps | Warm paper + bold crimson/navy campaign palette | Real Solanas campaign plate | **NEEDS CONFIRMATION (`DEC-12`: client sign-off & brief/credits/metrics verification)** | `index.html:24,34,37`, `HeroSection.tsx:327,457`, `projectsData.ts:15,17`, `TheAttention.tsx:17`, `TelemetryCard.tsx:39`, `servicesData.ts:70`, `WorkPage.tsx:15` | **1) Uncompressed 549 KiB** preloaded hero asset; **2) Wrong `1200×630` OG tag dimensions in `index.html:25-26`**; **3) Exposed to WebGL shader loop in `HeroSection.tsx:326`** | **Hero Tier 1 Dominant Mounted Print Proof**; `/work` Featured Solanas Case; `/work/solanas-campaign` | **Verify rights (`DEC-12`)**, compress to WebP/AVIF (<120 KiB + responsive `srcset`), decouple WebGL |
| **AST-C02** | Client Artwork | `public/work/solanas-poster.jpg` | JPEG, `399,919 B` (~391 KiB) | `815×1024` px (`4:5` Portrait) | Overhead culinary dim-sum key visual framing embossed oxblood silk backdrop & wooden steamer (`Solanas` mark top) | Deep oxblood crimson + natural warm tones | Real Solanas campaign plate | **NEEDS CONFIRMATION (`DEC-12`)** | `projectsData.ts:18,88,89`, `TheAttention.tsx:11`, `ProcessSection.tsx:50`, `servicesData.ts:37`, `HeroSection.tsx:362,495` | **CRITICAL MISUSE:** Mounted as primary `heroImage` on **`hack-uttar-pradesh` (`projectsData.ts:88`)** and digital browser background (`HeroSection.tsx:362`)! Heavy 391 KiB JPG | **Hero Tier 1 Supporting Campaign Print / `/work/solanas-campaign` & `#creative-advertising` preview** | **Remove from Hack UP & digital slate**, convert to WebP/AVIF |
| **AST-C03** | Client Artwork | `public/work/solanas-sushi.png` | PNG, `126,616 B` (~124 KiB) | `362×454` px (`4:5` Low-Res Portrait) | Condensed vertical Solanas sushi platter social ad creative | Dark slate + crimson accent | Real Solanas ad creative (low-res export) | **NEEDS CONFIRMATION (`DEC-12`)** | `projectsData.ts:19,121,122`, `TheAttention.tsx:25`, `TheWorld.tsx:267`, `servicesData.ts:103`, `ProcessSection.tsx:62` | **CRITICAL MISUSE:** Mounted as `heroImage` on **`horizon-mun` (`projectsData.ts:121`)**! **Low resolution (`362×454`)** — fails full-width `16:10`/`21:10` hero slots (`ProjectDetailPage.tsx:99` stretches to >1000px!) | Restrict to small thumbnail / social grid inside Solanas dossier ONLY | **Remove from `horizon-mun` and large slots**; request HD master (>1000px) if needed |
| **AST-C04** | Client Artwork | `public/work/solanas-steamer-dimsum.jpg` | JPEG, `30,069 B` (~29 KiB) | `363×451` px (`4:5` Low-Res Portrait) | Steamer dim-sum menu hero visual | Warm wood & dark background | Real Solanas creative (low-res export) | **NEEDS CONFIRMATION (`DEC-12`)** | `projectsData.ts:20`, `TheAttention.tsx:26`, `ProcessSection.tsx:74` | Low resolution (`363×451`); strictly thumbnail-safe only | Small contact plate / gallery item in Solanas case study | Keep restricted to small thumbnails (`<= 360px` wide) or request HD |
| **AST-C05** | Client Artwork | `public/work/solanas-green-dimsum.png` | PNG, `312,683 B` (~305 KiB) | `363×454` px (`4:5` Low-Res Portrait) | Jade geometric wave pattern behind dim-sum basket | Emerald/jade wave background | Real Solanas creative (low-res export) | **NEEDS CONFIRMATION (`DEC-12`)** | `projectsData.ts:55,56`, `TheAttention.tsx:27`, `servicesData.ts:135` | **CRITICAL MISUSE:** Mounted as `heroImage` on **`dtc-accelerator-concept` (`projectsData.ts:55`)** & Technology capability preview (`servicesData.ts:135`)! Uncompressed 305 KiB for `363×454` | Restrict to small thumbnail inside Solanas case study ONLY | **Remove from `dtc-accelerator-concept` & `#digital-technology`**; compress to <45 KiB WebP |

---

### Category 3 — Studio Recruitment & Cultural Collateral (`AST-R01`)

| 1. Asset ID | 2. Category | 3. Filename & Path | 4. Format & Bytes | 5. Dimensions & Orient. | 6. Visual Description | 7. Hex Compliance | 8. Authenticity | 9. Rights Status | 10. Current References | 11. Defect / Misuse | 12. Target Placement | 13. Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **AST-R01** | Recruitment Poster | `public/brand/riwa-hiring-poster.jpg` | JPEG, `114,344 B` (~112 KiB) | `791×1024` px (Portrait ~`0.77:1`) | Authentic Riwa `"WE ARE HIRING — FOUNDER'S OFFICE ROLE"` street flyer with crimson halftone corner, cream paperclip card, `"Thinks like a founder. Creates like an artist."`, `@madebyriwa` | Matches Riwa paper + crimson halftone aesthetic | Authentic Riwa in-house poster | Studio-owned | `ThePeople.tsx:79`, `LeadershipSection.tsx:125` | **Role copy contradiction:** Modal launched from hiring section (`RegionalHubModal.tsx:228`) tells applicants they will work alongside **"Abhinav Singh"** | **Hero Tier 2 Supporting Studio Poster** (optional) & `/about` People / Hiring card | Keep; purge `"Abhinav Singh"` copy; convert to WebP (`<60 KiB`) |

---

### Category 4 — Event & Live Experience Media (`AST-E01`–`AST-E02`)

| 1. Asset ID | 2. Category | 3. Filename & Path | 4. Format & Bytes | 5. Dimensions & Orient. | 6. Visual Description | 7. Hex Compliance | 8. Authenticity | 9. Rights Status | 10. Current References | 11. Defect / Misuse | 12. Target Placement | 13. Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **AST-E01** | Live Events | **MISSING** (Currently misusing `solanas-poster.jpg` on `hack-uttar-pradesh`) | — | N/A | Hackathon photography, stage LED visuals, or original Hack UP collateral missing from `public/` | Target `#FD7D3C` + `#111116` | Conceptual / Unverified Hackathon dossier | **NEEDS CONFIRMATION (`DEC-13`)** | `projectsData.ts:78-109`, `TheRealWorld.tsx:53`, `EventsTakeoverSection.tsx:24` | Displays Chinese food art on Hackathon case study | `#events-experiences` showcase & `/work` (only if authentic proof exists) | **Supply authentic Hack UP assets/permissions OR mark strictly editorial UI spec without food photos** |
| **AST-E02** | Conferences / MUNs | **MISSING** (Currently misusing `solanas-sushi.png` on `horizon-mun`) | — | N/A | MUN assembly photography, delegate placards, or Horizon collateral missing from `public/` | N/A | Conceptual Blueprint | **NEEDS CONFIRMATION (`DEC-13` / PDF ban on invented `Horizon MUN`)** | `projectsData.ts:111-142`, `TheRealWorld.tsx:59`, `TheAttention.tsx:73`, `servicesData.ts:171` | Displays Sushi ad on MUN case study; Blueprint notes `Horizon MUN` may be cut as non-real concept | Remove from live portfolio unless genuine photos/brief provided | **Remove `horizon-mun` from portfolio/events showcase or supply authentic proof** |

---

### Category 5 — Founder & Leadership Portraits (`AST-P01`)

| 1. Asset ID | 2. Category | 3. Filename & Path | 4. Format & Bytes | 5. Dimensions & Orient. | 6. Visual Description | 7. Hex Compliance | 8. Authenticity | 9. Rights Status | 10. Current References | 11. Defect / Misuse | 12. Target Placement | 13. Action Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **AST-P01** | Portrait | **MISSING** (`public/brand/founder-ranjan.jpg` referenced as `null` in `ThePeople.tsx:7`) | — | Recommended `900×1100`+ px (`4:5`) | Currently renders placeholder monogram **`"RK."`** + `"REAL PHOTO PENDING"` in `ThePeople.tsx:55-59` & `LeadershipSection.tsx:51-56` | Charcoal/crimson frame | Authentic founder Ranjan Kumar verified; photo missing | Needs Founder upload (`DEC-14`) | `ThePeople.tsx:7,47-62`, `LeadershipSection.tsx:49-58` | Shows `"REAL PHOTO PENDING"` developer placeholder badge on production-facing pages | `/about` Studio / Founder section (and homepage Chapter if kept) | **Obtain clean portrait photo from Ranjan Kumar (`DEC-14`)** or remove `"PENDING UPLOAD"` bracket label |

---

### Category 6 — Missing Case Studies, Social Proof & Technical SEO Media (`AST-M01`–`AST-M05`)

| Asset ID | Category | Missing Deliverable | Impact in Current Repo | Action Required |
|---|---|---|---|---|
| **AST-M01** | SEO / Social Share | Dedicated static **`1200×630` Open Graph image** (`public/og-riwa.jpg` or `.png`) | `index.html:24-26` & `WorkPage.tsx:15` declare `og:image:width="1200"` & `630` pointing to `819×1024` portrait `solanas-chilli-chicken.jpg` (aspect mismatch crops text on WhatsApp/LinkedIn/X!) | Design & export true `1200×630` static OG card (`< 180 KiB`) |
| **AST-M02** | Capabilities (#01/#03) | Real UI / Branding case visuals for `#brand-identity`, `#digital-technology`, and `#brand-management-growth` | `servicesData.ts:103,135` uses Solanas Sushi (`362×454`) & Green Dimsum (`363×454`) to represent Digital & Technology! `HeroSection.tsx:362` uses Solanas Dimsum backdrop behind digital screen | Obtain 1–2 genuine website/identity screenshots OR replace preview slots with honest Riwa typographic/system specimens (`#111116` + `#F5F4F0`) |
| **AST-M03** | Hero Worktable Spec | Official **Approved `#FD7D3C` Vector Logo SVG** (`DEC-09`) | Zero `#FD7D3C` SVG files exist in `public/brand/`; `HeroSection`, `HeaderHUD`, `Footer` load 129 KiB PNG or `#FF2A55` SVG | Convert approved crow + wordmark to clean vector SVG (`#FD7D3C` + `#111116`/white light/dark variants) |
| **AST-M04** | Case Endorsements | Signed written testimonials (`DEC-12`) | `TestimonialsSection.tsx:93` displays `"Partner Quotes Coming Soon"` placeholder box; `ThePeople.tsx:207` says `"Signed partner quotes pending"` | Omit public placeholder cards cleanly until signed quotes are supplied (`Blueprint rule`: hide/replace rather than ship "Coming Soon" blocks) |
| **AST-M05** | Performance Formats | `.avif` / `.webp` responsive derivatives (`400w`, `800w`) for all kept raster artwork | Only unoptimized PNG/JPEG binaries exist (`~1.92 MB` raw raster footprint across `public/`) | Convert all retained rasters during Phase 3B/3C build prep |

---

## Hero Visual Dependency Matrix (Direction A — Anchored Editorial Worktable)

The approved **Direction A Hero (`IDEAS, MADE unreasonable.`)** separates desktop tabletop objects into three strict honesty tiers so **no speculative/studio specimen is presented as completed client work**:

| Tier | Asset / Object | Source File / Spec | Honesty Rule | Contrast / Tech Note |
|---|---|---|---|---|
| **Tier 1 (Primary Real Client Artwork)** | **Dominant Mounted Campaign Proof** (~70% focal weight) | `/work/solanas-chilli-chicken.jpg` (`819×1024`, optional inset plate `/work/solanas-poster.jpg`) | Authentic Solanas print proof; **requires `DEC-12` rights check** | Remove `LiquidArtworkCanvas` WebGL loop; mount in cotton `#ECE8DD` archival mat with CSS crop ticks & crisp shadow |
| **Tier 2 (Authentic Studio Identity)** | **Riwa Brand Mark / Studio Poster** | `/brand/riwa-logo-official.png` (pending `#FD7D3C` SVG) + optional `/brand/riwa-hiring-poster.jpg` | Studio-owned original material | Avoid `brightness-0 invert` hacks over `#FF2A55` SVG (`HeroSection.tsx:254`) |
| **Tier 3 (Honest Studio Hardware / Spec Objects)** | **Identity Folio** (`BRAND / 01`), **Digital UI Slate** (`DIGITAL / 03`), **Orange Pass** (`LIVE / 04`) | Styled studio hardware (`#14141A` folio, `#0D0E12` UI slate, `#FD7D3C` Event Pass) | Explicitly labeled as Riwa studio system & service portals (**no fake client logos/metrics**, remove `solanas-poster.jpg` backdrop from digital slate `L362`) | Ensure all text on `#FD7D3C` Orange Pass uses **`#111116` ink (`7.33:1` AAA)**; ensure button contrast meets WCAG 2.2 AA |

---

## Content, Links, Claims & Metrics Audit Checklist

| Item | Current Value in Codebase | Observed Locations | Audit Verdict & Required Action |
|---|---|---|---|
| **Founder Identity** | `Ranjan Kumar` | `index.html:60`, `leadershipData.ts:5`, `ThePeople.tsx:67`, `AboutRiwaSection.tsx:9` | **KEEP & STANDARDIZE** |
| **Erroneous Persona** | **`Abhinav Singh`** / **`Abhinav`** | `RegionalHubModal.tsx:228`, `ManifestoSection.tsx:23` | **DELETE / PURGE IMMEDIATELY** |
| **Primary Positioning** | `Independent Creative & Growth Studio.` / `IDEAS, MADE unreasonable.` | `HeroSection.tsx:143-145`, `index.html:6,46`, `StudioCardWarpLoader.tsx:94` | **KEEP** (ensure secondary tagline consistency) |
| **Email Endpoint** | `riwacreatives@gmail.com` (`mailto:` brief + copy modal) | `IntakeSection.tsx`, `TheNextIdea.tsx`, `EditorialFooter.tsx`, `LeadershipSection.tsx`, `FinalCTASection.tsx`, `MenuDrawer.tsx` | **PRESERVE** working `mailto:` + clipboard copy UX |
| **WhatsApp Endpoint** | `https://wa.me/917015048144` | `WhatsAppCTA.tsx:5,13`, `EditorialFooter.tsx:136`, `IntakeSection.tsx:403`, `TheNextIdea.tsx:198,341,410` | **PRESERVE** |
| **Instagram Handle** | `https://instagram.com/madebyriwa` (`@madebyriwa`) | `EditorialFooter.tsx:131`, `MenuDrawer.tsx:200`, `index.html:64`, `riwa-hiring-poster.jpg` | **PRESERVE** |
| **Unverified Social Handle** | `@riwacreatives` (Twitter meta) | `index.html:30-31` | Confirm active X/Twitter account or replace with verified metadata |
| **URLs & Domain** | `https://riwacreatives.in` vs `https://riwacreatives.vercel.app` | `index.html:21,24,55`, `WorkPage.tsx:15` vs `useDocumentMeta.ts:11` | Unify on canonical **`https://riwacreatives.in`** |
| **Unverified Solanas Stats** | `+420% Weekend Orders`, `+340% Dinner Inbounds`, `6.2% CTR` | `projectsData.ts:23,42`, `TheAttention.tsx`, `TheWorld.tsx`, `ThePeople.tsx`, `TestimonialsSection.tsx`, `ShowreelViewport.tsx`, `TelemetryCard.tsx` | **BLOCKED (`DEC-12`):** Remove or replace unless written client confirmation is supplied |
| **Fabricated Telemetry & Spend** | `5.4x ROAS`, `99.4% CAPI`, `-34% CAC`, `₹2.5 Cr Run Rate`, `₹2,50,000` spend | `TelemetryCard.tsx:67,74,80`, `RegionalHubModal.tsx:169,187` | **DELETE COMPLETELY** |
| **Unverified Legal / Founding Claims** | `EST. 2024`, `GOVT. OF INDIA MSME REGISTERED ENTERPRISE` | `LeadershipPage.tsx:28`, `EditorialFooter.tsx:219`, `MenuDrawer.tsx:215,262`, `ThePeople.tsx:30`, `ThePointOfView.tsx:404` | **NEEDS CONFIRMATION (`DEC-15`):** Verify Udyam/MSME number & founding year with Ranjan Kumar or remove |
| **Outdated / Speculative Projects** | `DTC Brand Accelerator`, `Horizon MUN`, `Hack Uttar Pradesh` | `projectsData.ts:45-142`, `TheAttention.tsx`, `TheRealWorld.tsx` | Remove or clearly quarantine with authentic artwork upon **`DEC-13`** decision |
| **Technical Claim Error** | `"REACT 18"` / `"Three.js"` | `TheWorld.tsx:261`, `README.md:27,30` | Update to React 19 / no Three.js (or remove dev widget) |
