import DefaultTheme from 'vitepress/theme';
import LogoGrid from './LogoGrid.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LogoGrid', LogoGrid);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  },
};
