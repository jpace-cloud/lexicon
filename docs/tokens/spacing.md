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

<div class="component-preview component-preview--col" style="gap: 4px;">
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-1</span>
    <div class="lex-spacing-bar" style="width: 4px;"></div>
    <span class="lex-spacing-value">4px / 0.25rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-2</span>
    <div class="lex-spacing-bar" style="width: 8px;"></div>
    <span class="lex-spacing-value">8px / 0.5rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-3</span>
    <div class="lex-spacing-bar" style="width: 12px;"></div>
    <span class="lex-spacing-value">12px / 0.75rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-4</span>
    <div class="lex-spacing-bar" style="width: 16px;"></div>
    <span class="lex-spacing-value">16px / 1rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-5</span>
    <div class="lex-spacing-bar" style="width: 20px;"></div>
    <span class="lex-spacing-value">20px / 1.25rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-6</span>
    <div class="lex-spacing-bar" style="width: 24px;"></div>
    <span class="lex-spacing-value">24px / 1.5rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-8</span>
    <div class="lex-spacing-bar" style="width: 32px;"></div>
    <span class="lex-spacing-value">32px / 2rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-10</span>
    <div class="lex-spacing-bar" style="width: 40px;"></div>
    <span class="lex-spacing-value">40px / 2.5rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-12</span>
    <div class="lex-spacing-bar" style="width: 48px;"></div>
    <span class="lex-spacing-value">48px / 3rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-16</span>
    <div class="lex-spacing-bar" style="width: 64px;"></div>
    <span class="lex-spacing-value">64px / 4rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-20</span>
    <div class="lex-spacing-bar" style="width: 80px;"></div>
    <span class="lex-spacing-value">80px / 5rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-24</span>
    <div class="lex-spacing-bar" style="width: 96px;"></div>
    <span class="lex-spacing-value">96px / 6rem</span>
  </div>
  <div class="lex-spacing-row">
    <span class="lex-spacing-label">--space-32</span>
    <div class="lex-spacing-bar" style="width: 128px;"></div>
    <span class="lex-spacing-value">128px / 8rem</span>
  </div>
</div>

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
