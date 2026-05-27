// @ts-check
// Dev sidebar — 工具 only (for fast local preview).
const { toolsSidebar, aiAssistSidebar, devecoTestingSidebar, cliToolsSidebar, cloudDevSidebar, ohpmSidebar } = require('./sidebars-tools.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  toolsSidebar,
  aiAssistSidebar,
  devecoTestingSidebar,
  cliToolsSidebar,
  cloudDevSidebar,
  ohpmSidebar,
};

module.exports = sidebars;
