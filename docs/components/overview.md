# Components

Lexicon components are token-driven, accessible, and framework-aware. Every component consumes design tokens through CSS custom properties, ships with full TypeScript types, and renders valid, semantic HTML.

## Primitives

| Component | Description | Key features |
| --- | --- | --- |
| [Button](/components/button) | Primary action trigger | 4 variants, 3 sizes, loading state, icon slots |
| [Icon Button](/components/icon-button) | Icon-only square button | 4 variants, 3 sizes, compact toolbar use |
| [FAB](/components/fab) | Floating action button | Circular, elevated, extended variant |
| [Button Group](/components/button-group) | Connected button row | Segmented control, active state |
| [Link Button](/components/link-button) | Link-styled button | Underline on hover, trailing icon |
| [Split Button](/components/split-button) | Action + dropdown trigger | Primary action with alternatives |
| [Input](/components/input) | Text entry field | Label, helper, error, icon slots |
| [Card](/components/card) | Content container | 3 variants, sub-components, clickable mode |
| [Badge](/components/badge) | Status indicator | 5 variants, dot mode, removable |
| [Table](/components/table) | Tabular data | Compound pattern, striped, density, sticky header |
| [Modal](/components/modal) | Dialog overlay | Focus trap, escape dismiss, 4 sizes |
| [Tooltip](/components/tooltip) | Contextual hint | 4 positions, configurable delay |
| [Avatar](/components/avatar) | User representation | Image, initials, fallback, status, groups |
| [Tabs](/components/tabs) | Content sections | 3 variants, keyboard navigation |
| [Toggle](/components/toggle) | On/off switch | Switch role, label position, 2 sizes |

## Usage patterns

### React

```tsx
import { Button, Card, Badge } from '@thepace/lexicon/components';
```

### Vanilla HTML

Every component has a corresponding CSS class prefixed with `lex-`:

```html
<button class="lex-button lex-button--primary lex-button--md">Save</button>
<div class="lex-card lex-card--elevated">Content</div>
<span class="lex-badge lex-badge--success">Active</span>
```

### Customisation

Override component tokens to restyle without touching markup:

```css
:root {
  --button-primary-bg: #2563EB;
  --button-primary-bg-hover: #1D4ED8;
  --card-default-radius: 20px;
}
```

## Pro components

Looking for DataTable, Charts, Dashboard layouts, and more? See [Pro components](/pro/components) for advanced primitives available with a Pro licence.
