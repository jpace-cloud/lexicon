# Link Button

A button styled as a text link with an underline on hover. Use for tertiary actions, inline navigation, or anywhere a standard hyperlink appearance is more appropriate than a filled button.

## Preview

<div class="component-preview">
  <button class="lex-link-button lex-link-button--md">View details</button>
  <button class="lex-link-button lex-link-button--md">Learn more</button>
  <button class="lex-link-button lex-link-button--md" disabled>Unavailable</button>
</div>

### Sizes

<div class="component-preview">
  <button class="lex-link-button lex-link-button--sm">Small</button>
  <button class="lex-link-button lex-link-button--md">Medium</button>
  <button class="lex-link-button lex-link-button--lg">Large</button>
</div>

### With trailing icon

<div class="component-preview">
  <button class="lex-link-button lex-link-button--md">
    View documentation
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="11" y2="7"/><polyline points="8,4 11,7 8,10"/></svg>
  </button>
</div>

## Behaviour

- Renders as a `<button>` with link-like styling — underline appears on hover.
- Uses the ghost/brand colour to distinguish from regular body text.
- The underline transition provides a subtle interaction cue.

## States

| State | Appearance |
| --- | --- |
| Default | Brand-coloured text, no underline |
| Hover | Underline appears |
| Focus | 2 px brand-purple ring with 2 px offset |
| Disabled | 50 % opacity, `cursor: not-allowed` |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Font size |
| `disabled` | `boolean` | `false` | Disables interaction |
| `iconTrailing` | `ReactNode` | -- | Icon after the text |
| `children` | `ReactNode` | -- | Link text |

## Code example

### React

```tsx
import { LinkButton } from '@thepace/lexicon/components';

<LinkButton>View details</LinkButton>
<LinkButton size="sm" iconTrailing={<ArrowRightIcon />}>Learn more</LinkButton>
```

### Vanilla HTML

```html
<button class="lex-link-button lex-link-button--md">
  View details
</button>

<button class="lex-link-button lex-link-button--md">
  Learn more
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="3" y1="7" x2="11" y2="7"/>
    <polyline points="8,4 11,7 8,10"/>
  </svg>
</button>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-link-button` | Base link-styled button |
| `.lex-link-button--sm` | Small font size |
| `.lex-link-button--md` | Medium font size (default) |
| `.lex-link-button--lg` | Large font size |

## Accessibility

- Renders a native `<button>` element — do not use `<a>` unless it navigates to a URL.
- Focus ring matches the standard component focus style.
- Keyboard: Enter and Space trigger the action.

## Guidelines

::: tip Do
- Use for tertiary actions that sit below primary and secondary buttons in hierarchy.
- Pair a trailing arrow icon for "view more" or navigation-style actions.
:::

::: danger Don't
- Don't use for navigation to URLs — use a real `<a>` link instead.
- Don't use as the only action in a section — pair with a more prominent button.
:::
