# Modal

A dialog overlay with focus trapping, keyboard dismissal, and multiple size options.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-modal-preview">
    <div class="lex-modal-static">
      <div class="lex-modal__title">Delete project?</div>
      <p class="lex-modal__description">This action cannot be undone. All data will be permanently removed.</p>
      <div class="lex-modal__footer">
        <button class="lex-button lex-button--secondary lex-button--sm">Cancel</button>
        <button class="lex-button lex-button--danger lex-button--sm">Delete</button>
      </div>
    </div>
  </div>
</div>

## Features

- **Focus trapping** -- focus cycles within the modal when open. The first focusable element receives focus on mount.
- **Escape to close** -- pressing `Escape` fires the close handler.
- **Overlay dismiss** -- clicking the backdrop closes the modal (can be disabled).
- **Sizes** -- four width presets from compact (400 px) to full-screen.

## Sizes

| Size | Max width |
| --- | --- |
| `sm` | 400 px |
| `md` | 560 px |
| `lg` | 720 px |
| `full` | `calc(100vw - 48px)` |

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
| `.lex-modal--sm` | Small size |
| `.lex-modal--md` | Medium size (default) |
| `.lex-modal--lg` | Large size |
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
