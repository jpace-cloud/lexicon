# Timeline

A vertical timeline for displaying chronological events with status dots, titles, timestamps, and descriptions.

## Preview

<div class="component-preview component-preview--col">
  <div class="lex-timeline">
    <div class="lex-timeline__item lex-timeline__item--completed">
      <div class="lex-timeline__dot"></div>
      <div class="lex-timeline__title">Account created</div>
      <div class="lex-timeline__time">28 Mar 2026, 09:15</div>
      <div class="lex-timeline__body">User registered with email verification.</div>
    </div>
    <div class="lex-timeline__item lex-timeline__item--completed">
      <div class="lex-timeline__dot"></div>
      <div class="lex-timeline__title">Profile completed</div>
      <div class="lex-timeline__time">28 Mar 2026, 10:30</div>
      <div class="lex-timeline__body">Added avatar, bio, and team assignment.</div>
    </div>
    <div class="lex-timeline__item lex-timeline__item--active">
      <div class="lex-timeline__dot"></div>
      <div class="lex-timeline__title">First project created</div>
      <div class="lex-timeline__time">29 Mar 2026, 14:00</div>
      <div class="lex-timeline__body">Set up "Project Alpha" with three collaborators.</div>
    </div>
    <div class="lex-timeline__item">
      <div class="lex-timeline__dot"></div>
      <div class="lex-timeline__title">Invite team members</div>
      <div class="lex-timeline__time">Pending</div>
    </div>
  </div>
</div>

## Item states

| State | Dot style | Use case |
| --- | --- | --- |
| Default | Hollow, border only | Upcoming / pending events |
| Active | Brand colour fill | Current event |
| Completed | Green fill | Past events |

## Props

### Timeline

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | -- | Timeline items |

### Timeline.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | -- | Event title |
| `time` | `string` | -- | Timestamp or date |
| `status` | `'default' \| 'active' \| 'completed'` | `'default'` | Item state |
| `children` | `React.ReactNode` | -- | Event description |

## Code example

### React

```tsx
import { Timeline } from '@thepace/lexicon/components';

<Timeline>
  <Timeline.Item title="Account created" time="28 Mar 2026" status="completed">
    User registered with email verification.
  </Timeline.Item>
  <Timeline.Item title="Profile completed" time="28 Mar 2026" status="completed">
    Added avatar, bio, and team assignment.
  </Timeline.Item>
  <Timeline.Item title="First project" time="29 Mar 2026" status="active">
    Set up "Project Alpha" with three collaborators.
  </Timeline.Item>
  <Timeline.Item title="Invite team" time="Pending">
    Send invitations to remaining team members.
  </Timeline.Item>
</Timeline>
```

### Vanilla HTML

```html
<div class="lex-timeline">
  <div class="lex-timeline__item lex-timeline__item--completed">
    <div class="lex-timeline__dot"></div>
    <div class="lex-timeline__title">Account created</div>
    <div class="lex-timeline__time">28 Mar 2026, 09:15</div>
    <div class="lex-timeline__body">User registered with email verification.</div>
  </div>
  <div class="lex-timeline__item lex-timeline__item--active">
    <div class="lex-timeline__dot"></div>
    <div class="lex-timeline__title">First project</div>
    <div class="lex-timeline__time">29 Mar 2026</div>
  </div>
  <div class="lex-timeline__item">
    <div class="lex-timeline__dot"></div>
    <div class="lex-timeline__title">Invite team</div>
    <div class="lex-timeline__time">Pending</div>
  </div>
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-timeline` | Container with vertical line |
| `.lex-timeline__item` | Individual event |
| `.lex-timeline__item--active` | Current event (brand dot) |
| `.lex-timeline__item--completed` | Past event (green dot) |
| `.lex-timeline__dot` | Status circle |
| `.lex-timeline__title` | Event title |
| `.lex-timeline__time` | Timestamp |
| `.lex-timeline__body` | Event description |

## Accessibility

- Use `<ol>` with `role="list"` for ordered events.
- Status is conveyed by dot colour and can be reinforced with `aria-label` (e.g. "completed").
- Timestamps should use `<time datetime="...">` for machine-readable dates.

## Guidelines

::: tip Do
- Use for activity logs, onboarding flows, and event histories.
- Show the most recent or current event prominently with the active state.
- Keep descriptions brief — one or two sentences.
:::

::: danger Don't
- Don't use a timeline for steps that must be completed in order — use a Stepper instead.
- Don't show more than 10–15 items without pagination or lazy loading.
:::
