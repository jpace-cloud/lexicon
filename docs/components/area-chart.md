# Area Chart

A line chart with a filled gradient area beneath each series. Useful for showing volume and trends over time.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-chart" role="img" aria-label="Area chart showing traffic over time">
    <div class="lex-chart__plot" style="height: 200px; position: relative;">
      <div class="lex-chart__grid" style="pointer-events: none;">
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
      </div>
      <div class="lex-chart__y-axis" style="left: -48px;">
        <span class="lex-chart__y-label">5K</span>
        <span class="lex-chart__y-label">4K</span>
        <span class="lex-chart__y-label">3K</span>
        <span class="lex-chart__y-label">2K</span>
        <span class="lex-chart__y-label">1K</span>
      </div>
      <svg class="lex-area-chart__svg" viewBox="0 0 500 180" preserveAspectRatio="none">
        <polygon class="lex-area-chart__fill lex-area-chart__fill--s1" points="0,180 0,140 100,100 200,60 300,40 400,30 500,50 500,180"/>
        <polyline class="lex-area-chart__line lex-area-chart__line--s1" points="0,140 100,100 200,60 300,40 400,30 500,50"/>
        <polygon class="lex-area-chart__fill lex-area-chart__fill--s2" points="0,180 0,165 100,150 200,130 300,120 400,110 500,125 500,180"/>
        <polyline class="lex-area-chart__line lex-area-chart__line--s2" points="0,165 100,150 200,130 300,120 400,110 500,125"/>
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
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Organic</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Paid</span>
      </div>
    </div>
  </div>
</div>

## Features

- **Gradient fill** -- 18% opacity area fill from series colour to transparent.
- **Multi-series** -- layer multiple areas for comparison (non-stacked by default).
- **Responsive** -- SVG scales to container width via `preserveAspectRatio`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `{ label: string; values: number[] }[]` | -- | Data points per category |
| `series` | `{ name: string; color?: string }[]` | -- | Series configuration |
| `stacked` | `boolean` | `false` | Stack areas on top of each other |
| `showGrid` | `boolean` | `true` | Show horizontal grid lines |
| `height` | `number` | `200` | Chart height in px |

## Code example

### React

```tsx
import { AreaChart } from '@thepace/lexicon/components';

<AreaChart
  data={[
    { label: 'Jan', values: [1200, 450] },
    { label: 'Feb', values: [2400, 900] },
    { label: 'Mar', values: [3600, 1500] },
    { label: 'Apr', values: [4200, 1800] },
    { label: 'May', values: [4500, 2100] },
    { label: 'Jun', values: [3900, 1650] },
  ]}
  series={[
    { name: 'Organic' },
    { name: 'Paid' },
  ]}
/>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-area-chart__svg` | SVG canvas |
| `.lex-area-chart__fill` | Filled area polygon |
| `.lex-area-chart__fill--s1` through `--s2` | Series fill colour |
| `.lex-area-chart__line` | Border line on top of area |
| `.lex-area-chart__line--s1` through `--s2` | Series stroke colour |

## Accessibility

- Use `role="img"` with `aria-label` describing the chart data.
- Provide a hidden data table for screen readers.
- Area fills use sufficient opacity (18%) to remain visible in both themes.

## Guidelines

::: tip Do
- Use for time-series data where volume matters (traffic, revenue).
- Limit to 2–3 series to avoid overlap confusion.
- Use the stacked variant to show part-to-whole composition.
:::

::: danger Don't
- Don't use with many overlapping series — lines become obscured.
- Don't use area charts for categorical comparisons — use a Bar Chart.
:::
