# Colours

Lexicon ships four colour groups: **purple** (brand), **grey** (neutrals), **ink** (text extremes), and **status** (feedback). All values are defined as primitive tokens and exposed as CSS custom properties.

## Purple scale

The primary brand colour. Used for interactive elements, accents, and focus states.

<div class="token-grid">
  <div class="token-swatch" style="background: #F5F0FF; color: #430F96;">50</div>
  <div class="token-swatch" style="background: #EDE1FF; color: #430F96;">100</div>
  <div class="token-swatch" style="background: #D9CEFF; color: #430F96;">200</div>
  <div class="token-swatch" style="background: #C4B5FD; color: #430F96;">300</div>
  <div class="token-swatch" style="background: #A78BFA; color: #1F1740;">400</div>
  <div class="token-swatch" style="background: #7C3AED; color: #FFFFFF;">500</div>
  <div class="token-swatch" style="background: #5B21B6; color: #FFFFFF;">600</div>
  <div class="token-swatch" style="background: #430F96; color: #FFFFFF;">700</div>
  <div class="token-swatch" style="background: #1F1740; color: #FFFFFF;">800</div>
  <div class="token-swatch" style="background: #19022B; color: #FFFFFF;">900</div>
</div>

| Token | CSS variable | Hex |
| --- | --- | --- |
| `purple.50` | `--color-purple-50` | `#F5F0FF` |
| `purple.100` | `--color-purple-100` | `#EDE1FF` |
| `purple.200` | `--color-purple-200` | `#D9CEFF` |
| `purple.300` | `--color-purple-300` | `#C4B5FD` |
| `purple.400` | `--color-purple-400` | `#A78BFA` |
| `purple.500` | `--color-purple-500` | `#7C3AED` |
| `purple.600` | `--color-purple-600` | `#5B21B6` |
| `purple.700` | `--color-purple-700` | `#430F96` |
| `purple.800` | `--color-purple-800` | `#1F1740` |
| `purple.900` | `--color-purple-900` | `#19022B` |

## Grey scale

Neutrals used for backgrounds, surfaces, borders, and secondary text.

<div class="token-grid">
  <div class="token-swatch" style="background: #F4F4F5; color: #3E4048;">50</div>
  <div class="token-swatch" style="background: #E0E1E3; color: #3E4048;">100</div>
  <div class="token-swatch" style="background: #C5C6CA; color: #232428;">200</div>
  <div class="token-swatch" style="background: #9B9DA4; color: #121316;">300</div>
  <div class="token-swatch" style="background: #71737B; color: #FFFFFF;">400</div>
  <div class="token-swatch" style="background: #55575F; color: #FFFFFF;">500</div>
  <div class="token-swatch" style="background: #3E4048; color: #FFFFFF;">600</div>
  <div class="token-swatch" style="background: #35363C; color: #FFFFFF;">700</div>
  <div class="token-swatch" style="background: #232428; color: #FFFFFF;">800</div>
  <div class="token-swatch" style="background: #1A1B1F; color: #FFFFFF;">850</div>
  <div class="token-swatch" style="background: #121316; color: #FFFFFF;">900</div>
  <div class="token-swatch" style="background: #0C0C0F; color: #FFFFFF;">950</div>
</div>

| Token | CSS variable | Hex |
| --- | --- | --- |
| `grey.50` | `--color-grey-50` | `#F4F4F5` |
| `grey.100` | `--color-grey-100` | `#E0E1E3` |
| `grey.200` | `--color-grey-200` | `#C5C6CA` |
| `grey.300` | `--color-grey-300` | `#9B9DA4` |
| `grey.400` | `--color-grey-400` | `#71737B` |
| `grey.500` | `--color-grey-500` | `#55575F` |
| `grey.600` | `--color-grey-600` | `#3E4048` |
| `grey.700` | `--color-grey-700` | `#35363C` |
| `grey.800` | `--color-grey-800` | `#232428` |
| `grey.850` | `--color-grey-850` | `#1A1B1F` |
| `grey.900` | `--color-grey-900` | `#121316` |
| `grey.950` | `--color-grey-950` | `#0C0C0F` |

