# Colours

Lexicon ships four colour groups: **purple** (brand), **grey** (neutrals), **ink** (text extremes), and **status** (feedback). All values are defined as primitive tokens and exposed as CSS custom properties.

## Purple scale

The primary brand colour. Used for interactive elements, accents, and focus states.

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
