# Pie / Donut Chart

A circular chart for showing proportional data. The donut variant includes a centre label for the total or selected value.

## Preview

### Pie chart

<div class="component-preview">
  <div class="lex-pie-chart">
    <svg class="lex-pie-chart__svg" viewBox="0 0 100 100">
      <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-1)" stroke-width="20" stroke-dasharray="75.4 175.93" stroke-dashoffset="0"/>
      <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-2)" stroke-width="20" stroke-dasharray="50.27 175.93" stroke-dashoffset="-75.4"/>
      <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-3)" stroke-width="20" stroke-dasharray="37.7 175.93" stroke-dashoffset="-125.66"/>
      <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-4)" stroke-width="20" stroke-dasharray="25.13 175.93" stroke-dashoffset="-163.36"/>
      <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-5)" stroke-width="20" stroke-dasharray="12.57 175.93" stroke-dashoffset="-188.5"/>
    </svg>
    <div class="lex-legend lex-legend--vertical">
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Direct (30%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Organic (20%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Referral (15%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s4"></span> Social (10%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s5"></span> Other (5%)</span>
    </div>
  </div>
</div>

### Donut with centre label

<div class="component-preview">
  <div class="lex-pie-chart">
    <div class="lex-pie-chart__wrapper">
      <svg class="lex-pie-chart__svg" viewBox="0 0 100 100">
        <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-1)" stroke-width="12" stroke-dasharray="100.53 175.93" stroke-dashoffset="0"/>
        <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-2)" stroke-width="12" stroke-dasharray="62.83 175.93" stroke-dashoffset="-100.53"/>
        <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-3)" stroke-width="12" stroke-dasharray="37.7 175.93" stroke-dashoffset="-163.36"/>
        <circle class="lex-pie-chart__segment" cx="50" cy="50" r="40" fill="none" stroke="var(--chart-series-5)" stroke-width="12" stroke-dasharray="25.13 175.93" stroke-dashoffset="-201.06"/>
      </svg>
      <div class="lex-pie-chart__center">
        <div class="lex-pie-chart__center-value">8,420</div>
        <div class="lex-pie-chart__center-label">Total visits</div>
      </div>
    </div>
    <div class="lex-legend lex-legend--vertical">
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Direct (40%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Search (25%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Referral (15%)</span>
      <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s5"></span> Social (10%)</span>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `{ label: string; value: number; color?: string }[]` | -- | Segment data |
| `donut` | `boolean` | `false` | Render as donut (thinner ring) |
| `centerLabel` | `string` | -- | Donut centre label |
| `centerValue` | `string \| number` | -- | Donut centre value |
| `showLegend` | `boolean` | `true` | Show legend beside chart |
| `size` | `number` | `200` | Chart diameter in px |

## Code example

### React

```tsx
import { PieChart } from '@thepace/lexicon/components';

<PieChart
  donut
  centerValue="8,420"
  centerLabel="Total visits"
  data={[
    { label: 'Direct', value: 3368 },
    { label: 'Search', value: 2105 },
    { label: 'Referral', value: 1263 },
    { label: 'Social', value: 842 },
  ]}
/>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-pie-chart` | Flex container (chart + legend) |
| `.lex-pie-chart__svg` | SVG circle canvas |
| `.lex-pie-chart__segment` | Individual arc segment |
| `.lex-pie-chart__wrapper` | Relative wrapper for centre label |
| `.lex-pie-chart__center` | Centre label container |
| `.lex-pie-chart__center-value` | Large centre number |
| `.lex-pie-chart__center-label` | Muted centre descriptor |

## Accessibility

- Use `role="img"` with `aria-label` on the SVG listing all segment names and percentages.
- Provide a data table alternative for screen readers.
- Segment hover shows tooltip with exact value.
- White gaps between segments (via stroke technique) ensure segments are visually distinct.

## Guidelines

::: tip Do
- Limit to 4–5 segments — group small values as "Other".
- Use the donut variant to display a summary metric in the centre.
- Always include a legend with percentages.
:::

::: danger Don't
- Don't use more than 6 segments — the chart becomes unreadable.
- Don't use 3D pie effects or exploded segments.
- Don't use a pie chart when exact comparison matters — use a Bar Chart instead.
:::
