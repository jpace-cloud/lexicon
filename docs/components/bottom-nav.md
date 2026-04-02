# Bottom Navigation

A mobile navigation bar fixed to the bottom of the viewport. Contains 3–5 icon + label items for primary app sections.

## Preview

<div class="component-preview">
  <div class="lex-bottom-nav">
    <button class="lex-bottom-nav__item lex-bottom-nav__item--active">
      <svg class="lex-bottom-nav__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 11l8-8 8 8"/><path d="M5 9v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9"/></svg>
      <span>Home</span>
    </button>
    <button class="lex-bottom-nav__item">
      <svg class="lex-bottom-nav__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="20" y2="20"/></svg>
      <span>Search</span>
    </button>
    <button class="lex-bottom-nav__item">
      <svg class="lex-bottom-nav__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 5h14M4 11h14M4 17h14"/></svg>
      <span>Library</span>
    </button>
    <button class="lex-bottom-nav__item">
      <svg class="lex-bottom-nav__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="8" r="4"/><path d="M4 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>
      <span>Profile</span>
    </button>
  </div>
</div>

## Anatomy

- 3–5 items, each with an icon and a short label.
- Active item uses brand colour for both icon and label.
- Inactive items use muted colour.
- Fixed to the viewport bottom in production.

## States

| State | Appearance |
| --- | --- |
| Default | Muted icon and label |
| Active | Brand colour icon and label |
| Hover | Text shifts toward primary colour |
| Focus | 2 px brand-purple ring |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ id: string; label: string; icon: ReactNode; href?: string }[]` | -- | Nav items |
| `activeId` | `string` | -- | Currently active item |
| `onSelect` | `(id: string) => void` | -- | Selection handler |

## Code example

### React

```tsx
import { BottomNav } from '@thepace/lexicon/components';

<BottomNav
  activeId="home"
  items={[
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'search', label: 'Search', icon: <SearchIcon /> },
    { id: 'library', label: 'Library', icon: <ListIcon /> },
    { id: 'profile', label: 'Profile', icon: <UserIcon /> },
  ]}
  onSelect={setActiveId}
/>
```

### Vanilla HTML

```html
<nav class="lex-bottom-nav" aria-label="Main navigation">
  <a class="lex-bottom-nav__item lex-bottom-nav__item--active"
     href="/" aria-current="page">
    <!-- icon -->
    <span>Home</span>
  </a>
  <a class="lex-bottom-nav__item" href="/search">
    <!-- icon -->
    <span>Search</span>
  </a>
</nav>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-bottom-nav` | Container bar |
| `.lex-bottom-nav__item` | Nav item |
| `.lex-bottom-nav__item--active` | Active state |
| `.lex-bottom-nav__icon` | Item icon |

## Accessibility

- Wrap in `<nav aria-label="Main navigation">`.
- Active item uses `aria-current="page"`.
- All items are keyboard-focusable.
- Labels should be visible — don't rely on icons alone.

## Guidelines

::: tip Do
- Limit to 3–5 items for the most important app sections.
- Use clear, short labels (one word if possible).
- Always show labels alongside icons.
:::

::: danger Don't
- Don't use for more than 5 items — overflow makes the bar unusable.
- Don't duplicate bottom nav items in a top navbar.
- Don't use on desktop — it's a mobile pattern.
:::
