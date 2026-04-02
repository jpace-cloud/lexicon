# Breadcrumbs

A horizontal trail showing the user's position within a page hierarchy. Provides quick navigation back to parent pages.

## Preview

<div class="component-preview">
  <nav class="lex-breadcrumbs" aria-label="Breadcrumb">
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Home</button>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Components</button>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Navigation</button>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <span class="lex-breadcrumbs__current">Breadcrumbs</span>
    </span>
  </nav>
</div>

### With slash separator

<div class="component-preview">
  <nav class="lex-breadcrumbs" aria-label="Breadcrumb">
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Home</button>
    </span>
    <span class="lex-breadcrumbs__separator">/</span>
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Settings</button>
    </span>
    <span class="lex-breadcrumbs__separator">/</span>
    <span class="lex-breadcrumbs__item">
      <span class="lex-breadcrumbs__current">Security</span>
    </span>
  </nav>
</div>

### Truncated path

<div class="component-preview">
  <nav class="lex-breadcrumbs" aria-label="Breadcrumb">
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Home</button>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <span class="lex-breadcrumbs__link" style="cursor: default;">…</span>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <button class="lex-breadcrumbs__link">Parent</button>
    </span>
    <span class="lex-breadcrumbs__separator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,2 8,6 4,10"/></svg></span>
    <span class="lex-breadcrumbs__item">
      <span class="lex-breadcrumbs__current">Current Page</span>
    </span>
  </nav>
</div>

## Anatomy

- **Link items** — clickable ancestors styled as secondary text. Brand colour on hover.
- **Current item** — the final item is non-interactive, bold weight.
- **Separator** — chevron icon or slash character between items.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ label: string; href?: string }[]` | -- | Breadcrumb trail |
| `separator` | `'chevron' \| 'slash'` | `'chevron'` | Separator type |
| `maxItems` | `number` | -- | Truncate middle items with ellipsis |

## Code example

### React

```tsx
import { Breadcrumbs } from '@thepace/lexicon/components';

<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumbs' },
]} />
```

### Vanilla HTML

```html
<nav class="lex-breadcrumbs" aria-label="Breadcrumb">
  <span class="lex-breadcrumbs__item">
    <a class="lex-breadcrumbs__link" href="/">Home</a>
  </span>
  <span class="lex-breadcrumbs__separator">/</span>
  <span class="lex-breadcrumbs__item">
    <span class="lex-breadcrumbs__current">Current</span>
  </span>
</nav>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-breadcrumbs` | Container nav |
| `.lex-breadcrumbs__item` | Individual crumb |
| `.lex-breadcrumbs__link` | Clickable ancestor |
| `.lex-breadcrumbs__separator` | Chevron or slash |
| `.lex-breadcrumbs__current` | Current (final) item |

## Accessibility

- Wrap in `<nav aria-label="Breadcrumb">`.
- The current page uses `aria-current="page"`.
- Separator icons have `aria-hidden="true"`.
- Links are natively keyboard-focusable.

## Guidelines

::: tip Do
- Always include "Home" or the root as the first item.
- Use `maxItems` to truncate paths deeper than 4 levels.
:::

::: danger Don't
- Don't use breadcrumbs as the sole navigation method.
- Don't make the current page item a link.
:::
