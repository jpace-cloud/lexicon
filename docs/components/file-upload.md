# File Upload

A drag-and-drop zone or button for selecting files. Shows file name, type hint, and validation states.

## Preview

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-file-upload" tabindex="0" role="button">
    <span class="lex-file-upload__icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M16 20V8M16 8l-5 5M16 8l5 5"/><path d="M6 22v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>
    </span>
    <span class="lex-file-upload__text">Drop files here or click to browse</span>
    <span class="lex-file-upload__hint">PNG, JPG, PDF up to 10 MB</span>
  </div>
</div>

### With file selected

<div class="component-preview component-preview--col" style="gap: 16px;">
  <div class="lex-file-upload" tabindex="0" role="button">
    <span class="lex-file-upload__icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M16 20V8M16 8l-5 5M16 8l5 5"/><path d="M6 22v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>
    </span>
    <span class="lex-file-upload__text">Drop files here or click to browse</span>
    <span class="lex-file-upload__hint">PNG, JPG, PDF up to 10 MB</span>
    <div class="lex-file-upload__file">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9 2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6L9 2z"/><polyline points="9,2 9,6 13,6"/></svg>
      screenshot.png (2.4 MB)
    </div>
  </div>
</div>

### Error state

<div class="component-preview component-preview--col" style="gap: 8px;">
  <div class="lex-file-upload lex-file-upload--error" tabindex="0" role="button">
    <span class="lex-file-upload__icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M16 20V8M16 8l-5 5M16 8l5 5"/><path d="M6 22v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>
    </span>
    <span class="lex-file-upload__text">Drop files here or click to browse</span>
    <span class="lex-file-upload__hint">PNG, JPG, PDF up to 10 MB</span>
  </div>
  <span class="lex-input__error">File exceeds the 10 MB size limit.</span>
</div>

### Disabled

<div class="component-preview">
  <div class="lex-file-upload lex-file-upload--disabled" tabindex="-1">
    <span class="lex-file-upload__icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M16 20V8M16 8l-5 5M16 8l5 5"/><path d="M6 22v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>
    </span>
    <span class="lex-file-upload__text">Upload disabled</span>
  </div>
</div>

## States

| State | Appearance |
| --- | --- |
| Empty | Dashed border, upload icon, instruction text |
| Hover / Drag-over | Brand-purple border, subtle purple background tint |
| File selected | File name displayed below instructions |
| Error | Red dashed border with error message |
| Disabled | Reduced opacity, no interaction |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `accept` | `string` | -- | Accepted file types (e.g. `'.png,.jpg,.pdf'`) |
| `maxSize` | `number` | -- | Maximum file size in bytes |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `onChange` | `(files: File[]) => void` | -- | File selection handler |
| `error` | `string` | -- | Error message |
| `disabled` | `boolean` | `false` | Disables the upload zone |
| `hint` | `string` | -- | File type/size hint text |

## Code example

### React

```tsx
import { FileUpload } from '@thepace/lexicon/components';

<FileUpload
  accept=".png,.jpg,.pdf"
  maxSize={10 * 1024 * 1024}
  hint="PNG, JPG, PDF up to 10 MB"
  onChange={handleFiles}
/>
```

### Vanilla HTML

```html
<div class="lex-file-upload" tabindex="0" role="button">
  <span class="lex-file-upload__icon"><!-- upload SVG --></span>
  <span class="lex-file-upload__text">Drop files here or click to browse</span>
  <span class="lex-file-upload__hint">PNG, JPG, PDF up to 10 MB</span>
  <input type="file" accept=".png,.jpg,.pdf" hidden />
</div>
```

## CSS class reference

| Class | Purpose |
| --- | --- |
| `.lex-file-upload` | Drop zone container |
| `.lex-file-upload--dragover` | Active drag-over state |
| `.lex-file-upload--error` | Error state |
| `.lex-file-upload--disabled` | Disabled state |
| `.lex-file-upload__icon` | Upload icon |
| `.lex-file-upload__text` | Primary instruction text |
| `.lex-file-upload__hint` | File type/size hint |
| `.lex-file-upload__file` | Selected file display |

## Accessibility

- `role="button"` and `tabindex="0"` make the drop zone keyboard-accessible.
- Hidden `<input type="file">` is triggered on click/Enter/Space.
- Announce file selections with `aria-live="polite"`.
- Error messages linked via `aria-describedby`.

## Guidelines

::: tip Do
- Display accepted file types and size limits clearly.
- Show selected file names with an option to remove.
:::

::: danger Don't
- Don't auto-upload on selection without user confirmation.
- Don't allow arbitrarily large files without server-side validation.
:::
