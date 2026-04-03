# Next.js

Lexicon works with both the Next.js App Router and Pages Router. This guide covers the App Router setup (Next.js 13+).

## Setup

Clone or download the [Lexicon repository](https://github.com/jpace-cloud/lexicon), then copy the files you need into your project. At minimum, copy `css/lexicon.css` and the `components/` directory.

## Import CSS in your root layout

Add the Lexicon stylesheet to your root layout so tokens and component styles are available everywhere:

```tsx
// app/layout.tsx
import './lexicon.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Using components in Server Components

Lexicon components that do not require interactivity (Card, Badge, Avatar) can render in Server Components directly:

```tsx
// app/page.tsx (Server Component)
import { Card, Badge } from '@/lexicon/components';

export default function DashboardPage() {
  return (
    <Card variant="elevated">
      <Card.Header>
        Projects
        <Badge variant="info">12</Badge>
      </Card.Header>
      <p>Your recent projects will appear here.</p>
    </Card>
  );
}
```

## Using components in Client Components

Interactive components (Modal, Toggle, Tabs) manage state and need the `'use client'` directive:

```tsx
// app/settings/theme-toggle.tsx
'use client';

import { useState } from 'react';
import { Toggle } from '@/lexicon/components';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  return <Toggle checked={dark} onChange={setDark} label="Dark mode" />;
}
```

Then import it into a Server Component page:

```tsx
// app/settings/page.tsx
import { ThemeToggle } from './theme-toggle';

export default function SettingsPage() {
  return (
    <section>
      <h1>Settings</h1>
      <ThemeToggle />
    </section>
  );
}
```

## Tailwind + Next.js

If you also use Tailwind CSS with Next.js, add the Lexicon preset to your config:

```js
// tailwind.config.js
module.exports = {
  presets: [require('./lexicon-preset')],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
```

## Pages Router

For the Pages Router, import the CSS in `_app.tsx`:

```tsx
// pages/_app.tsx
import '../lexicon.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

Everything else works the same.
