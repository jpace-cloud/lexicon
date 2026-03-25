# Lexicon Figma Library Setup Guide

This guide walks through setting up the Lexicon design system in Figma. The variable names map 1:1 to the CSS custom properties, ensuring design-to-code consistency.

> The complete Figma library file (all variants, states, and page templates built out) is available with **Lexicon Pro**. This guide covers the free setup process.

---

## 1. Create the file

Create a new Figma file named **"Lexicon — Design System"** in your team workspace.

Add these pages:
- **Cover** — Title card with version number
- **Colours** — Colour styles and swatches
- **Typography** — Text styles and type scale
- **Spacing** — Spacing reference
- **Components** — All component primitives

---

## 2. Figma Variables

### Collection: Primitives

Create a variable collection called **"Primitives"** with these variables:

#### Colours
| Variable name | Value |
|---|---|
| `color/purple/50` | `#F5F0FF` |
| `color/purple/100` | `#EDE1FF` |
| `color/purple/200` | `#D9CEFF` |
| `color/purple/300` | `#C4B5FD` |
| `color/purple/400` | `#A78BFA` |
| `color/purple/500` | `#7C3AED` |
| `color/purple/600` | `#5B21B6` |
| `color/purple/700` | `#430F96` |
| `color/purple/800` | `#1F1740` |
| `color/purple/900` | `#19022B` |
| `color/grey/50` | `#F4F4F5` |
| `color/grey/100` | `#E0E1E3` |
| `color/grey/200` | `#C5C6CA` |
| `color/grey/300` | `#9B9DA4` |
| `color/grey/400` | `#71737B` |
| `color/grey/500` | `#55575F` |
| `color/grey/600` | `#3E4048` |
| `color/grey/700` | `#35363C` |
| `color/grey/800` | `#232428` |
| `color/grey/850` | `#1A1B1F` |
| `color/grey/900` | `#121316` |
| `color/grey/950` | `#0C0C0F` |
| `color/ink/dark` | `#101828` |
| `color/ink/light` | `#FFFFFF` |
| `color/status/success` | `#22C55E` |
| `color/status/warning` | `#EAB308` |
| `color/status/error` | `#EF4444` |
| `color/status/info` | `#3B82F6` |

#### Spacing
| Variable name | Value |
|---|---|
| `space/0` | `0` |
| `space/1` | `4` |
| `space/2` | `8` |
| `space/3` | `12` |
| `space/4` | `16` |
| `space/5` | `20` |
| `space/6` | `24` |
| `space/8` | `32` |
| `space/10` | `40` |
| `space/12` | `48` |
| `space/16` | `64` |
| `space/20` | `80` |
| `space/24` | `96` |
| `space/32` | `128` |

#### Radii
| Variable name | Value |
|---|---|
| `radii/none` | `0` |
| `radii/sm` | `4` |
| `radii/md` | `8` |
| `radii/lg` | `12` |
| `radii/xl` | `16` |
| `radii/2xl` | `20` |
| `radii/full` | `9999` |

### Collection: Semantic

Create a **"Semantic"** collection with **two modes**: `Dark` and `Light`.

| Variable name | Dark mode | Light mode |
|---|---|---|
| `bg/primary` | `color/grey/950` | `color/grey/50` |
| `bg/surface-1` | `color/grey/900` | `#FFFFFF` |
| `bg/surface-2` | `color/grey/850` | `color/grey/50` |
| `bg/surface-3` | `color/grey/800` | `color/grey/100` |
| `text/primary` | `color/ink/light` | `color/ink/dark` |
| `text/secondary` | `color/grey/300` | `color/grey/500` |
| `text/muted` | `color/grey/400` | `color/grey/400` |
| `interactive/default` | `color/purple/500` | `color/purple/500` |
| `interactive/hover` | `color/purple/400` | `color/purple/600` |
| `border/subtle` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.06)` |
| `border/default` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` |
| `border/focus` | `color/purple/500` | `color/purple/500` |

> Semantic variables reference Primitive variables. Use Figma's variable aliasing to link them.

---

## 3. Colour Styles

