# Toast

A brief, non-blocking notification that appears temporarily. Toasts inform users of events without interrupting their workflow.

## Preview

<div class="component-preview component-preview--col" style="gap: 12px;">
  <div class="lex-toast lex-toast--success" role="status">
    <span class="lex-toast__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><polyline points="7,10 9,12 13,8"/></svg></span>
    <div class="lex-toast__content">
      <div class="lex-toast__title">Changes saved</div>
      <div class="lex-toast__description">Your profile has been updated.</div>
    </div>
    <button class="lex-toast__dismiss" aria-label="Dismiss"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg></button>
  </div>
  <div class="lex-toast lex-toast--error" role="alert">
    <span class="lex-toast__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><line x1="7" y1="7" x2="13" y2="13"/><line x1="13" y1="7" x2="7" y2="13"/></svg></span>
    <div class="lex-toast__content">
      <div class="lex-toast__title">Upload failed</div>
      <div class="lex-toast__description">The file exceeds the maximum size.</div>
    </div>
    <button class="lex-toast__dismiss" aria-label="Dismiss"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg></button>
  </div>
  <div class="lex-toast lex-toast--warning" role="status">
    <span class="lex-toast__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 3L2 17h16L10 3z"/><line x1="10" y1="10" x2="10" y2="13"/><circle cx="10" cy="15" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <div class="lex-toast__content">
      <div class="lex-toast__title">Connection unstable</div>
      <div class="lex-toast__description">Some features may be slow.</div>
    </div>
    <button class="lex-toast__dismiss" aria-label="Dismiss"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg></button>
  </div>
  <div class="lex-toast lex-toast--info" role="status">
    <span class="lex-toast__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><line x1="10" y1="9" x2="10" y2="14"/><circle cx="10" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></span>
    <div class="lex-toast__content">
      <div class="lex-toast__title">New comment</div>
      <div class="lex-toast__description">Alex left a comment on your pull request.</div>
    </div>
    <button class="lex-toast__dismiss" aria-label="Dismiss"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg></button>
  </div>
</div>

## Behaviour

- Toasts appear temporarily and auto-dismiss after a configurable duration (default 5 s).
- Error toasts should persist until manually dismissed.
- Multiple toasts stack vertically with an 8 px gap.
- Positioned at the top-right or bottom-right of the viewport.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Semantic colour for icon |
| `title` | `string` | -- | Bold heading |
| `description` | `string` | -- | Body text |
| `duration` | `number` | `5000` | Auto-dismiss time in ms (0 for persistent) |
| `onDismiss` | `() => void` | -- | Dismiss callback |
| `position` | `'top-right' \| 'bottom-right' \| 'bottom-center'` | `'bottom-right'` | Screen position |

## Code example

### React

```tsx
import { toast } from '@thepace/lexicon/components';

toast.success({ title: 'Saved', description: 'Your changes are live.' });
toast.error({ title: 'Failed', description: 'Upload failed.', duration: 0 });
```

### Vanilla HTML

```html
<div class="lex-toast lex-toast--success" role="status">
  <span class="lex-toast__icon"><!-- check icon --></span>
  <div class="lex-toast__content">
    <div class="lex-toast__title">Changes saved</div>
    <div class="lex-toast__description">Your profile has been updated.</div>
  </div>
  <button class="lex-toast__dismiss" aria-label="Dismiss">×</button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-toast` | Base toast card |
| `.lex-toast--info` | Info icon colour |
| `.lex-toast--success` | Success icon colour |
| `.lex-toast--warning` | Warning icon colour |
| `.lex-toast--error` | Error icon colour |
| `.lex-toast-stack` | Stacked container |

## Accessibility

- Use `role="status"` for informational toasts, `role="alert"` for errors.
- `aria-live="polite"` for non-urgent, `aria-live="assertive"` for errors.
- Dismiss button has `aria-label="Dismiss"`.
- Auto-dismiss duration should be at least 5 seconds.
- Keyboard: toasts should be focusable when they appear.

## Guidelines

::: tip Do
- Keep toast messages short — one title and one sentence.
- Use auto-dismiss for success messages.
- Persist error toasts until the user dismisses them.
:::

::: danger Don't
- Don't use toasts for critical errors that require user action — use an Alert or Modal.
- Don't show more than 3 toasts simultaneously.
:::
