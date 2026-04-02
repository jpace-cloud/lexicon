# Floating Action Button

A circular elevated button for the single most prominent action on a screen. Use sparingly — typically one FAB per view.

## Preview

<div class="component-preview">
  <button class="lex-fab lex-fab--primary lex-fab--sm" aria-label="Add">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
  </button>
  <button class="lex-fab lex-fab--primary lex-fab--md" aria-label="Add">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  </button>
  <button class="lex-fab lex-fab--primary lex-fab--lg" aria-label="Add">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="14" y1="6" x2="14" y2="22"/><line x1="6" y1="14" x2="22" y2="14"/></svg>
  </button>
</div>

### Secondary variant

<div class="component-preview">
  <button class="lex-fab lex-fab--secondary lex-fab--md" aria-label="Edit">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 6l3 3L9 18H6v-3L15 6z"/></svg>
  </button>
</div>

### Extended FAB

<div class="component-preview">
  <button class="lex-fab lex-fab--primary lex-fab--md lex-fab--extended">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/></svg>
    New item
  </button>
</div>

### States

<div class="component-preview">
  <button class="lex-fab lex-fab--primary lex-fab--md" aria-label="Default">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  </button>
  <button class="lex-fab lex-fab--primary lex-fab--md" disabled aria-label="Disabled">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  </button>
</div>

## Variants

- **Primary** -- solid brand fill with shadow. The default and most common usage.
- **Secondary** -- subtle fill with border. Use when the brand colour is too dominant.

## Sizes

| Size | Dimensions | Icon size |
| --- | --- | --- |
| `sm` | 40 × 40 px | 20 × 20 px |
| `md` | 56 × 56 px | 24 × 24 px |
| `lg` | 72 × 72 px | 28 × 28 px |

The **extended** variant adds a text label alongside the icon. It uses `md` height but auto width with horizontal padding.

## States

| State | Appearance |
| --- | --- |
| Default | Resting with elevation shadow |
| Hover | Lighter fill, stronger shadow |
| Focus | 2 px brand-purple ring with 2 px offset |
| Active | Darker fill |
| Disabled | 50 % opacity, no hover effect |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button dimensions |
| `extended` | `boolean` | `false` | Show text label alongside icon |
| `disabled` | `boolean` | `false` | Disables interaction |
| `aria-label` | `string` | **required** | Accessible name |
| `icon` | `ReactNode` | -- | Icon element |
| `children` | `ReactNode` | -- | Text label (extended variant) |

## Code example

### React

```tsx
import { Fab } from '@thepace/lexicon/components';
import { PlusIcon } from '@thepace/lexicon/icons';

<Fab variant="primary" aria-label="Create new item" icon={<PlusIcon />} />
<Fab variant="primary" extended icon={<PlusIcon />}>New item</Fab>
```

### Vanilla HTML

```html
<button class="lex-fab lex-fab--primary lex-fab--md" aria-label="Add">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
</button>

<!-- Extended -->
<button class="lex-fab lex-fab--primary lex-fab--md lex-fab--extended">
  <svg>...</svg>
  New item
</button>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-fab` | Base styles (circular, shadow) |
| `.lex-fab--primary` | Brand fill |
| `.lex-fab--secondary` | Subtle fill with border |
| `.lex-fab--sm` | 40 px |
| `.lex-fab--md` | 56 px (default) |
| `.lex-fab--lg` | 72 px |
| `.lex-fab--extended` | Pill shape with text label |

## Accessibility

- `aria-label` is required for icon-only FABs.
- Extended FAB with visible text does not need `aria-label`.
- Focus ring matches the standard component focus style.
- Keyboard: Enter and Space trigger the action.
- Position the FAB in a landmark region so screen readers can locate it.

## Guidelines

::: tip Do
- Use one FAB per screen for the most important creation or navigation action.
- Position at the bottom-right corner with `position: fixed` and generous margin.
- Use the extended variant when the action needs clarification.
:::

::: danger Don't
- Don't place multiple FABs on the same screen — use a speed-dial pattern instead.
- Don't use a FAB for secondary or destructive actions.
- Don't hide critical actions behind a FAB alone — provide alternatives in the main UI.
:::
