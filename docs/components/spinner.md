# Spinner

A circular loading indicator for asynchronous operations. Available in three sizes and multiple colour variants.

## Preview

<div class="component-preview" style="gap: 24px;">
  <span class="lex-spinner lex-spinner--sm"></span>
  <span class="lex-spinner lex-spinner--md"></span>
  <span class="lex-spinner lex-spinner--lg"></span>
</div>

### Variants

<div class="component-preview" style="gap: 24px;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <span class="lex-spinner lex-spinner--md"></span>
    <span style="font-size: 12px; color: var(--vp-c-text-3);">Brand</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <span class="lex-spinner lex-spinner--md lex-spinner--neutral"></span>
    <span style="font-size: 12px; color: var(--vp-c-text-3);">Neutral</span>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; background: var(--vp-c-bg-alt); padding: 12px; border-radius: 8px;">
    <span class="lex-spinner lex-spinner--md lex-spinner--on-dark" style="color: #fff;"></span>
    <span style="font-size: 12px; color: var(--vp-c-text-3);">On dark</span>
  </div>
</div>

### In a button

<div class="component-preview" style="gap: 16px;">
  <button class="lex-button lex-button--primary lex-button--md lex-button--loading" aria-busy="true">Saving</button>
  <button class="lex-button lex-button--secondary lex-button--md lex-button--loading" aria-busy="true">Loading</button>
</div>

## Sizes

| Size | Dimensions | Border width |
| --- | --- | --- |
| `sm` | 16 × 16 px | 2 px |
| `md` | 24 × 24 px | 2 px |
| `lg` | 40 × 40 px | 3 px |

## Variants

- **Brand** (default) -- uses `--vp-c-brand-1`. Use on neutral backgrounds.
- **Neutral** -- grey. Use for subtle loading states.
- **On dark** -- white. Use on dark or coloured backgrounds.
- **On light** -- dark. Use on white backgrounds in dark mode contexts.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner dimensions |
| `variant` | `'brand' \| 'neutral' \| 'on-dark' \| 'on-light'` | `'brand'` | Colour variant |
| `label` | `string` | `'Loading'` | Accessible label |

## Code example

### React

```tsx
import { Spinner } from '@thepace/lexicon/components';

<Spinner size="lg" />
<Spinner size="sm" variant="neutral" />
```

### Vanilla HTML

```html
<span class="lex-spinner lex-spinner--md" role="status"
      aria-label="Loading"></span>
<span class="lex-spinner lex-spinner--lg lex-spinner--neutral"
      role="status" aria-label="Loading"></span>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-spinner` | Base spinner (animated border) |
| `.lex-spinner--sm` | 16 px |
| `.lex-spinner--md` | 24 px |
| `.lex-spinner--lg` | 40 px |
| `.lex-spinner--neutral` | Grey colour |
| `.lex-spinner--on-dark` | White colour |
| `.lex-spinner--on-light` | Dark colour |

## Accessibility

- Always add `role="status"` and `aria-label="Loading"` (or a context-specific label).
- When used inside a button, set `aria-busy="true"` on the button.
- Ensure the spinner is visible against its background in both themes.

## Guidelines

::: tip Do
- Use the smallest size that communicates loading clearly.
- Pair with descriptive text for longer operations (e.g. "Loading results...").
:::

::: danger Don't
- Don't use a spinner for operations under 300 ms — the flash is distracting.
- Don't use multiple spinners in the same view — consolidate into one loading state.
:::
