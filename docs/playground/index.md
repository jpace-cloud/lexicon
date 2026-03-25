# Playground

Experiment with Lexicon components and tokens interactively.

<div class="playground-wrapper">

## Button

<div class="playground-controls">
  <label>
    <span class="control-label">Variant</span>
    <select id="pg-variant" onchange="updatePlayground()">
      <option value="primary">Primary</option>
      <option value="secondary">Secondary</option>
      <option value="ghost">Ghost</option>
      <option value="danger">Danger</option>
    </select>
  </label>
  <label>
    <span class="control-label">Size</span>
    <select id="pg-size" onchange="updatePlayground()">
      <option value="sm">Small</option>
      <option value="md" selected>Medium</option>
      <option value="lg">Large</option>
    </select>
  </label>
  <label>
    <span class="control-label">Disabled</span>
    <input type="checkbox" id="pg-disabled" onchange="updatePlayground()" />
  </label>
</div>

<div class="component-preview" id="pg-preview">
  <button class="pg-button" data-variant="primary" data-size="md" id="pg-btn">Button</button>
</div>

<div class="playground-code">
  <button class="copy-btn" onclick="copyPlayground()">Copy</button>
  <pre id="pg-code">&lt;Button variant="primary" size="md"&gt;
  Button
&lt;/Button&gt;</pre>
</div>

## Token Explorer

Browse the colour palette used across all Lexicon components.

### Purple scale

<div class="token-grid">
  <div class="token-swatch" style="background: #F5F0FF;">purple-50</div>
  <div class="token-swatch" style="background: #EDE1FF;">purple-100</div>
  <div class="token-swatch" style="background: #D9CEFF;">purple-200</div>
  <div class="token-swatch" style="background: #C4B5FD;">purple-300</div>
  <div class="token-swatch" style="background: #A78BFA;">purple-400</div>
  <div class="token-swatch" style="background: #7C3AED; color: #fff;">purple-500</div>
  <div class="token-swatch" style="background: #5B21B6; color: #fff;">purple-600</div>
  <div class="token-swatch" style="background: #430F96; color: #fff;">purple-700</div>
  <div class="token-swatch" style="background: #1F1740; color: #fff;">purple-800</div>
  <div class="token-swatch" style="background: #19022B; color: #fff;">purple-900</div>
</div>

### Grey scale

<div class="token-grid">
  <div class="token-swatch" style="background: #F4F4F5;">grey-50</div>
  <div class="token-swatch" style="background: #E0E1E3;">grey-100</div>
  <div class="token-swatch" style="background: #C5C6CA;">grey-200</div>
  <div class="token-swatch" style="background: #9B9DA4;">grey-300</div>
  <div class="token-swatch" style="background: #71737B; color: #fff;">grey-400</div>
  <div class="token-swatch" style="background: #55575F; color: #fff;">grey-500</div>
  <div class="token-swatch" style="background: #3E4048; color: #fff;">grey-600</div>
  <div class="token-swatch" style="background: #35363C; color: #fff;">grey-700</div>
  <div class="token-swatch" style="background: #232428; color: #fff;">grey-800</div>
  <div class="token-swatch" style="background: #1A1B1F; color: #fff;">grey-850</div>
  <div class="token-swatch" style="background: #121316; color: #fff;">grey-900</div>
  <div class="token-swatch" style="background: #0C0C0F; color: #fff;">grey-950</div>
</div>

</div>

<style>
.playground-wrapper select,
.playground-wrapper input[type="checkbox"] {
  padding: 4px 10px;
  font-size: 13px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.playground-controls {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.playground-controls label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.control-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
}
.playground-code {
  position: relative;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  margin-top: 12px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  overflow-x: auto;
}
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 500;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-3);
  cursor: pointer;
}
.copy-btn:hover { color: var(--vp-c-text-1); }

/* Button preview styles */
.pg-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  transition: background-color 150ms, border-color 150ms;
}
.pg-button[data-variant="primary"] { background: #7C3AED; color: #fff; border: 1px solid transparent; }
.pg-button[data-variant="primary"]:hover { background: #6D28D9; }
.pg-button[data-variant="secondary"] { background: transparent; color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); }
.pg-button[data-variant="secondary"]:hover { background: var(--vp-c-bg-soft); }
.pg-button[data-variant="ghost"] { background: transparent; color: #A78BFA; border: 1px solid transparent; }
.pg-button[data-variant="ghost"]:hover { background: rgba(124, 58, 237, 0.08); }
.pg-button[data-variant="danger"] { background: #EF4444; color: #fff; border: 1px solid transparent; }
.pg-button[data-variant="danger"]:hover { background: #DC2626; }
.pg-button[data-size="sm"] { height: 32px; padding: 0 12px; font-size: 13px; border-radius: 6px; }
.pg-button[data-size="md"] { height: 40px; padding: 0 20px; font-size: 14px; border-radius: 8px; }
.pg-button[data-size="lg"] { height: 48px; padding: 0 24px; font-size: 16px; border-radius: 8px; }
.pg-button:disabled { opacity: 0.5; cursor: not-allowed; }
.pg-button:focus-visible { outline: 2px solid #7C3AED; outline-offset: 2px; }
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Make functions available globally for inline handlers
  window.updatePlayground = () => {
    const variant = document.getElementById('pg-variant')?.value || 'primary';
    const size = document.getElementById('pg-size')?.value || 'md';
    const disabled = document.getElementById('pg-disabled')?.checked || false;
    const btn = document.getElementById('pg-btn');
    const code = document.getElementById('pg-code');
    if (btn) {
      btn.setAttribute('data-variant', variant);
      btn.setAttribute('data-size', size);
      btn.disabled = disabled;
    }
    if (code) {
      const disabledAttr = disabled ? ' disabled' : '';
      code.textContent = `<Button variant="${variant}" size="${size}"${disabledAttr}>\n  Button\n</Button>`;
    }
  };

  window.copyPlayground = () => {
    const code = document.getElementById('pg-code');
    if (code) {
      navigator.clipboard.writeText(code.textContent || '').then(() => {
        const btn = document.querySelector('.copy-btn');
        if (btn) {
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
        }
      });
    }
  };
});
</script>
