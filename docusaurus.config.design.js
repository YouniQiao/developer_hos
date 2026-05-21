// @ts-check
// Split build config — only builds the design docs.
// Usage: npx docusaurus start --config docusaurus.config.design.js
//        npx docusaurus build --config docusaurus.config.design.js --out-dir build/.parts/design

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['design/**/*.{md,mdx}'],
  './sidebars-design.js',
);
