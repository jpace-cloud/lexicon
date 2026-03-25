# Changelog

All notable changes to Lexicon are documented here.

## v1.0.0

**2026-03-25** -- Initial release.

### Added

- **419 design tokens** across three layers: primitive, semantic, and component.
- **Primitive tokens**: colour scales (purple 50--900, grey 50--950, ink, status), typography (3 font families, 11 sizes, 4 weights, 4 line heights, 5 letter spacings), spacing (14-step base-4 scale), border radius (7 steps), shadows (5 elevations + 2 glow variants), and motion (5 durations, 5 easings, 4 prebuilt transitions).
- **Semantic tokens**: background, text, border, and interactive colour mappings. Typography presets for heading, body, label, and code. Elevation levels 0--4.
- **Component tokens**: per-component design decisions for all 10 primitives.
- **10 primitive React components**: Button, Input, Card, Badge, Table, Modal, Tooltip, Avatar, Tabs, and Toggle. Full TypeScript types. Accessible by default.
- **CSS output**: `lexicon.css` (tokens + component classes), `lexicon-bundle.css` (includes reset), and minified variants.
- **Tailwind CSS preset**: extends colours, fonts, spacing, radii, shadows, durations, and easing.
- **Build pipeline**: `build-tokens.js` (JSON to CSS), `build-css.js` (bundle generation), `validate-tokens.js` (reference integrity checks).
- **VitePress documentation site** at [lexicon.thepace.io](https://lexicon.thepace.io).
