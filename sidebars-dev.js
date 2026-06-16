// @ts-check
// Dev sidebar — DevEco Code/CLI + 跨平台框架预览。

const devecoCodeSidebar = require('./sidebars-tools.js').devecoCodeSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  devecoCodeSidebar,
  crossPlatformSidebar: [
    'resources/cross-platform/overview',
  ],
};

module.exports = sidebars;