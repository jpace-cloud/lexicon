# Command Palette

A full-screen overlay with a search input for quickly finding and executing commands, navigating pages, or searching content. Activated with `⌘K` (Mac) or `Ctrl+K` (Windows).

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-command-preview">
    <div class="lex-command-palette">
      <div class="lex-command__input-wrapper">
        <svg class="lex-command__search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><line x1="12" y1="12" x2="16" y2="16"/></svg>
        <input class="lex-command__input" type="text" placeholder="Type a command or search..." value="" readonly />
        <span class="lex-command__kbd">ESC</span>
      </div>
      <div class="lex-command__group">
        <div class="lex-command__group-label">Actions</div>
        <div class="lex-command__item lex-command__item--active">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 8h8"/><path d="M8 4v8"/></svg>
          <span class="lex-command__item-label">Create new project</span>
          <span class="lex-command__item-shortcut">⌘N</span>
        </div>
        <div class="lex-command__item">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><line x1="12" y1="12" x2="16" y2="16"/></svg>
          <span class="lex-command__item-label">Search projects</span>
          <span class="lex-command__item-shortcut">⌘F</span>
        </div>
        <div class="lex-command__item">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4M2 4h12"/></svg>
          <span class="lex-command__item-label">Import from file</span>
        </div>
      </div>
      <div class="lex-command__group">
        <div class="lex-command__group-label">Navigation</div>
        <div class="lex-command__item">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 8l5-5 5 5"/><path d="M4 7v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7"/></svg>
          <span class="lex-command__item-label">Go to Dashboard</span>
          <span class="lex-command__item-shortcut">⌘1</span>
        </div>
        <div class="lex-command__item">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="5" r="3"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5"/></svg>
          <span class="lex-command__item-label">Go to Team</span>
          <span class="lex-command__item-shortcut">⌘2</span>
        </div>
        <div class="lex-command__item">
          <svg class="lex-command__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13.5 5.5L8 2 2.5 5.5v5L8 14l5.5-3.5z"/></svg>
          <span class="lex-command__item-label">Go to Settings</span>
          <span class="lex-command__item-shortcut">⌘,</span>
        </div>
      </div>
    </div>
  </div>
</div>

### Empty state

<div class="component-preview component-preview--col">
  <div style="background: var(--modal-dialog-bg); border: 1px solid var(--modal-dialog-border); border-radius: 12px; box-shadow: var(--modal-dialog-shadow); max-width: 560px; width: 100%; overflow: hidden; font-family: var(--vp-font-family-base);">
    <div class="lex-command__input-wrapper">
      <svg class="lex-command__search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><line x1="12" y1="12" x2="16" y2="16"/></svg>
      <input class="lex-command__input" type="text" placeholder="Type a command or search..." value="xyzfoo" readonly />
      <span class="lex-command__kbd">ESC</span>
    </div>
    <div class="lex-command__empty">No results found for "xyzfoo"</div>
  </div>
</div>

## Features

- **Search filtering** -- items are filtered in real-time as the user types.
- **Category grouping** -- commands grouped by type (Actions, Navigation, etc.).
- **Keyboard navigation** -- Arrow keys move focus, `Enter` selects, `Escape` closes.
- **Shortcuts** -- displays keyboard shortcuts for each command.
- **Empty state** -- friendly message when no results match.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Whether the palette is visible |
| `onClose` | `() => void` | -- | Close handler |
| `commands` | `CommandGroup[]` | -- | Grouped command items |
| `onSelect` | `(command: string) => void` | -- | Command execution handler |
| `placeholder` | `string` | `'Type a command or search...'` | Input placeholder |

### CommandGroup

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Group heading |
| `items` | `CommandItem[]` | Commands in this group |

### CommandItem

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Command name |
| `value` | `string` | Command identifier |
| `icon` | `ReactNode` | Leading icon |
| `shortcut` | `string` | Keyboard shortcut |

## Code example

### React

```tsx
import { CommandPalette } from '@thepace/lexicon/components';

<CommandPalette
  open={isOpen}
  onClose={() => setOpen(false)}
  commands={[
    {
      label: 'Actions',
      items: [
        { label: 'Create new project', value: 'new', shortcut: '⌘N' },
        { label: 'Search projects', value: 'search', shortcut: '⌘F' },
      ],
    },
    {
      label: 'Navigation',
      items: [
        { label: 'Go to Dashboard', value: 'dashboard', shortcut: '⌘1' },
        { label: 'Go to Settings', value: 'settings', shortcut: '⌘,' },
      ],
    },
  ]}
  onSelect={executeCommand}
/>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-command-palette` | Main container |
| `.lex-command__input-wrapper` | Search input row |
| `.lex-command__search-icon` | Search icon |
| `.lex-command__input` | Text input |
| `.lex-command__kbd` | Keyboard hint badge |
| `.lex-command__group` | Command group |
| `.lex-command__group-label` | Group heading |
| `.lex-command__item` | Command item |
| `.lex-command__item--active` | Highlighted item |
| `.lex-command__item-icon` | Item icon |
| `.lex-command__item-label` | Item text |
| `.lex-command__item-shortcut` | Shortcut hint |
| `.lex-command__empty` | No-results message |

## Accessibility

- Uses `role="dialog"` with `aria-modal="true"`.
- The search input has `role="combobox"` with `aria-autocomplete="list"`.
- The results list uses `role="listbox"` and items use `role="option"`.
- Active item is indicated with `aria-selected="true"`.
- `Escape` closes the palette.
- Focus returns to the element that triggered the palette on close.

## Guidelines

::: tip Do
- Register `⌘K` / `Ctrl+K` globally for quick access.
- Group commands by category for scanability.
- Show keyboard shortcuts for frequently-used commands.
:::

::: danger Don't
- Don't put more than 20–30 commands — use search filtering to manage large lists.
- Don't use as a replacement for navigation — it supplements it.
- Don't include commands that require additional context or parameters.
:::
