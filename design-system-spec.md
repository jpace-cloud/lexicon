# Unified Design System Specification

**Version:** 1.0
**Date:** 2026-03-26
**Scope:** thepace.io · thepace.io/lexicon · parlance.business

This document defines the unified visual language for the entire ecosystem. It is specific enough to implement from — not vague mood-board language. All three brands share the same foundation; differentiation comes from tone and density, not colour divergence.

---

## Ecosystem

- **thepace** (thepace.io) — parent company. Tone: visionary, premium, calm, editorial, future-facing.
- **Lexicon** (thepace.io/lexicon) — design system. Tone: systematic, precise, modular, neutral, technical.
- **Parlance** (parlance.business) — product. Tone: practical, polished, efficient, trustworthy, product-led.

---

## Style Mix

The visual language blends four styles in controlled proportions:

- **50% Minimalism** — the foundation. Clean typography, meaningful whitespace, reduction of noise, elegant restraint, simple interaction patterns.
- **20% Neo-brutalism** — confident blocks, strong edge definition, bold card boundaries, assertive spacing, occasional oversized headings, sharp layout contrast. NOT chaotic or aggressive.
- **20% Glassmorphism** — translucent panels, frosted surfaces with controlled blur, layered navigation modules, premium depth. Only where it improves hierarchy. NEVER reduces legibility.
- **10% Neumorphism** — soft tactile button states, restrained input fields, subtle inset/raised states, micro-surface treatment. NEVER reduces clarity or contrast.

This must feel like a mature design language, NOT a style experiment.

---

## 1. Colour System

### Shared neutral foundation (all three brands)

| Token | Light mode | Dark mode | Usage |
|-------|-----------|-----------|-------|
| bg-page | `#FFFFFF` | `#090a0f` | Page background |
| bg-surface-1 | `#F8F8FA` | `#0f1015` | Content containers |
| bg-surface-2 | `#F0F0F3` | `#16171d` | Elevated cards |
| bg-surface-3 | `#E8E8EC` | `#1e1f26` | Raised panels |
| bg-glass | `rgba(255,255,255,0.6)` | `rgba(255,255,255,0.04)` | Glass panels |
| text-primary | `#101828` | `#FFFFFF` | Headings |
| text-secondary | `#344054` | `#C5C6CA` | Body text |
| text-muted | `#667085` | `#A1A1AA` | Captions, labels |
| border-default | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Default borders |
| border-hover | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` | Hover borders |

### Brand accent colours

- thepace: purple-500 `#7C3AED` — used sparingly, editorial emphasis
- Lexicon: purple-500 `#7C3AED` — system accent, interactive elements
- Parlance: purple-500 `#7C3AED` — primary actions, CTAs

All three share the same accent to feel familial. Differentiation comes from tone and density, not colour divergence.

### Semantic colours (shared)

| Token | Value | Usage |
|-------|-------|-------|
| success | `#22C55E` | Positive states, pass indicators |
| warning | `#EAB308` | Caution states, "coming soon" |
| error | `#EF4444` | Destructive states, failures |
| info | `#3B82F6` | Informational highlights |

### Interactive states

| State | Value | Notes |
|-------|-------|-------|
| Default | `#7C3AED` | purple-500 |
| Hover | `#A78BFA` | purple-400 |
| Active | `#5B21B6` | purple-600 |
| Focus ring | `0 0 0 2px #7C3AED` | 2px offset, not 3px |
| Disabled | opacity 0.5 | cursor not-allowed |

---

## 2. Typography System

### Font stack

| Role | Family | Source |
|------|--------|--------|
| Headings | Satoshi Variable (500–700) | Fontshare |
| Body | DM Sans (400–500) | Google Fonts |
| Code | JetBrains Mono (400) | Google Fonts |

### Type scale

| Token | Size | Weight | Line-height | Letter-spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| display | 56px | 700 | 1.1 | -0.025em | Hero headlines (thepace only) |
| h1 | 40px | 700 | 1.15 | -0.02em | Page titles |
| h2 | 32px | 600 | 1.2 | -0.015em | Section titles |
| h3 | 24px | 600 | 1.3 | -0.01em | Card titles, subsections |
| h4 | 20px | 500 | 1.4 | 0 | Component headings |
| body-lg | 18px | 400 | 1.6 | 0 | Editorial body (thepace) |
| body | 16px | 400 | 1.6 | 0 | Standard body |
| body-sm | 14px | 400 | 1.5 | 0 | Dense UI, product text |
| caption | 13px | 500 | 1.4 | 0 | Labels, badges |
| overline | 11px | 500 | 1.3 | 0.1em | Section labels, uppercase |
| code | 14px | 400 | 1.6 | 0 | Code blocks, mono text |

