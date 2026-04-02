# Icon Button

A square button that displays only an icon, with no visible text label. Use for compact toolbars, action menus, and inline controls where the icon meaning is universally understood.

## Preview

<div class="component-preview">
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--md" aria-label="Add">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--secondary lex-icon-button--md" aria-label="Close">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--ghost lex-icon-button--md" aria-label="Settings">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="3"/><path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.2 4.2l2.1 2.1M13.7 13.7l2.1 2.1M4.2 15.8l2.1-2.1M13.7 6.3l2.1-2.1"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--danger lex-icon-button--md" aria-label="Delete">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="4,6 5,16 15,16 16,6"/><line x1="3" y1="6" x2="17" y2="6"/><path d="M8 6V4a2 2 0 0 1 4 0v2"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
  </button>
</div>

### Sizes

<div class="component-preview">
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--sm" aria-label="Add">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="3" x2="8" y2="13"/><line x1="3" y1="8" x2="13" y2="8"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--md" aria-label="Add">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--lg" aria-label="Add">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  </button>
</div>

### States

<div class="component-preview">
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--md" aria-label="Default">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
  </button>
  <button class="lex-icon-button lex-icon-button--primary lex-icon-button--md" disabled aria-label="Disabled">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
  </button>
</div>

## Variants

- **Primary** -- solid brand fill. Use for the single most important icon action.
- **Secondary** -- transparent with border. Use for supporting icon actions.
- **Ghost** -- no fill or border. Use in toolbars or dense layouts.
- **Danger** -- solid red fill. Use for destructive actions like delete.

## Sizes

| Size | Dimensions | Icon size |
| --- | --- | --- |
| `sm` | 32 × 32 px | 16 × 16 px |
| `md` | 40 × 40 px | 20 × 20 px |
| `lg` | 48 × 48 px | 24 × 24 px |

## States

| State | Appearance |
| --- | --- |
| Default | Resting state |
| Hover | Background shift matching the text button variant |
| Focus | 2 px brand-purple ring with 2 px offset |
| Active | Darker background than hover |
| Disabled | 50 % opacity, `cursor: not-allowed` |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'ghost'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button dimensions |
| `disabled` | `boolean` | `false` | Disables interaction |
| `aria-label` | `string` | **required** | Accessible name (no visible text) |
| `icon` | `ReactNode` | -- | Icon element to render |
| `className` | `string` | -- | Additional CSS classes |

## Code example

### React

```tsx
import { IconButton } from '@thepace/lexicon/components';
import { PlusIcon, TrashIcon } from '@thepace/lexicon/icons';

<IconButton variant="ghost" aria-label="Add item" icon={<PlusIcon />} />
<IconButton variant="danger" aria-label="Delete" icon={<TrashIcon />} />
```

### Vanilla HTML

```html
<button class="lex-icon-button lex-icon-button--ghost lex-icon-button--md"
        aria-label="Add item">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="10" y1="4" x2="10" y2="16"/>
    <line x1="4" y1="10" x2="16" y2="10"/>
  </svg>
</button>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-icon-button` | Base styles |
| `.lex-icon-button--primary` | Primary variant |
| `.lex-icon-button--secondary` | Secondary variant |
| `.lex-icon-button--ghost` | Ghost variant |
| `.lex-icon-button--danger` | Danger variant |
| `.lex-icon-button--sm` | Small size (32 px) |
| `.lex-icon-button--md` | Medium size (40 px) |
| `.lex-icon-button--lg` | Large size (48 px) |

## Accessibility

- `aria-label` is **required** since there is no visible text label.
- Focus ring matches the standard Button focus style.
- Keyboard: Enter and Space trigger the action.
- If the icon conveys meaning beyond the label, mark the `<svg>` with `role="img"` and a `<title>`.

## Guidelines

::: tip Do
- Always provide a descriptive `aria-label` (e.g. "Close dialog", not "X").
- Use ghost variant in toolbars to keep visual density low.
- Pair with a Tooltip for discoverability when the icon meaning may not be obvious.
:::

::: danger Don't
- Don't omit `aria-label` — the button will be invisible to screen readers.
- Don't use icon buttons for primary page actions where a text label would be clearer.
:::
