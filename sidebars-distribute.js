// @ts-check
// Sidebar for distribute module

const appDistSidebar = require('./sidebars-app-dist.js').appDistSidebar;
const serviceDistSidebar = require('./sidebars-service-dist.js').serviceDistSidebar;
const contentDistSidebar = require('./sidebars-content-dist.js').contentDistSidebar;
const agcSidebar = require('./sidebars-agc.js').agcSidebar;
const xiaoyiSidebar = require('./sidebars-xiaoyi.js').xiaoyiSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  agcSidebar,
  xiaoyiSidebar,
  appDistSidebar,
  serviceDistSidebar,
  contentDistSidebar,
};

module.exports = sidebars;
