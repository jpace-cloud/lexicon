<script setup lang="ts">
import { withBase, useData } from 'vitepress';
import { computed } from 'vue';

const { isDark } = useData();

interface LogoCategory {
  label: string;
  logos: { name: string; file: string }[];
}

const categories: LogoCategory[] = [
  {
    label: 'Direct integrations',
    logos: [
      { name: 'Tailwind CSS', file: 'tailwindcss.svg' },
      { name: 'Vanilla CSS', file: 'vanilla-css.svg' },
      { name: 'Storybook', file: 'storybook.svg' },
      { name: 'Figma', file: 'figma.svg' },
    ],
  },
  {
    label: 'Token-compatible platforms',
    logos: [
      { name: 'SwiftUI', file: 'swiftui.svg' },
      { name: 'Jetpack Compose', file: 'jetpack-compose.svg' },
      { name: 'CSS-in-JS', file: 'css-in-js.svg' },
      { name: 'Material UI', file: 'material-ui.svg' },
    ],
  },
  {
    label: 'Development tools',
    logos: [
      { name: 'VS Code', file: 'vs-code.svg' },
      { name: 'Cursor', file: 'cursor.svg' },
      { name: 'GitHub', file: 'github.svg' },
      { name: 'Xcode', file: 'xcode.svg' },
    ],
  },
];

function logoPath(file: string): string {
  const variant = isDark.value ? 'dark' : 'light';
  return withBase(`/logos/${variant}/${file}`);
}
</script>

<template>
  <div v-for="cat in categories" :key="cat.label" class="logo-category">
    <div class="logo-category-label">{{ cat.label }}</div>
    <div class="logo-grid">
      <img
        v-for="logo in cat.logos"
        :key="logo.file"
        :src="logoPath(logo.file)"
        :alt="logo.name"
      />
    </div>
  </div>
  <p style="font-size: 12px; color: var(--vp-c-text-3); margin-top: 16px;">
    Token-compatible platforms can consume Lexicon design tokens as raw values. Direct integration packages planned for v1.1.
  </p>
</template>
