// @ts-check
// Dev sidebar — 跨平台框架 + 元服务开发 预览。

const crossPlatformSidebar = [
  'resources/cross-platform/overview',
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  crossPlatformSidebar,
  atomicSidebar: require('./sidebars-atomic.js').atomicSidebar,
};

module.exports = sidebars;