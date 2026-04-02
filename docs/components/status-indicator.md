# Status Indicator

A small coloured dot indicating presence or system state. Use alongside avatars, list items, or service monitors.

## Preview

<div class="component-preview" style="gap: 24px;">
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--online"></span>
    <span>Online</span>
  </div>
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--away"></span>
    <span>Away</span>
  </div>
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--busy"></span>
    <span>Busy</span>
  </div>
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--offline"></span>
    <span>Offline</span>
  </div>
</div>

### Sizes

<div class="component-preview" style="gap: 24px;">
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--online lex-status-dot--sm"></span>
    <span>Small (8 px)</span>
  </div>
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--online"></span>
    <span>Default (10 px)</span>
  </div>
  <div class="lex-status-row">
    <span class="lex-status-dot lex-status-dot--online lex-status-dot--lg"></span>
    <span>Large (12 px)</span>
  </div>
</div>

## Variants

| Status | Colour | Use case |
| --- | --- | --- |
| Online | Green | User is active, service is running |
| Away | Amber | User is idle, service degraded |
| Busy | Red | User is in a meeting, service down |
| Offline | Grey | User is disconnected, service stopped |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `status` | `'online' \| 'away' \| 'busy' \| 'offline'` | -- | Status type |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dot diameter |
| `label` | `string` | -- | Accessible label (required) |

## Code example

### React

```tsx
import { StatusIndicator } from '@thepace/lexicon/components';

<StatusIndicator status="online" label="Online" />
<StatusIndicator status="busy" size="sm" label="Do not disturb" />
```

### Vanilla HTML

```html
<span class="lex-status-dot lex-status-dot--online"
      role="status" aria-label="Online"></span>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-status-dot` | Base dot styles |
| `.lex-status-dot--online` | Green dot |
| `.lex-status-dot--away` | Amber dot |
| `.lex-status-dot--busy` | Red dot |
| `.lex-status-dot--offline` | Grey dot |
| `.lex-status-dot--sm` | 8 px |
| `.lex-status-dot--lg` | 12 px |
| `.lex-status-row` | Dot + label row |

## Accessibility

- Add `role="status"` and `aria-label` describing the state.
- Colour is not the only indicator — always pair with a text label or tooltip.
- Use `aria-live="polite"` if the status updates dynamically.

## Guidelines

::: tip Do
- Always pair the dot with a text label or tooltip for accessibility.
- Use alongside avatars to show user presence.
:::

::: danger Don't
- Don't rely on colour alone — always provide a text alternative.
- Don't use custom colours — stick to the four semantic statuses.
:::
