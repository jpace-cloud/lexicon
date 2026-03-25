# Lexicon

**Design tokens, components, and system for The Pace product family.**

[![MIT License](https://img.shields.io/badge/license-MIT-7C3AED)](LICENSE)

---

Lexicon is the design system that powers every product built by [The Pace](https://thepace.io). It provides a three-layer token architecture, 10 accessible React primitives, a Tailwind CSS preset, and comprehensive documentation.

```
┌─────────────────────────────────────────┐
│            Component Tokens             │  button, card, input, ...
│  ┌───────────────────────────────────┐  │
│  │        Semantic Tokens            │  │  bg, text, border, interactive
│  │  ┌─────────────────────────────┐  │  │
│  │  │     Primitive Tokens        │  │  │  purple.500, space.4, radii.lg
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Quick start

```bash
npm install @thepace/lexicon
```

Import the CSS tokens:

```css
@import '@thepace/lexicon';
```

Use in your CSS:

```css
.my-card {
  background: var(--bg-surface-1);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radii-lg);
  padding: var(--space-6);
}
```

Use with Tailwind:

```js
// tailwind.config.js
module.exports = {
  presets: [require('@thepace/lexicon/tailwind')],
};
```

Use React components:

```tsx
import { Button, Card, Input } from '@thepace/lexicon/components';

function App() {
  return (
    <Card variant="elevated">
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## What's included (free, MIT)

- **419 design tokens** across 3 layers (primitive, semantic, component)
- **CSS custom properties** stylesheet (18.5 KB, 15.6 KB minified)
- **Tailwind CSS preset** with full token coverage
- **10 primitive React components**: Button, Input, Card, Badge, Table, Modal, Tooltip, Avatar, Tabs, Toggle
- **Documentation site** with token specimens, component API, and integration guides

## What's in Pro

- Advanced components (DataTable, Chart, Dashboard layout, Command palette, and more)
- Pre-built page templates (Dashboard, Settings, Auth, Pricing, and more)
- Complete Figma library with all variants, auto-layout, and Figma Variables
- [Learn more](https://lexicon.thepace.io/pro/)

## Building

```bash
# Validate tokens (checks references, circular deps, naming)
npm run validate

# Build CSS from tokens
npm run build:tokens

# Full build (validate + tokens + CSS bundle)
npm run build
```

## Documentation

```bash
# Dev server
npm run docs:dev

# Build static site
npm run docs:build

# Preview build
npm run docs:preview
```

Docs deploy to [lexicon.thepace.io](https://lexicon.thepace.io).

## License

MIT for the core (tokens, CSS, Tailwind preset, 10 primitive components, docs).

Pro components and templates are under a commercial license.

---

Built by [The Pace](https://thepace.io)
