# Button

A token-driven button with four variants, three sizes, and loading/disabled states.

## Preview

### Variants

<div class="component-preview">
  <button class="lex-button lex-button--primary lex-button--md">Primary</button>
  <button class="lex-button lex-button--secondary lex-button--md">Secondary</button>
  <button class="lex-button lex-button--ghost lex-button--md">Ghost</button>
  <button class="lex-button lex-button--danger lex-button--md">Danger</button>
</div>

### Sizes

<div class="component-preview">
  <button class="lex-button lex-button--primary lex-button--sm">Small</button>
  <button class="lex-button lex-button--primary lex-button--md">Medium</button>
  <button class="lex-button lex-button--primary lex-button--lg">Large</button>
</div>

### States

<div class="component-preview component-preview--col">
  <div class="lex-preview-group">
    <span class="lex-preview-label">Default</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm">Primary</button>
      <button class="lex-button lex-button--secondary lex-button--sm">Secondary</button>
      <button class="lex-button lex-button--ghost lex-button--sm">Ghost</button>
      <button class="lex-button lex-button--danger lex-button--sm">Danger</button>
    </div>
  </div>
  <div class="lex-preview-group">
    <span class="lex-preview-label">Hover</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm lex-button--force-hover">Primary</button>
      <button class="lex-button lex-button--secondary lex-button--sm lex-button--force-hover">Secondary</button>
      <button class="lex-button lex-button--ghost lex-button--sm lex-button--force-hover">Ghost</button>
      <button class="lex-button lex-button--danger lex-button--sm lex-button--force-hover">Danger</button>
    </div>
  </div>
  <div class="lex-preview-group">
    <span class="lex-preview-label">Active</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm lex-button--force-active">Primary</button>
      <button class="lex-button lex-button--secondary lex-button--sm lex-button--force-active">Secondary</button>
      <button class="lex-button lex-button--ghost lex-button--sm lex-button--force-active">Ghost</button>
      <button class="lex-button lex-button--danger lex-button--sm lex-button--force-active">Danger</button>
    </div>
  </div>
  <div class="lex-preview-group">
    <span class="lex-preview-label">Focus</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm lex-button--force-focus">Primary</button>
      <button class="lex-button lex-button--secondary lex-button--sm lex-button--force-focus">Secondary</button>
      <button class="lex-button lex-button--ghost lex-button--sm lex-button--force-focus">Ghost</button>
      <button class="lex-button lex-button--danger lex-button--sm lex-button--force-focus">Danger</button>
    </div>
  </div>
  <div class="lex-preview-group">
    <span class="lex-preview-label">Disabled</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm" disabled>Primary</button>
      <button class="lex-button lex-button--secondary lex-button--sm" disabled>Secondary</button>
      <button class="lex-button lex-button--ghost lex-button--sm" disabled>Ghost</button>
      <button class="lex-button lex-button--danger lex-button--sm" disabled>Danger</button>
    </div>
  </div>
  <div class="lex-preview-group">
    <span class="lex-preview-label">Loading</span>
    <div class="lex-preview-row">
      <button class="lex-button lex-button--primary lex-button--sm lex-button--loading" aria-busy="true">Save</button>
      <button class="lex-button lex-button--secondary lex-button--sm lex-button--loading" aria-busy="true">Load</button>
      <button class="lex-button lex-button--ghost lex-button--sm lex-button--loading" aria-busy="true">Sync</button>
      <button class="lex-button lex-button--danger lex-button--sm lex-button--loading" aria-busy="true">Delete</button>
    </div>
  </div>
</div>

### With icons

<div class="component-preview">
  <button class="lex-button lex-button--primary lex-button--md">
    <span class="lex-button__icon lex-button__icon--leading"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="3" x2="8" y2="13"/><line x1="3" y1="8" x2="13" y2="8"/></svg></span>
    Add item
  </button>
  <button class="lex-button lex-button--secondary lex-button--md">
    Export
    <span class="lex-button__icon lex-button__icon--trailing"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg></span>
  </button>
  <button class="lex-button lex-button--ghost lex-button--md lex-button--icon-only" aria-label="Settings">
    <span class="lex-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="2"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M2.9 13.1l1.4-1.4M11.7 4.3l1.4-1.4"/></svg></span>
  </button>
