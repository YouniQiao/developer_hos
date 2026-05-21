// @ts-check
// Split build config — only builds the tools-faq docs.
// Usage: npx docusaurus start --config docusaurus.config.tools.js
//        npx docusaurus build --config docusaurus.config.tools.js --out-dir build/.parts/tools-faq

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['tools/**/*.{md,mdx}', 'FAQ/**/*.{md,mdx}'],
  './sidebars-tools-faq.js',
);
