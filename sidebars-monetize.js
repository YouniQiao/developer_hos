// @ts-check
// Sidebar for monetize module

const promotionSidebar = require('./sidebars-promotion.js').promotionSidebar;
const monetizationSidebar = require('./sidebars-monetization.js').monetizationSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  promotionSidebar,
  monetizationSidebar,
};

module.exports = sidebars;
