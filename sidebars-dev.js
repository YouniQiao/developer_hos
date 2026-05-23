// @ts-check
// Minimal sidebar for local dev — only release notes.
const { releaseNotesSidebar } = require('./sidebars-releases.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  releaseNotesSidebar,
};

module.exports = sidebars;
