# Motion

Motion tokens define durations, easing curves, and prebuilt transitions. They ensure animations across the system feel consistent and intentional.

## Durations

| Token | CSS variable | Value |
| --- | --- | --- |
| `instant` | `--motion-duration-instant` | `0ms` |
| `fast` | `--motion-duration-fast` | `100ms` |
| `normal` | `--motion-duration-normal` | `200ms` |
| `slow` | `--motion-duration-slow` | `300ms` |
| `slower` | `--motion-duration-slower` | `500ms` |

Use `fast` for micro-interactions (hover colour changes, focus rings). Use `normal` for most transitions. Reserve `slow` and `slower` for larger layout shifts or entrance animations.

## Easing curves

| Token | CSS variable | Value |
| --- | --- | --- |
| `default` | `--motion-easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `in` | `--motion-easing-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `out` | `--motion-easing-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `in-out` | `--motion-easing-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `spring` | `--motion-easing-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |

- **default / in-out** -- standard ease for most transitions.
- **in** -- accelerating; use for elements leaving the viewport.
- **out** -- decelerating; use for elements entering the viewport.
- **spring** -- slight overshoot; use for playful interactions like toggle switches.

## Prebuilt transitions

These composite tokens combine a property, duration, and easing into a single value you can drop on `transition`.

| Token | CSS variable | Animates |
| --- | --- | --- |
| `colors` | `--motion-transition-colors` | `color`, `background-color`, `border-color` |
| `opacity` | `--motion-transition-opacity` | `opacity` |
| `transform` | `--motion-transition-transform` | `transform` |
| `all` | `--motion-transition-all` | All properties |

Each uses `--motion-duration-normal` (200 ms) and `--motion-easing-default` by default.

## Usage

### CSS

```css
.button {
  transition: var(--motion-transition-colors);
}

.button:hover {
  background-color: var(--interactive-hover);
}

.modal-overlay {
  transition: opacity var(--motion-duration-slow) var(--motion-easing-out);
}

.toggle-thumb {
  transition: transform var(--motion-duration-fast) var(--motion-easing-spring);
}
```

### Tailwind

```html
<button class="transition-colors duration-normal ease-default hover:bg-purple-400">
  Save
</button>
```

## Respecting user preferences

Always wrap non-essential animations in a `prefers-reduced-motion` query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0ms !important;
    animation-duration: 0ms !important;
  }
}
```

Lexicon components honour this media query internally.
