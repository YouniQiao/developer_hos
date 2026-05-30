// @ts-check
// Dev sidebar — 仅分发与运营 (for fast local preview).
const { agcSidebar } = require('./sidebars-agc.js');
const { appDistSidebar } = require('./sidebars-app-dist.js');
const { contentDistSidebar } = require('./sidebars-content-dist.js');
const { serviceDistSidebar } = require('./sidebars-service-dist.js');
const { xiaoyiSidebar } = require('./sidebars-xiaoyi.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  agcSidebarFull: agcSidebar,
  appDistSidebar,
  contentDistSidebar,
  serviceDistSidebar,
  xiaoyiSidebar,
};

module.exports = sidebars;
