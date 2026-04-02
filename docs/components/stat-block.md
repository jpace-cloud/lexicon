# Stat Block

A prominent metric display combining a large value, label, and optional trend indicator. Use for dashboards and summary cards.

## Preview

<div class="component-preview">
  <div class="lex-stat-grid" style="width: 100%;">
    <div class="lex-stat lex-stat--card">
      <span class="lex-stat__label">Total Users</span>
      <span class="lex-stat__value">12,847</span>
      <span class="lex-stat__trend lex-stat__trend--up">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="11,9 7,4 3,9"/></svg>
        +12.5%
      </span>
    </div>
    <div class="lex-stat lex-stat--card">
      <span class="lex-stat__label">Revenue</span>
      <span class="lex-stat__value">$48.2K</span>
      <span class="lex-stat__trend lex-stat__trend--up">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="11,9 7,4 3,9"/></svg>
        +8.1%
      </span>
    </div>
    <div class="lex-stat lex-stat--card">
      <span class="lex-stat__label">Bounce Rate</span>
      <span class="lex-stat__value">24.3%</span>
      <span class="lex-stat__trend lex-stat__trend--down">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3,5 7,10 11,5"/></svg>
        -3.2%
      </span>
    </div>
  </div>
</div>

### Inline (no card)

<div class="component-preview">
  <div class="lex-stat">
    <span class="lex-stat__label">Active Sessions</span>
    <span class="lex-stat__value">1,024</span>
  </div>
</div>

## Anatomy

- **Label** -- uppercase, muted descriptor (e.g. "Total Users").
- **Value** -- large, bold metric (e.g. "12,847").
- **Trend** (optional) -- directional indicator with percentage change.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| number` | -- | The metric value |
| `label` | `string` | -- | Descriptor text |
| `trend` | `number` | -- | Percentage change (positive = up) |
| `card` | `boolean` | `false` | Wrap in a card container |

## Code example

### React

```tsx
import { StatBlock } from '@thepace/lexicon/components';

<StatBlock value="12,847" label="Total Users" trend={12.5} card />
<StatBlock value="$48.2K" label="Revenue" trend={8.1} card />
<StatBlock value="24.3%" label="Bounce Rate" trend={-3.2} card />
```

### Vanilla HTML

```html
<div class="lex-stat lex-stat--card">
  <span class="lex-stat__label">Total Users</span>
  <span class="lex-stat__value">12,847</span>
  <span class="lex-stat__trend lex-stat__trend--up">
    <!-- up arrow icon -->
    +12.5%
  </span>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-stat` | Base layout |
| `.lex-stat--card` | Card-wrapped variant |
| `.lex-stat__value` | Large metric number |
| `.lex-stat__label` | Muted descriptor |
| `.lex-stat__trend` | Trend container |
| `.lex-stat__trend--up` | Positive trend (green) |
| `.lex-stat__trend--down` | Negative trend (red) |
| `.lex-stat-grid` | Responsive grid layout |

## Accessibility

- Use `aria-label` or visible heading to give context to the stat group.
- Trend direction should be conveyed in text, not just colour (the arrow helps).
- Screen readers should read "Total Users: 12,847, up 12.5 percent".

## Guidelines

::: tip Do
- Use the card variant for dashboard KPI rows.
- Align stat blocks in a grid for scannable comparison.
- Include trend indicators when showing time-series data.
:::

::: danger Don't
- Don't show more than 4–5 stats in a single row.
- Don't use for detailed data — use a Table instead.
- Don't rely on colour alone for trend direction — always include an arrow or text.
:::
