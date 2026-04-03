# React

Lexicon provides 10 React components with full TypeScript support. All components are token-driven and accessible by default.

## Setup

Clone or download the [Lexicon repository](https://github.com/jpace-cloud/lexicon), then copy the files you need into your project:

- `css/lexicon.css` — all tokens and component classes
- `components/` — React component source (TypeScript)

## Import the CSS

Import the Lexicon stylesheet once at the root of your application. This provides all CSS custom properties and component styles.

```tsx
// main.tsx or App.tsx
import './path/to/lexicon.css';
```

## Import components

Copy the `components/` directory into your project, then import from it:

```tsx
import { Button, Input, Card, Badge, Table, Modal, Tooltip, Avatar, Tabs, Toggle } from './lexicon/components';
```

Or import individual components:

```tsx
import { Button } from './lexicon/components/primitives/Button';
import { Card } from './lexicon/components/primitives/Card';
```

## TypeScript support

All component props are fully typed. Types are exported alongside the components:

```tsx
import type { ButtonProps, CardProps, ModalProps } from './lexicon/components';
```

Available type exports:

| Type | Component |
| --- | --- |
| `ButtonProps` | Button |
| `InputProps` | Input |
| `CardProps`, `CardHeaderProps`, `CardFooterProps`, `CardMediaProps` | Card |
| `BadgeProps` | Badge |
| `TableProps`, `TableHeaderProps`, `TableRowProps`, `TableCellProps`, `TableHeaderCellProps`, `TableDensity` | Table |
| `ModalProps` | Modal |
| `TooltipProps`, `TooltipPosition` | Tooltip |
| `AvatarProps`, `AvatarGroupProps`, `AvatarSize`, `AvatarShape`, `AvatarStatus` | Avatar |
| `TabsProps`, `TabsListProps`, `TabsTabProps`, `TabsPanelProps`, `TabsVariant` | Tabs |
| `ToggleProps` | Toggle |

## Tree-shaking

When importing individual components, bundlers like Vite, webpack, and esbuild will tree-shake unused components. The single entry point also supports tree-shaking via `sideEffects: false`.

## Minimal example

```tsx
import './lexicon.css';
import { Button, Card, Badge } from './lexicon/components';

export default function App() {
  return (
    <Card variant="elevated">
      <Card.Header>
        Dashboard
        <Badge variant="success" dot>Live</Badge>
      </Card.Header>
      <p>Your project is running smoothly.</p>
      <Card.Footer>
        <Button variant="primary">View details</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Forwarded props

All components forward standard HTML attributes to their root element. You can pass `id`, `data-*`, `aria-*`, event handlers, and any other valid attribute.

```tsx
<Button
  variant="primary"
  id="submit-btn"
  data-testid="submit"
  aria-label="Submit form"
  onClick={handleSubmit}
>
  Submit
</Button>
```
