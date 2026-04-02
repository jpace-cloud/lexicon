# Dropdown Menu

A trigger button with a floating list of actions or options. Used in toolbars, action menus, and "more options" (...) patterns.

## Preview

<div class="component-preview" style="padding-bottom: 200px;">
  <div class="lex-dropdown">
    <button class="lex-button lex-button--secondary lex-button--sm">
      Actions
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="margin-left: 4px;"><polyline points="4,5 7,8 10,5"/></svg>
    </button>
    <div class="lex-dropdown__panel">
      <button class="lex-dropdown__item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="color: var(--vp-c-text-3);"><path d="M11.5 2.5l2 2-9 9H2.5v-2l9-9z"/></svg>
        Edit
      </button>
      <button class="lex-dropdown__item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="color: var(--vp-c-text-3);"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M5 11H3.5A1.5 1.5 0 0 1 2 9.5V3.5A1.5 1.5 0 0 1 3.5 2h6A1.5 1.5 0 0 1 11 3.5V5"/></svg>
        Duplicate
      </button>
      <button class="lex-dropdown__item lex-dropdown__item--active">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="color: var(--vp-c-text-3);"><path d="M4 8h8"/><path d="M8 4v8"/></svg>
        Share
      </button>
      <div class="lex-dropdown__divider"></div>
      <button class="lex-dropdown__item lex-dropdown__item--danger" style="color: var(--color-status-error, #EF4444);">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="4,6 5,14 11,14 12,6"/><line x1="3" y1="6" x2="13" y2="6"/><path d="M6 6V4a2 2 0 0 1 4 0v2"/></svg>
        Delete
      </button>
    </div>
  </div>
</div>

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `DropdownItem[]` | -- | Menu items |
| `onSelect` | `(value: string) => void` | -- | Selection handler |
| `align` | `'start' \| 'end'` | `'start'` | Horizontal alignment |
| `trigger` | `React.ReactElement` | -- | Trigger button element |

### DropdownItem

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Item text |
| `value` | `string` | Selection value |
| `icon` | `ReactNode` | Leading icon |
| `danger` | `boolean` | Destructive styling |
| `disabled` | `boolean` | Disabled state |
| `divider` | `boolean` | Render as divider |
| `active` | `boolean` | Active/selected state |

## Code example

### React

```tsx
import { Dropdown, Button } from '@thepace/lexicon/components';

<Dropdown
  trigger={<Button variant="secondary" size="sm">Actions ▾</Button>}
  items={[
    { label: 'Edit', value: 'edit', icon: <EditIcon /> },
    { label: 'Duplicate', value: 'duplicate', icon: <CopyIcon /> },
    { divider: true },
    { label: 'Delete', value: 'delete', danger: true },
  ]}
  onSelect={handleAction}
/>
```

### Vanilla HTML

```html
<div class="lex-dropdown">
  <button class="lex-button lex-button--secondary lex-button--sm">Actions ▾</button>
  <div class="lex-dropdown__panel" role="menu">
    <button class="lex-dropdown__item" role="menuitem">Edit</button>
    <button class="lex-dropdown__item" role="menuitem">Duplicate</button>
    <div class="lex-dropdown__divider" role="separator"></div>
    <button class="lex-dropdown__item lex-dropdown__item--danger" role="menuitem">Delete</button>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-dropdown` | Wrapper container |
| `.lex-dropdown__panel` | Floating option list |
| `.lex-dropdown__item` | Menu item |
| `.lex-dropdown__item--active` | Active/selected item |
| `.lex-dropdown__item--danger` | Destructive item |
| `.lex-dropdown__divider` | Section separator |

## Accessibility

- Panel uses `role="menu"`, items use `role="menuitem"`.
- Arrow keys navigate items.
- `Enter` or `Space` selects an item.
- `Escape` closes the menu and returns focus to the trigger.
- Trigger uses `aria-haspopup="menu"` and `aria-expanded`.

## Guidelines

::: tip Do
- Use for "more actions" menus in toolbars and table rows.
- Keep the list under 8 items.
- Separate destructive actions with a divider.
:::

::: danger Don't
- Don't use a dropdown for navigation — use the Menu component instead.
- Don't use for form selection — use a Select input.
:::
