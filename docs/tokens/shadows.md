# Shadows

Shadow tokens create depth and elevation. Lexicon provides five standard elevation levels and two purple glow variants for accent effects.

## Elevation scale

| Token | CSS variable | Value |
| --- | --- | --- |
| `xs` | `--shadow-xs` | `0 1px 2px rgba(0, 0, 0, 0.05)` |
| `sm` | `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)` |
| `md` | `--shadow-md` | `0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)` |
| `lg` | `--shadow-lg` | `0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)` |
| `xl` | `--shadow-xl` | `0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)` |

## Glow variants

Use purple glow shadows for accent effects on hero sections, feature cards, or focused elements.

| Token | CSS variable | Value |
| --- | --- | --- |
| `glow-purple` | `--shadow-glow-purple` | `0 0 40px rgba(124, 58, 237, 0.15)` |
| `glow-purple-lg` | `--shadow-glow-purple-lg` | `0 0 80px rgba(124, 58, 237, 0.2)` |

## Semantic elevation levels

Semantic tokens map numbered levels to shadow primitives:

| Level | CSS variable | Resolves to |
| --- | --- | --- |
| `0` | `--elevation-0` | `none` |
| `1` | `--elevation-1` | `--shadow-sm` |
| `2` | `--elevation-2` | `--shadow-md` |
| `3` | `--elevation-3` | `--shadow-lg` |
| `4` | `--elevation-4` | `--shadow-xl` |

## Usage

### CSS

```css
.card {
  box-shadow: var(--shadow-sm);
}

.card-elevated {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-xl);
}

.hero-glow {
  box-shadow: var(--shadow-glow-purple-lg);
}
```

### Tailwind

```html
<div class="shadow-sm">Subtle elevation</div>
<div class="shadow-md">Medium elevation</div>
<div class="shadow-xl">High elevation</div>
<div class="shadow-glow-purple">Purple accent glow</div>
```

## Component defaults

| Component | Default shadow |
| --- | --- |
| Card (default) | `none` |
| Card (elevated) | `md` |
| Tooltip | `md` |
| Modal | `xl` |
| Toggle thumb | `sm` |
