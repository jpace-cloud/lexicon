# Banner

A full-width bar for site-level or page-level announcements. Appears at the top of a page or section.

## Preview

<div class="component-preview component-preview--col" style="gap: 12px;">
  <div class="lex-banner lex-banner--info" role="status">
    <span class="lex-banner__icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="9" r="7"/><line x1="9" y1="8" x2="9" y2="13"/><circle cx="9" cy="5.5" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <span class="lex-banner__content">Lexicon v1.1 is now available with new components.</span>
    <button class="lex-banner__action">Learn more</button>
    <button class="lex-banner__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
  <div class="lex-banner lex-banner--success" role="status">
    <span class="lex-banner__icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="9" r="7"/><polyline points="6,9 8,11 12,7"/></svg></span>
    <span class="lex-banner__content">Deployment complete. All services are running.</span>
    <button class="lex-banner__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
  <div class="lex-banner lex-banner--warning" role="status">
    <span class="lex-banner__icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9 2L1 16h16L9 2z"/><line x1="9" y1="9" x2="9" y2="12"/><circle cx="9" cy="14" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <span class="lex-banner__content">Scheduled maintenance on Sunday at 02:00 UTC.</span>
    <button class="lex-banner__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
  <div class="lex-banner lex-banner--error" role="alert">
    <span class="lex-banner__icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="9" r="7"/><line x1="6.5" y1="6.5" x2="11.5" y2="11.5"/><line x1="11.5" y1="6.5" x2="6.5" y2="11.5"/></svg></span>
    <span class="lex-banner__content">Service disruption detected. Some features may be unavailable.</span>
    <button class="lex-banner__dismiss" aria-label="Dismiss"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg></button>
  </div>
</div>

## Variants

- **Info** -- blue. General announcements.
- **Success** -- green. Positive confirmations.
- **Warning** -- amber. Caution notices.
- **Error** -- red. Critical issues.
- **Neutral** -- grey. Non-semantic messages.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | Semantic colour |
| `message` | `string` | -- | Banner text |
| `action` | `{ label: string; onClick: () => void }` | -- | Optional action link |
| `dismissible` | `boolean` | `true` | Shows dismiss button |
| `onDismiss` | `() => void` | -- | Dismiss callback |

## Code example

### React

```tsx
import { Banner } from '@thepace/lexicon/components';

<Banner variant="info" message="Lexicon v1.1 is now available."
        action={{ label: 'Learn more', onClick: handleNav }}
        dismissible />
```

### Vanilla HTML

```html
<div class="lex-banner lex-banner--info" role="status">
  <span class="lex-banner__icon"><!-- icon --></span>
  <span class="lex-banner__content">Lexicon v1.1 is available.</span>
  <button class="lex-banner__action">Learn more</button>
  <button class="lex-banner__dismiss" aria-label="Dismiss">×</button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-banner` | Base banner styles |
| `.lex-banner--info` | Info variant |
| `.lex-banner--success` | Success variant |
| `.lex-banner--warning` | Warning variant |
| `.lex-banner--error` | Error variant |
| `.lex-banner--neutral` | Neutral variant |

## Accessibility

- Use `role="status"` for informational banners and `role="alert"` for errors.
- Dismiss button has `aria-label="Dismiss"`.
- Banner content should be concise — one sentence.

## Guidelines

::: tip Do
- Place banners at the very top of the page or container.
- Keep the message to one line; use the action link for details.
:::

::: danger Don't
- Don't stack multiple banners — prioritise the most important one.
- Don't use for field-level validation — use inline error text.
:::
