const fs = require('fs');
const path = require('path');

const TOKENS_DIR = path.join(__dirname, '..', 'tokens');
const CSS_DIR = path.join(__dirname, '..', 'css');

// ── Read all token files ──────────────────────────────────────────────────────

function readTokenFiles() {
  const layers = ['primitive', 'semantic', 'component'];
  const result = {};
  for (const layer of layers) {
    const dir = path.join(TOKENS_DIR, layer);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const name = path.basename(file, '.json');
      result[`${layer}/${name}`] = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
    }
  }
  return result;
}

// ── Flatten tokens to dot-notation keys ───────────────────────────────────────

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

// ── Build global lookup (scoped by filename) ──────────────────────────────────

function buildLookup(tokenFiles) {
  const lookup = {};
  for (const [source, data] of Object.entries(tokenFiles)) {
    const fileName = source.split('/')[1];
    const flat = flattenTokens(data);
    for (const [key, value] of flat) {
      // Register under raw key (e.g., "purple.500", "bg.primary")
      lookup[key] = { value, source };
      // Register under file-scoped key (e.g., "radii.sm", "shadows.md", "spacing.5")
      const scopedKey = `${fileName}.${key}`;
      if (!lookup[scopedKey]) {
        lookup[scopedKey] = { value, source };
      }
    }
  }
  return lookup;
}

// ── Resolve {references} ──────────────────────────────────────────────────────

function resolveValue(value, lookup, visited = new Set()) {
  if (typeof value !== 'string') return String(value);

  return value.replace(/\{([^}]+)\}/g, (match, ref) => {
    if (visited.has(ref)) {
      console.error(`  ⚠ Circular reference detected: ${ref}`);
      return match;
    }
    const entry = lookup[ref];
    if (!entry) {
      console.warn(`  ⚠ Unresolved reference: ${ref}`);
      return match;
    }
    visited.add(ref);
    return resolveValue(String(entry.value), lookup, new Set(visited));
  });
}

// ── Convert key to CSS variable name ──────────────────────────────────────────

function toCSSVar(source, key) {
  const layer = source.split('/')[0];
  const file = source.split('/')[1];

  let prefix;
  if (layer === 'primitive') {
    if (file === 'colors') prefix = 'color';
    else if (file === 'typography') prefix = '';
    else if (file === 'spacing') prefix = 'space';
    else if (file === 'radii') prefix = 'radii';
    else if (file === 'shadows') prefix = 'shadow';
    else if (file === 'motion') prefix = 'motion';
    else prefix = file;
  } else if (layer === 'semantic') {
    prefix = '';
  } else {
    prefix = file;
  }

  const parts = key.split('.').map(p =>
    p.replace(/([A-Z])/g, '-$1').toLowerCase()
  );
  const varName = prefix ? `${prefix}-${parts.join('-')}` : parts.join('-');
  return `--${varName}`;
}

// ── Generate CSS ──────────────────────────────────────────────────────────────

function generateCSS(tokenFiles, lookup) {
  const layers = ['primitive', 'semantic', 'component'];
  const layerLabels = { primitive: 'Primitive', semantic: 'Semantic', component: 'Component' };
  const lines = [];
  let totalTokens = 0;

  lines.push('/* ═══════════════════════════════════════════════');
  lines.push('   Lexicon Design Tokens v1.0');
  lines.push('   The Pace · thepace.io');
  lines.push('   Auto-generated — do not edit manually');
  lines.push('   Run: node scripts/build-tokens.js');
  lines.push('   ═══════════════════════════════════════════════ */');
  lines.push('');
  lines.push(':root {');

  for (const layer of layers) {
    const sources = Object.keys(tokenFiles)
      .filter(k => k.startsWith(`${layer}/`))
      .sort();
    if (sources.length === 0) continue;

    for (const source of sources) {
      const file = source.split('/')[1];
      const label = file.charAt(0).toUpperCase() + file.slice(1);
      lines.push('');
      lines.push(`  /* ── ${layerLabels[layer]}: ${label} ── */`);

      const flat = flattenTokens(tokenFiles[source]);
      for (const [key, rawValue] of flat) {
        const cssVar = toCSSVar(source, key);
        const resolved = resolveValue(String(rawValue), lookup);
        lines.push(`  ${cssVar}: ${resolved};`);
        totalTokens++;
      }
    }
  }

  lines.push('}');
  lines.push('');
  return { css: lines.join('\n'), totalTokens };
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  console.log('🔨 Building Lexicon tokens...\n');

  const tokenFiles = readTokenFiles();
  const lookup = buildLookup(tokenFiles);
  const { css, totalTokens } = generateCSS(tokenFiles, lookup);

  if (!fs.existsSync(CSS_DIR)) fs.mkdirSync(CSS_DIR, { recursive: true });

  fs.writeFileSync(path.join(CSS_DIR, 'lexicon.css'), css, 'utf-8');

  const minified = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\n\s*\n/g, '\n')
    .replace(/\n\s*/g, '')
    .replace(/:\s+/g, ':')
    .replace(/;\s*/g, ';')
    .replace(/\{\s*/g, '{')
    .replace(/;\}/g, '}')
    .trim();
  fs.writeFileSync(path.join(CSS_DIR, 'lexicon.min.css'), minified, 'utf-8');

  const fullSize = Buffer.byteLength(css, 'utf-8');
  const minSize = Buffer.byteLength(minified, 'utf-8');

  console.log(`✓ Generated ${totalTokens} tokens`);
  console.log(`✓ css/lexicon.css     (${(fullSize / 1024).toFixed(1)} KB)`);
  console.log(`✓ css/lexicon.min.css (${(minSize / 1024).toFixed(1)} KB)`);
  console.log('');
}

main();
