# Radio

A form control for selecting one option from a mutually exclusive set.

## Preview

<div class="component-preview component-preview--col" style="gap: 4px; align-items: flex-start;">
  <div class="lex-radio-group">
    <label class="lex-radio">
      <input type="radio" name="plan-preview" class="lex-radio__input" checked />
      <span>Free plan</span>
    </label>
    <label class="lex-radio">
      <input type="radio" name="plan-preview" class="lex-radio__input" />
      <span>Pro plan</span>
    </label>
    <label class="lex-radio">
      <input type="radio" name="plan-preview" class="lex-radio__input" />
      <span>Enterprise plan</span>
    </label>
  </div>
</div>

### States

<div class="component-preview" style="gap: 20px;">
  <label class="lex-radio">
    <input type="radio" name="state-demo" class="lex-radio__input" />
    <span>Unselected</span>
  </label>
  <label class="lex-radio">
    <input type="radio" name="state-demo-2" class="lex-radio__input" checked />
    <span>Selected</span>
  </label>
  <label class="lex-radio lex-radio--disabled">
    <input type="radio" name="state-demo-3" class="lex-radio__input" disabled />
    <span>Disabled</span>
  </label>
  <label class="lex-radio lex-radio--disabled">
    <input type="radio" name="state-demo-4" class="lex-radio__input" checked disabled />
    <span>Disabled selected</span>
  </label>
</div>

### Error state

<div class="component-preview component-preview--col" style="gap: 8px; align-items: flex-start;">
  <div class="lex-radio-group">
    <label class="lex-radio lex-radio--error">
      <input type="radio" name="error-demo" class="lex-radio__input" />
      <span>Option A</span>
    </label>
    <label class="lex-radio lex-radio--error">
      <input type="radio" name="error-demo" class="lex-radio__input" />
      <span>Option B</span>
    </label>
  </div>
  <span class="lex-input__error">Please select an option.</span>
</div>

## States

| State | Appearance |
| --- | --- |
| Unselected | Empty circle with border |
| Selected | Brand-purple inner dot |
| Disabled | 60% opacity, no interaction |
| Focus | 2 px brand-purple ring with 2 px offset |
| Error | Red border |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | -- | Value for the radio option |
| `checked` | `boolean` | `false` | Whether this option is selected |
| `onChange` | `(value: string) => void` | -- | Change handler |
| `label` | `string` | -- | Visible label text |
| `name` | `string` | -- | Group name (shared by related radios) |
| `disabled` | `boolean` | `false` | Disables interaction |
| `error` | `boolean` | `false` | Shows error border |

## Code example

### React

```tsx
import { RadioGroup, Radio } from '@thepace/lexicon/components';

<RadioGroup name="plan" value={plan} onChange={setPlan}>
  <Radio value="free" label="Free plan" />
  <Radio value="pro" label="Pro plan" />
  <Radio value="enterprise" label="Enterprise plan" />
</RadioGroup>
```

### Vanilla HTML

```html
<div class="lex-radio-group" role="radiogroup" aria-label="Plan">
  <label class="lex-radio">
    <input type="radio" name="plan" class="lex-radio__input" value="free" checked />
    <span>Free plan</span>
  </label>
  <label class="lex-radio">
    <input type="radio" name="plan" class="lex-radio__input" value="pro" />
    <span>Pro plan</span>
  </label>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-radio` | Wrapper label |
| `.lex-radio__input` | The radio input |
| `.lex-radio--disabled` | Disabled state |
| `.lex-radio--error` | Error border |
| `.lex-radio-group` | Vertical group container |

## Accessibility

- Uses native `<input type="radio">` for built-in keyboard and screen reader support.
- Group radios with a shared `name` attribute and wrap in `role="radiogroup"` with `aria-label`.
- Arrow keys navigate within the group; Space/Enter selects.
- `aria-invalid="true"` when in error state.

## Guidelines

::: tip Do
- Use for mutually exclusive choices where all options should be visible.
- Wrap related radios in a `<fieldset>` with a `<legend>`.
- Pre-select a default option when one makes sense.
:::

::: danger Don't
- Don't use for multiple selections — use Checkbox instead.
- Don't use for more than 7 options — consider a Select dropdown.
:::
