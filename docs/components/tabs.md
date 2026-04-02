# Tabs

A compound tab component for organising content into switchable panels. Supports three visual variants and full keyboard navigation.

## Preview

### Underline variant

<div class="component-preview component-preview--col">
  <div class="lex-tabs">
    <div class="lex-tabs__list" role="tablist">
      <button class="lex-tabs__tab lex-tabs__tab--active" role="tab">General</button>
      <button class="lex-tabs__tab" role="tab">Security</button>
      <button class="lex-tabs__tab" role="tab">Billing</button>
      <button class="lex-tabs__tab" role="tab" disabled>API</button>
    </div>
    <div class="lex-tabs__panel" role="tabpanel">General settings content goes here.</div>
  </div>
</div>

## Variants

- **Underline** (default) -- a 2 px purple indicator bar below the active tab. Clean and minimal.
- **Pills** -- the active tab gets a muted purple background with rounded corners.
- **Enclosed** -- tabs sit inside a bordered container; the active tab has a raised surface.

## Compound pattern

| Part | Description |
| --- | --- |
| `Tabs` | Root provider. Manages active state. |
| `Tabs.List` | Horizontal bar containing the tab triggers. |
| `Tabs.Tab` | Individual tab trigger. |
| `Tabs.Panel` | Content panel linked to a tab. |

## Props

### Tabs

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `string` | -- | Initially active tab value |
| `value` | `string` | -- | Controlled active tab value |
| `onChange` | `(value: string) => void` | -- | Called when the active tab changes |
| `variant` | `'underline' \| 'pills' \| 'enclosed'` | `'underline'` | Visual style |
| `className` | `string` | -- | Additional CSS classes |

### Tabs.List

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | -- | Tab triggers |

### Tabs.Tab

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | -- | Unique identifier matching a panel |
| `disabled` | `boolean` | `false` | Disables this tab |
| `children` | `React.ReactNode` | -- | Tab label |

### Tabs.Panel

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | -- | Matches a Tab value |
| `children` | `React.ReactNode` | -- | Panel content |

## Code example

### React

```tsx
import { Tabs } from '@thepace/lexicon/components';

function SettingsPage() {
  return (
    <Tabs defaultValue="general" variant="underline">
      <Tabs.List>
        <Tabs.Tab value="general">General</Tabs.Tab>
        <Tabs.Tab value="security">Security</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Tab value="api" disabled>API</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="general">
        <p>General settings content.</p>
      </Tabs.Panel>
      <Tabs.Panel value="security">
        <p>Security settings content.</p>
      </Tabs.Panel>
      <Tabs.Panel value="billing">
        <p>Billing settings content.</p>
      </Tabs.Panel>
    </Tabs>
  );
}
```

### Vanilla HTML

```html
<div class="lex-tabs lex-tabs--underline">
  <div class="lex-tabs__list" role="tablist">
    <button class="lex-tabs__tab lex-tabs__tab--active" role="tab" aria-selected="true">
      General
    </button>
    <button class="lex-tabs__tab" role="tab" aria-selected="false">
      Security
    </button>
    <button class="lex-tabs__tab" role="tab" aria-selected="false">
      Billing
    </button>
    <button class="lex-tabs__tab" role="tab" aria-selected="false" disabled>
      API
    </button>
  </div>
  <div class="lex-tabs__panel" role="tabpanel">
    <p>General settings content.</p>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-tabs` | Root container |
| `.lex-tabs--underline` | Underline variant |
| `.lex-tabs--pills` | Pills variant |
| `.lex-tabs--enclosed` | Enclosed variant |
| `.lex-tabs__list` | Tab trigger bar |
| `.lex-tabs__tab` | Individual tab trigger |
| `.lex-tabs__tab--active` | Active tab |
| `.lex-tabs__panel` | Content panel |

## Accessibility

- Tab triggers use `role="tab"` with `aria-selected` state.
- The tab list uses `role="tablist"`.
- Panels use `role="tabpanel"` linked to their trigger via `aria-labelledby`.
- **Arrow keys** move focus between tabs. **Home** and **End** jump to the first and last tab.
- Only the active tab is in the tab order (`tabindex="0"`); inactive tabs have `tabindex="-1"`.
- Disabled tabs are skipped during keyboard navigation.
