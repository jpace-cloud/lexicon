# Divider

A horizontal or vertical line for visually separating content. Supports subtle, default, and strong weights, plus a text label variant.

## Preview

### Horizontal variants

<div class="component-preview component-preview--col" style="gap: 0;">
  <p style="font-size: 13px; color: var(--vp-c-text-3); margin: 0;">Subtle</p>
  <hr class="lex-divider lex-divider--subtle" />
  <p style="font-size: 13px; color: var(--vp-c-text-3); margin: 0;">Default</p>
  <hr class="lex-divider lex-divider--default" />
  <p style="font-size: 13px; color: var(--vp-c-text-3); margin: 0;">Strong</p>
  <hr class="lex-divider lex-divider--strong" />
</div>

### With text label

<div class="component-preview component-preview--col">
  <div class="lex-divider lex-divider--with-text">
    <span class="lex-divider__text">Or</span>
  </div>
  <div class="lex-divider lex-divider--with-text">
    <span class="lex-divider__text">Section Two</span>
  </div>
</div>

### Vertical divider

<div class="component-preview" style="height: 80px; align-items: stretch;">
  <span style="font-size: 14px; color: var(--vp-c-text-2);">Left content</span>
  <div class="lex-divider lex-divider--vertical lex-divider--default"></div>
  <span style="font-size: 14px; color: var(--vp-c-text-2);">Right content</span>
</div>

## Variants

| Variant | Weight | Use case |
| --- | --- | --- |
| `subtle` | Lightest | Between closely related items |
| `default` | Medium | Standard section separation |
| `strong` | Heaviest | Major content boundaries |
| `with-text` | With label | "Or" dividers, section headings |
| `vertical` | Vertical | Separating inline elements |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'subtle' \| 'default' \| 'strong'` | `'default'` | Line weight |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Line direction |
| `label` | `string` | -- | Text label shown in the middle |

## Code example

### React

```tsx
import { Divider } from '@thepace/lexicon/components';

<Divider />
<Divider variant="strong" />
<Divider label="Or" />
<Divider orientation="vertical" />
```

### Vanilla HTML

```html
<hr class="lex-divider lex-divider--default" />

<div class="lex-divider lex-divider--with-text">
  <span class="lex-divider__text">Or</span>
</div>

<div style="display: flex; align-items: stretch; height: 40px;">
  <span>Left</span>
  <div class="lex-divider lex-divider--vertical lex-divider--default"></div>
  <span>Right</span>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-divider` | Base horizontal line |
| `.lex-divider--subtle` | Lightest weight |
| `.lex-divider--default` | Standard weight |
| `.lex-divider--strong` | Heavy weight |
| `.lex-divider--vertical` | Vertical orientation |
| `.lex-divider--with-text` | Label variant |
| `.lex-divider__text` | Label text |

## Accessibility

- Horizontal dividers use `<hr>` for semantic separation.
- Decorative dividers (within a visual group) use `role="separator"`.
- Labelled dividers associate the text with the separator for screen readers.

## Guidelines

::: tip Do
- Use dividers to separate logical sections, not every element.
- Use the subtle variant within cards and the default variant between sections.
- Use the text label variant for "or" patterns in auth forms.
:::

::: danger Don't
- Don't overuse dividers — whitespace is often sufficient.
- Don't use strong dividers for minor separations.
:::
