// @ts-check
// Dev sidebar — resources + tools (for fast local preview).
const {
  designResSidebar,
  sampleCodeSidebar,
  templatesSdkSidebar,
  crossPlatformSidebar,
} = require('./sidebars.js');
const { toolsSidebar, aiAssistSidebar, devecoTestingSidebar, cliToolsSidebar } = require('./sidebars-tools.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  designResSidebar,
  sampleCodeSidebar,
  templatesSdkSidebar,
  crossPlatformSidebar,
  toolsSidebar,
  aiAssistSidebar,
  devecoTestingSidebar,
  cliToolsSidebar,
};

module.exports = sidebars;
