# Figma

Lexicon tokens map 1:1 to Figma variables, ensuring design-to-code consistency. What you see in Figma is exactly what you get in the browser.

## Variable naming

Figma variables follow the same structure as the JSON token files and CSS custom properties:

| Figma variable | CSS custom property | Value |
| --- | --- | --- |
| `color/purple/500` | `--color-purple-500` | `#7C3AED` |
| `color/grey/900` | `--color-grey-900` | `#121316` |
| `spacing/4` | `--space-4` | `16` |
| `radii/lg` | `--radii-lg` | `12` |
| `shadow/md` | `--shadow-md` | (see shadow tokens) |

Semantic and component tokens follow the same convention:

| Figma variable | CSS custom property |
| --- | --- |
| `bg/primary` | `--bg-primary` |
| `text/secondary` | `--text-secondary` |
| `interactive/default` | `--interactive-default` |
| `button/primary/bg` | `--button-primary-bg` |

## Setting up the Figma library

1. Open the Lexicon Figma file (provided with your licence).
2. Go to **Assets** and click **Team Library** to publish it.
3. In any other Figma file, enable the Lexicon library from the **Assets** panel.
4. All components and styles will now appear in your asset browser.

For a detailed walkthrough, see the `FIGMA-SETUP.md` file in the repository root.

## Workflow

1. **Design** using Figma components and variables from the Lexicon library.
2. **Inspect** a frame in Figma -- variable names appear in the right panel.
3. **Translate** directly to CSS custom properties or Tailwind utilities. The naming is identical, so there is no lookup table to maintain.

## Design / code parity

Because tokens are generated from the same JSON source, changes flow in one direction:

```
tokens/*.json  ──build──>  CSS custom properties
                ──sync───>  Figma variables
```

When a token value changes, both outputs update together. There is no manual syncing.

## Pro Figma library

The free tier includes the token variable set. The **Pro** licence includes the complete Figma component library with:

- All 10 primitive components as Figma components with variant properties
- Auto-layout configurations matching CSS spacing tokens
- Light and dark mode via Figma variable modes
- Page templates for dashboards, settings, auth, and marketing

See [Pro overview](/pro/) for pricing and details.
