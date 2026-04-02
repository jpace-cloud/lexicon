# Checkbox

A form control for toggling individual options on or off. Supports checked, unchecked, and indeterminate states.

## Preview

<div class="component-preview component-preview--col" style="gap: 12px; align-items: flex-start;">
  <label class="lex-checkbox">
    <input type="checkbox" class="lex-checkbox__input" checked />
    <span>Email notifications</span>
  </label>
  <label class="lex-checkbox">
    <input type="checkbox" class="lex-checkbox__input" />
    <span>SMS notifications</span>
  </label>
  <label class="lex-checkbox">
    <input type="checkbox" class="lex-checkbox__input" />
    <span>Push notifications</span>
  </label>
</div>

### States

<div class="component-preview" style="gap: 20px;">
  <label class="lex-checkbox">
    <input type="checkbox" class="lex-checkbox__input" />
    <span>Unchecked</span>
  </label>
  <label class="lex-checkbox">
    <input type="checkbox" class="lex-checkbox__input" checked />
    <span>Checked</span>
  </label>
  <label class="lex-checkbox lex-checkbox--disabled">
    <input type="checkbox" class="lex-checkbox__input" disabled />
    <span>Disabled</span>
  </label>
  <label class="lex-checkbox lex-checkbox--disabled">
    <input type="checkbox" class="lex-checkbox__input" checked disabled />
    <span>Disabled checked</span>
  </label>
</div>

### Error state

<div class="component-preview component-preview--col" style="gap: 8px; align-items: flex-start;">
  <label class="lex-checkbox lex-checkbox--error">
    <input type="checkbox" class="lex-checkbox__input" />
    <span>I agree to the terms</span>
  </label>
  <span class="lex-input__error">You must accept the terms to continue.</span>
</div>

## States

| State | Appearance |
| --- | --- |
| Unchecked | Empty box with border |
| Checked | Brand-purple fill with white checkmark |
| Indeterminate | Brand-purple fill with white dash |
| Disabled | 60% opacity, no interaction |
| Focus | 2 px brand-purple ring with 2 px offset |
| Error | Red border |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Indeterminate state (for "select all") |
| `onChange` | `(checked: boolean) => void` | -- | Change handler |
| `label` | `string` | -- | Visible label text |
| `disabled` | `boolean` | `false` | Disables interaction |
| `error` | `boolean` | `false` | Shows error border |
| `name` | `string` | -- | Form field name |

## Code example

### React

```tsx
import { Checkbox } from '@thepace/lexicon/components';

<Checkbox label="Email notifications" checked onChange={setEmail} />
<Checkbox label="SMS notifications" />
<Checkbox label="I agree to the terms" error />
```

### Vanilla HTML

```html
<label class="lex-checkbox">
  <input type="checkbox" class="lex-checkbox__input" checked />
  <span>Email notifications</span>
</label>

<label class="lex-checkbox lex-checkbox--error">
  <input type="checkbox" class="lex-checkbox__input" />
  <span>I agree to the terms</span>
</label>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-checkbox` | Wrapper label |
| `.lex-checkbox__input` | The checkbox input |
| `.lex-checkbox--disabled` | Disabled state |
| `.lex-checkbox--error` | Error border |

## Accessibility

- Uses a native `<input type="checkbox">` for full keyboard and screen reader support.
- Label wraps the input — no `htmlFor` required.
- `aria-invalid="true"` when in error state.
- Keyboard: Space toggles the checkbox.
- Indeterminate state set via `element.indeterminate = true` in JavaScript.

## Guidelines

::: tip Do
- Use for independent options that can be toggled individually.
- Use indeterminate state for "select all" headers in checkbox groups.
- Group related checkboxes inside a `<fieldset>` with a `<legend>`.
:::

::: danger Don't
- Don't use for mutually exclusive options — use Radio instead.
- Don't use as a toggle switch — use Toggle for instant on/off actions.
:::
