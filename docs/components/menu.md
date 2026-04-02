# Menu

A vertical dropdown list of actions or navigation options. Appears on trigger click and floats above page content.

## Preview

<div class="component-preview">
  <div class="lex-menu">
    <button class="lex-menu__item">
      <span class="lex-menu__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 5l-4 6-4-6"/></svg></span>
      <span class="lex-menu__label">Edit</span>
      <span class="lex-menu__shortcut">⌘E</span>
    </button>
    <button class="lex-menu__item">
      <span class="lex-menu__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="10" height="10" rx="2"/><path d="M3 7h10"/></svg></span>
      <span class="lex-menu__label">Duplicate</span>
      <span class="lex-menu__shortcut">⌘D</span>
    </button>
    <button class="lex-menu__item">
      <span class="lex-menu__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 8h8"/><path d="M8 4v8"/></svg></span>
      <span class="lex-menu__label">Share</span>
    </button>
    <div class="lex-menu__divider"></div>
    <button class="lex-menu__item lex-menu__item--disabled">
      <span class="lex-menu__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="5" width="10" height="8" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg></span>
      <span class="lex-menu__label">Archive</span>
    </button>
    <div class="lex-menu__divider"></div>
    <button class="lex-menu__item lex-menu__item--danger">
      <span class="lex-menu__icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="4,6 5,14 11,14 12,6"/><line x1="3" y1="6" x2="13" y2="6"/><path d="M6 6V4a2 2 0 0 1 4 0v2"/></svg></span>
      <span class="lex-menu__label">Delete</span>
      <span class="lex-menu__shortcut">⌫</span>
    </button>
  </div>
</div>

## Item types

| Type | Appearance |
| --- | --- |
| Default | Standard text with optional icon and shortcut |
| With icon | Leading icon for visual identification |
| With shortcut | Right-aligned keyboard shortcut hint |
| Divider | Horizontal line separating groups |
| Disabled | 50% opacity, no interaction |
| Destructive | Red text and icon for dangerous actions |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `MenuItem[]` | -- | Menu items array |
| `onSelect` | `(value: string) => void` | -- | Item selection handler |
| `align` | `'start' \| 'end'` | `'start'` | Alignment relative to trigger |

### MenuItem

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Item text |
| `value` | `string` | Selection value |
| `icon` | `ReactNode` | Leading icon |
| `shortcut` | `string` | Keyboard shortcut hint |
| `danger` | `boolean` | Destructive styling |
| `disabled` | `boolean` | Disables the item |
| `divider` | `boolean` | Renders a divider instead |

## Code example

### React

```tsx
import { Menu, MenuTrigger } from '@thepace/lexicon/components';

<MenuTrigger>
  <Button variant="secondary">Actions</Button>
  <Menu items={[
    { label: 'Edit', value: 'edit', shortcut: '⌘E' },
    { label: 'Duplicate', value: 'duplicate' },
    { divider: true },
    { label: 'Delete', value: 'delete', danger: true },
  ]} onSelect={handleAction} />
</MenuTrigger>
```

### Vanilla HTML

```html
<div class="lex-menu" role="menu">
  <button class="lex-menu__item" role="menuitem">
    <span class="lex-menu__label">Edit</span>
    <span class="lex-menu__shortcut">⌘E</span>
  </button>
  <div class="lex-menu__divider" role="separator"></div>
  <button class="lex-menu__item lex-menu__item--danger" role="menuitem">
    <span class="lex-menu__label">Delete</span>
  </button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-menu` | Floating container |
| `.lex-menu__item` | Menu item button |
| `.lex-menu__item--active` | Highlighted item |
| `.lex-menu__item--danger` | Destructive item (red) |
| `.lex-menu__item--disabled` | Disabled item |
| `.lex-menu__icon` | Leading icon |
| `.lex-menu__label` | Item text |
| `.lex-menu__shortcut` | Keyboard hint |
| `.lex-menu__divider` | Section separator |

## Accessibility

- Container uses `role="menu"`.
- Items use `role="menuitem"`.
- Dividers use `role="separator"`.
- Arrow keys navigate between items. Home/End jump to first/last.
- Escape closes the menu and returns focus to the trigger.
- Disabled items are skipped in keyboard navigation.

## Guidelines

::: tip Do
- Group related items with dividers.
- Place destructive actions at the bottom, separated by a divider.
- Show keyboard shortcuts for power users.
:::

::: danger Don't
- Don't put more than 10 items in a single menu — use sub-menus or reorganise.
- Don't mix navigation links and action items in the same menu.
:::
