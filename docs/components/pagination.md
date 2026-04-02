# Pagination

Page number controls for navigating through paginated content. Includes previous/next buttons and numbered pages.

## Preview

<div class="component-preview">
  <nav class="lex-pagination" aria-label="Pagination">
    <button class="lex-pagination__btn" disabled aria-label="Previous page">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="10,3 5,8 10,13"/></svg>
    </button>
    <button class="lex-pagination__btn lex-pagination__btn--active" aria-current="page">1</button>
    <button class="lex-pagination__btn">2</button>
    <button class="lex-pagination__btn">3</button>
    <span class="lex-pagination__ellipsis">…</span>
    <button class="lex-pagination__btn">10</button>
    <button class="lex-pagination__btn" aria-label="Next page">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6,3 11,8 6,13"/></svg>
    </button>
  </nav>
</div>

### Middle page active

<div class="component-preview">
  <nav class="lex-pagination" aria-label="Pagination">
    <button class="lex-pagination__btn" aria-label="Previous page">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="10,3 5,8 10,13"/></svg>
    </button>
    <button class="lex-pagination__btn">1</button>
    <span class="lex-pagination__ellipsis">…</span>
    <button class="lex-pagination__btn">4</button>
    <button class="lex-pagination__btn lex-pagination__btn--active" aria-current="page">5</button>
    <button class="lex-pagination__btn">6</button>
    <span class="lex-pagination__ellipsis">…</span>
    <button class="lex-pagination__btn">10</button>
    <button class="lex-pagination__btn" aria-label="Next page">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6,3 11,8 6,13"/></svg>
    </button>
  </nav>
</div>

## States

| State | Appearance |
| --- | --- |
| Default | Bordered button with page number |
| Hover | Subtle background fill, stronger border |
| Active/Current | Brand colour fill, white text |
| Disabled | 40% opacity (prev on page 1, next on last) |
| Focus | 2 px brand-purple ring |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `page` | `number` | -- | Current page (1-indexed) |
| `totalPages` | `number` | -- | Total number of pages |
| `onChange` | `(page: number) => void` | -- | Page change handler |
| `siblingCount` | `number` | `1` | Pages shown around current page |
| `boundaryCount` | `number` | `1` | Pages shown at start/end |

## Code example

### React

```tsx
import { Pagination } from '@thepace/lexicon/components';

<Pagination page={5} totalPages={10} onChange={setPage} />
```

### Vanilla HTML

```html
<nav class="lex-pagination" aria-label="Pagination">
  <button class="lex-pagination__btn" aria-label="Previous page">‹</button>
  <button class="lex-pagination__btn lex-pagination__btn--active"
          aria-current="page">1</button>
  <button class="lex-pagination__btn">2</button>
  <span class="lex-pagination__ellipsis">…</span>
  <button class="lex-pagination__btn">10</button>
  <button class="lex-pagination__btn" aria-label="Next page">›</button>
</nav>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-pagination` | Container |
| `.lex-pagination__btn` | Page button |
| `.lex-pagination__btn--active` | Current page (filled) |
| `.lex-pagination__ellipsis` | Truncation indicator |

## Accessibility

- Wrap in `<nav aria-label="Pagination">`.
- Current page has `aria-current="page"`.
- Prev/Next buttons have `aria-label`.
- Disabled buttons on first/last page boundaries.

## Guidelines

::: tip Do
- Show ellipsis for large page counts with `siblingCount` and `boundaryCount`.
- Disable Prev on page 1 and Next on the last page.
:::

::: danger Don't
- Don't render all page numbers for large datasets — use ellipsis truncation.
- Don't use pagination for infinite scrolling content.
:::
