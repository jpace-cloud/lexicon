# Stepper

A horizontal or vertical step indicator for multi-step workflows. Shows completed, active, and upcoming steps.

## Preview

<div class="component-preview">
  <div class="lex-stepper">
    <div class="lex-stepper__step lex-stepper__step--completed">
      <div class="lex-stepper__circle">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3,7 6,10 11,4"/></svg>
      </div>
      <span class="lex-stepper__label">Account</span>
    </div>
    <div class="lex-stepper__connector lex-stepper__connector--completed"></div>
    <div class="lex-stepper__step lex-stepper__step--active">
      <div class="lex-stepper__circle">2</div>
      <span class="lex-stepper__label">Profile</span>
    </div>
    <div class="lex-stepper__connector"></div>
    <div class="lex-stepper__step">
      <div class="lex-stepper__circle">3</div>
      <span class="lex-stepper__label">Review</span>
    </div>
  </div>
</div>

### Vertical variant

<div class="component-preview">
  <div class="lex-stepper lex-stepper--vertical">
    <div class="lex-stepper__step lex-stepper__step--completed">
      <div class="lex-stepper__circle">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3,7 6,10 11,4"/></svg>
      </div>
      <span class="lex-stepper__label">Create account</span>
    </div>
    <div class="lex-stepper__connector lex-stepper__connector--completed"></div>
    <div class="lex-stepper__step lex-stepper__step--active">
      <div class="lex-stepper__circle">2</div>
      <span class="lex-stepper__label">Set up profile</span>
    </div>
    <div class="lex-stepper__connector"></div>
    <div class="lex-stepper__step">
      <div class="lex-stepper__circle">3</div>
      <span class="lex-stepper__label">Review and submit</span>
    </div>
  </div>
</div>

## Step states

| State | Circle | Label | Connector |
| --- | --- | --- | --- |
| Completed | Brand fill, white checkmark | Secondary text | Brand colour |
| Active | Brand border, brand text, glow | Bold primary text | Default border colour |
| Upcoming | Default border, muted number | Muted text | Default border colour |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | `{ label: string }[]` | -- | Step definitions |
| `activeStep` | `number` | `0` | Current step index (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |

## Code example

### React

```tsx
import { Stepper } from '@thepace/lexicon/components';

<Stepper
  steps={[
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Review' },
  ]}
  activeStep={1}
/>
```

### Vanilla HTML

```html
<div class="lex-stepper">
  <div class="lex-stepper__step lex-stepper__step--completed">
    <div class="lex-stepper__circle">✓</div>
    <span class="lex-stepper__label">Account</span>
  </div>
  <div class="lex-stepper__connector lex-stepper__connector--completed"></div>
  <div class="lex-stepper__step lex-stepper__step--active">
    <div class="lex-stepper__circle">2</div>
    <span class="lex-stepper__label">Profile</span>
  </div>
  <div class="lex-stepper__connector"></div>
  <div class="lex-stepper__step">
    <div class="lex-stepper__circle">3</div>
    <span class="lex-stepper__label">Review</span>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-stepper` | Container |
| `.lex-stepper--vertical` | Vertical layout |
| `.lex-stepper__step` | Individual step |
| `.lex-stepper__step--completed` | Completed state |
| `.lex-stepper__step--active` | Active state |
| `.lex-stepper__circle` | Step number/icon circle |
| `.lex-stepper__label` | Step label text |
| `.lex-stepper__connector` | Line between steps |
| `.lex-stepper__connector--completed` | Filled connector |

## Accessibility

- Use `role="list"` on the stepper and `role="listitem"` on each step.
- Active step has `aria-current="step"`.
- Completed steps include an `aria-label` like "Step 1: Account (completed)".
- The stepper is not navigable by default — use buttons for clickable steps.

## Guidelines

::: tip Do
- Keep steps to 3–5 for horizontal layouts.
- Use the vertical variant for more than 5 steps.
- Show clear labels describing each step's purpose.
:::

::: danger Don't
- Don't allow skipping ahead to incomplete steps without validation.
- Don't use a stepper for single-step flows.
:::
