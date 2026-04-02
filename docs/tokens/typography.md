# Typography

Lexicon defines three font stacks, eleven size steps, four weights, four line heights, and five letter-spacing values. Semantic type presets combine these primitives into ready-to-use styles for headings, body, labels, and code.

## Font families

| Token | CSS variable | Stack |
| --- | --- | --- |
| `fontFamily.heading` | `--font-heading` | `'Satoshi Variable', -apple-system, BlinkMacSystemFont, sans-serif` |
| `fontFamily.body` | `--font-body` | `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif` |
| `fontFamily.mono` | `--font-mono` | `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace` |

Load Satoshi from [Fontshare](https://api.fontshare.com) and DM Sans / JetBrains Mono from Google Fonts. See [Installation](/start/installation) for the exact link tags.

### Font pairing specimen

<div class="component-preview component-preview--col" style="gap: 0;">
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 28px; font-weight: 600; line-height: 1.2;">Satoshi — The quick brown fox</div>
    <div class="lex-type-meta">Headings</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6;">DM Sans — The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</div>
    <div class="lex-type-meta">Body</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 400; line-height: 1.6;">JetBrains Mono — const x = 42;</div>
    <div class="lex-type-meta">Code</div>
  </div>
</div>

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

### Type scale specimen

<div class="component-preview component-preview--col" style="gap: 0;">
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 48px; font-weight: 700; line-height: 1.1; letter-spacing: -0.025em;">Display</div>
    <div class="lex-type-meta">48px / 700</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; letter-spacing: -0.025em;">Heading XL</div>
    <div class="lex-type-meta">36px / 700</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 28px; font-weight: 600; line-height: 1.2; letter-spacing: -0.025em;">Heading Large</div>
    <div class="lex-type-meta">28px / 600</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 20px; font-weight: 500; line-height: 1.5;">Heading Medium</div>
    <div class="lex-type-meta">20px / 500</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'Satoshi Variable', 'Satoshi', sans-serif; font-size: 18px; font-weight: 500; line-height: 1.5;">Heading Small</div>
    <div class="lex-type-meta">18px / 500</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6;">Body Large — The quick brown fox jumps over the lazy dog.</div>
    <div class="lex-type-meta">16px / 400</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 400; line-height: 1.6;">Body — The quick brown fox jumps over the lazy dog.</div>
    <div class="lex-type-meta">14px / 400</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; line-height: 1.5;">Body Small — The quick brown fox jumps over the lazy dog.</div>
    <div class="lex-type-meta">13px / 400</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; line-height: 1.5; text-transform: uppercase; letter-spacing: 0.05em;">Overline label</div>
    <div class="lex-type-meta">11px / 500 / upper</div>
  </div>
  <div class="lex-type-row">
    <div class="lex-type-sample" style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 400; line-height: 1.6;">const token = 'code.md';</div>
    <div class="lex-type-meta">13px / mono</div>
  </div>
</div>

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
