# Table

A compound table component for displaying structured, tabular data with support for striped rows, adjustable density, and a sticky header.

## Preview

<div class="component-preview component-preview--col">
  <table class="lex-table lex-table--striped">
    <thead>
      <tr>
        <th class="lex-table__header-cell">Name</th>
        <th class="lex-table__header-cell">Role</th>
        <th class="lex-table__header-cell" style="text-align: right;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="lex-table__row">
        <td class="lex-table__cell">Alice Martin</td>
        <td class="lex-table__cell">Engineer</td>
        <td class="lex-table__cell" style="text-align: right;"><span class="lex-badge lex-badge--success lex-badge--dot">Active</span></td>
      </tr>
      <tr class="lex-table__row">
        <td class="lex-table__cell">Bob Chen</td>
        <td class="lex-table__cell">Designer</td>
        <td class="lex-table__cell" style="text-align: right;"><span class="lex-badge lex-badge--warning lex-badge--dot">Away</span></td>
      </tr>
      <tr class="lex-table__row">
        <td class="lex-table__cell">Carol Davis</td>
        <td class="lex-table__cell">Product</td>
        <td class="lex-table__cell" style="text-align: right;"><span class="lex-badge lex-badge--error lex-badge--dot">Offline</span></td>
      </tr>
    </tbody>
  </table>
</div>

## Compound pattern

Table uses a compound component pattern with five parts:

| Part | Element | Description |
| --- | --- | --- |
| `Table` | `<table>` | Root wrapper |
| `Table.Header` | `<thead>` | Table head section |
| `Table.Row` | `<tr>` | A table row |
| `Table.HeaderCell` | `<th>` | Header cell |
| `Table.Cell` | `<td>` | Data cell |

## Features

- **Striped** -- alternating row backgrounds for easier scanning.
- **Density** -- `compact`, `default`, or `comfortable` padding.
- **Sticky header** -- the header row stays fixed at the top of the scrollable container.

## Props

### Table

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `striped` | `boolean` | `false` | Alternating row backgrounds |
| `density` | `'compact' \| 'default' \| 'comfortable'` | `'default'` | Row padding density |
| `stickyHeader` | `boolean` | `false` | Fixes the header during scroll |
| `className` | `string` | -- | Additional CSS classes |
| `children` | `React.ReactNode` | -- | Table content |

### Table.Header

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | -- | Header row(s) |

### Table.Row

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onClick` | `() => void` | -- | Row click handler |
| `children` | `React.ReactNode` | -- | Cells |

### Table.HeaderCell / Table.Cell

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `width` | `string \| number` | -- | Column width |
| `children` | `React.ReactNode` | -- | Cell content |

## Density reference

| Density | Padding |
| --- | --- |
| `compact` | `8px 12px` |
| `default` | `12px 16px` |
| `comfortable` | `16px 20px` |

## Code example

### React

```tsx
import { Table } from '@thepace/lexicon/components';

function UserTable() {
  return (
    <Table striped stickyHeader>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell align="right">Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <tbody>
        <Table.Row>
          <Table.Cell>Alice Martin</Table.Cell>
          <Table.Cell>Engineer</Table.Cell>
          <Table.Cell align="right">Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Chen</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
          <Table.Cell align="right">Away</Table.Cell>
        </Table.Row>
      </tbody>
    </Table>
  );
}
```

### Vanilla HTML

```html
<table class="lex-table lex-table--striped lex-table--sticky-header">
  <thead class="lex-table__header">
    <tr class="lex-table__row">
      <th class="lex-table__header-cell">Name</th>
      <th class="lex-table__header-cell">Role</th>
      <th class="lex-table__header-cell" style="text-align: right">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="lex-table__row">
      <td class="lex-table__cell">Alice Martin</td>
      <td class="lex-table__cell">Engineer</td>
      <td class="lex-table__cell" style="text-align: right">Active</td>
    </tr>
  </tbody>
</table>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-table` | Base table styles |
| `.lex-table--striped` | Alternating row backgrounds |
| `.lex-table--compact` | Compact density |
| `.lex-table--comfortable` | Comfortable density |
| `.lex-table--sticky-header` | Sticky header |
| `.lex-table__header` | Table head |
| `.lex-table__row` | Table row |
| `.lex-table__header-cell` | Header cell |
| `.lex-table__cell` | Data cell |