### Brand-specific typography behaviour

**thepace:** Uses `display` (56px) for hero. Body at 18px. More whitespace between paragraphs (32px). Pull quotes at 24px italic.

**Lexicon:** No `display` size. H1 at 40px max. Body at 16px. Tighter paragraph spacing (24px). Code blocks prominent.

**Parlance:** No `display` size. H1 at 36px max. Body at 14–16px. Dense product UI uses body-sm. Dashboard text compact.

---

## 3. Surface & Material System

### Material hierarchy

| Layer | Name | Background | Border | Shadow | Blur | Usage |
|-------|------|-----------|--------|--------|------|-------|
| 0 | Page | bg-page | none | none | none | Page background |
| 1 | Container | bg-surface-1 | border-default 1px | none | none | Content areas, sidebars |
| 2 | Card | bg-surface-2 | border-default 1px | `0 2px 8px rgba(0,0,0,0.04)` | none | Cards, list items |
| 3 | Glass panel | bg-glass | border-default 1px | `0 4px 16px rgba(0,0,0,0.06)` | `backdrop-filter: blur(12px)` | Featured cards, nav on scroll, floating panels |
| 4 | Modal | bg-surface-1 | border-hover 1px | `0 8px 32px rgba(0,0,0,0.12)` | none | Modals, command palette, overlays |

### Corner radius

| Element | Radius |
|---------|--------|
| Small (badges, pills) | 6px |
| Medium (buttons, inputs) | 8px |
| Cards | 12px |
| Large panels, modals | 16px |
| Full round (avatars, toggles) | 9999px |

### Neo-brutalist elements (use sparingly)

- Section dividers: 2px solid border (not 1px).
- Featured cards: slightly thicker border (1.5px) with sharper corners (8px not 12px).
- Oversized section headings that break the grid slightly.
- Strong visual rhythm through alternating section backgrounds (bg-page → bg-surface-1 → bg-page).
- Bold left-accent borders on pull quotes and callouts (3px purple-500).

### Glassmorphism rules

- ONLY on Layer 3 (glass panels, sticky nav, featured cards).
- Max blur: 12px (NOT 20px — 20px is too heavy).
- Background: `rgba(255,255,255,0.04)` in dark mode.
- Border: `1px rgba(255,255,255,0.08)`.
- NEVER on text-heavy content areas.
- NEVER where it reduces text contrast below AA.

### Neumorphism rules

- ONLY on interactive micro-elements: toggle knobs, selected tab indicators, pressed button states.
- Implemented via subtle inset shadow, NOT via background manipulation.
- Must pass contrast check in both light and dark mode.
- Pressed state: `inset 0 1px 2px rgba(0,0,0,0.1)` — barely visible.

---

## 4. Component Styles

### Buttons

**Primary:** bg purple-500, text white, radius 8px, height 40px, font-weight 500. Hover: `filter: brightness(1.1)`. Active: purple-600. Focus: 2px purple ring.

**Secondary:** bg transparent, border 1px border-default, text text-primary, radius 8px, height 40px. Hover: bg-surface-2 + border-hover. Focus: 2px purple ring.

**Ghost:** bg transparent, text purple-500, radius 8px, height 36px. Hover: bg purple at 8% opacity. Focus: 2px purple ring.

**Danger:** bg error, text white. Same specs as primary otherwise.

**Sizes:**
| Size | Height | Font size |
|------|--------|-----------|
| sm | 32px | 13px |
| md | 40px | 14px |
| lg | 48px | 16px |

**Disabled:** opacity 0.5 on all variants. No pointer events.

### Cards

**Default:** bg-surface-2, border 1px border-default, radius 12px, padding 24px.

**Hover:** `translateY(-2px)`, shadow `0 4px 20px rgba(124,58,237,0.08)`, border-hover.

**Neo-brutalist variant:** border 1.5px, radius 8px, no shadow. Hover: border-hover only.

**Glass variant:** bg-glass, blur 12px, border border-default. For featured/premium items only.

### Inputs

- bg-surface-2, border 1px border-default, radius 8px, height 40px, padding 0 12px.
- Focus: border purple-500, ring 2px purple at 20% opacity.
- Error: border error, helper text in error colour.
- Disabled: opacity 0.5, bg-surface-1.
- Label: caption size (13px), weight 500, text-secondary. Above the input, 6px gap.

### Navigation

- Sticky nav on scroll: Layer 3 (glass panel), blur 12px, bg-glass, border-bottom 1px border-default.
- Nav links: text-secondary, hover text-primary, active text-primary + bg-surface-2 rounded-md.
- Mobile: sheet/drawer from left, full-height, bg-surface-1.

