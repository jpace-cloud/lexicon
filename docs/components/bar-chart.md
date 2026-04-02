# Bar Chart

Vertical bar chart for comparing quantities across categories. Supports single, grouped, and stacked variants.

## Preview

### Single series

<div class="component-preview component-preview--col">
  <div class="lex-chart" role="img" aria-label="Monthly sales bar chart">
    <div class="lex-chart__plot" style="height: 180px; position: relative;">
      <div class="lex-chart__grid" style="pointer-events: none;">
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
      </div>
      <div class="lex-chart__y-axis" style="left: -48px;">
        <span class="lex-chart__y-label">40</span>
        <span class="lex-chart__y-label">30</span>
        <span class="lex-chart__y-label">20</span>
        <span class="lex-chart__y-label">10</span>
      </div>
      <div class="lex-bar-chart__bars">
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 45%;"></div></div>
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 65%;"></div></div>
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 80%;"></div></div>
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 55%;"></div></div>
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 90%;"></div></div>
        <div class="lex-bar-chart__group"><div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 70%;"></div></div>
      </div>
    </div>
    <div class="lex-chart__x-axis" style="margin-left: 48px;">
      <span class="lex-chart__x-label">Jan</span>
      <span class="lex-chart__x-label">Feb</span>
      <span class="lex-chart__x-label">Mar</span>
      <span class="lex-chart__x-label">Apr</span>
      <span class="lex-chart__x-label">May</span>
      <span class="lex-chart__x-label">Jun</span>
    </div>
  </div>
</div>

### Grouped (2 series)

<div class="component-preview component-preview--col">
  <div class="lex-chart" role="img" aria-label="Grouped bar chart comparing two metrics">
    <div class="lex-chart__plot" style="height: 180px; position: relative;">
      <div class="lex-chart__grid" style="pointer-events: none;">
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
      </div>
      <div class="lex-bar-chart__bars">
        <div class="lex-bar-chart__group">
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 50%;"></div>
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s2" style="height: 35%;"></div>
        </div>
        <div class="lex-bar-chart__group">
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 70%;"></div>
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s2" style="height: 55%;"></div>
        </div>
        <div class="lex-bar-chart__group">
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 85%;"></div>
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s2" style="height: 60%;"></div>
        </div>
        <div class="lex-bar-chart__group">
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 60%;"></div>
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s2" style="height: 45%;"></div>
        </div>
        <div class="lex-bar-chart__group">
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s1" style="height: 90%;"></div>
          <div class="lex-bar-chart__bar lex-bar-chart__bar--s2" style="height: 70%;"></div>
        </div>
      </div>
    </div>
    <div class="lex-chart__x-axis" style="margin-left: 48px;">
      <span class="lex-chart__x-label">Q1</span>
      <span class="lex-chart__x-label">Q2</span>
      <span class="lex-chart__x-label">Q3</span>
      <span class="lex-chart__x-label">Q4</span>
      <span class="lex-chart__x-label">Q5</span>
    </div>
    <div style="margin-top: 12px; margin-left: 48px;">
      <div class="lex-legend">
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Revenue</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Target</span>
      </div>
    </div>
  </div>
</div>

### Stacked

<div class="component-preview component-preview--col">
  <div class="lex-chart" role="img" aria-label="Stacked bar chart showing composition">
    <div class="lex-chart__plot" style="height: 180px; position: relative;">
      <div class="lex-chart__grid" style="pointer-events: none;">
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
        <div class="lex-chart__grid-line"></div>
      </div>
      <div class="lex-bar-chart__bars">
        <div class="lex-bar-chart__stack" style="height: 100%;">
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s1" style="height: 40%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s2" style="height: 35%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s3" style="height: 25%;"></div>
        </div>
        <div class="lex-bar-chart__stack" style="height: 85%;">
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s1" style="height: 45%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s2" style="height: 30%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s3" style="height: 25%;"></div>
        </div>
        <div class="lex-bar-chart__stack" style="height: 90%;">
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s1" style="height: 50%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s2" style="height: 25%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s3" style="height: 25%;"></div>
        </div>
        <div class="lex-bar-chart__stack" style="height: 75%;">
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s1" style="height: 35%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s2" style="height: 40%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s3" style="height: 25%;"></div>
        </div>
        <div class="lex-bar-chart__stack" style="height: 95%;">
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s1" style="height: 45%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s2" style="height: 30%;"></div>
          <div class="lex-bar-chart__segment lex-bar-chart__segment--s3" style="height: 25%;"></div>
        </div>
      </div>
    </div>
    <div class="lex-chart__x-axis" style="margin-left: 48px;">
      <span class="lex-chart__x-label">Mon</span>
      <span class="lex-chart__x-label">Tue</span>
      <span class="lex-chart__x-label">Wed</span>
      <span class="lex-chart__x-label">Thu</span>
      <span class="lex-chart__x-label">Fri</span>
    </div>
    <div style="margin-top: 12px; margin-left: 48px;">
      <div class="lex-legend">
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s1"></span> Desktop</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s2"></span> Mobile</span>
        <span class="lex-legend__item"><span class="lex-legend__dot lex-legend__dot--s3"></span> Tablet</span>
      </div>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `{ label: string; values: number[] }[]` | -- | Category data points |
| `series` | `{ name: string; color?: string }[]` | -- | Series configuration |
| `variant` | `'single' \| 'grouped' \| 'stacked'` | `'single'` | Bar layout mode |
| `showGrid` | `boolean` | `true` | Show horizontal grid lines |
| `height` | `number` | `200` | Chart height in px |

## Code example

### React

```tsx
import { BarChart } from '@thepace/lexicon/components';

<BarChart
  variant="grouped"
  data={[
    { label: 'Q1', values: [24, 18] },
    { label: 'Q2', values: [32, 26] },
    { label: 'Q3', values: [38, 30] },
    { label: 'Q4', values: [42, 35] },
  ]}
  series={[
    { name: 'Revenue' },
    { name: 'Target' },
  ]}
/>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-bar-chart__bars` | Bar container (flex row) |
| `.lex-bar-chart__group` | Grouped bars for one category |
| `.lex-bar-chart__bar` | Individual bar |
| `.lex-bar-chart__bar--s1` through `--s5` | Series colour |
| `.lex-bar-chart__stack` | Stacked bar container |
| `.lex-bar-chart__segment` | Stacked bar segment |

## Accessibility

- Use `role="img"` with `aria-label` describing the chart.
- Provide a hidden data table for screen readers.
- Bars enlarge slightly or show a tooltip on hover for keyboard/mouse interaction.
- Use patterns or textures alongside colour for colour-blind users.

## Guidelines

::: tip Do
- Use grouped bars for direct comparison between series.
- Use stacked bars to show composition of a total.
- Label the Y-axis to give values context.
:::

::: danger Don't
- Don't use more than 3 series in grouped mode — bars become too narrow.
- Don't use 3D bar effects.
- Don't start the Y-axis at a non-zero value without clearly indicating it.
:::
