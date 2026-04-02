# Textarea

A multi-line text input with label, helper text, error state, and optional character counter.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Description</label>
    <textarea class="lex-textarea" placeholder="Enter a description..." rows="3"></textarea>
    <span class="lex-input__helper">Provide a brief summary of the item.</span>
  </div>
  <div class="lex-input-wrapper lex-textarea-wrapper--error">
    <label class="lex-input__label">Bio</label>
    <textarea class="lex-textarea" rows="3">This is too short.</textarea>
    <span class="lex-input__error">Bio must be at least 50 characters.</span>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Notes (disabled)</label>
    <textarea class="lex-textarea" disabled placeholder="Cannot edit" rows="2"></textarea>
  </div>
</div>

### With character counter

<div class="component-preview component-preview--col" style="gap: 4px;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Feedback</label>
    <textarea class="lex-textarea" placeholder="Share your thoughts..." rows="3" maxlength="280"></textarea>
    <div class="lex-textarea-counter">0 / 280</div>
  </div>
</div>

## Features

- **Label** -- rendered above the field. Always visible for accessibility.
- **Helper text** -- muted hint below the field.
- **Error text** -- replaces helper when validation fails.
- **Character counter** -- shows current/max character count.
- **Resize** -- vertical resize enabled by default, disabled when the field is disabled.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | -- | Visible label text |
| `helper` | `string` | -- | Helper text below the field |
| `error` | `string` | -- | Error message |
| `rows` | `number` | `3` | Visible rows |
| `maxLength` | `number` | -- | Maximum characters (shows counter) |
| `disabled` | `boolean` | `false` | Disables the field |
| `placeholder` | `string` | -- | Placeholder text |
| `resize` | `'vertical' \| 'none' \| 'both'` | `'vertical'` | Resize behaviour |

## Code example

### React

```tsx
import { Textarea } from '@thepace/lexicon/components';

<Textarea
  label="Description"
  placeholder="Enter a description..."
  helper="Provide a brief summary."
  maxLength={280}
/>
```

### Vanilla HTML

```html
<div class="lex-input-wrapper">
  <label class="lex-input__label">Description</label>
  <textarea class="lex-textarea" placeholder="Enter a description..."
            rows="3" maxlength="280"></textarea>
  <span class="lex-input__helper">Provide a brief summary.</span>
  <div class="lex-textarea-counter">0 / 280</div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-textarea` | The textarea element |
| `.lex-textarea-wrapper--error` | Error state on wrapper |
| `.lex-textarea-counter` | Character count text |

Uses shared `.lex-input-wrapper`, `.lex-input__label`, `.lex-input__helper`, `.lex-input__error` classes.

## Accessibility

- Label connected via `htmlFor`/`id`.
- `aria-invalid="true"` when error is set.
- `aria-describedby` points to helper or error text.
- Character counter announces remaining characters to screen readers via `aria-live="polite"`.
- Focus ring uses `--border-focus`.

## Guidelines

::: tip Do
- Set a reasonable `rows` value matching expected content length.
- Use `maxLength` with a counter for constrained fields like bios or descriptions.
:::

::: danger Don't
- Don't use a textarea for single-line input — use Input instead.
- Don't disable resize unless the layout requires it.
:::
