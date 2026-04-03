# Quick Start

Get up and running with Lexicon in under two minutes.

## 1. Get the files

Clone the repository and copy the assets you need into your project:

```bash
git clone https://github.com/jpace-cloud/lexicon.git
```

The key files are `css/lexicon.css` (all tokens + component classes), `tailwind/lexicon-preset.js` (Tailwind preset), and `tokens/` (raw JSON).

## 2. Import the stylesheet

Add the Lexicon CSS to the root of your project. This single file provides every design token as a CSS custom property plus all component classes.

```js
// main.js / main.ts / layout.tsx
import './path/to/lexicon.css';
```

Or link it in HTML:

```html
<link rel="stylesheet" href="path/to/lexicon.css" />
```

## 3. Use a component

### Vanilla HTML

```html
<button class="lex-button lex-button--primary lex-button--md">
  Get started
</button>
```

### CSS custom properties

```css
.card {
  background: var(--bg-surface-1);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radii-lg);
  padding: var(--space-6);
}
```

### Tailwind

If you use Tailwind CSS, copy `lexicon-preset.js` into your project and add it to your config:

```js
// tailwind.config.js
module.exports = {
  presets: [require('./lexicon-preset')],
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

- [Installation details](/start/installation) -- repository structure, fonts, and all available paths.
- [Token overview](/tokens/overview) -- understand the three-layer architecture.
- [Component overview](/components/overview) -- browse all primitives.
