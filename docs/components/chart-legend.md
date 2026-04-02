# Legend

A chart legend mapping colour indicators to series names. Supports horizontal and vertical layouts with optional toggle interaction.

## Preview

### Horizontal

<div class="component-preview">
  <div class="lex-legend">
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Revenue</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Expenses</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Profit</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s4"></span> Forecast</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s5"></span> Budget</span>
  </div>
</div>

### Vertical

<div class="component-preview">
  <div class="lex-legend lex-legend--vertical">
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Direct (40%)</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Organic (25%)</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Referral (15%)</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s4"></span> Social (10%)</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s5"></span> Other (10%)</span>
  </div>
</div>

### With disabled (toggled off) items

<div class="component-preview">
  <div class="lex-legend">
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Revenue</span>
    <span class="lex-legend__item lex-legend__item--disabled"><span class="lex-legend__dot lex-legend__dot--s2"></span> Expenses</span>
    <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Profit</span>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ name: string; color?: string }[]` | -- | Legend entries |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `interactive` | `boolean` | `false` | Allow click to toggle series visibility |
| `disabled` | `string[]` | `[]` | List of disabled series names |
| `onToggle` | `(name: string) => void` | -- | Toggle handler |

## Code example

### React

```tsx
import { Legend } from '@thepace/lexicon/components';

<Legend
  direction="horizontal"
  interactive
  items={[
    { name: 'Revenue' },
    { name: 'Expenses' },
    { name: 'Profit' },
  ]}
  disabled={['Expenses']}
  onToggle={(name) => toggleSeries(name)}
/>
```

### Vanilla HTML

```html
<div class="lex-legend">
  <span class="lex-legend__item">
    <span class="lex-legend__dot lex-legend__dot--s1"></span> Revenue
  </span>
  <span class="lex-legend__item lex-legend__item--disabled">
    <span class="lex-legend__dot lex-legend__dot--s2"></span> Expenses
  </span>
  <span class="lex-legend__item">
    <span class="lex-legend__dot lex-legend__dot--s3"></span> Profit
  </span>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-legend` | Flex container |
| `.lex-legend--vertical` | Vertical layout |
| `.lex-legend__item` | Legend entry |
| `.lex-legend__item--disabled` | Toggled-off state |
| `.lex-legend__dot` | Colour indicator circle |
| `.lex-legend__dot--s1` through `--s5` | Series colours |

## Accessibility

- Use `role="group"` with `aria-label="Chart legend"`.
- Interactive items should use `role="switch"` with `aria-checked`.
- Ensure colour dots have sufficient size (10 px minimum) and contrast.

## Guidelines

::: tip Do
- Place the legend below or beside the chart.
- Use the vertical layout for pie/donut charts.
- Make the legend interactive when charts have many overlapping series.
:::

::: danger Don't
- Don't place the legend far from the chart — keep proximity tight.
- Don't rely on colour alone — consider adding pattern icons for colour-blind users.
:::
