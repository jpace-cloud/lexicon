# Sidebar Navigation

A vertical navigation list with sections, icons, and active state indicators. Designed for app shells and dashboard layouts.

## Preview

<div class="component-preview">
  <nav class="lex-sidebar-nav" aria-label="Main navigation">
    <span class="lex-sidebar-nav__section">Workspace</span>
    <button class="lex-sidebar-nav__item lex-sidebar-nav__item--active">
      <svg class="lex-sidebar-nav__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="2" width="14" height="14" rx="2"/><line x1="2" y1="7" x2="16" y2="7"/><line x1="7" y1="7" x2="7" y2="16"/></svg>
      <span>Dashboard</span>
      <span class="lex-sidebar-nav__badge">3</span>
    </button>
    <button class="lex-sidebar-nav__item">
      <svg class="lex-sidebar-nav__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="12" height="12" rx="2"/><path d="M3 7h12"/></svg>
      <span>Projects</span>
    </button>
    <button class="lex-sidebar-nav__item">
      <svg class="lex-sidebar-nav__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="6" r="3"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>
      <span>Team</span>
    </button>
    <span class="lex-sidebar-nav__section">Settings</span>
    <button class="lex-sidebar-nav__item">
      <svg class="lex-sidebar-nav__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="9" r="3"/><path d="M9 2v2M9 14v2M2 9h2M14 9h2M4 4l1.4 1.4M12.6 12.6L14 14M4 14l1.4-1.4M12.6 5.4L14 4"/></svg>
      <span>Preferences</span>
    </button>
    <button class="lex-sidebar-nav__item">
      <svg class="lex-sidebar-nav__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="5" width="12" height="10" rx="1"/><path d="M6 5V3.5a3 3 0 0 1 6 0V5"/></svg>
      <span>Security</span>
    </button>
  </nav>
</div>

## Anatomy

- **Section header** — uppercase muted label grouping related items.
- **Item** — icon + label row, with optional badge count.
- **Active item** — left border accent, tinted background, brand colour.
- **Badge** — pill-shaped counter on the right side.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `NavItem[]` | -- | Navigation items |
| `activeId` | `string` | -- | Currently active item ID |
| `onSelect` | `(id: string) => void` | -- | Selection handler |

### NavItem

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier |
| `label` | `string` | Item text |
| `icon` | `ReactNode` | Leading icon |
| `badge` | `string \| number` | Counter badge |
| `section` | `string` | Section header (renders before item) |
| `children` | `NavItem[]` | Collapsible sub-items |

## Code example

### React

```tsx
import { SidebarNav } from '@thepace/lexicon/components';

<SidebarNav
  activeId="dashboard"
  items={[
    { section: 'Workspace' },
    { id: 'dashboard', label: 'Dashboard', icon: <GridIcon />, badge: 3 },
    { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
    { section: 'Settings' },
    { id: 'prefs', label: 'Preferences', icon: <SettingsIcon /> },
  ]}
  onSelect={setActiveId}
/>
```

### Vanilla HTML

```html
<nav class="lex-sidebar-nav" aria-label="Main navigation">
  <span class="lex-sidebar-nav__section">Workspace</span>
  <a class="lex-sidebar-nav__item lex-sidebar-nav__item--active"
     href="/dashboard" aria-current="page">
    <!-- icon -->
    <span>Dashboard</span>
    <span class="lex-sidebar-nav__badge">3</span>
  </a>
  <a class="lex-sidebar-nav__item" href="/projects">
    <!-- icon -->
    <span>Projects</span>
  </a>
</nav>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-sidebar-nav` | Container |
| `.lex-sidebar-nav__section` | Section header |
| `.lex-sidebar-nav__item` | Nav item |
| `.lex-sidebar-nav__item--active` | Active state |
| `.lex-sidebar-nav__icon` | Leading icon |
| `.lex-sidebar-nav__badge` | Counter badge |
| `.lex-sidebar-nav__chevron` | Collapsible indicator |

## Accessibility

- Wrap in `<nav aria-label="Main navigation">`.
- Active item uses `aria-current="page"`.
- Collapsible groups use `aria-expanded`.
- Keyboard: Tab navigates between items.

## Guidelines

::: tip Do
- Keep section groups to 3–7 items.
- Use badges sparingly — only for actionable counts.
- Highlight the active page with `aria-current="page"`.
:::

::: danger Don't
- Don't use more than 2 nesting levels.
- Don't duplicate the sidebar items in a top navbar.
:::
