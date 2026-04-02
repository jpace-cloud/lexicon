# Stack

A layout component for consistent spacing between child elements. Available in vertical and horizontal orientations.

## Preview

### Vertical stack

<div class="component-preview component-preview--col">
  <div class="lex-stack-demo lex-stack-demo--vertical" style="gap: 12px;">
    <div class="lex-stack-demo__item">Item 1</div>
    <div class="lex-stack-demo__item">Item 2</div>
    <div class="lex-stack-demo__item">Item 3</div>
  </div>
</div>

### Horizontal stack

<div class="component-preview">
  <div class="lex-stack-demo lex-stack-demo--horizontal" style="gap: 12px;">
    <div class="lex-stack-demo__item">Tag A</div>
    <div class="lex-stack-demo__item">Tag B</div>
    <div class="lex-stack-demo__item">Tag C</div>
    <div class="lex-stack-demo__item">Tag D</div>
    <div class="lex-stack-demo__item">Tag E</div>
  </div>
</div>

### With different spacing

<div class="component-preview component-preview--col" style="gap: 24px;">
  <div>
    <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0 0 8px;">gap: --space-1 (4px)</p>
    <div class="lex-stack-demo lex-stack-demo--horizontal" style="gap: 4px;">
      <div class="lex-stack-demo__item">A</div>
      <div class="lex-stack-demo__item">B</div>
      <div class="lex-stack-demo__item">C</div>
    </div>
  </div>
  <div>
    <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0 0 8px;">gap: --space-4 (16px)</p>
    <div class="lex-stack-demo lex-stack-demo--horizontal" style="gap: 16px;">
      <div class="lex-stack-demo__item">A</div>
      <div class="lex-stack-demo__item">B</div>
      <div class="lex-stack-demo__item">C</div>
    </div>
  </div>
  <div>
    <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0 0 8px;">gap: --space-8 (32px)</p>
    <div class="lex-stack-demo lex-stack-demo--horizontal" style="gap: 32px;">
      <div class="lex-stack-demo__item">A</div>
      <div class="lex-stack-demo__item">B</div>
      <div class="lex-stack-demo__item">C</div>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Stack direction |
| `gap` | `string` | `--space-4` | Spacing between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Cross-axis alignment |
| `wrap` | `boolean` | `false` | Allow items to wrap |
| `children` | `React.ReactNode` | -- | Stack items |

## Code example

### React

```tsx
import { Stack, Button } from '@thepace/lexicon/components';

<Stack direction="horizontal" gap="var(--space-3)">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</Stack>

<Stack gap="var(--space-6)">
  <Card>Section 1</Card>
  <Card>Section 2</Card>
  <Card>Section 3</Card>
</Stack>
```

### CSS utility

```css
.my-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-stack` | Flex container |
| `.lex-stack--vertical` | Column direction |
| `.lex-stack--horizontal` | Row direction |
| `.lex-stack--wrap` | Allow wrapping |

## Guidelines

::: tip Do
- Use Stack for consistent spacing between sibling elements.
- Use spacing tokens for the gap value.
- Combine with Grid for complex page layouts.
:::

::: danger Don't
- Don't set margins on Stack children — use the gap prop instead.
- Don't nest Stacks excessively — a single Grid often works better.
:::
