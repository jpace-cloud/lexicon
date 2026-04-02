# Split Button

A two-part button that combines a primary action with a dropdown trigger for secondary options. Use when there is one default action and a small set of alternatives.

## Preview

<div class="component-preview">
  <div class="lex-split-button">
    <button class="lex-split-button__action">Save</button>
    <button class="lex-split-button__trigger" aria-label="More save options">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg>
    </button>
  </div>
</div>

### Use case example

<div class="component-preview">
  <div class="lex-split-button">
    <button class="lex-split-button__action">Merge pull request</button>
    <button class="lex-split-button__trigger" aria-label="More merge options">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4,6 8,10 12,6"/></svg>
    </button>
  </div>
</div>

## Behaviour

- The **action** portion triggers the default command.
- The **trigger** portion opens a dropdown menu with alternative actions.
- Both halves share the primary fill and are visually joined. A thin vertical divider separates them.
- Hover and active states apply independently to each half.

## States

| State | Appearance |
| --- | --- |
| Default | Both halves at resting primary fill |
| Hover (action) | Action half lightens |
| Hover (trigger) | Trigger half lightens |
| Focus | 2 px brand-purple ring around the entire split button |
| Active | Darker fill on the pressed half |
| Disabled | 50 % opacity on both halves, no interaction |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | -- | Primary action label |
| `onClick` | `() => void` | -- | Primary action handler |
| `disabled` | `boolean` | `false` | Disables both halves |
| `menuItems` | `{ label: string; onClick: () => void }[]` | -- | Dropdown options |
| `className` | `string` | -- | Additional CSS classes |

## Code example

### React

```tsx
import { SplitButton } from '@thepace/lexicon/components';

<SplitButton
  label="Save"
  onClick={handleSave}
  menuItems={[
    { label: 'Save as draft', onClick: handleSaveDraft },
    { label: 'Save and publish', onClick: handlePublish },
  ]}
/>
```

### Vanilla HTML

```html
<div class="lex-split-button">
  <button class="lex-split-button__action">Save</button>
  <button class="lex-split-button__trigger" aria-label="More options">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <polyline points="4,6 8,10 12,6"/>
    </svg>
  </button>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-split-button` | Container — joins both halves |
| `.lex-split-button__action` | Primary action half |
| `.lex-split-button__trigger` | Dropdown trigger half |

## Accessibility

- The action button receives the visible label.
- The trigger button requires `aria-label` (e.g. "More options") and `aria-haspopup="menu"`.
- When the dropdown is open, `aria-expanded="true"` is set on the trigger.
- Keyboard: Enter/Space activates the focused half. Arrow Down on the trigger opens the menu.

## Guidelines

::: tip Do
- Use when there is a clear default action with 2–4 alternatives.
- Keep the primary label concise — the dropdown items can be longer.
:::

::: danger Don't
- Don't use when all options are equally likely — use a dropdown button or Button Group instead.
- Don't put destructive actions as the primary — place them in the dropdown with a danger style.
:::
