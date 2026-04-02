# Badge

A compact status indicator with semantic variants, optional dot mode, and a removable option.

## Preview

<div class="component-preview">
  <span class="lex-badge">Draft</span>
  <span class="lex-badge lex-badge--success">Active</span>
  <span class="lex-badge lex-badge--warning">Pending</span>
  <span class="lex-badge lex-badge--error">Failed</span>
  <span class="lex-badge lex-badge--info">Info</span>
</div>

### With dot indicator

<div class="component-preview">
  <span class="lex-badge lex-badge--success lex-badge--dot">Online</span>
  <span class="lex-badge lex-badge--warning lex-badge--dot">Away</span>
  <span class="lex-badge lex-badge--error lex-badge--dot">Offline</span>
</div>

### Sizes

<div class="component-preview">
  <span class="lex-badge lex-badge--info lex-badge--sm">Small</span>
  <span class="lex-badge lex-badge--info lex-badge--md">Medium</span>
</div>

## Variants

| Variant | Background | Text colour | Use case |
| --- | --- | --- | --- |
| `default` | `grey.800` | `grey.300` | Neutral labels and tags |
| `success` | `rgba(34, 197, 94, 0.12)` | `#22C55E` | Active, complete, online |
| `warning` | `rgba(234, 179, 8, 0.12)` | `#EAB308` | Pending, needs attention |
| `error` | `rgba(239, 68, 68, 0.12)` | `#EF4444` | Failed, offline, blocked |
| `info` | `rgba(59, 130, 246, 0.12)` | `#3B82F6` | Informational, in progress |

## Sizes

| Size | Font size | Padding |
| --- | --- | --- |
| `sm` | 11 px | `1px 6px` |
| `md` | 13 px | `2px 10px` |

## Features

- **Dot mode** -- prepends a small coloured dot before the label for extra visual weight.
- **Removable** -- shows a close icon. Fires `onRemove` when clicked.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Colour variant |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size |
| `dot` | `boolean` | `false` | Show a coloured dot before the label |
| `removable` | `boolean` | `false` | Show a close/remove icon |
| `onRemove` | `() => void` | -- | Called when the remove icon is clicked |
| `className` | `string` | -- | Additional CSS classes |
| `children` | `React.ReactNode` | -- | Badge label |

## Code example

### React

```tsx
import { Badge } from '@thepace/lexicon/components';

function StatusList() {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error" removable onRemove={() => {}}>Failed</Badge>
      <Badge variant="info" size="md">v1.0.0</Badge>
      <Badge>Draft</Badge>
    </div>
  );
}
```

### Vanilla HTML

```html
<span class="lex-badge lex-badge--success lex-badge--dot">Active</span>
<span class="lex-badge lex-badge--warning">Pending</span>
<span class="lex-badge lex-badge--error lex-badge--removable">
  Failed
  <button class="lex-badge__remove" aria-label="Remove">&times;</button>
</span>
<span class="lex-badge lex-badge--info lex-badge--md">v1.0.0</span>
<span class="lex-badge">Draft</span>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-badge` | Base badge styles |
| `.lex-badge--default` | Default variant |
| `.lex-badge--success` | Success variant |
| `.lex-badge--warning` | Warning variant |
| `.lex-badge--error` | Error variant |
| `.lex-badge--info` | Info variant |
| `.lex-badge--sm` | Small size |
| `.lex-badge--md` | Medium size |
| `.lex-badge--dot` | Dot mode |
| `.lex-badge--removable` | Removable mode |
| `.lex-badge__remove` | Remove button |
