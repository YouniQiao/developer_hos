// @ts-check
// Split build config — only builds the misc docs.
// Usage: npx docusaurus start --config docusaurus.config.misc.js
//        npx docusaurus build --config docusaurus.config.misc.js --out-dir build/.parts/misc

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['quality/**/*.{md,mdx}', 'security/**/*.{md,mdx}', 'architecture/**/*.{md,mdx}', 'overview/**/*.{md,mdx}', 'guides/**/*.{md,mdx}', 'atomic/**/*.{md,mdx}', 'resources/**/*.{md,mdx}', 'experience-suggestions/**/*.{md,mdx}'],
  './sidebars-misc.js',
);
