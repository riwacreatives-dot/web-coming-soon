# ⚡ RIWA × Studio Namma — Animation Breakdown & Design Shift Guide

> **Document:** `studio_namma_redesign_plan.md`  
> **Objective:** Exhaustive breakdown of **Studio Namma (`studionamma.com`)'s award-winning animation engine and design language**, and a definitive roadmap to **drop the original heavy RIWA agency style** in favor of Studio Namma's ultra-minimal, airy, quiet-luxury digital studio aesthetic.

---

## 1. 🔍 Deconstruction of Studio Namma's Signature Animations

By reverse-engineering Studio Namma's production codebase, we identified the exact 8 kinetic motion techniques that give the site its fluid, Awwwards Site of the Day feel:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      STUDIO NAMMA ANIMATION ENGINE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  [1] SPLIT-TEXT CHAR STAGGER     — Letters slide up from masks (stagger 0.02)│
│  [2] LINE-MASK PARAGRAPH REVEAL  — Lines emerge from overflow:hidden spans  │
│  [3] INLINE EXPANDING VISUAL PILL— 0rem -> 10rem visual capsules in text   │
│  [4] INTERACTIVE HOVER WORDS     — Inline media triggers ([detail], [play]) │
│  [5] 3D TILT POLYGON MENU WIPE   — Page tilts (rot: 10°, x: 300) + clipPath │
│  [6] INERTIAL CURSOR WITH TILT   — Smooth lerp speed 0.3 + -7° rotation     │
│  [7] FLOATING PROJECT MEDIA      — Media preview follows cursor with inertia│
│  [8] SCROLL-SCRUBBED LOGO STRETCH— Massive footer logo height 0px -> 100%   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 1.1 The Staggered Character / Letter Mask Reveal (`.heading-appear`)
* **How Studio Namma does it:**
  * Uses SplitText on headings to split text into `words` and `chars`.
  * Each character is wrapped in an `overflow: hidden` mask.
  * Starting state: `gsap.set(chars, { yPercent: 150, display: 'inline-block' })`.
  * Animation: Slides up to `yPercent: 0` with `duration: 1.5s`, `ease: 'power4.out'`, and an ultra-tight stagger of `0.027s` per character.
* **Why it feels so good:** Words don't simply fade in; every letter physically emerges from below an invisible baseline like typography being minted live on scroll.

### 1.2 The Line-Appear Mask Animation (`.line-appear` / `.quote_text`)
* **How Studio Namma does it:**
  * Splits editorial paragraphs into lines. Each line is dynamically wrapped in an element: `<span class="line-mask" style="display:block; overflow:hidden;">`.
  * Lines start at `yPercent: 110%`.
  * On scroll trigger (`top 95%`), lines slide smoothly into view with `stagger: 0.12s`, `duration: 1.2s`, `ease: 'power4.out'`.
* **Why it feels so good:** Prevents awkward block jumps; text flows in like lines of poetry.

### 1.3 The Inline Expanding Visual Capsule (`.cta_visual`)
* **How Studio Namma does it:**
  * Embedded inside headings or text paragraphs is an inline pill element `<span class="cta_visual">`.
  * Starts at `width: 0rem` with `overflow: hidden; border-radius: 9999px;`.
  * As the element enters the viewport, it smoothly expands horizontally from `0rem` to `10rem` (`7rem` on tablet, `4.4rem` on mobile) using a custom cubic-bezier ease (`M0,0 C0.819,0.077 0,1 1,1`).
  * Inside the pill, a looping video or abstract visual plays seamlessly between words.

### 1.4 Interactive Kinetic Hover Words (`[detail]`, `[playground]`)
* **How Studio Namma does it:**
  * Specific words in the manifesto or intro statement are interactive triggers.
  * Hovering words triggers an immediate state shift: an inline video thumbnail blooms, or a floating preview canvas smoothly follows the cursor.
  * Moving away reverses the animation with subtle damping.

### 1.5 3D Page Tilt & Diagonal Polygon Menu Curtain (`openMenu`)
* **How Studio Namma does it:**
  * Studio Namma does **not** use a simple slide-down drawer.
  * When opening the menu:
    1. The underlying main page container physically rotates and translates away:
       `tl.to(pageMain, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5, duration: 2, ease: "power4.inOut" })`
    2. The menu curtain deploys with a diagonal polygon clip-path:
       `tl.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)" })`
    3. The menu links slide in with staggered line masks: `y: height * 1.2 -> y: 0` (`stagger: 0.05`).
* **Why it feels so good:** Creates a jaw-dropping sense of spatial depth and 3D choreography.

### 1.6 Magnetic Inertial Cursor with `-7°` Angle Tilt
* **How Studio Namma does it:**
  * Custom cursor uses an inertial interpolation loop (`cursorX += (mouseX - cursorX) * 0.3`).
  * On hover over interactive targets, the cursor adds a `.hover` class that rotates by `-7deg` (`rotate(-7deg)`) and morphs into a pill with label text.

