# Grid

A responsive column grid system for page layouts. Based on a 12-column grid that collapses at breakpoints.

## Preview

### 12 columns

<div class="component-preview component-preview--col">
  <div class="lex-grid-demo lex-grid-demo--12">
    <div class="lex-grid-demo__col">1</div>
    <div class="lex-grid-demo__col">2</div>
    <div class="lex-grid-demo__col">3</div>
    <div class="lex-grid-demo__col">4</div>
    <div class="lex-grid-demo__col">5</div>
    <div class="lex-grid-demo__col">6</div>
    <div class="lex-grid-demo__col">7</div>
    <div class="lex-grid-demo__col">8</div>
    <div class="lex-grid-demo__col">9</div>
    <div class="lex-grid-demo__col">10</div>
    <div class="lex-grid-demo__col">11</div>
    <div class="lex-grid-demo__col">12</div>
  </div>
</div>

### Common layouts

<div class="component-preview component-preview--col" style="gap: 12px;">
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">3-column (4+4+4)</p>
  <div class="lex-grid-demo lex-grid-demo--3">
    <div class="lex-grid-demo__col">col 1</div>
    <div class="lex-grid-demo__col">col 2</div>
    <div class="lex-grid-demo__col">col 3</div>
  </div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">2-column (6+6)</p>
  <div class="lex-grid-demo" style="grid-template-columns: 1fr 1fr; gap: 8px;">
    <div class="lex-grid-demo__col">col 1</div>
    <div class="lex-grid-demo__col">col 2</div>
  </div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">Sidebar + content (3+9)</p>
  <div class="lex-grid-demo" style="grid-template-columns: 1fr 3fr; gap: 8px;">
    <div class="lex-grid-demo__col">sidebar</div>
    <div class="lex-grid-demo__col">main content</div>
  </div>
</div>

## Breakpoints

| Breakpoint | Name | Columns | Gutter |
| --- | --- | --- | --- |
| `≥ 1280px` | `xl` | 12 | 24 px |
| `≥ 1024px` | `lg` | 12 | 24 px |
| `≥ 768px` | `md` | 8 | 16 px |
| `≥ 480px` | `sm` | 4 | 16 px |
| `< 480px` | `xs` | 4 | 12 px |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `number` | `12` | Number of columns |
| `gap` | `string` | `--space-6` | Gutter spacing |
| `children` | `React.ReactNode` | -- | Grid items |

### Grid.Col

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `span` | `number` | `1` | Columns to span |
| `sm` | `number` | -- | Span at sm breakpoint |
| `md` | `number` | -- | Span at md breakpoint |
| `lg` | `number` | -- | Span at lg breakpoint |

## Code example

### React

```tsx
import { Grid } from '@thepace/lexicon/components';

<Grid columns={12} gap="var(--space-6)">
  <Grid.Col span={3}>Sidebar</Grid.Col>
  <Grid.Col span={9}>Main content</Grid.Col>
</Grid>
```

### CSS utility

```css
.my-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-grid` | Grid container |
| `.lex-grid--12` | 12-column grid |
| `.lex-grid--8` | 8-column grid |
| `.lex-grid--4` | 4-column grid |
| `.lex-grid__col` | Grid column item |

## Guidelines

::: tip Do
- Use the 12-column grid for complex dashboard layouts.
- Collapse to fewer columns at smaller breakpoints.
- Use consistent gutter spacing from the spacing scale.
:::

::: danger Don't
- Don't nest grids more than 2 levels deep.
- Don't mix grid and flex layout within the same container.
:::
