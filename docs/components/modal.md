# Modal

A dialog overlay with focus trapping, keyboard dismissal, and multiple size options.

## Preview

### Confirmation dialog (small)

<div class="component-preview component-preview--col">
  <div class="lex-modal-preview">
    <div class="lex-modal-static lex-modal-static--sm" style="position: relative;">
      <button class="lex-modal__close" aria-label="Close">&times;</button>
      <div class="lex-modal__title">Delete project?</div>
      <p class="lex-modal__description">This action cannot be undone. All data will be permanently removed.</p>
      <div class="lex-modal__footer">
        <button class="lex-button lex-button--secondary lex-button--sm">Cancel</button>
        <button class="lex-button lex-button--danger lex-button--sm">Delete</button>
      </div>
    </div>
  </div>
</div>

### Form dialog (medium)

<div class="component-preview component-preview--col">
  <div class="lex-modal-preview">
    <div class="lex-modal-static lex-modal-static--md" style="position: relative;">
      <button class="lex-modal__close" aria-label="Close">&times;</button>
      <div class="lex-modal__title">Create new project</div>
      <p class="lex-modal__description">Fill in the details below to set up your project.</p>
      <div class="lex-modal__body" style="margin-top: 16px;">
        <div style="margin-bottom: 12px;">
          <label class="lex-input__label">Project name</label>
          <input class="lex-input" type="text" placeholder="My project" />
        </div>
        <div>
          <label class="lex-input__label">Description</label>
          <textarea class="lex-textarea" rows="2" placeholder="Brief description..."></textarea>
        </div>
      </div>
      <div class="lex-modal__footer">
        <button class="lex-button lex-button--secondary lex-button--sm">Cancel</button>
        <button class="lex-button lex-button--primary lex-button--sm">Create project</button>
      </div>
    </div>
  </div>
</div>

### Scrollable content (large)

<div class="component-preview component-preview--col">
  <div class="lex-modal-preview">
    <div class="lex-modal-static lex-modal-static--lg lex-modal-static--scrollable" style="position: relative;">
      <button class="lex-modal__close" aria-label="Close">&times;</button>
      <div class="lex-modal__title">Terms of Service</div>
      <p class="lex-modal__description">Please review and accept the terms below.</p>
      <div class="lex-modal__body" style="margin-top: 16px;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p style="margin-top: 12px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p style="margin-top: 12px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div class="lex-modal__footer">
        <button class="lex-button lex-button--secondary lex-button--sm">Decline</button>
        <button class="lex-button lex-button--primary lex-button--sm">Accept</button>
      </div>
    </div>
  </div>
</div>

## Features

- **Focus trapping** -- focus cycles within the modal when open. The first focusable element receives focus on mount.
- **Escape to close** -- pressing `Escape` fires the close handler.
- **Overlay dismiss** -- clicking the backdrop closes the modal (can be disabled).
- **Sizes** -- four width presets from compact (400 px) to full-screen.
- **Scroll lock** -- page scroll is disabled while the modal is open.

## Sizes

| Size | Max width | Use case |
| --- | --- | --- |
| `sm` | 400 px | Confirmations, simple alerts |
| `md` | 560 px | Forms, detail views |
| `lg` | 720 px | Long content, terms, multi-step |
| `full` | `calc(100vw - 48px)` | Media viewers, complex editors |

## Variants

| Variant | Description |
| --- | --- |
| Confirmation | Short message with confirm/cancel actions |
| Form | Contains input fields and a submit action |
| Scrollable | Fixed header/footer with scrollable body |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Whether the modal is visible |
| `onClose` | `() => void` | -- | Called on escape press or overlay click |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Dialog width |
| `title` | `string` | -- | Modal title |
| `description` | `string` | -- | Supporting text below the title |
| `closeOnOverlay` | `boolean` | `true` | Whether clicking the overlay closes the modal |
| `showClose` | `boolean` | `true` | Show the close (X) button |
| `className` | `string` | -- | Additional CSS classes on the dialog |
| `children` | `React.ReactNode` | -- | Modal body content |
| `footer` | `React.ReactNode` | -- | Footer content (typically action buttons) |

## Code example

### React

```tsx
import { useState } from 'react';
import { Modal, Button } from '@thepace/lexicon/components';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete project</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="sm"
        title="Delete project?"
        description="This action cannot be undone. All data will be permanently removed."
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
```

### Vanilla HTML

```html
<div class="lex-modal-overlay" role="presentation">
  <div class="lex-modal lex-modal--sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="lex-modal__close" aria-label="Close">&times;</button>
    <h2 id="modal-title" class="lex-modal__title">Delete project?</h2>
    <p class="lex-modal__description">This action cannot be undone.</p>
    <div class="lex-modal__body">
      <!-- content -->
    </div>
    <div class="lex-modal__footer">
      <button class="lex-button lex-button--secondary">Cancel</button>
      <button class="lex-button lex-button--danger">Delete</button>
    </div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-modal-overlay` | Full-screen backdrop |
| `.lex-modal` | Dialog container |
| `.lex-modal--sm` | Small size (400 px) |
| `.lex-modal--md` | Medium size (560 px) |
| `.lex-modal--lg` | Large size (720 px) |
| `.lex-modal--full` | Full-screen size |
| `.lex-modal__close` | Close button |
| `.lex-modal__title` | Title text |
| `.lex-modal__description` | Description text |
| `.lex-modal__body` | Body content area |
| `.lex-modal__footer` | Footer with actions |

## Accessibility

- The dialog uses `role="dialog"` and `aria-modal="true"`.
- `aria-labelledby` points to the title element.
- If `description` is provided, `aria-describedby` points to it.
- Focus is trapped inside the modal while open.
- When the modal closes, focus returns to the element that triggered it.
- The close button has `aria-label="Close"`.
- The overlay receives `role="presentation"` so it is not announced by screen readers.
- Body scroll is locked while the modal is open.

## Guidelines

::: tip Do
- Use the smallest size that fits your content.
- Always provide a clear close mechanism (X button, Cancel, Escape).
- Use confirmation dialogs for destructive actions.
:::

::: danger Don't
- Don't stack modals on top of modals.
- Don't use modals for simple, inline interactions — use a popover instead.
- Don't auto-open modals on page load unless absolutely necessary.
:::