### 1.7 Selected Works: Floating Inertial Media Previews
* **How Studio Namma does it:**
  * In the project list, project titles sit on clean horizontal hairline rows.
  * Hovering any project makes a floating video/artwork card appear near the cursor.
  * Moving the mouse makes this media card follow the pointer with weighted spring inertia.

### 1.8 Scroll-Scrubbed Footer Logo Stretch (`initLogoStretch`)
* **How Studio Namma does it:**
  * The colossal brand logo in the footer starts collapsed at `height: 0px`.
  * As the user scrolls into the footer, GSAP scrubs the height from `0px` to `100%` in direct synchronization with scroll velocity.

---

## 2. ✂️ Dropping the Original RIWA Style vs. Shifting to Studio Namma

To truly mirror Studio Namma, we must strip away the remnants of loud agency brutalism and adopt Studio Namma's airy quiet luxury:

| Element | ❌ Drop (Old RIWA Style) | ✅ Adopt (Studio Namma Aesthetic) |
| :--- | :--- | :--- |
| **Borders & Dividers** | Thick borders, heavy red outline boxes, prominent card containers | **Ultra-thin 1px hairlines** (`rgba(255,255,255,0.08)` / `rgba(0,0,0,0.08)`), lots of open breathing space |
| **Color Accents** | Bright red blocks, neon red background fills, red glows | **Strict monochrome foundation** (Chalk White, Charcoal, Deep Black) with subtle laser-red used only as a needle-point accent |
| **Typography Style** | Loud, aggressive all-caps brutalism | **Refined editorial sans-serif** with lowercase phrasing, subtle letter-spacing, and high-fashion line heights |
| **Headlines** | Static text blocks | **Letter-by-letter masked character stagger** on scroll (`overflow: hidden` masks) |
| **Paragraphs & Copy** | Long paragraphs of marketing jargon | **Short, poetic editorial statements** with inline expanding visual pills |
| **Navigation Drawer** | Standard slide-down mobile menu | **3D spatial page tilt (rotation 10°) + diagonal polygon clip-path wipe** |
| **Project Showcase** | Heavy image cards with thick badges | **Minimalist full-bleed rows with cursor-following floating media** |
| **Cursor Experience** | Basic dot and ring | **Inertial cursor that tilts -7° and morphs into contextual action capsules** |

---

## 3. 📐 Step-by-Step Implementation Blueprint for the Redesign

### Step 1: Install GSAP & Core Animation Plugins
Install `gsap` for hardware-accelerated SplitText, ScrollTrigger, and CustomEase timelines matching Studio Namma's exact timings:
```bash
npm install gsap
```

### Step 2: Implement the Studio Namma Split-Text Character Stagger
* Create a reusable component `<SplitHeading>`:
  * Splits string into individual character spans wrapped in masking containers.
  * Characters animate from `yPercent: 120%` to `yPercent: 0%` with stagger `0.025s` and cubic-bezier ease.
  * Applies to `"WE MAKE IT HAPPEN"`, section titles, and manifesto statements.

### Step 3: Implement the Inline Expanding Visual Pill (`<ExpandingPill>`)
* Create an inline visual pill component:
  * Renders inside the editorial narrative:
    `"We think craft and design"` → `"We think [ ── VIDEO ── ] craft and design"`.
  * Starts at `width: 0` and expands to `width: 8rem` as the heading enters the viewport.
  * Houses a looping high-fashion video/image clip of the Solanas culinary art.

### Step 4: Implement 3D Page Tilt & Polygon Clip-Path Navigation Curtain
* Update `MenuDrawer.tsx` and wrap the main page in a motion container (`#page-main`):
  * On menu open:
    * `#page-main` tilts: `rotate: 10deg, x: 250px, y: 350px, scale: 1.4, opacity: 0`.
    * Menu curtain reveals with diagonal polygon:
      `clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)"`.
    * Menu links reveal with staggered line-mask slides.

### Step 5: Implement Floating Cursor-Following Project Media
* Refactor `SelectedWorks.tsx`:
  * Switch to Studio Namma's editorial project rows.
  * Hovering any project summons an inertial floating preview card that tracks the mouse with a `-7°` tilt and smooth damping.

### Step 6: Implement Scroll-Scrubbed Footer Logo Stretch
* Refactor `EditorialFooter.tsx`:
  * Bind the colossal `RIWA CREATIVES` footer typography to scroll position so it dynamically stretches upward as you scroll to the bottom.

---

## 4. Summary of Planned Visual Shift

By executing this shift, the website will transform from a standard marketing agency landing page into an **Awwwards-caliber digital experience**:
* **Ultra-refined typography that animates letter-by-letter.**
* **Poetic editorial statements with expanding video capsules.**
* **3D spatial menu transitions with polygon clipping.**
* **Inertial cursor physics with interactive floating media.**
* **Pristine, quiet luxury monochrome aesthetic.**

---
**Status:** Saved in `studio_namma_redesign_plan.md`. Ready to execute the animation and design transformation.

