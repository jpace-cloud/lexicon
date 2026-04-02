# Tooltip

A lightweight popup that shows contextual information when hovering or focusing a trigger element.

## Preview

<div class="component-preview" style="padding: 48px 32px; gap: 40px;">
  <div class="lex-tooltip-wrapper">
    <button class="lex-button lex-button--ghost lex-button--sm">Hover me (top)</button>
    <div class="lex-tooltip lex-tooltip--top">Create a new project</div>
  </div>
  <div class="lex-tooltip-wrapper">
    <button class="lex-button lex-button--ghost lex-button--sm">Hover me (bottom)</button>
    <div class="lex-tooltip lex-tooltip--bottom">Save your changes</div>
  </div>
</div>

## Features

- **Four positions** -- top, right, bottom, left. The tooltip auto-positions its arrow.
- **Configurable delay** -- defaults to 300 ms (the `--motion-duration-slow` token). Set to 0 for instant display.
- **Max width** -- constrained to 240 px to keep text scannable.
- **Arrow** -- a 6 px arrow pointing toward the trigger.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `React.ReactNode` | -- | Tooltip text or content |
| `position` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Preferred placement |
| `delay` | `number` | `300` | Show delay in milliseconds |
| `className` | `string` | -- | Additional CSS classes on the tooltip |
| `children` | `React.ReactElement` | -- | Trigger element (must accept ref) |

## Code example

### React

```tsx
import { Tooltip, Button } from '@thepace/lexicon/components';

function Toolbar() {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Tooltip content="Create a new project" position="bottom">
        <Button variant="ghost" size="sm">New</Button>
      </Tooltip>

      <Tooltip content="Save your changes" position="bottom" delay={0}>
        <Button variant="ghost" size="sm">Save</Button>
      </Tooltip>

      <Tooltip content="Open settings" position="left">
        <Button variant="ghost" size="sm">Settings</Button>
      </Tooltip>
    </div>
  );
}
```

### Vanilla HTML

```html
<div class="lex-tooltip-wrapper">
  <button class="lex-button lex-button--ghost lex-button--sm">New</button>
  <div class="lex-tooltip lex-tooltip--bottom" role="tooltip">
    Create a new project
    <div class="lex-tooltip__arrow"></div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-tooltip-wrapper` | Positioning container |
| `.lex-tooltip` | Tooltip element |
| `.lex-tooltip--top` | Top position |
| `.lex-tooltip--right` | Right position |
| `.lex-tooltip--bottom` | Bottom position |
| `.lex-tooltip--left` | Left position |
| `.lex-tooltip__arrow` | Arrow indicator |

## Accessibility

- The tooltip uses `role="tooltip"` and is linked to the trigger via `aria-describedby`.
- The trigger element receives focus handling so keyboard users can access the tooltip content.
- The tooltip is hidden from the accessibility tree when not visible (`aria-hidden="true"`).
- Content is text-only by design to remain accessible to screen readers.
