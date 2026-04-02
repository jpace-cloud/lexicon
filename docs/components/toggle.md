# Toggle

A switch control for binary on/off states. Renders with the `switch` ARIA role for correct screen reader semantics.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px; align-items: flex-start;">
  <label class="lex-toggle">
    <span class="lex-toggle__track lex-toggle__track--md lex-toggle__track--on" role="switch" aria-checked="true">
      <span class="lex-toggle__thumb"></span>
    </span>
    <span class="lex-toggle__label">Email notifications</span>
  </label>
  <label class="lex-toggle">
    <span class="lex-toggle__track lex-toggle__track--md" role="switch" aria-checked="false">
      <span class="lex-toggle__thumb"></span>
    </span>
    <span class="lex-toggle__label">SMS notifications</span>
  </label>
  <label class="lex-toggle">
    <span class="lex-toggle__track lex-toggle__track--sm lex-toggle__track--on" role="switch" aria-checked="true">
      <span class="lex-toggle__thumb"></span>
    </span>
    <span class="lex-toggle__label">Small toggle (on)</span>
  </label>
  <label class="lex-toggle lex-toggle--disabled">
    <span class="lex-toggle__track lex-toggle__track--md" role="switch" aria-checked="false" aria-disabled="true">
      <span class="lex-toggle__thumb"></span>
    </span>
    <span class="lex-toggle__label">Disabled toggle</span>
  </label>
</div>

## Sizes

| Size | Track width | Track height | Thumb size |
| --- | --- | --- | --- |
| `sm` | 36 px | 20 px | 16 px |
| `md` | 44 px | 24 px | 20 px |

## Features

- **Label** -- optional label rendered next to the toggle. Position can be `left` or `right`.
- **Disabled** -- reduces opacity to 50% and prevents interaction.
- **Spring easing** -- the thumb uses the spring easing curve for a tactile feel.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | Whether the toggle is on |
| `onChange` | `(checked: boolean) => void` | -- | Called when the state changes |
| `size` | `'sm' \| 'md'` | `'md'` | Toggle dimensions |
| `label` | `string` | -- | Visible label text |
| `labelPosition` | `'left' \| 'right'` | `'right'` | Which side the label appears on |
| `disabled` | `boolean` | `false` | Disables the toggle |
| `className` | `string` | -- | Additional CSS classes |

## Code example

### React

```tsx
import { useState } from 'react';
import { Toggle } from '@thepace/lexicon/components';

function NotificationSettings() {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Toggle
        checked={email}
        onChange={setEmail}
        label="Email notifications"
      />
      <Toggle
        checked={sms}
        onChange={setSms}
        label="SMS notifications"
        size="sm"
      />
      <Toggle
        checked={false}
        label="Push notifications"
        disabled
      />
    </div>
  );
}
```

### Vanilla HTML

```html
<label class="lex-toggle">
  <button
    class="lex-toggle__track lex-toggle__track--on"
    role="switch"
    aria-checked="true"
    aria-label="Email notifications"
  >
    <span class="lex-toggle__thumb"></span>
  </button>
  <span class="lex-toggle__label">Email notifications</span>
</label>

<label class="lex-toggle lex-toggle--sm">
  <button
    class="lex-toggle__track"
    role="switch"
    aria-checked="false"
    aria-label="SMS notifications"
  >
    <span class="lex-toggle__thumb"></span>
  </button>
  <span class="lex-toggle__label">SMS notifications</span>
</label>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-toggle` | Wrapper (flex container with label) |
| `.lex-toggle--sm` | Small size |
| `.lex-toggle--md` | Medium size (default) |
| `.lex-toggle--disabled` | Disabled state |
| `.lex-toggle__track` | The track (pill-shaped background) |
| `.lex-toggle__track--on` | Active/on state |
| `.lex-toggle__thumb` | The sliding circle |
| `.lex-toggle__label` | Label text |

## Accessibility

- Uses `role="switch"` with `aria-checked` reflecting the current state.
- When a `label` prop is provided, it is linked via `aria-labelledby`. Without a label, provide `aria-label` directly.
- The toggle is focusable and activates on `Space` or `Enter`.
- When `disabled`, `aria-disabled="true"` is set and interaction is suppressed.
- The focus ring uses `--border-focus` for clear keyboard navigation visibility.
