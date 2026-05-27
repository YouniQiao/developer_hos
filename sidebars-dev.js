// @ts-check
// Dev sidebar — 设计 + 版本说明 + 工具 (for fast local preview).
const { toolsSidebar, aiAssistSidebar, devecoTestingSidebar, cliToolsSidebar, cloudDevSidebar, ohpmSidebar } = require('./sidebars-tools.js');
const { designSidebar } = require('./sidebars-design.js');
const { appCompatibilitySidebar } = require('./sidebars-compatibility.js');
const { releaseNotesSidebar } = require('./sidebars-releases.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  designSidebar,
  appCompatibilitySidebar,
  releaseNotesSidebar,
  toolsSidebar,
  aiAssistSidebar,
  devecoTestingSidebar,
  cliToolsSidebar,
  cloudDevSidebar,
  ohpmSidebar,
};

module.exports = sidebars;