## Ink

High-contrast text colours for light and dark contexts.

| Token | CSS variable | Hex |
| --- | --- | --- |
| `ink.dark` | `--color-ink-dark` | `#101828` |
| `ink.light` | `--color-ink-light` | `#FFFFFF` |

## Status

Feedback colours for success, warning, error, and informational states.

<div class="token-grid" style="grid-template-columns: repeat(4, 1fr);">
  <div class="token-swatch" style="background: #22C55E; color: #FFFFFF;">Success</div>
  <div class="token-swatch" style="background: #EAB308; color: #1F1740;">Warning</div>
  <div class="token-swatch" style="background: #EF4444; color: #FFFFFF;">Error</div>
  <div class="token-swatch" style="background: #3B82F6; color: #FFFFFF;">Info</div>
</div>

| Token | CSS variable | Hex |
| --- | --- | --- |
| `status.success` | `--color-status-success` | `#22C55E` |
| `status.warning` | `--color-status-warning` | `#EAB308` |
| `status.error` | `--color-status-error` | `#EF4444` |
| `status.info` | `--color-status-info` | `#3B82F6` |

## Semantic colour tokens

Semantic tokens map intent to a primitive value. They are what components consume.

### Backgrounds

| Token | CSS variable | Resolves to |
| --- | --- | --- |
| `bg.primary` | `--bg-primary` | `grey.950` (`#0C0C0F`) |
| `bg.surface-1` | `--bg-surface-1` | `grey.900` (`#121316`) |
| `bg.surface-2` | `--bg-surface-2` | `grey.850` (`#1A1B1F`) |
| `bg.surface-3` | `--bg-surface-3` | `grey.800` (`#232428`) |
| `bg.elevated` | `--bg-elevated` | `grey.700` (`#35363C`) |
| `bg.overlay` | `--bg-overlay` | `rgba(0, 0, 0, 0.6)` |

### Text

| Token | CSS variable | Resolves to |
| --- | --- | --- |
| `text.primary` | `--text-primary` | `ink.light` (`#FFFFFF`) |
| `text.secondary` | `--text-secondary` | `grey.300` (`#9B9DA4`) |
| `text.muted` | `--text-muted` | `grey.400` (`#71737B`) |
| `text.disabled` | `--text-disabled` | `grey.500` (`#55575F`) |
| `text.inverse` | `--text-inverse` | `ink.dark` (`#101828`) |

### Borders

| Token | CSS variable | Resolves to |
| --- | --- | --- |
| `border.subtle` | `--border-subtle` | `rgba(255, 255, 255, 0.06)` |
| `border.default` | `--border-default` | `rgba(255, 255, 255, 0.1)` |
| `border.strong` | `--border-strong` | `grey.600` (`#3E4048`) |
| `border.focus` | `--border-focus` | `purple.500` (`#7C3AED`) |

### Interactive

| Token | CSS variable | Resolves to |
| --- | --- | --- |
| `interactive.default` | `--interactive-default` | `purple.500` (`#7C3AED`) |
| `interactive.hover` | `--interactive-hover` | `purple.400` (`#A78BFA`) |
| `interactive.active` | `--interactive-active` | `purple.600` (`#5B21B6`) |
| `interactive.muted` | `--interactive-muted` | `rgba(124, 58, 237, 0.1)` |

## Usage

### CSS

```css
.hero {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.cta {
  background-color: var(--color-purple-500);
}
```

### Tailwind

With the Lexicon preset installed, use colour utilities directly:

```html
<div class="bg-grey-950 text-white border border-grey-700">
  <button class="bg-purple-500 hover:bg-purple-400">Save</button>
</div>
```
