# Button Group

A row of connected buttons that share borders. Use for related actions, view toggles, or segmented controls.

## Preview

<div class="component-preview">
  <div class="lex-button-group">
    <button class="lex-button lex-button--secondary lex-button--md lex-button--active">Left</button>
    <button class="lex-button lex-button--secondary lex-button--md">Centre</button>
    <button class="lex-button lex-button--secondary lex-button--md">Right</button>
  </div>
</div>

### With icons

<div class="component-preview">
  <div class="lex-button-group">
    <button class="lex-button lex-button--secondary lex-button--md lex-button--active" aria-label="List view">
      <span class="lex-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/></svg></span>
    </button>
    <button class="lex-button lex-button--secondary lex-button--md" aria-label="Grid view">
      <span class="lex-button__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg></span>
    </button>
  </div>
</div>

### Sizes

<div class="component-preview" style="flex-direction: column; align-items: flex-start; gap: 12px;">
  <div class="lex-button-group">
    <button class="lex-button lex-button--secondary lex-button--sm lex-button--active">Day</button>
    <button class="lex-button lex-button--secondary lex-button--sm">Week</button>
    <button class="lex-button lex-button--secondary lex-button--sm">Month</button>
  </div>
  <div class="lex-button-group">
    <button class="lex-button lex-button--secondary lex-button--md lex-button--active">Day</button>
    <button class="lex-button lex-button--secondary lex-button--md">Week</button>
    <button class="lex-button lex-button--secondary lex-button--md">Month</button>
  </div>
  <div class="lex-button-group">
    <button class="lex-button lex-button--secondary lex-button--lg lex-button--active">Day</button>
    <button class="lex-button lex-button--secondary lex-button--lg">Week</button>
    <button class="lex-button lex-button--secondary lex-button--lg">Month</button>
  </div>
</div>

## Behaviour

- Buttons are visually joined with no gap. Interior buttons have zero border-radius.
- The first button keeps the left radius, the last button keeps the right radius.
- Overlapping borders are collapsed with `margin-left: -1px`.
- The **active** button receives the primary fill to indicate the current selection.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | -- | Button elements |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Uniform size for all buttons |
| `className` | `string` | -- | Additional CSS classes |

Each child button accepts standard Button props. Add `active` to highlight the selected button.

## Code example

### React

```tsx
import { ButtonGroup, Button } from '@thepace/lexicon/components';

<ButtonGroup>
  <Button variant="secondary" active>Day</Button>
  <Button variant="secondary">Week</Button>
  <Button variant="secondary">Month</Button>
</ButtonGroup>
```

### Vanilla HTML

```html
<div class="lex-button-group">
  <button class="lex-button lex-button--secondary lex-button--md lex-button--active">
    Day
  </button>
  <button class="lex-button lex-button--secondary lex-button--md">
    Week
  </button>
  <button class="lex-button lex-button--secondary lex-button--md">
    Month
  </button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-button-group` | Container — joins child buttons |
| `.lex-button--active` | Highlights the selected button with primary fill |

Child buttons use standard `.lex-button` classes. The group container handles radius and border collapse.

## Accessibility

- Wrap in a `role="group"` with an `aria-label` describing the control (e.g. "View mode").
- Use `aria-pressed="true"` on the active button for toggle groups.
- Keyboard: Tab moves focus into the group, arrow keys navigate between buttons.

## Guidelines

::: tip Do
- Use for mutually exclusive options (view toggles, time ranges, segmented controls).
- Keep groups to 2–5 buttons for scannability.
- Use consistent button sizes within a group.
:::

::: danger Don't
- Don't mix different variants within the same group.
- Don't use for unrelated actions — use separate buttons with spacing instead.
:::
