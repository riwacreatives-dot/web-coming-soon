---
trigger: glob
globs: "*.css, **/*.css, *.scss, **/*.scss, *.tsx, **/*.tsx, *.jsx, **/*.jsx, *.vue, **/*.vue, *.astro, **/*.astro, *.html, **/*.html"
description: "WCAG 2.2 AA contrast, target-size, focus-not-obscured, reduced-motion, and image-loading guardrails for Riwa Creatives."
---

# UI Accessibility & Performance Guardrails

- Separate text contrast (WCAG 2.2 SC 1.4.3: >=4.5:1 normal, >=3.0:1 large; never round up) from non-text UI contrast (SC 1.4.11: >=3.0:1 on interactive input/button borders, focus rings, and essential icons). Decorative hairlines (`#D6D5D0`, `#2A2A33`) must never be the sole boundary of interactive controls.
- On `#FD7D3C` Signature Orange backgrounds, use Charcoal `#111116` (`7.32:1` truncated, AAA) for all text, borders, and primary button fills; never use white text (`2.33:1` / `2.56:1` FAIL).
- Enforce WCAG 2.2 SC 2.5.8 minimum target size (`24x24` CSS px floor) everywhere and `>=44x44` CSS px on standalone buttons, nav triggers, close controls, and chips.
- Support WCAG 2.2 SC 2.4.11 (Focus Not Obscured): drive `scroll-padding-top` (on `html`) and `scroll-margin-top` (on anchored sections) dynamically from actual stacked sticky-header/subnav height (`--sticky-offset`), trap focus inside modals/drawers, and verify via manual `Tab` / `Shift+Tab` traversal.
- Target Google's Good Core Web Vitals field thresholds (75th percentile, mobile and desktop independently): `LCP <= 2.5 seconds`, `INP <= 200 milliseconds`, and `CLS <= 0.1`.
- When an approved Hero focal image is rendered (Priority 1 or Priority 2): omit `loading="lazy"`, add `fetchpriority="high"`, leave `decoding="auto"` (do NOT force `decoding="sync"`), and declare explicit width/height or CSS `aspect-ratio`. Apply `loading="lazy"` and `decoding="async"` to below-fold images.
- Neutralize all scroll reveals and hover transforms under `@media (prefers-reduced-motion: reduce)`.
- Do NOT add WebGL/Three.js, scroll-hijacking libraries (Lenis, Locomotive Scroll, ScrollSmoother), floating red neon glows, `"RIWA Mode"` toggles, or infinite motion loops.