</div>

### Full width

<div class="component-preview" style="max-width: 400px;">
  <button class="lex-button lex-button--primary lex-button--md lex-button--full-width">Full width button</button>
</div>

## Variants

- **Primary** -- solid purple background. Use for the main action on a page.
- **Secondary** -- transparent with a visible border. Use for supporting actions alongside a primary button.
- **Ghost** -- no background or border. Use for low-emphasis actions, toolbars, or inline triggers.
- **Danger** -- solid red background. Use for destructive actions like delete or remove.

## Sizes

| Size | Height | Horizontal padding | Font size |
| --- | --- | --- | --- |
| `sm` | 32 px | 12 px | 13 px |
| `md` | 40 px | 20 px | 14 px |
| `lg` | 48 px | 24 px | 16 px |

## States

| State | Appearance |
| --- | --- |
| Default | Resting state with stable colour fill |
| Hover | Background shifts one step darker (primary, danger) or shows subtle fill (secondary, ghost) |
| Active | Darker than hover, slight inset feel |
| Focus | 2 px brand-purple ring with 2 px offset, visible on both light and dark surfaces |
| Disabled | 50 % opacity, `cursor: not-allowed`, no hover effect. Label remains legible. |
| Loading | Spinner replaces text, button non-interactive, `aria-busy="true"` |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button height and padding |
| `disabled` | `boolean` | `false` | Disables interaction |
| `loading` | `boolean` | `false` | Shows spinner, sets aria-busy |
| `fullWidth` | `boolean` | `false` | Stretches to 100% of container |
| `iconLeading` | `ReactNode` | -- | Icon before the label |
| `iconTrailing` | `ReactNode` | -- | Icon after the label |
| `className` | `string` | -- | Additional CSS classes |
| `children` | `React.ReactNode` | -- | Button label content |

All standard `<button>` HTML attributes are also forwarded.

## Code example

### React

```tsx
import { Button } from '@thepace/lexicon/components';

function Actions() {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost" size="sm">Reset</Button>
      <Button variant="danger" disabled>Delete</Button>
      <Button variant="primary" loading>Saving...</Button>
      <Button variant="primary" iconLeading={<PlusIcon />}>Add item</Button>
    </div>
  );
}
```

### Vanilla HTML

```html
<button class="lex-button lex-button--primary lex-button--md">
  Save changes
</button>

<button class="lex-button lex-button--secondary lex-button--md">
  Cancel
</button>

<button class="lex-button lex-button--primary lex-button--md lex-button--loading"
        aria-busy="true">
  Saving...
</button>

<button class="lex-button lex-button--primary lex-button--md lex-button--full-width">
  Full width
</button>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-button` | Base styles |
| `.lex-button--primary` | Primary variant |
| `.lex-button--secondary` | Secondary variant |
| `.lex-button--ghost` | Ghost variant |
| `.lex-button--danger` | Danger variant |
| `.lex-button--sm` | Small size |
| `.lex-button--md` | Medium size (default) |
| `.lex-button--lg` | Large size |
| `.lex-button--full-width` | 100% width |
| `.lex-button--loading` | Loading state with spinner |
| `.lex-button--icon-only` | Square icon-only button |

## Accessibility

- Renders a native `<button>` element with correct `type="button"` default.
- Focus ring uses `--border-focus` (purple-500) with a 2 px offset for clear visibility on both light and dark surfaces.
- When `disabled`, the button receives `aria-disabled="true"` and suppresses click events. Label text remains legible at reduced opacity.
- When `loading`, `aria-busy="true"` is set and the label remains in the DOM for screen readers.
- Colour contrast between text and background meets WCAG AA (4.5:1) for all variants in both themes.
- Icon-only buttons require an `aria-label` for screen reader context.
- Keyboard: Enter and Space trigger the button action.

## Guidelines

::: tip Do
- Use a single primary button per section to establish a clear visual hierarchy.
- Pair primary with secondary or ghost for multi-action layouts.
- Add `aria-label` to icon-only buttons.
:::

::: danger Don't
- Don't use danger variant for non-destructive actions.
- Don't disable buttons without explaining why (use a tooltip or helper text).
- Don't nest interactive elements inside a button.
:::
