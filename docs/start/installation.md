# Installation

## Package managers

::: code-group

```bash [npm]
npm install @thepace/lexicon
```

```bash [yarn]
yarn add @thepace/lexicon
```

```bash [pnpm]
pnpm add @thepace/lexicon
```

:::

## CDN

For quick prototyping you can load the minified bundle from a CDN. Replace `1.0.0` with the version you need.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@thepace/lexicon@1.0.0/css/lexicon-bundle.min.css"
/>
```

The bundle includes the CSS reset and all token variables.

## Importing CSS

The main entry point gives you every custom property and component class:

```js
import '@thepace/lexicon/css';
```

If you only need the reset:

```js
import '@thepace/lexicon/css/reset';
```

## Importing the Tailwind preset

Add the preset to your Tailwind config so that token values map to utility classes:

```js
// tailwind.config.js
const lexicon = require('@thepace/lexicon/tailwind');

module.exports = {
  presets: [lexicon],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
```

This extends `colors`, `fontFamily`, `fontSize`, `spacing`, `borderRadius`, `boxShadow`, `transitionDuration`, and `transitionTimingFunction` with Lexicon values.

## Importing React components

All 10 primitive components are exported from a single path:

```tsx
import { Button, Input, Card, Badge, Modal } from '@thepace/lexicon/components';
```

You can also import individual components for smaller bundles:

```tsx
import { Button } from '@thepace/lexicon/components/Button';
```

Every component ships with TypeScript types. No `@types` package is needed.

## Fonts

Lexicon uses three font families. Load them from their respective CDNs or self-host.

```html
<!-- Satoshi (headings) -->
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />

<!-- DM Sans (body) + JetBrains Mono (code) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
```

If these fonts are not loaded, the system falls back to `-apple-system, BlinkMacSystemFont, sans-serif`.

## Package exports

| Import path | Contents |
| --- | --- |
| `@thepace/lexicon` | Main CSS (tokens + component classes) |
| `@thepace/lexicon/css` | Same as above |
| `@thepace/lexicon/css/reset` | CSS reset only |
| `@thepace/lexicon/tailwind` | Tailwind preset |
| `@thepace/lexicon/components` | All React components |
| `@thepace/lexicon/components/*` | Individual components |
| `@thepace/lexicon/tokens/*` | Raw JSON token files |
