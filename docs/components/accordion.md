# Accordion

A vertically stacked set of collapsible sections. Only one or multiple sections can be open at a time.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-accordion">
    <div class="lex-accordion__item lex-accordion__item--open">
      <button class="lex-accordion__trigger">
        What is Lexicon?
        <svg class="lex-accordion__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg>
      </button>
      <div class="lex-accordion__content">
        Lexicon is a token-driven design system for The Pace product family. It includes design tokens, accessible components, and integration guides for React, Next.js, and vanilla HTML.
      </div>
    </div>
    <div class="lex-accordion__item">
      <button class="lex-accordion__trigger">
        How do I install it?
        <svg class="lex-accordion__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg>
      </button>
    </div>
    <div class="lex-accordion__item">
      <button class="lex-accordion__trigger">
        Can I customise the tokens?
        <svg class="lex-accordion__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg>
      </button>
    </div>
  </div>
</div>

## Features

- **Single or multiple** -- control whether one or many sections can be open simultaneously.
- **Keyboard navigation** -- `Enter` / `Space` toggles, `Arrow` keys move focus between triggers.
- **Animated** -- smooth height transition on open/close.

## Props

### Accordion

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'single' \| 'multiple'` | `'single'` | Allow one or many open items |
| `defaultOpen` | `string \| string[]` | -- | Initially open item(s) by ID |
| `children` | `React.ReactNode` | -- | Accordion items |

### Accordion.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | -- | Unique item identifier |
| `title` | `string` | -- | Trigger label |
| `children` | `React.ReactNode` | -- | Collapsible content |

## Code example

### React

```tsx
import { Accordion } from '@thepace/lexicon/components';

<Accordion type="single" defaultOpen="what">
  <Accordion.Item id="what" title="What is Lexicon?">
    Lexicon is a token-driven design system for The Pace product family.
  </Accordion.Item>
  <Accordion.Item id="install" title="How do I install it?">
    Clone the repo, copy the CSS file, and import it into your project.
  </Accordion.Item>
  <Accordion.Item id="custom" title="Can I customise the tokens?">
    Yes — override any CSS custom property on :root.
  </Accordion.Item>
</Accordion>
```

### Vanilla HTML

```html
<div class="lex-accordion">
  <div class="lex-accordion__item lex-accordion__item--open">
    <button class="lex-accordion__trigger" aria-expanded="true"
            aria-controls="panel-1">
      What is Lexicon?
      <svg class="lex-accordion__chevron"><!-- chevron --></svg>
    </button>
    <div class="lex-accordion__content" id="panel-1" role="region">
      Lexicon is a token-driven design system.
    </div>
  </div>
  <div class="lex-accordion__item">
    <button class="lex-accordion__trigger" aria-expanded="false"
            aria-controls="panel-2">
      How do I install it?
      <svg class="lex-accordion__chevron"><!-- chevron --></svg>
    </button>
    <div class="lex-accordion__content" id="panel-2" role="region"
         hidden>
      Clone the repo and import the CSS file.
    </div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-accordion` | Container |
| `.lex-accordion__item` | Individual section |
| `.lex-accordion__item--open` | Expanded state |
| `.lex-accordion__trigger` | Clickable header |
| `.lex-accordion__chevron` | Rotation indicator |
| `.lex-accordion__content` | Collapsible body |

## Accessibility

- Triggers use `aria-expanded` and `aria-controls`.
- Content panels use `role="region"` with `aria-labelledby` pointing to the trigger.
- Collapsed panels use `hidden` attribute.
- Full keyboard support: `Enter`/`Space` to toggle, `Arrow` keys between triggers.

## Guidelines

::: tip Do
- Use for FAQ sections, settings panels, and filter groups.
- Keep trigger labels short and descriptive.
- Use `type="single"` when context is sequential (e.g. setup wizard).
:::

::: danger Don't
- Don't nest accordions inside accordions.
- Don't use for primary navigation — use Tabs or Sidebar Nav instead.
- Don't hide critical content that users must see.
:::
