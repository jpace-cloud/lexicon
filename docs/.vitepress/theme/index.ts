import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  },
};
