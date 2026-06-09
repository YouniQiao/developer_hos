// @ts-check
// Dev sidebar — 命令行工具预览。

const toolsSidebar = require('./sidebars-tools.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cliToolsSidebar: toolsSidebar.cliToolsSidebar,
  toolsSidebar: toolsSidebar.toolsSidebar,
  aiAssistSidebar: toolsSidebar.aiAssistSidebar,
  devecoTestingSidebar: toolsSidebar.devecoTestingSidebar,
  ohpmSidebar: toolsSidebar.ohpmSidebar,
  cloudDevSidebar: toolsSidebar.cloudDevSidebar,
};

module.exports = sidebars;
