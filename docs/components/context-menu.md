# Context Menu

A floating menu triggered by right-click (or long press on mobile). Displays contextual actions relevant to the clicked element.

## Preview

<div class="component-preview">
  <div class="lex-context-menu">
    <button class="lex-context-menu__item">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11.5 2.5l2 2-9 9H2.5v-2l9-9z"/></svg>
      <span class="lex-context-menu__label">Edit</span>
      <span class="lex-context-menu__shortcut">⌘E</span>
    </button>
    <button class="lex-context-menu__item">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M5 11H3.5A1.5 1.5 0 0 1 2 9.5V3.5A1.5 1.5 0 0 1 3.5 2h6A1.5 1.5 0 0 1 11 3.5V5"/></svg>
      <span class="lex-context-menu__label">Duplicate</span>
      <span class="lex-context-menu__shortcut">⌘D</span>
    </button>
    <button class="lex-context-menu__item">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 8h8"/><path d="M8 4v8"/></svg>
      <span class="lex-context-menu__label">Add to collection</span>
    </button>
    <div class="lex-context-menu__divider"></div>
    <button class="lex-context-menu__item">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4M2 4h12M5.5 4V2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V4"/></svg>
      <span class="lex-context-menu__label">Move to archive</span>
    </button>
    <button class="lex-context-menu__item lex-context-menu__item--disabled">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="5" width="10" height="8" rx="1"/><path d="M5 5V3.5a3 3 0 0 1 6 0V5"/></svg>
      <span class="lex-context-menu__label">Lock</span>
    </button>
    <div class="lex-context-menu__divider"></div>
    <button class="lex-context-menu__item lex-context-menu__item--danger">
      <svg class="lex-context-menu__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="4,6 5,14 11,14 12,6"/><line x1="3" y1="6" x2="13" y2="6"/><path d="M6 6V4a2 2 0 0 1 4 0v2"/></svg>
      <span class="lex-context-menu__label">Delete</span>
      <span class="lex-context-menu__shortcut">⌫</span>
    </button>
  </div>
</div>

## Item types

| Type | Appearance |
| --- | --- |
| Default | Standard item with optional icon and shortcut |
| With icon | Leading icon for identification |
| With shortcut | Right-aligned keyboard hint |
| Divider | Horizontal separator between groups |
| Disabled | Reduced opacity, non-interactive |
| Destructive | Red text and icon for dangerous actions |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `ContextMenuItem[]` | -- | Menu items |
| `onSelect` | `(value: string) => void` | -- | Item selection handler |

### ContextMenuItem

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Item text |
| `value` | `string` | Selection value |
| `icon` | `ReactNode` | Leading icon |
| `shortcut` | `string` | Keyboard shortcut |
| `danger` | `boolean` | Destructive styling |
| `disabled` | `boolean` | Disabled state |
| `divider` | `boolean` | Render as divider |

## Code example

### React

```tsx
import { ContextMenu, ContextMenuTrigger } from '@thepace/lexicon/components';

<ContextMenuTrigger>
  <div className="file-card">Right-click me</div>
  <ContextMenu
    items={[
      { label: 'Edit', value: 'edit', shortcut: '⌘E' },
      { label: 'Duplicate', value: 'duplicate', shortcut: '⌘D' },
      { divider: true },
      { label: 'Delete', value: 'delete', danger: true, shortcut: '⌫' },
    ]}
    onSelect={handleAction}
  />
</ContextMenuTrigger>
```

### Vanilla HTML

```html
<div class="lex-context-menu" role="menu">
  <button class="lex-context-menu__item" role="menuitem">
    <svg class="lex-context-menu__icon"><!-- icon --></svg>
    <span class="lex-context-menu__label">Edit</span>
    <span class="lex-context-menu__shortcut">⌘E</span>
  </button>
  <div class="lex-context-menu__divider" role="separator"></div>
  <button class="lex-context-menu__item lex-context-menu__item--danger" role="menuitem">
    <span class="lex-context-menu__label">Delete</span>
  </button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-context-menu` | Floating container |
| `.lex-context-menu__item` | Menu item |
| `.lex-context-menu__item--danger` | Destructive item |
| `.lex-context-menu__item--disabled` | Disabled item |
| `.lex-context-menu__icon` | Leading icon |
| `.lex-context-menu__label` | Item text |
| `.lex-context-menu__shortcut` | Keyboard hint |
| `.lex-context-menu__divider` | Section separator |

## Accessibility

- Container uses `role="menu"`.
- Items use `role="menuitem"`.
- Dividers use `role="separator"`.
- Arrow keys navigate items. `Home`/`End` jump to first/last.
- `Escape` closes the menu and returns focus to the trigger.
- Disabled items are skipped in keyboard navigation.

## Guidelines

::: tip Do
- Group related actions with dividers.
- Place destructive actions at the bottom, separated by a divider.
- Show keyboard shortcuts for power users.
:::

::: danger Don't
- Don't put more than 8–10 items — reorganise with sub-menus.
- Don't use context menus as the only way to access actions.
- Don't nest more than one level of sub-menus.
:::
