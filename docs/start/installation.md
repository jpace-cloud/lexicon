# Installation

Lexicon tokens are available directly from the repository. Choose the method that fits your workflow.

## Clone the repository

```bash
git clone https://github.com/jpace-cloud/lexicon.git
```

The repo includes pre-built CSS, a Tailwind preset, raw JSON tokens, and component source code. Everything you need is in the repo — no build step required to start using tokens.

## Project structure

```
lexicon/
├── css/
│   ├── lexicon.css              # All tokens + component classes
│   ├── lexicon.min.css          # Minified
│   ├── lexicon-bundle.css       # Tokens + reset + component classes
│   ├── lexicon-bundle.min.css   # Minified bundle
│   └── reset.css                # CSS reset only
├── tailwind/
│   └── lexicon-preset.js        # Tailwind CSS preset
├── tokens/
│   ├── primitive/               # Colours, spacing, radii, shadows, motion, typography
│   ├── semantic/                # Backgrounds, text, borders, elevation
│   └── component/               # Per-component tokens (button, card, input, etc.)
└── components/                  # React component source (TypeScript)
```

## CSS custom properties

Copy `css/lexicon.css` (or the minified variant) into your project and import it:

```html
<link rel="stylesheet" href="path/to/lexicon.css" />
```

Or in a JS bundler:

```js
import './path/to/lexicon.css';
```

This gives you every design token as a CSS custom property. Use them directly:

```css
.card {
  background: var(--bg-surface-1);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radii-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-family-body);
}
```

If you also want the bundled CSS reset, use `lexicon-bundle.css` instead.

## Tailwind preset

Copy `tailwind/lexicon-preset.js` into your project and add it to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  presets: [require('./lexicon-preset')],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
```

This extends Tailwind's `colors`, `fontFamily`, `fontSize`, `spacing`, `borderRadius`, `boxShadow`, `transitionDuration`, and `transitionTimingFunction` with Lexicon values:

```html
<div class="bg-grey-950 text-white rounded-lg p-6 shadow-sm font-body">
  <h2 class="font-heading text-xl font-semibold text-purple-400">Dashboard</h2>
  <p class="text-grey-300 text-sm mt-2">Welcome back.</p>
</div>
```

## Raw JSON tokens

The `tokens/` directory contains the complete token system as structured JSON, organised in three layers:

- **Primitive** — raw values: colour hex codes, pixel sizes, font stacks
- **Semantic** — intent-mapped: `bg.primary`, `text.secondary`, `border.focus`
- **Component** — per-component decisions: `button.primary.bg`, `card.default.radius`

Use these files to generate tokens for any platform — iOS, Android, Figma plugins, or custom build pipelines.

```json
// tokens/semantic/colors.json (excerpt)
{
  "bg": {
    "primary": { "value": "{grey.950}", "type": "color" },
    "surface-1": { "value": "{grey.900}", "type": "color" },
    "surface-2": { "value": "{grey.850}", "type": "color" }
  }
}
```

## Fonts

Lexicon uses three font families. Add these to your document `<head>`:

```html
<!-- Satoshi (headings) -->
<link rel="stylesheet"
      href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />

<!-- DM Sans (body) + JetBrains Mono (code) -->
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
```

If these fonts are not loaded, the system falls back to `-apple-system, BlinkMacSystemFont, sans-serif`.

## Quick example

Paste this into any HTML page after importing `lexicon.css` and the fonts:

```html
<button style="
  background: var(--interactive-default);
  color: var(--text-primary);
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radii-md);
  border: none;
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: var(--motion-transition-colors);
">
  Get started
</button>
```

You should see a purple button with rounded corners, using Lexicon's exact brand colour and spacing values.

## What's included

| Path | Contents |
| --- | --- |
| `css/lexicon.css` | All tokens as CSS custom properties + component classes |
| `css/lexicon-bundle.css` | Above + CSS reset |
| `css/reset.css` | CSS reset only |
| `tailwind/lexicon-preset.js` | Tailwind preset extending colours, fonts, spacing, radii, shadows, motion |
| `tokens/primitive/` | Raw colour, typography, spacing, radii, shadow, motion values (JSON) |
| `tokens/semantic/` | Intent-mapped colour, elevation, typography tokens (JSON) |
| `tokens/component/` | Per-component design decisions (JSON) |
| `components/` | React component source with TypeScript types |

npm and CDN distribution are on the roadmap. For updates, follow the [changelog](/about/changelog).
