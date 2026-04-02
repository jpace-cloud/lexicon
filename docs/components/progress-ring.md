# Progress Ring

A circular progress indicator with an optional percentage label in the centre. Use for compact progress displays.

## Preview

<div class="component-preview" style="gap: 24px;">
  <div class="lex-progress-ring" style="width: 64px; height: 64px;">
    <svg class="lex-progress-ring__svg" width="64" height="64" viewBox="0 0 64 64">
      <circle class="lex-progress-ring__track" cx="32" cy="32" r="28" stroke-width="6"/>
      <circle class="lex-progress-ring__fill" cx="32" cy="32" r="28" stroke-width="6" stroke-dasharray="175.9" stroke-dashoffset="52.8"/>
    </svg>
    <span class="lex-progress-ring__label">70%</span>
  </div>
  <div class="lex-progress-ring" style="width: 64px; height: 64px;">
    <svg class="lex-progress-ring__svg" width="64" height="64" viewBox="0 0 64 64">
      <circle class="lex-progress-ring__track" cx="32" cy="32" r="28" stroke-width="6"/>
      <circle class="lex-progress-ring__fill" cx="32" cy="32" r="28" stroke-width="6" stroke-dasharray="175.9" stroke-dashoffset="131.9"/>
    </svg>
    <span class="lex-progress-ring__label">25%</span>
  </div>
  <div class="lex-progress-ring" style="width: 48px; height: 48px;">
    <svg class="lex-progress-ring__svg" width="48" height="48" viewBox="0 0 48 48">
      <circle class="lex-progress-ring__track" cx="24" cy="24" r="20" stroke-width="5"/>
      <circle class="lex-progress-ring__fill" cx="24" cy="24" r="20" stroke-width="5" stroke-dasharray="125.7" stroke-dashoffset="0"/>
    </svg>
    <span class="lex-progress-ring__label" style="font-size: 11px;">100%</span>
  </div>
</div>

### Indeterminate

<div class="component-preview" style="gap: 24px;">
  <div class="lex-progress-ring lex-progress-ring--indeterminate" style="width: 48px; height: 48px;">
    <svg class="lex-progress-ring__svg" width="48" height="48" viewBox="0 0 48 48">
      <circle class="lex-progress-ring__track" cx="24" cy="24" r="20" stroke-width="5"/>
      <circle class="lex-progress-ring__fill" cx="24" cy="24" r="20" stroke-width="5" stroke-dasharray="125.7" stroke-dashoffset="94.3"/>
    </svg>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | -- | Progress percentage (0–100) |
| `size` | `number` | `64` | Diameter in pixels |
| `strokeWidth` | `number` | `6` | Ring thickness |
| `indeterminate` | `boolean` | `false` | Spinning mode |
| `showValue` | `boolean` | `true` | Shows percentage label |

## Code example

### React

```tsx
import { ProgressRing } from '@thepace/lexicon/components';

<ProgressRing value={70} />
<ProgressRing value={100} size={48} />
<ProgressRing indeterminate size={48} />
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-progress-ring` | Container |
| `.lex-progress-ring__svg` | SVG element (rotated -90deg) |
| `.lex-progress-ring__track` | Background circle |
| `.lex-progress-ring__fill` | Progress arc |
| `.lex-progress-ring__label` | Centre percentage text |
| `.lex-progress-ring--indeterminate` | Spinning animation |

## Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` on the SVG.
- For indeterminate mode, omit `aria-valuenow` and set `aria-label="Loading"`.

## Guidelines

::: tip Do
- Use for compact spaces like cards, list items, or dashboards.
- Show the percentage label for clarity.
:::

::: danger Don't
- Don't use at sizes smaller than 32 px — the label becomes unreadable.
- Don't use for long-running operations — a progress bar with text is more informative.
:::
