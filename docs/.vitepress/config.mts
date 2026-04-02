import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Lexicon',
  description: 'Design system for The Pace product family',
  base: '/lexicon/',
  head: [
    ['link', { rel: 'icon', href: '/lexicon/favicon.png', type: 'image/png' }],
    ['meta', { property: 'og:title', content: 'Lexicon — Design System' }],
    ['meta', { property: 'og:description', content: 'Tokens, components, and patterns for The Pace products' }],
    ['link', { rel: 'preconnect', href: 'https://api.fontshare.com' }],
    ['link', { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Lexicon',
    nav: [
      { text: 'Docs', link: '/start/' },
      { text: 'Components', link: '/components/overview' },
      { text: 'Playground', link: '/playground/' },
      { text: 'Pro', link: '/pro/' },
      { text: 'The Pace', link: 'https://thepace.io' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Quick start', link: '/start/' },
            { text: 'Installation', link: '/start/installation' },
          ],
        },
        {
          text: 'Tokens',
          items: [
            { text: 'Overview', link: '/tokens/overview' },
            { text: 'Colours', link: '/tokens/colors' },
            { text: 'Typography', link: '/tokens/typography' },
            { text: 'Spacing', link: '/tokens/spacing' },
            { text: 'Radii', link: '/tokens/radii' },
            { text: 'Shadows', link: '/tokens/shadows' },
            { text: 'Motion', link: '/tokens/motion' },
          ],
        },
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Button', link: '/components/button' },
            { text: 'Icon Button', link: '/components/icon-button' },
            { text: 'FAB', link: '/components/fab' },
            { text: 'Button Group', link: '/components/button-group' },
            { text: 'Link Button', link: '/components/link-button' },
            { text: 'Split Button', link: '/components/split-button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Select', link: '/components/select' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Toggle', link: '/components/toggle' },
            { text: 'Slider', link: '/components/slider' },
            { text: 'Search Input', link: '/components/search-input' },
            { text: 'Number Input', link: '/components/number-input' },
            { text: 'File Upload', link: '/components/file-upload' },
            { text: 'Card', link: '/components/card' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Table', link: '/components/table' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Tabs', link: '/components/tabs' },
          ],
        },
        {
          text: 'Integrations',
          items: [
            { text: 'Tailwind CSS', link: '/integrations/tailwind' },
            { text: 'React', link: '/integrations/react' },
            { text: 'Next.js', link: '/integrations/nextjs' },
            { text: 'Vanilla', link: '/integrations/vanilla' },
            { text: 'Figma', link: '/integrations/figma' },
          ],
        },
        {
          text: 'Pro',
          items: [
            { text: 'Overview', link: '/pro/' },
            { text: 'Advanced components', link: '/pro/components' },
            { text: 'Page templates', link: '/pro/templates' },
          ],
        },
        {
          text: 'About',
          items: [
            { text: 'About Lexicon', link: '/about/' },
            { text: 'Changelog', link: '/about/changelog' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jpace-cloud/lexicon' },
    ],
    footer: {
      message: 'Released under the MIT License. A product by <a href="https://thepace.io" target="_blank" rel="noopener">The Pace</a>.',
      copyright: '© 2026 The Pace',
    },
    search: {
      provider: 'local',
    },
  },
});
