<script setup lang="ts">
import { withBase } from 'vitepress';

interface LogoCategory {
  label: string;
  logos: { name: string; file: string }[];
}

const categories: LogoCategory[] = [
  {
    label: 'CSS Frameworks',
    logos: [
      { name: 'Tailwind CSS', file: 'tailwindcss.svg' },
      { name: 'Vanilla CSS', file: 'vanilla-css.svg' },
      { name: 'CSS-in-JS', file: 'css-in-js.svg' },
      { name: 'Material UI', file: 'material-ui.svg' },
    ],
  },
  {
    label: 'Native Platforms',
    logos: [
      { name: 'SwiftUI', file: 'swiftui.svg' },
      { name: 'UIKit', file: 'uikit.svg' },
      { name: 'Jetpack Compose', file: 'jetpack-compose.svg' },
      { name: 'XML Layout', file: 'xml-layout.svg' },
    ],
  },
  {
    label: 'Design Tools',
    logos: [
      { name: 'Figma', file: 'figma.svg' },
      { name: 'Sketch', file: 'sketch.svg' },
      { name: 'Storybook', file: 'storybook.svg' },
    ],
  },
  {
    label: 'Development',
    logos: [
      { name: 'VS Code', file: 'vs-code.svg' },
      { name: 'Cursor', file: 'cursor.svg' },
      { name: 'GitHub', file: 'github.svg' },
      { name: 'GitLab', file: 'gitlab.svg' },
      { name: 'Xcode', file: 'xcode.svg' },
      { name: 'MCP Server', file: 'mcp-server.svg' },
    ],
  },
];
</script>

<template>
  <div v-for="cat in categories" :key="cat.label" class="logo-category">
    <div class="logo-category-label">{{ cat.label }}</div>
    <div class="logo-grid">
      <img
        v-for="logo in cat.logos"
        :key="logo.file"
        :src="withBase(`/logos/dark/${logo.file}`)"
        :alt="logo.name"
      />
    </div>
  </div>
</template>
