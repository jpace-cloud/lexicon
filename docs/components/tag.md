# Tag / Chip

A compact label for categorisation, filtering, or selection. Supports colour variants, removable mode, and avatar prefix.

## Preview

<div class="component-preview">
  <span class="lex-tag">Default</span>
  <span class="lex-tag lex-tag--primary">Design</span>
  <span class="lex-tag lex-tag--success">Published</span>
  <span class="lex-tag lex-tag--warning">Draft</span>
  <span class="lex-tag lex-tag--error">Archived</span>
</div>

### Rounded (pill)

<div class="component-preview">
  <span class="lex-tag lex-tag--rounded">Label</span>
  <span class="lex-tag lex-tag--primary lex-tag--rounded">React</span>
  <span class="lex-tag lex-tag--success lex-tag--rounded">Stable</span>
</div>

### With avatar and remove

<div class="component-preview">
  <span class="lex-tag">
    <span class="lex-tag__avatar">AM</span>
    Alice Martin
    <button class="lex-tag__remove" aria-label="Remove">&times;</button>
  </span>
  <span class="lex-tag lex-tag--primary">
    <span class="lex-tag__avatar">BC</span>
    Bob Chen
    <button class="lex-tag__remove" aria-label="Remove">&times;</button>
  </span>
</div>

## Variants

| Variant | Use case |
| --- | --- |
| `default` | Neutral category labels |
| `primary` | Brand-related or highlighted tags |
| `success` | Positive status or completed |
| `warning` | Needs attention |
| `error` | Negative status or removed |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Colour variant |
| `rounded` | `boolean` | `false` | Pill shape |
| `removable` | `boolean` | `false` | Show remove button |
| `onRemove` | `() => void` | -- | Remove handler |
| `avatar` | `string` | -- | Initials for leading avatar |
| `children` | `React.ReactNode` | -- | Tag label |

## Code example

### React

```tsx
import { Tag } from '@thepace/lexicon/components';

<Tag variant="primary" rounded>React</Tag>
<Tag variant="success" removable onRemove={() => {}}>Published</Tag>
<Tag avatar="AM">Alice Martin</Tag>
```

### Vanilla HTML

```html
<span class="lex-tag lex-tag--primary lex-tag--rounded">React</span>
<span class="lex-tag lex-tag--success">
  Published
  <button class="lex-tag__remove" aria-label="Remove">&times;</button>
</span>
<span class="lex-tag">
  <span class="lex-tag__avatar">AM</span>
  Alice Martin
</span>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-tag` | Base tag styles |
| `.lex-tag--primary` | Primary variant |
| `.lex-tag--success` | Success variant |
| `.lex-tag--warning` | Warning variant |
| `.lex-tag--error` | Error variant |
| `.lex-tag--rounded` | Pill shape |
| `.lex-tag__remove` | Remove button |
| `.lex-tag__avatar` | Leading avatar circle |

## Accessibility

- Removable tags use `<button>` with `aria-label="Remove"`.
- When used for filtering, wrap in a group with `role="group"` and `aria-label`.
- Selected/active tags should use `aria-pressed="true"`.

## Guidelines

::: tip Do
- Use tags to label, categorise, or filter content.
- Keep labels to 1–2 words.
- Use the rounded variant for filter chips in search interfaces.
:::

::: danger Don't
- Don't use tags for status — use Badge instead.
- Don't use more than 5 colour variants in one view.
- Don't make tags interactive without clear affordance (hover/focus states).
:::
