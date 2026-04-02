# Chart Tooltip

A floating card displayed on hover over chart data points. Shows the category label, series colour dot, name, and value for each series at that point.

## Preview

<div class="component-preview">
  <div class="lex-chart-tooltip" style="position: relative;">
    <div class="lex-chart-tooltip__title">March 2026</div>
    <div class="lex-chart-tooltip__row">
      <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-1);"></span>
      <span class="lex-chart-tooltip__label">Revenue</span>
      <span class="lex-chart-tooltip__value">$38,200</span>
    </div>
    <div class="lex-chart-tooltip__row">
      <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-2);"></span>
      <span class="lex-chart-tooltip__label">Expenses</span>
      <span class="lex-chart-tooltip__value">$24,100</span>
    </div>
    <div class="lex-chart-tooltip__row">
      <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-3);"></span>
      <span class="lex-chart-tooltip__label">Profit</span>
      <span class="lex-chart-tooltip__value">$14,100</span>
    </div>
  </div>
</div>

### Single series

<div class="component-preview">
  <div class="lex-chart-tooltip" style="position: relative;">
    <div class="lex-chart-tooltip__title">February</div>
    <div class="lex-chart-tooltip__row">
      <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-1);"></span>
      <span class="lex-chart-tooltip__label">Sales</span>
      <span class="lex-chart-tooltip__value">1,248</span>
    </div>
  </div>
</div>

## Anatomy

- **Title** -- typically the X-axis category label (date, month, category name).
- **Rows** -- one per visible series, each with a colour dot, label, and value.
- **Surface** -- themed background with border and shadow for visibility.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | -- | Tooltip header (category label) |
| `items` | `{ color: string; label: string; value: string \| number }[]` | -- | Series data rows |

## Code example

### React

```tsx
import { ChartTooltip } from '@thepace/lexicon/components';

<ChartTooltip
  title="March 2026"
  items={[
    { color: 'var(--chart-series-1)', label: 'Revenue', value: '$38,200' },
    { color: 'var(--chart-series-2)', label: 'Expenses', value: '$24,100' },
    { color: 'var(--chart-series-3)', label: 'Profit', value: '$14,100' },
  ]}
/>
```

### Vanilla HTML

```html
<div class="lex-chart-tooltip">
  <div class="lex-chart-tooltip__title">March 2026</div>
  <div class="lex-chart-tooltip__row">
    <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-1);"></span>
    <span class="lex-chart-tooltip__label">Revenue</span>
    <span class="lex-chart-tooltip__value">$38,200</span>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-chart-tooltip` | Tooltip container |
| `.lex-chart-tooltip__title` | Header text |
| `.lex-chart-tooltip__row` | Series data row |
| `.lex-chart-tooltip__dot` | Colour indicator |
| `.lex-chart-tooltip__label` | Series name |
| `.lex-chart-tooltip__value` | Data value |

## Accessibility

- Tooltips are supplementary — chart data should also be accessible via a hidden data table.
- Tooltip appears on hover and focus for keyboard users.
- Uses `pointer-events: none` to prevent the tooltip from blocking interaction with chart elements.

## Guidelines

::: tip Do
- Show all visible series in the tooltip at the hovered X-axis position.
- Use tabular-nums font variant for value alignment.
- Ensure the tooltip surface has sufficient contrast in both themes (border + shadow).
:::

::: danger Don't
- Don't show tooltips for more than 5 series — it becomes overwhelming.
- Don't obscure the data point being inspected — position the tooltip offset from the cursor.
:::
