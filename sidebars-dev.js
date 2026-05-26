// @ts-check
// Dev sidebar — 版本说明 + 测试 (for fast local preview).
const testingSidebar = require('./sidebars-testing.js').testingSidebar;
const releaseNotesSidebar = require('./sidebars-releases.js').releaseNotesSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  testingSidebar,
  releaseNotesSidebar,
};

module.exports = sidebars;
