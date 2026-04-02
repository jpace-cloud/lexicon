# Empty State

A placeholder for views with no data. Includes an icon or illustration, heading, description, and optional call-to-action.

## Preview

<div class="component-preview">
  <div class="lex-empty-state">
    <span class="lex-empty-state__icon">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="8" y="8" width="32" height="32" rx="4"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="26" x2="28" y2="26"/><line x1="16" y1="32" x2="24" y2="32"/></svg>
    </span>
    <div class="lex-empty-state__title">No items yet</div>
    <div class="lex-empty-state__description">Create your first item to get started. Items will appear here once added.</div>
    <button class="lex-button lex-button--primary lex-button--md" style="margin-top: 8px;">Create item</button>
  </div>
</div>

### In a card

<div class="component-preview">
  <div class="lex-card lex-card--default" style="width: 100%; max-width: 480px;">
    <div class="lex-empty-state" style="padding: 24px 16px;">
      <span class="lex-empty-state__icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="20" cy="16" r="8"/><path d="M8 36c0-6.6 5.4-12 12-12s12 5.4 12 12"/></svg>
      </span>
      <div class="lex-empty-state__title">No team members</div>
      <div class="lex-empty-state__description">Invite people to collaborate on this project.</div>
      <button class="lex-button lex-button--secondary lex-button--sm" style="margin-top: 4px;">Invite</button>
    </div>
  </div>
</div>

## Anatomy

1. **Icon** -- a simple SVG illustration or icon in muted colour.
2. **Title** -- short heading describing what's missing.
3. **Description** -- one or two sentences with context or next steps.
4. **Action** -- optional button to create the first item.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | -- | Illustration or icon |
| `title` | `string` | -- | Heading text |
| `description` | `string` | -- | Body text |
| `action` | `ReactNode` | -- | CTA button |

## Code example

### React

```tsx
import { EmptyState, Button } from '@thepace/lexicon/components';

<EmptyState
  icon={<FileIcon />}
  title="No items yet"
  description="Create your first item to get started."
  action={<Button variant="primary">Create item</Button>}
/>
```

### Vanilla HTML

```html
<div class="lex-empty-state">
  <span class="lex-empty-state__icon"><!-- icon --></span>
  <div class="lex-empty-state__title">No items yet</div>
  <div class="lex-empty-state__description">Create your first item.</div>
  <button class="lex-button lex-button--primary lex-button--md">Create</button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-empty-state` | Centred flex container |
| `.lex-empty-state__icon` | Icon/illustration |
| `.lex-empty-state__title` | Heading |
| `.lex-empty-state__description` | Body text |

## Accessibility

- Use `aria-label` on the container if it replaces a data view (e.g. "No results found").
- The CTA button should be focusable and clearly labelled.

## Guidelines

::: tip Do
- Always include a clear next-step action when possible.
- Use a relevant icon that hints at the expected content type.
:::

::: danger Don't
- Don't leave empty views completely blank — always show context.
- Don't use generic messages like "Nothing here" — be specific.
:::
