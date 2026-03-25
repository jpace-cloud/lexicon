# Spacing

Lexicon uses a base-4 spacing scale. Every value is a multiple of 4 px, providing a consistent rhythm across layouts, padding, margins, and gaps.

## Scale

| Token | CSS variable | Value |
| --- | --- | --- |
| `0` | `--space-0` | `0px` |
| `1` | `--space-1` | `4px` |
| `2` | `--space-2` | `8px` |
| `3` | `--space-3` | `12px` |
| `4` | `--space-4` | `16px` |
| `5` | `--space-5` | `20px` |
| `6` | `--space-6` | `24px` |
| `8` | `--space-8` | `32px` |
| `10` | `--space-10` | `40px` |
| `12` | `--space-12` | `48px` |
| `16` | `--space-16` | `64px` |
| `20` | `--space-20` | `80px` |
| `24` | `--space-24` | `96px` |
| `32` | `--space-32` | `128px` |

## Visual reference

```
--space-1   ████                          4px
--space-2   ████████                      8px
--space-3   ████████████                  12px
--space-4   ████████████████              16px
--space-5   ████████████████████          20px
--space-6   ████████████████████████      24px
--space-8   ████████████████████████████████  32px
```

## Usage

### CSS

```css
.card {
  padding: var(--space-6);        /* 24px */
  gap: var(--space-4);            /* 16px */
  margin-bottom: var(--space-8);  /* 32px */
}
```

### Tailwind

The Lexicon preset maps every spacing token to Tailwind's spacing scale, so standard utilities work out of the box:

```html
<div class="p-6 gap-4 mb-8">
  <!-- padding 24px, gap 16px, margin-bottom 32px -->
</div>
```

## Guidelines

- Use `--space-1` (4 px) for tight internal spacing like icon-to-label gaps.
- Use `--space-3` to `--space-4` (12--16 px) for standard component padding.
- Use `--space-6` to `--space-8` (24--32 px) for card padding and section gaps.
- Use `--space-12` and above (48 px+) for page-level section separation.
