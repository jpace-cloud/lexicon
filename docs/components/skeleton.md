# Skeleton Loader

Placeholder shapes that animate with a shimmer effect while content loads. Use to maintain layout structure and reduce perceived loading time.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-skeleton--row">
    <div class="lex-skeleton lex-skeleton--avatar"></div>
    <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
      <div class="lex-skeleton lex-skeleton--heading"></div>
      <div class="lex-skeleton lex-skeleton--text" style="width: 90%;"></div>
      <div class="lex-skeleton lex-skeleton--text" style="width: 75%;"></div>
    </div>
  </div>
</div>

### Card skeleton

<div class="component-preview">
  <div class="lex-card lex-card--default" style="width: 100%; max-width: 320px;">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="lex-skeleton lex-skeleton--image"></div>
      <div class="lex-skeleton lex-skeleton--heading"></div>
      <div class="lex-skeleton lex-skeleton--text" style="width: 100%;"></div>
      <div class="lex-skeleton lex-skeleton--text" style="width: 80%;"></div>
    </div>
  </div>
</div>

### Table row skeleton

<div class="component-preview component-preview--col" style="gap: 12px; width: 100%; max-width: 480px;">
  <div class="lex-skeleton--row" style="gap: 16px;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 30%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 25%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 20%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 15%;"></div>
  </div>
  <div class="lex-skeleton--row" style="gap: 16px;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 30%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 25%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 20%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 15%;"></div>
  </div>
  <div class="lex-skeleton--row" style="gap: 16px;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 30%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 25%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 20%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 15%;"></div>
  </div>
</div>

## Shapes

| Shape | CSS class | Dimensions |
| --- | --- | --- |
| Text line | `.lex-skeleton--text` | 14 px height, fluid width |
| Heading | `.lex-skeleton--heading` | 20 px height, 60% width |
| Avatar | `.lex-skeleton--avatar` | 40 × 40 px, circular |
| Image | `.lex-skeleton--image` | 100% width, 120 px height |
| Card | `.lex-skeleton--card` | 300 px max, 160 px height |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | `'text' \| 'heading' \| 'avatar' \| 'image' \| 'card'` | `'text'` | Skeleton shape |
| `width` | `string \| number` | auto | Custom width |
| `height` | `string \| number` | auto | Custom height |
| `count` | `number` | `1` | Number of skeleton lines |

## Code example

### React

```tsx
import { Skeleton } from '@thepace/lexicon/components';

<Skeleton shape="avatar" />
<Skeleton shape="heading" />
<Skeleton shape="text" count={3} />
```

### Vanilla HTML

```html
<div class="lex-skeleton--row">
  <div class="lex-skeleton lex-skeleton--avatar"></div>
  <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
    <div class="lex-skeleton lex-skeleton--heading"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 90%;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 75%;"></div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-skeleton` | Base styles + shimmer animation |
| `.lex-skeleton--text` | Text line shape |
| `.lex-skeleton--heading` | Heading shape |
| `.lex-skeleton--avatar` | Circular avatar shape |
| `.lex-skeleton--image` | Image block shape |
| `.lex-skeleton--card` | Card-sized block |
| `.lex-skeleton--row` | Flex row container |

## Accessibility

- Add `aria-busy="true"` on the container while loading.
- Add `aria-label="Loading content"` on the skeleton region.
- Use `role="status"` if the loading state is a response to user action.

## Guidelines

::: tip Do
- Match skeleton shapes to the actual content layout for smooth transitions.
- Use width variations on text lines for a realistic appearance.
:::

::: danger Don't
- Don't show skeletons for less than 300 ms — use a spinner or nothing.
- Don't combine skeleton loaders with spinners in the same view.
:::
