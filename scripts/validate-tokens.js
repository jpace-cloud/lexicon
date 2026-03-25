const fs = require('fs');
const path = require('path');

const TOKENS_DIR = path.join(__dirname, '..', 'tokens');

function readTokenFiles() {
  const result = {};
  for (const layer of ['primitive', 'semantic', 'component']) {
    const dir = path.join(TOKENS_DIR, layer);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const name = path.basename(file, '.json');
      result[`${layer}/${name}`] = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
    }
  }
  return result;
}

function flattenTokens(obj, prefix = '') {
  const entries = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      entries.push(...flattenTokens(value, fullKey));
    } else {
      entries.push([fullKey, value]);
    }
  }
  return entries;
}

function main() {
  console.log('🔍 Validating Lexicon tokens...\n');

  const tokenFiles = readTokenFiles();

  // Build a global lookup where keys are scoped by file name
  // e.g. primitive/radii.json { "sm": "4px" } → lookup["radii.sm"]
  // e.g. primitive/colors.json { "purple": { "500": "#7C3AED" } } → lookup["purple.500"]
  // e.g. semantic/colors.json { "bg": { "primary": "{grey.950}" } } → lookup["bg.primary"]
  const globalLookup = {};
  const allEntries = []; // [{ scopedKey, value, source }]
  let warnings = 0;
  let errors = 0;

  for (const [source, data] of Object.entries(tokenFiles)) {
    const flat = flattenTokens(data);
    for (const [key, value] of flat) {
      // The reference namespace is the key as-is (file contents define the namespace)
      // e.g. in colors.json: purple.500 is referenced as {purple.500}
      // e.g. in radii.json: sm is referenced as {radii.sm} — so we need file-scoped keys too
      const fileName = source.split('/')[1];

      // Register under both the raw key and file-scoped key
      allEntries.push({ key, value, source });

      if (globalLookup[key]) {
        // Duplicate — only warn, don't fail (component files legitimately share keys like "default.bg")
      }
      globalLookup[key] = { value, source };

      // Also register with file prefix for primitives that get referenced by filename
      // e.g. radii.sm, shadows.md, spacing.5
      const scopedKey = `${fileName}.${key}`;
      if (!globalLookup[scopedKey]) {
        globalLookup[scopedKey] = { value, source };
      }
    }
  }

  // Collect all references
  const allRefs = new Set();
  for (const entry of allEntries) {
    if (typeof entry.value === 'string') {
      const refs = entry.value.match(/\{([^}]+)\}/g);
      if (refs) {
        for (const ref of refs) {
          allRefs.add(ref.slice(1, -1));
        }
      }
    }
  }

  // Check unresolved references
  for (const ref of allRefs) {
    if (!globalLookup[ref]) {
      console.error(`  ✗ Unresolved reference: {${ref}}`);
      errors++;
    }
  }

  // Check circular references
  function detectCircular(key, visited = new Set()) {
    if (visited.has(key)) return true;
    const entry = globalLookup[key];
    if (!entry || typeof entry.value !== 'string') return false;
    visited.add(key);
    const refs = entry.value.match(/\{([^}]+)\}/g);
    if (!refs) return false;
    for (const ref of refs) {
      const refKey = ref.slice(1, -1);
      if (detectCircular(refKey, new Set(visited))) {
        console.error(`  ✗ Circular reference: ${key} → {${refKey}}`);
        errors++;
        return true;
      }
    }
    return false;
  }

  for (const key of Object.keys(globalLookup)) {
    detectCircular(key);
  }

  // Summary
  const totalKeys = Object.keys(globalLookup).length;
  console.log(`\n  Total token entries: ${totalKeys}`);
  console.log(`  Total references: ${allRefs.size}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Warnings: ${warnings}`);

  if (errors > 0) {
    console.error('\n✗ Validation failed.\n');
    process.exit(1);
  }

  console.log('\n✓ Validation passed.\n');
}

main();
