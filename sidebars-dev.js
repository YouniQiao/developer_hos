// @ts-check
// Dev sidebar — 仅新搬迁的 4 个 section (for fast local preview).

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  atomicSidebar: require('./sidebars-atomic.js').atomicSidebar,
  ndkDevSidebar: require('./sidebars-ndk.js').ndkDevSidebar,
  gameDevSidebar: require('./sidebars-gamedev.js').gameDevSidebar,
};

module.exports = sidebars;
