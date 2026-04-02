# Alert

An inline message for contextual feedback. Alerts surface important information without interrupting the user's workflow.

## Preview

<div class="component-preview component-preview--col" style="gap: 12px;">
  <div class="lex-alert lex-alert--info" role="alert">
    <span class="lex-alert__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><line x1="10" y1="9" x2="10" y2="14"/><circle cx="10" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <div class="lex-alert__content">
      <div class="lex-alert__title">New version available</div>
      <div class="lex-alert__description">Lexicon v1.1 includes new components and performance improvements.</div>
    </div>
    <button class="lex-alert__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
  <div class="lex-alert lex-alert--success" role="alert">
    <span class="lex-alert__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><polyline points="7,10 9,12 13,8"/></svg></span>
    <div class="lex-alert__content">
      <div class="lex-alert__title">Changes saved</div>
      <div class="lex-alert__description">Your settings have been updated successfully.</div>
    </div>
  </div>
  <div class="lex-alert lex-alert--warning" role="alert">
    <span class="lex-alert__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 3L2 17h16L10 3z"/><line x1="10" y1="10" x2="10" y2="13"/><circle cx="10" cy="15" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <div class="lex-alert__content">
      <div class="lex-alert__title">Storage almost full</div>
      <div class="lex-alert__description">You've used 90% of your storage. Consider upgrading your plan.</div>
    </div>
  </div>
  <div class="lex-alert lex-alert--error" role="alert">
    <span class="lex-alert__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><line x1="7" y1="7" x2="13" y2="13"/><line x1="13" y1="7" x2="7" y2="13"/></svg></span>
    <div class="lex-alert__content">
      <div class="lex-alert__title">Payment failed</div>
      <div class="lex-alert__description">Your card was declined. Please update your payment method.</div>
    </div>
    <button class="lex-alert__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
  <div class="lex-alert lex-alert--neutral" role="alert">
    <span class="lex-alert__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><line x1="10" y1="9" x2="10" y2="14"/><circle cx="10" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <div class="lex-alert__content">
      <div class="lex-alert__title">Maintenance scheduled</div>
      <div class="lex-alert__description">The system will be briefly unavailable on Sunday at 02:00 UTC.</div>
    </div>
  </div>
</div>

## Variants

- **Info** -- blue tint. General information or updates.
- **Success** -- green tint. Positive confirmations.
- **Warning** -- amber tint. Cautionary messages.
- **Error** -- red tint. Problems or failures requiring attention.
- **Neutral** -- grey tint. System or non-semantic messages.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | Semantic colour |
| `title` | `string` | -- | Bold heading text |
| `description` | `string` | -- | Body text |
| `icon` | `ReactNode` | auto | Leading icon (defaults to variant icon) |
| `dismissible` | `boolean` | `false` | Shows dismiss button |
| `onDismiss` | `() => void` | -- | Dismiss callback |

## Code example

### React

```tsx
import { Alert } from '@thepace/lexicon/components';

<Alert variant="success" title="Changes saved"
       description="Your settings have been updated." dismissible />
```

### Vanilla HTML

```html
<div class="lex-alert lex-alert--success" role="alert">
  <span class="lex-alert__icon"><!-- icon SVG --></span>
  <div class="lex-alert__content">
    <div class="lex-alert__title">Changes saved</div>
    <div class="lex-alert__description">Your settings have been updated.</div>
  </div>
  <button class="lex-alert__dismiss" aria-label="Dismiss">×</button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-alert` | Base alert styles |
| `.lex-alert--info` | Info variant |
| `.lex-alert--success` | Success variant |
| `.lex-alert--warning` | Warning variant |
| `.lex-alert--error` | Error variant |
| `.lex-alert--neutral` | Neutral variant |
| `.lex-alert__icon` | Icon container |
| `.lex-alert__content` | Title + description container |
| `.lex-alert__title` | Bold title |
| `.lex-alert__description` | Body text |
| `.lex-alert__dismiss` | Dismiss button |

## Accessibility

- Uses `role="alert"` for important messages or `role="status"` for passive updates.
- Error and warning alerts should use `aria-live="assertive"`.
- Dismiss button has `aria-label="Dismiss"`.
- Colour is never the only indicator — each variant includes a unique icon.

## Guidelines

::: tip Do
- Include both a title and description for clarity.
- Use the dismiss button for non-critical alerts users can acknowledge.
- Place alerts near the content they relate to.
:::

::: danger Don't
- Don't use alerts for validation errors on individual fields — use inline error text.
- Don't stack more than 2 persistent alerts — combine or prioritise.
:::
