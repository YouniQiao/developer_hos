// @ts-check
// Split build config — only builds the monetize docs.
// Usage: npx docusaurus start --config docusaurus.config.monetize.js
//        npx docusaurus build --config docusaurus.config.monetize.js --out-dir build/.parts/monetize

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['monetize/**/*.{md,mdx}'],
  './sidebars-monetize.js',
);