Create colour styles from the semantic variables:
- `bg/primary`, `bg/surface-1`, `bg/surface-2`, `bg/surface-3`
- `text/primary`, `text/secondary`, `text/muted`
- `interactive/default`, `interactive/hover`
- `border/subtle`, `border/default`, `border/focus`

---

## 4. Text Styles

| Style name | Font | Size | Weight | Line height |
|---|---|---|---|---|
| `heading/xl` | Satoshi Variable | 36 | Bold (700) | 120% |
| `heading/lg` | Satoshi Variable | 28 | Semibold (600) | 120% |
| `heading/md` | Satoshi Variable | 20 | Medium (500) | 150% |
| `heading/sm` | Satoshi Variable | 18 | Medium (500) | 150% |
| `body/lg` | DM Sans | 16 | Regular (400) | 160% |
| `body/md` | DM Sans | 14 | Regular (400) | 160% |
| `body/sm` | DM Sans | 13 | Regular (400) | 150% |
| `label/md` | DM Sans | 13 | Medium (500) | 150% |
| `label/sm` | DM Sans | 11 | Medium (500) | 150% |
| `code/md` | JetBrains Mono | 13 | Regular (400) | 160% |

---

## 5. Effect Styles

| Style name | Value |
|---|---|
| `shadow/xs` | `0 1px 2px rgba(0,0,0,0.05)` |
| `shadow/sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` |
| `shadow/md` | `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)` |
| `shadow/lg` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` |
| `shadow/xl` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` |
| `glow/purple` | `0 0 40px rgba(124,58,237,0.15)` |

---

## 6. Components

Build the following component primitives with auto-layout:

### Button
- **Variants**: Primary, Secondary, Ghost, Danger (as a component property)
- **Sizes**: sm (32px), md (40px), lg (48px) (as a component property)
- **States**: Default, Hover, Active, Focus, Disabled (as an interactive component)
- Auto-layout: horizontal, padding `space/5` horizontal, centered
- Corner radius: `radii/lg` (12)

### Input
- Label + input field + helper text stacked vertically
- **States**: Default, Focus, Error, Disabled
- **Sizes**: sm, md, lg
- Auto-layout: vertical, `space/1` gap

### Card
- **Variants**: Default, Elevated, Outlined
- Sub-layers: Header (optional), Body, Footer (optional)
- Auto-layout: vertical
- Corner radius: `radii/lg` (12)

### Badge
- **Variants**: Default, Success, Warning, Error, Info
- **Sizes**: sm, md
- Corner radius: `radii/full` (9999)

### Table
- Header row + body rows
- Auto-layout: vertical (rows stack)
- Striped option via boolean property

### Modal
- Overlay + dialog box
- **Sizes**: sm, md, lg, full
- Title, description, body, footer with actions
- Corner radius: `radii/xl` (16)

### Tooltip
- Arrow + content box
- **Positions**: Top, Right, Bottom, Left (as variants)

### Avatar
- **Shapes**: Round, Square
- **Sizes**: xs (24), sm (32), md (40), lg (48), xl (64)
- Image fill or initials text
- Optional status dot

### Tabs
- Tab list with individual tab items
- **Variants**: Underline, Pills, Enclosed
- Active indicator

### Toggle
- Track + thumb
- **Sizes**: sm, md
- On/off states

---

## 7. Publish

Once all components are built:

1. Review all components for consistent naming
2. Add descriptions to each component
3. Publish as a team library: **File → Publish Library**
4. Name: "Lexicon Design System"
5. Enable for your team

---

## Variable Naming Convention

All Figma variable names map 1:1 to CSS custom property names:

| Figma variable | CSS custom property |
|---|---|
| `color/purple/500` | `--color-purple-500` |
| `space/4` | `--space-4` |
| `radii/lg` | `--radii-lg` |
| `bg/primary` | `--bg-primary` |
| `text/primary` | `--text-primary` |
| `interactive/default` | `--interactive-default` |

This 1:1 mapping is critical for Parlance's Figma Variables two-way sync feature and for any automated design-to-code workflows.

---

*A product of [The Pace](https://thepace.io)*
