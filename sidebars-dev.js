// @ts-check
// Dev sidebar — release notes + tools (for fast local preview).
const { releaseNotesSidebar } = require('./sidebars-releases.js');
const { toolsSidebar, aiAssistSidebar, devecoTestingSidebar, cliToolsSidebar } = require('./sidebars-tools.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  releaseNotesSidebar,
  toolsSidebar,
  aiAssistSidebar,
  devecoTestingSidebar,
  cliToolsSidebar,
};

module.exports = sidebars;
