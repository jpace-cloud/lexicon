# Drawer

A panel that slides in from the edge of the screen. Used for navigation, detail views, or forms that don't require full-page context switches.

## Preview

### Right drawer

<div class="component-preview component-preview--col">
  <div class="lex-drawer-preview">
    <div class="lex-drawer lex-drawer--right">
      <div class="lex-drawer__header">
        <span class="lex-drawer__title">Project details</span>
        <button class="lex-drawer__close" aria-label="Close">&times;</button>
      </div>
      <div class="lex-drawer__body">
        <p>View and edit project information, team members, and settings.</p>
        <div style="margin-top: 16px;">
          <div class="lex-kv">
            <div class="lex-kv__row">
              <span class="lex-kv__key">Status</span>
              <span class="lex-kv__value"><span class="lex-badge lex-badge--success lex-badge--dot">Active</span></span>
            </div>
            <div class="lex-kv__row">
              <span class="lex-kv__key">Created</span>
              <span class="lex-kv__value">12 Mar 2026</span>
            </div>
            <div class="lex-kv__row">
              <span class="lex-kv__key">Members</span>
              <span class="lex-kv__value">5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lex-drawer__footer">
        <button class="lex-button lex-button--secondary lex-button--sm">Cancel</button>
        <button class="lex-button lex-button--primary lex-button--sm">Save</button>
      </div>
    </div>
  </div>
</div>

### Left drawer (navigation)

<div class="component-preview component-preview--col">
  <div class="lex-drawer-preview">
    <div class="lex-drawer lex-drawer--left">
      <div class="lex-drawer__header">
        <span class="lex-drawer__title">Navigation</span>
        <button class="lex-drawer__close" aria-label="Close">&times;</button>
      </div>
      <div class="lex-drawer__body" style="padding: 8px 0;">
        <div class="lex-sidebar-nav" style="border: none; border-radius: 0;">
          <a class="lex-sidebar-nav__item lex-sidebar-nav__item--active" href="#">Dashboard</a>
          <a class="lex-sidebar-nav__item" href="#">Projects</a>
          <a class="lex-sidebar-nav__item" href="#">Team</a>
          <a class="lex-sidebar-nav__item" href="#">Settings</a>
        </div>
      </div>
    </div>
  </div>
</div>

### Bottom drawer

<div class="component-preview component-preview--col">
  <div class="lex-drawer-preview" style="flex-direction: column;">
    <div class="lex-drawer lex-drawer--bottom">
      <div class="lex-drawer__header">
        <span class="lex-drawer__title">Filters</span>
        <button class="lex-drawer__close" aria-label="Close">&times;</button>
      </div>
      <div class="lex-drawer__body">
        <p>Select filters to refine your results. Bottom drawers are ideal for mobile filter panels.</p>
      </div>
    </div>
  </div>
</div>

## Positions

| Position | Description |
| --- | --- |
| `right` | Slides in from the right edge (default) |
| `left` | Slides in from the left edge |
| `bottom` | Slides up from the bottom edge |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Whether the drawer is visible |
| `onClose` | `() => void` | -- | Close handler |
| `position` | `'left' \| 'right' \| 'bottom'` | `'right'` | Slide-in direction |
| `title` | `string` | -- | Drawer title |
| `showClose` | `boolean` | `true` | Show close button |
| `closeOnOverlay` | `boolean` | `true` | Close on backdrop click |
| `children` | `React.ReactNode` | -- | Drawer body content |
| `footer` | `React.ReactNode` | -- | Footer actions |

## Code example

### React

```tsx
import { useState } from 'react';
import { Drawer, Button } from '@thepace/lexicon/components';

function DetailPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open details</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position="right"
        title="Project details"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" size="sm">Save</Button>
          </>
        }
      >
        <p>Project information and settings.</p>
      </Drawer>
    </>
  );
}
```

### Vanilla HTML

```html
<div class="lex-modal-overlay" role="presentation">
  <div class="lex-drawer lex-drawer--right" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
    <div class="lex-drawer__header">
      <span id="drawer-title" class="lex-drawer__title">Details</span>
      <button class="lex-drawer__close" aria-label="Close">&times;</button>
    </div>
    <div class="lex-drawer__body">
      <!-- content -->
    </div>
    <div class="lex-drawer__footer">
      <button class="lex-button lex-button--secondary">Cancel</button>
      <button class="lex-button lex-button--primary">Save</button>
    </div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-drawer` | Drawer panel |
| `.lex-drawer--right` | Right position |
| `.lex-drawer--left` | Left position |
| `.lex-drawer--bottom` | Bottom position |
| `.lex-drawer__header` | Header with title and close |
| `.lex-drawer__title` | Title text |
| `.lex-drawer__close` | Close button |
| `.lex-drawer__body` | Scrollable body content |
| `.lex-drawer__footer` | Footer with actions |

## Accessibility

- Uses `role="dialog"` and `aria-modal="true"`.
- Focus is trapped inside the drawer while open.
- `Escape` closes the drawer.
- Focus returns to the trigger element on close.
- Body scroll is locked while open.

## Guidelines

::: tip Do
- Use right drawers for detail panels and edit forms.
- Use left drawers for mobile navigation.
- Use bottom drawers for mobile filter panels.
:::

::: danger Don't
- Don't use a drawer when a modal would be more appropriate (confirmations, alerts).
- Don't open a drawer from a drawer — use navigation within the same drawer instead.
- Don't use the drawer for content that needs side-by-side comparison with the main page.
:::
