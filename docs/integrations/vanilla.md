# Vanilla HTML / CSS / JS

Lexicon does not require React, Tailwind, or any build tool. Import the CSS file and use design tokens as CSS custom properties and component classes directly in your HTML.

## Load the stylesheet

Copy `css/lexicon.css` (or `css/lexicon-bundle.css` which includes the CSS reset) from the [Lexicon repository](https://github.com/jpace-cloud/lexicon) into your project:

```html
<link rel="stylesheet" href="path/to/lexicon.css" />
```

### Load fonts

```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
```

## Use CSS custom properties

Every token is available as a `var(--*)` reference:

```css
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

h1, h2, h3 {
  font-family: var(--font-family-heading);
  letter-spacing: var(--letter-spacing-tight);
}

.section {
  padding: var(--space-8) var(--space-6);
}
```

## Use component classes

All component classes are prefixed with `lex-`:

```html
<button class="lex-button lex-button--primary lex-button--md">
  Save
</button>

<div class="lex-card lex-card--elevated">
  <div class="lex-card__header">Dashboard</div>
  <div class="lex-card__body">
    <p>Welcome back.</p>
  </div>
</div>

<span class="lex-badge lex-badge--success lex-badge--dot">Active</span>

<div class="lex-input-wrapper">
  <label class="lex-input__label">Email</label>
  <input class="lex-input lex-input--md" type="email" placeholder="you@example.com" />
</div>
```

## Full page example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My App</title>
  <link rel="stylesheet" href="lexicon-bundle.css" />
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" />
  <style>
    body {
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-family-body);
      padding: var(--space-8);
    }
    h1 {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--space-4);
    }
  </style>
</head>
<body>
  <h1>Dashboard</h1>
  <div class="lex-card lex-card--default" style="max-width: 480px">
    <div class="lex-card__header">Status</div>
    <div class="lex-card__body">
      <p>Everything is running smoothly.</p>
      <span class="lex-badge lex-badge--success lex-badge--dot">All systems go</span>
    </div>
    <div class="lex-card__footer">
      <button class="lex-button lex-button--primary lex-button--md">View details</button>
    </div>
  </div>
</body>
</html>
```

## Customisation

Override any token at the `:root` level to rebrand without touching the source:

```css
:root {
  --color-purple-500: #6D28D9;
  --bg-primary: #0A0A0C;
  --radii-lg: 16px;
}
```
