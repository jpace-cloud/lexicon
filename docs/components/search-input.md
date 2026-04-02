# Search Input

A text input with a search icon prefix and optional clear button. Designed for filtering, global search, and lookup patterns.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-search-input">
    <span class="lex-search-input__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
    </span>
    <input class="lex-input lex-input--md" placeholder="Search..." />
  </div>
  <div class="lex-search-input">
    <span class="lex-search-input__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
    </span>
    <input class="lex-input lex-input--md" value="design tokens" />
    <button class="lex-search-input__clear" aria-label="Clear search">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>
    </button>
  </div>
  <div class="lex-search-input">
    <span class="lex-search-input__icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
    </span>
    <input class="lex-input lex-input--md" placeholder="Search..." disabled />
  </div>
</div>

## Features

- Search magnifying glass icon in the left slot.
- Clear button appears when the field has a value.
- Matches standard Input sizing and token system.

## States

| State | Appearance |
| --- | --- |
| Empty | Search icon visible, placeholder text, no clear button |
| Typing | Value visible, clear button appears |
| Focus | Brand-purple border with focus shadow |
| Disabled | Reduced opacity, no interaction |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | -- | Search query |
| `onChange` | `(value: string) => void` | -- | Change handler |
| `onClear` | `() => void` | -- | Clear button handler |
| `placeholder` | `string` | `'Search...'` | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `disabled` | `boolean` | `false` | Disables the input |

## Code example

### React

```tsx
import { SearchInput } from '@thepace/lexicon/components';

<SearchInput
  value={query}
  onChange={setQuery}
  onClear={() => setQuery('')}
  placeholder="Search components..."
/>
```

### Vanilla HTML

```html
<div class="lex-search-input">
  <span class="lex-search-input__icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="7" cy="7" r="4"/>
      <line x1="10" y1="10" x2="14" y2="14"/>
    </svg>
  </span>
  <input class="lex-input lex-input--md" placeholder="Search..." />
  <button class="lex-search-input__clear" aria-label="Clear search">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="3" y1="3" x2="11" y2="11"/>
      <line x1="11" y1="3" x2="3" y2="11"/>
    </svg>
  </button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-search-input` | Wrapper container |
| `.lex-search-input__icon` | Search icon |
| `.lex-search-input__clear` | Clear button |

Uses standard `.lex-input` classes for the input field.

## Accessibility

- `role="search"` on the wrapper for landmark navigation.
- Clear button has `aria-label="Clear search"`.
- Keyboard: Escape clears the field (when implemented in JS).
- `type="search"` on the input provides browser-native clear behaviour.

## Guidelines

::: tip Do
- Show the clear button only when the field has a value.
- Debounce the `onChange` handler for live-filtering scenarios.
:::

::: danger Don't
- Don't use for form submissions — use a standard Input with a submit button.
- Don't auto-focus the search field on page load unless it's the primary interaction.
:::
