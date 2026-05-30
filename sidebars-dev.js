// @ts-check
// Dev sidebar — 仅推广与变现 (for fast local preview).
const { promotionSidebar } = require('./sidebars-promotion.js');
const { monetizationSidebar } = require('./sidebars-monetization.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  promotionSidebar,
  monetizationSidebar,
};

module.exports = sidebars;
