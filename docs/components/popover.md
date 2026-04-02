# Popover

A small floating container triggered by click. Displays rich content like text, forms, or option lists anchored to a trigger element.

## Preview

<div class="component-preview" style="padding: 80px 32px 48px; gap: 48px;">
  <div class="lex-popover-wrapper">
    <button class="lex-button lex-button--secondary lex-button--sm">Click me</button>
    <div class="lex-popover lex-popover--bottom">
      <div class="lex-popover__title">Project settings</div>
      <div class="lex-popover__body">Configure visibility, notifications, and team access for this project.</div>
    </div>
  </div>
  <div class="lex-popover-wrapper">
    <button class="lex-button lex-button--ghost lex-button--sm">Info</button>
    <div class="lex-popover lex-popover--top">
      <div class="lex-popover__title">What is this?</div>
      <div class="lex-popover__body">Popovers display contextual information or actions anchored to a trigger element.</div>
    </div>
  </div>
</div>

## Positions

| Position | Description |
| --- | --- |
| `top` | Above the trigger |
| `right` | To the right of the trigger |
| `bottom` | Below the trigger |
| `left` | To the left of the trigger |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | -- | Open state change handler |
| `position` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred placement |
| `trigger` | `'click' \| 'hover'` | `'click'` | How to open the popover |
| `closeOnOutsideClick` | `boolean` | `true` | Close when clicking outside |
| `className` | `string` | -- | Additional CSS classes |
| `children` | `React.ReactNode` | -- | Popover content |

## Code example

### React

```tsx
import { Popover, PopoverTrigger, Button } from '@thepace/lexicon/components';

<PopoverTrigger>
  <Button variant="secondary" size="sm">Settings</Button>
  <Popover position="bottom">
    <h4>Project settings</h4>
    <p>Configure visibility and access.</p>
  </Popover>
</PopoverTrigger>
```

### Vanilla HTML

```html
<div class="lex-popover-wrapper">
  <button class="lex-button lex-button--secondary lex-button--sm">Settings</button>
  <div class="lex-popover lex-popover--bottom" role="dialog">
    <div class="lex-popover__title">Project settings</div>
    <div class="lex-popover__body">Configure visibility and access.</div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-popover-wrapper` | Positioning container |
| `.lex-popover` | Popover panel |
| `.lex-popover--top` | Top position |
| `.lex-popover--right` | Right position |
| `.lex-popover--bottom` | Bottom position |
| `.lex-popover--left` | Left position |
| `.lex-popover__title` | Title text |
| `.lex-popover__body` | Body content |

## Accessibility

- Uses `role="dialog"` when interactive, or no role for informational content.
- Focus moves into the popover when opened via click.
- `Escape` closes the popover and returns focus to the trigger.
- Outside clicks close the popover.

## Guidelines

::: tip Do
- Use for contextual info, small forms, or settings.
- Keep popover content brief — under 200 words.
- Use the appropriate position to avoid viewport overflow.
:::

::: danger Don't
- Don't use a popover for complex or multi-step forms — use a modal or drawer.
- Don't use for simple text hints — use a Tooltip instead.
- Don't use hover trigger for interactive content (links, buttons inside).
:::
