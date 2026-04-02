# Line Chart

A multi-series line chart for displaying trends over time. Includes axes, grid lines, data point dots, and hover tooltips.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-chart" role="img" aria-label="Monthly revenue line chart showing three data series">
    <div class="lex-chart__plot" style="height: 200px; position: relative;">
      <div class="lex-chart__grid" style="pointer-events: none;">
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
      </div>
      <div class="lex-chart__y-axis" style="left: -48px;">
        <span class="lex-chart__y-label">50</span>
        <span class="lex-chart__y-label">40</span>
        <span class="lex-chart__y-label">30</span>
        <span class="lex-chart__y-label">20</span>
        <span class="lex-chart__y-label">10</span>
      </div>
      <svg class="lex-line-chart__svg" viewBox="0 0 500 180" preserveAspectRatio="none">
        <polyline class="lex-line-chart__line lex-line-chart__line--s1" points="0,150 100,120 200,80 300,60 400,40 500,20"/>
        <polyline class="lex-line-chart__line lex-line-chart__line--s2" points="0,160 100,140 200,130 300,100 400,90 500,70"/>
        <polyline class="lex-line-chart__line lex-line-chart__line--s3" points="0,170 100,165 200,150 300,145 400,130 500,120"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="0" cy="150"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="100" cy="120"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="200" cy="80"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="300" cy="60"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="400" cy="40"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s1" cx="500" cy="20"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="0" cy="160"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="100" cy="140"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="200" cy="130"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="300" cy="100"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="400" cy="90"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s2" cx="500" cy="70"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="0" cy="170"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="100" cy="165"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="200" cy="150"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="300" cy="145"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="400" cy="130"/>
        <circle class="lex-line-chart__dot lex-line-chart__dot--s3" cx="500" cy="120"/>
      </svg>
    </div>
    <div class="lex-chart__x-axis" style="margin-left: 48px;">
      <span class="lex-chart__x-label">Jan</span>
      <span class="lex-chart__x-label">Feb</span>
      <span class="lex-chart__x-label">Mar</span>
      <span class="lex-chart__x-label">Apr</span>
      <span class="lex-chart__x-label">May</span>
      <span class="lex-chart__x-label">Jun</span>
    </div>
    <div style="margin-top: 12px; margin-left: 48px;">
      <div class="lex-legend">
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Revenue</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Expenses</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Profit</span>
      </div>
    </div>
  </div>
</div>

### With tooltip

<div class="component-preview component-preview--col">
  <div style="position: relative; display: inline-block;">
    <div class="lex-chart-tooltip" style="position: relative;">
      <div class="lex-chart-tooltip__title">March 2026</div>
      <div class="lex-chart-tooltip__row">
        <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-1);"></span>
        <span class="lex-chart-tooltip__label">Revenue</span>
        <span class="lex-chart-tooltip__value">$38.2K</span>
      </div>
      <div class="lex-chart-tooltip__row">
        <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-2);"></span>
        <span class="lex-chart-tooltip__label">Expenses</span>
        <span class="lex-chart-tooltip__value">$24.1K</span>
      </div>
      <div class="lex-chart-tooltip__row">
        <span class="lex-chart-tooltip__dot" style="background: var(--chart-series-3);"></span>
        <span class="lex-chart-tooltip__label">Profit</span>
        <span class="lex-chart-tooltip__value">$14.1K</span>
      </div>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `{ label: string; values: number[] }[]` | -- | X-axis data points with values per series |
| `series` | `{ name: string; color?: string }[]` | -- | Series configuration |
| `showGrid` | `boolean` | `true` | Show horizontal grid lines |
| `showDots` | `boolean` | `true` | Show data point markers |
| `showTooltip` | `boolean` | `true` | Show hover tooltip |
| `yAxisLabel` | `string` | -- | Y-axis title |
| `height` | `number` | `200` | Chart height in px |

## Code example

### React

```tsx
import { LineChart } from '@thepace/lexicon/components';

<LineChart
  data={[
    { label: 'Jan', values: [12, 8, 4] },
    { label: 'Feb', values: [18, 14, 6] },
    { label: 'Mar', values: [32, 24, 14] },
    { label: 'Apr', values: [38, 28, 16] },
    { label: 'May', values: [42, 32, 18] },
    { label: 'Jun', values: [48, 36, 22] },
  ]}
  series={[
    { name: 'Revenue' },
    { name: 'Expenses' },
    { name: 'Profit' },
  ]}
/>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-chart` | Shared chart container |
| `.lex-chart__plot` | Plot area |
| `.lex-chart__grid` | Grid line container |
| `.lex-chart__grid-line` | Individual grid line |
| `.lex-chart__x-axis` | X-axis labels |
| `.lex-chart__y-axis` | Y-axis labels |
| `.lex-line-chart__svg` | SVG canvas |
| `.lex-line-chart__line` | Data series line |
| `.lex-line-chart__dot` | Data point marker |

## Accessibility

- Use `role="img"` with `aria-label` describing the chart's purpose.
- Provide a tabular data alternative (hidden table or expandable section) for screen readers.
- Use distinct line styles (solid, dashed, dotted) in addition to colour to support colour-blind users.
- Data point dots enlarge on hover to improve target size.

## Guidelines

::: tip Do
- Limit to 3–4 series for readability.
- Label both axes clearly.
- Use a legend when showing multiple series.
:::

::: danger Don't
- Don't use more than 5 series — the chart becomes unreadable.
- Don't use 3D line effects.
- Don't remove axis labels or grid lines on data-heavy charts.
:::
