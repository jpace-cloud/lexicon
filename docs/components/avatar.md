# Avatar

Represents a user or entity with an image, initials, or a generic fallback icon. Supports status indicators and grouping.

## Preview

### Sizes and initials

<div class="component-preview">
  <div class="lex-avatar lex-avatar--xs"><span class="lex-avatar__initials">XS</span></div>
  <div class="lex-avatar lex-avatar--sm"><span class="lex-avatar__initials">SM</span></div>
  <div class="lex-avatar lex-avatar--md"><span class="lex-avatar__initials">MD</span></div>
  <div class="lex-avatar lex-avatar--lg"><span class="lex-avatar__initials">LG</span></div>
  <div class="lex-avatar lex-avatar--xl"><span class="lex-avatar__initials">XL</span></div>
</div>

### Status indicators

<div class="component-preview">
  <div class="lex-avatar lex-avatar--lg">
    <span class="lex-avatar__initials">AM</span>
    <span class="lex-avatar__status lex-avatar__status--online"></span>
  </div>
  <div class="lex-avatar lex-avatar--lg">
    <span class="lex-avatar__initials">BC</span>
    <span class="lex-avatar__status lex-avatar__status--busy"></span>
  </div>
  <div class="lex-avatar lex-avatar--lg">
    <span class="lex-avatar__initials">CD</span>
    <span class="lex-avatar__status lex-avatar__status--offline"></span>
  </div>
</div>

### Shapes and group

<div class="component-preview">
  <div class="lex-avatar lex-avatar--lg"><span class="lex-avatar__initials">CI</span></div>
  <div class="lex-avatar lex-avatar--lg lex-avatar--square"><span class="lex-avatar__initials">SQ</span></div>
  <div style="margin-left: 24px;" class="lex-avatar-group">
    <div class="lex-avatar lex-avatar--sm"><span class="lex-avatar__initials">A</span></div>
    <div class="lex-avatar lex-avatar--sm"><span class="lex-avatar__initials">B</span></div>
    <div class="lex-avatar lex-avatar--sm"><span class="lex-avatar__initials">C</span></div>
    <div class="lex-avatar lex-avatar--sm lex-avatar-group__counter"><span class="lex-avatar__initials">+3</span></div>
  </div>
</div>

## Display modes

1. **Image** -- renders the provided `src` as a circular (or square) image.
2. **Initials** -- when no image is available, renders up to two characters from the `name` prop.
3. **Fallback** -- when neither image nor name is provided, shows a generic user icon.

## Sizes

| Size | Dimensions | Font size |
| --- | --- | --- |
| `xs` | 24 px | 11 px |
| `sm` | 32 px | 13 px |
| `md` | 40 px | 14 px |
| `lg` | 48 px | 16 px |
| `xl` | 64 px | 20 px |

## Shapes

- **Circle** (default) -- `border-radius: full` (9999 px).
- **Square** -- `border-radius: md` (8 px).

## Status indicator

A small dot on the bottom-right corner of the avatar. Available statuses:

| Status | Colour |
| --- | --- |
| `online` | `#22C55E` (success) |
| `offline` | `#55575F` (grey-500) |
| `busy` | `#EF4444` (error) |

## AvatarGroup

Renders a stack of overlapping avatars with a `+N` counter for overflow.

## Props

### Avatar

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | -- | Image URL |
| `name` | `string` | -- | Full name (used for initials fallback and alt text) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar dimensions |
| `shape` | `'circle' \| 'square'` | `'circle'` | Border radius |
| `status` | `'online' \| 'offline' \| 'busy'` | -- | Status dot indicator |
| `className` | `string` | -- | Additional CSS classes |

### AvatarGroup

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `max` | `number` | -- | Maximum avatars to show before counter |
| `size` | `AvatarSize` | `'md'` | Size applied to all children |
| `children` | `React.ReactNode` | -- | Avatar elements |

## Code example

### React

```tsx
import { Avatar, AvatarGroup } from '@thepace/lexicon/components';

function TeamSection() {
  return (
    <>
      {/* Single avatar with image */}
      <Avatar src="/photos/alice.jpg" name="Alice Martin" size="lg" status="online" />

      {/* Initials fallback */}
      <Avatar name="Bob Chen" size="md" />

      {/* Generic fallback */}
      <Avatar size="sm" />

      {/* Square shape */}
      <Avatar src="/logos/acme.png" name="Acme Corp" shape="square" size="lg" />

      {/* Grouped avatars */}
      <AvatarGroup max={3} size="sm">
        <Avatar src="/photos/alice.jpg" name="Alice" />
        <Avatar src="/photos/bob.jpg" name="Bob" />
        <Avatar name="Carol Davis" />
        <Avatar name="Dan Evans" />
        <Avatar name="Eve Foster" />
      </AvatarGroup>
    </>
  );
}
```

### Vanilla HTML

```html
<div class="lex-avatar lex-avatar--lg lex-avatar--circle">
  <img src="/photos/alice.jpg" alt="Alice Martin" />
  <span class="lex-avatar__status lex-avatar__status--online"></span>
</div>

<div class="lex-avatar lex-avatar--md lex-avatar--circle">
  <span class="lex-avatar__initials">BC</span>
</div>

<div class="lex-avatar-group">
  <div class="lex-avatar lex-avatar--sm"><!-- ... --></div>
  <div class="lex-avatar lex-avatar--sm"><!-- ... --></div>
  <div class="lex-avatar lex-avatar--sm lex-avatar-group__counter">+3</div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-avatar` | Base avatar styles |
| `.lex-avatar--xs` through `--xl` | Size variants |
| `.lex-avatar--circle` | Circular shape (default) |
| `.lex-avatar--square` | Square shape |
| `.lex-avatar__initials` | Initials text |
| `.lex-avatar__status` | Status dot |
| `.lex-avatar__status--online` | Online status colour |
| `.lex-avatar__status--offline` | Offline status colour |
| `.lex-avatar__status--busy` | Busy status colour |
| `.lex-avatar-group` | Overlapping group layout |
| `.lex-avatar-group__counter` | Overflow counter |
