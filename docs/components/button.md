# Button

A token-driven button with four variants, three sizes, and loading/disabled states.

## Variants

- **Primary** -- solid purple background. Use for the main action on a page.
- **Secondary** -- transparent with a border. Use for supporting actions alongside a primary button.
- **Ghost** -- no background or border. Use for low-emphasis actions, toolbars, or inline triggers.
- **Danger** -- solid red background. Use for destructive actions like delete or remove.

## Sizes

| Size | Height | Horizontal padding | Font size |
| --- | --- | --- | --- |
| `sm` | 32 px | 12 px | 13 px |
| `md` | 40 px | 20 px | 14 px |
| `lg` | 48 px | 24 px | 16 px |

## States

- **Disabled** -- reduced to 50% opacity with `cursor: not-allowed`. Pointer events are suppressed.
- **Loading** -- shows a spinner and sets `aria-busy="true"`. The button remains its full width to prevent layout shift.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button height and padding |
| `disabled` | `boolean` | `false` | Disables interaction |
| `loading` | `boolean` | `false` | Shows spinner, sets aria-busy |
| `fullWidth` | `boolean` | `false` | Stretches to 100% of container |
| `className` | `string` | -- | Additional CSS classes |
| `style` | `React.CSSProperties` | -- | Inline styles |
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

<button class="lex-button lex-button--ghost lex-button--sm">
  Reset
</button>

<button class="lex-button lex-button--danger lex-button--md" disabled>
  Delete
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
| `.lex-button--loading` | Loading state |

## Accessibility

- Renders a native `<button>` element with correct `type="button"` default.
- Focus ring uses `--border-focus` (purple-500) with a 2 px offset for clear visibility.
- When `disabled`, the button receives `aria-disabled="true"` and suppresses click events.
- When `loading`, `aria-busy="true"` is set and the label remains visible for screen readers.
- Colour contrast between text and background meets WCAG AA (4.5:1) for all variants.
