// @ts-check
// Sidebar for dev-adv module (industry-solutions + game-dev + release-notes)

const industrySolutionsSidebar = require('./sidebars-industry.js').industrySolutionsSidebar;
const gameDevSidebar = require('./sidebars-gamedev.js').gameDevSidebar;
const releaseNotesSidebar = require('./sidebars-releases.js').releaseNotesSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  industrySolutionsSidebar,
  gameDevSidebar,
  releaseNotesSidebar,
};

module.exports = sidebars;
