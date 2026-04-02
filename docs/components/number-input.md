# Number Input

A numeric input with increment and decrement buttons. Constrains input to numbers within an optional range.

## Preview

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Quantity</label>
    <div class="lex-number-input lex-number-input--md">
      <button class="lex-number-input__btn" aria-label="Decrease">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="11" y2="7"/></svg>
      </button>
      <input type="number" class="lex-number-input__field" value="3" min="1" max="99" />
      <button class="lex-number-input__btn" aria-label="Increase">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="11"/><line x1="3" y1="7" x2="11" y2="7"/></svg>
      </button>
    </div>
  </div>
</div>

### Sizes

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Small</label>
    <div class="lex-number-input lex-number-input--sm">
      <button class="lex-number-input__btn" aria-label="Decrease"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="2" y1="6" x2="10" y2="6"/></svg></button>
      <input type="number" class="lex-number-input__field" value="5" />
      <button class="lex-number-input__btn" aria-label="Increase"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="2" x2="6" y2="10"/><line x1="2" y1="6" x2="10" y2="6"/></svg></button>
    </div>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Medium</label>
    <div class="lex-number-input lex-number-input--md">
      <button class="lex-number-input__btn" aria-label="Decrease"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
      <input type="number" class="lex-number-input__field" value="5" />
      <button class="lex-number-input__btn" aria-label="Increase"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="11"/><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
    </div>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Large</label>
    <div class="lex-number-input lex-number-input--lg">
      <button class="lex-number-input__btn" aria-label="Decrease"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="8" x2="13" y2="8"/></svg></button>
      <input type="number" class="lex-number-input__field" value="5" />
      <button class="lex-number-input__btn" aria-label="Increase"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="8" y1="3" x2="8" y2="13"/><line x1="3" y1="8" x2="13" y2="8"/></svg></button>
    </div>
  </div>
</div>

### States

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Disabled</label>
    <div class="lex-number-input lex-number-input--md lex-number-input--disabled">
      <button class="lex-number-input__btn" aria-label="Decrease" disabled><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
      <input type="number" class="lex-number-input__field" value="3" disabled />
      <button class="lex-number-input__btn" aria-label="Increase" disabled><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="11"/><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
    </div>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Error</label>
    <div class="lex-number-input lex-number-input--md lex-number-input--error">
      <button class="lex-number-input__btn" aria-label="Decrease"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
      <input type="number" class="lex-number-input__field" value="0" />
      <button class="lex-number-input__btn" aria-label="Increase"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="3" x2="7" y2="11"/><line x1="3" y1="7" x2="11" y2="7"/></svg></button>
    </div>
    <span class="lex-input__error">Minimum quantity is 1.</span>
  </div>
</div>

## Features

- Increment/decrement buttons for mouse and touch users.
- Native `<input type="number">` for keyboard support (arrow keys, direct typing).
- Browser spin buttons hidden — custom buttons provide consistent appearance.
- Focus ring wraps the entire composite control.

## States

| State | Appearance |
| --- | --- |
| Default | Buttons flanking the number field |
| Focus | Brand-purple border with focus shadow around the entire control |
| Hover (button) | Button background shift |
| Disabled | Reduced opacity, no interaction |
| Error | Red border with error message |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | -- | Current value |
| `onChange` | `(value: number) => void` | -- | Change handler |
| `min` | `number` | -- | Minimum allowed value |
| `max` | `number` | -- | Maximum allowed value |
| `step` | `number` | `1` | Increment step |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `disabled` | `boolean` | `false` | Disables the input |
| `error` | `string` | -- | Error message |
| `label` | `string` | -- | Visible label |

## Code example

### React

```tsx
import { NumberInput } from '@thepace/lexicon/components';

<NumberInput label="Quantity" value={qty} onChange={setQty}
             min={1} max={99} />
```

### Vanilla HTML

```html
<div class="lex-input-wrapper">
  <label class="lex-input__label">Quantity</label>
  <div class="lex-number-input lex-number-input--md">
    <button class="lex-number-input__btn" aria-label="Decrease">−</button>
    <input type="number" class="lex-number-input__field"
           value="3" min="1" max="99" />
    <button class="lex-number-input__btn" aria-label="Increase">+</button>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-number-input` | Composite container |
| `.lex-number-input__field` | The number input |
| `.lex-number-input__btn` | Increment/decrement button |
| `.lex-number-input--sm` | Small size |
| `.lex-number-input--md` | Medium size |
| `.lex-number-input--lg` | Large size |
| `.lex-number-input--disabled` | Disabled state |
| `.lex-number-input--error` | Error state |

## Accessibility

- Buttons have `aria-label` ("Increase" / "Decrease").
- Native `<input type="number">` handles keyboard arrow key increments.
- When min/max is reached, the corresponding button should be disabled and set `aria-disabled="true"`.
- Focus ring wraps the entire composite control via `:focus-within`.

## Guidelines

::: tip Do
- Set clear `min` and `max` boundaries and communicate them.
- Disable the decrement button at min and increment at max.
:::

::: danger Don't
- Don't use for free-form numeric entry — use a standard Input with `type="number"`.
- Don't omit `aria-label` on the increment/decrement buttons.
:::
