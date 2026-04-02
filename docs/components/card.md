# Card

A flexible content container with three visual variants and composable sub-components.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
    <div class="lex-card lex-card--default">
      <div class="lex-card__header">Default Card</div>
      <div class="lex-card__body">Surface-1 background with a subtle border. The standard card for most content.</div>
    </div>
    <div class="lex-card lex-card--elevated">
      <div class="lex-card__header">Elevated Card</div>
      <div class="lex-card__body">Surface-2 background with a medium shadow and no visible border.</div>
    </div>
    <div class="lex-card lex-card--outlined">
      <div class="lex-card__header">Outlined Card</div>
      <div class="lex-card__body">Transparent background with a visible border.</div>
    </div>
  </div>
</div>

## Variants

- **Default** -- surface-1 background with a subtle border. The standard card for most content.
- **Elevated** -- surface-2 background with a medium box shadow and no visible border.
- **Outlined** -- transparent background with a stronger visible border.

## Sub-components

| Sub-component | Description |
| --- | --- |
| `Card.Header` | Top section with semibold title text, separated by a bottom border. |
| `Card.Footer` | Bottom section with a top border and slightly darker background. |
| `Card.Media` | Full-bleed image or media slot at the top of the card. |

## Clickable mode

When `onClick` is provided, the card becomes interactive: the cursor changes to pointer, the border strengthens on hover, and a subtle shadow appears.

## Props

### Card

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'elevated' \| 'outlined'` | `'default'` | Visual style |
| `onClick` | `() => void` | -- | Makes the card clickable |
| `className` | `string` | -- | Additional CSS classes |
| `style` | `React.CSSProperties` | -- | Inline styles |
| `children` | `React.ReactNode` | -- | Card content |

### Card.Header

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | -- | Header content (typically a title) |

### Card.Footer

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | -- | Footer content (typically actions) |

### Card.Media

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | -- | Image source URL |
| `alt` | `string` | `''` | Image alt text |
| `height` | `string \| number` | `200` | Media container height |

## Code example

### React

```tsx
import { Card, Button } from '@thepace/lexicon/components';

function ProjectCard() {
  return (
    <Card variant="elevated">
      <Card.Media src="/cover.jpg" alt="Project cover" />
      <Card.Header>Project Alpha</Card.Header>
      <p>A brief description of the project and its current status.</p>
      <Card.Footer>
        <Button variant="ghost" size="sm">Details</Button>
        <Button variant="primary" size="sm">Open</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Vanilla HTML

```html
<div class="lex-card lex-card--elevated">
  <img class="lex-card__media" src="/cover.jpg" alt="Project cover" />
  <div class="lex-card__header">Project Alpha</div>
  <div class="lex-card__body">
    <p>A brief description of the project and its current status.</p>
  </div>
  <div class="lex-card__footer">
    <button class="lex-button lex-button--ghost lex-button--sm">Details</button>
    <button class="lex-button lex-button--primary lex-button--sm">Open</button>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-card` | Base card styles |
| `.lex-card--default` | Default variant |
| `.lex-card--elevated` | Elevated variant |
| `.lex-card--outlined` | Outlined variant |
| `.lex-card--clickable` | Clickable hover state |
| `.lex-card__header` | Header section |
| `.lex-card__body` | Body section |
| `.lex-card__footer` | Footer section |
| `.lex-card__media` | Media slot |
