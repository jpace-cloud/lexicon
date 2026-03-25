# Radii

Border-radius tokens control the roundness of elements. Lexicon provides seven steps from sharp corners to fully circular shapes.

## Scale

| Token | CSS variable | Value |
| --- | --- | --- |
| `none` | `--radii-none` | `0px` |
| `sm` | `--radii-sm` | `4px` |
| `md` | `--radii-md` | `8px` |
| `lg` | `--radii-lg` | `12px` |
| `xl` | `--radii-xl` | `16px` |
| `2xl` | `--radii-2xl` | `20px` |
| `full` | `--radii-full` | `9999px` |

## Visual reference

```
┌──────┐  none   (0px)    Sharp corners
╭──────╮  sm     (4px)    Subtle rounding
╭──────╮  md     (8px)    Default for inputs
╭──────╮  lg    (12px)    Default for buttons and cards
╭──────╮  xl    (16px)    Modals and large containers
╭──────╮  2xl   (20px)    Feature cards
(      )  full (9999px)   Pills, avatars, badges
```

## Usage

### CSS

```css
.card {
  border-radius: var(--radii-lg);   /* 12px */
}

.avatar {
  border-radius: var(--radii-full); /* 9999px — perfect circle */
}

.input {
  border-radius: var(--radii-md);   /* 8px */
}
```

### Tailwind

```html
<div class="rounded-lg">Card</div>
<img class="rounded-full" src="avatar.jpg" alt="" />
<input class="rounded-md" />
```

## Component defaults

| Component | Default radius |
| --- | --- |
| Button (primary, secondary, danger) | `lg` (12 px) |
| Button (ghost) | `md` (8 px) |
| Input | `md` (8 px) |
| Card | `lg` (12 px) |
| Badge | `full` (pill) |
| Modal | `xl` (16 px) |
| Tooltip | `md` (8 px) |
| Avatar | `full` (circle) |
| Tabs (pills) | `md` (8 px) |
| Toggle track | `full` (pill) |
