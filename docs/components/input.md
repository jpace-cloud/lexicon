# Input

A text input field with built-in label, helper text, error messaging, and icon slots.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Email address</label>
    <input class="lex-input lex-input--md" type="email" placeholder="you@example.com" />
    <span class="lex-input__helper">We'll never share your email.</span>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Full name</label>
    <input class="lex-input lex-input--md" type="text" value="Jonathan Pace" />
  </div>
  <div class="lex-input-wrapper lex-input-wrapper--error">
    <label class="lex-input__label">Password</label>
    <input class="lex-input lex-input--md" type="password" value="short" />
    <span class="lex-input__error">Password must be at least 8 characters.</span>
  </div>
  <div class="lex-input-wrapper lex-input-wrapper--success">
    <label class="lex-input__label">Username</label>
    <input class="lex-input lex-input--md" type="text" value="jpace" />
    <span class="lex-input__success">Username is available.</span>
  </div>
</div>

### Sizes

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Small</label>
    <input class="lex-input lex-input--sm" placeholder="sm" />
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Medium</label>
    <input class="lex-input lex-input--md" placeholder="md" />
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Large</label>
    <input class="lex-input lex-input--lg" placeholder="lg" />
  </div>
</div>

### Disabled and read-only

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Disabled</label>
    <input class="lex-input lex-input--md" disabled placeholder="Cannot edit" />
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Read-only</label>
    <input class="lex-input lex-input--md" readonly value="Fixed value" />
  </div>
</div>

## Features

- **Label** -- rendered above the field. Always visible for accessibility.
- **Helper text** -- muted hint below the field for guidance.
- **Error text** -- replaces helper text when validation fails. Colours the border red.
- **Success text** -- shows validation success with green border and message.
- **Icon slots** -- optional leading and trailing icons inside the field.
- **Sizes** -- three height options (sm, md, lg).

## Sizes

| Size | Height | Horizontal padding | Font size |
| --- | --- | --- | --- |
| `sm` | 32 px | 8 px | 13 px |
| `md` | 40 px | 12 px | 14 px |
| `lg` | 48 px | 16 px | 16 px |

## States

| State | Appearance |
| --- | --- |
| Empty | Placeholder text visible, default border |
| Filled | Entered text in primary colour |
| Focus | Brand-purple border with focus shadow |
| Disabled | Reduced opacity, lighter background, no interaction |
| Read-only | Lighter background, default cursor, no editing |
| Error | Red border, red error message below |
| Success | Green border, green success message below |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | -- | Visible label text |
| `helper` | `string` | -- | Helper text below the input |
| `error` | `string` | -- | Error message (replaces helper, colours border) |
| `success` | `string` | -- | Success message (replaces helper, colours border) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input height and padding |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | -- | Placeholder text |
| `disabled` | `boolean` | `false` | Disables input |
| `readOnly` | `boolean` | `false` | Makes input non-editable |
| `leadingIcon` | `React.ReactNode` | -- | Icon rendered inside the field, before text |
| `trailingIcon` | `React.ReactNode` | -- | Icon rendered inside the field, after text |
| `className` | `string` | -- | Additional CSS classes on the wrapper |

All standard `<input>` HTML attributes are forwarded to the underlying element.

## Code example

### React

```tsx
import { Input } from '@thepace/lexicon/components';

function SignupForm() {
  return (
    <form>
      <Input
        label="Email address"
        type="email"
        placeholder="you@example.com"
        helper="We'll never share your email."
      />
      <Input
        label="Password"
        type="password"
        error="Password must be at least 8 characters."
      />
      <Input
        label="Username"
        success="Username is available."
        value="jpace"
      />
    </form>
  );
}
```

### Vanilla HTML

```html
<div class="lex-input-wrapper">
  <label class="lex-input__label">Email address</label>
  <input class="lex-input lex-input--md" type="email"
         placeholder="you@example.com" />
  <span class="lex-input__helper">We'll never share your email.</span>
</div>

<div class="lex-input-wrapper lex-input-wrapper--error">
  <label class="lex-input__label">Password</label>
  <input class="lex-input lex-input--md" type="password" />
  <span class="lex-input__error">Password must be at least 8 characters.</span>
</div>

<div class="lex-input-wrapper lex-input-wrapper--success">
  <label class="lex-input__label">Username</label>
  <input class="lex-input lex-input--md" value="jpace" />
  <span class="lex-input__success">Username is available.</span>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-input-wrapper` | Outer container |
| `.lex-input-wrapper--error` | Error state on wrapper |
| `.lex-input-wrapper--success` | Success state on wrapper |
| `.lex-input` | The input element |
| `.lex-input--sm` | Small size |
| `.lex-input--md` | Medium size (default) |
| `.lex-input--lg` | Large size |
| `.lex-input__label` | Label element |
| `.lex-input__helper` | Helper text |
| `.lex-input__error` | Error text |
| `.lex-input__success` | Success text |

## Accessibility

- The `label` prop renders a `<label>` element connected to the input via `htmlFor`/`id`.
- When `error` is set, the input receives `aria-invalid="true"` and `aria-describedby` pointing to the error message.
- When `helper` is set (without error), `aria-describedby` points to the helper text.
- Focus ring uses `--border-focus` with a visible outline for keyboard navigation.
- `disabled` inputs receive `aria-disabled="true"` and reduced opacity.
- `readonly` inputs are focusable but not editable.
- Keyboard: Tab moves focus in/out.

## Guidelines

::: tip Do
- Always include a visible label for accessibility.
- Use helper text for formatting hints (e.g. "Format: DD/MM/YYYY").
- Show validation errors inline, not in alerts or toasts.
:::

::: danger Don't
- Don't use placeholder text as a label substitute.
- Don't show error and success states simultaneously.
:::