### Tables

- Header: bg-surface-2, text overline style (11px, weight 500, uppercase, text-muted).
- Rows: height 48px, border-bottom 1px border-default. Hover: bg-surface-2.
- Striped variant: alternating bg-surface-1 / bg-page.

### Badges / Pills

- Rounded-full (9999px), height 24px, padding 0 10px, font caption (13px weight 500).
- Variants: default (bg-surface-2, text-secondary), purple (bg purple at 10%, text purple-400), success/warning/error/info with semantic colours at 10% bg.

---

## 5. Spacing Logic

**Base unit: 4px.**

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

### Section spacing

| Context | Value |
|---------|-------|
| Between major page sections | 80px (thepace: 96px for editorial breathing room) |
| Between section title and content | 32px |
| Between cards in a grid | 16px (Parlance dense) or 24px (thepace/Lexicon) |
| Card internal padding | 24px |
| Button groups gap | 12px |

---

## 6. Motion Guidance

### Scroll reveal (all sites)

All transitions: **500ms ease**, opacity 0→1 + `translateY(16px)` → `translateY(0)`. Stagger between siblings: **60ms**.

### Hover transitions

200ms ease on `transform`, `box-shadow`, `border-color`, `filter`.

### Modal / panel entrance

Opacity 0→1 + `translateY(8px)` → 0, 300ms ease. Overlay fades in 200ms.

### Reduced motion

All animation disabled. Elements appear instantly. Respect `prefers-reduced-motion: reduce`.

### Permanently banned

No bounce, spring, elastic, shimmer, pulse, glow-pulse, or animated backgrounds. This was established in Prompt 6 and is permanent.

---

## 7. Brand-Specific Application Notes

### thepace

- More editorial whitespace (section spacing 96px not 80px).
- Display typography (56px) in hero only.
- Body text at 18px for readability.
- Pull quotes with 3px purple left border.
- More atmospheric — static gradient glows in hero background.
- Fewer cards per row (2-col max on desktop for featured content).
- Glass panels used more liberally for premium depth.

### Lexicon

- Tighter, more systematic layouts.
- No display typography — H1 at 40px max.
- Body at 16px, code blocks prominent.
- Stronger grid logic — modular cards for tokens/components.
- Documentation-first hierarchy.
- Glass panels rare — only for featured component previews.
- Neo-brutalist section dividers more prominent.

### Parlance

- Most functional and dense of the three.
- H1 at 36px max, body at 14–16px.
- Dashboard uses body-sm (14px).
- Cards at 16px gap (tighter than other two).
- More obvious interactive cues (stronger hover states, clearer CTAs).
- Glass panels minimal — only sticky nav.
- Neo-brutalist card borders for integration/workflow cards.

---

## 8. Logo Integration Rules

### Display rules

- Use dark-mode logos on dark backgrounds, light-mode on light.
- Default opacity: 0.5, hover: 0.7. Transition 200ms.
- Never scale logos disproportionately.
- Group by function (design tools, code tools, browsers, frameworks) — not alphabetically.
- Trust bars: single row, horizontally centred, 32px gap between logos, max-height 28px per logo.
- Integration grids: 3-col or 4-col cards with logo + name + one-line description.

### Where logos appear

- **thepace:** product showcase only (Parlance, Lexicon logos). Minimal tool logos.
- **Lexicon:** framework/tooling support sections. Grouped by category.
- **Parlance:** integration trust bar on homepage, integration cards on features page, pricing page "works with" section.

---

## 9. Contrast Requirements

All text must meet WCAG 2.2 AA minimums:

| Context | Minimum ratio |
|---------|--------------|
| Body text | 4.5:1 |
| Large text (≥18px or ≥14px bold) | 3:1 |
| UI components and graphical objects | 3:1 |

The lowest grey permitted for text on dark backgrounds (`#090a0f`) is `#A1A1AA`. Any text colour below this must be replaced.

---

## 10. Implementation Reference

### CSS custom properties (dark mode example)

```css
:root {
  --bg-page: #090a0f;
  --bg-surface-1: #0f1015;
  --bg-surface-2: #16171d;
  --bg-surface-3: #1e1f26;
  --bg-glass: rgba(255, 255, 255, 0.04);
  --text-primary: #FFFFFF;
  --text-secondary: #C5C6CA;
  --text-muted: #A1A1AA;
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);
  --accent: #7C3AED;
  --accent-hover: #A78BFA;
  --accent-active: #5B21B6;
  --success: #22C55E;
  --warning: #EAB308;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### Font loading

```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
```

### Scroll reveal CSS

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 500ms ease, transform 500ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```
