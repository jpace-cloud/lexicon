# Token Architecture

Lexicon uses a three-layer token system. Each layer adds meaning and constraints on top of the one below it, creating a clear path from raw values to production-ready UI.

## The three layers

```
┌─────────────────────────────────────────────────┐
│  Component tokens                               │
│  button.primary.bg, input.border-focus, ...     │
│  Scoped to a specific UI element.               │
├─────────────────────────────────────────────────┤
│  Semantic tokens                                │
│  bg.primary, text.secondary, interactive.hover  │
│  Describe intent, not appearance.               │
├─────────────────────────────────────────────────┤
│  Primitive tokens                               │
│  purple.500, grey.900, spacing.4, radii.lg      │
│  Raw, context-free values.                      │
└─────────────────────────────────────────────────┘
```

### Primitive tokens

The bottom layer. These are raw design values with no opinion about where they are used:

- **Colours** -- full scales for purple (50--900), grey (50--950), ink, and status
- **Typography** -- font families, sizes, weights, line heights, letter spacing
- **Spacing** -- a 4 px base scale from 0 to 128 px
- **Radii** -- border radius from none to full
- **Shadows** -- five elevation levels plus purple glow variants
- **Motion** -- durations, easing curves, prebuilt transitions

Source: `tokens/primitive/*.json`

### Semantic tokens

The middle layer. These reference primitives but carry meaning:

| Token | Resolves to | Purpose |
| --- | --- | --- |
| `bg.primary` | `grey.950` | Main page background |
| `text.secondary` | `grey.300` | Supporting text |
| `interactive.default` | `purple.500` | Interactive element colour |
| `border.focus` | `purple.500` | Focus ring colour |

Semantic tokens decouple components from raw colour values. If the purple scale changes, semantic tokens stay stable and components update automatically.

Source: `tokens/semantic/*.json`

### Component tokens

The top layer. Every component has its own token set that references semantic (or occasionally primitive) values:

```
button.primary.bg  →  interactive.default  →  purple.500  →  #7C3AED
```

This means you can restyle the entire Button without touching its source code -- just override the component token.

Source: `tokens/component/*.json`

## Reference syntax

Token JSON files use `{reference}` syntax to point at other tokens:

```json
{
  "bg": "{interactive.default}",
  "text": "{ink.light}"
}
```

During the build step (`npm run build:tokens`), references are resolved and output as flat CSS custom properties:

```css
--button-primary-bg: #7C3AED;
--button-primary-text: #FFFFFF;
```

## CSS custom properties

Every token is available as a CSS variable at runtime. The naming convention follows the layer and key path:

| Layer | Pattern | Example |
| --- | --- | --- |
| Primitive | `--color-{scale}-{step}` | `--color-purple-500` |
| Primitive | `--space-{step}` | `--space-4` |
| Primitive | `--radii-{size}` | `--radii-lg` |
| Primitive | `--shadow-{size}` | `--shadow-md` |
| Primitive | `--motion-duration-{name}` | `--motion-duration-fast` |
| Semantic | `--{group}-{name}` | `--bg-primary`, `--text-secondary` |
| Component | `--{component}-{variant}-{prop}` | `--button-primary-bg` |

## Customising tokens

Override any variable at the `:root` level to rebrand the entire system:

```css
:root {
  --color-purple-500: #6D28D9;       /* darker purple */
  --space-4: 20px;                    /* wider base unit */
  --radii-lg: 16px;                   /* rounder corners */
}
```

Semantic and component tokens that reference these primitives will update automatically.
