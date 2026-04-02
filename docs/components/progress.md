# Progress Bar

A horizontal bar indicating the completion of a task. Supports determinate (with percentage) and indeterminate (animated) modes.

## Preview

<div class="component-preview component-preview--col" style="gap: 20px;">
  <div class="lex-progress">
    <div class="lex-progress__row">
      <span class="lex-progress__title">Uploading files</span>
      <span class="lex-progress__value">72%</span>
    </div>
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--brand" style="width: 72%;"></div>
    </div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__row">
      <span class="lex-progress__title">Storage used</span>
      <span class="lex-progress__value">45%</span>
    </div>
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--success" style="width: 45%;"></div>
    </div>
  </div>
</div>

### Variants

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--brand" style="width: 60%;"></div>
    </div>
    <div class="lex-progress__label">Brand — 60%</div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--success" style="width: 80%;"></div>
    </div>
    <div class="lex-progress__label">Success — 80%</div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--warning" style="width: 50%;"></div>
    </div>
    <div class="lex-progress__label">Warning — 50%</div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--error" style="width: 90%;"></div>
    </div>
    <div class="lex-progress__label">Error — 90%</div>
  </div>
</div>

### Sizes

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--thin">
      <div class="lex-progress__fill lex-progress__fill--brand" style="width: 65%;"></div>
    </div>
    <div class="lex-progress__label">Thin (4 px)</div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--brand" style="width: 65%;"></div>
    </div>
    <div class="lex-progress__label">Default (8 px)</div>
  </div>
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--thick">
      <div class="lex-progress__fill lex-progress__fill--brand" style="width: 65%;"></div>
    </div>
    <div class="lex-progress__label">Thick (12 px)</div>
  </div>
</div>

### Indeterminate

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-progress">
    <div class="lex-progress__track lex-progress__track--default">
      <div class="lex-progress__fill lex-progress__fill--brand lex-progress__fill--indeterminate"></div>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | -- | Progress percentage (0–100) |
| `variant` | `'brand' \| 'success' \| 'warning' \| 'error'` | `'brand'` | Fill colour |
| `size` | `'thin' \| 'default' \| 'thick'` | `'default'` | Track height |
| `indeterminate` | `boolean` | `false` | Animated indeterminate mode |
| `label` | `string` | -- | Visible label text |
| `showValue` | `boolean` | `false` | Shows percentage text |

## Code example

### React

```tsx
import { ProgressBar } from '@thepace/lexicon/components';

<ProgressBar value={72} label="Uploading files" showValue />
<ProgressBar variant="success" value={100} />
<ProgressBar indeterminate />
```

### Vanilla HTML

```html
<div class="lex-progress">
  <div class="lex-progress__row">
    <span class="lex-progress__title">Uploading</span>
    <span class="lex-progress__value">72%</span>
  </div>
  <div class="lex-progress__track lex-progress__track--default"
       role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
    <div class="lex-progress__fill lex-progress__fill--brand" style="width: 72%;"></div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-progress` | Container |
| `.lex-progress__track` | Background track |
| `.lex-progress__track--thin` | 4 px height |
| `.lex-progress__track--default` | 8 px height |
| `.lex-progress__track--thick` | 12 px height |
| `.lex-progress__fill` | Filled portion |
| `.lex-progress__fill--brand` | Brand colour fill |
| `.lex-progress__fill--success` | Green fill |
| `.lex-progress__fill--warning` | Amber fill |
| `.lex-progress__fill--error` | Red fill |
| `.lex-progress__fill--indeterminate` | Animated fill |

## Accessibility

- Use `role="progressbar"` on the track element.
- Set `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
- For indeterminate mode, omit `aria-valuenow`.
- Provide an `aria-label` describing the operation.

## Guidelines

::: tip Do
- Show the percentage value for determinate progress.
- Use the appropriate colour variant (error when storage is critical, etc.).
:::

::: danger Don't
- Don't use a progress bar for instantaneous operations.
- Don't show a progress bar stuck at 0% or 99% for extended periods.
:::
