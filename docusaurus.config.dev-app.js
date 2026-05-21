// @ts-check
// Split build config — only builds the dev-app docs.
// Usage: npx docusaurus start --config docusaurus.config.dev-app.js
//        npx docusaurus build --config docusaurus.config.dev-app.js --out-dir build/.parts/dev-app

const { createConfig } = require('./docusaurus.base.js');

module.exports = createConfig(
  ['dev/app-dev/**/*.{md,mdx}', 'dev/getting-started/**/*.{md,mdx}', 'dev/testing/**/*.{md,mdx}', 'dev/multi-device/**/*.{md,mdx}', 'dev/ndk-dev/**/*.{md,mdx}', 'dev/atomic-dev/**/*.{md,mdx}', 'dev/faq/**/*.{md,mdx}'],
  './sidebars-dev-app.js',
);
