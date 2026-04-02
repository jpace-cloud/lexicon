# Container

A max-width wrapper that centres content on the page with responsive side padding. Provides consistent content width across the application.

## Preview

<div class="component-preview component-preview--col" style="gap: 12px;">
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">Narrow (640px) — prose, articles</p>
  <div class="lex-container-demo lex-container-demo--narrow">max-width: 640px</div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">Standard (960px) — forms, settings</p>
  <div class="lex-container-demo lex-container-demo--standard">max-width: 960px</div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">Wide (1280px) — dashboards, tables</p>
  <div class="lex-container-demo lex-container-demo--wide">max-width: 1280px</div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin: 0;">Full-width — edge-to-edge content</p>
  <div class="lex-container-demo">width: 100%</div>
</div>

## Variants

| Variant | Max width | Use case |
| --- | --- | --- |
| `narrow` | 640 px | Prose, articles, auth forms |
| `standard` | 960 px | Forms, settings pages |
| `wide` | 1280 px | Dashboards, data tables |
| `full` | 100% | Edge-to-edge layouts |

## Responsive padding

| Breakpoint | Side padding |
| --- | --- |
| `≥ 1024px` | 32 px |
| `≥ 768px` | 24 px |
| `< 768px` | 16 px |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'narrow' \| 'standard' \| 'wide' \| 'full'` | `'standard'` | Max width variant |
| `as` | `string` | `'div'` | HTML element to render |
| `className` | `string` | -- | Additional CSS classes |
| `children` | `React.ReactNode` | -- | Content |

## Code example

### React

```tsx
import { Container } from '@thepace/lexicon/components';

<Container size="narrow">
  <h1>Article Title</h1>
  <p>Prose content with optimal reading width.</p>
</Container>

<Container size="wide">
  <DataTable data={rows} />
</Container>
```

### CSS utility

```css
.my-container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-container` | Base centred container |
| `.lex-container--narrow` | 640 px max width |
| `.lex-container--standard` | 960 px max width |
| `.lex-container--wide` | 1280 px max width |
| `.lex-container--full` | Full width |

## Guidelines

::: tip Do
- Use the narrow container for long-form text content.
- Use the wide container for data-heavy views.
- Apply responsive padding that matches the spacing scale.
:::

::: danger Don't
- Don't nest containers — only the outermost page wrapper should be a container.
- Don't hardcode pixel widths — use the container variants.
:::
