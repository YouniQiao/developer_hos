// @ts-check
// Dev sidebar — 设计指南预览。

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  designSidebar: require('./sidebars-design.js').designSidebar,
  appCompatibilitySidebar: require('./sidebars-compatibility.js').appCompatibilitySidebar,
};

module.exports = sidebars;
