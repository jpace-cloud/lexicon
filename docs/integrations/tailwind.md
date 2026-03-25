# Tailwind CSS

Lexicon ships a Tailwind preset that maps every design token to Tailwind utility classes. No manual theme configuration required.

## Install

```bash
npm install @thepace/lexicon
```

## Configure

Add the preset to your `tailwind.config.js`:

```js
const lexicon = require('@thepace/lexicon/tailwind');

module.exports = {
  presets: [lexicon],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
```

The preset extends (not replaces) the default Tailwind theme, so your existing utilities continue to work.

## What the preset provides

| Tailwind key | Lexicon tokens | Example utilities |
| --- | --- | --- |
| `colors` | Purple scale, grey scale, status | `bg-purple-500`, `text-grey-300`, `border-error` |
| `fontFamily` | Heading, body, mono | `font-heading`, `font-body`, `font-mono` |
| `fontSize` | xs through 6xl | `text-xs`, `text-base`, `text-4xl` |
| `spacing` | 0 through 32 | `p-4` (16 px), `gap-6` (24 px), `m-8` (32 px) |
| `borderRadius` | none through full | `rounded-md`, `rounded-lg`, `rounded-full` |
| `boxShadow` | xs through xl, glow variants | `shadow-md`, `shadow-glow-purple` |
| `transitionDuration` | fast, normal, slow, slower | `duration-fast`, `duration-normal` |
| `transitionTimingFunction` | default, spring | `ease-default`, `ease-spring` |

## Usage examples

```html
<!-- Card with Lexicon tokens -->
<div class="bg-grey-900 border border-grey-700 rounded-lg p-6 shadow-md">
  <h2 class="font-heading text-xl font-semibold text-white">
    Project title
  </h2>
  <p class="font-body text-base text-grey-300 mt-2">
    A brief description of the project.
  </p>
</div>

<!-- Button -->
<button class="bg-purple-500 hover:bg-purple-400 active:bg-purple-600 text-white font-medium rounded-lg px-5 py-2 transition-colors duration-normal ease-default">
  Save changes
</button>

<!-- Status badges -->
<span class="bg-success/10 text-success text-xs font-medium px-2 py-0.5 rounded-full">
  Active
</span>
```

## Combining with CSS variables

You can mix Tailwind utilities and CSS custom properties when needed:

```html
<div class="p-6 rounded-lg" style="background: var(--bg-surface-2)">
  Content
</div>
```

## Importing the CSS alongside Tailwind

If you need the `lex-*` component classes in addition to Tailwind utilities, import the Lexicon stylesheet in your CSS entry:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@thepace/lexicon/css';
```

This gives you both Tailwind utilities (token-aligned) and Lexicon component classes (`.lex-button`, `.lex-card`, etc.).
