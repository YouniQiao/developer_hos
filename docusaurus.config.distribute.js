// @ts-check
// Split build config — only builds the distribute docs.
// Usage: npx docusaurus start --config docusaurus.config.distribute.js
//        npx docusaurus build --config docusaurus.config.distribute.js --out-dir build/.parts/distribute

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['distribute/**/*.{md,mdx}'],
  './sidebars-distribute.js',
);
