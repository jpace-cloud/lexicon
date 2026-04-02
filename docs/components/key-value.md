# Key-Value Pair

A two-column layout for displaying labelled data. Use for detail views, settings panels, and metadata displays.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-kv">
    <div class="lex-kv__row">
      <span class="lex-kv__key">Name</span>
      <span class="lex-kv__value">Alice Martin</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Email</span>
      <span class="lex-kv__value">alice@thepace.io</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Role</span>
      <span class="lex-kv__value">Engineer</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Status</span>
      <span class="lex-kv__value"><span class="lex-badge lex-badge--success lex-badge--dot">Active</span></span>
    </div>
  </div>
</div>

### Striped variant

<div class="component-preview component-preview--col">
  <div class="lex-kv lex-kv--striped">
    <div class="lex-kv__row">
      <span class="lex-kv__key">Plan</span>
      <span class="lex-kv__value">Pro</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Billing</span>
      <span class="lex-kv__value">Annual</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Next invoice</span>
      <span class="lex-kv__value">1 May 2026</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Amount</span>
      <span class="lex-kv__value">$199.00</span>
    </div>
  </div>
</div>

### Horizontal layout

<div class="component-preview">
  <div class="lex-kv lex-kv--horizontal">
    <div class="lex-kv__row">
      <span class="lex-kv__key">Created</span>
      <span class="lex-kv__value">12 Mar 2026</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Updated</span>
      <span class="lex-kv__value">28 Mar 2026</span>
    </div>
    <div class="lex-kv__row">
      <span class="lex-kv__key">Version</span>
      <span class="lex-kv__value">2.1.0</span>
    </div>
  </div>
</div>

## Variants

| Variant | Description |
| --- | --- |
| Default | Clean rows with a bottom divider |
| Striped | Alternating row backgrounds for easier scanning |
| Horizontal | Side-by-side layout for compact metadata |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'striped' \| 'horizontal'` | `'default'` | Layout variant |
| `items` | `{ key: string; value: ReactNode }[]` | -- | Data pairs |

## Code example

### React

```tsx
import { KeyValue } from '@thepace/lexicon/components';

<KeyValue
  items={[
    { key: 'Name', value: 'Alice Martin' },
    { key: 'Email', value: 'alice@thepace.io' },
    { key: 'Role', value: 'Engineer' },
    { key: 'Status', value: <Badge variant="success" dot>Active</Badge> },
  ]}
/>
```

### Vanilla HTML

```html
<div class="lex-kv">
  <div class="lex-kv__row">
    <span class="lex-kv__key">Name</span>
    <span class="lex-kv__value">Alice Martin</span>
  </div>
  <div class="lex-kv__row">
    <span class="lex-kv__key">Email</span>
    <span class="lex-kv__value">alice@thepace.io</span>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-kv` | Container |
| `.lex-kv--striped` | Striped row backgrounds |
| `.lex-kv--horizontal` | Horizontal layout |
| `.lex-kv__row` | Key-value pair row |
| `.lex-kv__key` | Label text |
| `.lex-kv__value` | Value text |

## Accessibility

- Use `<dl>`, `<dt>`, `<dd>` for semantic description list markup when appropriate.
- Ensure sufficient colour contrast between keys and values.
- Values can contain any component (badges, links, etc.).

## Guidelines

::: tip Do
- Use for detail/profile views where a table is too heavy.
- Use the striped variant for long lists of key-value pairs.
- Use the horizontal variant for compact metadata like timestamps.
:::

::: danger Don't
- Don't use for comparing items side-by-side — use a Table.
- Don't mix layout variants in the same view.
:::
