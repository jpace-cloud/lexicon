# Typography

Lexicon defines three font stacks, eleven size steps, four weights, four line heights, and five letter-spacing values. Semantic type presets combine these primitives into ready-to-use styles for headings, body, labels, and code.

## Font families

| Token | CSS variable | Stack |
| --- | --- | --- |
| `fontFamily.heading` | `--font-heading` | `'Satoshi Variable', -apple-system, BlinkMacSystemFont, sans-serif` |
| `fontFamily.body` | `--font-body` | `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif` |
| `fontFamily.mono` | `--font-mono` | `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace` |

Load Satoshi from [Fontshare](https://api.fontshare.com) and DM Sans / JetBrains Mono from Google Fonts. See [Installation](/start/installation) for the exact link tags.

## Font sizes

| Token | CSS variable | Value |
| --- | --- | --- |
| `fontSize.xs` | `--font-size-xs` | `11px` |
| `fontSize.sm` | `--font-size-sm` | `13px` |
| `fontSize.base` | `--font-size-base` | `14px` |
| `fontSize.md` | `--font-size-md` | `16px` |
| `fontSize.lg` | `--font-size-lg` | `18px` |
| `fontSize.xl` | `--font-size-xl` | `20px` |
| `fontSize.2xl` | `--font-size-2xl` | `24px` |
| `fontSize.3xl` | `--font-size-3xl` | `28px` |
| `fontSize.4xl` | `--font-size-4xl` | `36px` |
| `fontSize.5xl` | `--font-size-5xl` | `48px` |
| `fontSize.6xl` | `--font-size-6xl` | `64px` |

## Font weights

| Token | CSS variable | Value |
| --- | --- | --- |
| `fontWeight.regular` | `--font-weight-regular` | `400` |
| `fontWeight.medium` | `--font-weight-medium` | `500` |
| `fontWeight.semibold` | `--font-weight-semibold` | `600` |
| `fontWeight.bold` | `--font-weight-bold` | `700` |

## Line heights

| Token | CSS variable | Value |
| --- | --- | --- |
| `lineHeight.tight` | `--line-height-tight` | `1.2` |
| `lineHeight.normal` | `--line-height-normal` | `1.5` |
| `lineHeight.relaxed` | `--line-height-relaxed` | `1.6` |
| `lineHeight.loose` | `--line-height-loose` | `1.8` |

## Letter spacing

| Token | CSS variable | Value |
| --- | --- | --- |
| `letterSpacing.tight` | `--letter-spacing-tight` | `-0.025em` |
| `letterSpacing.normal` | `--letter-spacing-normal` | `0` |
| `letterSpacing.wide` | `--letter-spacing-wide` | `0.025em` |
| `letterSpacing.wider` | `--letter-spacing-wider` | `0.05em` |
| `letterSpacing.widest` | `--letter-spacing-widest` | `0.1em` |

## Semantic type presets

These presets combine family, size, weight, line height, and letter spacing into named roles.

### Headings (Satoshi)

| Preset | Size | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| `heading.xl` | 36 px | Bold (700) | 1.2 | -0.025 em |
| `heading.lg` | 28 px | Semibold (600) | 1.2 | -0.025 em |
| `heading.md` | 20 px | Medium (500) | 1.5 | -- |
| `heading.sm` | 18 px | Medium (500) | 1.5 | -- |

### Body (DM Sans)

| Preset | Size | Weight | Line height |
| --- | --- | --- | --- |
| `body.lg` | 16 px | Regular (400) | 1.6 |
| `body.md` | 14 px | Regular (400) | 1.6 |
| `body.sm` | 13 px | Regular (400) | 1.5 |

### Labels (DM Sans)

| Preset | Size | Weight | Line height | Extras |
| --- | --- | --- | --- | --- |
| `label.md` | 13 px | Medium (500) | 1.5 | -- |
| `label.sm` | 11 px | Medium (500) | 1.5 | uppercase, 0.05 em spacing |

### Code (JetBrains Mono)

| Preset | Size | Weight | Line height |
| --- | --- | --- | --- |
| `code.md` | 13 px | Regular (400) | 1.6 |

## Usage

### CSS

```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

p {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}
```

### Tailwind

```html
<h1 class="font-heading text-4xl font-bold leading-tight tracking-tight">
  Page title
</h1>
<p class="font-body text-base leading-relaxed">
  Body text in DM Sans.
</p>
```
