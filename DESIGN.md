---
# gstack: design-md-format=spec
name: Luvea
description: Quiet-luxury loungewear landing page; warm cream paper, charcoal ink, real product photography.
colors:
  primary: "#1a1a1a"
  on-primary: "#ffffff"
  primary-hover: "#2e2b27"
  surface: "#faf9f6"
  surface-alt: "#f3eee7"
  surface-raised: "#ffffff"
  text: "#1a1a1a"
  text-secondary: "#6b6560"
  text-muted: "#716b63"
  text-strong-muted: "#4a4640"
  border: "#ddd6cb"
  border-subtle: "#ebe5dc"
  border-strong: "#c9c0b4"
  rating: "#eab308"
  whatsapp: "#15803d"
  whatsapp-hover: "#116b33"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 500
    fontSize: clamp(2rem, 4.8vw, 3.4rem)
    letterSpacing: 0.01em
  display-hero:
    fontFamily: Cormorant Garamond
    fontWeight: 500
    fontSize: clamp(2.6rem, 4.6vw, 4.1rem)
    letterSpacing: 0.01em
  body:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    lineHeight: 1.6
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.72rem
    fontWeight: 700
    letterSpacing: 0.28em
rounded:
  xs: 2px
  sm: 4px
  md: 12px
  lg: 18px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.surface-raised}"
    borderColor: "{colors.border-subtle}"
    rounded: "{rounded.sm}"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  nav-link:
    textColor: "{colors.text}"
---

# Luvea

## Overview

**Creative North Star:** a folded pajama set on linen paper: calm, warm, tactile, with the product photo doing the talking.
**Product context:** Luvea sells rayon grade A pajamas (Aluna, Midnight Bloom, Ruffle series) to Indonesian women; sales happen on TikTok Shop and WhatsApp. This repo is a single static landing page (Next.js static export).
**Mode per surface:** Persuade (the whole page is a landing page).
**Key characteristics:**
- Real model photography on cut-out white, never stock.
- Serif display headlines, quiet sans body, lots of cream.
- One dark solid button per view; everything else is secondary.

## Colors

**Strategy:** Restrained. Warm neutrals carry the page; charcoal is the only action color; WhatsApp green appears only on WhatsApp actions; rating yellow only on stars.
**Light or dark:** light. Visitors arrive from TikTok on phones, mostly in daytime or bedside lamp light; cream reads softer than pure white there.
Text tokens are AA-checked: `text-muted` passes 4.5:1 on white, cream and beige. Do not reintroduce the old `#9a948c` for text (3.0:1). The legacy aliases in `globals.css` (`--rose-*`, `--pink-*`, `--lavender-*`) all point at the neutral scale; use `--cloud-*` names in new code.
The logo's red script is not part of the UI palette yet. If it becomes the accent, add it as one token and use it in one place first.

## Typography

Cormorant Garamond (display) and Plus Jakarta Sans (body, labels), both via `next/font/google`. Two families only.
- Section titles use `display`; the hero uses `display-hero`, which scales with the hero column so "Adem sepanjang hari," stays on one line from 900px up.
- Headings use `text-wrap: balance`.
- Smallest text anywhere is 0.72rem (11.5px), for uppercase tracked labels and badges only. Body copy should be 1rem; card descriptions no smaller than 0.86rem.
- Plus Jakarta Sans is on the overused list; it passes here as body/UI only. The display voice stays Cormorant.

## Layout

- Max content width 1120-1320px; hero 1400px.
- Breakpoints in use: 480, 640, 900, 1200px.
- Sections breathe at 96px vertical (120px from 900px up); the final CTA uses 104px.
- Mobile hero: product photo first (max 36svh), then headline, then the primary CTA, all inside the first 375x812 viewport.
- Mobile shows a sticky TikTok/WhatsApp bar after the hero leaves the screen; the floating WhatsApp button is desktop/tablet only.

## Elevation & Depth

Shadows are warm (`rgba(26,26,26,…)`), always offset downward with soft blur: `--shadow-sm`, `--shadow-md`, `--shadow-lg`. No zero-offset glows. Most cards are flat with a 1px `border-subtle` border.

## Shapes

- `xs` 2px for badges and rect buttons, `sm` 4px for cards, `md`/`lg` for FAQ items, `full` for pill buttons.
- Product, problem, size and testimonial cards are square-ish (4px); FAQ items are the exception at 18px. Pick one when touching those components.

## Components

- **Primary button:** charcoal pill, white text, warm shadow; hover lifts 1px and goes to `primary-hover`; focus-visible 2px outline in `text-muted`.
- **WhatsApp button:** deep green `whatsapp` with white text (5.0:1). Never the brand `#25d366` behind white text (2.0:1).
- **Color swatches:** information, not controls: dots plus the color names in text. They do not link anywhere.
- **Touch targets:** every tappable control is at least 44px in its short dimension, using padding or a `::before` hit area if the visual must stay small.
- **Sticky CTA (mobile):** hidden until `#hero` leaves the viewport; its links are not tabbable while hidden.

## Do's and Don'ts

- Do: keep one solid dark CTA per viewport.
- Do: check new text colors against white, cream and beige for 4.5:1.
- Do: use real product photos exported without baked-in captions.
- Do: state each claim (Rayon grade A, gratis ongkir, retur 7 hari) in one place.
- Don't: add fabricated urgency or social proof (random order counters, self-resetting countdowns, unverifiable "Terverifikasi" badges). The feature flags in `src/data/links.ts` stay off until wired to real data.
- Don't: put a kicker label above every section title, or icon-in-circle feature grids.
- Don't: use emoji as badges or icons.
- Don't: link swatches or decorative elements to the shop.

## Motion

- **Approach:** minimal-functional.
- **Easing:** `--ease` cubic-bezier(0.16, 1, 0.3, 1) for entrances; enter(ease-out) exit(ease-in) move(ease-in-out).
- **Duration:** micro 100ms, short 250ms, medium 400-450ms, hero entrance 700-900ms.
- **The one authored moment:** the hero fade-up on load. Section reveals and the top marquee are candidates for removal; `prefers-reduced-motion` disables the hero animation.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-09 | Initial DESIGN.md extracted from the live page | Created by /design-review from rendered tokens after the publish-readiness audit |
| 2026-10-09 | `text-muted` #9a948c → #716b63, WhatsApp green #25d366 → #15803d | WCAG AA contrast on all surfaces |
| 2026-10-09 | Label/badge floor 0.72rem, 44px touch targets | 31 labels were 9-11px; dots and tabs were 8-27px |
| 2026-10-09 | Synthetic scarcity counter and promo countdown turned off | Not backed by real orders or a real end date |
