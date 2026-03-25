# Quick Start

Get up and running with Lexicon in under two minutes.

## 1. Install the package

```bash
npm install @thepace/lexicon
```

## 2. Import the stylesheet

Add the Lexicon CSS to the root of your project. This single file provides every design token as a CSS custom property plus all component classes.

```js
// main.js / main.ts / layout.tsx
import '@thepace/lexicon/css';
```

Or link it in HTML:

```html
<link rel="stylesheet" href="node_modules/@thepace/lexicon/css/lexicon.css" />
```

## 3. Use a component

### React

```tsx
import { Button } from '@thepace/lexicon/components';

export default function App() {
  return (
    <Button variant="primary" size="md">
      Get started
    </Button>
  );
}
```

### Vanilla HTML

```html
<button class="lex-button lex-button--primary lex-button--md">
  Get started
</button>
```

### Tailwind

If you use Tailwind CSS, add the Lexicon preset to your config so that all token values are available as utility classes:

```js
// tailwind.config.js
const lexicon = require('@thepace/lexicon/tailwind');

module.exports = {
  presets: [lexicon],
  // ...
};
```

Then use token-derived utilities directly:

```html
<button class="bg-purple-500 text-white rounded-lg px-5 py-2 font-medium">
  Get started
</button>
```

## Next steps

- [Installation details](/start/installation) -- CDN, package managers, and framework-specific setup.
- [Token overview](/tokens/overview) -- understand the three-layer architecture.
- [Component overview](/components/overview) -- browse all 10 primitives.
