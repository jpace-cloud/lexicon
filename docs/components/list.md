# List

A structured vertical list for displaying items with optional icons, secondary text, and actions.

## Preview

<div class="component-preview component-preview--col">
  <ul class="lex-list lex-list--bordered">
    <li class="lex-list__item">
      <svg class="lex-list__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12l-6-3-6 3z"/></svg>
      <div class="lex-list__content">
        <div class="lex-list__primary">Getting started guide</div>
        <div class="lex-list__secondary">Introduction to the design system</div>
      </div>
      <svg class="lex-list__action" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6,3 11,8 6,13"/></svg>
    </li>
    <li class="lex-list__item">
      <svg class="lex-list__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M3 8h14"/></svg>
      <div class="lex-list__content">
        <div class="lex-list__primary">Component library</div>
        <div class="lex-list__secondary">Browse all available components</div>
      </div>
      <svg class="lex-list__action" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6,3 11,8 6,13"/></svg>
    </li>
    <li class="lex-list__item">
      <svg class="lex-list__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="10" r="7"/><path d="M10 7v3l2 2"/></svg>
      <div class="lex-list__content">
        <div class="lex-list__primary">Changelog</div>
        <div class="lex-list__secondary">Recent updates and releases</div>
      </div>
      <svg class="lex-list__action" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6,3 11,8 6,13"/></svg>
    </li>
  </ul>
</div>

### Simple list (no border)

<div class="component-preview component-preview--col">
  <ul class="lex-list">
    <li class="lex-list__item">
      <div class="lex-list__content">
        <div class="lex-list__primary">Alice Martin</div>
      </div>
    </li>
    <li class="lex-list__item">
      <div class="lex-list__content">
        <div class="lex-list__primary">Bob Chen</div>
      </div>
    </li>
    <li class="lex-list__item">
      <div class="lex-list__content">
        <div class="lex-list__primary">Carol Davis</div>
      </div>
    </li>
  </ul>
</div>

## Anatomy

- **Icon** (optional) -- leading icon or avatar for visual context.
- **Content** -- primary text with optional secondary line.
- **Action** (optional) -- trailing icon or button (e.g. chevron, delete).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `bordered` | `boolean` | `false` | Wrap list in a visible border |
| `children` | `React.ReactNode` | -- | List items |

### List.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | -- | Leading icon |
| `primary` | `string` | -- | Primary text |
| `secondary` | `string` | -- | Secondary text |
| `action` | `ReactNode` | -- | Trailing action |
| `onClick` | `() => void` | -- | Click handler |

## Code example

### React

```tsx
import { List } from '@thepace/lexicon/components';

<List bordered>
  <List.Item
    icon={<BookmarkIcon />}
    primary="Getting started guide"
    secondary="Introduction to the design system"
    action={<ChevronRightIcon />}
    onClick={() => navigate('/start')}
  />
  <List.Item
    icon={<GridIcon />}
    primary="Component library"
    secondary="Browse all available components"
  />
</List>
```

### Vanilla HTML

```html
<ul class="lex-list lex-list--bordered">
  <li class="lex-list__item">
    <svg class="lex-list__icon"><!-- icon --></svg>
    <div class="lex-list__content">
      <div class="lex-list__primary">Getting started guide</div>
      <div class="lex-list__secondary">Introduction to the design system</div>
    </div>
    <svg class="lex-list__action"><!-- chevron --></svg>
  </li>
</ul>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-list` | Base list reset |
| `.lex-list--bordered` | Bordered container |
| `.lex-list__item` | List item row |
| `.lex-list__item--clickable` | Clickable item |
| `.lex-list__icon` | Leading icon |
| `.lex-list__content` | Text wrapper |
| `.lex-list__primary` | Primary text |
| `.lex-list__secondary` | Secondary text |
| `.lex-list__action` | Trailing action |

## Accessibility

- Use `<ul>` or `<ol>` for semantic list markup.
- Clickable items should use `role="button"` or be wrapped in `<a>` / `<button>`.
- Trailing actions need `aria-label` if icon-only.

## Guidelines

::: tip Do
- Use secondary text to add context without cluttering the primary label.
- Use the bordered variant when the list stands alone (not inside a card).
- Keep primary text concise — one line maximum.
:::

::: danger Don't
- Don't mix interactive and non-interactive items in the same list without clear visual distinction.
- Don't use a list for tabular data — use a Table instead.
:::
