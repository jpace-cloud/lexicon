# Select

A native select dropdown with consistent styling across browsers. Uses the same token system as Input for visual consistency.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Country</label>
    <select class="lex-select lex-select--md">
      <option value="" disabled selected>Select a country</option>
      <option>United Kingdom</option>
      <option>United States</option>
      <option>Germany</option>
      <option>France</option>
    </select>
  </div>
  <div class="lex-input-wrapper lex-select-wrapper--error">
    <label class="lex-input__label">Role</label>
    <select class="lex-select lex-select--md">
      <option value="" disabled selected>Select a role</option>
      <option>Admin</option>
      <option>Editor</option>
      <option>Viewer</option>
    </select>
    <span class="lex-input__error">Please select a role.</span>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Status (disabled)</label>
    <select class="lex-select lex-select--md" disabled>
      <option>Active</option>
    </select>
  </div>
</div>

### Sizes

<div class="component-preview" style="gap: 16px; align-items: flex-end;">
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Small</label>
    <select class="lex-select lex-select--sm">
      <option>Option A</option>
      <option>Option B</option>
    </select>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Medium</label>
    <select class="lex-select lex-select--md">
      <option>Option A</option>
      <option>Option B</option>
    </select>
  </div>
  <div class="lex-input-wrapper">
    <label class="lex-input__label">Large</label>
    <select class="lex-select lex-select--lg">
      <option>Option A</option>
      <option>Option B</option>
    </select>
  </div>
</div>

## Features

- Native `<select>` element for maximum compatibility and accessibility.
- Custom chevron indicator via CSS background image.
- Matches Input heights, borders, and focus styles.
- Browser-native dropdown menu for option selection.

## States

| State | Appearance |
| --- | --- |
| Default | Resting with chevron indicator |
| Focus | Brand-purple border with focus shadow |
| Disabled | Reduced opacity, no interaction |
| Error | Red border with error message below |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | -- | Visible label text |
| `helper` | `string` | -- | Helper text below the select |
| `error` | `string` | -- | Error message |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Select height |
| `disabled` | `boolean` | `false` | Disables the select |
| `placeholder` | `string` | -- | Placeholder option text |
| `options` | `{ label: string; value: string }[]` | -- | Option items |

## Code example

### React

```tsx
import { Select } from '@thepace/lexicon/components';

<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { label: 'United Kingdom', value: 'uk' },
    { label: 'United States', value: 'us' },
    { label: 'Germany', value: 'de' },
  ]}
/>
```

### Vanilla HTML

```html
<div class="lex-input-wrapper">
  <label class="lex-input__label">Country</label>
  <select class="lex-select lex-select--md">
    <option value="" disabled selected>Select a country</option>
    <option>United Kingdom</option>
    <option>United States</option>
  </select>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-select` | Base select styles |
| `.lex-select--sm` | Small size |
| `.lex-select--md` | Medium size (default) |
| `.lex-select--lg` | Large size |
| `.lex-select-wrapper--error` | Error state on wrapper |

## Accessibility

- Label connected via `htmlFor`/`id`.
- `aria-invalid="true"` when error is set.
- `aria-describedby` points to helper or error text.
- Native `<select>` provides built-in keyboard navigation (arrow keys, type-ahead).

## Guidelines

::: tip Do
- Include a disabled placeholder option as the first item (e.g. "Select a country").
- Use native select for 5+ options — for 2–4 options, consider a Radio group.
:::

::: danger Don't
- Don't use a custom dropdown when native select provides better accessibility.
- Don't populate with more than 20 options without a search/filter mechanism.
:::
