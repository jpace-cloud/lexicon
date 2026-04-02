# Slider

A range input for selecting a numeric value within a defined range. Displays a track, filled portion, and draggable thumb.

## Preview

<div class="component-preview component-preview--col" style="gap: 20px;">
  <div class="lex-slider">
    <div class="lex-slider__row">
      <label class="lex-slider__label">Volume</label>
      <span class="lex-slider__value">65</span>
    </div>
    <input type="range" class="lex-slider__input" min="0" max="100" value="65" />
  </div>
  <div class="lex-slider">
    <div class="lex-slider__row">
      <label class="lex-slider__label">Brightness</label>
      <span class="lex-slider__value">30</span>
    </div>
    <input type="range" class="lex-slider__input" min="0" max="100" value="30" />
  </div>
</div>

### States

<div class="component-preview component-preview--col" style="gap: 20px;">
  <div class="lex-slider">
    <label class="lex-slider__label">Default</label>
    <input type="range" class="lex-slider__input" min="0" max="100" value="50" />
  </div>
  <div class="lex-slider">
    <label class="lex-slider__label">Disabled</label>
    <input type="range" class="lex-slider__input" min="0" max="100" value="50" disabled />
  </div>
</div>

## Features

- Native `<input type="range">` for maximum compatibility.
- Brand-purple thumb with shadow for visibility.
- Optional value label displaying the current number.
- Track uses border token colour for contrast in both themes.

## States

| State | Appearance |
| --- | --- |
| Default | Track with brand-purple thumb |
| Hover | Thumb scales up slightly |
| Active/Dragging | Thumb depressed |
| Focus | Brand-purple ring on thumb |
| Disabled | Reduced opacity, no interaction |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `value` | `number` | -- | Current value |
| `onChange` | `(value: number) => void` | -- | Change handler |
| `label` | `string` | -- | Visible label |
| `showValue` | `boolean` | `false` | Displays current value |
| `disabled` | `boolean` | `false` | Disables the slider |

## Code example

### React

```tsx
import { Slider } from '@thepace/lexicon/components';

<Slider label="Volume" min={0} max={100} value={volume}
        onChange={setVolume} showValue />
```

### Vanilla HTML

```html
<div class="lex-slider">
  <div class="lex-slider__row">
    <label class="lex-slider__label">Volume</label>
    <span class="lex-slider__value">65</span>
  </div>
  <input type="range" class="lex-slider__input"
         min="0" max="100" value="65" />
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-slider` | Container |
| `.lex-slider__input` | The range input |
| `.lex-slider__label` | Label text |
| `.lex-slider__value` | Current value display |
| `.lex-slider__row` | Label + value row |

## Accessibility

- Uses native `<input type="range">` for keyboard and screen reader support.
- Arrow keys adjust the value by step increment.
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow` are natively handled.
- Label connected via `htmlFor`/`id`.

## Guidelines

::: tip Do
- Show the current value alongside the slider for precision.
- Use appropriate `step` values (e.g. 5 or 10 for coarse adjustments).
:::

::: danger Don't
- Don't use for precise numeric entry — use Number Input instead.
- Don't use for values below 0 or above 100 without clear min/max labels.
:::
