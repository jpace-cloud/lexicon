const fs = require('fs');
const path = require('path');

const CSS_DIR = path.join(__dirname, '..', 'css');

console.log('🔨 Building Lexicon CSS bundle...\n');

// Step 1: Build tokens inline (require the build-tokens script)
require('./build-tokens.js');

// Step 2: Read files
const reset = fs.existsSync(path.join(CSS_DIR, 'reset.css'))
  ? fs.readFileSync(path.join(CSS_DIR, 'reset.css'), 'utf-8')
  : '';
const tokens = fs.readFileSync(path.join(CSS_DIR, 'lexicon.css'), 'utf-8');

// Step 3: Bundle
const bundle = `${reset}\n${tokens}`;
fs.writeFileSync(path.join(CSS_DIR, 'lexicon-bundle.css'), bundle, 'utf-8');

// Step 4: Minify bundle
const minified = bundle
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\n\s*\n/g, '\n')
  .replace(/\n\s*/g, '')
  .replace(/:\s+/g, ':')
  .replace(/;\s*/g, ';')
  .replace(/\{\s*/g, '{')
  .replace(/;\}/g, '}')
  .trim();
fs.writeFileSync(path.join(CSS_DIR, 'lexicon-bundle.min.css'), minified, 'utf-8');

const bundleSize = Buffer.byteLength(bundle, 'utf-8');
const minSize = Buffer.byteLength(minified, 'utf-8');

console.log(`✓ css/lexicon-bundle.css     (${(bundleSize / 1024).toFixed(1)} KB)`);
console.log(`✓ css/lexicon-bundle.min.css (${(minSize / 1024).toFixed(1)} KB)`);
console.log(`  Savings: ${((1 - minSize / bundleSize) * 100).toFixed(0)}%\n`);
