// @ts-check
// Split build config — only builds the dev-adv docs.
// Usage: npx docusaurus start --config docusaurus.config.dev-adv.js
//        npx docusaurus build --config docusaurus.config.dev-adv.js --out-dir build/.parts/dev-adv

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['dev/industry-solutions/**/*.{md,mdx}', 'dev/game-dev/**/*.{md,mdx}', 'dev/release-notes/**/*.{md,mdx}'],
  './sidebars-dev-adv.js',
);
