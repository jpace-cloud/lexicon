# Sparkline

A compact, inline mini chart with no axes or labels. Used within table cells, stat blocks, or alongside text to show trends at a glance.

## Preview

### Line sparkline

<div class="component-preview">
  <span style="font-size: 14px; color: var(--vp-c-text-2); margin-right: 8px;">Revenue</span>
  <span class="lex-sparkline">
    <svg class="lex-sparkline__svg" width="80" height="24" viewBox="0 0 80 24">
      <polyline class="lex-sparkline__line" points="0,20 13,16 26,12 40,14 53,8 66,4 80,6"/>
    </svg>
  </span>
</div>

### Area sparkline

<div class="component-preview">
  <span style="font-size: 14px; color: var(--vp-c-text-2); margin-right: 8px;">Traffic</span>
  <span class="lex-sparkline">
    <svg class="lex-sparkline__svg" width="80" height="24" viewBox="0 0 80 24">
      <polygon class="lex-sparkline__area" points="0,24 0,18 13,14 26,10 40,12 53,6 66,8 80,4 80,24"/>
      <polyline class="lex-sparkline__line" points="0,18 13,14 26,10 40,12 53,6 66,8 80,4"/>
    </svg>
  </span>
</div>

### Bar sparkline

<div class="component-preview">
  <span style="font-size: 14px; color: var(--vp-c-text-2); margin-right: 8px;">Activity</span>
  <span class="lex-sparkline" style="width: 80px; height: 24px; display: inline-flex; align-items: flex-end;">
    <span class="lex-sparkline__bars" style="width: 80px; height: 24px;">
      <span class="lex-sparkline__bar" style="height: 40%;"></span>
      <span class="lex-sparkline__bar" style="height: 65%;"></span>
      <span class="lex-sparkline__bar" style="height: 80%;"></span>
      <span class="lex-sparkline__bar" style="height: 50%;"></span>
      <span class="lex-sparkline__bar" style="height: 90%;"></span>
      <span class="lex-sparkline__bar" style="height: 70%;"></span>
      <span class="lex-sparkline__bar" style="height: 45%;"></span>
      <span class="lex-sparkline__bar" style="height: 85%;"></span>
      <span class="lex-sparkline__bar" style="height: 60%;"></span>
      <span class="lex-sparkline__bar" style="height: 75%;"></span>
    </span>
  </span>
</div>

### In a stat block

<div class="component-preview">
  <div class="lex-stat lex-stat--card" style="width: 220px;">
    <span class="lex-stat__label">Monthly Users</span>
    <div style="display: flex; align-items: flex-end; gap: 12px;">
      <span class="lex-stat__value">4,218</span>
      <span class="lex-sparkline" style="margin-bottom: 4px;">
        <svg class="lex-sparkline__svg" width="60" height="20" viewBox="0 0 60 20">
          <polygon class="lex-sparkline__area" points="0,20 0,16 10,12 20,14 30,8 40,6 50,10 60,4 60,20"/>
          <polyline class="lex-sparkline__line" points="0,16 10,12 20,14 30,8 40,6 50,10 60,4"/>
        </svg>
      </span>
    </div>
    <span class="lex-stat__trend lex-stat__trend--up">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="11,9 7,4 3,9"/></svg>
      +18.3%
    </span>
  </div>
</div>

## Variants

| Variant | Description |
| --- | --- |
| Line | Stroke-only polyline |
| Area | Filled area under the line |
| Bar | Vertical micro-bars |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `number[]` | -- | Data points |
| `variant` | `'line' \| 'area' \| 'bar'` | `'line'` | Visual style |
| `width` | `number` | `80` | Chart width in px |
| `height` | `number` | `24` | Chart height in px |
| `color` | `string` | Series 1 colour | Stroke/fill colour |

## Code example

### React

```tsx
import { Sparkline } from '@thepace/lexicon/components';

<Sparkline data={[4, 8, 12, 10, 16, 20, 18]} variant="area" />
<Sparkline data={[4, 8, 12, 10, 16, 20, 18]} variant="bar" />
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-sparkline` | Inline container |
| `.lex-sparkline__svg` | SVG canvas |
| `.lex-sparkline__line` | Line stroke |
| `.lex-sparkline__area` | Filled area polygon |
| `.lex-sparkline__bars` | Bar container |
| `.lex-sparkline__bar` | Individual micro-bar |

## Accessibility

- Use `role="img"` and `aria-label` describing the trend (e.g. "Revenue trending up over 7 days").
- Sparklines are decorative supplements — always pair with a readable value nearby.
- Ensure the stroke/fill colour has sufficient contrast against the background.

## Guidelines

::: tip Do
- Use inside table cells to add visual context to numbers.
- Pair with stat blocks to show trend direction.
- Keep sparklines small — they are glanceable, not interactive.
:::

::: danger Don't
- Don't use sparklines as standalone charts — they lack axes and labels.
- Don't add tooltips or interactivity to sparklines — use a full chart instead.
:::
